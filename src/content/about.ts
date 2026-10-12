import type { TitledText } from "@/types/content";

/**
 * About page content. Company background is limited to statements published
 * on the business's own websites (see docs/content-verification.md).
 * Founding year and office network are omitted until confirmed.
 */
export const aboutContent = {
  hero: {
    eyebrow: "Hakkımızda",
    title: "Uluslararası iş süreçlerinde kurumsal bir çözüm ortağı",
    description:
      "MAB Global Partners, uluslararası iş yapan girişimcilere ve şirketlere şirket kuruluşu, vergi, muhasebe ve uyum süreçlerinde destek veren bir kurumsal hizmetler markasıdır.",
  },
  introduction: {
    title: "Kurumsal tanıtım",
    paragraphs: [
      "MAB Global Partners, Mehmet Akif Birkan tarafından Türkiye'de kuruldu. Kuruluşundan bu yana Amerika pazarına açılan girişimcilere ve işletmelere hizmet veriyor.",
      "Zaman içinde hizmet yapımızı şirket kuruluşu, vergi, muhasebe ve iş adresi hizmetlerini kapsayacak şekilde genişlettik. Registered agent hizmetlerimizi MAB Global Partners bünyesindeki MAB Registered Agent Inc. markası üzerinden sunuyoruz.",
      "Bugün Amerika Birleşik Devletleri ve Birleşik Krallık odağında, Türkiye'den yönetilen şirketlerin kuruluş ve uyum süreçlerini İstanbul'daki ofisimizden koordine ediyoruz.",
    ],
  },
  philosophy: {
    title: "İş felsefemiz",
    quote: "Herkesin doğru bilgiye ulaşma hakkı vardır.",
    quoteAttribution: "Mehmet Akif Birkan, Kurucu",
    paragraphs: [
      "Uluslararası şirket süreçleri karmaşık görünebilir. Bu süreçleri açık bir dille anlatmayı ve her kararın gerekçesini paylaşmayı hizmetimizin temel parçası olarak görüyoruz.",
      "Bilgi Merkezi'ndeki rehberlerimizi resmi kaynaklara dayanarak ve bu anlayışla hazırlıyoruz.",
    ],
  },
  focus: {
    title: "Uluslararası odak",
    items: [
      {
        title: "Amerika Birleşik Devletleri",
        description:
          "LLC ve corporation kuruluşu, registered agent, EIN, vergi beyanları, muhasebe ve yıllık uyum süreçleri.",
      },
      {
        title: "Birleşik Krallık",
        description:
          "Limited şirket kuruluşu, Companies House süreçleri, Corporation Tax, yıllık hesaplar ve muhasebe.",
      },
    ] satisfies TitledText[],
  },
  approach: {
    title: "Hizmet yaklaşımımız",
    items: [
      {
        title: "Önce dinliyoruz",
        description:
          "Her iş birliğine iş modelinizi, hedef pazarınızı ve beklentilerinizi anlayarak başlıyoruz.",
      },
      {
        title: "Gerekçeyle öneriyoruz",
        description:
          "Önerdiğimiz yapının nedenlerini ve olası yükümlülüklerini açık bir şekilde paylaşıyoruz.",
      },
      {
        title: "Takvimle ilerliyoruz",
        description:
          "Kuruluş sonrasındaki beyan ve rapor tarihlerini baştan planlıyor ve düzenli olarak takip ediyoruz.",
      },
      {
        title: "Sınırları net çiziyoruz",
        description:
          "Resmi kurumların ve finansal kuruluşların kararlarına bağlı konularda sonuç taahhüdü vermiyoruz.",
      },
    ] satisfies TitledText[],
  },
  founder: {
    title: "Kurucumuz",
    name: "Mehmet Akif Birkan",
    role: "Kurucu",
    paragraphs: [
      "Mehmet Akif Birkan üniversite eğitimini New York'taki City University of New York'ta (CUNY) tamamladı ve bir dönem ABD'de kurumsal şirketlerde görev aldı. Türkiye'ye döndükten sonra çeşitli kurumsal şirketlerde yönetici olarak çalıştı.",
      "Global e-ticaretle 2018 yılında tanışan Birkan, bu alandaki bilgi ve deneyimlerini YouTube kanalı üzerinden ücretsiz olarak paylaşıyor. Kendi şirket kuruluşu sırasında yaşadığı güçlükler, girişimciler için bu süreci kolaylaştıracak bir hizmet yapısı kurma fikrinin çıkış noktası oldu.",
    ],
  },
} as const;
