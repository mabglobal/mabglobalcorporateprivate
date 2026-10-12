import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { brandColors } from "@/config/brand";
import { contactConfig } from "@/config/contact";
import { siteConfig } from "@/config/site";
import { articles } from "@/content/articles";
import { services } from "@/content/services";
import { routes } from "@/config/routes";
import {
  articleNode,
  breadcrumbNode,
  graph,
  organizationNode,
  serviceNode,
} from "@/lib/seo/structured-data";

describe("design tokens", () => {
  const css = readFileSync(join(process.cwd(), "src/styles/tokens.css"), "utf8");
  const tokenMap: Record<keyof typeof brandColors, string> = {
    navy: "navy",
    navyDeep: "navy-deep",
    line: "line",
    white: "white",
    ink: "ink",
    accent: "accent",
  };

  it("keeps src/config/brand.ts in sync with tokens.css", () => {
    for (const [key, token] of Object.entries(tokenMap)) {
      const match = css.match(new RegExp(`--color-${token}:\\s*(#[0-9a-fA-F]{6});`));
      expect(match?.[1]?.toUpperCase(), token).toBe(
        brandColors[key as keyof typeof brandColors],
      );
    }
  });

  it("uses the authoritative brand palette", () => {
    expect(brandColors).toMatchObject({
      navy: "#262F40",
      accent: "#F45800",
      navyDeep: "#1C2432",
      line: "#CFD7E6",
      white: "#FFFFFF",
      ink: "#202938",
    });
  });

  it("defines no grey tokens (client decision, 2026-10-12)", () => {
    for (const token of ["slate", "muted", "surface", "surface-strong", "gray", "grey"]) {
      expect(css).not.toMatch(new RegExp(`--color-${token}:`));
    }
  });
});

describe("structured data", () => {
  const organization = organizationNode() as unknown as Record<string, unknown>;

  it("uses the verified entity details only", () => {
    expect(organization.name).toBe(siteConfig.name);
    expect(organization.url).toBe(siteConfig.url);
    expect(organization.email).toBe(contactConfig.email);
    for (const field of [
      "telephone",
      "aggregateRating",
      "review",
      "foundingDate",
      "legalName",
      "taxID",
      "vatID",
      "sameAs",
      "award",
    ]) {
      expect(organization[field], field).toBeUndefined();
    }
  });

  it("produces serializable graphs with absolute URLs", () => {
    const service = services[0]!;
    const article = articles[0]!;
    const data = graph([
      organization as never,
      serviceNode(service, routes.service(service.slug)),
      articleNode(article, routes.article(article.slug)),
      breadcrumbNode([
        { name: "Ana Sayfa", path: "/" },
        { name: service.title, path: routes.service(service.slug) },
      ]),
    ]);
    const json = JSON.parse(JSON.stringify(data));
    expect(json["@context"]).toBe("https://schema.org");
    const urls = JSON.stringify(json).match(/"(?:url|item)":"([^"]+)"/g) ?? [];
    for (const entry of urls) expect(entry).toMatch(/"https:\/\//);
  });

  it("cites the article sources", () => {
    const article = articles[0]!;
    const node = articleNode(article, routes.article(article.slug)) as unknown as Record<string, unknown>;
    expect(Array.isArray(node.citation)).toBe(true);
    expect((node.citation as unknown[]).length).toBe(article.sources.length);
  });
});
