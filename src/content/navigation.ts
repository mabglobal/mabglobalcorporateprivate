import { routes } from "@/config/routes";
import type { NavGroup, NavItem } from "@/types/navigation";
import { articles } from "./articles";
import { services } from "./services";
import { sectors } from "./sectors";

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

export const insightNavigation: NavItem[] = articles.map((article) => ({
  label: article.title,
  href: routes.article(article.slug),
}));

/**
 * Header menu following behringeb5.com: uppercase labels, dropdowns for the
 * sections with sub-pages, "About Us" and "Contact Us" as plain links.
 */
export const mainNavigation: NavItem[] = [
  {
    label: "Services",
    href: routes.services,
    children: [...serviceNavigation, { label: "All Services", href: routes.services }],
  },
  {
    label: "Industries",
    href: routes.sectors,
    children: [...sectorNavigation, { label: "All Industries", href: routes.sectors }],
  },
  {
    label: "Insights",
    href: routes.knowledge,
    children: [...insightNavigation, { label: "All Insights", href: routes.knowledge }],
  },
  { label: "About Us", href: routes.about },
  { label: "Contact Us", href: routes.contact },
];

/** Primary footer links, set bold and underlined as in the footer reference. */
export const footerLinks: NavItem[] = [
  { label: "Our Services", href: routes.services },
  { label: "Industries", href: routes.sectors },
  { label: "Insights", href: routes.knowledge },
  { label: "About Us", href: routes.about },
  { label: "Contact Us", href: routes.contact },
];

export const footerNavigation: NavGroup[] = [
  { title: "Services", items: serviceNavigation },
  { title: "Company", items: footerLinks },
];

export const legalNavigation: NavItem[] = [
  { label: "Privacy Policy", href: routes.privacy },
  { label: "Cookie Policy", href: routes.cookies },
  { label: "KVKK Notice", href: routes.kvkk },
  { label: "Legal Notice", href: routes.legalNotice },
];
