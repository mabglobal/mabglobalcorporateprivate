/**
 * Route path definitions. Components and content link through these helpers
 * so a slug change only needs to happen in one place.
 */
export const routes = {
  home: "/",
  about: "/about",
  services: "/services",
  service: (slug: string) => `/services/${slug}`,
  sectors: "/industries",
  sector: (slug: string) => `/industries/${slug}`,
  knowledge: "/insights",
  article: (slug: string) => `/insights/${slug}`,
  contact: "/contact",
  contactForm: "/contact#consultation-form",
  privacy: "/privacy-policy",
  cookies: "/cookie-policy",
  dataProtection: "/data-protection-notice",
  legalNotice: "/legal-notice",
} as const;

export const CONTACT_FORM_ANCHOR = "consultation-form";
