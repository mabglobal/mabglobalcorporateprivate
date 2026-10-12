import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { routes } from "@/config/routes";
import { articles, findArticle } from "@/content/articles";
import { ArticleLayout } from "@/components/knowledge/article-layout";
import { buildMetadata } from "@/lib/seo/metadata";

/** Only published articles are generated; other slugs return 404. */
export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata(
  props: PageProps<"/insights/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const article = findArticle(slug);
  if (!article) return {};
  return buildMetadata({
    title: article.seo.title,
    description: article.seo.description,
    path: routes.article(article.slug),
    type: "article",
    publishedTime: article.publishedAt,
    modifiedTime: article.updatedAt,
  });
}

export default async function ArticlePage(props: PageProps<"/insights/[slug]">) {
  const { slug } = await props.params;
  const article = findArticle(slug);
  if (!article) notFound();
  return <ArticleLayout article={article} />;
}
