import { routes } from "@/config/routes";
import type { Article } from "@/types/content";

export const usCompanyFormationGuide: Article = {
  slug: "us-company-formation-guide",
  title: "US Company Formation Guide",
  summary: "Learn the key steps for forming an LLC or corporation in the US.",
  category: "us-company-formation",
  author: { type: "organization", name: "MAB Global Partners Editorial Team" },
  publishedAt: "2026-10-12",
  updatedAt: "2026-10-12",
  reviewBy: "2027-04-12",
  sections: [
    {
      heading: "Companies Form at the State Level",
      paragraphs: [
        "Companies in the United States form at the state level. According to the SBA most states handle registration through the Secretary of State office or a state business agency.",
        "Filing fees and annual report duties along with processing times change from state to state. This makes the choice of state one of the first and most important formation decisions.",
      ],
    },
    {
      heading: "The Core Difference Between an LLC and a Corporation",
      paragraphs: [
        "An LLC offers flexible management and limited liability. It forms with a document called the articles of organization.",
        "A corporation offers a more formal structure with shares and a board of directors along with officers. It forms with articles of incorporation. Startups that plan to raise investment often consider this structure.",
      ],
    },
    {
      heading: "The Registered Agent Requirement",
      paragraphs: [
        "According to the SBA LLCs and corporations along with partnerships and nonprofits appoint a registered agent in their state before they file for formation.",
        "The registered agent accepts official correspondence and legal documents on behalf of the company. The agent must be located in the state where the company registers.",
      ],
    },
    {
      heading: "Applying for an EIN",
      paragraphs: [
        "The EIN is the employer identification number the IRS assigns to companies. Bank account applications and tax returns use it along with many marketplace verifications.",
        "The IRS charges no fee for an EIN. Online applications are open to applicants whose principal business is in the US or a US territory and whose responsible party has an SSN or ITIN. Applicants with a principal business outside the US apply by phone or fax or mail.",
      ],
    },
    {
      heading: "Information Returns for Foreign-Owned LLCs",
      paragraphs: [
        "Under IRS instructions a single-member LLC owned by a foreign person counts as a corporation for the requirements of section 6038A. These companies may need to file Form 5472 with a pro forma Form 1120.",
        "The IRS sets a penalty of USD 25,000 for a reporting corporation that misses the Form 5472 deadline. This makes it important to plan the information return during formation.",
      ],
    },
    {
      heading: "Annual Follow-Up After Formation",
      paragraphs: [
        "Recurring duties begin after formation. They include the annual report and registered agent renewal along with federal and state tax returns.",
        "Turning these dates into a calendar during formation lowers the risk of delays.",
      ],
      list: [
        "State annual report and renewal fees",
        "Continuity of the registered agent service",
        "Federal tax returns and information returns",
        "Sales tax duties in the states where you sell",
      ],
    },
    {
      heading: "Topics That Need a Personal Review",
      paragraphs: [
        "This guide provides general information and is no substitute for personal legal or tax advice. Entity type and state choice along with tax obligations depend on your personal and business situation.",
      ],
    },
  ],
  sources: [
    {
      title: "Register your business",
      publisher: "U.S. Small Business Administration",
      url: "https://www.sba.gov/business-guide/launch-your-business/register-your-business",
      accessedAt: "2026-10-12",
    },
    {
      title: "Get an employer identification number",
      publisher: "Internal Revenue Service",
      url: "https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number",
      accessedAt: "2026-10-12",
    },
    {
      title: "Instructions for Form 5472",
      publisher: "Internal Revenue Service",
      url: "https://www.irs.gov/instructions/i5472",
      accessedAt: "2026-10-12",
    },
  ],
  relatedLinks: [
    { label: "Our US Company Formation Service", href: routes.service("us-company-formation") },
    { label: "Our Registered Agent Services", href: routes.service("registered-agent") },
    { label: "Tax Advisory for US Companies", href: routes.service("tax-advisory") },
  ],
  seo: {
    title: "US Company Formation Guide for LLCs and EIN and Registered Agents",
    description:
      "A guide based on official sources to state choice and registered agents along with EIN applications and Form 5472 duties when you form a US company.",
  },
  status: "published",
};
