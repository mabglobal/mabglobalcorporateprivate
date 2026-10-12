import { routes } from "@/config/routes";
import { primaryCta } from "@/content/navigation";
import { staticPages } from "@/content/pages";
import { sectors } from "@/content/sectors";
import { JsonLd } from "@/components/seo/json-ld";
import { ContactBand } from "@/components/sections/contact-band";
import { PageHero } from "@/components/sections/page-hero";
import { TileBand } from "@/components/sections/tile-band";
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
      <TileBand
        id="industry-list-title"
        tone="light"
        columns={3}
        title="Find Your Industry"
        description="Choose the area closest to your business."
        tiles={sectors.map((sector) => ({
          href: routes.sector(sector.slug),
          title: sector.shortTitle,
          description: sector.summary,
        }))}
      />
      <ContactBand />
    </>
  );
}
