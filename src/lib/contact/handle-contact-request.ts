import { contactConfig } from "@/config/contact";
import type { RateLimiter } from "@/lib/security/rate-limit";
import { clientIpFrom } from "@/lib/security/rate-limit";
import {
  contactMetaSchema,
  type ContactFieldErrors,
  type ContactValidationResult,
} from "@/lib/validation/contact";
import type { SendContactEmail } from "./email-delivery";

/**
 * Contact submission pipeline. The API route wires real dependencies; tests
 * inject fakes. A success response is returned only after the email provider
 * confirms it accepted the message.
 */

export type ContactErrorCode =
  | "invalid_request"
  | "forbidden_origin"
  | "payload_too_large"
  | "validation_failed"
  | "rejected"
  | "rate_limited"
  | "not_configured"
  | "delivery_failed";

export type ContactResponseBody =
  | { ok: true }
  | {
      ok: false;
      code: ContactErrorCode;
      message: string;
      fieldErrors?: ContactFieldErrors;
    };

export interface ContactHandlerDeps {
  validate: (input: unknown) => ContactValidationResult;
  rateLimiter: RateLimiter;
  /** null when the email integration is not configured. */
  sendEmail: SendContactEmail | null;
  /** Canonical origin; submissions from other origins are refused. */
  allowedOrigins: string[];
  minElapsedMs?: number;
  maxBodyBytes?: number;
  log?: (event: string, details: Record<string, unknown>) => void;
}

const fallback = `Talebinizi ${contactConfig.email} adresine e-posta ile de iletebilirsiniz.`;

export const contactErrorMessages: Record<ContactErrorCode, string> = {
  invalid_request: `Talebiniz okunamadı. Lütfen sayfayı yenileyip tekrar deneyin. ${fallback}`,
  forbidden_origin: `Talebiniz doğrulanamadı. Lütfen formu web sitemiz üzerinden gönderin. ${fallback}`,
  payload_too_large: "Mesajınız çok uzun. Lütfen metni kısaltıp tekrar deneyin.",
  validation_failed: "Lütfen işaretli alanları kontrol edin.",
  rejected: `Talebiniz gönderilemedi. Lütfen birkaç saniye bekleyip tekrar deneyin. ${fallback}`,
  rate_limited:
    "Kısa süre içinde çok sayıda talep gönderildi. Lütfen birkaç dakika sonra tekrar deneyin.",
  not_configured: `Form gönderimi şu anda kullanılamıyor. ${fallback}`,
  delivery_failed: `Talebiniz şu anda iletilemedi. Lütfen daha sonra tekrar deneyin. ${fallback}`,
};

function json(body: ContactResponseBody, status: number, extra?: HeadersInit) {
  return Response.json(body, {
    status,
    headers: { "Cache-Control": "no-store", ...extra },
  });
}

function fail(
  code: ContactErrorCode,
  status: number,
  extra?: { fieldErrors?: ContactFieldErrors; headers?: HeadersInit },
) {
  return json(
    {
      ok: false,
      code,
      message: contactErrorMessages[code],
      ...(extra?.fieldErrors ? { fieldErrors: extra.fieldErrors } : {}),
    },
    status,
    extra?.headers,
  );
}

export async function handleContactRequest(
  request: Request,
  deps: ContactHandlerDeps,
): Promise<Response> {
  const {
    validate,
    rateLimiter,
    sendEmail,
    allowedOrigins,
    minElapsedMs = 2000,
    maxBodyBytes = 16_384,
    log = () => {},
  } = deps;

  const origin = request.headers.get("origin");
  if (origin && !allowedOrigins.includes(origin)) {
    log("contact.forbidden_origin", { origin });
    return fail("forbidden_origin", 403);
  }

  if (!request.headers.get("content-type")?.includes("application/json")) {
    return fail("invalid_request", 415);
  }

  const raw = await request.text();
  if (new TextEncoder().encode(raw).byteLength > maxBodyBytes) {
    return fail("payload_too_large", 413);
  }

  let payload: unknown;
  try {
    payload = JSON.parse(raw);
  } catch {
    return fail("invalid_request", 400);
  }
  if (!payload || typeof payload !== "object") {
    return fail("invalid_request", 400);
  }

  const { values, meta } = payload as { values?: unknown; meta?: unknown };
  const parsedMeta = contactMetaSchema.safeParse(meta);
  if (!parsedMeta.success) {
    log("contact.rejected", { reason: "meta" });
    return fail("rejected", 400);
  }
  if (parsedMeta.data.elapsedMs < minElapsedMs) {
    log("contact.rejected", { reason: "too_fast" });
    return fail("rejected", 400);
  }

  const limit = rateLimiter.check(clientIpFrom(request.headers));
  if (!limit.allowed) {
    return fail("rate_limited", 429, {
      headers: { "Retry-After": String(limit.retryAfterSeconds) },
    });
  }

  const validation = validate(values);
  if (!validation.success) {
    return fail("validation_failed", 422, {
      fieldErrors: validation.fieldErrors,
    });
  }

  if (!sendEmail) {
    log("contact.not_configured", {});
    return fail("not_configured", 503);
  }

  const delivery = await sendEmail(validation.data, {
    idempotencyKey: parsedMeta.data.submissionId,
  });
  if (!delivery.ok) {
    log("contact.delivery_failed", {
      reason: delivery.reason,
      status: delivery.status,
    });
    return fail("delivery_failed", 502);
  }

  log("contact.delivered", { id: delivery.id });
  return json({ ok: true }, 200);
}
