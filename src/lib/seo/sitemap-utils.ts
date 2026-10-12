import { routes } from "@/config/routes";
import { articles } from "@/content/articles";
import { staticPages } from "@/content/pages";
import { sectors } from "@/content/sectors";
import { services } from "@/content/services";
import type { SitemapRecord } from "@/types/seo";

/**
 * Collects every published, indexable, canonical route from the content
 * registries. Collections only contain published entries, so drafts and
 * entries under review never appear. API routes are never listed.
 */
export function collectSitemapRecords(): SitemapRecord[] {
  const pages: SitemapRecord[] = Object.values(staticPages).map((page) => ({
    path: page.path,
    lastModified: page.updatedAt,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const servicePages: SitemapRecord[] = services.map((service) => ({
    path: routes.service(service.slug),
    lastModified: service.updatedAt,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const sectorPages: SitemapRecord[] = sectors.map((sector) => ({
    path: routes.sector(sector.slug),
    lastModified: sector.updatedAt,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const articlePages: SitemapRecord[] = articles.map((article) => ({
    path: routes.article(article.slug),
    lastModified: article.updatedAt,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...pages, ...servicePages, ...sectorPages, ...articlePages];
}
