import type { TitledText } from "@/types/content";

/**
 * About page content. Company background is limited to statements published
 * on the business's own websites (see docs/content-verification.md).
 * Founding year and office network are omitted until confirmed.
 */
export const aboutContent = {
  hero: {
    title: "Uluslararası işinizde kurumsal çözüm ortağınız",
    description:
      "MAB Global Partners, uluslararası iş yapan girişimcilere ve şirketlere kuruluş, vergi, muhasebe ve uyum süreçlerinde destek veren kurumsal hizmetler markasıdır.",
  },
  introduction: {
    title: "Kurumsal tanıtım",
    paragraphs: [
      "MAB Global Partners, Mehmet Akif Birkan tarafından Türkiye'de kuruldu ve ilk günden itibaren Amerika pazarına açılan girişimcilere hizmet verdi.",
      "Hizmet yapısı zamanla şirket kuruluşu, vergi, muhasebe ve iş adresi hizmetlerini kapsayacak şekilde genişledi. Registered agent hizmetleri MAB Registered Agent Inc. markasıyla sunulur.",
      "Amerika Birleşik Devletleri ve Birleşik Krallık odağındaki kuruluş ve uyum süreçleri İstanbul ofisinden koordine edilir.",
    ],
  },
  philosophy: {
    title: "İş felsefemiz",
    quote: "Herkesin doğru bilgiye ulaşma hakkı vardır.",
    quoteAttribution: "Mehmet Akif Birkan, Kurucu",
    paragraphs: [
      "Uluslararası şirket süreçlerini açık bir dille öğrenin, her kararın gerekçesini bilin.",
      "Bilgi Merkezi rehberleri resmi kaynaklara dayanır ve bu anlayışla hazırlanır.",
    ],
  },
  focus: {
    title: "Uluslararası odak",
    items: [
      {
        title: "Amerika Birleşik Devletleri",
        description: "LLC ve corporation kuruluşu, registered agent, EIN, vergi beyanları ve yıllık uyum.",
      },
      {
        title: "Birleşik Krallık",
        description: "Limited şirket kuruluşu, Companies House, Corporation Tax ve yıllık hesaplar.",
      },
    ] satisfies TitledText[],
  },
  approach: {
    title: "Hizmet yaklaşımı",
    items: [
      { title: "İhtiyacınızı paylaşın", description: "Her iş birliği iş modelinizin dinlenmesiyle başlar." },
      { title: "Gerekçeyi bilin", description: "Önerilen yapının nedenleri ve yükümlülükleri açıkça paylaşılır." },
      { title: "Takvimle ilerleyin", description: "Beyan ve rapor tarihleri baştan planlanır." },
      { title: "Sınırları bilin", description: "Kurum ve banka kararlarına bağlı konularda sonuç taahhüdü verilmez." },
    ] satisfies TitledText[],
  },
  founder: {
    title: "Kurucumuz",
    name: "Mehmet Akif Birkan",
    role: "Kurucu",
    paragraphs: [
      "Mehmet Akif Birkan üniversite eğitimini New York'taki City University of New York'ta (CUNY) tamamladı ve bir dönem ABD'de kurumsal şirketlerde görev aldı. Türkiye'ye döndükten sonra çeşitli kurumsal şirketlerde yönetici olarak çalıştı.",
      "Global e-ticaretle 2018 yılında tanışan Birkan, bilgi ve deneyimlerini YouTube kanalında ücretsiz olarak paylaşır. Kendi şirket kuruluşunda yaşadığı güçlükler bu hizmet yapısının çıkış noktası oldu.",
    ],
  },
} as const;
