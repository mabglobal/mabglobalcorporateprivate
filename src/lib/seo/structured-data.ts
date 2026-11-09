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
import { contactConfig, offices } from "@/config/contact";
import { siteConfig } from "@/config/site";
import { jurisdictionLabels } from "@/content/services";
import type { Article, FaqItem, Service } from "@/types/content";
import { absoluteUrl } from "./canonical";

/**
 * Centralized JSON-LD generation. Entity facts (name, address, email, phone)
 * come from src/config so structured data, footer, contact page and llms.txt
 * always agree. No ratings, reviews or legal identifiers are emitted because
 * none are verified.
 */

export const organizationId = `${siteConfig.url}/#organization`;
export const websiteId = `${siteConfig.url}/#website`;

export interface BreadcrumbTrailItem {
  name: string;
  path: string;
}

type PageType = "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";

const unitedStates = { "@type": "Country", name: "United States" } as const;
const unitedKingdom = { "@type": "Country", name: "United Kingdom" } as const;
const europe = { "@type": "Continent", name: "Europe" } as const;

const areaNodes = {
  us: [unitedStates],
  uk: [unitedKingdom],
  europe: [europe],
  "us-uk": [unitedStates, unitedKingdom],
  international: [unitedStates, unitedKingdom, europe],
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
    telephone: contactConfig.phone.e164,
    address: {
      "@type": "PostalAddress",
      streetAddress: contactConfig.address.streetAddress,
      postalCode: contactConfig.address.postalCode,
      addressLocality: contactConfig.address.locality,
      addressRegion: contactConfig.address.region,
      addressCountry: contactConfig.address.countryCode,
    },
    location: offices.map((office) => ({
      "@type": "Place" as const,
      name: `${siteConfig.name} ${office.heading}, ${office.location}`,
      address: {
        "@type": "PostalAddress" as const,
        ...(office.postal.streetAddress ? { streetAddress: office.postal.streetAddress } : {}),
        ...(office.postal.postalCode ? { postalCode: office.postal.postalCode } : {}),
        ...(office.postal.locality ? { addressLocality: office.postal.locality } : {}),
        ...(office.postal.region ? { addressRegion: office.postal.region } : {}),
        addressCountry: office.postal.countryCode,
      },
      ...(office.mapsUrl ? { hasMap: office.mapsUrl } : {}),
    })),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: contactConfig.email,
      telephone: contactConfig.phone.e164,
      availableLanguage: ["English", "Turkish"],
    },
    areaServed: [...areaNodes.international],
    knowsAbout: [
      "US company formation",
      "UK company formation",
      "International bank account opening",
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
    areaServed: [...areaNodes[service.jurisdiction]],
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
