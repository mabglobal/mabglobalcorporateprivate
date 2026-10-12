import { NextResponse, type NextRequest } from "next/server";
import { articles } from "@/content/articles";

/**
 * Returns a real 404 status for unknown Insights slugs.
 *
 * The article route is partially prerendered, so an unlisted slug would
 * otherwise stream the shared shell with a 200 status before notFound() runs
 * (a soft 404). Rewriting to an unmatched path renders the not-found page with
 * a 404 before any HTML is sent. See docs/seo-strategy.md.
 */
const publishedSlugs = new Set(articles.map((article) => article.slug));

export const NOT_FOUND_REWRITE_PATH = "/_missing";

export function proxy(request: NextRequest) {
  const slug = decodeURIComponent(request.nextUrl.pathname.split("/")[2] ?? "");
  if (!publishedSlugs.has(slug)) {
    return NextResponse.rewrite(new URL(NOT_FOUND_REWRITE_PATH, request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/insights/:slug",
};
