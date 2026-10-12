import { routes } from "@/config/routes";
import type { IconName, ServiceSlug, TitledText } from "@/types/content";

/**
 * Homepage copy. The hero follows the full-bleed consulting reference; the
 * sections below keep the framed service list, staggered process boxes,
 * profile block, working principles, industries, FAQ and contact band.
 * Copy style: Title Case headings, short one-line descriptions, no commas in
 * headings or descriptions, imperative "you" voice.
 */
export const homeContent = {
  hero: {
    badge: "US and UK Company Formation",
    titleLead: "Invest in America",
    titleRest: "With the Right Structure",
    description: "Form your US company and manage tax and accounting with one team.",
    primaryCta: { label: "Book a Consultation", href: routes.contactForm },
    secondaryCta: { label: "View Services", href: routes.services },
    imageAlt: "Classical colonnades and a domed building in navy tones",
  },
  services: {
    tag: "Services",
    titleLead: "Company Services",
    titleAccent: "Built Around Your Plans",
    allServicesLabel: "All Services",
    groups: [
      {
        label: "Company Formation",
        description: "Form your company in the US or the UK.",
        services: ["us-company-formation", "uk-company-formation"],
        featured: "registered-agent",
      },
      {
        label: "Tax and Operations",
        description: "Manage every obligation after formation.",
        services: ["tax-advisory", "accounting", "business-address-and-operations"],
        featured: "international-business-consulting",
      },
    ] satisfies { label: string; description: string; services: ServiceSlug[]; featured: ServiceSlug }[],
  },
  process: {
    tag: "Process",
    title: "How It Works",
    description: "Build a clear roadmap in three steps.",
    steps: [
      {
        title: "Define Your Needs",
        description: "Share your target market and goals.",
      },
      {
        title: "Plan the Structure",
        description: "Plan the right company structure together.",
      },
      {
        title: "Manage the Process",
        description: "Run compliance within the agreed scope.",
      },
    ] satisfies TitledText[],
  },
  about: {
    tag: "About Us",
    title: "MAB Global Partners",
    subtitle: "Company Services for the US and UK Markets",
    paragraphs: [
      "MAB Global Partners is a corporate services brand for entrepreneurs and companies that do business in the United States and the United Kingdom.",
      "Plan company formation and registered agent services together with tax and accounting under one roof.",
    ],
    stats: [
      { value: "50", label: "Registered Agent States" },
      { value: "2", label: "Focus Markets" },
      { value: "7", label: "Service Areas" },
    ],
    linkLabel: "Learn About Us",
    imageAlt: "Close view of classical columns",
  },
  principles: {
    tag: "Why MAB Global Partners",
    title: "Working Principles",
    items: [
      {
        icon: "globe",
        title: "International Expertise",
        description: "Run US and UK steps with experts.",
      },
      {
        icon: "layers",
        title: "One Plan and One Team",
        description: "Keep formation and tax in a single plan.",
      },
      {
        icon: "calendar",
        title: "Regular Follow-Up",
        description: "See filing and renewal dates early.",
      },
    ] satisfies (TitledText & { icon: IconName })[],
    cta: {
      title: "Book an Intro Call",
      description: "Share your needs and plan the next step.",
      href: routes.contactForm,
    },
  },
  sectors: {
    tag: "Industries",
    title: "Structures for Every Business Model",
    description: "Choose the area closest to your business.",
    allSectorsLabel: "All Industries",
  },
  faq: {
    tag: "FAQ",
    title: "Common Questions",
    description: "Short answers to frequent questions.",
  },
} as const;

/** Contact band shown above the footer on most pages. */
export const contactBand = {
  tag: "Contact",
  title: "Get in Touch",
  description: "Share your plans and learn the right next steps.",
  cardTitle: "Request a Consultation",
  cardDescription: "Fill in the form and our team replies by email.",
  cta: { label: "Book a Consultation", href: routes.contactForm },
} as const;
