import { routes } from "@/config/routes";
import type { IconName, ProcessStep, TitledText } from "@/types/content";

/**
 * Homepage copy. The hero, the capability strip and the navy services band
 * follow behringeb5.com; the sections below keep the staggered process boxes,
 * profile panel, working principles, industries, FAQ and contact band.
 * Copy style: Title Case headings, short one-line descriptions, no commas in
 * headings or descriptions, imperative "you" voice.
 */
export const homeContent = {
  hero: {
    title: "Invest in the United States With the Right Company Structure",
    // Same service areas as the tagline in the MAB logo.
    proofPoints: ["Formation", "Tax", "Accounting", "Investment", "Business Advisory"],
    description:
      "MAB Global Partners helps entrepreneurs and companies set up and run their business in the United States. Plan company formation together with tax and accounting under one roof.",
    primaryCta: { label: "Explore Our Services", href: routes.services },
    secondaryCta: { label: "Schedule a Consultation", href: routes.contactForm },
    imageAlt: "Classical colonnades and a domed building in navy tones",
  },
  capabilities: {
    caption: "What We Handle",
    items: [
      "LLC Formation",
      "Corporations",
      "EIN and ITIN",
      "Registered Agent",
      "Form 5472",
      "Sales Tax",
      "Companies House",
      "Corporation Tax",
      "Annual Reports",
      "Bookkeeping",
      "DUNS Number",
      "Trademarks",
    ],
  },
  servicesBand: {
    title: "Explore Our Company Services",
    description: "Choose the service you need and plan every step with one team.",
    allServicesLabel: "All Services",
    allServicesDescription: "Compare every service in one place.",
  },
  process: {
    tag: "Process",
    title: "How It Works",
    description: "Build a clear roadmap in three steps.",
    steps: [
      {
        icon: "message",
        title: "Define Your Needs",
        description: "Share your target market and goals.",
      },
      {
        icon: "drafting-compass",
        title: "Plan the Structure",
        description: "Plan the right company structure together.",
      },
      {
        icon: "badge-check",
        title: "Manage the Process",
        description: "Stay compliant within the agreed scope.",
      },
    ] satisfies ProcessStep[],
  },
  about: {
    label: "About MAB Global Partners",
    title: "One Partner for Your US and UK Business",
    features: [
      {
        title: "Formation and Compliance",
        text: "Form your company in the US or the UK and keep annual filings on schedule with registered agent support.",
      },
      {
        title: "Tax and Accounting",
        text: "Keep clean books and file federal and state returns or UK Corporation Tax returns on time.",
      },
    ],
    facts: [
      [
        { label: "Registered Agent States", value: "50" },
        { label: "Focus Markets", value: "2" },
      ],
      [
        { label: "Service Areas", value: "7" },
        { label: "Entity Types Served", value: "All" },
      ],
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
        description: "Get clear guidance on US and UK rules.",
      },
      {
        icon: "layers",
        title: "Single Point of Contact",
        description: "One team handles every step for you.",
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
