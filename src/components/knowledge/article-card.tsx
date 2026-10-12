import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { routes } from "@/config/routes";
import { articleCategoryLabels } from "@/content/articles";
import type { Article } from "@/types/content";
import { formatDate } from "@/lib/utilities/format-date";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="group relative flex h-full flex-col rounded-card border border-line bg-white p-8 transition-colors duration-200 hover:border-slate">
      <p className="text-caption font-medium text-slate">
        {articleCategoryLabels[article.category]}
      </p>
      <h2 className="mt-6 text-title text-navy">
        <Link
          href={routes.article(article.slug)}
          className="after:absolute after:inset-0 after:rounded-card focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-accent"
        >
          {article.title}
        </Link>
      </h2>
      <p className="mt-4 flex-1 text-body text-slate">{article.summary}</p>
      <div className="mt-8 flex items-center justify-between border-t border-line pt-6">
        <p className="text-caption text-slate">
          Güncelleme{" "}
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
