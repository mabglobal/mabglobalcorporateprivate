import { routes } from "@/config/routes";
import type { Article } from "@/types/content";

export const ukLimitedCompanyFormationGuide: Article = {
  slug: "uk-limited-company-formation-guide",
  title: "UK Limited Company Formation Guide",
  summary: "Learn what you need to form a private limited company in the UK.",
  category: "uk-company-formation",
  author: { type: "organization", name: "MAB Global Partners Editorial Team" },
  publishedAt: "2026-10-12",
  updatedAt: "2026-10-12",
  reviewBy: "2027-04-12",
  sections: [
    {
      heading: "What Is a Private Limited Company",
      paragraphs: [
        "A private limited company is legally separate from its owners. The liability of the owners for company debts is usually limited to the amount they invest.",
        "Companies in the United Kingdom register at Companies House. According to GOV.UK a company must be registered before it starts trading.",
      ],
    },
    {
      heading: "Key Information for Formation",
      paragraphs: [
        "According to GOV.UK a company needs at least one director. Appointing a company secretary is optional. A company limited by shares needs at least one shareholder and this person can be a director.",
      ],
      list: [
        "A suitable and available company name",
        "At least one director",
        "At least one shareholder for companies limited by shares",
        "Details of persons with significant control (PSCs)",
        "A registered office address and a registered email address",
        "A SIC code that describes the business activity",
        "Memorandum and articles of association",
      ],
    },
    {
      heading: "Registered Office Address Rules",
      paragraphs: [
        "The registered office must be a physical address in the UK country where the company is registered. A company registered in Scotland for example keeps its address in Scotland.",
        "The address must accept post and it must be possible to confirm delivery. PO Box services are unsuitable for this purpose. The registered office address appears on the public register.",
        "The registered email address given to Companies House stays off the public register. The company must monitor messages sent to this address.",
      ],
    },
    {
      heading: "Companies House Identity Verification",
      paragraphs: [
        "From 18 November 2025 Companies House made identity verification a legal requirement for directors and PSCs.",
        "When a new company forms the directors use the personal code they receive after verification in the formation application.",
      ],
    },
    {
      heading: "Obligations After Formation",
      paragraphs: [
        "Every company files a confirmation statement at least once every 12 months to confirm its details at Companies House. The review covers the registered office and directors along with shareholders and the SIC code and PSC details.",
        "Directors must prepare annual accounts and submit a Company Tax Return and pay Corporation Tax. VAT registration depends on the turnover threshold and is available on a voluntary basis too.",
      ],
    },
    {
      heading: "Topics That Need a Personal Review",
      paragraphs: [
        "This guide provides general information and is no substitute for personal legal or tax advice. Company structure and tax obligations depend on your personal and business situation.",
      ],
    },
  ],
  sources: [
    {
      title: "Set up a private limited company",
      publisher: "GOV.UK",
      url: "https://www.gov.uk/limited-company-formation",
      accessedAt: "2026-10-12",
    },
    {
      title: "Company address",
      publisher: "GOV.UK",
      url: "https://www.gov.uk/limited-company-formation/company-address",
      accessedAt: "2026-10-12",
    },
    {
      title: "Verifying your identity for Companies House",
      publisher: "GOV.UK",
      url: "https://www.gov.uk/guidance/verifying-your-identity-for-companies-house",
      accessedAt: "2026-10-12",
    },
    {
      title: "Running a limited company",
      publisher: "GOV.UK",
      url: "https://www.gov.uk/running-a-limited-company",
      accessedAt: "2026-10-12",
    },
    {
      title: "Confirmation statement",
      publisher: "GOV.UK",
      url: "https://www.gov.uk/running-a-limited-company/confirmation-statement",
      accessedAt: "2026-10-12",
    },
  ],
  relatedLinks: [
    { label: "Our UK Company Formation Service", href: routes.service("uk-company-formation") },
    { label: "Accounting Services for UK Companies", href: routes.service("accounting") },
    { label: "Tax Advisory", href: routes.service("tax-advisory") },
  ],
  seo: {
    title: "UK Limited Company Formation Guide",
    description:
      "A guide to Companies House registration and registered office rules along with identity verification and annual duties for a UK private limited company.",
  },
  status: "published",
};
