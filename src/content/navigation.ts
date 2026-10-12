import { routes } from "@/config/routes";
import type { NavGroup, NavItem } from "@/types/navigation";
import { services } from "./services";
import { sectors } from "./sectors";

export const mainNavigation: NavItem[] = [
  { label: "About", href: routes.about },
  { label: "Services", href: routes.services },
  { label: "Industries", href: routes.sectors },
  { label: "Insights", href: routes.knowledge },
  { label: "Contact", href: routes.contact },
];

export const primaryCta: NavItem = {
  label: "Book a Consultation",
  href: routes.contactForm,
};

/** Compact call to action in the header, as in the hero reference. */
export const headerCta: NavItem = {
  label: "Get in Touch",
  href: routes.contactForm,
};

export const serviceNavigation: NavItem[] = services.map((service) => ({
  label: service.shortTitle,
  href: routes.service(service.slug),
}));

export const sectorNavigation: NavItem[] = sectors.map((sector) => ({
  label: sector.shortTitle,
  href: routes.sector(sector.slug),
}));

export const footerNavigation: NavGroup[] = [
  { title: "Services", items: serviceNavigation },
  {
    title: "Company",
    items: [
      { label: "About", href: routes.about },
      { label: "Industries", href: routes.sectors },
      { label: "Insights", href: routes.knowledge },
      { label: "Contact", href: routes.contact },
    ],
  },
];

export const legalNavigation: NavItem[] = [
  { label: "Privacy Policy", href: routes.privacy },
  { label: "Cookie Policy", href: routes.cookies },
  { label: "KVKK Notice", href: routes.kvkk },
  { label: "Legal Notice", href: routes.legalNotice },
];
