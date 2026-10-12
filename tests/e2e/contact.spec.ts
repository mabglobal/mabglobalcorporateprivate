import { expect, test, type Page } from "@playwright/test";

async function fillValidForm(page: Page) {
  await page.getByLabel("Ad Soyad").fill("Ayşe Yılmaz");
  await page.getByLabel("E-posta Adresi").fill("ayse@example.com");
  await page.getByLabel("İlgilendiğiniz Hizmet").selectOption("amerika-sirket-kurulusu");
  await page.getByLabel("Faaliyet Alanınız").selectOption("e-ticaret");
  await page
    .getByLabel("Mesajınız")
    .fill("Amazon üzerinden ABD pazarına satış yapmak için şirket kurmayı planlıyoruz.");
}

test.describe("contact form", () => {
  test("shows Turkish validation messages and focuses the first invalid field", async ({ page }) => {
    await page.goto("/iletisim");
    await page.getByRole("button", { name: "Danışmanlık Talep Et" }).click();
    await expect(page.getByText("Lütfen adınızı ve soyadınızı yazın.")).toBeVisible();
    await expect(page.getByText("Lütfen geçerli bir e-posta adresi yazın.")).toBeVisible();
    await expect(page.getByText("Lütfen ilgilendiğiniz hizmeti seçin.")).toBeVisible();
    await expect(page.getByLabel("Ad Soyad")).toBeFocused();
    await expect(page.getByLabel("Ad Soyad")).toHaveAttribute("aria-invalid", "true");
  });

  test("never shows success when delivery is not configured", async ({ page }) => {
    await page.goto("/iletisim");
    await fillValidForm(page);
    // The server rejects submissions completed faster than a human could.
    await page.waitForTimeout(2200);
    await page.getByRole("button", { name: "Danışmanlık Talep Et" }).click();
    const alert = page.locator("form").getByRole("alert");
    await expect(alert).toContainText("Form gönderimi şu anda kullanılamıyor.");
    await expect(alert.getByRole("link", { name: "E-posta gönderin" })).toHaveAttribute(
      "href",
      "mailto:info@mabglobalpartners.com",
    );
    await expect(page.getByText("Talebiniz bize ulaştı.")).toHaveCount(0);
  });

  test("shows success only after the API confirms receipt", async ({ page }) => {
    let received: unknown;
    let release!: () => void;
    const released = new Promise<void>((resolve) => (release = resolve));
    await page.route("**/api/contact", async (route) => {
      received = route.request().postDataJSON();
      await released;
      await route.fulfill({ status: 200, json: { ok: true } });
    });
    await page.goto("/iletisim");
    await fillValidForm(page);
    await page.getByRole("button", { name: "Danışmanlık Talep Et" }).click();
    // The response is held until the loading state has been observed.
    await expect(page.getByRole("button", { name: "Gönderiliyor" })).toBeDisabled();
    await expect(page.getByText("Talebiniz bize ulaştı.")).toHaveCount(0);
    release();
    await expect(page.getByRole("status")).toContainText("Talebiniz bize ulaştı.");
    expect(received).toMatchObject({
      values: { email: "ayse@example.com", service: "amerika-sirket-kurulusu" },
      meta: { website: "" },
    });
  });

  test("surfaces server-side field errors", async ({ page }) => {
    await page.route("**/api/contact", (route) =>
      route.fulfill({
        status: 422,
        json: {
          ok: false,
          code: "validation_failed",
          message: "Lütfen işaretli alanları kontrol edin.",
          fieldErrors: { email: "Lütfen geçerli bir e-posta adresi yazın." },
        },
      }),
    );
    await page.goto("/iletisim");
    await fillValidForm(page);
    await page.getByRole("button", { name: "Danışmanlık Talep Et" }).click();
    await expect(page.locator("form").getByRole("alert")).toContainText("Lütfen işaretli alanları kontrol edin.");
    await expect(page.getByLabel("E-posta Adresi")).toHaveAttribute("aria-invalid", "true");
  });

  test("contact details link to email and Google Maps", async ({ page }) => {
    await page.goto("/iletisim");
    const aside = page.getByRole("complementary", { name: "İletişim bilgileri" });
    await expect(aside.getByRole("link", { name: "info@mabglobalpartners.com" })).toHaveAttribute(
      "href",
      "mailto:info@mabglobalpartners.com",
    );
    await expect(aside.getByRole("link", { name: /Google Haritalar/ })).toHaveAttribute(
      "href",
      /google\.com\/maps/,
    );
  });
});
