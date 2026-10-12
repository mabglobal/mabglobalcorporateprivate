import { routes } from "@/config/routes";
import { articleCategoryLabels, articles } from "@/content/articles";
import { staticPages } from "@/content/pages";
import { ArticleCard } from "@/components/knowledge/article-card";
import { JsonLd } from "@/components/seo/json-ld";
import { ContactBand } from "@/components/sections/contact-band";
import { PageHero } from "@/components/sections/page-hero";
import { buildStaticPageMetadata } from "@/lib/seo/metadata";
import {
  breadcrumbNode,
  graph,
  organizationNode,
  webPageNode,
  type BreadcrumbTrailItem,
} from "@/lib/seo/structured-data";
import type { ArticleCategory } from "@/types/content";

const page = staticPages.knowledge;

export const metadata = buildStaticPageMetadata(page);

const breadcrumb: BreadcrumbTrailItem[] = [
  { name: "Home", path: routes.home },
  { name: page.title, path: page.path },
];

export default function KnowledgeCenterPage() {
  const categories = (Object.keys(articleCategoryLabels) as ArticleCategory[]).filter(
    (category) => articles.some((article) => article.category === category),
  );

  return (
    <>
      <JsonLd
        data={graph([
          organizationNode(),
          webPageNode({
            path: page.path,
            name: page.title,
            description: page.description,
            type: "CollectionPage",
            dateModified: page.updatedAt,
          }),
          breadcrumbNode(breadcrumb),
        ])}
      />
      <PageHero
        breadcrumb={breadcrumb}
        title="Insights"
        description="Read guides on formation and compliance based on official sources."
      />
      <div className="section-y bg-white">
        <div className="container-page grid gap-20">
          {categories.map((category) => (
            <section key={category} aria-labelledby={`category-${category}`}>
              <h2 id={`category-${category}`} className="text-title text-navy">
                {articleCategoryLabels[category]}
              </h2>
              <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {articles
                  .filter((article) => article.category === category)
                  .map((article) => (
                    <li key={article.slug}>
                      <ArticleCard article={article} />
                    </li>
                  ))}
              </ul>
            </section>
          ))}
          <p className="max-w-3xl text-caption text-navy">
            Guides provide general information and are no substitute for personal legal or tax
            advice. Each guide lists its sources and last update date on its page.
          </p>
        </div>
      </div>
      <ContactBand />
    </>
  );
}
