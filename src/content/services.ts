import type { Service, ServiceSlug } from "@/types/content";

/**
 * Service registry. Scope items are limited to services listed on the
 * business's existing websites (see docs/content-verification.md).
 * Copy style: Title Case titles, one-line summaries and descriptions without
 * commas, imperative "you" voice.
 */
const allServices: Service[] = [
  {
    slug: "us-company-formation",
    title: "US Company Formation",
    shortTitle: "US Company Formation",
    icon: "building",
    jurisdiction: "us",
    summary: "Form an LLC or corporation with EIN support.",
    definition:
      "US company formation covers the registration of an LLC or corporation in the chosen state and the steps that prepare the company to operate.",
    intro: [
      "Form your company in the right state with the right structure. Complete the formation filing along with registered agent and EIN steps in one plan.",
      "Manage the entire process remotely with one dedicated team.",
    ],
    audience: [
      { title: "E-Commerce Sellers", description: "Brands selling to US buyers online." },
      { title: "Freelancers", description: "Professionals serving US clients." },
      { title: "Tech Startups", description: "SaaS teams targeting the US market." },
      { title: "Established Businesses", description: "Firms adding a US company structure." },
    ],
    scope: [
      { title: "Entity Type and State", description: "Compare LLC and corporation options for your business model." },
      { title: "Formation Documents", description: "Prepare your Articles of Organization or Incorporation." },
      { title: "Registered Agent", description: "Appoint MAB Registered Agent Inc. as your registered agent." },
      { title: "EIN Application", description: "Obtain the IRS employer identification number for your company." },
      { title: "ITIN Support", description: "Apply for an individual taxpayer identification number where needed." },
      { title: "Address and Compliance Plan", description: "Plan your company address and annual report calendar from day one." },
      { title: "Bank Application Preparation", description: "Prepare documents for bank and payment provider applications." },
    ],
    process: [
      { title: "Initial Consultation", description: "Share your business model and goals." },
      { title: "Structure and State", description: "Choose the entity type and the state." },
      { title: "Filing", description: "Complete the formation filing." },
      { title: "EIN and Calendar", description: "Get your EIN and compliance calendar." },
    ],
    documents: [
      "Valid passport details for each owner",
      "Contact and address details for each owner",
      "Preferred company name with alternatives",
      "A short description of business activities",
      "Ownership shares and management structure",
    ],
    considerations: [
      "Filing fees and annual report rules vary by state. Processing times vary as well.",
      "A company that operates in another state may need to register there too.",
      "Foreign-owned single-member LLCs may have an annual information return to file with the IRS.",
      "Review your tax position in your country of residence with your local advisor.",
      "Bank approvals and official processing times depend on the decision of each institution.",
    ],
    relatedServices: ["registered-agent", "tax-advisory", "accounting", "business-address-and-operations"],
    relatedSectors: ["e-commerce", "freelancers", "technology-companies", "entrepreneurs-and-investors"],
    faqIds: ["us-travel-required", "us-state-choice", "us-ein", "us-bank-account", "formation-timeline"],
    featured: true,
    seo: {
      title: "US Company Formation for LLCs and Corporations",
      description:
        "Form an LLC or corporation in the US with state selection and registered agent support. Get your EIN and plan compliance from day one.",
    },
    status: "published",
    updatedAt: "2026-10-12",
  },
  {
    slug: "uk-company-formation",
    title: "UK Company Formation",
    shortTitle: "UK Company Formation",
    icon: "landmark",
    jurisdiction: "uk",
    summary: "Register a private limited company at Companies House.",
    definition:
      "UK company formation covers the registration of a private limited company at Companies House and the preparation for its tax and reporting duties.",
    intro: [
      "Register your limited company at Companies House. Prepare director and shareholder details along with PSC and registered office information.",
      "Plan identity verification and Corporation Tax registration together with the formation.",
    ],
    audience: [
      { title: "Brands Entering Europe", description: "Businesses planning UK and EU sales." },
      { title: "Service Exporters", description: "Agencies serving UK clients." },
      { title: "Technology Companies", description: "Firms operating through a UK entity." },
      { title: "Exporters", description: "Manufacturers selling to UK buyers." },
    ],
    scope: [
      { title: "Company Type and Name", description: "Choose the company type and check that the name is available." },
      { title: "Director and PSC Details", description: "Prepare the management and ownership structure for the filing." },
      { title: "Registered Office", description: "Plan the address requirements for official correspondence." },
      { title: "Identity Verification", description: "Complete director and PSC identity verification on time." },
      { title: "Companies House Filing", description: "Prepare the formation documents and track the application." },
      { title: "Tax and Accounting", description: "Plan Corporation Tax registration with annual accounts and returns." },
    ],
    process: [
      { title: "Initial Consultation", description: "Share your market and ownership plans." },
      { title: "Company Details", description: "Confirm the name and officers." },
      { title: "Verification and Filing", description: "Verify identities and file the application." },
      { title: "After Formation", description: "Register for Corporation Tax on time." },
    ],
    documents: [
      "Passport details for directors and shareholders",
      "Address details for directors and shareholders",
      "Preferred company name with alternatives",
      "A short description of business activities",
      "Share allocation and PSC details",
    ],
    considerations: [
      "The registered office must be a physical address in the UK country where the company is registered. PO Box addresses are unsuitable.",
      "Every company gives Companies House a registered email address. This address stays off the public register.",
      "Director and PSC identity verification is a legal requirement from 18 November 2025.",
      "Every company files a confirmation statement at least once every 12 months.",
      "VAT registration depends on the turnover threshold and the business activity.",
    ],
    relatedServices: ["tax-advisory", "accounting", "international-business-consulting"],
    relatedSectors: ["e-commerce", "export-and-logistics", "technology-companies", "smes-and-enterprises"],
    faqIds: ["uk-registered-office", "uk-identity-verification", "uk-annual-obligations", "us-or-uk", "formation-timeline"],
    featured: true,
    seo: {
      title: "UK Company Formation for Private Limited Companies",
      description:
        "Form a private limited company in the UK. Plan Companies House registration and identity verification with registered office and Corporation Tax steps.",
    },
    status: "published",
    updatedAt: "2026-10-12",
  },
  {
    slug: "tax-advisory",
    title: "Tax Advisory",
    shortTitle: "Tax Advisory",
    icon: "receipt",
    jurisdiction: "us-uk",
    summary: "File US and UK company tax returns on time.",
    definition:
      "Tax advisory covers the preparation and tracking of federal and state returns for US companies and national returns for UK companies.",
    intro: [
      "Formation is the first step. Your main responsibilities begin once the company starts to operate.",
      "Bring federal and state duties together with Corporation Tax deadlines in one calendar and file ahead of every due date.",
    ],
    audience: [
      { title: "Owners Living Abroad", description: "Owners running US firms remotely." },
      { title: "Marketplace Sellers", description: "Businesses selling across many states." },
      { title: "UK Companies", description: "Firms that file Corporation Tax yearly." },
      { title: "Growing Businesses", description: "Teams that want a clear tax calendar." },
    ],
    scope: [
      { title: "US Tax Returns", description: "Prepare and submit the federal returns that fit your entity." },
      { title: "Forms 5472 and 1120", description: "File information returns for foreign-owned LLCs on time." },
      { title: "State Obligations", description: "Review sales tax needs in the states where you sell." },
      { title: "UK Returns", description: "Manage Corporation Tax and the Company Tax Return." },
      { title: "Tax Calendar", description: "See every filing and payment date in advance." },
      { title: "Tax Planning", description: "Classify your expenses in line with the rules." },
    ],
    process: [
      { title: "Current Position", description: "Share your entity type and past filings." },
      { title: "Obligation Calendar", description: "Collect every deadline in one calendar." },
      { title: "Document Preparation", description: "Match documents with your books." },
      { title: "Filing and Follow-Up", description: "File returns and update the next cycle." },
    ],
    considerations: [
      "Tax obligations depend on the entity type and the residency of the owners along with the place of business.",
      "Your tax obligations in your country of residence need a separate review.",
      "No promise of tax savings is made. Advisory work focuses on accurate filings and timely compliance.",
      "Filing deadlines and penalties follow the rules of each tax authority.",
    ],
    relatedServices: ["accounting", "us-company-formation", "uk-company-formation"],
    relatedSectors: ["e-commerce", "freelancers", "smes-and-enterprises"],
    faqIds: ["us-filing-from-abroad", "form-5472", "tax-deadlines", "foreign-client-income"],
    featured: true,
    seo: {
      title: "Tax Advisory for US and UK Companies",
      description:
        "File federal and state returns for your US company and meet Form 5472 duties. Manage Corporation Tax for your UK company on time.",
    },
    status: "published",
    updatedAt: "2026-10-12",
  },
  {
    slug: "accounting",
    title: "Accounting Services",
    shortTitle: "Accounting Services",
    icon: "calculator",
    jurisdiction: "us-uk",
    summary: "Keep clean books for your US and UK companies.",
    definition:
      "Accounting services cover income and expense records along with bank reconciliations and periodic reports for companies in the United States and the United Kingdom.",
    intro: [
      "Accurate books are the basis of every correct return. Record marketplace payouts and bank activity along with expenses within each period.",
      "Set up your bookkeeping around your transaction volume and income channels.",
    ],
    audience: [
      { title: "Marketplace Sellers", description: "Sellers who record platform payouts." },
      { title: "Subscription Companies", description: "Tech firms with recurring revenue." },
      { title: "Service Companies", description: "Firms that invoice global clients." },
      { title: "Foreign Subsidiaries", description: "Entities reporting to a parent firm." },
    ],
    scope: [
      { title: "Income and Expense Records", description: "Record every transaction in each period." },
      { title: "Reconciliations", description: "Match bank and payment platform activity with marketplace reports." },
      { title: "Periodic Reports", description: "Review your income statement and balance sheet on schedule." },
      { title: "Expense Classification", description: "Record expenses under the right categories." },
      { title: "Year-End Preparation", description: "Review the records behind your returns before year end." },
      { title: "UK Annual Accounts", description: "Prepare annual accounts for Companies House and HMRC." },
    ],
    process: [
      { title: "Scope", description: "Share your volume and reporting needs." },
      { title: "Bookkeeping Setup", description: "Agree on accounts and file sharing." },
      { title: "Records and Reconciliation", description: "Record and reconcile each period." },
      { title: "Reporting", description: "Get reports and plan year end." },
    ],
    considerations: [
      "Accounting scope and record frequency depend on transaction volume.",
      "Regular document sharing keeps the records accurate.",
      "Record-keeping duties differ between the US and the UK.",
      "Record marketplace fees as separate items from refunds and shipping costs.",
    ],
    relatedServices: ["tax-advisory", "us-company-formation", "uk-company-formation"],
    relatedSectors: ["e-commerce", "technology-companies", "smes-and-enterprises"],
    faqIds: ["accounting-scope", "marketplace-bookkeeping", "accounting-documents"],
    featured: true,
    seo: {
      title: "Accounting Services for US and UK Companies",
      description:
        "Keep income and expense records and bank reconciliations for your US and UK companies. Receive periodic reports and prepare for year end.",
    },
    status: "published",
    updatedAt: "2026-10-12",
  },
  {
    slug: "registered-agent",
    title: "Registered Agent Services",
    shortTitle: "Registered Agent",
    icon: "shield",
    jurisdiction: "us",
    summary: "Registered agent service in all 50 states and D.C.",
    definition:
      "A registered agent accepts official correspondence and legal notices on behalf of a company and keeps a physical address in the state where the company is registered.",
    intro: [
      "LLCs and corporations in the US appoint a registered agent in their state before they file for formation.",
      "MAB Registered Agent Inc. serves every entity type across all 50 states and Washington D.C.",
    ],
    audience: [
      { title: "New Companies", description: "Companies that need an agent to file." },
      { title: "Owners Outside the US", description: "Founders with no local address." },
      { title: "Multi-State Companies", description: "Businesses registered in several states." },
      { title: "Companies Switching Agents", description: "Owners who want a steadier service." },
    ],
    scope: [
      { title: "Service of Process", description: "Receive legal documents for your company securely." },
      { title: "State Correspondence", description: "Receive official mail on record and on time." },
      { title: "50 States and D.C.", description: "Work with the same service structure in every state." },
      { title: "All Entity Types", description: "LLCs and corporations along with partnerships and nonprofits." },
      { title: "Annual Compliance Tracking", description: "Track annual report dates and keep good standing." },
    ],
    process: [
      { title: "State and Entity Type", description: "Share your state and entity type." },
      { title: "Appointment", description: "Add the agent to your filing or records." },
      { title: "Correspondence", description: "Receive official documents regularly." },
    ],
    considerations: [
      "A registered agent keeps a physical address in the state where the company is registered.",
      "Registered agent details may appear on public state records.",
      "Keep your contact details current so notices reach you on time.",
      "Companies registered in other states may need an agent there too.",
    ],
    relatedServices: ["us-company-formation", "business-address-and-operations", "tax-advisory"],
    relatedSectors: ["e-commerce", "entrepreneurs-and-investors", "smes-and-enterprises"],
    faqIds: ["registered-agent-role", "registered-agent-required", "registered-agent-coverage"],
    externalReference: { label: "MAB Registered Agent Inc. Website", href: "https://www.mabregisteredagent.com" },
    featured: true,
    seo: {
      title: "Registered Agent Services in All 50 States and Washington D.C.",
      description:
        "Appoint MAB Registered Agent Inc. for your LLC or corporation in any of the 50 states and Washington D.C.",
    },
    status: "published",
    updatedAt: "2026-10-12",
  },
  {
    slug: "business-address-and-operations",
    title: "Business Address and Company Operations",
    shortTitle: "Business Address and Operations",
    icon: "map-pin",
    jurisdiction: "us-uk",
    summary: "Manage your US address and company changes.",
    definition:
      "Business address and company operations cover the address needs of existing companies along with their annual compliance calendar and changes to company records.",
    intro: [
      "Address and annual report duties begin after formation along with updates to company records. Put these steps on a calendar.",
      "Plan every operational step for your company from the business address to transfers and dissolution.",
    ],
    audience: [
      { title: "Existing US Companies", description: "Firms that need a US address." },
      { title: "Companies Restructuring", description: "Owners planning share transfers." },
      { title: "Companies Winding Down", description: "Founders who want an orderly closure." },
      { title: "Corporate Suppliers", description: "Businesses that need a DUNS number." },
    ],
    scope: [
      { title: "US Business Address", description: "Get a professional US business address for your company." },
      { title: "Annual Report Tracking", description: "Put state reports and renewal dates on your calendar." },
      { title: "Share and Company Transfers", description: "Plan transfers for your US company." },
      { title: "Company Dissolution", description: "Complete dissolution filings for US and UK companies." },
      { title: "DUNS Number", description: "Obtain a DUNS number for supplier registrations." },
      { title: "Trademark Registration", description: "File trademark applications in the US and the UK." },
    ],
    process: [
      { title: "Your Request", description: "Share your company status and plans." },
      { title: "Action Plan", description: "Confirm documents and filing order." },
      { title: "Execution", description: "Complete filings and update records." },
    ],
    considerations: [
      "Banks and marketplaces set their own rules for business address use.",
      "Annual report dates and fees vary by state.",
      "Transfers and closures need a review of final tax obligations.",
      "Trademark applications are subject to examination by the relevant office.",
    ],
    relatedServices: ["registered-agent", "us-company-formation", "tax-advisory"],
    relatedSectors: ["e-commerce", "export-and-logistics", "smes-and-enterprises"],
    faqIds: ["business-address-use", "company-dissolution", "service-scope"],
    featured: false,
    seo: {
      title: "Business Address and Company Operations",
      description:
        "Get a US business address and track annual compliance. Manage share transfers and company dissolution along with DUNS and trademark filings.",
    },
    status: "published",
    updatedAt: "2026-10-12",
  },
  {
    slug: "international-business-consulting",
    title: "International Business Consulting",
    shortTitle: "International Consulting",
    icon: "compass",
    jurisdiction: "us-uk",
    summary: "Build an expansion plan for your target market.",
    definition:
      "International business consulting reviews structure and market decisions together with operational choices for businesses planning activity abroad.",
    intro: [
      "Company structure and payment setup affect each other along with marketplace accounts and tax. Review these decisions in one plan.",
      "Plan your entry into the US and UK markets with experience in e-commerce and export along with digital services.",
    ],
    audience: [
      { title: "First-Time Expanders", description: "Firms choosing a country and structure." },
      { title: "E-Commerce Founders", description: "Brands launching on Amazon." },
      { title: "Companies Reviewing Structure", description: "Owners checking compliance abroad." },
      { title: "Single-Topic Advice", description: "Founders who need one session." },
    ],
    scope: [
      { title: "Market and Structure", description: "Compare US and UK options side by side." },
      { title: "Marketplace Processes", description: "Get guidance on Amazon account setup and seller processes." },
      { title: "Operations Plan", description: "Plan company and banking steps with payments and accounting in order." },
      { title: "One-to-One Sessions", description: "Clarify a specific topic in an hourly session." },
      { title: "Structure Review", description: "Review the records and compliance of your company abroad." },
    ],
    process: [
      { title: "Goals", description: "Share your product and customer goals." },
      { title: "Options", description: "Compare countries and sales channels." },
      { title: "Roadmap", description: "Receive a plan with clear priorities." },
    ],
    considerations: [
      "Sessions serve information and planning purposes. Legal and tax decisions need a detailed review.",
      "Marketplace and payment provider approvals follow their own policies.",
      "Licensing and product rules in the target country vary by industry.",
    ],
    relatedServices: ["us-company-formation", "uk-company-formation", "tax-advisory"],
    relatedSectors: ["e-commerce", "export-and-logistics", "entrepreneurs-and-investors"],
    faqIds: ["us-or-uk", "amazon-account-support", "service-scope"],
    featured: true,
    seo: {
      title: "International Business Consulting",
      description:
        "Plan your entry into the US and UK markets. Choose a company structure and plan marketplace and operational steps around your business model.",
    },
    status: "published",
    updatedAt: "2026-10-12",
  },
];

export const services: Service[] = allServices.filter((service) => service.status === "published");

export const featuredServices: Service[] = services.filter((service) => service.featured);

export function getService(slug: ServiceSlug): Service {
  const service = services.find((entry) => entry.slug === slug);
  if (!service) {
    throw new Error(`Service "${slug}" is not published.`);
  }
  return service;
}

export function getServices(slugs: ServiceSlug[]): Service[] {
  return slugs
    .map((slug) => services.find((entry) => entry.slug === slug))
    .filter((entry): entry is Service => Boolean(entry));
}

export const jurisdictionLabels: Record<Service["jurisdiction"], string> = {
  us: "United States",
  uk: "United Kingdom",
  "us-uk": "United States and United Kingdom",
};
