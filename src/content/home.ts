import { routes } from "@/config/routes";
import type { IconName, ServiceSlug, TitledText } from "@/types/content";

/**
 * Homepage copy. The layout follows the consulting reference: framed badge,
 * two-tone heading over an architectural photo, grouped service list,
 * staggered process boxes, about block with figures, working principles,
 * sectors, FAQ and a contact band.
 */
export const homeContent = {
  hero: {
    badge: "ABD ve Birleşik Krallık · Türkçe danışmanlık",
    titleLead: "Global işinizi",
    titleRest: "sağlam temeller üzerine kurun.",
    description:
      "Amerika ve İngiltere'de şirket kuruluşundan vergi ve muhasebe süreçlerine kadar uluslararası operasyonlarınızı yönetin.",
    primaryCta: { label: "Danışmanlık Talep Edin", href: routes.contactForm },
    secondaryCta: { label: "Hizmetleri İnceleyin", href: routes.services },
    imageAlt: "Sütunlu cepheleri ve kubbesiyle klasik tarihi yapılar",
  },
  services: {
    tag: "Hizmet alanları",
    titleLead: "Uluslararası işinize",
    titleAccent: "uygun hizmeti seçin",
    allServicesLabel: "Tüm hizmetler",
    groups: [
      {
        label: "Şirket kuruluşu",
        description: "ABD veya Birleşik Krallık'ta şirketinizi kurun.",
        services: ["amerika-sirket-kurulusu", "ingiltere-sirket-kurulusu"],
        featured: "registered-agent",
      },
      {
        label: "Vergi ve operasyon",
        description: "Kuruluştan sonraki yükümlülükleri düzenli yönetin.",
        services: ["vergi-danismanligi", "muhasebe-hizmetleri", "is-adresi-ve-sirket-operasyonlari"],
        featured: "uluslararasi-is-danismanligi",
      },
    ] satisfies { label: string; description: string; services: ServiceSlug[]; featured: ServiceSlug }[],
  },
  process: {
    tag: "Çalışma süreci",
    title: "Nasıl çalışır",
    description: "Üç adımda net bir yol haritası oluşturun.",
    steps: [
      {
        title: "İhtiyaçların Belirlenmesi",
        description: "Hedef pazarınızı ve beklentilerinizi paylaşın.",
      },
      {
        title: "Uygun Yapının Planlanması",
        description: "Uygun kuruluş yapısını birlikte planlayın.",
      },
      {
        title: "Süreçlerin Yönetimi",
        description: "Uyum süreçlerinizi anlaşılan kapsamda yönetin.",
      },
    ] satisfies TitledText[],
  },
  about: {
    tag: "Hakkımızda",
    title: "MAB Global Partners",
    subtitle: "Uluslararası şirket süreçlerinde Türkçe danışmanlık",
    paragraphs: [
      "MAB Global Partners, Amerika ve Birleşik Krallık'ta iş yapmak isteyen girişimcilere ve şirketlere destek veren kurumsal hizmetler markasıdır.",
      "Şirket kuruluşu, registered agent, vergi ve muhasebe adımlarını tek bir çatı altında planlayın.",
    ],
    stats: [
      { value: "50", label: "Eyalette registered agent" },
      { value: "2", label: "Odak pazar" },
      { value: "7", label: "Hizmet alanı" },
    ],
    linkLabel: "Bizi tanıyın",
    imageAlt: "Klasik sütunların yakından görünümü",
  },
  principles: {
    tag: "Neden MAB Global Partners",
    title: "Çalışma ilkeleri",
    items: [
      {
        icon: "globe",
        title: "Uluslararası uzmanlık",
        description: "ABD ve İngiltere süreçlerini deneyimli ekiple yürütün.",
      },
      {
        icon: "layers",
        title: "Tek plan, tek ekip",
        description: "Kuruluş, muhasebe ve vergiyi tek planda toplayın.",
      },
      {
        icon: "calendar",
        title: "Düzenli takip",
        description: "Beyan ve yenileme tarihlerini önceden öğrenin.",
      },
    ] satisfies (TitledText & { icon: IconName })[],
    cta: {
      title: "Ön görüşme talep edin",
      description: "İhtiyacınızı paylaşın, uygun yapıyı birlikte belirleyin.",
      href: routes.contactForm,
    },
  },
  sectors: {
    tag: "Kimler için",
    title: "İş modelinize uygun yapı",
    description: "Size en yakın alanı seçin.",
    allSectorsLabel: "Tüm sektörler",
  },
  faq: {
    tag: "Sıkça sorulan sorular",
    title: "Merak edilen konular",
    description: "Merak edilen konuların kısa yanıtları.",
  },
} as const;

/** Contact band shown above the footer on most pages. */
export const contactBand = {
  tag: "İletişim",
  title: "İletişime geçin",
  description: "Uluslararası iş planınızı paylaşın, uygun hizmetleri ve sonraki adımları öğrenin.",
  cardTitle: "Görüşme talep edin",
  cardDescription: "Formu doldurun, ekibimiz e-posta ile size dönüş yapsın.",
  cta: { label: "Danışmanlık Talep Edin", href: routes.contactForm },
} as const;
