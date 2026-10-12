import { describe, expect, it } from "vitest";
import { createRateLimiter, clientIpFrom } from "@/lib/security/rate-limit";
import { escapeHtml } from "@/lib/utilities/escape-html";
import { formatDate } from "@/lib/utilities/format-date";
import {
  contactMessages,
  contactMetaSchema,
  createContactValidator,
} from "@/lib/validation/contact";
import { contactOptions } from "@/lib/validation/contact-options";

const validate = createContactValidator(contactOptions);

const validValues = {
  name: "Ayşe Yılmaz",
  email: "  AYSE@Example.com ",
  company: "",
  service: "amerika-sirket-kurulusu",
  sector: "e-ticaret",
  message: "Amazon üzerinden ABD pazarına satış yapmayı planlıyoruz.",
};

describe("contact form validation", () => {
  it("accepts a valid submission and normalizes the email", () => {
    const result = validate(validValues);
    expect(result.success).toBe(true);
    if (result.success) expect(result.data.email).toBe("ayse@example.com");
  });

  it("returns Turkish messages for each invalid field", () => {
    const result = validate({
      name: "A",
      email: "gecersiz",
      company: "x".repeat(200),
      service: "olmayan-hizmet",
      sector: "",
      message: "kısa",
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.fieldErrors).toEqual({
        name: contactMessages.name,
        email: contactMessages.email,
        company: contactMessages.company,
        service: contactMessages.service,
        sector: contactMessages.sector,
        message: contactMessages.messageMin,
      });
    }
  });

  it("treats the company name as optional", () => {
    const withoutCompany: Partial<typeof validValues> = { ...validValues };
    delete withoutCompany.company;
    expect(validate(withoutCompany).success).toBe(true);
  });

  it("rejects overly long messages", () => {
    const result = validate({ ...validValues, message: "a".repeat(3001) });
    expect(result.success).toBe(false);
    if (!result.success) expect(result.fieldErrors.message).toBe(contactMessages.messageMax);
  });

  it("offers every published service and sector as an option", () => {
    expect(contactOptions.services.length).toBeGreaterThanOrEqual(7);
    expect(contactOptions.sectors.length).toBeGreaterThanOrEqual(6);
  });

  it("requires a honeypot that is empty and a UUID submission id", () => {
    const ok = contactMetaSchema.safeParse({
      website: "",
      elapsedMs: 5000,
      submissionId: "6f1c1f0e-8a52-4a49-9d3b-2b8a1c1e8f10",
    });
    expect(ok.success).toBe(true);
    expect(
      contactMetaSchema.safeParse({ website: "spam", elapsedMs: 5000, submissionId: "x" }).success,
    ).toBe(false);
  });
});

describe("rate limiter", () => {
  it("allows the configured number of requests per window", () => {
    let now = 0;
    const limiter = createRateLimiter({ limit: 2, windowMs: 1000, now: () => now });
    expect(limiter.check("a").allowed).toBe(true);
    expect(limiter.check("a").allowed).toBe(true);
    const blocked = limiter.check("a");
    expect(blocked.allowed).toBe(false);
    expect(blocked.retryAfterSeconds).toBe(1);
    expect(limiter.check("b").allowed).toBe(true);
    now = 1001;
    expect(limiter.check("a").allowed).toBe(true);
  });

  it("reads the client address from forwarding headers", () => {
    expect(clientIpFrom(new Headers({ "x-forwarded-for": "1.2.3.4, 5.6.7.8" }))).toBe("1.2.3.4");
    expect(clientIpFrom(new Headers({ "x-real-ip": "9.9.9.9" }))).toBe("9.9.9.9");
    expect(clientIpFrom(new Headers())).toBe("unknown");
  });
});

describe("utilities", () => {
  it("escapes HTML", () => {
    expect(escapeHtml(`<a href="x">'&'</a>`)).toBe(
      "&lt;a href=&quot;x&quot;&gt;&#39;&amp;&#39;&lt;/a&gt;",
    );
  });

  it("formats ISO dates in Turkish", () => {
    expect(formatDate("2026-10-12")).toBe("12 Ekim 2026");
    expect(() => formatDate("2026-10")).toThrow();
  });
});
