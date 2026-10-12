import { routes } from "@/config/routes";
import type { Article } from "@/types/content";

export const ingiltereLimitedSirketKurulusuRehberi: Article = {
  slug: "ingiltere-limited-sirket-kurulusu-rehberi",
  title: "İngiltere'de Limited Şirket Kuruluşu Rehberi",
  summary:
    "İngiltere'de private limited company kurarken gereken bilgileri, registered office adresi kurallarını, kimlik doğrulama zorunluluğunu ve yıllık yükümlülükleri özetliyoruz.",
  category: "ingiltere-sirket-kurulusu",
  author: { type: "organization", name: "MAB Global Partners Editör Ekibi" },
  publishedAt: "2026-10-12",
  updatedAt: "2026-10-12",
  reviewBy: "2027-04-12",
  sections: [
    {
      heading: "Private limited company nedir",
      paragraphs: [
        "Private limited company, sahiplerinden hukuken bağımsız olan ve sahiplerinin şirket borçlarından sorumluluğunu genellikle yatırdıkları tutarla sınırlayan şirket türüdür.",
        "Birleşik Krallık'ta şirketler Companies House'a kaydedilir. GOV.UK rehberine göre şirketin faaliyete başlamadan önce kaydedilmesi gerekir.",
      ],
    },
    {
      heading: "Kuruluş için gereken temel bilgiler",
      paragraphs: [
        "GOV.UK rehberine göre bir şirket için en az bir direktör atanması gerekir. Company secretary ataması ise isteğe bağlıdır. Hisseli şirketlerde en az bir hissedar bulunmalıdır ve bu kişi direktör de olabilir.",
      ],
      list: [
        "Kurallara uygun ve kullanılabilir bir şirket adı",
        "En az bir direktör",
        "Hisseli şirketler için en az bir hissedar",
        "Önemli kontrol sahibi kişilerin (PSC) bilgileri",
        "Registered office adresi ve kayıtlı e-posta adresi",
        "Faaliyet alanını tanımlayan SIC kodu",
        "Memorandum ve articles of association belgeleri",
      ],
    },
    {
      heading: "Registered office adresi kuralları",
      paragraphs: [
        "Registered office adresi, şirketin kayıtlı olduğu Birleşik Krallık ülkesinde bulunan fiziki bir adres olmalıdır. Örneğin İskoçya'da kayıtlı bir şirketin adresi İskoçya'da bulunur.",
        "Adres posta teslimini kabul edebilmeli ve gönderilerin teslim edildiği teyit edilebilmelidir. Posta kutusu hizmetleri bu amaçla kullanılamaz. Registered office adresi kamuya açık kayıtta görünür.",
        "Companies House'a bildirilen kayıtlı e-posta adresi kamuya açık kayıtta yayımlanmaz. Şirketin bu adrese gelen iletileri takip etmesi gerekir.",
      ],
    },
    {
      heading: "Companies House kimlik doğrulaması",
      paragraphs: [
        "Companies House, 18 Kasım 2025 itibarıyla direktörler ve PSC'ler için kimlik doğrulamayı yasal bir zorunluluk haline getirmiştir.",
        "Yeni bir şirket kurulurken direktörlerin kimlik doğrulama sonrasında aldıkları kişisel kodu kuruluş başvurusunda kullanması gerekir.",
      ],
    },
    {
      heading: "Kuruluş sonrası yükümlülükler",
      paragraphs: [
        "Şirket her 12 ayda en az bir confirmation statement vererek Companies House'taki bilgilerinin doğruluğunu teyit eder. Bu inceleme registered office, direktörler, hissedarlar, SIC kodu ve PSC bilgilerini kapsar.",
        "Direktörler yıllık hesapları hazırlamak, Company Tax Return sunmak ve Corporation Tax ödemekle yükümlüdür. KDV kaydı ise ciro eşiğine bağlıdır ve gönüllü olarak da yapılabilir.",
      ],
    },
    {
      heading: "Kişisel değerlendirme gerektiren konular",
      paragraphs: [
        "Bu rehber genel bilgilendirme amaçlıdır ve kişisel hukuki veya vergisel danışmanlık yerine geçmez. Şirket yapısı ve vergi yükümlülükleri kişisel ve ticari durumunuza göre farklılık gösterir.",
      ],
    },
  ],
  sources: [
    {
      title: "Set up a private limited company",
      publisher: "GOV.UK",
      url: "https://www.gov.uk/limited-company-formation",
      accessedAt: "2026-10-12",
    },
    {
      title: "Company address",
      publisher: "GOV.UK",
      url: "https://www.gov.uk/limited-company-formation/company-address",
      accessedAt: "2026-10-12",
    },
    {
      title: "Verifying your identity for Companies House",
      publisher: "GOV.UK",
      url: "https://www.gov.uk/guidance/verifying-your-identity-for-companies-house",
      accessedAt: "2026-10-12",
    },
    {
      title: "Running a limited company",
      publisher: "GOV.UK",
      url: "https://www.gov.uk/running-a-limited-company",
      accessedAt: "2026-10-12",
    },
    {
      title: "Confirmation statement",
      publisher: "GOV.UK",
      url: "https://www.gov.uk/running-a-limited-company/confirmation-statement",
      accessedAt: "2026-10-12",
    },
  ],
  relatedLinks: [
    {
      label: "İngiltere'de şirket kuruluşu hizmetimiz",
      href: routes.service("ingiltere-sirket-kurulusu"),
    },
    {
      label: "İngiltere şirketleri için muhasebe hizmetleri",
      href: routes.service("muhasebe-hizmetleri"),
    },
    {
      label: "Vergi danışmanlığı",
      href: routes.service("vergi-danismanligi"),
    },
  ],
  seo: {
    title: "İngiltere'de Limited Şirket Kuruluşu Rehberi",
    description:
      "İngiltere'de private limited company kuruluşu için Companies House kaydı, registered office kuralları, kimlik doğrulama ve yıllık yükümlülükler rehberi.",
  },
  status: "published",
};
