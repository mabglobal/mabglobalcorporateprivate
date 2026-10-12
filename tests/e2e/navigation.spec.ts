import { expect, test } from "@playwright/test";

const mainLinks = [
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Industries", path: "/industries" },
  { label: "Insights", path: "/insights" },
  { label: "Contact Us", path: "/contact" },
];

test.describe("desktop navigation", () => {
  test.skip(({ isMobile }) => isMobile, "Desktop navigation only");

  test("main navigation links reach their pages and mark the active item", async ({ page }) => {
    await page.goto("/");
    const nav = page.getByRole("navigation", { name: "Main menu" });
    for (const link of mainLinks) {
      await nav.getByRole("link", { name: link.label, exact: true }).click();
      await expect(page).toHaveURL(link.path);
      // Next.js keeps the previous route mounted but hidden after client
      // navigation, so only visible headings are counted.
      await expect(page.locator("h1:visible")).toHaveCount(1);
      await expect(nav.getByRole("link", { name: link.label, exact: true })).toHaveAttribute(
        "aria-current",
        "page",
      );
    }
  });

  test("hero CTA leads to the contact form and the services link to the index", async ({ page }) => {
    await page.goto("/");
    const hero = page.locator("section").first();
    await hero.getByRole("link", { name: "Schedule a Consultation" }).click();
    await expect(page).toHaveURL("/contact#consultation-form");
    await expect(page.getByRole("heading", { name: "Consultation Request" })).toBeVisible();

    await page.goto("/");
    await page.getByRole("main").getByRole("link", { name: /^All Services/ }).click();
    await expect(page).toHaveURL("/services");
  });

  test("service cards open the service page", async ({ page }) => {
    await page.goto("/services");
    await page.getByRole("main").getByRole("link", { name: "Registered Agent", exact: true }).click();
    await expect(page).toHaveURL("/services/registered-agent");
    await expect(page.getByRole("navigation", { name: "Breadcrumb" })).toContainText("Services");
  });

  test("skip link moves focus to the main content", async ({ page, browserName }) => {
    await page.goto("/");
    // Safari moves focus to links with Option+Tab by default.
    await page.keyboard.press(browserName === "webkit" ? "Alt+Tab" : "Tab");
    const skip = page.getByRole("link", { name: "Skip to Content" });
    await expect(skip).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(page).toHaveURL("/#content");
  });
});

test.describe("mobile navigation", () => {
  test.skip(({ isMobile }) => !isMobile, "Mobile menu only");

  test("hamburger menu opens, closes with Escape and navigates", async ({ page }) => {
    await page.goto("/");
    const open = page.getByRole("button", { name: "Open menu" });
    const dialog = page.getByRole("dialog", { name: "Menu" });

    await open.click();
    await expect(dialog).toBeVisible();
    await expect(open).toHaveAttribute("aria-expanded", "true");
    await page.keyboard.press("Escape");
    await expect(dialog).toBeHidden();
    await expect(open).toHaveAttribute("aria-expanded", "false");

    await open.click();
    await dialog.getByRole("button", { name: "Close menu" }).click();
    await expect(dialog).toBeHidden();

    await open.click();
    await dialog.getByRole("link", { name: "Industries", exact: true }).click();
    await expect(page).toHaveURL("/industries");
    await expect(dialog).toBeHidden();
  });

  test("menu CTA leads to the contact form", async ({ page }) => {
    await page.goto("/about");
    await page.getByRole("button", { name: "Open menu" }).click();
    await page.getByRole("dialog", { name: "Menu" }).getByRole("link", { name: "Book a Consultation" }).click();
    await expect(page).toHaveURL("/contact#consultation-form");
  });
});

test("service dropdown opens on keyboard focus and lists every service", async ({ page, isMobile }) => {
  test.skip(isMobile, "Desktop navigation only");
  await page.goto("/");
  const nav = page.getByRole("navigation", { name: "Main menu" });
  await nav.getByRole("link", { name: "Services", exact: true }).focus();
  const sub = nav.getByRole("link", { name: "Registered Agent", exact: true });
  await expect(sub).toBeVisible();
  await sub.click();
  await expect(page).toHaveURL("/services/registered-agent");
});

test("FAQ accordion works with the keyboard", async ({ page }) => {
  await page.goto("/");
  const first = page.locator("details").first();
  const summary = first.locator("summary");
  await summary.focus();
  await page.keyboard.press("Enter");
  await expect(first).toHaveAttribute("open", "");
  await expect(first.locator("p")).toBeVisible();
  await page.keyboard.press("Space");
  await expect(first).not.toHaveAttribute("open", "");
});

test("unknown routes return a 404 page with a 404 status", async ({ page }) => {
  for (const path of ["/insights/missing-guide", "/services/missing-service", "/missing-page"]) {
    const response = await page.goto(path);
    expect(response?.status(), path).toBe(404);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText("Page Not Found");
    await expect(page.locator('meta[name="robots"]').first()).toHaveAttribute("content", /noindex/);
  }
});

test("published articles are still served", async ({ page }) => {
  const response = await page.goto("/insights/what-is-a-registered-agent");
  expect(response?.status()).toBe(200);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "What Is a Registered Agent and Why Do You Need One?",
  );
});
