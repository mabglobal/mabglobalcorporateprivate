import { contactConfig } from "@/config/contact";

/**
 * Copy rules for public-facing text (see docs/content-model.md). They carry
 * the client's earlier Turkish rules over to English: no negative contrast
 * ("not"), no "beyond", no filler connectors ("also", "moreover"), no
 * concluding phrases and no progressive tense; copy uses the imperative.
 * The official address is exempt because it is reproduced verbatim.
 */
export const forbiddenCopyPatterns: { label: string; pattern: RegExp }[] = [
  { label: '"not"', pattern: /\bnot\b|n['’]t\b/u },
  { label: '"beyond"', pattern: /\bbeyond\b/u },
  { label: '"also"', pattern: /\b(?:also|additionally|moreover|furthermore)\b/u },
  { label: '"in conclusion"', pattern: /\b(?:in conclusion|as a result)\b/u },
  // Progressive tense ("we are handling") is avoided; copy uses imperative
  // forms ("form your company") and simple present statements instead.
  {
    label: "progressive tense",
    pattern: /\b(?:am|is|are|was|were|we['’]re|you['’]re|they['’]re)\s+(?!(?:some|no|any|every)thing\b)\w+ing\b/u,
  },
  { label: "colon", pattern: /:/u },
  { label: "em dash", pattern: /—/u },
  { label: "en dash", pattern: /–/u },
];

export function copyViolations(text: string): string[] {
  const normalized = text
    .replaceAll(contactConfig.address.full, "")
    .replaceAll(contactConfig.address.streetAddress, "")
    .toLowerCase();
  return forbiddenCopyPatterns
    .filter(({ pattern }) => pattern.test(normalized))
    .map(({ label }) => label);
}

/** Words that stay lowercase inside a Title Case heading (APA style). */
const minorWords = new Set([
  "a", "an", "the", "and", "but", "or", "nor", "for", "so", "yet",
  "as", "at", "by", "in", "of", "off", "on", "per", "to", "up", "via", "vs",
]);

/** Brand names whose official spelling starts in lowercase. */
const lowercaseBrands = new Set(["eBay"]);

/**
 * Returns the words of a heading that break Title Case: every word starts
 * with a capital letter except minor words after the first position.
 * Hyphenated compounds capitalize each part ("Year-End", "One-to-One").
 */
export function titleCaseViolations(text: string): string[] {
  const words = text.split(/\s+/u).filter(Boolean);
  const violations: string[] = [];
  words.forEach((raw, wordIndex) => {
    const word = raw.replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}.]+$/gu, "");
    word.split("-").forEach((part, partIndex) => {
      if (!part || lowercaseBrands.has(part)) return;
      if (!/^\p{Ll}/u.test(part)) return;
      const first = wordIndex === 0 && partIndex === 0;
      if (!first && minorWords.has(part)) return;
      violations.push(part);
    });
  });
  return violations;
}
