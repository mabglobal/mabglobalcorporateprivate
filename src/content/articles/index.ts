import type { Article, ArticleCategory } from "@/types/content";
import { amerikaSirketKurulusuRehberi } from "./amerika-sirket-kurulusu-rehberi";
import { ingiltereLimitedSirketKurulusuRehberi } from "./ingiltere-limited-sirket-kurulusu-rehberi";
import { registeredAgentNedir } from "./registered-agent-nedir";

/** Add new article modules here. Only published entries become routes. */
const allArticles: Article[] = [
  amerikaSirketKurulusuRehberi,
  ingiltereLimitedSirketKurulusuRehberi,
  registeredAgentNedir,
];

export const articles: Article[] = allArticles
  .filter((article) => article.status === "published")
  .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

export function findArticle(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export const articleCategoryLabels: Record<ArticleCategory, string> = {
  "amerika-sirket-kurulusu": "Amerika'da şirket kuruluşu",
  "ingiltere-sirket-kurulusu": "İngiltere'de şirket kuruluşu",
  "uluslararasi-vergi": "Uluslararası vergi süreçleri",
  "muhasebe-ve-uyum": "Muhasebe ve uyum",
  "e-ticaret": "E-ticaret ve pazaryerleri",
  "ihracat-ve-lojistik": "İhracat ve lojistik",
  "serbest-calisanlar": "Serbest çalışanlar",
  "teknoloji-sirketleri": "Teknoloji şirketleri",
};
