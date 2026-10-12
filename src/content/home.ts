import { routes } from "@/config/routes";
import type { IconName, ProcessStep, TitledText } from "@/types/content";

/**
 * Homepage copy. The hero, the platform strip and the navy services band
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
  /**
   * Banks and payment platforms named by the client (2026-10-12). Shown as
   * logos without any partner claim, with an ownership note. Files in
   * public/images/platforms are single-color navy versions of each logo.
   */
  platforms: {
    caption: "Banking and Payment Platforms",
    note: "Logos belong to their respective owners and show no partnership or endorsement.",
    items: [
      { name: "Bank of America", src: "/images/platforms/bank-of-america.svg", width: 180, height: 18 },
      { name: "Capital One", src: "/images/platforms/capital-one.svg", width: 117, height: 42 },
      { name: "Mercury", src: "/images/platforms/mercury.svg", width: 126, height: 29 },
      { name: "Wise", src: "/images/platforms/wise.svg", width: 114, height: 26 },
      { name: "Payoneer", src: "/images/platforms/payoneer.svg", width: 128, height: 27 },
    ],
  },
  servicesBand: {
    title: "Explore Our Company Services",
    description: "Choose the service you need and plan every step with one team.",
    allServicesLabel: "All Services",
    allServicesDescription: "Compare every service in one place.",
    consultationLabel: "Book a Consultation",
    consultationDescription: "Plan your next step with our team.",
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
    title: "One Partner for Your US Business",
    features: [
      {
        title: "Formation and Compliance",
        text: "Form your US company and keep annual filings on schedule with registered agent support.",
      },
      {
        title: "Tax and Accounting",
        text: "Keep clean books and file your federal and state returns on time.",
      },
    ],
    facts: [
      [
        { label: "Registered Agent States", value: "50" },
        { label: "Focus Market", value: "US" },
      ],
      [
        { label: "Service Areas", value: "6" },
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
        description: "Get clear guidance on US rules.",
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
