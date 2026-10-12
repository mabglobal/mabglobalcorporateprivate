/**
 * Contact form limits and option types. Kept free of the validation library so
 * the form can render without loading it (see contact-form.tsx).
 */
export const contactLimits = {
  nameMin: 2,
  nameMax: 120,
  emailMax: 254,
  companyMax: 160,
  messageMin: 20,
  messageMax: 3000,
} as const;

export interface ContactOption {
  value: string;
  label: string;
}

export interface ContactOptions {
  services: ContactOption[];
  sectors: ContactOption[];
}

export interface ContactSubmission {
  name: string;
  email: string;
  company: string;
  service: string;
  sector: string;
  message: string;
}
export type ContactField = keyof ContactSubmission;
export type ContactFieldErrors = Partial<Record<ContactField, string>>;
