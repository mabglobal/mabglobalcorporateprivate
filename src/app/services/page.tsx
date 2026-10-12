import { routes } from "@/config/routes";
import { homeContent } from "@/content/home";
import { primaryCta } from "@/content/navigation";
import { staticPages } from "@/content/pages";
import { services } from "@/content/services";
import { JsonLd } from "@/components/seo/json-ld";
import { ContactBand } from "@/components/sections/contact-band";
import { PageHero } from "@/components/sections/page-hero";
import { ProcessSection } from "@/components/sections/process-steps";
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

const page = staticPages.services;

export const metadata = buildStaticPageMetadata(page);

const breadcrumb: BreadcrumbTrailItem[] = [
  { name: "Home", path: routes.home },
  { name: page.title, path: page.path },
];

export default function ServicesPage() {
  const { process } = homeContent;
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
        title="Services"
        description="Form your US company and manage tax and compliance in one plan."
        actions={
          <>
          <ButtonLink href={primaryCta.href} variant="light" icon="calendar">
            Schedule a Consultation
          </ButtonLink>
            <ButtonLink href={routes.sectors} variant="outline-white" icon="none">
              View Industries
            </ButtonLink>
          </>
        }
      />
      <TileBand
        id="service-list-title"
        tone="light"
        columns={3}
        title="Explore Our Company Services"
        description="Choose the service you need and plan every step with one team."
        tiles={services.map((service) => ({
          href: routes.service(service.slug),
          title: service.shortTitle,
          description: service.summary,
        }))}
      />
      <ProcessSection
        id="process-title"
        tag={process.tag}
        title={process.title}
        description={process.description}
        steps={process.steps}
        padding="bottom"
      />
      <ContactBand />
    </>
  );
}
