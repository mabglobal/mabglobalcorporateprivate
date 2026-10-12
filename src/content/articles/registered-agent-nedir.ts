import { routes } from "@/config/routes";
import type { Article } from "@/types/content";

export const registeredAgentNedir: Article = {
  slug: "registered-agent-nedir",
  title: "Registered Agent Nedir ve Neden Gereklidir?",
  summary:
    "Registered agent'ın görevini, hangi şirketlerin registered agent belirlemesi gerektiğini ve hizmet seçerken dikkate alınabilecek kriterleri açıklıyoruz.",
  category: "muhasebe-ve-uyum",
  author: { type: "organization", name: "MAB Global Partners Editör Ekibi" },
  publishedAt: "2026-10-12",
  updatedAt: "2026-10-12",
  reviewBy: "2027-04-12",
  sections: [
    {
      heading: "Registered agent tanımı",
      paragraphs: [
        "SBA'nın tanımına göre registered agent, şirket adına resmi evrakları ve yasal belgeleri kabul eden kişi veya hizmettir.",
        "Birçok şirket sahibi bu görevi kendisi üstlenmek yerine profesyonel bir registered agent hizmeti kullanır.",
      ],
    },
    {
      heading: "Hangi şirketler registered agent belirlemelidir",
      paragraphs: [
        "SBA'ya göre LLC, corporation, partnership ve kâr amacı gütmeyen kuruluşlar, eyalete kuruluş başvurusu yapmadan önce bir registered agent belirlemelidir.",
      ],
    },
    {
      heading: "Registered agent nerede bulunmalıdır",
      paragraphs: [
        "Registered agent, şirketin kaydedildiği eyalette bulunmalıdır. Bu nedenle ABD dışında yaşayan şirket sahipleri ve şirketin kayıtlı olduğu eyalette fiziki adresi olmayan girişimciler genellikle profesyonel bir hizmetle çalışır.",
        "Şirket kuruluş eyaleti dışındaki bir eyalette faaliyet göstermek için kayıt yaptırdığında o eyalette de bir temsilciye ihtiyaç duyabilir.",
      ],
    },
    {
      heading: "Hizmet seçerken dikkate alınabilecek kriterler",
      paragraphs: [
        "Registered agent seçimi, şirketin resmi yazışmalarının güvenilir şekilde ulaşmasını doğrudan etkiler. Aşağıdaki kriterler karşılaştırma yaparken yol gösterebilir.",
      ],
      list: [
        "Şirketinizin kayıtlı olduğu ve faaliyet gösterdiği eyaletlerin kapsamda olması",
        "Gelen belgelerin size hangi yöntemle ve ne kadar sürede iletildiği",
        "Yıllık rapor ve uyum tarihleri için hatırlatma sunulup sunulmadığı",
        "Şirket türünüzün desteklenmesi",
        "Türkçe iletişim gibi çalışma tercihlerinize uygunluk",
      ],
    },
    {
      heading: "MAB Global Partners yaklaşımı",
      paragraphs: [
        "MAB Global Partners bünyesindeki MAB Registered Agent Inc., 50 eyalet ve Washington D.C. kapsamında tüm şirket türlerine registered agent hizmeti sunar. Hizmet kapsamını registered agent sayfamızda inceleyebilirsiniz.",
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
  ],
  relatedLinks: [
    {
      label: "Registered agent hizmetlerimiz",
      href: routes.service("registered-agent"),
    },
    {
      label: "Amerika'da şirket kuruluşu",
      href: routes.service("amerika-sirket-kurulusu"),
    },
    {
      label: "Amerika'da şirket kuruluşu rehberi",
      href: routes.article("amerika-sirket-kurulusu-rehberi"),
    },
  ],
  seo: {
    title: "Registered Agent Nedir ve Neden Gereklidir?",
    description:
      "Registered agent'ın görevi, hangi şirketlerin registered agent belirlemesi gerektiği ve hizmet seçerken dikkate alınabilecek kriterler.",
  },
  status: "published",
};
