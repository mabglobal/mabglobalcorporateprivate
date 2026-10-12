import { routes } from "@/config/routes";
import type { IsoDate } from "@/types/content";
import type { ChangeFrequency } from "@/types/seo";

/**
 * Registry of fixed (non-collection) pages. Page metadata, the sitemap and
 * llms.txt read titles, descriptions and modification dates from here.
 */
export interface StaticPage {
  key: StaticPageKey;
  path: string;
  title: string;
  description: string;
  updatedAt: IsoDate;
  changeFrequency: ChangeFrequency;
  priority: number;
  absoluteTitle?: boolean;
}

export type StaticPageKey =
  | "home"
  | "about"
  | "services"
  | "sectors"
  | "knowledge"
  | "contact"
  | "privacy"
  | "cookies"
  | "kvkk"
  | "legalNotice";

export const staticPages: Record<StaticPageKey, StaticPage> = {
  home: {
    key: "home",
    path: routes.home,
    title: "MAB Global Partners | Company Formation and Tax Support in the US and UK",
    description:
      "Form your company in the US or the UK and manage tax and accounting with registered agent support from one team.",
    updatedAt: "2026-10-12",
    changeFrequency: "monthly",
    priority: 1,
    absoluteTitle: true,
  },
  about: {
    key: "about",
    path: routes.about,
    title: "About Us",
    description:
      "MAB Global Partners helps entrepreneurs and companies with company formation and compliance in the US and UK.",
    updatedAt: "2026-10-12",
    changeFrequency: "yearly",
    priority: 0.7,
  },
  services: {
    key: "services",
    path: routes.services,
    title: "Services",
    description:
      "Company formation and tax advisory in the US and UK with accounting and registered agent support.",
    updatedAt: "2026-10-12",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  sectors: {
    key: "sectors",
    path: routes.sectors,
    title: "Industries",
    description:
      "Company and compliance solutions shaped around the way your industry works in the US and UK.",
    updatedAt: "2026-10-12",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  knowledge: {
    key: "knowledge",
    path: routes.knowledge,
    title: "Insights",
    description:
      "Guides on company formation and compliance in the US and UK based on official sources.",
    updatedAt: "2026-10-12",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  contact: {
    key: "contact",
    path: routes.contact,
    title: "Contact and Consultation Request",
    description:
      "Contact MAB Global Partners to request a consultation for your US or UK company.",
    updatedAt: "2026-10-12",
    changeFrequency: "yearly",
    priority: 0.8,
  },
  privacy: {
    key: "privacy",
    path: routes.privacy,
    title: "Privacy Policy",
    description:
      "How the MAB Global Partners website processes and protects personal data.",
    updatedAt: "2026-10-12",
    changeFrequency: "yearly",
    priority: 0.3,
  },
  cookies: {
    key: "cookies",
    path: routes.cookies,
    title: "Cookie Policy",
    description:
      "Information on cookies and similar technologies on the MAB Global Partners website.",
    updatedAt: "2026-10-12",
    changeFrequency: "yearly",
    priority: 0.3,
  },
  kvkk: {
    key: "kvkk",
    path: routes.kvkk,
    title: "KVKK Privacy Notice",
    description:
      "Notice under Turkish Personal Data Protection Law No. 6698 for data you share through the contact form and email.",
    updatedAt: "2026-10-12",
    changeFrequency: "yearly",
    priority: 0.3,
  },
  legalNotice: {
    key: "legalNotice",
    path: routes.legalNotice,
    title: "Legal Notice",
    description:
      "Terms of use and the informational purpose of content on the MAB Global Partners website.",
    updatedAt: "2026-10-12",
    changeFrequency: "yearly",
    priority: 0.2,
  },
};
