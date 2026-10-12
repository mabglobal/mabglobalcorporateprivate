import type { Service, ServiceSlug } from "@/types/content";

/**
 * Service registry. Scope items are limited to services listed on the
 * business's existing websites (see docs/content-verification.md).
 */
const allServices: Service[] = [
  {
    slug: "amerika-sirket-kurulusu",
    title: "Amerika'da Şirket Kuruluşu",
    shortTitle: "Amerika'da Şirket Kuruluşu",
    icon: "building",
    jurisdiction: "us",
    summary:
      "LLC ve corporation kuruluşunu eyalet seçiminden EIN başvurusuna kadar planlı bir süreçle yönetiyoruz.",
    definition:
      "Amerika'da şirket kuruluşu, seçilen eyalette bir LLC veya corporation kaydının yapılmasını ve şirketin faaliyete hazır hale getirilmesi için gereken resmi adımları kapsar.",
    intro: [
      "Amerika Birleşik Devletleri'nde şirketler eyalet düzeyinde kurulur. Şirket türü, kuruluş eyaleti ve sonrasında doğacak vergi yükümlülükleri iş modelinize göre birlikte değerlendirilmelidir.",
      "Kuruluş belgelerinin hazırlanmasını, eyalet başvurusunu, registered agent atamasını ve EIN sürecini tek bir plan içinde takip ediyoruz. Türkiye'den yönetilen şirketler için tüm süreci Türkçe iletişimle yürütüyoruz.",
    ],
    audience: [
      {
        title: "E-ticaret satıcıları",
        description:
          "Amazon, Shopify, Etsy ve benzeri platformlarda ABD pazarına satış yapan işletmeler.",
      },
      {
        title: "Serbest çalışanlar ve ajanslar",
        description:
          "ABD'deki müşterilere hizmet veren yazılım, tasarım ve danışmanlık profesyonelleri.",
      },
      {
        title: "Teknoloji girişimleri",
        description:
          "ABD pazarını hedefleyen SaaS, yazılım ve mobil uygulama şirketleri.",
      },
      {
        title: "Mevcut işletmeler",
        description:
          "Türkiye'deki faaliyetine ek olarak ABD'de yeni bir şirket yapısı kurmak isteyen firmalar.",
      },
    ],
    scope: [
      {
        title: "Şirket türü ve eyalet değerlendirmesi",
        description:
          "LLC ve corporation seçeneklerini faaliyet planınız ve ortaklık yapınız üzerinden birlikte değerlendiriyoruz.",
      },
      {
        title: "Kuruluş belgeleri ve eyalet başvurusu",
        description:
          "Articles of Organization veya Articles of Incorporation başvurusunu seçilen eyaletin kurallarına göre hazırlıyoruz.",
      },
      {
        title: "Registered agent ataması",
        description:
          "Eyalet kaydı için gereken registered agent hizmetini MAB Registered Agent Inc. üzerinden sağlıyoruz.",
      },
      {
        title: "EIN başvurusu",
        description:
          "Şirketinizin IRS nezdinde kullanacağı işveren kimlik numarası (EIN) başvurusunu takip ediyoruz.",
      },
      {
        title: "ITIN başvuru desteği",
        description:
          "Gerekli durumlarda bireysel vergi kimlik numarası (ITIN) başvuru sürecinde destek veriyoruz.",
      },
      {
        title: "Kuruluş sonrası adres ve uyum planı",
        description:
          "Şirket adresi, yıllık rapor ve vergi beyanı adımlarını kuruluşla bağlantılı olarak planlıyoruz.",
      },
      {
        title: "Banka hesabı başvuru hazırlığı",
        description:
          "Banka ve finansal hizmet sağlayıcılarına yapılacak başvurular için belge hazırlığında yol gösteriyoruz.",
      },
    ],
    process: [
      {
        title: "Ön değerlendirme",
        description:
          "İş modelinizi, ortaklık yapınızı ve hedef pazarınızı dinliyoruz.",
      },
      {
        title: "Yapı ve eyalet seçimi",
        description:
          "Şirket türünü ve kuruluş eyaletini gerekçeleriyle birlikte netleştiriyoruz.",
      },
      {
        title: "Belge hazırlığı ve başvuru",
        description:
          "Kuruluş belgelerini hazırlıyor, eyalet başvurusunu yapıyor ve registered agent atamasını tamamlıyoruz.",
      },
      {
        title: "EIN ve kuruluş sonrası adımlar",
        description:
          "EIN başvurusunu takip ediyor, vergi ve yıllık uyum takvimini sizinle paylaşıyoruz.",
      },
    ],
    documents: [
      "Şirket ortaklarının geçerli pasaport bilgileri",
      "Ortakların iletişim ve adres bilgileri",
      "Planlanan şirket adı ve alternatifleri",
      "Faaliyet alanına ilişkin kısa açıklama",
      "Ortaklık payları ve yönetim yapısına ilişkin bilgiler",
    ],
    considerations: [
      "Başvuru ücretleri, yıllık rapor yükümlülükleri ve işlem süreleri eyaletten eyalete farklılık gösterir.",
      "Kuruluş eyaleti dışındaki bir eyalette fiilen faaliyet gösteren şirketlerin o eyalette de kayıt yaptırması gerekebilir.",
      "Yabancı ortaklı tek üyeli LLC'ler için IRS'e yönelik yıllık bilgi beyanı yükümlülükleri doğabilir. Bu yükümlülükleri kuruluş aşamasında planlamak önemlidir.",
      "Türkiye'deki vergi durumunuz kendi başına bir değerlendirme gerektirir. Kuruluş planınızı Türkiye'deki mali müşavirinizle de paylaşmanızı öneririz.",
      "Banka hesabı onayları ve resmi kurumların işlem süreleri ilgili kurumların değerlendirmesine bağlıdır. Bu nedenle kesin süre ve sonuç taahhüdü vermiyoruz.",
    ],
    relatedServices: [
      "registered-agent",
      "vergi-danismanligi",
      "muhasebe-hizmetleri",
      "is-adresi-ve-sirket-operasyonlari",
    ],
    relatedSectors: [
      "e-ticaret",
      "serbest-calisanlar",
      "teknoloji-sirketleri",
      "girisimciler-ve-yatirimcilar",
    ],
    faqIds: [
      "abd-kurulus-icin-seyahat",
      "abd-eyalet-secimi",
      "abd-ein-nedir",
      "abd-banka-hesabi",
      "kurulus-suresi",
    ],
    featured: true,
    seo: {
      title: "Amerika'da Şirket Kuruluşu, LLC ve Corporation",
      description:
        "Amerika'da LLC veya corporation kuruluşunu eyalet seçimi, registered agent, EIN ve kuruluş sonrası uyum adımlarıyla birlikte planlıyoruz.",
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
    summary:
      "Companies House kaydı, registered office adresi ve HMRC adımlarıyla İngiltere'de limited şirket kuruluşunu planlıyoruz.",
    definition:
      "İngiltere'de şirket kuruluşu, bir private limited company'nin Companies House'a kaydedilmesini ve şirketin vergi ile raporlama yükümlülüklerine hazırlanmasını kapsar.",
    intro: [
      "Birleşik Krallık'ta şirketler Companies House'a kaydedilir. Kuruluş aşamasında şirket adı, direktörler, hissedarlar, önemli kontrol sahibi kişiler (PSC) ve registered office adresi belirlenir.",
      "Kuruluş başvurusunu, kimlik doğrulama adımlarını ve kuruluş sonrası Corporation Tax kaydını tek bir süreç olarak planlıyoruz. Birleşik Krallık ve Avrupa pazarına açılan işletmelere Türkçe destek veriyoruz.",
    ],
    audience: [
      {
        title: "Avrupa pazarına açılan markalar",
        description:
          "Birleşik Krallık ve Avrupa'daki müşterilere satış yapmayı planlayan e-ticaret işletmeleri.",
      },
      {
        title: "Hizmet ihracatı yapan profesyoneller",
        description:
          "Birleşik Krallık'taki müşterilerle sözleşmeli çalışan danışmanlar ve ajanslar.",
      },
      {
        title: "Teknoloji şirketleri",
        description:
          "Birleşik Krallık'ta yerel bir şirket yapısıyla faaliyet göstermek isteyen yazılım işletmeleri.",
      },
      {
        title: "İhracatçılar",
        description:
          "Birleşik Krallık'taki alıcılarla yerel bir şirket üzerinden çalışmak isteyen üreticiler.",
      },
    ],
    scope: [
      {
        title: "Şirket türü ve isim kontrolü",
        description:
          "Şirket türünü belirliyor, şirket adının uygunluğunu Companies House kayıtları üzerinden kontrol ediyoruz.",
      },
      {
        title: "Direktör, hissedar ve PSC bilgileri",
        description:
          "Yönetim ve ortaklık yapısını, önemli kontrol sahibi kişiler dahil olmak üzere başvuruya hazırlıyoruz.",
      },
      {
        title: "Registered office adresi",
        description:
          "Şirketin resmi yazışmaları için gereken adres şartlarını ve uygun adres seçeneklerini planlıyoruz.",
      },
      {
        title: "Kimlik doğrulama adımları",
        description:
          "Direktörlerin ve PSC'lerin Companies House kimlik doğrulamasını tamamlamasına yardımcı oluyoruz.",
      },
      {
        title: "Companies House başvurusu",
        description:
          "Kuruluş belgelerini hazırlıyor ve başvurunun sonuçlanmasını takip ediyoruz.",
      },
      {
        title: "Kuruluş sonrası vergi ve muhasebe",
        description:
          "Corporation Tax kaydı, yıllık hesaplar ve İngiltere vergi beyanı süreçlerini planlıyoruz.",
      },
    ],
    process: [
      {
        title: "Ön değerlendirme",
        description:
          "Hedef pazarınızı, ortaklık yapınızı ve faaliyet planınızı dinliyoruz.",
      },
      {
        title: "Şirket bilgilerinin netleştirilmesi",
        description:
          "Şirket adını, direktörleri, hissedarları, PSC bilgilerini ve faaliyet kodunu belirliyoruz.",
      },
      {
        title: "Kimlik doğrulama ve başvuru",
        description:
          "Kimlik doğrulama adımlarını planlıyor ve Companies House başvurusunu yapıyoruz.",
      },
      {
        title: "Kuruluş sonrası kayıtlar",
        description:
          "Corporation Tax kaydını ve yıllık raporlama takvimini sizinle birlikte oluşturuyoruz.",
      },
    ],
    documents: [
      "Direktörlerin ve hissedarların geçerli pasaport bilgileri",
      "Direktörlerin ve hissedarların adres bilgileri",
      "Planlanan şirket adı ve alternatifleri",
      "Faaliyet alanına ilişkin kısa açıklama",
      "Pay dağılımı ve önemli kontrol sahibi kişilere ilişkin bilgiler",
    ],
    considerations: [
      "Registered office adresi, şirketin kayıtlı olduğu Birleşik Krallık ülkesinde bulunan fiziki bir adres olmalıdır. Posta kutusu hizmetleri bu amaçla kullanılamaz.",
      "Companies House'a bir kayıtlı e-posta adresi bildirilmesi gerekir. Bu adres kamuya açık kayıtta yayımlanmaz.",
      "18 Kasım 2025 itibarıyla direktörler ve PSC'ler için Companies House kimlik doğrulaması yasal bir zorunluluktur.",
      "Şirketler her 12 ayda en az bir kez confirmation statement verir, yıllık hesaplarını hazırlar ve Corporation Tax yükümlülüklerini yerine getirir.",
      "KDV (VAT) kaydı ciro eşiğine ve faaliyet yapısına bağlıdır ve işletmenin durumuna göre değerlendirilir.",
    ],
    relatedServices: [
      "vergi-danismanligi",
      "muhasebe-hizmetleri",
      "uluslararasi-is-danismanligi",
    ],
    relatedSectors: [
      "e-ticaret",
      "ihracat-ve-lojistik",
      "teknoloji-sirketleri",
      "kobiler-ve-kurumsal-isletmeler",
    ],
    faqIds: [
      "uk-registered-office",
      "uk-kimlik-dogrulama",
      "uk-yillik-yukumlulukler",
      "kurulus-hangi-ulke",
      "kurulus-suresi",
    ],
    featured: true,
    seo: {
      title: "İngiltere'de Şirket Kuruluşu, Limited Şirket",
      description:
        "İngiltere'de limited şirket kuruluşunu Companies House kaydı, kimlik doğrulama, registered office ve Corporation Tax adımlarıyla planlıyoruz.",
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
    summary:
      "Amerika ve İngiltere'deki şirketlerinizin vergi beyanlarını ve yıllık yükümlülüklerini takvimli olarak yönetiyoruz.",
    definition:
      "Vergi danışmanlığı hizmetimiz, Amerika ve İngiltere'de kurulu şirketlerin federal, eyalet ve ülke düzeyindeki vergi beyanlarının hazırlanmasını ve yükümlülüklerin takibini kapsar.",
    intro: [
      "Şirket kuruluşu sürecin başlangıcıdır. Asıl sorumluluklar şirket faaliyete geçtikten sonra başlar.",
      "Amerika'da federal ve eyalet düzeyindeki yükümlülükleri, İngiltere'de Corporation Tax ve yıllık raporlama adımlarını takip ediyoruz. Beyan dönemlerini önceden planlayarak gecikme riskini azaltmayı hedefliyoruz.",
    ],
    audience: [
      {
        title: "Türkiye'den yönetilen ABD şirketleri",
        description:
          "Türkiye'de yaşayan ve ABD'de LLC veya corporation sahibi olan girişimciler.",
      },
      {
        title: "Pazaryeri satıcıları",
        description:
          "Birden fazla eyalete satış yapan ve sales tax yükümlülüklerini takip etmesi gereken işletmeler.",
      },
      {
        title: "İngiltere'deki limited şirketler",
        description:
          "Corporation Tax ve Company Tax Return süreçlerini düzenli yönetmek isteyen şirketler.",
      },
      {
        title: "Büyüyen işletmeler",
        description:
          "Gelir kanalları çeşitlenen ve vergi takvimini kurumsal bir düzene oturtmak isteyen firmalar.",
      },
    ],
    scope: [
      {
        title: "ABD şirket vergi beyanları",
        description:
          "Şirket yapınıza uygun federal vergi beyanlarının (tax return) hazırlanmasını ve sunulmasını takip ediyoruz.",
      },
      {
        title: "Yabancı ortaklı LLC bilgi beyanları",
        description:
          "Yabancı ortaklı tek üyeli LLC'ler için Form 5472 ve pro forma Form 1120 yükümlülüklerini planlıyoruz.",
      },
      {
        title: "Eyalet düzeyindeki yükümlülükler",
        description:
          "Faaliyet gösterdiğiniz eyaletlere göre sales tax ve benzeri yükümlülükleri değerlendiriyoruz.",
      },
      {
        title: "İngiltere vergi beyanları",
        description:
          "Corporation Tax ve Company Tax Return süreçlerini muhasebe kayıtlarıyla uyumlu şekilde yönetiyoruz.",
      },
      {
        title: "Vergi takvimi ve önleyici takip",
        description:
          "Beyan ve ödeme tarihlerini önceden bildiriyor, gerekli belgeleri zamanında talep ediyoruz.",
      },
      {
        title: "Vergi planlaması görüşmeleri",
        description:
          "Giderlerin doğru sınıflandırılması ve yürürlükteki mevzuat çerçevesinde vergi planlaması konularında görüşme yapıyoruz.",
      },
    ],
    process: [
      {
        title: "Mevcut durumun incelenmesi",
        description:
          "Şirket türünüzü, ortaklık yapınızı ve geçmiş dönem beyanlarınızı gözden geçiriyoruz.",
      },
      {
        title: "Yükümlülük takvimi",
        description:
          "Federal, eyalet ve ülke düzeyindeki beyan tarihlerini tek bir takvimde topluyoruz.",
      },
      {
        title: "Belge toplama ve hazırlık",
        description:
          "Beyana esas belgeleri talep ediyor ve muhasebe kayıtlarıyla karşılaştırıyoruz.",
      },
      {
        title: "Beyan ve takip",
        description:
          "Beyanları hazırlıyor, sunuyor ve sonraki dönemin takvimini güncelliyoruz.",
      },
    ],
    considerations: [
      "Vergi yükümlülükleri şirket türüne, ortakların vergi mukimliğine ve faaliyetin nerede yürütüldüğüne göre değişir.",
      "Türkiye'de yaşayan şirket sahiplerinin Türkiye'deki vergi yükümlülükleri kendi başına bir değerlendirme gerektirir.",
      "Vergi tasarrufu taahhüdü vermiyoruz. Danışmanlığımız yürürlükteki mevzuat çerçevesinde doğru beyan ve zamanında uyum üzerine kuruludur.",
      "Beyan süreleri ve cezai yaptırımlar ilgili vergi idaresinin kurallarına tabidir. Belgelerin zamanında paylaşılması süreci doğrudan etkiler.",
    ],
    relatedServices: [
      "muhasebe-hizmetleri",
      "amerika-sirket-kurulusu",
      "ingiltere-sirket-kurulusu",
    ],
    relatedSectors: [
      "e-ticaret",
      "serbest-calisanlar",
      "kobiler-ve-kurumsal-isletmeler",
    ],
    faqIds: [
      "vergi-turkiye-abd",
      "form-5472",
      "vergi-beyan-donemi",
      "uluslararasi-gelir",
    ],
    featured: true,
    seo: {
      title: "Vergi Danışmanlığı, ABD ve İngiltere Şirketleri",
      description:
        "ABD ve İngiltere'deki şirketleriniz için federal ve eyalet vergi beyanlarını, Form 5472 yükümlülüklerini ve Corporation Tax süreçlerini takip ediyoruz.",
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
    summary:
      "ABD ve İngiltere şirketleriniz için düzenli kayıt, mutabakat ve raporlama süreçlerini yürütüyoruz.",
    definition:
      "Muhasebe hizmetlerimiz, Amerika ve İngiltere'de kurulu şirketlerin gelir ve gider kayıtlarının tutulmasını, banka mutabakatlarını ve dönemsel finansal raporların hazırlanmasını kapsar.",
    intro: [
      "Düzenli muhasebe kayıtları doğru vergi beyanının temelidir. Pazaryeri ödemeleri, banka hareketleri ve giderler dönem içinde işlendiğinde yıl sonu süreçleri daha öngörülebilir hale gelir.",
      "ABD ve İngiltere muhasebesini şirketinizin işlem hacmine ve gelir kanallarına göre yapılandırıyoruz.",
    ],
    audience: [
      {
        title: "Pazaryeri satıcıları",
        description:
          "Amazon ve diğer pazaryerlerinden gelen ödemeleri düzenli kaydetmesi gereken işletmeler.",
      },
      {
        title: "Abonelik tabanlı şirketler",
        description:
          "Tekrarlayan gelirlerini ve ödeme sağlayıcı hareketlerini takip eden teknoloji şirketleri.",
      },
      {
        title: "Hizmet şirketleri",
        description:
          "Uluslararası müşterilere faturalama yapan danışmanlık ve yazılım şirketleri.",
      },
      {
        title: "Yurt dışı iştirakler",
        description:
          "Türkiye'deki ana şirkete dönemsel rapor sunması gereken ABD veya İngiltere şirketleri.",
      },
    ],
    scope: [
      {
        title: "Gelir ve gider kayıtları",
        description:
          "Şirketinizin tüm gelir ve gider hareketlerini dönemsel olarak kayıt altına alıyoruz.",
      },
      {
        title: "Banka ve ödeme platformu mutabakatları",
        description:
          "Banka hesapları, ödeme platformları ve pazaryeri ödemelerini kayıtlarla eşleştiriyoruz.",
      },
      {
        title: "Dönemsel finansal raporlar",
        description:
          "Gelir tablosu ve bilanço gibi raporları belirlenen dönemlerde paylaşıyoruz.",
      },
      {
        title: "Gider sınıflandırması",
        description:
          "Şirket giderlerinin doğru kategorilerde kaydedilmesi için bir belge düzeni oluşturuyoruz.",
      },
      {
        title: "Yıl sonu hazırlığı",
        description:
          "Vergi beyanına esas olacak kayıtları yıl sonundan önce gözden geçiriyoruz.",
      },
      {
        title: "İngiltere yıllık hesapları",
        description:
          "Companies House ve HMRC'ye sunulacak yıllık hesapların hazırlık sürecini yönetiyoruz.",
      },
    ],
    process: [
      {
        title: "Kapsamın belirlenmesi",
        description:
          "İşlem hacminizi, gelir kanallarınızı ve raporlama ihtiyacınızı değerlendiriyoruz.",
      },
      {
        title: "Kayıt düzeninin kurulması",
        description:
          "Hesap planını, belge paylaşım yöntemini ve dönem takvimini oluşturuyoruz.",
      },
      {
        title: "Dönemsel kayıt ve mutabakat",
        description:
          "Kayıtları işliyor, banka ve platform hareketleriyle eşleştiriyoruz.",
      },
      {
        title: "Raporlama ve yıl sonu",
        description:
          "Dönemsel raporları paylaşıyor ve yıl sonu beyan hazırlığını başlatıyoruz.",
      },
    ],
    considerations: [
      "Muhasebe kapsamı ve kayıt sıklığı işlem hacmine göre belirlenir.",
      "Belgelerin düzenli paylaşılması kayıtların doğruluğu için belirleyicidir.",
      "ABD'deki kayıt düzeni ile İngiltere'deki muhasebe kayıt yükümlülükleri farklılık gösterir.",
      "Pazaryeri satışlarında komisyon, iade ve kargo kalemlerinin ayrıştırılması doğru raporlama için önemlidir.",
    ],
    relatedServices: [
      "vergi-danismanligi",
      "amerika-sirket-kurulusu",
      "ingiltere-sirket-kurulusu",
    ],
    relatedSectors: [
      "e-ticaret",
      "teknoloji-sirketleri",
      "kobiler-ve-kurumsal-isletmeler",
    ],
    faqIds: ["muhasebe-kapsam", "on-muhasebe", "muhasebe-belgeler"],
    featured: true,
    seo: {
      title: "Muhasebe Hizmetleri, ABD ve İngiltere Şirketleri",
      description:
        "ABD ve İngiltere şirketleriniz için gelir ve gider kayıtları, banka mutabakatları, dönemsel raporlar ve yıl sonu hazırlığı sunuyoruz.",
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
    summary:
      "MAB Registered Agent Inc. aracılığıyla 50 eyalet ve Washington D.C. için registered agent hizmeti sunuyoruz.",
    definition:
      "Registered agent, bir şirket adına resmi yazışmaları ve yasal tebligatları kabul eden ve şirketin kayıtlı olduğu eyalette fiziki adresi bulunan temsilcidir.",
    intro: [
      "Amerika'da LLC, corporation ve diğer şirket türleri, kuruluş başvurusundan önce kayıtlı oldukları eyalette bir registered agent belirlemelidir.",
      "MAB Global Partners bünyesindeki MAB Registered Agent Inc., 50 eyalet ve Washington D.C. kapsamında tüm şirket türlerine registered agent hizmeti sunar. Şirketiniz adına gelen resmi yazışmaları kabul ediyor ve size iletiyoruz.",
    ],
    audience: [
      {
        title: "Yeni kurulan şirketler",
        description:
          "Eyalet başvurusu için registered agent belirlemesi gereken LLC ve corporation'lar.",
      },
      {
        title: "ABD dışında yaşayan şirket sahipleri",
        description:
          "Kayıtlı oldukları eyalette fiziki adresi bulunmayan girişimciler.",
      },
      {
        title: "Birden fazla eyalette faaliyet gösteren şirketler",
        description:
          "Farklı eyaletlerde kayıt yaptıran ve her eyalet için temsilci ihtiyacı olan işletmeler.",
      },
      {
        title: "Temsilcisini değiştirmek isteyen şirketler",
        description:
          "Mevcut registered agent hizmetini daha düzenli bir yapıya taşımak isteyen firmalar.",
      },
    ],
    scope: [
      {
        title: "Yasal tebligatların kabulü",
        description:
          "Şirketiniz adına gönderilen yasal belgeleri ve tebligatları kabul ediyoruz.",
      },
      {
        title: "Eyalet yazışmalarının iletilmesi",
        description:
          "Eyalet kurumlarından gelen resmi yazışmaları kayıt altına alıyor ve size iletiyoruz.",
      },
      {
        title: "50 eyalet ve Washington D.C.",
        description:
          "Şirketiniz hangi eyalette kayıtlı olursa olsun aynı hizmet yapısıyla çalışıyoruz.",
      },
      {
        title: "Tüm şirket türleri",
        description:
          "LLC, corporation, partnership ve kâr amacı gütmeyen kuruluşlara hizmet veriyoruz.",
      },
      {
        title: "Yıllık uyum takibi",
        description:
          "Yıllık rapor ve uyum tarihlerini takip ederek şirketinizin resmi kayıtlarda iyi durumda kalmasına yardımcı oluyoruz.",
      },
    ],
    process: [
      {
        title: "Eyalet ve şirket bilgileri",
        description:
          "Şirketinizin kayıtlı olduğu veya kurulacağı eyaleti ve şirket türünü belirliyoruz.",
      },
      {
        title: "Atama",
        description:
          "Kuruluş başvurusunda ya da mevcut şirketinizin kayıtlarında registered agent bilgisini tanımlıyoruz.",
      },
      {
        title: "Yazışma yönetimi",
        description:
          "Gelen resmi belgeleri kayıt altına alıyor ve size iletiyoruz.",
      },
    ],
    considerations: [
      "Registered agent, şirketin kayıtlı olduğu eyalette fiziki bir adrese sahip olmalıdır.",
      "Registered agent bilgileri eyalet kayıtlarında kamuya açık olabilir.",
      "Tebligatların zamanında iletilebilmesi için iletişim bilgilerinizin güncel tutulması gerekir.",
      "Kuruluş eyaleti dışındaki eyaletlerde kayıt yaptıran şirketler o eyaletlerde de registered agent bulundurmak durumunda kalabilir.",
    ],
    relatedServices: [
      "amerika-sirket-kurulusu",
      "is-adresi-ve-sirket-operasyonlari",
      "vergi-danismanligi",
    ],
    relatedSectors: [
      "e-ticaret",
      "girisimciler-ve-yatirimcilar",
      "kobiler-ve-kurumsal-isletmeler",
    ],
    faqIds: [
      "registered-agent-nedir",
      "registered-agent-zorunlu",
      "registered-agent-kapsam",
    ],
    externalReference: {
      label: "MAB Registered Agent Inc. web sitesi",
      href: "https://www.mabregisteredagent.com",
    },
    featured: true,
    seo: {
      title: "Registered Agent Hizmetleri, 50 Eyalet ve Washington D.C.",
      description:
        "MAB Registered Agent Inc. aracılığıyla 50 eyalet ve Washington D.C. kapsamında LLC, corporation ve diğer şirket türleri için registered agent hizmeti.",
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
    summary:
      "ABD iş adresi, yıllık uyum takibi ve şirket değişiklikleri gibi operasyonel süreçleri düzenli olarak takip ediyoruz.",
    definition:
      "İş adresi ve şirket operasyonları hizmetimiz, kurulu şirketlerin adres ihtiyacını, yıllık uyum takvimini ve şirket kayıtlarına ilişkin değişiklik işlemlerini kapsar.",
    intro: [
      "Şirket kurulduktan sonra adres, yıllık rapor ve kayıt güncellemeleri gibi tekrar eden işlemler başlar. Bu adımların takvimli takibi şirketin resmi kayıtlarda iyi durumda kalmasına katkı sağlar.",
      "Adres hizmetinden şirket devri ve kapanışına kadar şirketinizin yaşam döngüsündeki operasyonel işlemleri planlıyoruz.",
    ],
    audience: [
      {
        title: "Kurulu ABD şirketleri",
        description:
          "Profesyonel bir iş adresine ve yıllık uyum takibine ihtiyaç duyan şirketler.",
      },
      {
        title: "Yapısını değiştiren şirketler",
        description:
          "Hisse devri, ortaklık değişikliği veya şirket devri planlayan işletmeler.",
      },
      {
        title: "Faaliyetini sonlandıran şirketler",
        description:
          "ABD veya İngiltere şirketini düzenli bir şekilde kapatmak isteyen girişimciler.",
      },
      {
        title: "Kurumsal alıcılarla çalışan firmalar",
        description:
          "Tedarikçi kayıt süreçleri için DUNS numarasına ihtiyaç duyan işletmeler.",
      },
    ],
    scope: [
      {
        title: "ABD iş adresi",
        description:
          "Şirketiniz için profesyonel bir ABD iş adresi sağlıyoruz.",
      },
      {
        title: "Yıllık rapor ve uyum takibi",
        description:
          "Eyalet yıllık raporlarını ve yenileme tarihlerini takvime bağlıyoruz.",
      },
      {
        title: "Hisse ve şirket devri",
        description:
          "ABD şirketlerinde hisse ve şirket devri işlemlerini planlıyoruz.",
      },
      {
        title: "Şirket kapanış işlemleri",
        description:
          "ABD ve İngiltere şirketlerinin fesih süreçlerini yürütüyoruz.",
      },
      {
        title: "DUNS numarası başvurusu",
        description:
          "Kurumsal tedarikçi kayıtlarında talep edilen DUNS numarası başvurusunu takip ediyoruz.",
      },
      {
        title: "Marka tescil başvuruları",
        description:
          "ABD ve İngiltere'de marka tescil başvuru süreçlerinde destek veriyoruz.",
      },
    ],
    process: [
      {
        title: "İhtiyacın belirlenmesi",
        description:
          "Şirketinizin mevcut durumunu ve planladığınız işlemi değerlendiriyoruz.",
      },
      {
        title: "İşlem planı",
        description:
          "Gerekli belgeleri, resmi başvuruları ve işlem sırasını netleştiriyoruz.",
      },
      {
        title: "Uygulama ve takip",
        description:
          "Başvuruları yapıyor, sonuçları takip ediyor ve kayıtlarınızı güncelliyoruz.",
      },
    ],
    considerations: [
      "Adres hizmetinin hangi amaçlarla kullanılabileceği banka, pazaryeri ve resmi kurum kurallarına göre değişebilir.",
      "Yıllık rapor tarihleri ve ücretleri eyalete göre değişir.",
      "Devir ve kapanış işlemlerinde vergi kapanış yükümlülükleri de değerlendirilmelidir.",
      "Marka tescil başvuruları ilgili ofisin incelemesine tabidir ve sonuç taahhüdü verilemez.",
    ],
    relatedServices: [
      "registered-agent",
      "amerika-sirket-kurulusu",
      "vergi-danismanligi",
    ],
    relatedSectors: [
      "e-ticaret",
      "ihracat-ve-lojistik",
      "kobiler-ve-kurumsal-isletmeler",
    ],
    faqIds: ["adres-kullanim", "sirket-kapanis", "hizmet-kapsami"],
    featured: false,
    seo: {
      title: "İş Adresi ve Şirket Operasyonları",
      description:
        "ABD iş adresi, yıllık uyum takibi, hisse devri, şirket kapanışı, DUNS numarası ve marka tescil başvurularında operasyonel destek.",
    },
    status: "published",
    updatedAt: "2026-10-12",
  },
  {
    slug: "uluslararasi-is-danismanligi",
    title: "Uluslararası İş Danışmanlığı",
    shortTitle: "Uluslararası İş Danışmanlığı",
    icon: "compass",
    jurisdiction: "us-uk",
    summary:
      "Hedef pazarınıza, gelir modelinize ve operasyon yapınıza uygun uluslararası iş planını birlikte oluşturuyoruz.",
    definition:
      "Uluslararası iş danışmanlığı, yurt dışında şirket kurmayı veya faaliyet göstermeyi planlayan işletmelerin yapı, pazar ve operasyon kararlarını birlikte değerlendirdiğimiz danışmanlık hizmetidir.",
    intro: [
      "Uluslararası pazara açılırken şirket yapısı, ödeme altyapısı, pazaryeri hesapları ve vergi yükümlülükleri birbirini etkiler. Bu kararları bütünlüklü bir plan içinde değerlendiriyoruz.",
      "E-ticaret, ihracat ve dijital hizmet alanlarındaki işletmelere ABD ve Birleşik Krallık pazarına giriş sürecinde yol gösteriyoruz.",
    ],
    audience: [
      {
        title: "Yurt dışına ilk kez açılan işletmeler",
        description:
          "Hangi ülkede ve hangi yapıyla faaliyet göstereceğine karar vermek isteyen firmalar.",
      },
      {
        title: "E-ticaret girişimcileri",
        description:
          "Amazon ve diğer pazaryerlerinde satışa başlamayı planlayan markalar.",
      },
      {
        title: "Mevcut yapısını gözden geçirenler",
        description:
          "Halihazırda yurt dışında şirketi olan ve kayıt ile uyum durumunu kontrol ettirmek isteyen işletmeler.",
      },
      {
        title: "Belirli bir konuda görüş arayanlar",
        description:
          "Tek bir konuyu netleştirmek için birebir görüşme talep eden girişimciler.",
      },
    ],
    scope: [
      {
        title: "Pazar ve yapı değerlendirmesi",
        description:
          "ABD ve Birleşik Krallık seçeneklerini iş modeliniz üzerinden karşılaştırıyoruz.",
      },
      {
        title: "E-ticaret ve pazaryeri süreçleri",
        description:
          "Amazon başta olmak üzere pazaryeri hesap açılışı ve satıcı süreçlerinde danışmanlık veriyoruz.",
      },
      {
        title: "Operasyon planı",
        description:
          "Şirket, banka, ödeme ve muhasebe adımlarını doğru sırayla planlıyoruz.",
      },
      {
        title: "Birebir danışmanlık görüşmeleri",
        description:
          "Belirli bir konuyu netleştirmek isteyen işletmeler için saatlik görüşmeler düzenliyoruz.",
      },
      {
        title: "Mevcut yapının gözden geçirilmesi",
        description:
          "Yurt dışındaki şirketinizin kayıt ve uyum durumunu değerlendiriyoruz.",
      },
    ],
    process: [
      {
        title: "Hedeflerin dinlenmesi",
        description:
          "Ürününüzü, müşterilerinizi ve büyüme hedeflerinizi dinliyoruz.",
      },
      {
        title: "Seçeneklerin karşılaştırılması",
        description:
          "Ülke, şirket yapısı ve satış kanalı seçeneklerini artı ve eksileriyle karşılaştırıyoruz.",
      },
      {
        title: "Yol haritası",
        description:
          "Atılacak adımları, sorumlulukları ve öncelik sırasını içeren bir plan paylaşıyoruz.",
      },
    ],
    considerations: [
      "Danışmanlık görüşmeleri bilgilendirme ve planlama amaçlıdır. Hukuki ve vergisel kararlar kişisel durumunuza göre ayrıntılı değerlendirme gerektirir.",
      "Pazaryeri ve ödeme sağlayıcılarının hesap onayları ilgili platformun kendi politikalarına bağlıdır.",
      "Hedef ülkedeki lisans, izin ve ürün düzenlemeleri sektöre göre farklılık gösterir.",
    ],
    relatedServices: [
      "amerika-sirket-kurulusu",
      "ingiltere-sirket-kurulusu",
      "vergi-danismanligi",
    ],
    relatedSectors: [
      "e-ticaret",
      "ihracat-ve-lojistik",
      "girisimciler-ve-yatirimcilar",
    ],
    faqIds: ["kurulus-hangi-ulke", "amazon-hesap", "hizmet-kapsami"],
    featured: true,
    seo: {
      title: "Uluslararası İş Danışmanlığı",
      description:
        "ABD ve Birleşik Krallık pazarına giriş için şirket yapısı, pazaryeri süreçleri ve operasyon planını iş modelinize göre birlikte değerlendiriyoruz.",
    },
    status: "published",
    updatedAt: "2026-10-12",
  },
];

export const services: Service[] = allServices.filter(
  (service) => service.status === "published",
);

export const featuredServices: Service[] = services.filter(
  (service) => service.featured,
);

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
