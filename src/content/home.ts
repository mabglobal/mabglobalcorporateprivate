import { routes } from "@/config/routes";
import type { IconName, TitledText } from "@/types/content";

export const homeContent = {
  hero: {
    eyebrow: "Uluslararası kurumsal hizmetler",
    title: "Global işinizi sağlam temeller üzerine kurun.",
    description:
      "Amerika ve İngiltere'de şirket kuruluşundan vergi ve muhasebe süreçlerine kadar uluslararası operasyonlarınızı yönetin.",
    primaryCta: { label: "Danışmanlık Talep Et", href: routes.contactForm },
    secondaryCta: { label: "Hizmetleri Keşfedin", href: routes.services },
    marketsLabel: "Odak pazarlarımız",
    markets: [
      { code: "ABD", name: "Amerika Birleşik Devletleri" },
      { code: "UK", name: "Birleşik Krallık" },
    ],
  },
  credibility: {
    eyebrow: "Kurumsal çerçeve",
    title: "Uluslararası operasyonun temel adımları tek çatı altında",
    description:
      "Kuruluştan yıllık uyuma kadar tekrar eden süreçleri iki ana pazar için aynı düzenle yönetiyoruz.",
    facts: [
      {
        value: "ABD",
        title: "Amerika Birleşik Devletleri",
        description:
          "LLC ve corporation kuruluşu, EIN, federal ve eyalet vergi beyanları, muhasebe ve yıllık uyum süreçleri.",
      },
      {
        value: "UK",
        title: "Birleşik Krallık",
        description:
          "Companies House kaydı, kimlik doğrulama adımları, Corporation Tax ve yıllık hesap süreçleri.",
      },
      {
        value: "50",
        title: "Eyalette registered agent hizmeti",
        description:
          "MAB Registered Agent Inc. aracılığıyla 50 eyalet ve Washington D.C. kapsamında tüm şirket türleri için temsil.",
      },
    ],
  },
  why: {
    eyebrow: "Neden MAB Global Partners",
    title: "Kuruluştan sonrasını da planlayan bir hizmet yapısı",
    description:
      "Şirket kurmak sürecin ilk adımıdır. Sonraki yıllarda doğacak yükümlülükleri de baştan hesaba katıyoruz.",
    items: [
      {
        icon: "globe",
        title: "Uluslararası iş süreçlerinde uzmanlık",
        description:
          "Amerika ve İngiltere'deki kuruluş, vergi ve uyum süreçlerini günlük işimiz olarak yürütüyoruz.",
      },
      {
        icon: "layers",
        title: "Kuruluş ve operasyon desteği",
        description:
          "Şirket kuruluşunu muhasebe, vergi ve adres hizmetleriyle aynı plan içinde ele alıyoruz.",
      },
      {
        icon: "compass",
        title: "İhtiyaca göre şekillenen hizmet yaklaşımı",
        description:
          "Hizmet kapsamını iş modelinize, gelir kanallarınıza ve büyüme planınıza göre belirliyoruz.",
      },
      {
        icon: "calendar",
        title: "Süreçlerin düzenli takibi",
        description:
          "Beyan, rapor ve yenileme tarihlerini takvime bağlıyor ve sizi önceden bilgilendiriyoruz.",
      },
    ] satisfies (TitledText & { icon: IconName })[],
  },
  services: {
    eyebrow: "Hizmetler",
    title: "Uluslararası şirketiniz için temel hizmetler",
    description:
      "Her hizmeti tek başına alabilir ya da kuruluş sonrası süreçlerle birlikte planlayabilirsiniz.",
    allServicesLabel: "Tüm hizmetler",
  },
  sectors: {
    eyebrow: "Kimlere destek veriyoruz",
    title: "Farklı iş modelleri için uygun yapılar",
    description:
      "Her iş modelinin kuruluş, vergi ve muhasebe ihtiyacı farklıdır. Size en yakın alanı seçin.",
    allSectorsLabel: "Tüm sektörler",
  },
  process: {
    eyebrow: "Çalışma süreci",
    title: "Üç adımda net bir yol haritası",
    description:
      "Her iş birliğine ihtiyaçlarınızı dinleyerek başlıyor ve süreci sizinle birlikte planlıyoruz.",
    steps: [
      {
        title: "İhtiyaçların Belirlenmesi",
        description:
          "İş modelinizi, hedef pazarınızı ve beklentilerinizi değerlendiriyoruz.",
      },
      {
        title: "Uygun Yapının Planlanması",
        description:
          "İhtiyaçlarınıza uygun kuruluş ve operasyon süreçlerini planlıyoruz.",
      },
      {
        title: "Süreçlerin Yönetimi",
        description:
          "Üzerinde anlaşılan hizmet kapsamı doğrultusunda kuruluş ve uyum süreçlerinizi destekliyoruz.",
      },
    ] satisfies TitledText[],
  },
  about: {
    eyebrow: "Hakkımızda",
    title: "Uluslararası iş yapan girişimciler için kurumsal bir çözüm ortağı",
    paragraphs: [
      "MAB Global Partners, Amerika ve Birleşik Krallık'ta iş yapmak isteyen girişimcilere ve şirketlere Türkçe destek veren bir kurumsal hizmetler markasıdır.",
      "Şirket kuruluşundan registered agent, vergi ve muhasebe hizmetlerine kadar uluslararası operasyonun temel adımlarını tek bir çatı altında yönetiyoruz.",
    ],
    linkLabel: "Bizi yakından tanıyın",
  },
  faq: {
    eyebrow: "Sıkça sorulan sorular",
    title: "Merak edilen konular",
    description:
      "Şirket kuruluşu, vergi, muhasebe ve danışmanlık süreci hakkında sık sorulan sorular.",
  },
  closingCta: {
    title: "Uluslararası iş planınızı birlikte değerlendirelim.",
    description:
      "İhtiyaçlarınızı paylaşın. İşletmeniz için uygun hizmetleri ve sonraki adımları belirleyelim.",
    cta: { label: "İletişime Geçin", href: routes.contactForm },
  },
} as const;
