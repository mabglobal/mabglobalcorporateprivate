import * as z from "zod";
import {
  contactLimits,
  type ContactField,
  type ContactFieldErrors,
  type ContactOption,
  type ContactOptions,
  type ContactSubmission,
} from "./contact-limits";

export {
  contactLimits,
  type ContactField,
  type ContactFieldErrors,
  type ContactOption,
  type ContactOptions,
  type ContactSubmission,
};

/**
 * Contact form schema shared by the client form and the API route, so both
 * sides enforce identical rules and Turkish error messages. The option lists
 * are passed in (see contact-options.ts) so the client bundle does not include
 * the full service and sector content.
 */


export const contactMessages = {
  name: "Lütfen adınızı ve soyadınızı yazın.",
  nameMax: `Ad soyad en fazla ${contactLimits.nameMax} karakter olabilir.`,
  email: "Lütfen geçerli bir e-posta adresi yazın.",
  company: `Şirket veya marka adı en fazla ${contactLimits.companyMax} karakter olabilir.`,
  service: "Lütfen ilgilendiğiniz hizmeti seçin.",
  sector: "Lütfen faaliyet alanınızı seçin.",
  messageMin: `Mesajınız en az ${contactLimits.messageMin} karakter olmalıdır.`,
  messageMax: `Mesajınız en fazla ${contactLimits.messageMax} karakter olabilir.`,
} as const;

function values(options: ContactOption[]): [string, ...string[]] {
  if (options.length === 0) throw new Error("Contact options cannot be empty.");
  return options.map((option) => option.value) as [string, ...string[]];
}

export function createContactSchema(options: ContactOptions) {
  return z.object({
    name: z
      .string({ error: contactMessages.name })
      .trim()
      .min(contactLimits.nameMin, { error: contactMessages.name })
      .max(contactLimits.nameMax, { error: contactMessages.nameMax }),
    email: z
      .string({ error: contactMessages.email })
      .trim()
      .toLowerCase()
      .max(contactLimits.emailMax, { error: contactMessages.email })
      .pipe(z.email({ error: contactMessages.email })),
    company: z
      .string()
      .trim()
      .max(contactLimits.companyMax, { error: contactMessages.company })
      .optional()
      .default(""),
    service: z.enum(values(options.services), { error: contactMessages.service }),
    sector: z.enum(values(options.sectors), { error: contactMessages.sector }),
    message: z
      .string({ error: contactMessages.messageMin })
      .trim()
      .min(contactLimits.messageMin, { error: contactMessages.messageMin })
      .max(contactLimits.messageMax, { error: contactMessages.messageMax }),
  });
}


/** Anti-spam fields sent alongside the form values. */
export const contactMetaSchema = z.object({
  /** Honeypot. Humans never see or fill this field. */
  website: z.string().max(0).optional().default(""),
  /** Milliseconds since the form was rendered on the client. */
  elapsedMs: z.number().int().nonnegative(),
  /** Client generated id used as the email provider idempotency key. */
  submissionId: z.uuid(),
});

export type ContactValidationResult =
  | { success: true; data: ContactSubmission }
  | { success: false; fieldErrors: ContactFieldErrors };

export function createContactValidator(options: ContactOptions) {
  const schema = createContactSchema(options);
  return function validateContact(input: unknown): ContactValidationResult {
    const result = schema.safeParse(input);
    if (result.success) {
      return { success: true, data: result.data };
    }
    const flattened = z.flattenError(result.error).fieldErrors as Record<
      string,
      string[] | undefined
    >;
    const fieldErrors: ContactFieldErrors = {};
    for (const [field, messages] of Object.entries(flattened)) {
      if (messages?.[0]) {
        fieldErrors[field as ContactField] = messages[0];
      }
    }
    return { success: false, fieldErrors };
  };
}

export function optionLabel(options: ContactOption[], value: string): string {
  return options.find((option) => option.value === value)?.label ?? value;
}
