import { routes } from "@/config/routes";
import type { NavGroup, NavItem } from "@/types/navigation";
import { services } from "./services";
import { sectors } from "./sectors";

export const mainNavigation: NavItem[] = [
  { label: "Ana Sayfa", href: routes.home },
  { label: "Hakkımızda", href: routes.about },
  { label: "Hizmetler", href: routes.services },
  { label: "Sektörler", href: routes.sectors },
  { label: "Bilgi Merkezi", href: routes.knowledge },
  { label: "İletişim", href: routes.contact },
];

export const primaryCta: NavItem = {
  label: "Danışmanlık Talep Edin",
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
  { title: "Hizmetler", items: serviceNavigation },
  {
    title: "Kurumsal",
    items: [
      { label: "Hakkımızda", href: routes.about },
      { label: "Sektörler", href: routes.sectors },
      { label: "Bilgi Merkezi", href: routes.knowledge },
      { label: "İletişim", href: routes.contact },
    ],
  },
];

export const legalNavigation: NavItem[] = [
  { label: "Gizlilik Politikası", href: routes.privacy },
  { label: "Çerez Politikası", href: routes.cookies },
  { label: "KVKK Aydınlatma Metni", href: routes.kvkk },
  { label: "Yasal Uyarı", href: routes.legalNotice },
];
