import type { Service, ServiceSlug } from "@/types/content";

/**
 * Service registry. Scope items are limited to services listed on the
 * business's existing websites (see docs/content-verification.md).
 * Copy style: short sentences, imperative "siz" forms, no "-yor" tense.
 */
const allServices: Service[] = [
  {
    slug: "amerika-sirket-kurulusu",
    title: "Amerika'da Şirket Kuruluşu",
    shortTitle: "Amerika'da Şirket Kuruluşu",
    icon: "building",
    jurisdiction: "us",
    summary: "LLC veya corporation kurun, EIN ve registered agent adımlarını tek planda tamamlayın.",
    definition:
      "Amerika'da şirket kuruluşu, seçilen eyalette LLC veya corporation kaydını ve şirketin faaliyete hazırlanmasını kapsar.",
    intro: [
      "Şirketinizi doğru eyalette ve doğru türde kurun. Kuruluş, registered agent ve EIN adımlarını tek planda tamamlayın.",
      "Tüm süreci Türkçe iletişimle, Türkiye'den yönetin.",
    ],
    audience: [
      { title: "E-ticaret satıcıları", description: "Amazon, Shopify veya Etsy üzerinden ABD'ye satış yapan işletmeler." },
      { title: "Serbest çalışanlar", description: "ABD'deki müşterilere hizmet veren profesyoneller." },
      { title: "Teknoloji girişimleri", description: "ABD pazarını hedefleyen SaaS ve yazılım şirketleri." },
      { title: "Mevcut işletmeler", description: "ABD'de yeni bir şirket yapısı kurmak isteyen firmalar." },
    ],
    scope: [
      { title: "Şirket türü ve eyalet", description: "LLC ve corporation seçeneklerini iş modelinize göre karşılaştırın." },
      { title: "Kuruluş belgeleri", description: "Articles of Organization veya Incorporation başvurunuzu eksiksiz hazırlatın." },
      { title: "Registered agent", description: "Registered agent hizmetini MAB Registered Agent Inc. üzerinden alın." },
      { title: "EIN başvurusu", description: "Şirketinizin IRS işveren kimlik numarasını alın." },
      { title: "ITIN desteği", description: "Gerekli durumlarda bireysel vergi kimlik numarası başvurusu yapın." },
      { title: "Adres ve uyum planı", description: "Şirket adresi, yıllık rapor ve beyan takvimini baştan planlayın." },
      { title: "Banka başvuru hazırlığı", description: "Banka ve ödeme kuruluşu başvuruları için belgelerinizi hazırlayın." },
    ],
    process: [
      { title: "Ön görüşme", description: "İş modelinizi, ortaklık yapınızı ve hedef pazarınızı paylaşın." },
      { title: "Yapı ve eyalet", description: "Şirket türünü ve kuruluş eyaletini gerekçeleriyle belirleyin." },
      { title: "Başvuru", description: "Kuruluş belgelerini ve eyalet başvurusunu tamamlayın." },
      { title: "EIN ve takvim", description: "EIN numaranızı alın, yıllık uyum takviminizi oluşturun." },
    ],
    documents: [
      "Ortakların geçerli pasaport bilgileri",
      "Ortakların iletişim ve adres bilgileri",
      "Planlanan şirket adı ve alternatifleri",
      "Faaliyet alanına ilişkin kısa açıklama",
      "Ortaklık payları ve yönetim yapısı",
    ],
    considerations: [
      "Başvuru ücretleri, yıllık raporlar ve işlem süreleri eyalete göre değişir.",
      "Başka bir eyalette fiilen faaliyet gösteren şirketler o eyalette de kayıt gerektirebilir.",
      "Yabancı ortaklı tek üyeli LLC'ler IRS'e yıllık bilgi beyanı vermekle yükümlü olabilir.",
      "Türkiye'deki vergi durumunuzu mali müşavirinizle değerlendirin.",
      "Banka onayları ve resmi işlem süreleri ilgili kurumların kararına bağlıdır.",
    ],
    relatedServices: ["registered-agent", "vergi-danismanligi", "muhasebe-hizmetleri", "is-adresi-ve-sirket-operasyonlari"],
    relatedSectors: ["e-ticaret", "serbest-calisanlar", "teknoloji-sirketleri", "girisimciler-ve-yatirimcilar"],
    faqIds: ["abd-kurulus-icin-seyahat", "abd-eyalet-secimi", "abd-ein-nedir", "abd-banka-hesabi", "kurulus-suresi"],
    featured: true,
    seo: {
      title: "Amerika'da Şirket Kuruluşu, LLC ve Corporation",
      description:
        "Amerika'da LLC veya corporation kurun. Eyalet seçimi, registered agent, EIN ve kuruluş sonrası uyum adımlarını tek planda tamamlayın.",
    },
    status: "published",
    updatedAt: "2026-10-12",
  },
  {
    slug: "ingiltere-sirket-kurulusu",
    title: "İngiltere'de Şirket Kuruluşu",
    shortTitle: "İngiltere'de Şirket Kuruluşu",
    icon: "landmark",
    jurisdiction: "uk",
    summary: "Limited şirketinizi Companies House'a kaydedin, vergi ve raporlama adımlarını planlayın.",
    definition:
      "İngiltere'de şirket kuruluşu, bir private limited company'nin Companies House'a kaydını ve vergi ile raporlama yükümlülüklerine hazırlanmasını kapsar.",
    intro: [
      "Limited şirketinizi Companies House'a kaydedin. Direktör, hissedar, PSC ve registered office bilgilerini eksiksiz hazırlayın.",
      "Kimlik doğrulama ve Corporation Tax kaydını kuruluşla birlikte planlayın.",
    ],
    audience: [
      { title: "Avrupa'ya açılan markalar", description: "Birleşik Krallık ve Avrupa'ya satış yapmayı planlayan işletmeler." },
      { title: "Hizmet ihracatçıları", description: "Birleşik Krallık'taki müşterilerle çalışan danışmanlar ve ajanslar." },
      { title: "Teknoloji şirketleri", description: "Birleşik Krallık'ta yerel şirketle faaliyet göstermek isteyen firmalar." },
      { title: "İhracatçılar", description: "Birleşik Krallık'taki alıcılarla yerel şirket üzerinden çalışan üreticiler." },
    ],
    scope: [
      { title: "Şirket türü ve isim", description: "Şirket türünü seçin, şirket adının uygunluğunu kontrol edin." },
      { title: "Direktör ve PSC bilgileri", description: "Yönetim ve ortaklık yapısını başvuruya hazırlayın." },
      { title: "Registered office", description: "Resmi yazışmalar için gereken adres şartlarını planlayın." },
      { title: "Kimlik doğrulama", description: "Direktör ve PSC kimlik doğrulamasını zamanında tamamlayın." },
      { title: "Companies House başvurusu", description: "Kuruluş belgelerini hazırlatın, başvuruyu takip edin." },
      { title: "Vergi ve muhasebe", description: "Corporation Tax kaydını, yıllık hesapları ve beyanları planlayın." },
    ],
    process: [
      { title: "Ön görüşme", description: "Hedef pazarınızı ve ortaklık yapınızı paylaşın." },
      { title: "Şirket bilgileri", description: "Şirket adını, direktörleri, PSC'leri ve faaliyet kodunu belirleyin." },
      { title: "Doğrulama ve başvuru", description: "Kimlik doğrulamayı tamamlayın, Companies House başvurusunu yapın." },
      { title: "Kuruluş sonrası", description: "Corporation Tax kaydını ve raporlama takvimini oluşturun." },
    ],
    documents: [
      "Direktör ve hissedarların pasaport bilgileri",
      "Direktör ve hissedarların adres bilgileri",
      "Planlanan şirket adı ve alternatifleri",
      "Faaliyet alanına ilişkin kısa açıklama",
      "Pay dağılımı ve PSC bilgileri",
    ],
    considerations: [
      "Registered office, şirketin kayıtlı olduğu ülkede fiziki bir adres olmalıdır. Posta kutusu kullanılamaz.",
      "Companies House'a kayıtlı bir e-posta adresi bildirilir. Bu adres kamuya açık kayıtta yayımlanmaz.",
      "18 Kasım 2025 itibarıyla direktör ve PSC kimlik doğrulaması yasal zorunluluktur.",
      "Şirketler her 12 ayda en az bir kez confirmation statement verir.",
      "KDV kaydı ciro eşiğine ve faaliyet yapısına bağlıdır.",
    ],
    relatedServices: ["vergi-danismanligi", "muhasebe-hizmetleri", "uluslararasi-is-danismanligi"],
    relatedSectors: ["e-ticaret", "ihracat-ve-lojistik", "teknoloji-sirketleri", "kobiler-ve-kurumsal-isletmeler"],
    faqIds: ["uk-registered-office", "uk-kimlik-dogrulama", "uk-yillik-yukumlulukler", "kurulus-hangi-ulke", "kurulus-suresi"],
    featured: true,
    seo: {
      title: "İngiltere'de Şirket Kuruluşu, Limited Şirket",
      description:
        "İngiltere'de limited şirket kurun. Companies House kaydı, kimlik doğrulama, registered office ve Corporation Tax adımlarını planlayın.",
    },
    status: "published",
    updatedAt: "2026-10-12",
  },
  {
    slug: "vergi-danismanligi",
    title: "Vergi Danışmanlığı",
    shortTitle: "Vergi Danışmanlığı",
    icon: "receipt",
    jurisdiction: "us-uk",
    summary: "ABD ve İngiltere şirketlerinizin vergi beyanlarını zamanında ve doğru tamamlayın.",
    definition:
      "Vergi danışmanlığı, Amerika ve İngiltere'deki şirketlerin federal, eyalet ve ülke düzeyindeki beyanlarının hazırlanmasını ve takibini kapsar.",
    intro: [
      "Şirket kuruluşu ilk adımdır. Asıl sorumluluklar şirket faaliyete geçtikten sonra başlar.",
      "Federal, eyalet ve Corporation Tax yükümlülüklerinizi tek takvimde toplayın, beyanlarınızı son güne bırakmayın.",
    ],
    audience: [
      { title: "Türkiye'den yönetilen şirketler", description: "Türkiye'de yaşayan ABD şirketi sahipleri." },
      { title: "Pazaryeri satıcıları", description: "Birden fazla eyalete satış yapan işletmeler." },
      { title: "İngiltere'deki şirketler", description: "Corporation Tax süreçlerini düzenli yönetmek isteyenler." },
      { title: "Büyüyen işletmeler", description: "Vergi takvimini kurumsal düzene oturtmak isteyen firmalar." },
    ],
    scope: [
      { title: "ABD vergi beyanları", description: "Şirket yapınıza uygun federal beyanları hazırlatın ve sunun." },
      { title: "Form 5472 ve 1120", description: "Yabancı ortaklı LLC bilgi beyanlarını zamanında verin." },
      { title: "Eyalet yükümlülükleri", description: "Satış yaptığınız eyaletlerdeki sales tax ihtiyacını değerlendirin." },
      { title: "İngiltere beyanları", description: "Corporation Tax ve Company Tax Return süreçlerini yönetin." },
      { title: "Vergi takvimi", description: "Beyan ve ödeme tarihlerini önceden öğrenin." },
      { title: "Vergi planlaması", description: "Giderlerinizi mevzuata uygun sınıflandırın." },
    ],
    process: [
      { title: "Mevcut durum", description: "Şirket türünüzü ve geçmiş beyanlarınızı paylaşın." },
      { title: "Yükümlülük takvimi", description: "Tüm beyan tarihlerini tek takvimde toplayın." },
      { title: "Belge hazırlığı", description: "Beyana esas belgeleri muhasebe kayıtlarıyla eşleştirin." },
      { title: "Beyan ve takip", description: "Beyanları sunun, sonraki dönemin takvimini güncelleyin." },
    ],
    considerations: [
      "Vergi yükümlülükleri şirket türüne, ortakların mukimliğine ve faaliyet yerine göre değişir.",
      "Türkiye'deki vergi yükümlülükleriniz kendi başına değerlendirme gerektirir.",
      "Vergi tasarrufu taahhüdü verilmez. Danışmanlık doğru beyan ve zamanında uyum üzerine kuruludur.",
      "Beyan süreleri ve cezalar ilgili vergi idaresinin kurallarına tabidir.",
    ],
    relatedServices: ["muhasebe-hizmetleri", "amerika-sirket-kurulusu", "ingiltere-sirket-kurulusu"],
    relatedSectors: ["e-ticaret", "serbest-calisanlar", "kobiler-ve-kurumsal-isletmeler"],
    faqIds: ["vergi-turkiye-abd", "form-5472", "vergi-beyan-donemi", "uluslararasi-gelir"],
    featured: true,
    seo: {
      title: "Vergi Danışmanlığı, ABD ve İngiltere Şirketleri",
      description:
        "ABD ve İngiltere şirketlerinizin federal ve eyalet beyanlarını, Form 5472 yükümlülüklerini ve Corporation Tax süreçlerini zamanında tamamlayın.",
    },
    status: "published",
    updatedAt: "2026-10-12",
  },
  {
    slug: "muhasebe-hizmetleri",
    title: "Muhasebe Hizmetleri",
    shortTitle: "Muhasebe Hizmetleri",
    icon: "calculator",
    jurisdiction: "us-uk",
    summary: "Kayıt, mutabakat ve raporlama süreçlerinizi ABD ve İngiltere şirketleriniz için düzenleyin.",
    definition:
      "Muhasebe hizmetleri, Amerika ve İngiltere'deki şirketlerin gelir ve gider kayıtlarını, banka mutabakatlarını ve dönemsel raporlarını kapsar.",
    intro: [
      "Düzenli kayıtlar doğru beyanın temelidir. Pazaryeri ödemelerini, banka hareketlerini ve giderleri dönem içinde işleyin.",
      "Muhasebe düzeninizi işlem hacminize ve gelir kanallarınıza göre kurun.",
    ],
    audience: [
      { title: "Pazaryeri satıcıları", description: "Amazon ve diğer pazaryeri ödemelerini kaydeden işletmeler." },
      { title: "Abonelik şirketleri", description: "Tekrarlayan gelirleri takip eden teknoloji şirketleri." },
      { title: "Hizmet şirketleri", description: "Uluslararası müşterilere fatura kesen firmalar." },
      { title: "Yurt dışı iştirakler", description: "Ana şirkete dönemsel rapor sunan şirketler." },
    ],
    scope: [
      { title: "Gelir ve gider kayıtları", description: "Tüm hareketleri dönemsel olarak kayıt altına alın." },
      { title: "Mutabakatlar", description: "Banka, ödeme platformu ve pazaryeri hareketlerini eşleştirin." },
      { title: "Dönemsel raporlar", description: "Gelir tablosu ve bilançoyu belirlenen dönemlerde görün." },
      { title: "Gider sınıflandırması", description: "Giderlerinizi doğru kategorilerde kaydedin." },
      { title: "Yıl sonu hazırlığı", description: "Beyana esas kayıtları yıl sonundan önce gözden geçirin." },
      { title: "İngiltere yıllık hesapları", description: "Companies House ve HMRC için yıllık hesaplarınızı hazırlatın." },
    ],
    process: [
      { title: "Kapsam", description: "İşlem hacminizi ve raporlama ihtiyacınızı paylaşın." },
      { title: "Kayıt düzeni", description: "Hesap planını ve belge paylaşım yöntemini belirleyin." },
      { title: "Kayıt ve mutabakat", description: "Kayıtları dönemsel olarak işleyin ve eşleştirin." },
      { title: "Raporlama", description: "Raporlarınızı alın, yıl sonu hazırlığını başlatın." },
    ],
    considerations: [
      "Muhasebe kapsamı ve kayıt sıklığı işlem hacmine göre belirlenir.",
      "Belgelerin düzenli paylaşılması kayıtların doğruluğu için belirleyicidir.",
      "ABD ve İngiltere'deki kayıt yükümlülükleri farklılık gösterir.",
      "Pazaryeri satışlarında komisyon, iade ve kargo kalemleri ayrı kaydedilmelidir.",
    ],
    relatedServices: ["vergi-danismanligi", "amerika-sirket-kurulusu", "ingiltere-sirket-kurulusu"],
    relatedSectors: ["e-ticaret", "teknoloji-sirketleri", "kobiler-ve-kurumsal-isletmeler"],
    faqIds: ["muhasebe-kapsam", "on-muhasebe", "muhasebe-belgeler"],
    featured: true,
    seo: {
      title: "Muhasebe Hizmetleri, ABD ve İngiltere Şirketleri",
      description:
        "ABD ve İngiltere şirketleriniz için gelir ve gider kayıtlarını, banka mutabakatlarını, dönemsel raporları ve yıl sonu hazırlığını düzenleyin.",
    },
    status: "published",
    updatedAt: "2026-10-12",
  },
  {
    slug: "registered-agent",
    title: "Registered Agent Hizmetleri",
    shortTitle: "Registered Agent",
    icon: "shield",
    jurisdiction: "us",
    summary: "50 eyalet ve Washington D.C. için registered agent hizmetini MAB Registered Agent Inc. ile alın.",
    definition:
      "Registered agent, şirket adına resmi yazışmaları ve yasal tebligatları kabul eden, şirketin kayıtlı olduğu eyalette fiziki adresi bulunan temsilcidir.",
    intro: [
      "ABD'de LLC, corporation ve diğer şirket türleri, kuruluş başvurusundan önce eyalette bir registered agent belirlemelidir.",
      "MAB Registered Agent Inc., 50 eyalet ve Washington D.C. kapsamında tüm şirket türlerine hizmet sunar.",
    ],
    audience: [
      { title: "Yeni şirketler", description: "Eyalet başvurusu için temsilci belirlemesi gereken şirketler." },
      { title: "ABD dışındaki sahipler", description: "Eyalette fiziki adresi bulunmayan girişimciler." },
      { title: "Çok eyaletli şirketler", description: "Farklı eyaletlerde kayıt yaptıran işletmeler." },
      { title: "Temsilci değiştirenler", description: "Mevcut hizmetini daha düzenli bir yapıya taşımak isteyenler." },
    ],
    scope: [
      { title: "Yasal tebligatlar", description: "Şirketiniz adına gelen yasal belgeleri güvenle teslim alın." },
      { title: "Eyalet yazışmaları", description: "Resmi yazışmaları kayıt altında ve zamanında alın." },
      { title: "50 eyalet ve D.C.", description: "Tüm eyaletlerde aynı hizmet yapısıyla çalışın." },
      { title: "Tüm şirket türleri", description: "LLC, corporation, partnership ve kâr amacı gütmeyen kuruluşlar." },
      { title: "Yıllık uyum takibi", description: "Yıllık rapor tarihlerini takip edin, iyi durumda kalın." },
    ],
    process: [
      { title: "Eyalet ve şirket türü", description: "Şirketinizin kayıtlı olduğu eyaleti ve türünü paylaşın." },
      { title: "Atama", description: "Registered agent bilgisini başvuruya veya kayıtlarınıza ekletin." },
      { title: "Yazışma yönetimi", description: "Gelen resmi belgeleri düzenli olarak alın." },
    ],
    considerations: [
      "Registered agent, şirketin kayıtlı olduğu eyalette fiziki bir adrese sahip olmalıdır.",
      "Registered agent bilgileri eyalet kayıtlarında kamuya açık olabilir.",
      "Tebligatların zamanında ulaşması için iletişim bilgilerinizi güncel tutun.",
      "Başka eyaletlerde kayıt yaptıran şirketler o eyaletlerde de temsilci bulundurabilir.",
    ],
    relatedServices: ["amerika-sirket-kurulusu", "is-adresi-ve-sirket-operasyonlari", "vergi-danismanligi"],
    relatedSectors: ["e-ticaret", "girisimciler-ve-yatirimcilar", "kobiler-ve-kurumsal-isletmeler"],
    faqIds: ["registered-agent-nedir", "registered-agent-zorunlu", "registered-agent-kapsam"],
    externalReference: { label: "MAB Registered Agent Inc. web sitesi", href: "https://www.mabregisteredagent.com" },
    featured: true,
    seo: {
      title: "Registered Agent Hizmetleri, 50 Eyalet ve Washington D.C.",
      description:
        "MAB Registered Agent Inc. ile 50 eyalet ve Washington D.C. kapsamında LLC, corporation ve diğer şirket türleri için registered agent hizmeti alın.",
    },
    status: "published",
    updatedAt: "2026-10-12",
  },
  {
    slug: "is-adresi-ve-sirket-operasyonlari",
    title: "İş Adresi ve Şirket Operasyonları",
    shortTitle: "İş Adresi ve Operasyonlar",
    icon: "map-pin",
    jurisdiction: "us-uk",
    summary: "ABD iş adresi, yıllık uyum, devir ve kapanış işlemlerini düzenli olarak yönetin.",
    definition:
      "İş adresi ve şirket operasyonları, kurulu şirketlerin adres ihtiyacını, yıllık uyum takvimini ve kayıt değişikliği işlemlerini kapsar.",
    intro: [
      "Kuruluştan sonra adres, yıllık rapor ve kayıt güncellemeleri başlar. Bu adımları takvime bağlayın.",
      "Adres hizmetinden devir ve kapanışa kadar şirketinizin tüm operasyonel işlemlerini planlayın.",
    ],
    audience: [
      { title: "Kurulu ABD şirketleri", description: "İş adresi ve yıllık uyum takibi isteyen şirketler." },
      { title: "Yapısını değiştirenler", description: "Hisse veya şirket devri planlayan işletmeler." },
      { title: "Faaliyetini sonlandıranlar", description: "Şirketini düzenli kapatmak isteyen girişimciler." },
      { title: "Kurumsal tedarikçiler", description: "DUNS numarasına ihtiyaç duyan işletmeler." },
    ],
    scope: [
      { title: "ABD iş adresi", description: "Şirketiniz için profesyonel bir ABD iş adresi edinin." },
      { title: "Yıllık rapor takibi", description: "Eyalet raporlarını ve yenileme tarihlerini takvime bağlayın." },
      { title: "Hisse ve şirket devri", description: "ABD şirketlerinde devir işlemlerini planlayın." },
      { title: "Şirket kapanışı", description: "ABD ve İngiltere şirketlerinin fesih işlemlerini tamamlayın." },
      { title: "DUNS numarası", description: "Kurumsal tedarikçi kayıtları için DUNS numarası alın." },
      { title: "Marka tescili", description: "ABD ve İngiltere'de marka tescil başvurusu yapın." },
    ],
    process: [
      { title: "İhtiyaç", description: "Şirketinizin durumunu ve planladığınız işlemi paylaşın." },
      { title: "İşlem planı", description: "Gerekli belgeleri ve başvuru sırasını netleştirin." },
      { title: "Uygulama", description: "Başvuruları tamamlayın, kayıtlarınızı güncelleyin." },
    ],
    considerations: [
      "Adresin hangi amaçlarla kullanılabileceği banka, pazaryeri ve kurum kurallarına göre değişir.",
      "Yıllık rapor tarihleri ve ücretleri eyalete göre değişir.",
      "Devir ve kapanış işlemlerinde vergi kapanış yükümlülükleri de değerlendirilmelidir.",
      "Marka tescil başvuruları ilgili ofisin incelemesine tabidir.",
    ],
    relatedServices: ["registered-agent", "amerika-sirket-kurulusu", "vergi-danismanligi"],
    relatedSectors: ["e-ticaret", "ihracat-ve-lojistik", "kobiler-ve-kurumsal-isletmeler"],
    faqIds: ["adres-kullanim", "sirket-kapanis", "hizmet-kapsami"],
    featured: false,
    seo: {
      title: "İş Adresi ve Şirket Operasyonları",
      description:
        "ABD iş adresi edinin, yıllık uyumu takip edin, hisse devri, şirket kapanışı, DUNS numarası ve marka tescil işlemlerini düzenli yönetin.",
    },
    status: "published",
    updatedAt: "2026-10-12",
  },
  {
    slug: "uluslararasi-is-danismanligi",
    title: "Uluslararası İş Danışmanlığı",
    shortTitle: "Uluslararası Danışmanlık",
    icon: "compass",
    jurisdiction: "us-uk",
    summary: "Hedef pazarınıza ve gelir modelinize uygun uluslararası iş planını oluşturun.",
    definition:
      "Uluslararası iş danışmanlığı, yurt dışında faaliyet planlayan işletmelerin yapı, pazar ve operasyon kararlarının birlikte değerlendirildiği danışmanlık hizmetidir.",
    intro: [
      "Şirket yapısı, ödeme altyapısı, pazaryeri hesapları ve vergi birbirini etkiler. Bu kararları tek planda değerlendirin.",
      "ABD ve Birleşik Krallık pazarına girişinizi e-ticaret, ihracat ve dijital hizmet deneyimiyle planlayın.",
    ],
    audience: [
      { title: "İlk kez açılanlar", description: "Ülke ve yapı kararını vermek isteyen firmalar." },
      { title: "E-ticaret girişimcileri", description: "Amazon ve diğer pazaryerlerinde satışa başlayan markalar." },
      { title: "Yapısını gözden geçirenler", description: "Yurt dışı şirketinin uyumunu kontrol ettirmek isteyenler." },
      { title: "Tek konuda görüş arayanlar", description: "Birebir görüşme talep eden girişimciler." },
    ],
    scope: [
      { title: "Pazar ve yapı", description: "ABD ve Birleşik Krallık seçeneklerini karşılaştırın." },
      { title: "Pazaryeri süreçleri", description: "Amazon hesap açılışı ve satıcı süreçlerinde danışmanlık alın." },
      { title: "Operasyon planı", description: "Şirket, banka, ödeme ve muhasebe adımlarını doğru sırayla planlayın." },
      { title: "Birebir görüşmeler", description: "Belirli bir konuyu saatlik görüşmeyle netleştirin." },
      { title: "Mevcut yapı kontrolü", description: "Yurt dışı şirketinizin kayıt ve uyum durumunu değerlendirin." },
    ],
    process: [
      { title: "Hedefler", description: "Ürününüzü, müşterilerinizi ve hedeflerinizi paylaşın." },
      { title: "Seçenekler", description: "Ülke, yapı ve satış kanalı seçeneklerini karşılaştırın." },
      { title: "Yol haritası", description: "Adımları ve öncelik sırasını içeren planınızı alın." },
    ],
    considerations: [
      "Görüşmeler bilgilendirme ve planlama amaçlıdır. Hukuki ve vergisel kararlar ayrıntılı değerlendirme gerektirir.",
      "Pazaryeri ve ödeme sağlayıcılarının onayları kendi politikalarına bağlıdır.",
      "Hedef ülkedeki lisans, izin ve ürün düzenlemeleri sektöre göre farklılık gösterir.",
    ],
    relatedServices: ["amerika-sirket-kurulusu", "ingiltere-sirket-kurulusu", "vergi-danismanligi"],
    relatedSectors: ["e-ticaret", "ihracat-ve-lojistik", "girisimciler-ve-yatirimcilar"],
    faqIds: ["kurulus-hangi-ulke", "amazon-hesap", "hizmet-kapsami"],
    featured: true,
    seo: {
      title: "Uluslararası İş Danışmanlığı",
      description:
        "ABD ve Birleşik Krallık pazarına girişinizi planlayın. Şirket yapısını, pazaryeri süreçlerini ve operasyon adımlarını iş modelinize göre belirleyin.",
    },
    status: "published",
    updatedAt: "2026-10-12",
  },
];

export const services: Service[] = allServices.filter((service) => service.status === "published");

export const featuredServices: Service[] = services.filter((service) => service.featured);

export function getService(slug: ServiceSlug): Service {
  const service = services.find((entry) => entry.slug === slug);
  if (!service) {
    throw new Error(`Service "${slug}" is not published.`);
  }
  return service;
}

export function getServices(slugs: ServiceSlug[]): Service[] {
  return slugs
    .map((slug) => services.find((entry) => entry.slug === slug))
    .filter((entry): entry is Service => Boolean(entry));
}

export const jurisdictionLabels: Record<Service["jurisdiction"], string> = {
  us: "Amerika Birleşik Devletleri",
  uk: "Birleşik Krallık",
  "us-uk": "Amerika Birleşik Devletleri ve Birleşik Krallık",
};
