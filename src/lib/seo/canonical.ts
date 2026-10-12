import { siteConfig } from "@/config/site";

/**
 * Builds an absolute canonical URL on the configured production host.
 * Query strings and fragments are dropped so tracking parameters never
 * produce alternative canonical URLs. Trailing slashes are removed except
 * for the root.
 */
export function absoluteUrl(path = "/", base: string = siteConfig.url): string {
  if (!path.startsWith("/")) {
    throw new Error(`Canonical paths must start with "/": received "${path}"`);
  }
  const url = new URL(path, base);
  url.search = "";
  url.hash = "";
  const pathname =
    url.pathname.length > 1 ? url.pathname.replace(/\/+$/, "") : "";
  return `${url.origin}${pathname}`;
}
