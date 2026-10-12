import { routes } from "@/config/routes";
import { legalDocuments } from "@/content/legal";
import { staticPages } from "@/content/pages";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import {
  breadcrumbNode,
  graph,
  webPageNode,
  type BreadcrumbTrailItem,
} from "@/lib/seo/structured-data";
import type { LegalDocument } from "@/types/content";
import { formatDate } from "@/lib/utilities/format-date";

export function LegalPageLayout({ documentKey }: { documentKey: LegalDocument["key"] }) {
  const document = legalDocuments[documentKey];
  const page = staticPages[documentKey];
  const breadcrumb: BreadcrumbTrailItem[] = [
    { name: "Ana Sayfa", path: routes.home },
    { name: page.title, path: page.path },
  ];

  return (
    <>
      <JsonLd
        data={graph([
          webPageNode({
            path: page.path,
            name: page.title,
            description: page.description,
            dateModified: page.updatedAt,
          }),
          breadcrumbNode(breadcrumb),
        ])}
      />
      <PageHero breadcrumb={breadcrumb} title={page.title} description={document.intro} />
      <div className="section-y bg-white">
        <div className="container-page">
          <p className="text-caption text-slate">
            Son güncelleme <time dateTime={page.updatedAt}>{formatDate(page.updatedAt)}</time>
          </p>
          <div className="prose-mab mt-2">
            {document.sections.map((section) => (
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
        </div>
      </div>
    </>
  );
}
