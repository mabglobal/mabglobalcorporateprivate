import type { FaqItem } from "@/types/content";

/**
 * Shared FAQ registry. Services, sectors and the homepage reference entries
 * by id so an answer is written and maintained once.
 */
const allFaqs: FaqItem[] = [
  {
    id: "kurulus-hangi-ulke",
    question: "Amerika'da mı İngiltere'de mi şirket kurmalıyım?",
    answer:
      "Bu karar hedef pazarınıza, müşterilerinizin bulunduğu bölgeye ve kullanacağınız satış ile ödeme kanallarına bağlıdır. Ön görüşmede iş modelinizi dinliyor ve iki seçeneği kendi durumunuz üzerinden karşılaştırıyoruz.",
    status: "published",
  },
  {
    id: "abd-kurulus-icin-seyahat",
    question: "Amerika'da şirket kurmak için ABD'ye gitmem gerekir mi?",
    answer:
      "Kuruluş başvuruları birçok eyalette çevrim içi olarak yapılabilir ve kuruluş için ABD'de bulunmanız gerekmez. Banka hesabı gibi bazı adımlarda ilgili kurumun kendi kuralları belirleyicidir.",
    status: "published",
  },
  {
    id: "abd-eyalet-secimi",
    question: "Şirketimi hangi eyalette kurmalıyım?",
    answer:
      "Eyalet seçimi faaliyetin fiilen nerede yürütüleceğine, yıllık giderlere ve yatırım planlarına göre yapılır. Delaware, Wyoming ve diğer eyaletlerin farklı avantajları ve yükümlülükleri vardır. Seçimi iş modelinize göre birlikte yapıyoruz.",
    status: "published",
  },
  {
    id: "abd-ein-nedir",
    question: "EIN nedir ve neden gereklidir?",
    answer:
      "EIN, IRS tarafından şirketlere verilen dokuz haneli işveren kimlik numarasıdır. Banka hesabı başvurularında, vergi beyanlarında ve birçok pazaryeri doğrulamasında kullanılır. IRS bu numara için ücret talep etmez.",
    status: "published",
  },
  {
    id: "abd-banka-hesabi",
    question: "Banka hesabı açılışı garanti edilebilir mi?",
    answer:
      "Banka ve ödeme kuruluşları hesap başvurularını kendi politikalarına göre değerlendirir. Başvuru için gereken belgeleri hazırlamanıza yardımcı oluyoruz. Hesap onayı ilgili kurumun kararına bağlıdır.",
    status: "published",
  },
  {
    id: "kurulus-suresi",
    question: "Şirket kuruluşu ne kadar sürer?",
    answer:
      "Süre, seçilen eyalet veya ülkenin işlem yoğunluğuna, belgelerin eksiksiz olmasına ve kimlik doğrulama adımlarına göre değişir. Ön görüşmede güncel işlem süreleri hakkında bilgi veriyor ve süreci adım adım takip ediyoruz. Resmi kurumların işlem süreleri için kesin taahhüt vermiyoruz.",
    status: "published",
  },
  {
    id: "uk-registered-office",
    question: "İngiltere şirketim için hangi adres gereklidir?",
    answer:
      "Companies House kurallarına göre registered office adresi, şirketin kayıtlı olduğu Birleşik Krallık ülkesinde bulunan ve posta teslimini kabul edebilen fiziki bir adres olmalıdır. Posta kutusu hizmetleri bu amaçla kullanılamaz.",
    status: "published",
  },
  {
    id: "uk-kimlik-dogrulama",
    question: "İngiltere'de direktörler için kimlik doğrulama zorunlu mu?",
    answer:
      "Evet. 18 Kasım 2025 itibarıyla direktörler ve önemli kontrol sahibi kişiler (PSC) için Companies House kimlik doğrulaması yasal bir zorunluluktur. Kuruluş sürecinde bu adımı birlikte planlıyoruz.",
    status: "published",
  },
  {
    id: "uk-yillik-yukumlulukler",
    question: "İngiltere'deki şirketimin yıllık yükümlülükleri nelerdir?",
    answer:
      "Şirketler her 12 ayda en az bir kez confirmation statement verir, yıllık hesaplarını hazırlar, Company Tax Return sunar ve Corporation Tax öder. Bu tarihleri şirketinizin takvimine göre takip ediyoruz.",
    status: "published",
  },
  {
    id: "vergi-turkiye-abd",
    question:
      "Türkiye'de yaşıyorum. Amerika'daki şirketim için vergi beyanı vermem gerekir mi?",
    answer:
      "Amerika'da kurulu şirketlerin federal ve eyalet düzeyinde çeşitli beyan yükümlülükleri olabilir. Bu yükümlülükler şirket türüne, ortaklık yapısına ve işlemlere göre belirlenir. Türkiye'deki vergi durumunuz kendi başına bir değerlendirme gerektirir.",
    status: "published",
  },
  {
    id: "form-5472",
    question: "Yabancı ortaklı tek üyeli LLC'ler hangi beyanları verir?",
    answer:
      "IRS talimatlarına göre yabancı bir kişiye ait tek üyeli LLC'ler, ortakla yapılan raporlanabilir işlemler için pro forma Form 1120 ile birlikte Form 5472 vermekle yükümlü olabilir. Ortak tarafından yapılan ödemeler de raporlanabilir işlem sayılabildiği için durumunuzu yıl sonundan önce birlikte değerlendiriyoruz.",
    status: "published",
  },
  {
    id: "vergi-beyan-donemi",
    question: "Vergi beyan tarihlerini nasıl takip ediyorsunuz?",
    answer:
      "Şirketiniz için yıllık bir uyum takvimi oluşturuyor ve beyan dönemlerinden önce gerekli belgeleri talep ediyoruz. Böylece beyanların son güne bırakılmadan hazırlanmasını hedefliyoruz.",
    status: "published",
  },
  {
    id: "uluslararasi-gelir",
    question:
      "Yurt dışındaki müşterilerden elde ettiğim gelir için şirket kurmam gerekir mi?",
    answer:
      "Her durumda şirket kurmak gerekmez. Gelir hacmi, müşteri yapısı, ödeme kanalları ve Türkiye'deki vergi durumunuz bu kararı belirler. Ön görüşmede bireysel çalışma ile şirket yapısının farklarını sizinle birlikte değerlendiriyoruz.",
    status: "published",
  },
  {
    id: "muhasebe-kapsam",
    question: "Muhasebe hizmeti neleri kapsar?",
    answer:
      "Gelir ve gider kayıtları, banka ve ödeme platformu mutabakatları, dönemsel raporlar ve yıl sonu hazırlığı muhasebe hizmetinin temelini oluşturur. Kapsamı işlem hacminize göre birlikte belirliyoruz.",
    status: "published",
  },
  {
    id: "on-muhasebe",
    question: "Pazaryeri satışlarımın muhasebesini nasıl yürütüyorsunuz?",
    answer:
      "Pazaryeri raporlarını banka hareketleriyle eşleştiriyor, komisyon, iade, reklam ve lojistik giderlerini ayrı kalemler olarak kaydediyoruz. Bu düzen doğru vergi beyanı için gereken kayıt yapısını sağlar.",
    status: "published",
  },
  {
    id: "muhasebe-belgeler",
    question: "Muhasebe için hangi belgeleri paylaşmam gerekir?",
    answer:
      "Banka ekstreleri, ödeme platformu raporları, satış raporları ve gider faturaları temel belgelerdir. Belgeleri hangi sıklıkla paylaşacağınızı hizmet kapsamına göre birlikte planlıyoruz.",
    status: "published",
  },
  {
    id: "registered-agent-nedir",
    question: "Registered agent ne iş yapar?",
    answer:
      "Registered agent, şirket adına resmi yazışmaları ve yasal tebligatları kabul eden temsilcidir. Şirketin kayıtlı olduğu eyalette fiziki bir adrese sahip olmalı ve bu yazışmaları şirkete zamanında iletmelidir.",
    status: "published",
  },
  {
    id: "registered-agent-zorunlu",
    question: "Registered agent bulundurmak zorunlu mu?",
    answer:
      "ABD'de LLC ve corporation gibi şirket türleri, kuruluş başvurusundan önce kayıtlı oldukları eyalette bir registered agent belirlemelidir. Bu bilginin güncel tutulması şirketin resmi kayıtlarda iyi durumda kalması için önemlidir.",
    status: "published",
  },
  {
    id: "registered-agent-kapsam",
    question: "Hangi eyaletlerde registered agent hizmeti veriyorsunuz?",
    answer:
      "MAB Registered Agent Inc. aracılığıyla 50 eyalet ve Washington D.C. kapsamında hizmet veriyoruz. LLC, corporation, partnership ve kâr amacı gütmeyen kuruluşlar dahil tüm şirket türleriyle çalışıyoruz.",
    status: "published",
  },
  {
    id: "adres-kullanim",
    question: "ABD iş adresini hangi amaçlarla kullanabilirim?",
    answer:
      "İş adresi şirket yazışmaları ve kurumsal iletişim için kullanılır. Banka, pazaryeri ve resmi kurumlar adres türüne ilişkin kendi kurallarını uygular. Kullanım amacınızı ön görüşmede birlikte değerlendiriyoruz.",
    status: "published",
  },
  {
    id: "sirket-kapanis",
    question: "Kullanmadığım ABD veya İngiltere şirketimi nasıl kapatırım?",
    answer:
      "Kapanış işlemi ilgili eyalete veya Companies House'a yapılan resmi başvuruyla tamamlanır. Kapanıştan önce son dönem vergi beyanları ve açık yükümlülükler gözden geçirilmelidir. Süreci şirketinizin durumuna göre planlıyoruz.",
    status: "published",
  },
  {
    id: "hizmet-kapsami",
    question: "Hizmet kapsamı nasıl belirleniyor?",
    answer:
      "Her işletmenin ihtiyacı farklıdır. Ön görüşmede ihtiyaçlarınızı netleştiriyor, ardından önerilen hizmet kapsamını ve süreç adımlarını sizinle paylaşıyoruz.",
    status: "published",
  },
  {
    id: "danismanlik-sureci",
    question: "Danışmanlık talebimden sonra süreç nasıl ilerler?",
    answer:
      "Formu gönderdiğinizde talebiniz ekibimize ulaşır. Ekibimiz sizinle e-posta yoluyla iletişime geçerek bir ön görüşme planlar. Görüşmede ihtiyaçlarınızı değerlendiriyor ve uygun hizmetleri belirliyoruz.",
    status: "published",
  },
  {
    id: "ucretlendirme",
    question: "Hizmet ücretleri nasıl belirleniyor?",
    answer:
      "Ücretler hizmet kapsamına, şirketin kurulacağı eyalete veya ülkeye ve süreklilik gerektiren hizmetlere göre belirlenir. Resmi kurum harçları hizmet ücretinden bağımsız olarak hesaplanır. Ön görüşmenin ardından kapsamınıza uygun teklifi paylaşıyoruz.",
    status: "published",
  },
  {
    id: "e-ticaret-sirket",
    question: "Amazon'da satış yapmak için ABD'de şirket kurmam gerekir mi?",
    answer:
      "Amazon farklı ülkelerden satıcı kaydı kabul eder. Bir ABD şirketi ödeme altyapısı, vergi düzeni ve marka kayıtları gibi konularda işinizi kolaylaştırabilir. Kararı satış hedeflerinize göre birlikte değerlendiriyoruz.",
    status: "published",
  },
  {
    id: "sales-tax",
    question: "ABD'de sales tax yükümlülüğü ne zaman doğar?",
    answer:
      "Sales tax yükümlülüğü eyalet kurallarına, satış hacmine ve satış kanallarına göre belirlenir. Birçok eyalette pazaryerleri vergiyi satıcı adına tahsil eder. Satış yaptığınız eyaletlere göre kayıt ve beyan ihtiyacınızı değerlendiriyoruz.",
    status: "published",
  },
  {
    id: "amazon-hesap",
    question:
      "Amazon hesap açılışı ve hesap sorunlarında destek veriyor musunuz?",
    answer:
      "Amazon satıcı hesabı açılış sürecinde ve hesap askıya alma durumlarında danışmanlık veriyoruz. Hesap onayları ve itiraz sonuçları Amazon'un kendi değerlendirmesine bağlıdır.",
    status: "published",
  },
  {
    id: "grup-ici-islemler",
    question:
      "Türkiye'deki şirketimle yurt dışı şirketim arasındaki işlemleri nasıl kaydetmeliyim?",
    answer:
      "Grup içi ürün, hizmet ve finansman işlemleri sözleşme ve faturalarla belgelenmeli ve her iki şirketin kayıtlarında tutarlı şekilde yer almalıdır. Yurt dışı şirket tarafındaki kayıtları düzenli tutuyor, Türkiye tarafındaki mali müşavirinizle koordinasyonun önemini planlamaya dahil ediyoruz.",
    status: "published",
  },
  {
    id: "mevcut-sirket-devralma",
    question:
      "Halihazırda kurulu yabancı şirketimin takibini devralabilir misiniz?",
    answer:
      "Evet. Devralma sürecinde önce şirketin resmi kayıtlarını, registered agent bilgisini ve geçmiş dönem beyanlarını gözden geçiriyoruz. Eksik bir adım varsa bunu takvime ekliyor ve düzenli takibe başlıyoruz.",
    status: "published",
  },
];

export const faqs: FaqItem[] = allFaqs.filter(
  (faq) => faq.status === "published",
);

export const homepageFaqIds = [
  "kurulus-hangi-ulke",
  "abd-kurulus-icin-seyahat",
  "vergi-turkiye-abd",
  "muhasebe-kapsam",
  "uluslararasi-gelir",
  "hizmet-kapsami",
  "danismanlik-sureci",
  "ucretlendirme",
] as const;

export function getFaqs(ids: readonly string[]): FaqItem[] {
  return ids
    .map((id) => faqs.find((faq) => faq.id === id))
    .filter((faq): faq is FaqItem => Boolean(faq));
}

/** Ids referenced anywhere that do not resolve to a published FAQ. */
export function findMissingFaqIds(ids: readonly string[]): string[] {
  const known = new Set(faqs.map((faq) => faq.id));
  return ids.filter((id) => !known.has(id));
}
