import { routes } from "@/config/routes";
import type { IsoDate } from "@/types/content";
import type { ChangeFrequency } from "@/types/seo";

/**
 * Registry of fixed (non-collection) pages. Page metadata, the sitemap and
 * llms.txt read titles, descriptions and modification dates from here.
 */
export interface StaticPage {
  key: StaticPageKey;
  path: string;
  title: string;
  description: string;
  updatedAt: IsoDate;
  changeFrequency: ChangeFrequency;
  priority: number;
  absoluteTitle?: boolean;
}

export type StaticPageKey =
  | "home"
  | "about"
  | "services"
  | "sectors"
  | "knowledge"
  | "contact"
  | "privacy"
  | "cookies"
  | "kvkk"
  | "legalNotice";

export const staticPages: Record<StaticPageKey, StaticPage> = {
  home: {
    key: "home",
    path: routes.home,
    title:
      "MAB Global Partners | Amerika ve İngiltere'de Şirket Kuruluşu, Vergi ve Muhasebe",
    description:
      "Amerika ve İngiltere'de şirketinizi kurun, vergi, muhasebe ve registered agent süreçlerinizi Türkçe destekle tek ekiple yönetin.",
    updatedAt: "2026-10-12",
    changeFrequency: "monthly",
    priority: 1,
    absoluteTitle: true,
  },
  about: {
    key: "about",
    path: routes.about,
    title: "Hakkımızda",
    description:
      "MAB Global Partners, uluslararası iş yapan girişimcilere ve şirketlere şirket kuruluşu, vergi, muhasebe ve uyum süreçlerinde destek veren kurumsal hizmetler markasıdır.",
    updatedAt: "2026-10-12",
    changeFrequency: "yearly",
    priority: 0.7,
  },
  services: {
    key: "services",
    path: routes.services,
    title: "Hizmetler",
    description:
      "Amerika ve İngiltere'de şirket kuruluşu, vergi danışmanlığı, muhasebe, registered agent, iş adresi ve uluslararası iş danışmanlığı hizmetlerimiz.",
    updatedAt: "2026-10-12",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  sectors: {
    key: "sectors",
    path: routes.sectors,
    title: "Sektörler",
    description:
      "E-ticaret, ihracat ve lojistik, serbest çalışanlar, teknoloji şirketleri, girişimciler ve kurumsal işletmeler için uluslararası şirket ve uyum çözümleri.",
    updatedAt: "2026-10-12",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  knowledge: {
    key: "knowledge",
    path: routes.knowledge,
    title: "Bilgi Merkezi",
    description:
      "Amerika ve İngiltere'de şirket kuruluşu, vergi ve uyum süreçleri hakkında resmi kaynaklara dayanan rehberler.",
    updatedAt: "2026-10-12",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  contact: {
    key: "contact",
    path: routes.contact,
    title: "İletişim ve Danışmanlık Talebi",
    description:
      "MAB Global Partners ile iletişime geçin. Uluslararası şirket kuruluşu, vergi ve muhasebe ihtiyaçlarınız için danışmanlık talep edin.",
    updatedAt: "2026-10-12",
    changeFrequency: "yearly",
    priority: 0.8,
  },
  privacy: {
    key: "privacy",
    path: routes.privacy,
    title: "Gizlilik Politikası",
    description:
      "MAB Global Partners web sitesinde kişisel verilerin hangi amaçlarla işlendiğini ve nasıl korunduğunu açıklayan gizlilik politikası.",
    updatedAt: "2026-10-12",
    changeFrequency: "yearly",
    priority: 0.3,
  },
  cookies: {
    key: "cookies",
    path: routes.cookies,
    title: "Çerez Politikası",
    description:
      "MAB Global Partners web sitesinde kullanılan çerezler ve benzeri teknolojiler hakkında bilgilendirme.",
    updatedAt: "2026-10-12",
    changeFrequency: "yearly",
    priority: 0.3,
  },
  kvkk: {
    key: "kvkk",
    path: routes.kvkk,
    title: "KVKK Aydınlatma Metni",
    description:
      "6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında iletişim formu ve e-posta yoluyla paylaşılan kişisel verilere ilişkin aydınlatma metni.",
    updatedAt: "2026-10-12",
    changeFrequency: "yearly",
    priority: 0.3,
  },
  legalNotice: {
    key: "legalNotice",
    path: routes.legalNotice,
    title: "Yasal Uyarı",
    description:
      "MAB Global Partners web sitesindeki içeriklerin kullanım koşulları ve bilgilendirme amacına ilişkin yasal uyarı.",
    updatedAt: "2026-10-12",
    changeFrequency: "yearly",
    priority: 0.2,
  },
};
