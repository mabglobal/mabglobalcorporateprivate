import type { MetadataRoute } from "next";
import { disallowedPaths, getCrawlerGroups } from "@/config/seo";
import { isIndexable } from "@/config/site";
import { absoluteUrl } from "./canonical";

/**
 * robots.txt rules. Non-production deployments block all crawling.
 * Production allows public pages and static assets, blocks internal API
 * routes for every agent, and applies the AI crawler policy from config/seo.
 */
export function buildRobots(
  env: NodeJS.ProcessEnv = process.env,
): MetadataRoute.Robots {
  if (!isIndexable(env)) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }

  const disallow = [...disallowedPaths];
  const crawlerRules = getCrawlerGroups(env).map((group) =>
    group.allow
      ? { userAgent: group.userAgents, allow: "/", disallow }
      : { userAgent: group.userAgents, disallow: "/" },
  );

  return {
    rules: [{ userAgent: "*", allow: "/", disallow }, ...crawlerRules],
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
