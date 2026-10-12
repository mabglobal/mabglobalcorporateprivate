/**
 * SEO defaults and the crawler access policy.
 *
 * Crawler groups follow each operator's published documentation
 * (reviewed 2026-10-12). See docs/llm-discoverability.md for the reasoning.
 */

export const seoDefaults = {
  titleTemplate: "%s | MAB Global Partners",
  defaultTitle:
    "MAB Global Partners | Amerika ve İngiltere'de Şirket Kuruluşu, Vergi ve Muhasebe",
  twitterCard: "summary_large_image",
  socialImageAlt:
    "MAB Global Partners, Amerika ve İngiltere'de şirket kuruluşu, vergi ve muhasebe hizmetleri",
} as const;

/** Paths that no crawler should request. */
export const disallowedPaths = ["/api/"] as const;

export interface CrawlerGroup {
  id: string;
  purpose: string;
  userAgents: string[];
  allow: boolean;
}

/**
 * Business decision pending confirmation: public marketing content may be used
 * by search, answer engines and model training. Set ALLOW_AI_TRAINING_CRAWLERS
 * to "false" at build time to opt out of training crawlers while keeping
 * search and user-initiated retrieval.
 */
export function getCrawlerGroups(
  env: NodeJS.ProcessEnv = process.env,
): CrawlerGroup[] {
  const allowTraining = env.ALLOW_AI_TRAINING_CRAWLERS !== "false";

  return [
    {
      id: "ai-search",
      purpose:
        "Search and answer engines that index pages to cite and link them.",
      userAgents: ["OAI-SearchBot", "Claude-SearchBot", "PerplexityBot"],
      allow: true,
    },
    {
      id: "ai-user-retrieval",
      purpose:
        "Fetchers acting on a user's request. Operators note robots.txt may not apply.",
      userAgents: ["ChatGPT-User", "Claude-User", "Perplexity-User"],
      allow: true,
    },
    {
      id: "ai-training",
      purpose:
        "Crawlers or control tokens for training generative models. Blocking them does not affect search inclusion.",
      userAgents: [
        "GPTBot",
        "ClaudeBot",
        "Google-Extended",
        "Applebot-Extended",
        "CCBot",
      ],
      allow: allowTraining,
    },
  ];
}
