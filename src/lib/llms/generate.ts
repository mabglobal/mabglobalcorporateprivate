import { contactConfig } from "@/config/contact";
import { routes } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { aboutContent } from "@/content/about";
import { articleCategoryLabels, articles } from "@/content/articles";
import { getFaqs } from "@/content/faqs";
import { staticPages } from "@/content/pages";
import { sectors } from "@/content/sectors";
import { jurisdictionLabels, services } from "@/content/services";
import { absoluteUrl } from "@/lib/seo/canonical";

/**
 * Generates /llms.txt and /llms-full.txt from the same registries that render
 * the website, following the llms.txt proposal (https://llmstxt.org/):
 * an H1, a blockquote summary, optional prose and H2 link lists.
 */

function link(label: string, path: string, note?: string): string {
  return `- [${label}](${absoluteUrl(path)})${note ? `: ${note}` : ""}`;
}

export function generateLlmsTxt(): string {
  const lines: string[] = [
    `# ${siteConfig.name}`,
    "",
    `> ${siteConfig.description}`,
    "",
    "MAB Global Partners Türkçe hizmet veren bir kurumsal hizmetler markasıdır. Odak pazarları Amerika Birleşik Devletleri ve Birleşik Krallık'tır. Registered agent hizmetleri MAB Global Partners bünyesindeki MAB Registered Agent Inc. markasıyla sunulur. Hizmet sayfaları şirketin sunduğu hizmetleri, Bilgi Merkezi rehberleri ise resmi kaynaklara dayanan genel bilgileri içerir. İçerikler kişisel hukuki veya vergisel danışmanlık yerine geçmez.",
    "",
    `İletişim e-postası ${contactConfig.email}. Ofis adresi ${contactConfig.address.full}.`,
    "",
    "## Kurumsal",
    "",
    link("Ana Sayfa", routes.home, staticPages.home.description),
    link("Hakkımızda", routes.about, staticPages.about.description),
    link("İletişim", routes.contact, staticPages.contact.description),
    "",
    "## Hizmetler",
    "",
    link("Hizmetler", routes.services, staticPages.services.description),
    ...services.map((service) =>
      link(service.title, routes.service(service.slug), service.summary),
    ),
    "",
    "## Sektörler",
    "",
    link("Sektörler", routes.sectors, staticPages.sectors.description),
    ...sectors.map((sector) =>
      link(sector.title, routes.sector(sector.slug), sector.summary),
    ),
    "",
    "## Bilgi Merkezi",
    "",
    link("Bilgi Merkezi", routes.knowledge, staticPages.knowledge.description),
    ...articles.map((article) =>
      link(article.title, routes.article(article.slug), article.summary),
    ),
    "",
    "## Optional",
    "",
    link(
      "Tam metin özeti",
      "/llms-full.txt",
      "Hizmet ve sektör sayfalarının sade metin sürümü.",
    ),
    link("Yasal Uyarı", routes.legalNotice, staticPages.legalNotice.description),
    link("Gizlilik Politikası", routes.privacy, staticPages.privacy.description),
    link("KVKK Aydınlatma Metni", routes.kvkk, staticPages.kvkk.description),
    "",
  ];
  return lines.join("\n");
}

function section(title: string, body: string[]): string[] {
  return [`### ${title}`, "", ...body, ""];
}

function bullets(items: readonly string[]): string[] {
  return items.map((item) => `- ${item}`);
}

export function generateLlmsFullTxt(): string {
  const lines: string[] = [
    `# ${siteConfig.name}`,
    "",
    `> ${siteConfig.description}`,
    "",
    "Bu dosya web sitesindeki yayımlanmış hizmet ve sektör içeriklerinin sade metin sürümüdür ve sitenin içerik kaynağından otomatik olarak üretilir. Her bölümün kanonik adresi başlığın altında yer alır.",
    "",
    "## Kurum",
    "",
    ...aboutContent.introduction.paragraphs,
    "",
    `Kurucu ${aboutContent.founder.name}.`,
    `İletişim e-postası ${contactConfig.email}.`,
    `Ofis adresi ${contactConfig.address.full}.`,
    `Kanonik adres ${absoluteUrl(routes.about)}`,
    "",
    "## Hizmetler",
    "",
  ];

  for (const service of services) {
    lines.push(
      `## ${service.title}`,
      "",
      `Kanonik adres ${absoluteUrl(routes.service(service.slug))}`,
      `Kapsadığı ülke ${jurisdictionLabels[service.jurisdiction]}`,
      "",
      service.definition,
      "",
      ...service.intro.flatMap((paragraph) => [paragraph, ""]),
      ...section(
        "Kimler için",
        bullets(service.audience.map((a) => `${a.title}. ${a.description}`)),
      ),
      ...section(
        "Hizmet kapsamı",
        bullets(service.scope.map((s) => `${s.title}. ${s.description}`)),
      ),
      ...section(
        "Süreç",
        service.process.map((p, i) => `${i + 1}. ${p.title}. ${p.description}`),
      ),
      ...(service.documents
        ? section("Gerekebilecek belgeler", bullets(service.documents))
        : []),
      ...section("Dikkat edilmesi gerekenler", bullets(service.considerations)),
      ...section(
        "Sık sorulan sorular",
        getFaqs(service.faqIds).flatMap((faq) => [
          `Soru. ${faq.question}`,
          `Yanıt. ${faq.answer}`,
          "",
        ]),
      ),
    );
  }

  lines.push("## Sektörler", "");
  for (const sector of sectors) {
    lines.push(
      `## ${sector.title}`,
      "",
      `Kanonik adres ${absoluteUrl(routes.sector(sector.slug))}`,
      "",
      ...sector.intro.flatMap((paragraph) => [paragraph, ""]),
      ...section("Kimler için", bullets(sector.examples)),
      ...section(
        "Öne çıkan ihtiyaçlar",
        bullets(sector.needs.map((n) => `${n.title}. ${n.description}`)),
      ),
      ...section(
        "İlgili hizmetler",
        bullets(
          sector.services.map(
            (slug) => `${absoluteUrl(routes.service(slug))}`,
          ),
        ),
      ),
      ...section("Operasyonel konular", bullets(sector.considerations)),
    );
  }

  lines.push("## Bilgi Merkezi rehberleri", "");
  for (const article of articles) {
    lines.push(
      link(
        article.title,
        routes.article(article.slug),
        `${articleCategoryLabels[article.category]}. Güncelleme ${article.updatedAt}.`,
      ),
    );
  }
  lines.push("");

  return lines.join("\n");
}
