import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { copyViolations, titleCaseViolations } from "../helpers/copy-rules";
import { PRODUCTION_ORIGIN, sitemapPaths } from "./helpers";

/**
 * Crawls every URL in the generated sitemap and checks the rendered page:
 * status, language, canonical, headings, structured data, copy rules,
 * Title Case headings, internal links, horizontal overflow and automated
 * accessibility rules.
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

    expect(await page.getAttribute("html", "lang")).toBe("en");

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

    for (const heading of await page.locator("h1:visible, h2:visible, h3:visible, h4:visible").allInnerTexts()) {
      const words = titleCaseViolations(heading.replace(/\s+/g, " ").trim());
      if (words.length > 0) problems.push(`${path} heading "${heading}" breaks Title Case at ${words.join(",")}`);
      if (heading.includes(",")) problems.push(`${path} heading "${heading}" has a comma`);
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
    for (const path of ["/", "/services/uk-company-formation", "/industries/e-commerce", "/contact"]) {
      await page.goto(path);
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
      );
      expect(overflow, `${path} at ${width}px`).toBe(0);
    }
  }
});

/**
 * Descriptions under headings and inside cards stay on one line on common
 * desktop widths (client decision, 2026-10-12). Elements opt in with
 * data-single-line.
 */
test("one-line descriptions fit on one line at 1440px", async ({ page, request }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "Desktop layout only");
  test.setTimeout(180_000);
  await page.setViewportSize({ width: 1440, height: 900 });
  const problems: string[] = [];
  for (const path of await sitemapPaths(request)) {
    await page.goto(path);
    const wrapped = await page.locator("[data-single-line]").evaluateAll((elements) =>
      elements
        .filter((element) => (element as HTMLElement).offsetParent !== null)
        .map((element) => {
          const style = getComputedStyle(element);
          const lines = Math.round(element.getBoundingClientRect().height / parseFloat(style.lineHeight));
          return { text: (element.textContent ?? "").trim(), lines };
        })
        .filter((entry) => entry.lines > 1),
    );
    for (const entry of wrapped) problems.push(`${path} wraps to ${entry.lines} lines: "${entry.text}"`);
  }
  expect(problems).toEqual([]);
});
