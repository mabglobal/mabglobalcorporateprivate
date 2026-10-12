import { routes } from "@/config/routes";
import type { Article } from "@/types/content";

export const amerikaSirketKurulusuRehberi: Article = {
  slug: "amerika-sirket-kurulusu-rehberi",
  title: "Amerika'da Şirket Kuruluşu Rehberi",
  summary:
    "Amerika'da LLC veya corporation kurmadan önce bilmeniz gereken temel adımları, registered agent ve EIN gerekliliklerini ve kuruluş sonrası yükümlülükleri özetliyoruz.",
  category: "amerika-sirket-kurulusu",
  author: { type: "organization", name: "MAB Global Partners Editör Ekibi" },
  publishedAt: "2026-10-12",
  updatedAt: "2026-10-12",
  reviewBy: "2027-04-12",
  sections: [
    {
      heading: "Şirket kuruluşu eyalet düzeyinde yapılır",
      paragraphs: [
        "Amerika'da şirketler eyalet düzeyinde kurulur. SBA'nın açıklamasına göre çoğu eyalette kayıt işlemleri Secretary of State ofisine, eyaletin iş kayıt birimine veya ilgili kuruma yapılır.",
        "Başvuru ücretleri, yıllık rapor yükümlülükleri ve işlem süreleri eyaletten eyalete değişir. Bu nedenle eyalet seçimi kuruluşun ilk ve en önemli kararlarından biridir.",
      ],
    },
    {
      heading: "LLC ve corporation arasındaki temel fark",
      paragraphs: [
        "LLC, esnek yönetim yapısı ve sınırlı sorumluluk sunan bir şirket türüdür ve articles of organization adı verilen belgeyle kurulur.",
        "Corporation ise hisse yapısı, yönetim kurulu ve yöneticileriyle daha kurumsal bir yapı sunar ve articles of incorporation ile kurulur. Yatırım almayı planlayan girişimler bu yapıyı sıklıkla değerlendirir.",
      ],
    },
    {
      heading: "Registered agent zorunluluğu",
      paragraphs: [
        "SBA'ya göre LLC, corporation, partnership ve kâr amacı gütmeyen kuruluşlar, kuruluş başvurusunu yapmadan önce kayıtlı oldukları eyalette bir registered agent belirlemelidir.",
        "Registered agent şirket adına resmi yazışmaları ve yasal belgeleri kabul eder. Temsilcinin şirketin kaydedildiği eyalette bulunması gerekir.",
      ],
    },
    {
      heading: "EIN başvurusu",
      paragraphs: [
        "EIN, IRS tarafından şirketlere verilen işveren kimlik numarasıdır ve banka hesabı başvurularında, vergi beyanlarında ve birçok pazaryeri doğrulamasında kullanılır.",
        "IRS, EIN için hiçbir ücret talep etmez. Çevrim içi başvuru, asıl faaliyet yeri ABD'de veya ABD topraklarında bulunan ve sorumlu kişisinin SSN ya da ITIN numarası olan başvuru sahiplerine açıktır. Asıl faaliyet yeri ABD dışında olan başvuru sahipleri telefon, faks veya posta yoluyla başvuru yapar.",
      ],
    },
    {
      heading: "Yabancı ortaklı LLC'lerin bilgi beyanı",
      paragraphs: [
        "IRS talimatlarına göre yabancı bir kişiye ait tek üyeli LLC'ler, section 6038A kapsamındaki gereklilikler bakımından corporation olarak kabul edilir. Bu şirketlerin pro forma Form 1120 ile birlikte Form 5472 vermesi gerekebilir.",
        "IRS, Form 5472'yi zamanında vermeyen raporlayan şirketler için 25.000 dolar ceza öngörür. Bu nedenle bilgi beyanı yükümlülüğünü kuruluş aşamasında planlamak önemlidir.",
      ],
    },
    {
      heading: "Kuruluş sonrası yıllık takip",
      paragraphs: [
        "Kuruluş tamamlandıktan sonra yıllık rapor, registered agent yenilemesi, federal ve eyalet vergi beyanları gibi tekrar eden yükümlülükler başlar.",
        "Bu tarihleri kuruluş aşamasında bir takvime dönüştürmek gecikme riskini azaltır.",
      ],
      list: [
        "Eyalet yıllık raporu ve yenileme ücretleri",
        "Registered agent hizmetinin sürekliliği",
        "Federal vergi beyanları ve bilgi beyanları",
        "Satış yapılan eyaletlere göre sales tax yükümlülükleri",
      ],
    },
    {
      heading: "Kişisel değerlendirme gerektiren konular",
      paragraphs: [
        "Bu rehber genel bilgilendirme amaçlıdır ve kişisel hukuki veya vergisel danışmanlık yerine geçmez. Şirket türü, eyalet seçimi ve vergi yükümlülükleri kişisel ve ticari durumunuza göre farklılık gösterir.",
      ],
    },
  ],
  sources: [
    {
      title: "Register your business",
      publisher: "U.S. Small Business Administration",
      url: "https://www.sba.gov/business-guide/launch-your-business/register-your-business",
      accessedAt: "2026-10-12",
    },
    {
      title: "Get an employer identification number",
      publisher: "Internal Revenue Service",
      url: "https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number",
      accessedAt: "2026-10-12",
    },
    {
      title: "Instructions for Form 5472",
      publisher: "Internal Revenue Service",
      url: "https://www.irs.gov/instructions/i5472",
      accessedAt: "2026-10-12",
    },
  ],
  relatedLinks: [
    {
      label: "Amerika'da şirket kuruluşu hizmetimiz",
      href: routes.service("amerika-sirket-kurulusu"),
    },
    {
      label: "Registered agent hizmetlerimiz",
      href: routes.service("registered-agent"),
    },
    {
      label: "ABD şirketleri için vergi danışmanlığı",
      href: routes.service("vergi-danismanligi"),
    },
  ],
  seo: {
    title: "Amerika'da Şirket Kuruluşu Rehberi, LLC, EIN ve Registered Agent",
    description:
      "Amerika'da LLC veya corporation kurarken eyalet seçimi, registered agent, EIN başvurusu ve Form 5472 yükümlülükleri hakkında resmi kaynaklara dayalı rehber.",
  },
  status: "published",
};
