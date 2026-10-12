/**
 * Route path definitions. Components and content link through these helpers
 * so a slug change only needs to happen in one place.
 */
export const routes = {
  home: "/",
  about: "/hakkimizda",
  services: "/hizmetler",
  service: (slug: string) => `/hizmetler/${slug}`,
  sectors: "/sektorler",
  sector: (slug: string) => `/sektorler/${slug}`,
  knowledge: "/bilgi-merkezi",
  article: (slug: string) => `/bilgi-merkezi/${slug}`,
  contact: "/iletisim",
  contactForm: "/iletisim#danismanlik-formu",
  privacy: "/gizlilik-politikasi",
  cookies: "/cerez-politikasi",
  kvkk: "/kvkk-aydinlatma-metni",
  legalNotice: "/yasal-uyari",
} as const;

export const CONTACT_FORM_ANCHOR = "danismanlik-formu";
