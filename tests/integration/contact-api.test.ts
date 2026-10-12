import { describe, expect, it, vi } from "vitest";
import { testEnv } from "../helpers/env";
import {
  buildContactEmail,
  createResendSender,
  readDeliveryConfig,
  type SendContactEmail,
} from "@/lib/contact/email-delivery";
import {
  contactErrorMessages,
  handleContactRequest,
  type ContactHandlerDeps,
} from "@/lib/contact/handle-contact-request";
import { createRateLimiter } from "@/lib/security/rate-limit";
import { createContactValidator } from "@/lib/validation/contact";
import { contactOptions } from "@/lib/validation/contact-options";

const ORIGIN = "https://www.mabglobalpartners.com";

const values = {
  name: "Jane Doe",
  email: "jane@example.com",
  company: "Example Brand",
  service: "tax-advisory",
  sector: "freelancers",
  message: "I would like to discuss the annual filing process for my US LLC.",
};

const meta = {
  website: "",
  elapsedMs: 8000,
  submissionId: "6f1c1f0e-8a52-4a49-9d3b-2b8a1c1e8f10",
};

function request(body: unknown, headers: Record<string, string> = {}) {
  return new Request(`${ORIGIN}/api/contact`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      origin: ORIGIN,
      "x-forwarded-for": "203.0.113.10",
      ...headers,
    },
    body: typeof body === "string" ? body : JSON.stringify(body),
  });
}

function deps(overrides: Partial<ContactHandlerDeps> = {}): ContactHandlerDeps {
  return {
    validate: createContactValidator(contactOptions),
    rateLimiter: createRateLimiter({ limit: 5, windowMs: 60_000 }),
    sendEmail: vi.fn<SendContactEmail>(async () => ({ ok: true, id: "email_123" })),
    allowedOrigins: [ORIGIN],
    ...overrides,
  };
}

describe("POST /api/contact", () => {
  it("returns success only after the provider confirms delivery", async () => {
    const d = deps();
    const response = await handleContactRequest(request({ values, meta }), d);
    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ ok: true });
    expect(d.sendEmail).toHaveBeenCalledWith(
      expect.objectContaining({ email: "jane@example.com", service: "tax-advisory" }),
      { idempotencyKey: meta.submissionId },
    );
    expect(response.headers.get("cache-control")).toBe("no-store");
  });

  it("reports an unconfigured integration instead of pretending to succeed", async () => {
    const response = await handleContactRequest(request({ values, meta }), deps({ sendEmail: null }));
    expect(response.status).toBe(503);
    const body = await response.json();
    expect(body).toMatchObject({ ok: false, code: "not_configured" });
    expect(body.message).toBe(contactErrorMessages.not_configured);
  });

  it("reports provider failures", async () => {
    const response = await handleContactRequest(
      request({ values, meta }),
      deps({ sendEmail: async () => ({ ok: false, reason: "provider_error", status: 500 }) }),
    );
    expect(response.status).toBe(502);
    expect(await response.json()).toMatchObject({ ok: false, code: "delivery_failed" });
  });

  it("returns field errors for invalid input without sending", async () => {
    const d = deps();
    const response = await handleContactRequest(
      request({ values: { ...values, email: "yanlis" }, meta }),
      d,
    );
    expect(response.status).toBe(422);
    const body = await response.json();
    expect(body.code).toBe("validation_failed");
    expect(body.fieldErrors.email).toBeTruthy();
    expect(d.sendEmail).not.toHaveBeenCalled();
  });

  it("rejects honeypot submissions and submissions that arrive too fast", async () => {
    const d = deps();
    const spam = await handleContactRequest(
      request({ values, meta: { ...meta, website: "http://spam.example" } }),
      d,
    );
    const fast = await handleContactRequest(request({ values, meta: { ...meta, elapsedMs: 300 } }), d);
    expect(spam.status).toBe(400);
    expect(fast.status).toBe(400);
    expect(d.sendEmail).not.toHaveBeenCalled();
  });

  it("refuses cross-origin submissions", async () => {
    const response = await handleContactRequest(
      request({ values, meta }, { origin: "https://evil.example" }),
      deps(),
    );
    expect(response.status).toBe(403);
  });

  it("rejects non-JSON, malformed and oversized bodies", async () => {
    const notJson = await handleContactRequest(
      request("name=a", { "content-type": "application/x-www-form-urlencoded" }),
      deps(),
    );
    const malformed = await handleContactRequest(request("{oops"), deps());
    const oversized = await handleContactRequest(
      request({ values: { ...values, message: "a".repeat(20_000) }, meta }),
      deps(),
    );
    expect(notJson.status).toBe(415);
    expect(malformed.status).toBe(400);
    expect(oversized.status).toBe(413);
  });

  it("rate limits repeated submissions from one address", async () => {
    const d = deps({ rateLimiter: createRateLimiter({ limit: 1, windowMs: 60_000 }) });
    expect((await handleContactRequest(request({ values, meta }), d)).status).toBe(200);
    const limited = await handleContactRequest(request({ values, meta }), d);
    expect(limited.status).toBe(429);
    expect(limited.headers.get("retry-after")).toBe("60");
  });
});

describe("Resend delivery", () => {
  it("is disabled until all environment variables are present", () => {
    expect(readDeliveryConfig(testEnv({}))).toBeNull();
    expect(
      readDeliveryConfig(
        testEnv({
          RESEND_API_KEY: "re_test",
          CONTACT_FROM_EMAIL: "form@mabglobalpartners.com",
          CONTACT_TO_EMAIL: "info@mabglobalpartners.com",
        }),
      ),
    ).toEqual({
      apiKey: "re_test",
      from: "form@mabglobalpartners.com",
      to: "info@mabglobalpartners.com",
    });
  });

  it("sends the documented request and requires an id in the response", async () => {
    const fetchImpl = vi.fn(async () => Response.json({ id: "abc" }));
    const send = createResendSender(
      { apiKey: "re_test", from: "Form <form@example.com>", to: "info@example.com" },
      contactOptions,
      fetchImpl as unknown as typeof fetch,
    );
    const result = await send({ ...values }, { idempotencyKey: meta.submissionId });
    expect(result).toEqual({ ok: true, id: "abc" });

    const [url, init] = fetchImpl.mock.calls[0] as unknown as [string, RequestInit];
    expect(url).toBe("https://api.resend.com/emails");
    expect(init.method).toBe("POST");
    const headers = init.headers as Record<string, string>;
    expect(headers.Authorization).toBe("Bearer re_test");
    expect(headers["Idempotency-Key"]).toBe(meta.submissionId);
    const body = JSON.parse(String(init.body));
    expect(body).toMatchObject({ to: ["info@example.com"], reply_to: values.email });

    const missingId = createResendSender(
      { apiKey: "k", from: "f", to: "t" },
      contactOptions,
      (async () => Response.json({})) as unknown as typeof fetch,
    );
    expect((await missingId(values, { idempotencyKey: "x" })).ok).toBe(false);
  });

  it("escapes user input in the HTML email", () => {
    const { html, text } = buildContactEmail(
      { ...values, message: "<script>alert(1)</script>" },
      contactOptions,
    );
    expect(html).not.toContain("<script>");
    expect(html).toContain("&lt;script&gt;");
    expect(text).toContain("Tax Advisory");
  });
});
