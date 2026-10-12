import { describe, expect, it } from "vitest";
import { contactConfig } from "@/config/contact";
import { siteConfig } from "@/config/site";
import { aboutContent } from "@/content/about";
import { articles } from "@/content/articles";
import { faqs } from "@/content/faqs";
import { homeContent } from "@/content/home";
import { legalDocuments } from "@/content/legal";
import { footerNavigation, legalNavigation, mainNavigation } from "@/content/navigation";
import { staticPages } from "@/content/pages";
import { sectors } from "@/content/sectors";
import { services } from "@/content/services";
import { contactErrorMessages } from "@/lib/contact/handle-contact-request";
import { contactMessages } from "@/lib/validation/contact";
import { contactOptions } from "@/lib/validation/contact-options";
import { copyViolations } from "../helpers/copy-rules";

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
  "services",
]);

function collectStrings(value: unknown, path: string, out: [string, string][]) {
  if (typeof value === "string") {
    out.push([path, value]);
  } else if (Array.isArray(value)) {
    value.forEach((item, index) => collectStrings(item, `${path}[${index}]`, out));
  } else if (value && typeof value === "object") {
    for (const [key, child] of Object.entries(value)) {
      if (!skippedKeys.has(key)) collectStrings(child, `${path}.${key}`, out);
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
  home: homeContent,
  about: aboutContent,
  legal: legalDocuments,
  pages: Object.values(staticPages).map(({ title, description }) => ({
    title,
    description,
  })),
  navigation: { mainNavigation, footerNavigation, legalNavigation },
  formMessages: contactMessages,
  formErrors: contactErrorMessages,
  formOptions: contactOptions,
};

describe("Turkish copy rules", () => {
  const strings: [string, string][] = [];
  for (const [name, value] of Object.entries(sources)) collectStrings(value, name, strings);

  it("detects each rule and exempts the official address", () => {
    expect(copyViolations("Bu bir sorun DEĞİL")).toEqual(['"değil"']);
    expect(copyViolations("Bunun ötesinde")).toEqual(['"ötesinde"']);
    expect(copyViolations("Ayrıca şunu ekleyelim")).toEqual(['"ayrıca"']);
    expect(copyViolations("Sonuç olarak")).toEqual(['"sonuç olarak"']);
    expect(copyViolations("Başlık: metin")).toEqual(["colon"]);
    expect(copyViolations("Bir — iki – üç")).toEqual(["em dash", "en dash"]);
    expect(copyViolations("Ayrıntılı bilgi")).toEqual([]);
    expect(copyViolations(`Adres ${contactConfig.address.full}`)).toEqual([]);
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
});
