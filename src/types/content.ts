/**
 * Content model types. Every public content entry carries a publication status;
 * only "published" entries are rendered, linked, listed in the sitemap or
 * exposed through llms.txt.
 */

export type PublicationStatus = "published" | "review" | "draft";

/** ISO 8601 calendar date (YYYY-MM-DD) of the last real content change. */
export type IsoDate = `${number}-${number}-${number}`;

export interface SeoFields {
  /** Page title without the brand suffix; the layout template appends it. */
  title: string;
  description: string;
}

export type IconName =
  | "building"
  | "landmark"
  | "receipt"
  | "calculator"
  | "shield"
  | "map-pin"
  | "globe"
  | "shopping-bag"
  | "ship"
  | "laptop"
  | "cpu"
  | "rocket"
  | "factory"
  | "compass"
  | "layers"
  | "calendar"
  | "file-check"
  | "help";

export interface TitledText {
  title: string;
  description: string;
}

export type ServiceSlug =
  | "amerika-sirket-kurulusu"
  | "ingiltere-sirket-kurulusu"
  | "vergi-danismanligi"
  | "muhasebe-hizmetleri"
  | "registered-agent"
  | "is-adresi-ve-sirket-operasyonlari"
  | "uluslararasi-is-danismanligi";

export type SectorSlug =
  | "e-ticaret"
  | "ihracat-ve-lojistik"
  | "serbest-calisanlar"
  | "teknoloji-sirketleri"
  | "girisimciler-ve-yatirimcilar"
  | "kobiler-ve-kurumsal-isletmeler";

export type Jurisdiction = "us" | "uk" | "us-uk";

export interface Service {
  slug: ServiceSlug;
  title: string;
  /** Short label for cards, menus and form options. */
  shortTitle: string;
  icon: IconName;
  jurisdiction: Jurisdiction;
  /** Card description, one or two sentences. */
  summary: string;
  /** Concise factual definition used at the top of the page and in llms-full.txt. */
  definition: string;
  intro: string[];
  audience: TitledText[];
  scope: TitledText[];
  process: TitledText[];
  documents?: string[];
  considerations: string[];
  relatedServices: ServiceSlug[];
  relatedSectors: SectorSlug[];
  faqIds: string[];
  /** Optional outbound reference to a verified sister brand. */
  externalReference?: { label: string; href: string };
  /** Shown on the homepage services grid. */
  featured: boolean;
  seo: SeoFields;
  status: PublicationStatus;
  updatedAt: IsoDate;
}

export interface Sector {
  slug: SectorSlug;
  title: string;
  shortTitle: string;
  icon: IconName;
  summary: string;
  intro: string[];
  /** Representative audience examples shown as a list. */
  examples: string[];
  needs: TitledText[];
  services: ServiceSlug[];
  considerations: string[];
  faqIds: string[];
  seo: SeoFields;
  status: PublicationStatus;
  updatedAt: IsoDate;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  status: PublicationStatus;
}

export interface SourceReference {
  title: string;
  publisher: string;
  url: string;
  /** Date the source was last checked against the article. */
  accessedAt: IsoDate;
}

export interface ArticleSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
}

export type ArticleCategory =
  | "amerika-sirket-kurulusu"
  | "ingiltere-sirket-kurulusu"
  | "uluslararasi-vergi"
  | "muhasebe-ve-uyum"
  | "e-ticaret"
  | "ihracat-ve-lojistik"
  | "serbest-calisanlar"
  | "teknoloji-sirketleri";

export interface ArticleAuthor {
  /** Organizational attribution unless a verified person is approved. */
  type: "organization" | "person";
  name: string;
}

export interface Article {
  slug: string;
  title: string;
  summary: string;
  category: ArticleCategory;
  author: ArticleAuthor;
  publishedAt: IsoDate;
  updatedAt: IsoDate;
  /** Date by which the article must be re-checked against its sources. */
  reviewBy: IsoDate;
  sections: ArticleSection[];
  sources: SourceReference[];
  relatedLinks: { label: string; href: string }[];
  seo: SeoFields;
  status: PublicationStatus;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role?: string;
  company?: string;
  /** Written approval from the customer is required before publication. */
  approval: { approvedAt: IsoDate; reference: string };
  status: PublicationStatus;
}

export interface LegalSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
}

export interface LegalDocument {
  key: "privacy" | "cookies" | "kvkk" | "legalNotice";
  intro: string;
  sections: LegalSection[];
}
