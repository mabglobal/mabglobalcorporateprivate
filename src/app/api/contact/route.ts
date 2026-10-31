import { siteConfig } from "@/config/site";
import {
  createResendSender,
  readDeliveryConfig,
  type SendContactEmail,
} from "@/lib/contact/email-delivery";
import { createFormspreeSender, readFormspreeEndpoint } from "@/lib/contact/formspree-delivery";
import { handleContactRequest } from "@/lib/contact/handle-contact-request";
import { createRateLimiter } from "@/lib/security/rate-limit";
import { createContactValidator } from "@/lib/validation/contact";
import { contactOptions } from "@/lib/validation/contact-options";

/** Five submissions per address in ten minutes, per server instance. */
const rateLimiter = createRateLimiter({ limit: 5, windowMs: 10 * 60 * 1000 });
const validate = createContactValidator(contactOptions);

function allowedOrigins(): string[] {
  const origins = new Set([siteConfig.url]);
  const extra = process.env.CONTACT_ALLOWED_ORIGINS?.split(",") ?? [];
  for (const origin of extra) {
    if (origin.trim()) origins.add(origin.trim());
  }
  for (const host of [
    process.env.VERCEL_URL,
    process.env.VERCEL_BRANCH_URL,
    process.env.VERCEL_PROJECT_PRODUCTION_URL,
  ]) {
    if (host) origins.add(`https://${host}`);
  }
  if (process.env.NODE_ENV !== "production") {
    origins.add("http://localhost:3000");
  }
  return [...origins];
}

/** Formspree first (client's inbox), Resend when only Resend is configured. */
function deliveryChannel(): SendContactEmail | null {
  const formspree = readFormspreeEndpoint();
  if (formspree) return createFormspreeSender(formspree, contactOptions);
  const resend = readDeliveryConfig();
  return resend ? createResendSender(resend, contactOptions) : null;
}

export async function POST(request: Request) {
  return handleContactRequest(request, {
    validate,
    rateLimiter,
    sendEmail: deliveryChannel(),
    allowedOrigins: allowedOrigins(),
    log: (event, details) => {
      console.info(JSON.stringify({ event, ...details }));
    },
  });
}
