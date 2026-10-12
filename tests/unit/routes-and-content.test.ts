import { existsSync, readdirSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { describe, expect, it } from "vitest";
import { routes } from "@/config/routes";
import { articles } from "@/content/articles";
import { findMissingFaqIds, faqs, homepageFaqIds } from "@/content/faqs";
import {
  footerNavigation,
  legalNavigation,
  mainNavigation,
  sectorNavigation,
  serviceNavigation,
} from "@/content/navigation";
import { sectors } from "@/content/sectors";
import { services } from "@/content/services";
import { testimonials } from "@/content/testimonials";
import { collectSitemapRecords } from "@/lib/seo/sitemap-utils";

const appDir = join(process.cwd(), "src/app");

/** Every page.tsx under src/app, converted to its URL path. */
function pageRoutes(dir = appDir): string[] {
  const found: string[] = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) found.push(...pageRoutes(full));
    else if (entry === "page.tsx") {
      const rel = relative(appDir, dir).split(sep).join("/");
      found.push(rel ? `/${rel}` : "/");
    }
  }
  return found;
}

const sitemapPaths = new Set(collectSitemapRecords().map((record) => record.path));

function resolvesToPage(href: string): boolean {
  const path = href.split("#")[0] || "/";
  return sitemapPaths.has(path);
}

describe("route registry", () => {
  const filesystemRoutes = pageRoutes();

  it("has a page file for every static and collection route", () => {
    for (const path of sitemapPaths) {
      const direct = filesystemRoutes.includes(path);
      const dynamicArticle =
        path.startsWith(`${routes.knowledge}/`) &&
        filesystemRoutes.includes(`${routes.knowledge}/[slug]`);
      expect(direct || dynamicArticle, `missing page for ${path}`).toBe(true);
    }
  });

  it("lists every page file in the sitemap, so no page is orphaned", () => {
    for (const path of filesystemRoutes) {
      if (path.includes("[")) continue;
      expect(sitemapPaths.has(path), `${path} is not in the sitemap`).toBe(true);
    }
  });

  it("does not expose API routes in navigation", () => {
    const links = [
      ...mainNavigation,
      ...serviceNavigation,
      ...sectorNavigation,
      ...legalNavigation,
      ...footerNavigation.flatMap((group) => group.items),
    ];
    for (const link of links) {
      expect(link.href.startsWith("/api")).toBe(false);
      expect(resolvesToPage(link.href), `${link.href} does not resolve`).toBe(true);
    }
  });

  it("keeps the contact form anchor on an existing page", () => {
    expect(resolvesToPage(routes.contactForm)).toBe(true);
    expect(existsSync(join(appDir, "api/contact/route.ts"))).toBe(true);
  });
});

describe("content integrity", () => {
  it("references only published FAQs", () => {
    const referenced = [
      ...homepageFaqIds,
      ...services.flatMap((service) => service.faqIds),
      ...sectors.flatMap((sector) => sector.faqIds),
    ];
    expect(findMissingFaqIds(referenced)).toEqual([]);
    expect(new Set(faqs.map((faq) => faq.id)).size).toBe(faqs.length);
  });

  it("links services and sectors to existing entries", () => {
    const serviceSlugs = new Set(services.map((service) => service.slug));
    const sectorSlugs = new Set(sectors.map((sector) => sector.slug));
    for (const service of services) {
      for (const slug of service.relatedServices) expect(serviceSlugs.has(slug)).toBe(true);
      for (const slug of service.relatedSectors) expect(sectorSlugs.has(slug)).toBe(true);
      expect(service.relatedServices).not.toContain(service.slug);
    }
    for (const sector of sectors) {
      for (const slug of sector.services) expect(serviceSlugs.has(slug)).toBe(true);
    }
  });

  it("gives each service and sector distinct content", () => {
    const intros = [...services, ...sectors].map((entry) => entry.intro.join(" "));
    expect(new Set(intros).size).toBe(intros.length);
    for (const service of services) {
      expect(service.scope.length).toBeGreaterThanOrEqual(4);
      expect(service.considerations.length).toBeGreaterThanOrEqual(3);
      expect(service.intro.length).toBeGreaterThanOrEqual(2);
    }
  });

  it("publishes articles only with official sources, valid links and review dates", () => {
    expect(articles.length).toBeGreaterThan(0);
    for (const article of articles) {
      expect(article.sources.length).toBeGreaterThan(0);
      for (const source of article.sources) {
        expect(source.url.startsWith("https://")).toBe(true);
      }
      for (const link of article.relatedLinks) {
        expect(resolvesToPage(link.href), `${article.slug} links to ${link.href}`).toBe(true);
      }
      expect(article.reviewBy > article.updatedAt).toBe(true);
      expect(article.updatedAt >= article.publishedAt).toBe(true);
    }
  });

  it("publishes no testimonial without a recorded approval", () => {
    for (const testimonial of testimonials) {
      expect(testimonial.approval.reference.length).toBeGreaterThan(0);
    }
  });
});
