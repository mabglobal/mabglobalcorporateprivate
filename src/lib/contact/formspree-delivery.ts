import { contactConfig } from "@/config/contact";
import { optionLabel, type ContactOptions } from "@/lib/validation/contact";
import type { SendContactEmail } from "./email-delivery";

/**
 * Delivers contact submissions to Formspree (https://formspree.io), where the
 * client reads them in the dashboard and receives them by email. The site's
 * own API route still validates, rate-limits and filters spam first, and the
 * form shows success only after Formspree confirms the submission.
 */

const FORMSPREE_ENDPOINT = /^https:\/\/formspree\.io\/f\/[A-Za-z0-9]+$/;

/**
 * FORMSPREE_ENDPOINT overrides the default endpoint from src/config/contact.ts.
 * An empty value or "off" disables delivery (used by the end-to-end tests so
 * they never post real submissions). Anything that is not a Formspree form URL
 * is rejected, so a misconfiguration can never send data elsewhere.
 */
export function readFormspreeEndpoint(env: NodeJS.ProcessEnv = process.env): string | null {
  const raw = env.FORMSPREE_ENDPOINT;
  const value = (raw === undefined ? contactConfig.formspreeEndpoint : raw).trim();
  if (value === "" || value.toLowerCase() === "off") return null;
  return FORMSPREE_ENDPOINT.test(value) ? value : null;
}

export function createFormspreeSender(
  endpoint: string,
  options: ContactOptions,
  fetchImpl: typeof fetch = fetch,
): SendContactEmail {
  return async (submission) => {
    try {
      const response = await fetchImpl(endpoint, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          name: submission.name,
          // Formspree uses the "email" field as the reply-to address.
          email: submission.email,
          company: submission.company || "Left blank",
          service: optionLabel(options.services, submission.service),
          industry: optionLabel(options.sectors, submission.sector),
          message: submission.message,
          _subject: `New consultation request from ${submission.name}`,
        }),
        signal: AbortSignal.timeout(10_000),
      });
      const body = (await response.json().catch(() => null)) as { ok?: unknown } | null;
      if (!response.ok || body?.ok === false) {
        return { ok: false, reason: "provider_error", status: response.status };
      }
      return { ok: true, id: "formspree" };
    } catch {
      return { ok: false, reason: "network_error" };
    }
  };
}
