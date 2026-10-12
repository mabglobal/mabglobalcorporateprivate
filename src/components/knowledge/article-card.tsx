import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { routes } from "@/config/routes";
import { articleCategoryLabels } from "@/content/articles";
import type { Article } from "@/types/content";
import { formatDate } from "@/lib/utilities/format-date";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="frame group relative flex h-full flex-col rounded-card p-7 transition-colors duration-200 hover:border-navy">
      <p className="text-caption font-medium text-navy">
        {articleCategoryLabels[article.category]}
      </p>
      <h3 className="mt-5 text-title text-navy">
        <Link
          href={routes.article(article.slug)}
          className="after:absolute after:inset-0 after:rounded-card focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-navy"
        >
          {article.title}
        </Link>
      </h3>
      <p className="mt-2 flex-1 text-label text-navy">{article.summary}</p>
      <div className="mt-6 flex items-center justify-between">
        <p className="text-caption text-navy">
          Updated{" "}
          <time dateTime={article.updatedAt}>{formatDate(article.updatedAt)}</time>
        </p>
        <ArrowRight
          aria-hidden="true"
          className="size-5 text-accent-strong transition-transform duration-200 group-hover:translate-x-1"
        />
      </div>
    </article>
  );
}
