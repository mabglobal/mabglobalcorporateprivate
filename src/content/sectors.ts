import type { Sector, SectorSlug } from "@/types/content";

const allSectors: Sector[] = [
  {
    slug: "e-ticaret",
    title: "E-ticaret ve Amazon Satıcıları",
    shortTitle: "E-ticaret",
    icon: "shopping-bag",
    summary:
      "ABD ve Birleşik Krallık pazaryerlerinde satış yapan işletmeler için şirket, vergi ve muhasebe altyapısını kuruyoruz.",
    intro: [
      "Pazaryerinde satış yapmak satıcı hesabının, şirket yapısının, ödeme altyapısının ve vergi kaydının birlikte planlanmasını gerektirir.",
      "Amazon, Shopify, Etsy ve eBay gibi platformlarda satış yapan işletmelerin bu adımlarını tek bir plan içinde ele alıyoruz.",
    ],
    examples: [
      "Amazon satıcıları",
      "Shopify mağazaları",
      "Etsy satıcıları",
      "eBay satıcıları",
      "Pazaryeri operatörleri",
      "Doğrudan tüketiciye satış yapan markalar",
      "Sınır ötesi online perakendeciler",
      "Birden fazla pazaryerinde satış yapan işletmeler",
    ],
    needs: [
      {
        title: "Satıcı hesabına uygun şirket yapısı",
        description:
          "Pazaryeri doğrulama süreçleriyle uyumlu şirket, adres ve belge yapısını kurmak.",
      },
      {
        title: "Sales tax ve eyalet yükümlülükleri",
        description:
          "ABD'de satış yapılan eyaletlere göre doğan vergi kayıt ve beyan ihtiyacını takip etmek.",
      },
      {
        title: "Pazaryeri ödemelerinin muhasebesi",
        description:
          "Komisyon, iade, reklam ve lojistik giderlerini doğru ayrıştırarak kaydetmek.",
      },
      {
        title: "Marka ve ürün kayıtları",
        description:
          "Marka tescili ve gerekli ürünlerde FDA kaydı gibi başvuruları zamanında planlamak.",
      },
    ],
    services: [
      "amerika-sirket-kurulusu",
      "vergi-danismanligi",
      "muhasebe-hizmetleri",
      "uluslararasi-is-danismanligi",
      "is-adresi-ve-sirket-operasyonlari",
    ],
    considerations: [
      "Pazaryerleri satıcı doğrulaması sırasında şirket, adres ve banka bilgilerinin birbiriyle tutarlı olmasını bekler.",
      "Birçok eyalette pazaryerleri satış vergisini satıcı adına tahsil eder. Satıcının kendi kayıt yükümlülükleri satış kanallarına ve eyalet kurallarına göre ayrı olarak değerlendirilir.",
      "Hesap askıya alma durumlarında belgelerin tutarlılığı çözüm sürecini doğrudan etkiler.",
      "Gıda, kozmetik ve benzeri ürün gruplarında ABD'deki ürün düzenlemeleri satışa başlamadan önce kontrol edilmelidir.",
    ],
    faqIds: ["e-ticaret-sirket", "sales-tax", "amazon-hesap", "on-muhasebe"],
    seo: {
      title: "E-ticaret ve Amazon Satıcıları için Şirket, Vergi ve Muhasebe",
      description:
        "Amazon, Shopify, Etsy ve eBay satıcıları için ABD şirket kuruluşu, sales tax takibi, pazaryeri muhasebesi ve marka kayıtlarında destek.",
    },
    status: "published",
    updatedAt: "2026-10-12",
  },
  {
    slug: "ihracat-ve-lojistik",
    title: "İhracat ve Lojistik",
    shortTitle: "İhracat ve Lojistik",
    icon: "ship",
    summary:
      "ABD ve Birleşik Krallık'taki alıcılarla çalışan ihracatçılar ve lojistik işletmeleri için yerel şirket yapısını planlıyoruz.",
    intro: [
      "Hedef pazardaki alıcılarla doğrudan çalışmak isteyen ihracatçılar ve lojistik işletmeleri için yerel bir şirket yapısı ticari ilişkileri kolaylaştırabilir.",
      "Şirket kuruluşunu, muhasebeyi ve vergi takibini ticari akışınıza göre planlıyoruz.",
    ],
    examples: [
      "İhracatçılar",
      "Üreticiler",
      "İthalat ve ihracat şirketleri",
      "Uluslararası toptancılar",
      "Lojistik şirketleri",
      "Freight forwarding işletmeleri",
      "Tedarik zinciri şirketleri",
      "Uluslararası satın alma işletmeleri",
    ],
    needs: [
      {
        title: "Yerel şirket ve fatura yapısı",
        description:
          "Hedef pazardaki müşterilerle yerel bir şirket üzerinden sözleşme yapmak ve fatura kesmek.",
      },
      {
        title: "DUNS ve tedarikçi kayıtları",
        description:
          "Kurumsal alıcıların tedarikçi kayıt süreçlerinde talep ettiği kimlik numaralarını edinmek.",
      },
      {
        title: "Depolama ve dağıtım planı",
        description:
          "Ürünlerin hedef pazarda depolanması ve dağıtımı için operasyon planı oluşturmak.",
      },
      {
        title: "Ülkeler arası işlem kayıtları",
        description:
          "Türkiye'deki şirket ile yurt dışı şirket arasındaki işlemleri belgeli şekilde kaydetmek.",
      },
    ],
    services: [
      "amerika-sirket-kurulusu",
      "ingiltere-sirket-kurulusu",
      "muhasebe-hizmetleri",
      "is-adresi-ve-sirket-operasyonlari",
      "uluslararasi-is-danismanligi",
    ],
    considerations: [
      "Gümrük, ürün standardı ve ithalat izinleri ürün grubuna göre değişir ve ilgili kurumların kurallarına göre değerlendirilir.",
      "İlişkili şirketler arasındaki işlemlerin fiyatlandırması iki ülkenin vergi kuralları açısından önem taşır.",
      "Gıda, kozmetik ve tıbbi ürünlerde FDA kaydı gibi ek kayıtlar gerekebilir.",
    ],
    faqIds: ["kurulus-hangi-ulke", "grup-ici-islemler", "hizmet-kapsami"],
    seo: {
      title: "İhracat ve Lojistik Şirketleri için Yurt Dışı Şirket Yapısı",
      description:
        "İhracatçılar, üreticiler ve lojistik şirketleri için ABD ve İngiltere'de şirket kuruluşu, DUNS kaydı, muhasebe ve operasyon planlaması.",
    },
    status: "published",
    updatedAt: "2026-10-12",
  },
  {
    slug: "serbest-calisanlar",
    title: "Serbest Çalışanlar ve Dijital Profesyoneller",
    shortTitle: "Serbest Çalışanlar",
    icon: "laptop",
    summary:
      "Yurt dışındaki müşterilere hizmet veren profesyoneller için uygun yapıyı gelir modeli ve vergi durumu üzerinden değerlendiriyoruz.",
    intro: [
      "Yurt dışındaki müşterilere hizmet veren profesyoneller için bir şirket yapısı sözleşme, faturalama ve ödeme süreçlerini daha düzenli hale getirebilir.",
      "Şirket yapısına ihtiyacınız olup olmadığını gelir modeliniz ve vergi durumunuz üzerinden birlikte değerlendiriyoruz.",
    ],
    examples: [
      "Yazılım geliştiriciler",
      "Web geliştiriciler",
      "Tasarımcılar",
      "Pazarlama danışmanları",
      "Bağımsız danışmanlar",
      "Fiverr ve Upwork üzerinden çalışan serbest çalışanlar",
      "Yurt dışındaki müşterilere hizmet veren profesyoneller",
      "Uluslararası gelir elde eden uzaktan çalışanlar",
    ],
    needs: [
      {
        title: "Uygun yapı kararı",
        description:
          "Bireysel çalışma ile şirket yapısı arasındaki farkları gelir ve vergi açısından karşılaştırmak.",
      },
      {
        title: "Ödeme ve faturalama düzeni",
        description:
          "Uluslararası müşterilerden gelen ödemeleri şirket kayıtlarıyla uyumlu şekilde yönetmek.",
      },
      {
        title: "Platform vergi formları",
        description:
          "Çalışılan platformların talep ettiği vergi formlarını şirket yapısına uygun şekilde doldurmak.",
      },
      {
        title: "Yıllık beyan takvimi",
        description:
          "Şirket kurulduysa federal ve eyalet düzeyindeki yıllık beyanları zamanında tamamlamak.",
      },
    ],
    services: [
      "amerika-sirket-kurulusu",
      "vergi-danismanligi",
      "muhasebe-hizmetleri",
      "uluslararasi-is-danismanligi",
    ],
    considerations: [
      "Türkiye'de yaşayan kişilerin yurt dışı şirketlerinden elde ettiği gelirler Türkiye'de vergilendirme konusu olabilir. Bu konuyu Türkiye'deki mali müşavirinizle değerlendirmenizi öneririz.",
      "Platformların talep ettiği W-8 veya W-9 gibi vergi formları şirket yapınıza göre değişir.",
      "Her serbest çalışan için şirket kurmak gerekmeyebilir. Kararı gelir hacmi ve müşteri yapısı belirler.",
    ],
    faqIds: ["uluslararasi-gelir", "vergi-turkiye-abd", "form-5472"],
    seo: {
      title: "Serbest Çalışanlar ve Dijital Profesyoneller için Yurt Dışı Şirket",
      description:
        "Fiverr, Upwork ve yurt dışı müşterilerle çalışan yazılımcılar, tasarımcılar ve danışmanlar için şirket yapısı, vergi ve muhasebe desteği.",
    },
    status: "published",
    updatedAt: "2026-10-12",
  },
  {
    slug: "teknoloji-sirketleri",
    title: "Teknoloji Şirketleri ve Girişimler",
    shortTitle: "Teknoloji Şirketleri",
    icon: "cpu",
    summary:
      "SaaS, yazılım ve yapay zekâ girişimleri için yatırım planına ve gelir modeline uygun şirket yapısını kuruyoruz.",
    intro: [
      "ABD pazarını hedefleyen teknoloji şirketleri için şirket türü, ortaklık yapısı ve ödeme altyapısı ilk aşamada doğru kurulmalıdır.",
      "Yatırım planınız, ekibiniz ve gelir modeliniz üzerinden uygun yapıyı birlikte değerlendiriyoruz.",
    ],
    examples: [
      "SaaS şirketleri",
      "Yapay zekâ girişimleri",
      "Yazılım şirketleri",
      "Mobil uygulama şirketleri",
      "Dijital ajanslar",
      "Abonelik tabanlı işletmeler",
      "Teknoloji danışmanlık şirketleri",
    ],
    needs: [
      {
        title: "Yatırıma uygun şirket yapısı",
        description:
          "Yatırım almayı planlayan girişimler için LLC ve corporation seçeneklerini karşılaştırmak.",
      },
      {
        title: "Abonelik gelirlerinin muhasebesi",
        description:
          "Tekrarlayan gelirleri ve ödeme sağlayıcı hareketlerini düzenli kaydetmek.",
      },
      {
        title: "Ödeme altyapısı hazırlığı",
        description:
          "Ödeme sağlayıcılarının talep ettiği şirket ve belge bilgilerini hazırlamak.",
      },
      {
        title: "Marka koruması",
        description:
          "Ürün ve şirket adını hedef pazarda marka tescili ile korumak.",
      },
    ],
    services: [
      "amerika-sirket-kurulusu",
      "ingiltere-sirket-kurulusu",
      "muhasebe-hizmetleri",
      "vergi-danismanligi",
      "is-adresi-ve-sirket-operasyonlari",
    ],
    considerations: [
      "Kurumsal yatırımcılar şirket türü ve kuruluş eyaleti konusunda belirli tercihler bildirebilir. Yapı kararını yatırım planınızla birlikte vermek önemlidir.",
      "Dijital hizmet satışlarında bazı eyaletler ve ülkeler satış vergisi veya KDV uygulayabilir.",
      "Ortaklık payları ve hisse planları kuruluş belgelerinde açıkça tanımlanmalıdır.",
    ],
    faqIds: ["abd-eyalet-secimi", "kurulus-hangi-ulke", "muhasebe-kapsam"],
    seo: {
      title: "Teknoloji Şirketleri ve Girişimler için ABD ve İngiltere Şirket Yapısı",
      description:
        "SaaS, yazılım, yapay zekâ ve mobil uygulama girişimleri için şirket türü seçimi, abonelik muhasebesi, vergi ve marka süreçlerinde destek.",
    },
    status: "published",
    updatedAt: "2026-10-12",
  },
  {
    slug: "girisimciler-ve-yatirimcilar",
    title: "Girişimciler ve Yatırımcılar",
    shortTitle: "Girişimciler ve Yatırımcılar",
    icon: "rocket",
    summary:
      "Yurt dışında ilk şirketini kuracak girişimciler ve yapı değerlendiren yatırımcılar için ilk kararları birlikte netleştiriyoruz.",
    intro: [
      "Yurt dışında ilk şirketini kuracak girişimciler için en önemli adım doğru soruları erken sormaktır.",
      "Hedef pazarı, ortaklık yapısını ve uzun vadeli planı netleştirerek ilk kararları sağlam bir zemine oturtuyoruz.",
    ],
    examples: [
      "İlk şirketini kuran girişimciler",
      "Startup kurucuları",
      "Uluslararası pazara açılan girişimciler",
      "Yurt dışı şirket yapılarını değerlendiren yatırımcılar",
      "ABD veya Birleşik Krallık pazarına girmeyi planlayan işletmeler",
    ],
    needs: [
      {
        title: "Ülke ve şirket türü seçimi",
        description:
          "ABD ve Birleşik Krallık seçeneklerini hedef pazar ve iş modeli üzerinden karşılaştırmak.",
      },
      {
        title: "Ortaklık ve yönetim yapısı",
        description:
          "Ortakların paylarını, yetkilerini ve karar alma süreçlerini kuruluş belgelerine yansıtmak.",
      },
      {
        title: "İlk yıl uyum takvimi",
        description:
          "Kuruluştan sonraki ilk yılda doğacak beyan ve raporlama tarihlerini önceden görmek.",
      },
      {
        title: "Yıllık maliyet planı",
        description:
          "Kuruluş, yenileme, muhasebe ve vergi hizmetlerinin yıllık maliyetini öngörmek.",
      },
    ],
    services: [
      "uluslararasi-is-danismanligi",
      "amerika-sirket-kurulusu",
      "ingiltere-sirket-kurulusu",
      "registered-agent",
    ],
    considerations: [
      "Yurt dışı şirket yapısı her durumda vergi avantajı sağlamaz. Avantaj ve yükümlülükler kişisel ve ticari duruma göre değerlendirilir.",
      "Yatırımcıların şirket yapısına ilişkin beklentileri yatırım türüne göre farklılık gösterebilir.",
      "Kuruluş sonrası yıllık giderler planlamaya baştan dahil edilmelidir.",
    ],
    faqIds: ["kurulus-hangi-ulke", "abd-eyalet-secimi", "ucretlendirme"],
    seo: {
      title: "Girişimciler ve Yatırımcılar için Yurt Dışı Şirket Kuruluşu",
      description:
        "Yurt dışında ilk şirketini kuracak girişimciler ve yatırımcılar için ülke, şirket türü, ortaklık yapısı ve ilk yıl uyum planlaması.",
    },
    status: "published",
    updatedAt: "2026-10-12",
  },
  {
    slug: "kobiler-ve-kurumsal-isletmeler",
    title: "KOBİ'ler ve Kurumsal İşletmeler",
    shortTitle: "KOBİ'ler ve Kurumsal İşletmeler",
    icon: "factory",
    summary:
      "Yurt dışında iştirak kuran veya mevcut yabancı şirketini yöneten işletmelere düzenli vergi, muhasebe ve uyum desteği veriyoruz.",
    intro: [
      "Türkiye'de faaliyet gösteren köklü işletmeler yurt dışında iştirak kurarken mevcut yapılarıyla uyumlu bir plana ihtiyaç duyar.",
      "Yeni şirket kuruluşunu ya da mevcut yabancı şirketinizin düzenli takibini kurumsal süreçlerinize uygun şekilde yürütüyoruz.",
    ],
    examples: [
      "KOBİ'ler",
      "Aile şirketleri",
      "Yurt dışında iştirak kuran şirketler",
      "Mevcut yabancı şirketini yöneten işletmeler",
      "Düzenli vergi, muhasebe ve uyum desteğine ihtiyaç duyan şirketler",
    ],
    needs: [
      {
        title: "Yurt dışı iştirak kuruluşu",
        description:
          "Ana şirketin yapısıyla uyumlu bir ABD veya İngiltere şirketi kurmak.",
      },
      {
        title: "Mevcut şirketlerin takibi",
        description:
          "Kurulu yabancı şirketlerin muhasebe, vergi ve uyum süreçlerini devralmak.",
      },
      {
        title: "Düzenli yönetim raporları",
        description:
          "Yönetim için dönemsel finansal raporlar ve uyum takvimi hazırlamak.",
      },
      {
        title: "Grup içi işlemlerin belgelenmesi",
        description:
          "Ana şirket ile iştirak arasındaki hizmet, ürün ve finansman işlemlerini belgeli şekilde kaydetmek.",
      },
    ],
    services: [
      "amerika-sirket-kurulusu",
      "ingiltere-sirket-kurulusu",
      "muhasebe-hizmetleri",
      "vergi-danismanligi",
      "registered-agent",
    ],
    considerations: [
      "Türkiye'deki ana şirket ile yurt dışı iştirak arasındaki işlemler iki ülkenin mevzuatı açısından ayrı ayrı değerlendirilir.",
      "Mevcut bir şirketin takibi devralınırken geçmiş dönem beyanları ve kayıtlar ilk aşamada gözden geçirilir.",
      "Yurt dışı iştirak kararlarında Türkiye'deki mali müşavirinizle koordinasyon önemlidir.",
    ],
    faqIds: ["grup-ici-islemler", "mevcut-sirket-devralma", "muhasebe-kapsam"],
    seo: {
      title: "KOBİ'ler ve Kurumsal İşletmeler için Yurt Dışı İştirak ve Uyum",
      description:
        "Yurt dışında iştirak kuran ve mevcut yabancı şirketini yöneten KOBİ'ler ile kurumsal işletmeler için vergi, muhasebe ve uyum desteği.",
    },
    status: "published",
    updatedAt: "2026-10-12",
  },
];

export const sectors: Sector[] = allSectors.filter(
  (sector) => sector.status === "published",
);

export function getSector(slug: SectorSlug): Sector {
  const sector = sectors.find((entry) => entry.slug === slug);
  if (!sector) {
    throw new Error(`Sector "${slug}" is not published.`);
  }
  return sector;
}

export function getSectors(slugs: SectorSlug[]): Sector[] {
  return slugs
    .map((slug) => sectors.find((entry) => entry.slug === slug))
    .filter((entry): entry is Sector => Boolean(entry));
}
