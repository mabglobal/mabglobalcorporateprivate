import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { routes } from "@/config/routes";
import { articleCategoryLabels } from "@/content/articles";
import { staticPages } from "@/content/pages";
import { JsonLd } from "@/components/seo/json-ld";
import { ClosingCta } from "@/components/sections/closing-cta";
import { PageHero } from "@/components/sections/page-hero";
import { TextLink } from "@/components/ui/text-link";
import {
  articleNode,
  breadcrumbNode,
  graph,
  organizationNode,
  webPageNode,
  type BreadcrumbTrailItem,
} from "@/lib/seo/structured-data";
import type { Article } from "@/types/content";
import { formatDate } from "@/lib/utilities/format-date";

export function ArticleLayout({ article }: { article: Article }) {
  const path = routes.article(article.slug);
  const breadcrumb: BreadcrumbTrailItem[] = [
    { name: "Ana Sayfa", path: routes.home },
    { name: staticPages.knowledge.title, path: routes.knowledge },
    { name: article.title, path },
  ];

  return (
    <>
      <JsonLd
        data={graph([
          organizationNode(),
          webPageNode({
            path,
            name: article.title,
            description: article.seo.description,
            dateModified: article.updatedAt,
          }),
          breadcrumbNode(breadcrumb),
          articleNode(article, path),
        ])}
      />
      <PageHero
        breadcrumb={breadcrumb}
        eyebrow={articleCategoryLabels[article.category]}
        title={article.title}
        description={article.summary}
      />

      <div className="section-y bg-white">
        <div className="container-page grid gap-14 lg:grid-cols-12">
          <aside className="order-2 lg:order-1 lg:col-span-3">
            <dl className="grid gap-6 border-t border-line pt-6 text-label lg:sticky lg:top-28">
              <div>
                <dt className="text-caption text-slate">Hazırlayan</dt>
                <dd className="mt-1 text-navy">{article.author.name}</dd>
              </div>
              <div>
                <dt className="text-caption text-slate">Yayın tarihi</dt>
                <dd className="mt-1 text-navy">
                  <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
                </dd>
              </div>
              <div>
                <dt className="text-caption text-slate">Son güncelleme</dt>
                <dd className="mt-1 text-navy">
                  <time dateTime={article.updatedAt}>{formatDate(article.updatedAt)}</time>
                </dd>
              </div>
            </dl>
          </aside>

          <article className="order-1 lg:order-2 lg:col-span-8 lg:col-start-5">
            <div className="prose-mab">
              {article.sections.map((section) => (
                <section key={section.heading}>
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.list ? (
                    <ul>
                      {section.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </div>

            <section aria-labelledby="sources-title" className="mt-16 rounded-card bg-surface p-8">
              <h2 id="sources-title" className="text-title text-navy">
                Kaynaklar
              </h2>
              <ol className="mt-6 grid gap-4">
                {article.sources.map((source) => (
                  <li key={source.url} className="text-label">
                    <a
                      href={source.url}
                      rel="noopener noreferrer"
                      className="inline-flex items-start gap-2 font-medium text-navy underline-offset-4 hover:underline"
                    >
                      {source.title}
                      <ExternalLink aria-hidden="true" className="mt-0.5 size-3.5 shrink-0 text-accent-strong" />
                    </a>
                    <span className="block text-slate">
                      {source.publisher}, erişim tarihi{" "}
                      <time dateTime={source.accessedAt}>{formatDate(source.accessedAt)}</time>
                    </span>
                  </li>
                ))}
              </ol>
            </section>

            <section aria-labelledby="related-links-title" className="mt-12">
              <h2 id="related-links-title" className="text-title text-navy">
                İlgili sayfalar
              </h2>
              <ul className="mt-4 grid gap-1">
                {article.relatedLinks.map((link) => (
                  <li key={link.href}>
                    <TextLink href={link.href}>{link.label}</TextLink>
                  </li>
                ))}
              </ul>
            </section>

            <p className="mt-12 border-t border-line pt-6 text-caption text-slate">
              Bu içerik genel bilgilendirme amaçlıdır ve kişisel hukuki veya vergisel danışmanlık
              yerine geçmez. Ayrıntılar için{" "}
              <Link href={routes.legalNotice} className="text-navy underline underline-offset-4">
                yasal uyarı
              </Link>{" "}
              sayfasını inceleyebilirsiniz.
            </p>
          </article>
        </div>
      </div>

      <ClosingCta />
    </>
  );
}
