import { describe, expect, it } from "vitest";
import { contactConfig } from "@/config/contact";
import { siteConfig } from "@/config/site";
import { aboutContent } from "@/content/about";
import { articleCategoryLabels, articles } from "@/content/articles";
import { faqs } from "@/content/faqs";
import { contactBand, homeContent } from "@/content/home";
import { legalDocuments } from "@/content/legal";
import {
  footerNavigation,
  headerCta,
  legalNavigation,
  mainNavigation,
  primaryCta,
} from "@/content/navigation";
import { staticPages } from "@/content/pages";
import { sectors } from "@/content/sectors";
import { services } from "@/content/services";
import { contactErrorMessages } from "@/lib/contact/handle-contact-request";
import { contactMessages } from "@/lib/validation/contact";
import { contactOptions } from "@/lib/validation/contact-options";
import { copyViolations, titleCaseViolations } from "../helpers/copy-rules";

/** Keys holding identifiers, URLs or dates rather than reader-facing copy. */
const skippedKeys = new Set([
  "href",
  "url",
  "path",
  "slug",
  "id",
  "icon",
  "category",
  "key",
  "status",
  "jurisdiction",
  "value",
  "changeFrequency",
  "publishedAt",
  "updatedAt",
  "reviewBy",
  "accessedAt",
  "faqIds",
  "relatedServices",
  "relatedSectors",
]);

/** Keys that hold slug lists in some places and copy blocks in others. */
const slugListKeys = new Set(["services", "featured"]);

/**
 * Short copy fields: headings, labels and one-line descriptions. They carry no
 * commas (client decision, 2026-10-12). Long paragraphs may use commas where
 * a list needs them.
 */
const shortKeys = new Set([
  "title",
  "shortTitle",
  "summary",
  "description",
  "label",
  "tag",
  "badge",
  "titleLead",
  "titleRest",
  "titleAccent",
  "heading",
  "question",
  "cardTitle",
  "cardDescription",
  "linkLabel",
  "allServicesLabel",
  "allSectorsLabel",
  "subtitle",
  "imageAlt",
  "quoteName",
  "quoteRole",
  "role",
  "name",
  "examples",
]);

/** Heading and label fields set in Title Case (client decision, 2026-10-12). */
const titleCaseKeys = new Set([
  "title",
  "shortTitle",
  "label",
  "tag",
  "titleLead",
  "titleRest",
  "titleAccent",
  "heading",
  "cardTitle",
  "linkLabel",
  "allServicesLabel",
  "allSectorsLabel",
  "subtitle",
  "examples",
]);

/** Last object key on a collected path, ignoring array indexes. */
function leafKey(path: string): string {
  return path.replace(/\[\d+\]/g, "").split(".").at(-1) ?? "";
}

function collectStrings(value: unknown, path: string, out: [string, string][]) {
  if (typeof value === "string") {
    out.push([path, value]);
  } else if (Array.isArray(value)) {
    value.forEach((item, index) => collectStrings(item, `${path}[${index}]`, out));
  } else if (value && typeof value === "object") {
    for (const [key, child] of Object.entries(value)) {
      if (skippedKeys.has(key)) continue;
      if (slugListKeys.has(key) && (typeof child === "string" || Array.isArray(child))) continue;
      collectStrings(child, `${path}.${key}`, out);
    }
  }
}

const sources: Record<string, unknown> = {
  site: {
    description: siteConfig.description,
    shortDescription: siteConfig.shortDescription,
  },
  services,
  sectors,
  faqs,
  // Source titles are quoted from official English pages and are exempt.
  articles: articles.map((article) => ({ ...article, sources: [] })),
  articleCategories: Object.values(articleCategoryLabels).map((label) => ({ label })),
  home: homeContent,
  contactBand,
  about: aboutContent,
  legal: legalDocuments,
  pages: Object.values(staticPages).map(({ title, description }) => ({
    title,
    description,
  })),
  navigation: { mainNavigation, footerNavigation, legalNavigation, primaryCta, headerCta },
  formMessages: contactMessages,
  formErrors: contactErrorMessages,
  formOptions: contactOptions,
};

describe("copy rules", () => {
  const strings: [string, string][] = [];
  for (const [name, value] of Object.entries(sources)) collectStrings(value, name, strings);

  it("detects each rule and exempts the official address", () => {
    expect(copyViolations("This is NOT a problem")).toEqual(['"not"']);
    expect(copyViolations("We don't file late")).toEqual(['"not"']);
    expect(copyViolations("Beyond formation")).toEqual(['"beyond"']);
    expect(copyViolations("We also handle tax")).toEqual(['"also"']);
    expect(copyViolations("Moreover the team")).toEqual(['"also"']);
    expect(copyViolations("In conclusion")).toEqual(['"in conclusion"']);
    expect(copyViolations("We are handling your filings")).toEqual(["progressive tense"]);
    expect(copyViolations("The team is preparing returns")).toEqual(["progressive tense"]);
    expect(copyViolations("Form your company and manage your filings")).toEqual([]);
    expect(copyViolations("Formation is the first thing to plan")).toEqual([]);
    expect(copyViolations("Cannot is one word")).toEqual([]);
    expect(copyViolations("Title: text")).toEqual(["colon"]);
    expect(copyViolations("One — two – three")).toEqual(["em dash", "en dash"]);
    expect(copyViolations(`Address ${contactConfig.address.full}`)).toEqual([]);
  });

  it("detects Title Case breaks", () => {
    expect(titleCaseViolations("Invest in the United States With the Right Structure")).toEqual([]);
    expect(titleCaseViolations("One-to-One Sessions for eBay Sellers")).toEqual([]);
    expect(titleCaseViolations("Service scope")).toEqual(["scope"]);
    expect(titleCaseViolations("Year-end Preparation")).toEqual(["end"]);
    expect(titleCaseViolations("a Guide")).toEqual(["a"]);
  });

  it("collects a meaningful amount of copy", () => {
    expect(strings.length).toBeGreaterThan(300);
  });

  it("contains no forbidden words, colons or dashes", () => {
    const violations = strings
      .map(([path, text]) => ({ path, text, rules: copyViolations(text) }))
      .filter((entry) => entry.rules.length > 0);
    expect(violations).toEqual([]);
  });

  it("keeps commas out of headings, labels and one-line descriptions", () => {
    const violations = strings
      .filter(([path, text]) => shortKeys.has(leafKey(path)) && text.includes(","))
      .map(([path, text]) => ({ path, text }));
    expect(violations).toEqual([]);
  });

  it("sets headings and labels in Title Case", () => {
    const violations = strings
      .filter(([path]) => titleCaseKeys.has(leafKey(path)))
      .map(([path, text]) => ({ path, text, words: titleCaseViolations(text) }))
      .filter((entry) => entry.words.length > 0);
    expect(violations).toEqual([]);
  });
});
