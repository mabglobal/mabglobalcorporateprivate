import type { Article, ArticleCategory } from "@/types/content";
import { ukLimitedCompanyFormationGuide } from "./uk-limited-company-formation-guide";
import { usCompanyFormationGuide } from "./us-company-formation-guide";
import { whatIsARegisteredAgent } from "./what-is-a-registered-agent";

/** Add new article modules here. Only published entries become routes. */
const allArticles: Article[] = [
  usCompanyFormationGuide,
  ukLimitedCompanyFormationGuide,
  whatIsARegisteredAgent,
];

export const articles: Article[] = allArticles
  .filter((article) => article.status === "published")
  .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

export function findArticle(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export const articleCategoryLabels: Record<ArticleCategory, string> = {
  "us-company-formation": "US Company Formation",
  "uk-company-formation": "UK Company Formation",
  "international-tax": "International Tax",
  "accounting-and-compliance": "Accounting and Compliance",
  "e-commerce": "E-Commerce and Marketplaces",
  "export-and-logistics": "Export and Logistics",
  freelancers: "Freelancers",
  "technology-companies": "Technology Companies",
};
