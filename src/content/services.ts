import type { Service, ServiceSlug } from "@/types/content";
import { ukFormationPackage, ukServiceGroups, ukServiceNote } from "./uk-service-items";

/**
 * Service registry. Scope items are limited to services listed on the
 * business's existing websites and the client's UK brochure (see
 * docs/content-verification.md).
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
      { icon: "message", title: "Initial Consultation", description: "Share your business model and goals." },
      { icon: "map", title: "Structure and State", description: "Choose the entity type and the state." },
      { icon: "file-signature", title: "Filing", description: "Complete the formation filing." },
      { icon: "calendar", title: "EIN and Calendar", description: "Get your EIN and compliance calendar." },
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
    relatedServices: ["registered-agent", "international-bank-account-opening", "tax-advisory", "accounting", "business-address-and-operations"],
    relatedSectors: ["e-commerce", "freelancers", "technology-companies", "entrepreneurs-and-investors"],
    faqIds: ["us-travel-required", "us-state-choice", "us-ein", "us-bank-account", "formation-timeline"],
    featured: true,
    seo: {
      title: "US Company Formation for LLCs and Corporations",
      description:
        "Form an LLC or corporation in the US with state selection and registered agent support. Get your EIN and plan compliance from day one.",
    },
    status: "published",
    updatedAt: "2026-11-09",
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
      "Plan identity verification and Corporation Tax registration together with the formation, and open your Amazon UK and bank accounts in one package.",
    ],
    audience: [
      { title: "Brands Entering Europe", description: "Businesses planning UK and EU sales." },
      { title: "Amazon UK Sellers", description: "Sellers opening a UK marketplace." },
      { title: "Technology Companies", description: "Firms operating through a UK entity." },
      { title: "Exporters", description: "Manufacturers selling to UK buyers." },
    ],
    scope: [
      { title: "Company Type and Name", description: "Choose the company type and check that the name is available." },
      { title: "Director and PSC Details", description: "Prepare the management and ownership structure for the filing." },
      { title: "Registered Office", description: "Plan the address requirements for official correspondence." },
      { title: "Identity Verification", description: "Complete director and PSC identity verification on time." },
      { title: "Companies House Filing", description: "Prepare the formation documents and track the application." },
      { title: "Amazon UK Account", description: "Open your Amazon UK seller account with the formation package." },
      { title: "Bank Account", description: "Open your company account and receive your EORI and UTR details." },
      { title: "Tax and Accounting", description: "Plan Corporation Tax registration with annual accounts and returns." },
    ],
    process: [
      { icon: "message", title: "Initial Consultation", description: "Share your market and ownership plans." },
      { icon: "users", title: "Company Details", description: "Confirm the name and officers." },
      { icon: "fingerprint", title: "Verification and Filing", description: "Verify identities and file the application." },
      { icon: "receipt", title: "After Formation", description: "Register for Corporation Tax on time." },
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
    relatedServices: ["uk-company-services", "international-bank-account-opening", "tax-advisory", "accounting"],
    relatedSectors: ["e-commerce", "export-and-logistics", "technology-companies", "smes-and-enterprises"],
    faqIds: ["uk-registered-office", "uk-identity-verification", "uk-annual-obligations", "us-or-uk", "formation-timeline"],
    catalog: {
      title: "Formation Package",
      description: "One package for your company and your first accounts.",
      groups: [{ title: "Company Setup", items: [ukFormationPackage] }],
      note: ukServiceNote,
    },
    featured: true,
    seo: {
      title: "UK Company Formation for Private Limited Companies",
      description:
        "Form a private limited company in the UK. Plan Companies House registration and identity verification with registered office and Corporation Tax steps.",
    },
    status: "published",
    updatedAt: "2026-11-09",
  },
  {
    slug: "uk-company-services",
    title: "UK Company Services",
    shortTitle: "UK Company Services",
    icon: "file-check",
    jurisdiction: "uk",
    summary: "Handle every UK filing and registration with one team.",
    definition:
      "UK company services cover director changes and annual filings along with tax registrations and company records for private limited companies in the United Kingdom.",
    intro: [
      "Run your UK company with one team after formation. Choose a single item such as a VAT registration or hand over your annual filings.",
      "Every service shows how often it applies, so you can plan your annual calendar from day one.",
    ],
    audience: [
      { title: "UK Company Owners", description: "Founders running a UK limited company." },
      { title: "Amazon UK Sellers", description: "Sellers who need VAT and EORI numbers." },
      { title: "Employers", description: "Companies registering for PAYE." },
      { title: "Companies Changing Hands", description: "Owners selling or closing a company." },
    ],
    scope: [
      { title: "Director Changes", description: "Appoint a director or record a director exit." },
      { title: "Annual Filings", description: "File your Corporation Tax return and confirmation statement." },
      { title: "VAT and PAYE", description: "Register for VAT and PAYE and file your quarterly VAT returns." },
      { title: "EORI and UTR", description: "Obtain your EORI number and replace a lost UTR number." },
      { title: "Registered Office Address", description: "Get a company address with document scanning and forwarding." },
      { title: "Share Transfer and Closure", description: "Change shareholders or submit a voluntary closure." },
      { title: "Dormant Companies", description: "File a nil year-end return for a dormant company." },
      { title: "Trademark Registration", description: "File your trademark for a single class." },
    ],
    process: [
      { icon: "message", title: "Your Request", description: "Share your company number and needs." },
      { icon: "folder", title: "Documents", description: "Send the details each filing requires." },
      { icon: "badge-check", title: "Filing and Confirmation", description: "Complete the filing and receive proof." },
    ],
    considerations: [
      "Companies House and HMRC set their own processing times.",
      "VAT registration depends on the turnover threshold and the business activity.",
      "Every company files a confirmation statement at least once every 12 months.",
      "A trademark filing covers a single class and the registration lasts 10 years.",
    ],
    relatedServices: ["uk-company-formation", "tax-advisory", "accounting"],
    relatedSectors: ["e-commerce", "export-and-logistics", "smes-and-enterprises"],
    faqIds: ["uk-annual-obligations", "uk-registered-office", "uk-identity-verification", "company-dissolution"],
    catalog: {
      title: "UK Service List",
      description: "Choose the items you need and hand them to one team.",
      groups: ukServiceGroups,
      note: ukServiceNote,
    },
    featured: false,
    seo: {
      title: "UK Company Services for Limited Companies",
      description:
        "Get UK VAT and PAYE registration along with Corporation Tax returns and registered office address and director services from one team.",
    },
    status: "published",
    updatedAt: "2026-11-09",
  },
  {
    slug: "europe-company-services",
    title: "European Company Services",
    shortTitle: "European Company Services",
    icon: "globe",
    jurisdiction: "europe",
    summary: "Plan your company and tax setup for European markets.",
    definition:
      "European company services cover market and structure planning along with VAT and EORI steps for businesses entering countries in Europe.",
    intro: [
      "Reach European customers with a structure that fits your target country. Review company and tax options along with banking and marketplace steps in one plan.",
      "Requirements differ by country, so every project starts with a review of your target market.",
    ],
    audience: [
      { title: "Brands Entering Europe", description: "Businesses planning European sales." },
      { title: "E-Commerce Sellers", description: "Sellers opening European stores." },
      { title: "Exporters", description: "Manufacturers selling to EU buyers." },
      { title: "UK Companies Expanding", description: "UK firms adding EU markets." },
    ],
    scope: [
      { title: "Country and Structure Review", description: "Compare company options for your target country." },
      { title: "VAT and EORI Planning", description: "Plan the VAT and customs numbers your sales require." },
      { title: "Bank and Payment Setup", description: "Prepare applications for accounts and payment platforms." },
      { title: "Marketplace Setup", description: "Plan your seller accounts for European marketplaces." },
      { title: "Accounting and Filing Plan", description: "Set the calendar for local filings in your market." },
    ],
    process: [
      { icon: "target", title: "Target Market", description: "Share your country and sales goals." },
      { icon: "scale", title: "Country Options", description: "Compare structures and tax duties." },
      { icon: "route", title: "Roadmap", description: "Receive a plan with clear priorities." },
    ],
    considerations: [
      "Company law and tax rules differ in each European country.",
      "VAT duties depend on where you hold stock and where your customers live.",
      "Local filings may need a licensed advisor in the target country.",
    ],
    relatedServices: ["uk-company-formation", "international-bank-account-opening", "international-business-consulting"],
    relatedSectors: ["e-commerce", "export-and-logistics", "smes-and-enterprises"],
    faqIds: ["europe-coverage", "us-or-uk", "service-scope"],
    featured: true,
    seo: {
      title: "European Company Services and Market Entry",
      description:
        "Plan your company structure for European markets. Review VAT and EORI steps along with banking and marketplace setup for your target country.",
    },
    status: "published",
    updatedAt: "2026-11-09",
  },
  {
    slug: "international-bank-account-opening",
    title: "International Bank Account Opening",
    shortTitle: "Bank Account Opening",
    icon: "landmark",
    jurisdiction: "international",
    summary: "Open business accounts for your company abroad.",
    definition:
      "International bank account opening covers provider selection and application preparation for business accounts and payment platforms in the United States and the United Kingdom and across Europe.",
    intro: [
      "Choose the bank or payment platform that fits your company and your transaction volume. Prepare a complete application file and follow each step with one team.",
      "Plan the account together with company formation so your records match from the first application.",
    ],
    audience: [
      { title: "New Companies", description: "Companies that need a first account." },
      { title: "Owners Living Abroad", description: "Founders outside the target market." },
      { title: "E-Commerce Sellers", description: "Sellers who receive marketplace payouts." },
      { title: "Service Exporters", description: "Firms that invoice foreign clients." },
    ],
    scope: [
      { title: "US Business Accounts", description: "Apply for business accounts for your US company." },
      { title: "UK Business Accounts", description: "Apply for business accounts for your UK company." },
      { title: "European Account Options", description: "Compare account options for your target country." },
      { title: "Payment Platforms", description: "Set up accounts on platforms such as Wise and Payoneer." },
      { title: "Provider Selection", description: "Compare providers by country and currency along with fees." },
      { title: "Application File", description: "Prepare company and owner documents for each application." },
    ],
    process: [
      { icon: "search", title: "Company Review", description: "Share your company and sales channels." },
      { icon: "scale", title: "Provider Choice", description: "Compare banks and payment platforms." },
      { icon: "folder", title: "Application File", description: "Prepare and submit your documents." },
      { icon: "badge-check", title: "Account Activation", description: "Complete checks and start using it." },
    ],
    documents: [
      "Company formation documents",
      "Tax identification details such as EIN or UTR",
      "Passport details for each owner",
      "Proof of address for each owner",
      "A short description of business activities",
    ],
    considerations: [
      "Each bank decides every application under its own policy.",
      "Approval times vary by institution.",
      "Some providers limit certain countries and industries.",
      "Keep company and address details consistent across every application.",
    ],
    relatedServices: ["us-company-formation", "uk-company-formation", "international-business-consulting"],
    relatedSectors: ["e-commerce", "freelancers", "technology-companies", "entrepreneurs-and-investors"],
    faqIds: ["us-bank-account", "bank-account-coverage", "bank-account-documents"],
    featured: true,
    seo: {
      title: "International Bank Account Opening for Companies",
      description:
        "Open business bank and payment platform accounts for your company in the US and the UK and across Europe with a complete application file.",
    },
    status: "published",
    updatedAt: "2026-11-09",
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
      { title: "Owners Living Abroad", description: "Owners running firms remotely." },
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
      { icon: "search", title: "Current Position", description: "Share your entity type and past filings." },
      { icon: "calendar", title: "Obligation Calendar", description: "Collect every deadline in one calendar." },
      { icon: "folder", title: "Document Preparation", description: "Match documents with your books." },
      { icon: "send", title: "Filing and Follow-Up", description: "File returns and update the next cycle." },
    ],
    considerations: [
      "Tax obligations depend on the entity type and the residency of the owners along with the place of business.",
      "Your tax obligations in your country of residence need a separate review.",
      "No promise of tax savings is made. Advisory work focuses on accurate filings and timely compliance.",
      "Filing deadlines and penalties follow the rules of each tax authority.",
    ],
    relatedServices: ["accounting", "us-company-formation", "uk-company-services", "registered-agent"],
    relatedSectors: ["e-commerce", "freelancers", "smes-and-enterprises"],
    faqIds: ["us-filing-from-abroad", "form-5472", "tax-deadlines", "foreign-client-income"],
    featured: true,
    seo: {
      title: "Tax Advisory for US and UK Companies",
      description:
        "File federal and state returns for your US company and meet Form 5472 duties. Manage Corporation Tax for your UK company on time.",
    },
    status: "published",
    updatedAt: "2026-11-09",
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
      { icon: "search", title: "Scope", description: "Share your volume and reporting needs." },
      { icon: "book", title: "Bookkeeping Setup", description: "Agree on accounts and file sharing." },
      { icon: "arrow-left-right", title: "Records and Reconciliation", description: "Record and reconcile each period." },
      { icon: "chart", title: "Reporting", description: "Get reports and plan year end." },
    ],
    considerations: [
      "Accounting scope and record frequency depend on transaction volume.",
      "Regular document sharing keeps the records accurate.",
      "Record-keeping duties differ between the US and the UK.",
      "Record marketplace fees as separate items from refunds and shipping costs.",
    ],
    relatedServices: ["tax-advisory", "us-company-formation", "uk-company-services", "business-address-and-operations"],
    relatedSectors: ["e-commerce", "technology-companies", "smes-and-enterprises"],
    faqIds: ["accounting-scope", "marketplace-bookkeeping", "accounting-documents"],
    featured: true,
    seo: {
      title: "Accounting Services for US and UK Companies",
      description:
        "Keep income and expense records and bank reconciliations for your US and UK companies. Receive periodic reports and prepare for year end.",
    },
    status: "published",
    updatedAt: "2026-11-09",
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
      { icon: "map-pin", title: "State and Entity Type", description: "Share your state and entity type." },
      { icon: "user-check", title: "Appointment", description: "Add the agent to your filing or records." },
      { icon: "inbox", title: "Correspondence", description: "Receive official documents regularly." },
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
      { title: "US Business Address", description: "Get a professional US business address through US Company Address." },
      { title: "Annual Report Tracking", description: "Put state reports and renewal dates on your calendar." },
      { title: "Share and Company Transfers", description: "Plan transfers for your US company." },
      { title: "Company Dissolution", description: "Complete dissolution filings for US and UK companies." },
      { title: "DUNS Number", description: "Obtain a DUNS number for supplier registrations." },
      { title: "Trademark Registration", description: "File trademark applications in the US and the UK." },
    ],
    process: [
      { icon: "message", title: "Your Request", description: "Share your company status and plans." },
      { icon: "clipboard", title: "Action Plan", description: "Confirm documents and filing order." },
      { icon: "badge-check", title: "Execution", description: "Complete filings and update records." },
    ],
    considerations: [
      "Banks and marketplaces set their own rules for business address use.",
      "Annual report dates and fees vary by state.",
      "Transfers and closures need a review of final tax obligations.",
      "Trademark applications are subject to examination by the relevant office.",
    ],
    relatedServices: ["registered-agent", "us-company-formation", "uk-company-services", "tax-advisory"],
    relatedSectors: ["e-commerce", "export-and-logistics", "smes-and-enterprises"],
    faqIds: ["business-address-use", "company-dissolution", "service-scope"],
    externalReference: { label: "US Company Address Website", href: "https://uscompanyaddress.com" },
    featured: true,
    seo: {
      title: "Business Address and Company Operations",
      description:
        "Get a US business address and track annual compliance. Manage share transfers and company dissolution along with DUNS and trademark filings.",
    },
    status: "published",
    updatedAt: "2026-11-09",
  },
  {
    slug: "international-business-consulting",
    title: "International Business Consulting",
    shortTitle: "International Consulting",
    icon: "compass",
    jurisdiction: "international",
    summary: "Build an expansion plan for your target market.",
    definition:
      "International business consulting reviews structure and market decisions together with operational choices for businesses planning activity abroad.",
    intro: [
      "Company structure and payment setup affect each other along with marketplace accounts and tax. Review these decisions in one plan.",
      "Plan your entry into the US and UK markets and across Europe with experience in e-commerce and export along with digital services.",
    ],
    audience: [
      { title: "First-Time Expanders", description: "Firms choosing a country and structure." },
      { title: "E-Commerce Founders", description: "Brands launching on Amazon." },
      { title: "Companies Reviewing Structure", description: "Owners checking compliance abroad." },
      { title: "Single-Topic Advice", description: "Founders who need one session." },
    ],
    scope: [
      { title: "Market and Structure", description: "Compare US and UK and European options side by side." },
      { title: "Marketplace Processes", description: "Get guidance on Amazon account setup and seller processes." },
      { title: "Operations Plan", description: "Plan company and banking steps with payments and accounting in order." },
      { title: "One-to-One Sessions", description: "Clarify a specific topic in an hourly session." },
      { title: "Structure Review", description: "Review the records and compliance of your company abroad." },
    ],
    process: [
      { icon: "target", title: "Goals", description: "Share your product and customer goals." },
      { icon: "scale", title: "Options", description: "Compare countries and sales channels." },
      { icon: "route", title: "Roadmap", description: "Receive a plan with clear priorities." },
    ],
    considerations: [
      "Sessions serve information and planning purposes. Legal and tax decisions need a detailed review.",
      "Marketplace and payment provider approvals follow their own policies.",
      "Licensing and product rules in the target country vary by industry.",
    ],
    relatedServices: ["us-company-formation", "uk-company-formation", "europe-company-services"],
    relatedSectors: ["e-commerce", "export-and-logistics", "entrepreneurs-and-investors"],
    faqIds: ["us-or-uk", "amazon-account-support", "service-scope"],
    featured: true,
    seo: {
      title: "International Business Consulting",
      description:
        "Plan your entry into the US and UK markets and across Europe. Choose a company structure and plan marketplace and operational steps around your business model.",
    },
    status: "published",
    updatedAt: "2026-11-09",
  },
  {
    slug: "amazon-and-e-commerce",
    title: "Amazon and E-Commerce Consulting",
    shortTitle: "Amazon and E-Commerce",
    icon: "shopping-bag",
    jurisdiction: "international",
    summary: "Open and grow your Amazon and e-commerce business.",
    definition:
      "Amazon and e-commerce consulting covers seller account setup and business model choice along with account suspension support for online sellers.",
    intro: [
      "Open your Amazon seller account and choose the business model that fits your budget and your target market.",
      "Get practical guidance on private label and arbitrage along with account health and growth.",
    ],
    audience: [
      { title: "New Sellers", description: "Founders opening a first store." },
      { title: "Private Label Brands", description: "Brands launching own products." },
      { title: "Arbitrage Sellers", description: "Sellers using wholesale models." },
      { title: "Suspended Accounts", description: "Sellers with a suspended account." },
    ],
    scope: [
      { title: "Amazon Account Opening", description: "Open seller accounts for sales around the world." },
      { title: "Private Label Consulting", description: "Plan your own brand and product launch on Amazon." },
      { title: "Wholesale and Arbitrage", description: "Review wholesale and online arbitrage business models." },
      { title: "Suspension Solutions", description: "Respond to account and ASIN and intellectual property suspensions." },
      { title: "E-Commerce Growth Program", description: "Build business development and corporate growth skills." },
      { title: "Hourly Sessions", description: "Clarify a specific Amazon or e-commerce topic in one session." },
    ],
    process: [
      { icon: "target", title: "Goals", description: "Share your product and sales goals." },
      { icon: "search", title: "Store Review", description: "Review your model and account status." },
      { icon: "route", title: "Roadmap", description: "Receive steps with clear priorities." },
    ],
    considerations: [
      "Amazon decides every account approval and every appeal.",
      "Marketplace policies change regularly.",
      "Sales results depend on your product and budget along with your market.",
    ],
    relatedServices: ["international-bank-account-opening", "us-company-formation", "uk-company-formation"],
    relatedSectors: ["e-commerce", "entrepreneurs-and-investors"],
    faqIds: ["amazon-account-support", "amazon-us-company", "marketplace-bookkeeping"],
    featured: true,
    seo: {
      title: "Amazon Account Opening and E-Commerce Consulting",
      description:
        "Open your Amazon seller account and choose private label or arbitrage models. Get support for account suspensions and e-commerce growth.",
    },
    status: "published",
    updatedAt: "2026-11-09",
  },
];

export const services: Service[] = allServices.filter((service) => service.status === "published");

/** Services on the homepage band. Ten tiles plus two links fill its 4 x 3 grid. */
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
  europe: "Europe",
  "us-uk": "United States and United Kingdom",
  international: "United States and United Kingdom and Europe",
};

/** Groups on the Services page, so the offer reads by market. */
export const serviceGroups: { id: string; title: string; description: string; slugs: ServiceSlug[] }[] = [
  {
    id: "united-states",
    title: "United States",
    description: "Form and run your US company from anywhere.",
    slugs: ["us-company-formation", "registered-agent", "business-address-and-operations"],
  },
  {
    id: "united-kingdom-and-europe",
    title: "United Kingdom and Europe",
    description: "Set up your UK company and plan your European markets.",
    slugs: ["uk-company-formation", "uk-company-services", "europe-company-services"],
  },
  {
    id: "international",
    title: "International Services",
    description: "Support your company across every market.",
    slugs: [
      "international-bank-account-opening",
      "tax-advisory",
      "accounting",
      "international-business-consulting",
      "amazon-and-e-commerce",
    ],
  },
];
