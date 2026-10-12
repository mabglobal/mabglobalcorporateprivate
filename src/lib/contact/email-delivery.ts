import { siteConfig } from "@/config/site";
import {
  optionLabel,
  type ContactOptions,
  type ContactSubmission,
} from "@/lib/validation/contact";
import { escapeHtml } from "@/lib/utilities/escape-html";

/**
 * Delivers contact submissions through the Resend REST API
 * (POST https://api.resend.com/emails). Resend is the Vercel Marketplace
 * messaging integration; installing it provisions RESEND_API_KEY.
 * See docs/deployment.md.
 */

export interface DeliveryConfig {
  apiKey: string;
  from: string;
  to: string;
}

export type DeliveryResult =
  | { ok: true; id: string }
  | { ok: false; reason: "provider_error" | "network_error"; status?: number };

export type SendContactEmail = (
  submission: ContactSubmission,
  options: { idempotencyKey: string },
) => Promise<DeliveryResult>;

/** Returns null when the integration is not configured. */
export function readDeliveryConfig(
  env: NodeJS.ProcessEnv = process.env,
): DeliveryConfig | null {
  const apiKey = env.RESEND_API_KEY?.trim();
  const from = env.CONTACT_FROM_EMAIL?.trim();
  const to = env.CONTACT_TO_EMAIL?.trim();
  if (!apiKey || !from || !to) return null;
  return { apiKey, from, to };
}

export function buildContactEmail(
  submission: ContactSubmission,
  options: ContactOptions,
) {
  const rows: [string, string][] = [
    ["Full Name", submission.name],
    ["Email", submission.email],
    ["Company or Brand", submission.company || "Left blank"],
    ["Service", optionLabel(options.services, submission.service)],
    ["Industry", optionLabel(options.sectors, submission.sector)],
  ];

  const subject = `New consultation request from ${submission.name}`;
  const text = [
    `A new consultation request arrived from the ${siteConfig.name} website.`,
    "",
    ...rows.map(([label, value]) => `${label}. ${value}`),
    "",
    "Message",
    submission.message,
  ].join("\n");

  const html = `<!doctype html><html lang="en"><body style="font-family:Arial,sans-serif;color:#202938">
<p>A new consultation request arrived from the ${escapeHtml(siteConfig.name)} website.</p>
<table cellpadding="6" style="border-collapse:collapse">${rows
    .map(
      ([label, value]) =>
        `<tr><th align="left" style="border-bottom:1px solid #CFD7E6">${escapeHtml(label)}</th><td style="border-bottom:1px solid #CFD7E6">${escapeHtml(value)}</td></tr>`,
    )
    .join("")}</table>
<h3>Message</h3>
<p style="white-space:pre-wrap">${escapeHtml(submission.message)}</p>
</body></html>`;

  return { subject, text, html };
}

export function createResendSender(
  config: DeliveryConfig,
  options: ContactOptions,
  fetchImpl: typeof fetch = fetch,
): SendContactEmail {
  return async (submission, { idempotencyKey }) => {
    const { subject, text, html } = buildContactEmail(submission, options);
    try {
      const response = await fetchImpl("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${config.apiKey}`,
          "Content-Type": "application/json",
          "Idempotency-Key": idempotencyKey,
        },
        body: JSON.stringify({
          from: config.from,
          to: [config.to],
          reply_to: submission.email,
          subject,
          text,
          html,
        }),
        signal: AbortSignal.timeout(10_000),
      });

      if (!response.ok) {
        return { ok: false, reason: "provider_error", status: response.status };
      }
      const body = (await response.json()) as { id?: unknown };
      if (typeof body.id !== "string" || body.id.length === 0) {
        return { ok: false, reason: "provider_error", status: response.status };
      }
      return { ok: true, id: body.id };
    } catch {
      return { ok: false, reason: "network_error" };
    }
  };
}
