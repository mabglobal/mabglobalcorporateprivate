import { expect, test } from "@playwright/test";

const mainLinks = [
  { label: "Hakkımızda", path: "/hakkimizda" },
  { label: "Hizmetler", path: "/hizmetler" },
  { label: "Sektörler", path: "/sektorler" },
  { label: "Bilgi Merkezi", path: "/bilgi-merkezi" },
  { label: "İletişim", path: "/iletisim" },
];

test.describe("desktop navigation", () => {
  test.skip(({ isMobile }) => isMobile, "Desktop navigation only");

  test("main navigation links reach their pages and mark the active item", async ({ page }) => {
    await page.goto("/");
    const nav = page.getByRole("navigation", { name: "Ana menü" });
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

  test("hero CTAs lead to the contact form and the services index", async ({ page }) => {
    await page.goto("/");
    const hero = page.locator("section").first();
    await hero.getByRole("link", { name: "Danışmanlık Talep Et" }).click();
    await expect(page).toHaveURL("/iletisim#danismanlik-formu");
    await expect(page.getByRole("heading", { name: "Danışmanlık talebi" })).toBeVisible();

    await page.goto("/");
    await page.getByRole("link", { name: "Hizmetleri Keşfedin" }).click();
    await expect(page).toHaveURL("/hizmetler");
  });

  test("service cards open the service page", async ({ page }) => {
    await page.goto("/hizmetler");
    await page.getByRole("link", { name: "Registered Agent Hizmetleri" }).click();
    await expect(page).toHaveURL("/hizmetler/registered-agent");
    await expect(page.getByRole("navigation", { name: "Sayfa konumu" })).toContainText("Hizmetler");
  });

  test("skip link moves focus to the main content", async ({ page, browserName }) => {
    await page.goto("/");
    // Safari moves focus to links with Option+Tab by default.
    await page.keyboard.press(browserName === "webkit" ? "Alt+Tab" : "Tab");
    const skip = page.getByRole("link", { name: "İçeriğe geç" });
    await expect(skip).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(page).toHaveURL("/#icerik");
  });
});

test.describe("mobile navigation", () => {
  test.skip(({ isMobile }) => !isMobile, "Mobile menu only");

  test("hamburger menu opens, closes with Escape and navigates", async ({ page }) => {
    await page.goto("/");
    const open = page.getByRole("button", { name: "Menüyü aç" });
    const dialog = page.getByRole("dialog", { name: "Menü" });

    await open.click();
    await expect(dialog).toBeVisible();
    await expect(open).toHaveAttribute("aria-expanded", "true");
    await page.keyboard.press("Escape");
    await expect(dialog).toBeHidden();
    await expect(open).toHaveAttribute("aria-expanded", "false");

    await open.click();
    await dialog.getByRole("button", { name: "Menüyü kapat" }).click();
    await expect(dialog).toBeHidden();

    await open.click();
    await dialog.getByRole("link", { name: "Sektörler", exact: true }).click();
    await expect(page).toHaveURL("/sektorler");
    await expect(dialog).toBeHidden();
  });

  test("menu CTA leads to the contact form", async ({ page }) => {
    await page.goto("/hakkimizda");
    await page.getByRole("button", { name: "Menüyü aç" }).click();
    await page.getByRole("dialog", { name: "Menü" }).getByRole("link", { name: "Danışmanlık Talep Et" }).click();
    await expect(page).toHaveURL("/iletisim#danismanlik-formu");
  });
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

test("unknown routes return a Turkish 404 page with a 404 status", async ({ page }) => {
  for (const path of ["/bilgi-merkezi/olmayan-rehber", "/hizmetler/olmayan-hizmet", "/olmayan-sayfa"]) {
    const response = await page.goto(path);
    expect(response?.status(), path).toBe(404);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText("Aradığınız sayfa bulunamadı.");
    await expect(page.locator('meta[name="robots"]').first()).toHaveAttribute("content", /noindex/);
  }
});

test("published articles are still served", async ({ page }) => {
  const response = await page.goto("/bilgi-merkezi/registered-agent-nedir");
  expect(response?.status()).toBe(200);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Registered Agent Nedir ve Neden Gereklidir?",
  );
});
