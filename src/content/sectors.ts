import type { Sector, SectorSlug } from "@/types/content";

/**
 * Industry registry (internally "sectors"). Copy style matches services.ts.
 */
const allSectors: Sector[] = [
  {
    slug: "e-commerce",
    title: "E-Commerce Businesses",
    shortTitle: "E-Commerce",
    icon: "shopping-bag",
    summary: "Set up the company behind your marketplace sales.",
    intro: [
      "Plan the seller account together with company structure and payment setup along with tax registration.",
      "Bring every step for Amazon and Shopify sales into one plan along with Etsy and eBay.",
    ],
    examples: [
      "Amazon Sellers",
      "Shopify Stores",
      "Etsy Sellers",
      "eBay Sellers",
      "Marketplace Operators",
      "Direct-to-Consumer Brands",
      "Cross-Border Online Retailers",
      "Multi-Marketplace Businesses",
    ],
    needs: [
      { title: "Seller-Ready Structure", description: "Set up company and address records that match marketplace checks." },
      { title: "Sales Tax Tracking", description: "Track registration and filing needs in the states where you sell." },
      { title: "Marketplace Accounting", description: "Record fees and refunds apart from advertising and logistics costs." },
      { title: "Brand and Product Registrations", description: "Plan trademark filings and FDA registration where products need it." },
    ],
    services: [
      "us-company-formation",
      "tax-advisory",
      "accounting",
      "international-business-consulting",
      "business-address-and-operations",
    ],
    considerations: [
      "Marketplaces expect consistent company and address details along with matching bank information during verification.",
      "In many states the marketplace collects sales tax for the seller. Your own registration needs a separate review.",
      "Consistent documents speed up the resolution of account suspensions.",
      "Check US rules for products such as food and cosmetics before you start selling.",
    ],
    faqIds: ["amazon-us-company", "sales-tax", "amazon-account-support", "marketplace-bookkeeping"],
    seo: {
      title: "Company Formation and Tax for E-Commerce Businesses",
      description:
        "Form a US company for your Amazon and Shopify sales. Track sales tax duties and keep marketplace accounting in order.",
    },
    status: "published",
    updatedAt: "2026-10-12",
  },
  {
    slug: "export-and-logistics",
    title: "Export and Logistics",
    shortTitle: "Export and Logistics",
    icon: "ship",
    summary: "Work with US buyers through a local company.",
    intro: [
      "A local company can simplify contracts and invoicing with buyers in your target market.",
      "Plan company formation and accounting along with tax tracking around your trade flows.",
    ],
    examples: [
      "Exporters",
      "Manufacturers",
      "Import and Export Companies",
      "International Wholesalers",
      "Logistics Companies",
      "Freight Forwarders",
      "Supply Chain Companies",
      "International Procurement Firms",
    ],
    needs: [
      { title: "Local Company and Invoicing", description: "Sign contracts and issue invoices through a company in your market." },
      { title: "DUNS and Supplier Registration", description: "Obtain the identification numbers corporate buyers request." },
      { title: "Storage and Distribution", description: "Plan storage and distribution of your products in the target market." },
      { title: "Intercompany Records", description: "Document transactions between your home company and the company abroad." },
    ],
    services: [
      "us-company-formation",
      "accounting",
      "tax-advisory",
      "business-address-and-operations",
      "international-business-consulting",
    ],
    considerations: [
      "Customs and product standards along with import permits vary by product group.",
      "Pricing of transactions between related companies matters under the tax rules of both countries.",
      "Food and cosmetics along with medical products may need extra registrations such as FDA registration.",
    ],
    faqIds: ["us-state-choice", "intercompany-transactions", "service-scope"],
    seo: {
      title: "US Company Structures for Export and Logistics Businesses",
      description:
        "Form a US company for your export or logistics business. Plan DUNS registration and accounting along with operational steps.",
    },
    status: "published",
    updatedAt: "2026-10-12",
  },
  {
    slug: "freelancers",
    title: "Freelancers and Digital Professionals",
    shortTitle: "Freelancers",
    icon: "laptop",
    summary: "Choose the right structure for your foreign clients.",
    intro: [
      "A company structure can organize contracts and invoices along with payments for foreign clients.",
      "Decide whether you need a company based on your income model and tax position.",
    ],
    examples: [
      "Software Developers",
      "Web Developers",
      "Designers",
      "Marketing Consultants",
      "Independent Consultants",
      "Fiverr and Upwork Freelancers",
      "Professionals With Foreign Clients",
      "Remote Workers With Global Income",
    ],
    needs: [
      { title: "The Right Structure", description: "Compare working as an individual with a company for income and tax." },
      { title: "Payments and Invoicing", description: "Manage international payments in line with company records." },
      { title: "Platform Tax Forms", description: "Complete the tax forms platforms request for your structure." },
      { title: "Annual Filing Calendar", description: "File federal and state returns on time." },
    ],
    services: ["us-company-formation", "tax-advisory", "accounting", "international-business-consulting"],
    considerations: [
      "Income from a company abroad may be taxable in your country of residence. Review this with your local advisor.",
      "Forms such as W-8 or W-9 that platforms request depend on your company structure.",
      "Some freelancers need no company at all. Income volume and client structure decide.",
    ],
    faqIds: ["foreign-client-income", "us-filing-from-abroad", "form-5472"],
    seo: {
      title: "Company Structures Abroad for Freelancers and Digital Professionals",
      description:
        "Plan your company structure along with tax and accounting steps when you work with foreign clients on Fiverr and Upwork or directly.",
    },
    status: "published",
    updatedAt: "2026-10-12",
  },
  {
    slug: "technology-companies",
    title: "Technology Companies and Startups",
    shortTitle: "Technology Companies",
    icon: "cpu",
    summary: "Form an investor-ready structure for your startup.",
    intro: [
      "Technology companies targeting the US market need the right entity type and ownership structure along with payment setup from the start.",
      "Choose the structure that fits your investment plan and team along with your revenue model.",
    ],
    examples: [
      "SaaS Companies",
      "AI Startups",
      "Software Companies",
      "Mobile App Companies",
      "Digital Agencies",
      "Subscription Businesses",
      "Technology Consultancies",
    ],
    needs: [
      { title: "Investor-Ready Structure", description: "Compare LLC and corporation options against your investment plan." },
      { title: "Subscription Accounting", description: "Record recurring revenue and payment activity regularly." },
      { title: "Payment Setup", description: "Prepare the company details payment providers request." },
      { title: "Brand Protection", description: "Register your product and company name in your target market." },
    ],
    services: [
      "us-company-formation",
      "accounting",
      "tax-advisory",
      "registered-agent",
      "business-address-and-operations",
    ],
    considerations: [
      "Institutional investors may prefer a specific entity type and state. Decide the structure together with your investment plan.",
      "Some states apply sales tax to digital services.",
      "Ownership shares and equity plans belong in the formation documents with clear terms.",
    ],
    faqIds: ["us-state-choice", "entity-type", "accounting-scope"],
    seo: {
      title: "US Company Structures for Technology Companies and Startups",
      description:
        "Choose the entity type for your SaaS or AI startup. Organize subscription accounting and tax along with brand protection.",
    },
    status: "published",
    updatedAt: "2026-10-12",
  },
  {
    slug: "entrepreneurs-and-investors",
    title: "Entrepreneurs and Investors",
    shortTitle: "Entrepreneurs and Investors",
    icon: "rocket",
    summary: "Settle state and structure for your first company.",
    intro: [
      "Ask the right questions early before you form your first company abroad.",
      "Clarify the target market and ownership structure along with your long-term plan to give your first decisions a solid base.",
    ],
    examples: [
      "First-Time Founders",
      "Startup Founders",
      "Entrepreneurs Going Global",
      "Investors Reviewing Structures Abroad",
      "Businesses Entering the US",
    ],
    needs: [
      { title: "State and Entity Type", description: "Compare state and entity options for your model." },
      { title: "Ownership Structure", description: "Reflect shares and authority along with decision rules in documents." },
      { title: "First-Year Calendar", description: "See filing and report dates after formation in advance." },
      { title: "Annual Cost Plan", description: "Forecast formation and renewal costs with accounting and tax." },
    ],
    services: ["international-business-consulting", "us-company-formation", "registered-agent", "tax-advisory"],
    considerations: [
      "A company abroad brings tax advantages only in some cases. Advantages and obligations depend on each situation.",
      "Investor expectations for structure vary by type of investment.",
      "Include annual costs after formation in your plan from the start.",
    ],
    faqIds: ["entity-type", "us-state-choice", "pricing"],
    seo: {
      title: "US Company Formation for Entrepreneurs and Investors",
      description:
        "Choose the state and entity type for your first US company. Plan ownership and first-year compliance along with costs.",
    },
    status: "published",
    updatedAt: "2026-10-12",
  },
  {
    slug: "smes-and-enterprises",
    title: "SMEs and Enterprises",
    shortTitle: "SMEs and Enterprises",
    icon: "factory",
    summary: "Set up a foreign subsidiary and keep it compliant.",
    intro: [
      "Form your foreign subsidiary with a plan that fits your existing structure.",
      "Manage a new formation or the follow-up of your existing foreign company around your corporate processes.",
    ],
    examples: [
      "SMEs",
      "Family Businesses",
      "Companies Opening Subsidiaries",
      "Businesses Running a Foreign Company",
      "Companies Seeking Ongoing Compliance",
    ],
    needs: [
      { title: "Foreign Subsidiary", description: "Form a US company that fits your parent company." },
      { title: "Existing Company Follow-Up", description: "Hand over accounting and tax along with compliance for your company." },
      { title: "Management Reports", description: "Receive periodic financial reports and a compliance calendar." },
      { title: "Intercompany Transactions", description: "Document transactions between the parent and the subsidiary." },
    ],
    services: [
      "us-company-formation",
      "accounting",
      "tax-advisory",
      "registered-agent",
      "business-address-and-operations",
    ],
    considerations: [
      "Transactions between the parent and the subsidiary need a review under the rules of both countries.",
      "Past filings come first when the follow-up of an existing company changes hands.",
      "Coordinate decisions on a foreign subsidiary with your local accountant.",
    ],
    faqIds: ["intercompany-transactions", "existing-company-takeover", "accounting-scope"],
    seo: {
      title: "Foreign Subsidiaries and Compliance for SMEs and Enterprises",
      description:
        "Form your foreign subsidiary and keep tax and accounting along with compliance for your existing foreign company in order.",
    },
    status: "published",
    updatedAt: "2026-10-12",
  },
];

export const sectors: Sector[] = allSectors.filter((sector) => sector.status === "published");

export function getSector(slug: SectorSlug): Sector {
  const sector = sectors.find((entry) => entry.slug === slug);
  if (!sector) {
    throw new Error(`Sector "${slug}" is not published.`);
  }
  return sector;
}

export function getSectors(slugs: SectorSlug[]): Sector[] {
  return slugs
    .map((slug) => sectors.find((entry) => entry.slug === slug))
    .filter((entry): entry is Sector => Boolean(entry));
}
