import { routes } from "@/config/routes";
import { staticPages } from "@/content/pages";
import { primaryCta } from "@/content/navigation";
import { ButtonLink } from "@/components/ui/button-link";
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

const page = staticPages.knowledge;

export const metadata = buildStaticPageMetadata(page);

const breadcrumb: BreadcrumbTrailItem[] = [
  { name: "Home", path: routes.home },
  { name: page.title, path: page.path },
];

export default function KnowledgeCenterPage() {

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
      <div className="bg-white py-20 md:py-28">
        <p className="container-page text-center text-caption text-navy">
          Guides provide general information and are no substitute for personal legal or tax advice.
          Each guide lists its sources and last update date on its page.
        </p>
      </div>
      <ContactBand />
    </>
  );
}
