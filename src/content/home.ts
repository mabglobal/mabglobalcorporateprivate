import { routes } from "@/config/routes";
import type { IconName, ProcessStep, TitledText } from "@/types/content";

/** Single-color logo in the strip under the hero. */
export interface PlatformLogo {
  name: string;
  src: string;
  width: number;
  height: number;
  /** Destination of the logo. Referral sign-ups are marked sponsored. */
  link?: { href: string; label: string; sponsored: boolean };
}

const platformLogos: readonly PlatformLogo[] = [
  { name: "Capital One", src: "/images/platforms/capital-one.svg", width: 117, height: 42 },
  { name: "Mercury", src: "/images/platforms/mercury.svg", width: 126, height: 29 },
  { name: "Wise", src: "/images/platforms/wise.svg", width: 114, height: 26 },
  { name: "Payoneer", src: "/images/platforms/payoneer.svg", width: 128, height: 27 },
  {
    name: "WorldFirst",
    src: "/images/platforms/worldfirst.svg",
    width: 133,
    height: 18,
    link: {
      href: "https://www.global-voyage.worldfirst.com/cn/partner-resources/mab-global-partners",
      label: "WorldFirst Partner Profile",
      sponsored: false,
    },
  },
  {
    name: "Zyla",
    src: "/images/platforms/zyla.svg",
    width: 106,
    height: 30,
    link: {
      href: "https://portal.zyla.com/register?affiliate_id=11418&region=US&step=0",
      label: "Zyla Sign-Up",
      sponsored: true,
    },
  },
  { name: "QuickBooks", src: "/images/platforms/quickbooks.svg", width: 129, height: 33 },
];

/**
 * Homepage copy. The hero, the platform strip and the navy services band
 * follow behringeb5.com; the sections below keep the staggered process boxes,
 * profile panel, working principles, industries, FAQ and contact band.
 * Copy style: Title Case headings, short one-line descriptions, no commas in
 * headings or descriptions, imperative "you" voice.
 */
export const homeContent = {
  hero: {
    title: "Build Your Global Business With the Right Company Structure",
    // Same service areas as the tagline in the MAB logo.
    proofPoints: ["Formation", "Tax", "Accounting", "Investment", "Business Advisory"],
    description:
      "MAB Global Partners helps entrepreneurs and companies set up and run their business in the United States and the United Kingdom and across Europe. Plan company formation together with tax and accounting under one roof.",
    primaryCta: { label: "Explore Our Services", href: routes.services },
    secondaryCta: { label: "Schedule a Consultation", href: routes.contactForm },
    imageAlt: "Classical colonnades and a domed building in navy tones",
  },
  /**
   * Banks, payment platforms and accounting software named by the client
   * (2026-10-12 and 2026-11-03). Shown as logos with an ownership note. Files
   * in public/images/platforms are single-color navy versions of each logo.
   * Zyla links to the client's referral sign-up page and WorldFirst to the
   * client's partner profile (2026-11-09), which the note discloses.
   */
  platforms: {
    caption: "Banking and Accounting Platforms",
    note: "Logos belong to their respective owners. The Zyla logo leads to our referral sign-up page and the WorldFirst logo to our partner profile.",
    items: platformLogos,
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
    title: "One Partner for Your International Business",
    features: [
      {
        title: "Formation and Compliance",
        text: "Form your company in the US or the UK and keep annual filings on schedule.",
      },
      {
        title: "Tax and Accounting",
        text: "Keep clean books and file your tax returns on time in every market.",
      },
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
