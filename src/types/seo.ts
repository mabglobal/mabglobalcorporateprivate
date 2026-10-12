import type { IsoDate } from "./content";

export interface PageSeoInput {
  title: string;
  description: string;
  /** Path relative to the site root, starting with "/". */
  path: string;
  type?: "website" | "article";
  /** Use the title as-is without the brand template. */
  absoluteTitle?: boolean;
  noindex?: boolean;
  publishedTime?: IsoDate;
  modifiedTime?: IsoDate;
}

export type ChangeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

export interface SitemapRecord {
  path: string;
  lastModified: IsoDate;
  changeFrequency: ChangeFrequency;
  priority: number;
}
