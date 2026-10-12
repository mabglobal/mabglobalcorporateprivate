import { expect, test } from "@playwright/test";
import { PRODUCTION_ORIGIN, sitemapPaths } from "./helpers";

test.describe("crawler resources", () => {
  test.skip(({ isMobile }) => isMobile, "Runs once");

  test("robots.txt references the sitemap and blocks the API", async ({ request }) => {
    const response = await request.get("/robots.txt");
    expect(response.status()).toBe(200);
    const body = await response.text();
    expect(body).toContain(`Sitemap: ${PRODUCTION_ORIGIN}/sitemap.xml`);
    expect(body).toMatch(/User-Agent: \*\nAllow: \/\nDisallow: \/api\//);
    expect(body).toContain("User-Agent: OAI-SearchBot");
    expect(body).not.toMatch(/User-Agent: \*\nDisallow: \/\n/);
  });

  test("sitemap lists only canonical production URLs that respond", async ({ request }) => {
    const xml = await (await request.get("/sitemap.xml")).text();
    const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]!);
    expect(locs.length).toBeGreaterThanOrEqual(24);
    for (const loc of locs) {
      expect(loc.startsWith(PRODUCTION_ORIGIN)).toBe(true);
      expect(loc).not.toContain("/api/");
    }
    for (const path of await sitemapPaths(request)) {
      expect((await request.get(path)).status(), path).toBe(200);
    }
  });

  test("llms.txt and llms-full.txt are served as UTF-8 text with valid links", async ({ request }) => {
    for (const file of ["/llms.txt", "/llms-full.txt"]) {
      const response = await request.get(file);
      expect(response.status()).toBe(200);
      expect(response.headers()["content-type"]).toContain("text/plain; charset=utf-8");
    }
    const llms = await (await request.get("/llms.txt")).text();
    expect(llms.startsWith("# MAB Global Partners\n")).toBe(true);
    const links = [...llms.matchAll(/\]\((https:\/\/[^)]+)\)/g)].map((m) => new URL(m[1]!));
    for (const link of links) {
      expect(link.origin).toBe(PRODUCTION_ORIGIN);
      expect((await request.get(link.pathname)).status(), link.pathname).toBe(200);
    }
  });

  test("API routes are excluded from indexing", async ({ request }) => {
    const response = await request.get("/api/contact");
    expect(response.status()).toBe(405);
    expect(response.headers()["x-robots-tag"]).toBe("noindex, nofollow");
  });

  test("social images and icons are generated", async ({ request }) => {
    for (const path of ["/opengraph-image", "/twitter-image", "/apple-icon", "/icon.svg", "/favicon.ico", "/manifest.webmanifest"]) {
      expect((await request.get(path)).status(), path).toBe(200);
    }
  });

  test("security headers are set", async ({ request }) => {
    const headers = (await request.get("/")).headers();
    expect(headers["x-content-type-options"]).toBe("nosniff");
    expect(headers["x-frame-options"]).toBe("DENY");
    expect(headers["content-security-policy"]).toContain("frame-ancestors 'none'");
    expect(headers["x-powered-by"]).toBeUndefined();
  });
});
