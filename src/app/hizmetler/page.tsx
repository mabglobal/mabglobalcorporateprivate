import { routes } from "@/config/routes";
import { homeContent } from "@/content/home";
import { staticPages } from "@/content/pages";
import { services } from "@/content/services";
import { JsonLd } from "@/components/seo/json-ld";
import { ClosingCta } from "@/components/sections/closing-cta";
import { PageHero } from "@/components/sections/page-hero";
import { ProcessSteps } from "@/components/sections/process-steps";
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
        eyebrow="Hizmetler"
        title="Uluslararası operasyonunuz için kurumsal hizmetler"
        description="Amerika ve İngiltere'de şirket kuruluşundan vergi, muhasebe ve uyum süreçlerine kadar ihtiyaç duyduğunuz hizmetleri tek bir plan içinde sunuyoruz."
        actions={<ButtonLink href={routes.contactForm}>Danışmanlık Talep Et</ButtonLink>}
      />
      <section aria-label="Hizmet listesi" className="section-y bg-white">
        <div className="container-page">
          <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <li key={service.slug}>
                <ServiceCard service={service} headingLevel="h2" />
              </li>
            ))}
          </ul>
        </div>
      </section>
      <ProcessSteps
        id="process-title"
        eyebrow={process.eyebrow}
        title={process.title}
        description={process.description}
        steps={process.steps}
        className="border-t border-line"
      />
      <ClosingCta />
    </>
  );
}
