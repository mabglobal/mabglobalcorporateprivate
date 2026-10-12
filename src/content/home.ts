import { routes } from "@/config/routes";
import type { IconName, TitledText } from "@/types/content";

/**
 * Homepage copy. Layout mirrors the reference composition: hero, why,
 * process panels, services, sectors, facts panel, market comparison, FAQ.
 * The closing call to action and footer live in the site footer.
 */
export const homeContent = {
  hero: {
    title: "Global işinizi sağlam temeller üzerine kurun.",
    description:
      "Amerika ve İngiltere'de şirket kuruluşundan vergi ve muhasebe süreçlerine kadar uluslararası operasyonlarınızı yönetin.",
    primaryCta: { label: "Danışmanlık Talep Edin", href: routes.contactForm },
    marketsLabel: "Odak pazarlar",
    markets: [
      { code: "ABD", name: "Amerika Birleşik Devletleri" },
      { code: "UK", name: "Birleşik Krallık" },
    ],
  },
  why: {
    title: "Neden MAB Global Partners",
    description: "Kuruluştan yıllık uyuma kadar tüm adımları tek ekiple yönetin.",
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
  },
  process: {
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
  services: {
    title: "Hizmetler",
    description: "İhtiyacınız olan hizmeti seçin, kuruluş sonrasıyla birlikte planlayın.",
    allServicesLabel: "Tüm hizmetler",
  },
  sectors: {
    title: "Kimler için",
    description: "İş modelinize en yakın alanı seçin.",
    allSectorsLabel: "Tüm sektörler",
  },
  facts: {
    title: "Kurumsal çerçeve",
    description: "İki ana pazarda kuruluş ve uyum süreçlerini aynı düzenle yönetin.",
    items: [
      {
        value: "ABD",
        title: "Amerika Birleşik Devletleri",
        description: "LLC ve corporation kuruluşu, EIN, vergi beyanları ve yıllık uyum.",
      },
      {
        value: "UK",
        title: "Birleşik Krallık",
        description: "Companies House kaydı, Corporation Tax ve yıllık hesaplar.",
      },
      {
        value: "50",
        title: "Eyalette registered agent",
        description: "MAB Registered Agent Inc. ile 50 eyalet ve Washington D.C.",
      },
    ],
  },
  comparison: {
    title: "Pazarınızı seçin",
    description: "Amerika ve Birleşik Krallık seçeneklerini karşılaştırın.",
    plans: [
      {
        key: "us",
        name: "Amerika",
        tagline: "ABD pazarına satış ve yatırım için",
        label: "LLC ve Corporation",
        tone: "dark",
        features: [
          "LLC ve corporation kuruluşu",
          "Registered agent ataması",
          "EIN başvurusu",
          "ABD iş adresi",
          "Federal ve eyalet beyanları",
          "Muhasebe ve yıllık uyum",
        ],
        cta: { label: "Amerika'da Şirket Kurun", href: routes.service("amerika-sirket-kurulusu") },
      },
      {
        key: "uk",
        name: "Birleşik Krallık",
        tagline: "Birleşik Krallık ve Avrupa pazarı için",
        label: "Private Limited Company",
        tone: "light",
        features: [
          "Limited şirket kuruluşu",
          "Companies House başvurusu",
          "Kimlik doğrulama adımları",
          "Registered office planı",
          "Corporation Tax kaydı",
          "Yıllık hesaplar ve muhasebe",
        ],
        cta: { label: "İngiltere'de Şirket Kurun", href: routes.service("ingiltere-sirket-kurulusu") },
      },
    ],
  },
  faq: {
    title: "Sıkça sorulan sorular",
    description: "Merak edilen konuların kısa yanıtları.",
  },
} as const;

/** Closing call to action shown above the footer on every page. */
export const closingCta = {
  title: "Uluslararası iş planınızı paylaşın.",
  description: "İhtiyaçlarınızı iletin, işletmeniz için uygun hizmetleri ve sonraki adımları öğrenin.",
  cta: { label: "İletişime Geçin", href: routes.contactForm },
} as const;
