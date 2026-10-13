import Link from "next/link";
import { ArrowRight } from "lucide-react";
import heroArchitecture from "@/assets/images/hero-architecture.jpg";
import { routes } from "@/config/routes";
import { articleCategoryLabels, articles } from "@/content/articles";
import { staticPages } from "@/content/pages";
import { primaryCta } from "@/content/navigation";
import { ButtonLink } from "@/components/ui/button-link";
import { FeaturePanel } from "@/components/ui/feature-panel";
import { JsonLd } from "@/components/seo/json-ld";
import { ContactBand } from "@/components/sections/contact-band";
import { PageHero } from "@/components/sections/page-hero";
import { buildStaticPageMetadata } from "@/lib/seo/metadata";
import { formatDate } from "@/lib/utilities/format-date";
import {
  breadcrumbNode,
  graph,
  organizationNode,
  webPageNode,
  type BreadcrumbTrailItem,
} from "@/lib/seo/structured-data";

const page = staticPages.knowledge;

export const metadata = buildStaticPageMetadata(page);

const breadcrumb: BreadcrumbTrailItem[] = [
  { name: "Home", path: routes.home },
  { name: page.title, path: page.path },
];

export default function KnowledgeCenterPage() {
  const [featured, ...others] = articles;

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
        actions={
          <>
            <ButtonLink href={primaryCta.href} variant="light" icon="calendar">
              Schedule a Consultation
            </ButtonLink>
            <ButtonLink href={routes.services} variant="outline-white" icon="none">
              Explore Our Services
            </ButtonLink>
          </>
        }
      />

      {featured ? (
        <section aria-labelledby="featured-guide-title" className="section-y bg-white">
          <div className="container-page">
            <FeaturePanel
              id="featured-guide-title"
              label={`Featured Guide · ${articleCategoryLabels[featured.category]}`}
              title={featured.title}
              features={[
                { title: "What You Will Learn", text: featured.summary },
                {
                  title: "Based on Official Sources",
                  text: `Written from guidance published by ${[...new Set(featured.sources.map((source) => `the ${source.publisher}`))].join(" and ")}.`,
                },
              ]}
              action={
                <ButtonLink href={routes.article(featured.slug)} icon="arrow-right">
                  Read the Guide
                </ButtonLink>
              }
              image={heroArchitecture}
              imageAlt=""
              imageClassName="object-[72%_60%]"
            />
          </div>
        </section>
      ) : null}

      {others.length > 0 ? (
        <section aria-labelledby="more-guides-title" className="bg-white pb-20 md:pb-28 lg:pb-34">
          <div className="container-page">
            <h2 id="more-guides-title" className="text-heading text-navy">
              More Guides
            </h2>
            <ul className="mt-10 grid gap-3">
              {others.map((article) => (
                <li
                  key={article.slug}
                  className="frame group relative flex flex-col gap-4 rounded-panel px-6 py-6 transition-colors hover:border-navy md:flex-row md:items-center md:justify-between md:px-8"
                >
                  <div>
                    <p className="text-caption font-medium uppercase tracking-[0.14em] text-navy">
                      {articleCategoryLabels[article.category]}
                    </p>
                    <h3 className="mt-2 text-title text-navy">
                      <Link
                        href={routes.article(article.slug)}
                        className="after:absolute after:inset-0 after:rounded-panel focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-navy"
                      >
                        {article.title}
                      </Link>
                    </h3>
                  </div>
                  <div className="flex shrink-0 items-center gap-5">
                    <p className="text-label text-navy">
                      Updated <time dateTime={article.updatedAt}>{formatDate(article.updatedAt)}</time>
                    </p>
                    <span
                      aria-hidden="true"
                      className="inline-flex size-10 items-center justify-center rounded-control border border-line text-navy transition-colors group-hover:bg-navy group-hover:text-white"
                    >
                      <ArrowRight className="size-4" strokeWidth={1.8} />
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <div className="bg-white pb-20 md:pb-28">
        <p className="container-page text-center text-caption text-navy">
          Guides provide general information and are no substitute for personal legal or tax advice.
          Each guide lists its sources and last update date on its page.
        </p>
      </div>
      <ContactBand />
    </>
  );
}
