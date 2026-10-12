import { afterEach, describe, expect, it, vi } from "vitest";
import { testEnv } from "../helpers/env";
import { siteConfig } from "@/config/site";
import { routes } from "@/config/routes";
import { articles } from "@/content/articles";
import { staticPages } from "@/content/pages";
import { sectors } from "@/content/sectors";
import { services } from "@/content/services";
import { absoluteUrl } from "@/lib/seo/canonical";
import {
  buildMetadata,
  buildSectorMetadata,
  buildServiceMetadata,
  buildStaticPageMetadata,
} from "@/lib/seo/metadata";
import { buildRobots } from "@/lib/seo/robots";
import { collectSitemapRecords } from "@/lib/seo/sitemap-utils";

afterEach(() => {
  vi.unstubAllEnvs();
});

describe("absoluteUrl", () => {
  it("builds canonical URLs on the production host", () => {
    expect(siteConfig.url).toBe("https://www.mabglobalpartners.com");
    expect(absoluteUrl("/")).toBe("https://www.mabglobalpartners.com");
    expect(absoluteUrl("/hizmetler/registered-agent")).toBe(
      "https://www.mabglobalpartners.com/hizmetler/registered-agent",
    );
  });

  it("drops query strings, fragments and trailing slashes", () => {
    expect(absoluteUrl("/hizmetler/?utm_source=x#ust")).toBe(
      "https://www.mabglobalpartners.com/hizmetler",
    );
  });

  it("rejects relative paths", () => {
    expect(() => absoluteUrl("hizmetler")).toThrow();
  });
});

describe("page metadata", () => {
  const allMetadata = [
    ...Object.values(staticPages).map(buildStaticPageMetadata),
    ...services.map((service) => buildServiceMetadata(service.slug)),
    ...sectors.map((sector) => buildSectorMetadata(sector.slug)),
    ...articles.map((article) =>
      buildMetadata({
        title: article.seo.title,
        description: article.seo.description,
        path: routes.article(article.slug),
        type: "article",
      }),
    ),
  ];

  it("gives every indexable page a unique title and description", () => {
    const titles = allMetadata.map((m) => JSON.stringify(m.title));
    const descriptions = allMetadata.map((m) => m.description);
    expect(new Set(titles).size).toBe(titles.length);
    expect(new Set(descriptions).size).toBe(descriptions.length);
  });

  it("keeps descriptions within a search-friendly length", () => {
    for (const metadata of allMetadata) {
      expect(metadata.description!.length).toBeGreaterThan(70);
      expect(metadata.description!.length).toBeLessThanOrEqual(170);
    }
  });

  it("sets an absolute canonical URL and social images on every page", () => {
    for (const metadata of allMetadata) {
      const canonical = String(metadata.alternates?.canonical);
      expect(canonical.startsWith(siteConfig.url)).toBe(true);
      expect(metadata.openGraph?.url).toBe(canonical);
      expect(metadata.openGraph?.images).toBeTruthy();
      expect(metadata.twitter?.images).toBeTruthy();
    }
  });

  it("is noindex outside production", () => {
    vi.stubEnv("SITE_ENV", "");
    vi.stubEnv("VERCEL_ENV", "preview");
    const metadata = buildStaticPageMetadata(staticPages.home);
    expect(metadata.robots).toEqual({ index: false, follow: false });
  });

  it("is indexable in production", () => {
    vi.stubEnv("VERCEL_ENV", "production");
    const metadata = buildStaticPageMetadata(staticPages.services);
    expect(metadata.robots).toEqual({ index: true, follow: true });
  });
});

describe("sitemap records", () => {
  const records = collectSitemapRecords();
  const paths = records.map((record) => record.path);

  it("lists each published route exactly once", () => {
    expect(new Set(paths).size).toBe(paths.length);
    for (const service of services) expect(paths).toContain(routes.service(service.slug));
    for (const sector of sectors) expect(paths).toContain(routes.sector(sector.slug));
    for (const article of articles) expect(paths).toContain(routes.article(article.slug));
    for (const page of Object.values(staticPages)) expect(paths).toContain(page.path);
  });

  it("never lists API routes, fragments or query strings", () => {
    for (const path of paths) {
      expect(path.startsWith("/api")).toBe(false);
      expect(path).not.toMatch(/[?#]/);
    }
  });

  it("uses real ISO modification dates", () => {
    for (const record of records) {
      expect(record.lastModified).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(Number.isNaN(Date.parse(record.lastModified))).toBe(false);
    }
  });
});

describe("robots.txt", () => {
  it("blocks all crawling outside production", () => {
    const robots = buildRobots(testEnv({ VERCEL_ENV: "preview" }));
    expect(robots.rules).toEqual([{ userAgent: "*", disallow: "/" }]);
    expect(robots.sitemap).toBeUndefined();
  });

  it("allows public pages, blocks /api/ and references the sitemap in production", () => {
    const robots = buildRobots(testEnv({ VERCEL_ENV: "production" }));
    const rules = Array.isArray(robots.rules) ? robots.rules : [robots.rules];
    expect(robots.sitemap).toBe("https://www.mabglobalpartners.com/sitemap.xml");
    expect(rules[0]).toEqual({ userAgent: "*", allow: "/", disallow: ["/api/"] });
    for (const rule of rules) {
      if (rule.allow) expect(rule.disallow).toEqual(["/api/"]);
    }
    const search = rules.find((rule) => [rule.userAgent].flat().includes("OAI-SearchBot"));
    expect(search?.allow).toBe("/");
  });

  it("can opt out of AI training crawlers without affecting search agents", () => {
    const robots = buildRobots(
      testEnv({ VERCEL_ENV: "production", ALLOW_AI_TRAINING_CRAWLERS: "false" }),
    );
    const rules = Array.isArray(robots.rules) ? robots.rules : [robots.rules];
    const training = rules.find((rule) => [rule.userAgent].flat().includes("GPTBot"));
    const search = rules.find((rule) => [rule.userAgent].flat().includes("Claude-SearchBot"));
    expect(training).toEqual(expect.objectContaining({ disallow: "/" }));
    expect(training?.allow).toBeUndefined();
    expect(search?.allow).toBe("/");
  });
});
