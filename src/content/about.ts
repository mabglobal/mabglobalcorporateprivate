import type { TitledText } from "@/types/content";

/**
 * About page content. Company background is limited to statements published
 * on the business's own websites (see docs/content-verification.md).
 * Founding year and office network are omitted until confirmed.
 */
export const aboutContent = {
  hero: {
    title: "Your Partner for International Business",
    description: "Formation and compliance support for companies in the US and UK.",
  },
  introduction: {
    tag: "Company",
    title: "Company Overview",
    paragraphs: [
      "MAB Global Partners was founded in Türkiye to support entrepreneurs entering the US market.",
      "The service range grew over time to cover company formation and tax along with accounting and business address services. Registered agent services run under the MAB Registered Agent Inc. brand.",
      "The Istanbul office coordinates formation and compliance work for the United States and the United Kingdom.",
    ],
  },
  philosophy: {
    title: "Our Philosophy",
    quote: "Everyone has the right to accurate information.",
    paragraphs: [
      "Learn how international company processes work in plain language and understand the reason behind every decision.",
      "Our Insights guides draw on official sources and follow the same approach.",
    ],
  },
  focus: {
    tag: "Markets",
    title: "International Focus",
    items: [
      {
        title: "United States",
        description: "LLC and corporation formation with registered agent and EIN support.",
      },
      {
        title: "United Kingdom",
        description: "Limited company formation with Companies House and Corporation Tax support.",
      },
    ] satisfies TitledText[],
  },
  approach: {
    tag: "Approach",
    title: "Our Approach",
    items: [
      { title: "Share Your Needs", description: "Every project starts with your model." },
      { title: "Know the Reasons", description: "See why each structure is suggested." },
      { title: "Follow a Calendar", description: "Plan every deadline from the start." },
      { title: "Know the Limits", description: "Official decisions are never promised." },
    ] satisfies TitledText[],
  },
} as const;
