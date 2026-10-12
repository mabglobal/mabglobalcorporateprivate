import type {
  Article as ArticleSchema,
  BreadcrumbList,
  FAQPage,
  Graph,
  Organization,
  Service as ServiceSchema,
  Thing,
  WebPage,
  WebSite,
} from "schema-dts";
import { contactConfig } from "@/config/contact";
import { siteConfig } from "@/config/site";
import { jurisdictionLabels } from "@/content/services";
import type { Article, FaqItem, Service } from "@/types/content";
import { absoluteUrl } from "./canonical";

/**
 * Centralized JSON-LD generation. Entity facts (name, address, email, founder)
 * come from src/config so structured data, footer, contact page and llms.txt
 * always agree. No ratings, reviews, legal identifiers or phone numbers are
 * emitted because none are verified.
 */

export const organizationId = `${siteConfig.url}/#organization`;
export const websiteId = `${siteConfig.url}/#website`;

export interface BreadcrumbTrailItem {
  name: string;
  path: string;
}

type PageType = "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";

const countryNodes = {
  us: [{ "@type": "Country", name: "United States" }],
  uk: [{ "@type": "Country", name: "United Kingdom" }],
  "us-uk": [
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
  ],
} as const;

export function organizationNode(): Organization {
  return {
    "@type": "Organization",
    "@id": organizationId,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl("/images/brand/mab-global-partners-logo.svg"),
    description: siteConfig.description,
    email: contactConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: contactConfig.address.streetAddress,
      postalCode: contactConfig.address.postalCode,
      addressLocality: contactConfig.address.locality,
      addressRegion: contactConfig.address.region,
      addressCountry: contactConfig.address.countryCode,
    },
    location: {
      "@type": "Place",
      name: `${siteConfig.name} Istanbul office`,
      address: contactConfig.address.full,
      hasMap: contactConfig.mapsUrl,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: contactConfig.email,
      availableLanguage: ["English", "Turkish"],
    },
    founder: { "@type": "Person", name: siteConfig.founderName },
    areaServed: [...countryNodes["us-uk"]],
    knowsAbout: [
      "US company formation",
      "UK company formation",
      "Tax advisory",
      "Accounting",
      "Registered agent",
    ],
    subOrganization: siteConfig.relatedBrands.map((brand) => ({
      "@type": "Organization" as const,
      name: brand.name,
      url: brand.url,
    })),
  };
}

export function websiteNode(): WebSite {
  return {
    "@type": "WebSite",
    "@id": websiteId,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.shortDescription,
    inLanguage: siteConfig.language,
    publisher: { "@id": organizationId },
  };
}

export function webPageNode(input: {
  path: string;
  name: string;
  description: string;
  type?: PageType;
  dateModified?: string;
}): WebPage {
  const url = absoluteUrl(input.path);
  return {
    "@type": input.type ?? "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: input.name,
    description: input.description,
    inLanguage: siteConfig.language,
    isPartOf: { "@id": websiteId },
    about: { "@id": organizationId },
    ...(input.dateModified ? { dateModified: input.dateModified } : {}),
  } as WebPage;
}

export function breadcrumbNode(items: BreadcrumbTrailItem[]): BreadcrumbList {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceNode(service: Service, path: string): ServiceSchema {
  return {
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#service`,
    name: service.title,
    description: service.definition,
    serviceType: service.title,
    url: absoluteUrl(path),
    provider: { "@id": organizationId },
    areaServed: [...countryNodes[service.jurisdiction]],
    availableLanguage: ["Turkish"],
    audience: {
      "@type": "BusinessAudience",
      audienceType: service.audience.map((entry) => entry.title).join(", "),
    },
    category: jurisdictionLabels[service.jurisdiction],
  } as ServiceSchema;
}

export function articleNode(article: Article, path: string): ArticleSchema {
  const url = absoluteUrl(path);
  return {
    "@type": "Article",
    "@id": `${url}#article`,
    headline: article.title,
    description: article.summary,
    url,
    mainEntityOfPage: { "@id": `${url}#webpage` },
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    inLanguage: siteConfig.language,
    author:
      article.author.type === "person"
        ? { "@type": "Person", name: article.author.name }
        : { "@type": "Organization", name: article.author.name },
    publisher: { "@id": organizationId },
    citation: article.sources.map((source) => ({
      "@type": "CreativeWork" as const,
      name: source.title,
      url: source.url,
      publisher: { "@type": "Organization" as const, name: source.publisher },
    })),
  };
}

export function faqNode(items: FaqItem[], path: string): FAQPage {
  return {
    "@type": "FAQPage",
    "@id": `${absoluteUrl(path)}#faq`,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function graph(nodes: Thing[]): Graph {
  return { "@context": "https://schema.org", "@graph": nodes } as Graph;
}
