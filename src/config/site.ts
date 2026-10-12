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
  locale: "tr_TR",
  language: "tr",
  description:
    "MAB Global Partners, Amerika ve İngiltere'de şirket kuruluşu, vergi danışmanlığı, muhasebe ve registered agent hizmetleriyle uluslararası iş yapan girişimcileri ve şirketleri destekler.",
  shortDescription:
    "Amerika ve İngiltere'de şirket kuruluşu, vergi, muhasebe ve registered agent hizmetleri.",
  founderName: "Mehmet Akif Birkan",
  relatedBrands: [
    {
      name: "MAB Registered Agent Inc.",
      url: "https://www.mabregisteredagent.com",
      description:
        "MAB Global Partners bünyesinde registered agent hizmetleri sunan marka.",
    },
  ],
  focusMarkets: ["Amerika Birleşik Devletleri", "Birleşik Krallık"],
} as const;

/**
 * Indexing is allowed only on the production deployment. Vercel sets
 * VERCEL_ENV automatically; SITE_ENV covers self-hosted production builds.
 */
export function isIndexable(env: NodeJS.ProcessEnv = process.env): boolean {
  return env.SITE_ENV === "production" || env.VERCEL_ENV === "production";
}
