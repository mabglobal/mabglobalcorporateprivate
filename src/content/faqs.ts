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
      "Karar hedef pazarınıza, müşterilerinizin bulunduğu bölgeye ve satış kanallarınıza bağlıdır. Ön görüşmede iki seçeneği kendi iş modeliniz üzerinden karşılaştırın.",
    status: "published",
  },
  {
    id: "abd-kurulus-icin-seyahat",
    question: "Amerika'da şirket kurmak için ABD'ye gitmem gerekir mi?",
    answer:
      "Birçok eyalette başvuru çevrim içi yapılır ve ABD'de bulunmanız gerekmez. Banka hesabı gibi adımlarda ilgili kurumun kuralları geçerlidir.",
    status: "published",
  },
  {
    id: "abd-eyalet-secimi",
    question: "Şirketimi hangi eyalette kurmalıyım?",
    answer:
      "Seçim faaliyet yerine, yıllık giderlere ve yatırım planına göre yapılır. Delaware, Wyoming ve diğer eyaletlerin avantajlarını iş modelinize göre karşılaştırın.",
    status: "published",
  },
  {
    id: "abd-ein-nedir",
    question: "EIN nedir ve neden gereklidir?",
    answer:
      "EIN, IRS'in şirketlere verdiği dokuz haneli işveren kimlik numarasıdır. Banka başvurularında, vergi beyanlarında ve pazaryeri doğrulamalarında kullanılır. IRS bu numara için ücret almaz.",
    status: "published",
  },
  {
    id: "abd-banka-hesabi",
    question: "Banka hesabı açılışı garanti edilebilir mi?",
    answer:
      "Hayır, hesap onayı bankanın kararıdır. Başvuru belgelerinizi eksiksiz hazırlayın, değerlendirme ilgili kurumun politikasına göre yapılır.",
    status: "published",
  },
  {
    id: "kurulus-suresi",
    question: "Şirket kuruluşu ne kadar sürer?",
    answer:
      "Süre eyalet veya ülkenin işlem yoğunluğuna, belgelerin eksiksizliğine ve kimlik doğrulama adımlarına göre değişir. Resmi kurumların süreleri için kesin taahhüt verilmez.",
    status: "published",
  },
  {
    id: "uk-registered-office",
    question: "İngiltere şirketim için hangi adres gereklidir?",
    answer:
      "Registered office, şirketin kayıtlı olduğu Birleşik Krallık ülkesinde posta teslimini kabul eden fiziki bir adres olmalıdır. Posta kutusu hizmetleri kullanılamaz.",
    status: "published",
  },
  {
    id: "uk-kimlik-dogrulama",
    question: "İngiltere'de direktörler için kimlik doğrulama zorunlu mu?",
    answer:
      "Evet. 18 Kasım 2025 itibarıyla direktörler ve önemli kontrol sahibi kişiler (PSC) için Companies House kimlik doğrulaması yasal zorunluluktur.",
    status: "published",
  },
  {
    id: "uk-yillik-yukumlulukler",
    question: "İngiltere'deki şirketimin yıllık yükümlülükleri nelerdir?",
    answer:
      "Şirketler her 12 ayda en az bir kez confirmation statement verir, yıllık hesaplarını hazırlar, Company Tax Return sunar ve Corporation Tax öder.",
    status: "published",
  },
  {
    id: "vergi-turkiye-abd",
    question: "Türkiye'de yaşayan biri olarak ABD şirketim için beyan vermem gerekir mi?",
    answer:
      "ABD'deki şirketlerin federal ve eyalet düzeyinde beyan yükümlülükleri olabilir. Yükümlülükler şirket türüne ve işlemlere göre belirlenir. Türkiye'deki vergi durumunuzu ayrı olarak değerlendirin.",
    status: "published",
  },
  {
    id: "form-5472",
    question: "Yabancı ortaklı tek üyeli LLC'ler hangi beyanları verir?",
    answer:
      "IRS talimatlarına göre bu şirketler ortakla yapılan işlemler için pro forma Form 1120 ile birlikte Form 5472 vermekle yükümlü olabilir. Ortak tarafından yapılan ödemeler de raporlanabilir işlem sayılabilir.",
    status: "published",
  },
  {
    id: "vergi-beyan-donemi",
    question: "Vergi beyan tarihleri nasıl takip edilir?",
    answer:
      "Şirketiniz için yıllık bir uyum takvimi oluşturulur ve gerekli belgeler beyan döneminden önce talep edilir. Beyanlarınızı son güne bırakmayın.",
    status: "published",
  },
  {
    id: "uluslararasi-gelir",
    question: "Yurt dışı müşteri gelirim için şirket kurmam gerekir mi?",
    answer:
      "Her durumda gerekmez. Gelir hacmi, müşteri yapısı, ödeme kanalları ve vergi durumunuz kararı belirler. Ön görüşmede iki seçeneği karşılaştırın.",
    status: "published",
  },
  {
    id: "muhasebe-kapsam",
    question: "Muhasebe hizmeti neleri kapsar?",
    answer:
      "Gelir ve gider kayıtları, banka ve platform mutabakatları, dönemsel raporlar ve yıl sonu hazırlığı temel kapsamdır. Kapsamı işlem hacminize göre belirleyin.",
    status: "published",
  },
  {
    id: "on-muhasebe",
    question: "Pazaryeri satışlarının muhasebesi nasıl tutulur?",
    answer:
      "Pazaryeri raporları banka hareketleriyle eşleştirilir. Komisyon, iade, reklam ve lojistik giderleri ayrı kalemler olarak kaydedilir.",
    status: "published",
  },
  {
    id: "muhasebe-belgeler",
    question: "Muhasebe için hangi belgeleri paylaşmalıyım?",
    answer:
      "Banka ekstrelerini, ödeme platformu raporlarını, satış raporlarını ve gider faturalarını paylaşın. Paylaşım sıklığı hizmet kapsamına göre belirlenir.",
    status: "published",
  },
  {
    id: "registered-agent-nedir",
    question: "Registered agent ne iş yapar?",
    answer:
      "Registered agent, şirket adına resmi yazışmaları ve yasal tebligatları kabul eder. Şirketin kayıtlı olduğu eyalette fiziki bir adrese sahip olmalıdır.",
    status: "published",
  },
  {
    id: "registered-agent-zorunlu",
    question: "Registered agent bulundurmak zorunlu mu?",
    answer:
      "Evet. LLC ve corporation gibi şirketler kuruluş başvurusundan önce kayıtlı oldukları eyalette bir registered agent belirlemelidir.",
    status: "published",
  },
  {
    id: "registered-agent-kapsam",
    question: "Registered agent hizmeti hangi eyaletleri kapsar?",
    answer:
      "MAB Registered Agent Inc. hizmeti 50 eyaleti ve Washington D.C.'yi kapsar. LLC, corporation, partnership ve kâr amacı gütmeyen kuruluşlar dahil tüm şirket türleri için geçerlidir.",
    status: "published",
  },
  {
    id: "adres-kullanim",
    question: "ABD iş adresini hangi amaçlarla kullanabilirim?",
    answer:
      "İş adresi şirket yazışmaları ve kurumsal iletişim için kullanılır. Banka, pazaryeri ve resmi kurumlar adres türü konusunda kendi kurallarını uygular.",
    status: "published",
  },
  {
    id: "sirket-kapanis",
    question: "Kullanmadığım ABD veya İngiltere şirketimi nasıl kapatırım?",
    answer:
      "Kapanış, eyalete veya Companies House'a yapılan resmi başvuruyla tamamlanır. Başvurudan önce son dönem beyanlarını ve açık yükümlülükleri gözden geçirin.",
    status: "published",
  },
  {
    id: "hizmet-kapsami",
    question: "Hizmet kapsamı nasıl belirlenir?",
    answer:
      "Ön görüşmede ihtiyaçlarınızı paylaşın. Ardından önerilen hizmet kapsamı ve süreç adımları size iletilir.",
    status: "published",
  },
  {
    id: "danismanlik-sureci",
    question: "Danışmanlık talebimden sonra süreç nasıl ilerler?",
    answer:
      "Formu gönderin, talebiniz ekibimize ulaşır. Ekibimiz e-posta ile ön görüşme planlar ve ihtiyacınıza uygun hizmetleri belirler.",
    status: "published",
  },
  {
    id: "ucretlendirme",
    question: "Hizmet ücretleri nasıl belirlenir?",
    answer:
      "Ücretler hizmet kapsamına, eyalet veya ülkeye ve süreklilik gerektiren hizmetlere göre belirlenir. Resmi kurum harçları teklifte ayrı kalem olarak gösterilir.",
    status: "published",
  },
  {
    id: "e-ticaret-sirket",
    question: "Amazon'da satış yapmak için ABD'de şirket kurmam gerekir mi?",
    answer:
      "Amazon farklı ülkelerden satıcı kabul eder. Bir ABD şirketi ödeme altyapısı, vergi düzeni ve marka kayıtlarında kolaylık sağlayabilir. Kararı satış hedeflerinize göre verin.",
    status: "published",
  },
  {
    id: "sales-tax",
    question: "ABD'de sales tax yükümlülüğü ne zaman doğar?",
    answer:
      "Yükümlülük eyalet kurallarına, satış hacmine ve satış kanallarına göre doğar. Birçok eyalette pazaryerleri vergiyi satıcı adına tahsil eder.",
    status: "published",
  },
  {
    id: "amazon-hesap",
    question: "Amazon hesap açılışı ve hesap sorunlarında destek alabilir miyim?",
    answer:
      "Evet. Satıcı hesabı açılışında ve hesap askıya alma durumlarında danışmanlık alın. Hesap onayları ve itiraz sonuçları Amazon'un kararına bağlıdır.",
    status: "published",
  },
  {
    id: "grup-ici-islemler",
    question: "Türkiye'deki şirketimle yurt dışı şirketim arasındaki işlemler nasıl kaydedilir?",
    answer:
      "Grup içi ürün, hizmet ve finansman işlemleri sözleşme ve faturayla belgelenir, iki şirketin kayıtlarında tutarlı yer alır. Türkiye tarafı için mali müşavirinizle koordinasyon kurun.",
    status: "published",
  },
  {
    id: "mevcut-sirket-devralma",
    question: "Kurulu yabancı şirketimin takibini devredebilir miyim?",
    answer:
      "Evet. Devirde önce resmi kayıtlar, registered agent bilgisi ve geçmiş beyanlar gözden geçirilir. Eksik adımlar takvime eklenir ve düzenli takip başlar.",
    status: "published",
  },
];

export const faqs: FaqItem[] = allFaqs.filter((faq) => faq.status === "published");

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
