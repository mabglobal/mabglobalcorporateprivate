import { expect, test, type Page } from "@playwright/test";

async function fillValidForm(page: Page) {
  await page.getByLabel("Full Name").fill("Jane Doe");
  await page.getByLabel("Email Address").fill("jane@example.com");
  await page.getByLabel("Service You Need").selectOption("us-company-formation");
  await page.getByLabel("Your Industry").selectOption("e-commerce");
  await page
    .getByLabel("Your Message")
    .fill("We plan to form a company to sell on Amazon in the US market.");
}

test.describe("contact form", () => {
  test("shows validation messages and focuses the first invalid field", async ({ page }) => {
    await page.goto("/contact");
    await page.getByRole("button", { name: "Book a Consultation" }).click();
    await expect(page.getByText("Please enter your full name.")).toBeVisible();
    await expect(page.getByText("Please enter a valid email address.")).toBeVisible();
    await expect(page.getByText("Please choose the service you need.")).toBeVisible();
    await expect(page.getByLabel("Full Name")).toBeFocused();
    await expect(page.getByLabel("Full Name")).toHaveAttribute("aria-invalid", "true");
  });

  test("never shows success when delivery is not configured", async ({ page }) => {
    await page.goto("/contact");
    await fillValidForm(page);
    // The server rejects submissions completed faster than a human could.
    await page.waitForTimeout(2200);
    await page.getByRole("button", { name: "Book a Consultation" }).click();
    const alert = page.locator("form").getByRole("alert");
    await expect(alert).toContainText("Form submission is currently unavailable.");
    await expect(alert.getByRole("link", { name: "Send an Email" })).toHaveAttribute(
      "href",
      "mailto:info@mabglobalpartners.com",
    );
    await expect(page.getByText("Your Request Has Reached Us")).toHaveCount(0);
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
    await page.goto("/contact");
    await fillValidForm(page);
    await page.getByRole("button", { name: "Book a Consultation" }).click();
    // The response is held until the loading state has been observed.
    await expect(page.getByRole("button", { name: "Please Wait" })).toBeDisabled();
    await expect(page.getByText("Your Request Has Reached Us")).toHaveCount(0);
    release();
    await expect(page.getByRole("status")).toContainText("Your Request Has Reached Us");
    expect(received).toMatchObject({
      values: { email: "jane@example.com", service: "us-company-formation" },
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
          message: "Please check the highlighted fields.",
          fieldErrors: { email: "Please enter a valid email address." },
        },
      }),
    );
    await page.goto("/contact");
    await fillValidForm(page);
    await page.getByRole("button", { name: "Book a Consultation" }).click();
    await expect(page.locator("form").getByRole("alert")).toContainText("Please check the highlighted fields.");
    await expect(page.getByLabel("Email Address")).toHaveAttribute("aria-invalid", "true");
  });

  test("contact details link to email and Google Maps", async ({ page }) => {
    await page.goto("/contact");
    const aside = page.getByRole("complementary", { name: "Contact details" });
    await expect(aside.getByRole("link", { name: "info@mabglobalpartners.com" })).toHaveAttribute(
      "href",
      "mailto:info@mabglobalpartners.com",
    );
    await expect(aside.getByRole("link", { name: /Open in Maps/ })).toHaveAttribute(
      "href",
      /google\.com\/maps/,
    );
  });
});
