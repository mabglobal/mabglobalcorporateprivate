/**
 * Site-wide identity and environment configuration.
 *
 * The canonical host is read from NEXT_PUBLIC_SITE_URL so preview and
 * production deployments never disagree about absolute URLs. Indexing is only
 * enabled for the production deployment (see isIndexable).
 */

const DEFAULT_SITE_URL = "https://www.mabglobalpartners.com";

function normalizeSiteUrl(value: string | undefined): string {
  const raw = (value ?? "").trim() || DEFAULT_SITE_URL;
  const url = new URL(raw);
  return `${url.protocol}//${url.host}`;
}

export const siteConfig = {
  name: "MAB Global Partners",
  legalNamePending: true,
  url: normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL),
  locale: "en_US",
  language: "en",
  description:
    "MAB Global Partners helps entrepreneurs and companies set up and run businesses in the United States and the United Kingdom with company formation and registered agent services along with tax and accounting support.",
  shortDescription:
    "Company formation and registered agent services with tax and accounting support in the US and UK.",
  founderName: "Mehmet Akif Birkan",
  relatedBrands: [
    {
      name: "MAB Registered Agent Inc.",
      url: "https://www.mabregisteredagent.com",
      description:
        "The MAB Global Partners brand for registered agent services.",
    },
  ],
  focusMarkets: ["United States", "United Kingdom"],
} as const;

/**
 * Indexing is allowed only on the production deployment. Vercel sets
 * VERCEL_ENV automatically; SITE_ENV covers self-hosted production builds.
 */
export function isIndexable(env: NodeJS.ProcessEnv = process.env): boolean {
  return env.SITE_ENV === "production" || env.VERCEL_ENV === "production";
}
