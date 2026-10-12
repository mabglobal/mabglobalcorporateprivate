import type { MetadataRoute } from "next";
import { isIndexable } from "@/config/site";
import { absoluteUrl } from "@/lib/seo/canonical";
import { collectSitemapRecords } from "@/lib/seo/sitemap-utils";

/** XML sitemap generated from the published content registries. */
export default function sitemap(): MetadataRoute.Sitemap {
  if (!isIndexable()) return [];
  return collectSitemapRecords().map((record) => ({
    url: absoluteUrl(record.path),
    lastModified: record.lastModified,
    changeFrequency: record.changeFrequency,
    priority: record.priority,
  }));
}
