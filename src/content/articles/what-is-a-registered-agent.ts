import { routes } from "@/config/routes";
import type { Article } from "@/types/content";

export const whatIsARegisteredAgent: Article = {
  slug: "what-is-a-registered-agent",
  title: "What Is a Registered Agent and Why Do You Need One?",
  summary: "Learn what a registered agent does and how to choose a service.",
  category: "accounting-and-compliance",
  author: { type: "organization", name: "MAB Global Partners Editorial Team" },
  publishedAt: "2026-10-12",
  updatedAt: "2026-10-12",
  reviewBy: "2027-04-12",
  sections: [
    {
      heading: "Definition of a Registered Agent",
      paragraphs: [
        "According to the SBA a registered agent is a person or service that accepts official paperwork and legal documents on behalf of a company.",
        "Many business owners use a professional registered agent service in place of taking on this role themselves.",
      ],
    },
    {
      heading: "Which Companies Need a Registered Agent",
      paragraphs: [
        "According to the SBA LLCs and corporations along with partnerships and nonprofits appoint a registered agent before they file for formation with the state.",
      ],
    },
    {
      heading: "Where a Registered Agent Must Be Located",
      paragraphs: [
        "The registered agent must be located in the state where the company registers. For this reason owners who live outside the US and founders without a physical address in the state usually work with a professional service.",
        "A company that registers to operate in a state other than its formation state may need an agent in that state too.",
      ],
    },
    {
      heading: "Criteria for Choosing a Service",
      paragraphs: [
        "The choice of registered agent directly affects how reliably official mail reaches the company. The criteria below can guide your comparison.",
      ],
      list: [
        "Coverage of the states where your company is registered and operates",
        "How and how quickly incoming documents reach you",
        "Reminders for annual report and compliance dates",
        "Support for your entity type",
        "A fit with your working preferences such as communication in your language",
      ],
    },
    {
      heading: "The MAB Global Partners Approach",
      paragraphs: [
        "MAB Registered Agent Inc. operates within MAB Global Partners and provides registered agent services for every entity type across all 50 states and Washington D.C. See the scope on our registered agent page.",
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
  ],
  relatedLinks: [
    { label: "Our Registered Agent Services", href: routes.service("registered-agent") },
    { label: "US Company Formation", href: routes.service("us-company-formation") },
    { label: "US Company Formation Guide", href: routes.article("us-company-formation-guide") },
  ],
  seo: {
    title: "What Is a Registered Agent and Why Do You Need One?",
    description:
      "The role of a registered agent and which companies need one along with criteria for choosing a registered agent service.",
  },
  status: "published",
};
