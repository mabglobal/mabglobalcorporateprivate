import type { CatalogGroup, CatalogItem } from "@/types/content";

/**
 * UK services from the client brochure "MAB İngiltere Danışmanlık Hizmetleri"
 * (supplied 2026-11-09). Every row is listed except the monthly director
 * salary. The client decided that prices stay off the site, so the brochure's
 * fee column is left out. See docs/content-verification.md.
 */
export const ukFormationPackage: CatalogItem = {
  title: "Company Formation With Amazon and Bank Account",
  description: "Form your UK company and open your Amazon UK and bank accounts.",
  frequency: "Package",
  includes: "Amazon, Wise, EORI and UTR",
};

export const ukServiceGroups: CatalogGroup[] = [
  {
    title: "Company Setup",
    items: [ukFormationPackage],
  },
  {
    title: "Directors and Ownership",
    items: [
      {
        title: "Director Appointment",
        description: "Appoint a director for your UK company.",
        frequency: "One-Time",
      },
      {
        title: "Director Exit",
        description: "Record the director exit when the appointment service ends.",
        frequency: "One-Time",
      },
      {
        title: "Share Transfer",
        description: "Change the shareholders of a company you sell or transfer.",
        frequency: "One-Time",
      },
    ],
  },
  {
    title: "Tax and Annual Filings",
    items: [
      {
        title: "Corporation Tax Return",
        description: "Complete the year-end closing and file the tax return for the period.",
        frequency: "Once per Year",
      },
      {
        title: "Confirmation Statement",
        description: "File the annual confirmation statement of your company.",
        frequency: "Once per Year",
      },
      {
        title: "VAT Return",
        description: "File the VAT returns of your VAT-registered company every three months.",
        frequency: "Every 3 Months",
      },
      {
        title: "Dormant Filing",
        description: "File a nil year-end return for a company that stays dormant or plans to close.",
        frequency: "Once per Year",
      },
    ],
  },
  {
    title: "Registrations and Numbers",
    items: [
      {
        title: "VAT Registration",
        description: "Apply for VAT registration and obtain your VAT number.",
        frequency: "One-Time",
        includes: "VAT Number",
      },
      {
        title: "PAYE Registration",
        description: "Apply for PAYE and activate your payroll scheme.",
        frequency: "One-Time",
        includes: "PAYE Reference",
      },
      {
        title: "EORI Number",
        description: "Obtain the EORI number of your company.",
        frequency: "One-Time",
      },
    ],
  },
  {
    title: "Company Records and Brand",
    items: [
      {
        title: "Authentication Code",
        description: "Have a lost authentication code sent to the company address.",
        frequency: "One-Time",
      },
      {
        title: "UTR Number",
        description: "Have a lost UTR number sent to the company address.",
        frequency: "One-Time",
      },
      {
        title: "Registered Office Address",
        description: "Get a one-year company address with document scanning and forwarding along with a director service address.",
        frequency: "Annual",
      },
      {
        title: "Trademark Registration",
        description: "File your trademark for a single class.",
        frequency: "10 Years",
      },
      {
        title: "Company Closure",
        description: "Submit the voluntary closure application of your company.",
        frequency: "One-Time",
      },
    ],
  },
];

export const ukServiceNote = "Contact our team for a quote on the items you need.";
