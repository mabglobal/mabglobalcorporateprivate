import type { APIRequestContext } from "@playwright/test";

export const PRODUCTION_ORIGIN = "https://www.mabglobalpartners.com";

/** Reads the generated sitemap and returns its URLs as local paths. */
export async function sitemapPaths(request: APIRequestContext): Promise<string[]> {
  const response = await request.get("/sitemap.xml");
  const xml = await response.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => {
    const url = new URL(match[1]!);
    return url.pathname;
  });
}
