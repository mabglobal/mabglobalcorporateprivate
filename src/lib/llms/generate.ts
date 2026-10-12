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
    "MAB Global Partners is a corporate services brand based in Istanbul. Its focus markets are the United States and the United Kingdom. Registered agent services run under MAB Registered Agent Inc., a brand within MAB Global Partners. Service pages describe what the company offers. Insights guides contain general information based on official sources. The content is no substitute for personal legal or tax advice.",
    "",
    `Contact email ${contactConfig.email}. Office address ${contactConfig.address.full}.`,
    "",
    "## Company",
    "",
    link("Home", routes.home, staticPages.home.description),
    link("About Us", routes.about, staticPages.about.description),
    link("Contact", routes.contact, staticPages.contact.description),
    "",
    "## Services",
    "",
    link("Services", routes.services, staticPages.services.description),
    ...services.map((service) =>
      link(service.title, routes.service(service.slug), service.summary),
    ),
    "",
    "## Industries",
    "",
    link("Industries", routes.sectors, staticPages.sectors.description),
    ...sectors.map((sector) =>
      link(sector.title, routes.sector(sector.slug), sector.summary),
    ),
    "",
    "## Insights",
    "",
    link("Insights", routes.knowledge, staticPages.knowledge.description),
    ...articles.map((article) =>
      link(article.title, routes.article(article.slug), article.summary),
    ),
    "",
    "## Optional",
    "",
    link(
      "Full text summary",
      "/llms-full.txt",
      "Plain text version of the service and industry pages.",
    ),
    link("Legal Notice", routes.legalNotice, staticPages.legalNotice.description),
    link("Privacy Policy", routes.privacy, staticPages.privacy.description),
    link("KVKK Privacy Notice", routes.kvkk, staticPages.kvkk.description),
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
    "This file is a plain text version of the published service and industry content on the website. It is generated automatically from the site content source. The canonical address of each section appears below its heading.",
    "",
    "## Company",
    "",
    ...aboutContent.introduction.paragraphs,
    "",
    `Founder ${aboutContent.founder.name}.`,
    `Contact email ${contactConfig.email}.`,
    `Office address ${contactConfig.address.full}.`,
    `Canonical address ${absoluteUrl(routes.about)}`,
    "",
    "## Services",
    "",
  ];

  for (const service of services) {
    lines.push(
      `## ${service.title}`,
      "",
      `Canonical address ${absoluteUrl(routes.service(service.slug))}`,
      `Coverage ${jurisdictionLabels[service.jurisdiction]}`,
      "",
      service.definition,
      "",
      ...service.intro.flatMap((paragraph) => [paragraph, ""]),
      ...section(
        "Who It Is For",
        bullets(service.audience.map((a) => `${a.title}. ${a.description}`)),
      ),
      ...section(
        "Service Scope",
        bullets(service.scope.map((s) => `${s.title}. ${s.description}`)),
      ),
      ...section(
        "Process",
        service.process.map((p, i) => `${i + 1}. ${p.title}. ${p.description}`),
      ),
      ...(service.documents
        ? section("Documents You May Need", bullets(service.documents))
        : []),
      ...section("Points to Consider", bullets(service.considerations)),
      ...section(
        "Frequently Asked Questions",
        getFaqs(service.faqIds).flatMap((faq) => [
          `Question. ${faq.question}`,
          `Answer. ${faq.answer}`,
          "",
        ]),
      ),
    );
  }

  lines.push("## Industries", "");
  for (const sector of sectors) {
    lines.push(
      `## ${sector.title}`,
      "",
      `Canonical address ${absoluteUrl(routes.sector(sector.slug))}`,
      "",
      ...sector.intro.flatMap((paragraph) => [paragraph, ""]),
      ...section("Who It Is For", bullets(sector.examples)),
      ...section(
        "Key Needs",
        bullets(sector.needs.map((n) => `${n.title}. ${n.description}`)),
      ),
      ...section(
        "Related Services",
        bullets(
          sector.services.map(
            (slug) => `${absoluteUrl(routes.service(slug))}`,
          ),
        ),
      ),
      ...section("Operational Points", bullets(sector.considerations)),
    );
  }

  lines.push("## Insights Guides", "");
  for (const article of articles) {
    lines.push(
      link(
        article.title,
        routes.article(article.slug),
        `${articleCategoryLabels[article.category]}. Updated ${article.updatedAt}.`,
      ),
    );
  }
  lines.push("");

  return lines.join("\n");
}
