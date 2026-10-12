import type { FaqItem } from "@/types/content";

/**
 * Shared FAQ registry. Services, sectors and the homepage reference entries
 * by id so an answer is written and maintained once.
 */
const allFaqs: FaqItem[] = [
  {
    id: "us-or-uk",
    question: "Should I form my company in the US or the UK?",
    answer:
      "The answer depends on your target market and where your customers are along with your sales channels. Compare both options against your own business model in an initial consultation.",
    status: "published",
  },
  {
    id: "us-travel-required",
    question: "Do I need to travel to the US to form a company?",
    answer:
      "In many states the filing happens online and you can stay where you are. Steps such as opening a bank account follow the rules of each institution.",
    status: "published",
  },
  {
    id: "us-state-choice",
    question: "Which state should I form my company in?",
    answer:
      "The choice depends on where you operate and on annual costs along with your investment plans. Compare Delaware and Wyoming with other states for your business model.",
    status: "published",
  },
  {
    id: "us-ein",
    question: "What is an EIN and why do I need one?",
    answer:
      "An EIN is the nine-digit employer identification number the IRS assigns to companies. Banks and tax returns use it along with marketplace verification. The IRS charges no fee for it.",
    status: "published",
  },
  {
    id: "us-bank-account",
    question: "Can a bank account opening be guaranteed?",
    answer:
      "No. Account approval is the decision of the bank. Prepare complete application documents and the institution reviews them under its own policy.",
    status: "published",
  },
  {
    id: "formation-timeline",
    question: "How long does company formation take?",
    answer:
      "The timeline depends on the workload of the state or country and the completeness of documents along with identity verification steps. Official processing times carry no fixed commitment.",
    status: "published",
  },
  {
    id: "uk-registered-office",
    question: "Which address does my UK company need?",
    answer:
      "The registered office must be a physical address that accepts post in the UK country where the company is registered. PO Box services are unsuitable for this purpose.",
    status: "published",
  },
  {
    id: "uk-identity-verification",
    question: "Is identity verification mandatory for UK directors?",
    answer:
      "Yes. From 18 November 2025 Companies House identity verification is a legal requirement for directors and persons with significant control (PSCs).",
    status: "published",
  },
  {
    id: "uk-annual-obligations",
    question: "What are the annual obligations of a UK company?",
    answer:
      "Every company files a confirmation statement at least once every 12 months. It prepares annual accounts and submits a Company Tax Return and pays Corporation Tax.",
    status: "published",
  },
  {
    id: "us-filing-from-abroad",
    question: "Do I need to file returns for my US company if I live abroad?",
    answer:
      "US companies may have federal and state filing duties. The duties depend on the entity type and its transactions. Review your tax position in your country of residence separately.",
    status: "published",
  },
  {
    id: "form-5472",
    question: "Which returns does a foreign-owned single-member LLC file?",
    answer:
      "Under IRS instructions these companies may need to file Form 5472 with a pro forma Form 1120 for transactions with the owner. Payments made by the owner may count as reportable transactions.",
    status: "published",
  },
  {
    id: "tax-deadlines",
    question: "How do I keep track of tax deadlines?",
    answer:
      "Your company receives an annual compliance calendar and the documents you need are requested before each filing period. File ahead of the final day.",
    status: "published",
  },
  {
    id: "foreign-client-income",
    question: "Do I need a company for income from foreign clients?",
    answer:
      "Only in some cases. Income volume and client structure decide along with payment channels and your tax position. Compare both options in an initial consultation.",
    status: "published",
  },
  {
    id: "accounting-scope",
    question: "What does the accounting service cover?",
    answer:
      "Income and expense records form the core along with bank and platform reconciliations and periodic reports with year-end preparation. Set the scope according to your transaction volume.",
    status: "published",
  },
  {
    id: "marketplace-bookkeeping",
    question: "How are marketplace sales recorded?",
    answer:
      "Marketplace reports are matched with bank activity. Fees and refunds are recorded as separate items along with advertising and logistics costs.",
    status: "published",
  },
  {
    id: "accounting-documents",
    question: "Which documents should I share for accounting?",
    answer:
      "Share bank statements and payment platform reports along with sales reports and expense invoices. The service scope sets how often you share them.",
    status: "published",
  },
  {
    id: "registered-agent-role",
    question: "What does a registered agent do?",
    answer:
      "A registered agent accepts official correspondence and legal notices for the company. The agent keeps a physical address in the state where the company is registered.",
    status: "published",
  },
  {
    id: "registered-agent-required",
    question: "Is a registered agent mandatory?",
    answer:
      "Yes. LLCs and corporations appoint a registered agent in their state of registration before they file for formation.",
    status: "published",
  },
  {
    id: "registered-agent-coverage",
    question: "Which states does the registered agent service cover?",
    answer:
      "The MAB Registered Agent Inc. service covers all 50 states and Washington D.C. It serves every entity type including LLCs and corporations along with partnerships and nonprofits.",
    status: "published",
  },
  {
    id: "business-address-use",
    question: "What can I use a US business address for?",
    answer:
      "A business address serves company correspondence and business communication. Banks and marketplaces apply their own rules on address types along with public agencies.",
    status: "published",
  },
  {
    id: "company-dissolution",
    question: "How do I close a US or UK company I no longer use?",
    answer:
      "Dissolution is completed with an official filing to the state or Companies House. Review final returns and open obligations before you file.",
    status: "published",
  },
  {
    id: "service-scope",
    question: "How is the service scope decided?",
    answer:
      "Share your needs in an initial consultation. You then receive the proposed service scope with the process steps.",
    status: "published",
  },
  {
    id: "consultation-process",
    question: "What happens after I request a consultation?",
    answer:
      "Send the form and your request reaches our team. The team plans an initial consultation by email and sets out the services that fit your needs.",
    status: "published",
  },
  {
    id: "pricing",
    question: "How are service fees set?",
    answer:
      "Fees depend on the service scope and the state or country along with any ongoing services. Official agency fees appear as a separate item in the proposal.",
    status: "published",
  },
  {
    id: "amazon-us-company",
    question: "Do I need a US company to sell on Amazon?",
    answer:
      "Amazon accepts sellers from many countries. A US company can make payments and tax setup simpler along with brand registrations. Decide based on your sales goals.",
    status: "published",
  },
  {
    id: "sales-tax",
    question: "When does a US sales tax obligation start?",
    answer:
      "The obligation follows state rules and sales volume along with sales channels. In many states the marketplace collects the tax for the seller.",
    status: "published",
  },
  {
    id: "amazon-account-support",
    question: "Can I get help with Amazon account setup and account issues?",
    answer:
      "Yes. Get guidance on seller account setup and account suspensions. Account approvals and appeal outcomes depend on the decision of Amazon.",
    status: "published",
  },
  {
    id: "intercompany-transactions",
    question: "How are transactions between my home company and my company abroad recorded?",
    answer:
      "Intercompany product and service transactions along with financing are documented with contracts and invoices. Both companies record them consistently. Coordinate the home country side with your local accountant.",
    status: "published",
  },
  {
    id: "existing-company-takeover",
    question: "Can I hand over the follow-up of my existing foreign company?",
    answer:
      "Yes. The handover starts with a review of official records and registered agent details along with past filings. Missing steps go on the calendar and regular follow-up begins.",
    status: "published",
  },
];

export const faqs: FaqItem[] = allFaqs.filter((faq) => faq.status === "published");

export const homepageFaqIds = [
  "us-or-uk",
  "us-travel-required",
  "us-filing-from-abroad",
  "accounting-scope",
  "foreign-client-income",
  "service-scope",
  "consultation-process",
  "pricing",
] as const;

export function getFaqs(ids: readonly string[]): FaqItem[] {
  return ids
    .map((id) => faqs.find((faq) => faq.id === id))
    .filter((faq): faq is FaqItem => Boolean(faq));
}

/** Ids referenced anywhere that do not resolve to a published FAQ. */
export function findMissingFaqIds(ids: readonly string[]): string[] {
  const known = new Set(faqs.map((faq) => faq.id));
  return ids.filter((id) => !known.has(id));
}
