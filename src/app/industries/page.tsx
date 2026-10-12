import { routes } from "@/config/routes";
import { primaryCta } from "@/content/navigation";
import { staticPages } from "@/content/pages";
import { sectors } from "@/content/sectors";
import { JsonLd } from "@/components/seo/json-ld";
import { ContactBand } from "@/components/sections/contact-band";
import { PageHero } from "@/components/sections/page-hero";
import { SectorCard } from "@/components/sectors/sector-card";
import { ButtonLink } from "@/components/ui/button-link";
import { buildStaticPageMetadata } from "@/lib/seo/metadata";
import {
  breadcrumbNode,
  graph,
  organizationNode,
  webPageNode,
  type BreadcrumbTrailItem,
} from "@/lib/seo/structured-data";

const page = staticPages.sectors;

export const metadata = buildStaticPageMetadata(page);

const breadcrumb: BreadcrumbTrailItem[] = [
  { name: "Home", path: routes.home },
  { name: page.title, path: page.path },
];

export default function SectorsPage() {
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
        title="Industries"
        description="Choose your business model and plan formation and tax around your needs."
        actions={
          <ButtonLink href={primaryCta.href} variant="light" icon="arrow-right">
            {primaryCta.label}
          </ButtonLink>
        }
      />
      <section aria-label="Industry list" className="section-y bg-white">
        <div className="container-page">
          <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector) => (
              <li key={sector.slug}>
                <SectorCard sector={sector} headingLevel="h2" />
              </li>
            ))}
          </ul>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
