import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { copyViolations } from "../helpers/copy-rules";
import { PRODUCTION_ORIGIN, sitemapPaths } from "./helpers";

/**
 * Crawls every URL in the generated sitemap and checks the rendered page:
 * status, language, canonical, headings, structured data, copy rules,
 * internal links, horizontal overflow and automated accessibility rules.
 */
test("every sitemap page renders correctly", async ({ page, request }, testInfo) => {
  test.setTimeout(240_000);
  const paths = await sitemapPaths(request);
  expect(paths.length).toBeGreaterThanOrEqual(26);
  const known = new Set(paths);
  const problems: string[] = [];

  for (const path of paths) {
    const response = await page.goto(path);
    if (response?.status() !== 200) problems.push(`${path} status ${response?.status()}`);

    expect(await page.getAttribute("html", "lang")).toBe("tr");

    const canonical = await page.getAttribute('link[rel="canonical"]', "href");
    const expected = `${PRODUCTION_ORIGIN}${path === "/" ? "" : path}`;
    if (canonical !== expected) problems.push(`${path} canonical ${canonical}`);

    const robots = await page.getAttribute('meta[name="robots"]', "content");
    if (robots !== "index, follow") problems.push(`${path} robots ${robots}`);

    if ((await page.locator("h1").count()) !== 1) problems.push(`${path} h1 count`);
    if ((await page.locator('meta[property="og:image"]').count()) < 1) {
      problems.push(`${path} missing og:image`);
    }

    for (const raw of await page.locator('script[type="application/ld+json"]').allTextContents()) {
      try {
        const data = JSON.parse(raw);
        if (data["@context"] !== "https://schema.org") problems.push(`${path} JSON-LD context`);
      } catch {
        problems.push(`${path} invalid JSON-LD`);
      }
    }

    const text = await page.locator("body").innerText();
    for (const line of text.split("\n")) {
      const rules = copyViolations(line);
      if (rules.length > 0) problems.push(`${path} copy ${rules.join(",")} in "${line.trim()}"`);
    }

    const internal = await page
      .locator('a[href^="/"]')
      .evaluateAll((anchors) => anchors.map((a) => a.getAttribute("href")!));
    for (const href of internal) {
      const target = href.split("#")[0]!;
      if (!known.has(target)) problems.push(`${path} links to unknown ${href}`);
    }

    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    if (overflow > 0) problems.push(`${path} overflows horizontally by ${overflow}px`);

    if (testInfo.project.name === "desktop") {
      // Orange buttons carry white text by explicit client decision (3.4:1).
      // They are marked data-brand-accent and excluded; see docs/architecture.md.
      const axe = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
        .exclude("[data-brand-accent]")
        .analyze();
      for (const violation of axe.violations) {
        problems.push(
          `${path} axe ${violation.id} (${violation.impact}) ${violation.nodes
            .map((node) => node.target.join(" "))
            .slice(0, 3)
            .join(" | ")}`,
        );
      }
    }
  }

  expect(problems).toEqual([]);
});

test("pages stay usable at narrow and tablet widths", async ({ page }) => {
  for (const width of [320, 768, 1024]) {
    await page.setViewportSize({ width, height: 900 });
    for (const path of ["/", "/hizmetler/ingiltere-sirket-kurulusu", "/sektorler/e-ticaret", "/iletisim"]) {
      await page.goto(path);
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
      );
      expect(overflow, `${path} at ${width}px`).toBe(0);
    }
  }
});
