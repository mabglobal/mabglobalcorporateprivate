import type { TitledText } from "@/types/content";

/**
 * About page content. Company background is limited to statements published
 * on the business's own websites (see docs/content-verification.md).
 * Founding year and office network are omitted until confirmed.
 */
export const aboutContent = {
  hero: {
    title: "Helping You Build and Run Your US Company",
    description: "Form your US company and keep every filing on schedule with one team.",
  },
  introduction: {
    tag: "Company",
    title: "Company Overview",
    paragraphs: [
      "MAB Global Partners was founded in Türkiye to support entrepreneurs entering the US market.",
      "The service range grew over time to cover company formation and tax along with accounting and business address services. Registered agent services run under the MAB Registered Agent Inc. brand.",
      "The Istanbul office coordinates formation and compliance work for the United States.",
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
