import { describe, expect, it } from "vitest";
import { siteConfig } from "@/config/site";
import { contactConfig } from "@/config/contact";
import { services } from "@/content/services";
import { generateLlmsFullTxt, generateLlmsTxt } from "@/lib/llms/generate";
import { absoluteUrl } from "@/lib/seo/canonical";
import { collectSitemapRecords } from "@/lib/seo/sitemap-utils";

const canonicalUrls = new Set([
  ...collectSitemapRecords().map((record) => absoluteUrl(record.path)),
  absoluteUrl("/llms-full.txt"),
]);

describe("llms.txt", () => {
  const text = generateLlmsTxt();
  const lines = text.split("\n");

  it("follows the llms.txt structure", () => {
    expect(lines[0]).toBe(`# ${siteConfig.name}`);
    expect(lines[2]?.startsWith("> ")).toBe(true);
    expect(text.match(/^# /gm)?.length).toBe(1);
    for (const heading of ["## Company", "## Services", "## Industries", "## Insights", "## Optional"]) {
      expect(lines).toContain(heading);
    }
  });

  it("links only to canonical, published resources", () => {
    const links = [...text.matchAll(/\]\((https?:\/\/[^)]+)\)/g)].map((match) => match[1]!);
    expect(links.length).toBeGreaterThan(15);
    for (const link of links) {
      expect(canonicalUrls.has(link), `${link} is not a canonical published URL`).toBe(true);
    }
  });

  it("states the official contact details", () => {
    expect(text).toContain(contactConfig.email);
    expect(text).toContain(contactConfig.address.full);
  });
});

describe("llms-full.txt", () => {
  const text = generateLlmsFullTxt();

  it("includes every published service definition", () => {
    for (const service of services) {
      expect(text).toContain(`## ${service.title}`);
      expect(text).toContain(service.definition);
    }
  });
});
