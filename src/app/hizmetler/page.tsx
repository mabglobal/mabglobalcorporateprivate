import { routes } from "@/config/routes";
import { homeContent } from "@/content/home";
import { primaryCta } from "@/content/navigation";
import { staticPages } from "@/content/pages";
import { services } from "@/content/services";
import { JsonLd } from "@/components/seo/json-ld";
import { ContactBand } from "@/components/sections/contact-band";
import { PageHero } from "@/components/sections/page-hero";
import { ProcessSection } from "@/components/sections/process-steps";
import { ServiceCard } from "@/components/services/service-card";
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
  { name: "Ana Sayfa", path: routes.home },
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
        title="Hizmetler"
        description="Amerika ve İngiltere'de şirketinizi kurun, vergi, muhasebe ve uyum süreçlerinizi tek planda yönetin."
        actions={
          <ButtonLink href={primaryCta.href} variant="accent">
            {primaryCta.label}
          </ButtonLink>
        }
      />
      <section aria-label="Hizmet listesi" className="section-y bg-white">
        <div className="container-page">
          <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <li key={service.slug}>
                <ServiceCard service={service} headingLevel="h2" />
              </li>
            ))}
          </ul>
        </div>
      </section>
      <ProcessSection
        id="process-title"
        title={process.title}
        description={process.description}
        steps={process.steps}
        padding="bottom"
      />
      <ContactBand />
    </>
  );
}
