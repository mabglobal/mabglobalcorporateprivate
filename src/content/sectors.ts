import type { Sector, SectorSlug } from "@/types/content";

const allSectors: Sector[] = [
  {
    slug: "e-ticaret",
    title: "E-ticaret ve Amazon Satıcıları",
    shortTitle: "E-ticaret ve Amazon",
    icon: "shopping-bag",
    summary: "Pazaryeri satışlarınız için şirket, vergi ve muhasebe altyapınızı kurun.",
    intro: [
      "Satıcı hesabı, şirket yapısı, ödeme altyapısı ve vergi kaydı birlikte planlanmalıdır.",
      "Amazon, Shopify, Etsy ve eBay satışlarınızın tüm adımlarını tek planda toplayın.",
    ],
    examples: [
      "Amazon satıcıları",
      "Shopify mağazaları",
      "Etsy satıcıları",
      "eBay satıcıları",
      "Pazaryeri operatörleri",
      "Doğrudan tüketiciye satış yapan markalar",
      "Sınır ötesi online perakendeciler",
      "Çok pazaryerli işletmeler",
    ],
    needs: [
      { title: "Satıcı hesabına uygun yapı", description: "Pazaryeri doğrulamasıyla uyumlu şirket, adres ve belge yapısı kurun." },
      { title: "Sales tax takibi", description: "Satış yaptığınız eyaletlerdeki kayıt ve beyan ihtiyacını izleyin." },
      { title: "Pazaryeri muhasebesi", description: "Komisyon, iade, reklam ve lojistik giderlerini ayrı kaydedin." },
      { title: "Marka ve ürün kayıtları", description: "Marka tescili ve gerekli ürünlerde FDA kaydını planlayın." },
    ],
    services: [
      "amerika-sirket-kurulusu",
      "vergi-danismanligi",
      "muhasebe-hizmetleri",
      "uluslararasi-is-danismanligi",
      "is-adresi-ve-sirket-operasyonlari",
    ],
    considerations: [
      "Pazaryerleri doğrulama sırasında şirket, adres ve banka bilgilerinin tutarlı olmasını bekler.",
      "Birçok eyalette pazaryerleri satış vergisini satıcı adına tahsil eder. Kendi kayıt ihtiyacınız ayrı değerlendirilir.",
      "Hesap askıya alma durumlarında belge tutarlılığı çözüm sürecini doğrudan etkiler.",
      "Gıda ve kozmetik gibi ürünlerde ABD düzenlemelerini satıştan önce kontrol edin.",
    ],
    faqIds: ["e-ticaret-sirket", "sales-tax", "amazon-hesap", "on-muhasebe"],
    seo: {
      title: "E-ticaret ve Amazon Satıcıları için Şirket, Vergi ve Muhasebe",
      description:
        "Amazon, Shopify, Etsy ve eBay satışlarınız için ABD şirketinizi kurun, sales tax yükümlülüklerini takip edin ve pazaryeri muhasebenizi düzenleyin.",
    },
    status: "published",
    updatedAt: "2026-10-12",
  },
  {
    slug: "ihracat-ve-lojistik",
    title: "İhracat ve Lojistik",
    shortTitle: "İhracat ve Lojistik",
    icon: "ship",
    summary: "ABD ve Birleşik Krallık'taki alıcılarınızla yerel bir şirket üzerinden çalışın.",
    intro: [
      "Yerel bir şirket, hedef pazardaki alıcılarla sözleşme ve faturalamayı kolaylaştırabilir.",
      "Şirket kuruluşunu, muhasebeyi ve vergi takibini ticari akışınıza göre planlayın.",
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
      { title: "Yerel şirket ve fatura", description: "Hedef pazarda yerel şirket üzerinden sözleşme yapın, fatura kesin." },
      { title: "DUNS ve tedarikçi kaydı", description: "Kurumsal alıcıların istediği kimlik numaralarını edinin." },
      { title: "Depolama ve dağıtım", description: "Ürünlerinizin hedef pazarda depolanmasını ve dağıtımını planlayın." },
      { title: "Şirketler arası kayıtlar", description: "Türkiye ve yurt dışı şirket arasındaki işlemleri belgeleyin." },
    ],
    services: [
      "amerika-sirket-kurulusu",
      "ingiltere-sirket-kurulusu",
      "muhasebe-hizmetleri",
      "is-adresi-ve-sirket-operasyonlari",
      "uluslararasi-is-danismanligi",
    ],
    considerations: [
      "Gümrük, ürün standardı ve ithalat izinleri ürün grubuna göre değişir.",
      "İlişkili şirketler arasındaki işlemlerin fiyatlandırması iki ülkenin vergi kuralları açısından önem taşır.",
      "Gıda, kozmetik ve tıbbi ürünlerde FDA kaydı gibi ek kayıtlar gerekebilir.",
    ],
    faqIds: ["kurulus-hangi-ulke", "grup-ici-islemler", "hizmet-kapsami"],
    seo: {
      title: "İhracat ve Lojistik Şirketleri için Yurt Dışı Şirket Yapısı",
      description:
        "İhracatçılar, üreticiler ve lojistik şirketleri için ABD veya İngiltere şirketinizi kurun, DUNS kaydı, muhasebe ve operasyon adımlarını planlayın.",
    },
    status: "published",
    updatedAt: "2026-10-12",
  },
  {
    slug: "serbest-calisanlar",
    title: "Serbest Çalışanlar ve Dijital Profesyoneller",
    shortTitle: "Serbest Çalışanlar",
    icon: "laptop",
    summary: "Yurt dışı müşterileriniz için uygun yapıyı gelir modelinize göre seçin.",
    intro: [
      "Bir şirket yapısı, yurt dışı müşterilerle sözleşme, fatura ve ödeme süreçlerini düzenleyebilir.",
      "Şirkete ihtiyacınız olup olmadığını gelir modeliniz ve vergi durumunuz üzerinden değerlendirin.",
    ],
    examples: [
      "Yazılım geliştiriciler",
      "Web geliştiriciler",
      "Tasarımcılar",
      "Pazarlama danışmanları",
      "Bağımsız danışmanlar",
      "Fiverr ve Upwork serbest çalışanları",
      "Yurt dışına hizmet veren profesyoneller",
      "Uluslararası gelir elde eden uzaktan çalışanlar",
    ],
    needs: [
      { title: "Doğru yapı kararı", description: "Bireysel çalışma ile şirket yapısını gelir ve vergi açısından karşılaştırın." },
      { title: "Ödeme ve fatura düzeni", description: "Uluslararası ödemeleri şirket kayıtlarıyla uyumlu yönetin." },
      { title: "Platform vergi formları", description: "Platformların istediği vergi formlarını yapınıza uygun doldurun." },
      { title: "Yıllık beyan takvimi", description: "Federal ve eyalet beyanlarınızı zamanında tamamlayın." },
    ],
    services: ["amerika-sirket-kurulusu", "vergi-danismanligi", "muhasebe-hizmetleri", "uluslararasi-is-danismanligi"],
    considerations: [
      "Türkiye'de yaşayan kişilerin yurt dışı şirket gelirleri Türkiye'de vergilendirilebilir. Bu konuyu mali müşavirinizle değerlendirin.",
      "Platformların istediği W-8 veya W-9 gibi formlar şirket yapınıza göre değişir.",
      "Her serbest çalışan için şirket gerekmeyebilir. Kararı gelir hacmi ve müşteri yapısı belirler.",
    ],
    faqIds: ["uluslararasi-gelir", "vergi-turkiye-abd", "form-5472"],
    seo: {
      title: "Serbest Çalışanlar ve Dijital Profesyoneller için Yurt Dışı Şirket",
      description:
        "Fiverr, Upwork ve yurt dışı müşterilerle çalışan yazılımcılar, tasarımcılar ve danışmanlar için şirket yapısını, vergi ve muhasebe adımlarını planlayın.",
    },
    status: "published",
    updatedAt: "2026-10-12",
  },
  {
    slug: "teknoloji-sirketleri",
    title: "Teknoloji Şirketleri ve Girişimler",
    shortTitle: "Teknoloji Şirketleri",
    icon: "cpu",
    summary: "SaaS ve yazılım girişiminiz için yatırıma uygun şirket yapısını kurun.",
    intro: [
      "ABD pazarını hedefleyen teknoloji şirketlerinde şirket türü, ortaklık yapısı ve ödeme altyapısı baştan doğru kurulmalıdır.",
      "Yatırım planınıza, ekibinize ve gelir modelinize uygun yapıyı seçin.",
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
      { title: "Yatırıma uygun yapı", description: "LLC ve corporation seçeneklerini yatırım planınıza göre karşılaştırın." },
      { title: "Abonelik muhasebesi", description: "Tekrarlayan gelirleri ve ödeme hareketlerini düzenli kaydedin." },
      { title: "Ödeme altyapısı", description: "Ödeme sağlayıcılarının istediği şirket bilgilerini hazırlayın." },
      { title: "Marka koruması", description: "Ürün ve şirket adınızı hedef pazarda tescil ettirin." },
    ],
    services: [
      "amerika-sirket-kurulusu",
      "ingiltere-sirket-kurulusu",
      "muhasebe-hizmetleri",
      "vergi-danismanligi",
      "is-adresi-ve-sirket-operasyonlari",
    ],
    considerations: [
      "Kurumsal yatırımcılar şirket türü ve eyalet konusunda tercih bildirebilir. Yapı kararını yatırım planınızla birlikte verin.",
      "Dijital hizmet satışlarında bazı eyalet ve ülkeler satış vergisi veya KDV uygulayabilir.",
      "Ortaklık payları ve hisse planları kuruluş belgelerinde açıkça tanımlanmalıdır.",
    ],
    faqIds: ["abd-eyalet-secimi", "kurulus-hangi-ulke", "muhasebe-kapsam"],
    seo: {
      title: "Teknoloji Şirketleri ve Girişimler için ABD ve İngiltere Şirket Yapısı",
      description:
        "SaaS, yazılım, yapay zekâ ve mobil uygulama girişiminiz için şirket türünü seçin, abonelik muhasebesini, vergi ve marka süreçlerini düzenleyin.",
    },
    status: "published",
    updatedAt: "2026-10-12",
  },
  {
    slug: "girisimciler-ve-yatirimcilar",
    title: "Girişimciler ve Yatırımcılar",
    shortTitle: "Girişimciler ve Yatırımcılar",
    icon: "rocket",
    summary: "Yurt dışındaki ilk şirketiniz için ülke, yapı ve ortaklık kararlarını netleştirin.",
    intro: [
      "Yurt dışında ilk şirketinizi kurmadan önce doğru soruları erken sorun.",
      "Hedef pazarı, ortaklık yapısını ve uzun vadeli planı netleştirerek ilk kararlarınızı sağlam bir zemine oturtun.",
    ],
    examples: [
      "İlk şirketini kuran girişimciler",
      "Startup kurucuları",
      "Uluslararası pazara açılan girişimciler",
      "Yurt dışı yapıları değerlendiren yatırımcılar",
      "ABD veya Birleşik Krallık pazarına giren işletmeler",
    ],
    needs: [
      { title: "Ülke ve şirket türü", description: "ABD ve Birleşik Krallık seçeneklerini iş modelinize göre karşılaştırın." },
      { title: "Ortaklık yapısı", description: "Payları, yetkileri ve karar süreçlerini belgelere yansıtın." },
      { title: "İlk yıl takvimi", description: "Kuruluştan sonraki beyan ve rapor tarihlerini önceden görün." },
      { title: "Yıllık maliyet planı", description: "Kuruluş, yenileme, muhasebe ve vergi giderlerini öngörün." },
    ],
    services: ["uluslararasi-is-danismanligi", "amerika-sirket-kurulusu", "ingiltere-sirket-kurulusu", "registered-agent"],
    considerations: [
      "Yurt dışı şirket yapısı her durumda vergi avantajı sağlamaz. Avantaj ve yükümlülükler duruma göre değerlendirilir.",
      "Yatırımcıların yapı beklentileri yatırım türüne göre farklılık gösterebilir.",
      "Kuruluş sonrası yıllık giderleri planlamaya baştan dahil edin.",
    ],
    faqIds: ["kurulus-hangi-ulke", "abd-eyalet-secimi", "ucretlendirme"],
    seo: {
      title: "Girişimciler ve Yatırımcılar için Yurt Dışı Şirket Kuruluşu",
      description:
        "Yurt dışındaki ilk şirketiniz için ülke, şirket türü ve ortaklık yapısını belirleyin, ilk yılın uyum takvimini ve maliyetlerini planlayın.",
    },
    status: "published",
    updatedAt: "2026-10-12",
  },
  {
    slug: "kobiler-ve-kurumsal-isletmeler",
    title: "KOBİ'ler ve Kurumsal İşletmeler",
    shortTitle: "KOBİ ve Kurumsal",
    icon: "factory",
    summary: "Yurt dışı iştirakinizi kurun, mevcut yabancı şirketinizin uyumunu düzenli takip edin.",
    intro: [
      "Yurt dışı iştirakinizi mevcut yapınızla uyumlu bir planla kurun.",
      "Yeni kuruluşu ya da mevcut yabancı şirketinizin takibini kurumsal süreçlerinize göre yönetin.",
    ],
    examples: [
      "KOBİ'ler",
      "Aile şirketleri",
      "Yurt dışında iştirak kuran şirketler",
      "Yabancı şirketini yöneten işletmeler",
      "Düzenli uyum desteği arayan şirketler",
    ],
    needs: [
      { title: "Yurt dışı iştirak", description: "Ana şirketinizle uyumlu bir ABD veya İngiltere şirketi kurun." },
      { title: "Mevcut şirket takibi", description: "Kurulu şirketinizin muhasebe, vergi ve uyum süreçlerini devredin." },
      { title: "Yönetim raporları", description: "Dönemsel finansal raporları ve uyum takvimini düzenli alın." },
      { title: "Grup içi işlemler", description: "Ana şirket ve iştirak arasındaki işlemleri belgeleyin." },
    ],
    services: [
      "amerika-sirket-kurulusu",
      "ingiltere-sirket-kurulusu",
      "muhasebe-hizmetleri",
      "vergi-danismanligi",
      "registered-agent",
    ],
    considerations: [
      "Ana şirket ile iştirak arasındaki işlemler iki ülkenin mevzuatı açısından ayrı ayrı değerlendirilir.",
      "Mevcut bir şirketin takibi devralınırken geçmiş dönem beyanları ilk aşamada gözden geçirilir.",
      "Yurt dışı iştirak kararlarında Türkiye'deki mali müşavirinizle koordinasyon kurun.",
    ],
    faqIds: ["grup-ici-islemler", "mevcut-sirket-devralma", "muhasebe-kapsam"],
    seo: {
      title: "KOBİ'ler ve Kurumsal İşletmeler için Yurt Dışı İştirak ve Uyum",
      description:
        "Yurt dışı iştirakinizi kurun, mevcut yabancı şirketinizin vergi, muhasebe ve uyum süreçlerini kurumsal düzende takip edin.",
    },
    status: "published",
    updatedAt: "2026-10-12",
  },
];

export const sectors: Sector[] = allSectors.filter((sector) => sector.status === "published");

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
