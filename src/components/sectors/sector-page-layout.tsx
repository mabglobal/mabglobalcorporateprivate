import heroArchitecture from "@/assets/images/hero-architecture.jpg";
import { routes } from "@/config/routes";
import { getFaqs } from "@/content/faqs";
import { primaryCta } from "@/content/navigation";
import { staticPages } from "@/content/pages";
import { getSector } from "@/content/sectors";
import { getServices } from "@/content/services";
import { JsonLd } from "@/components/seo/json-ld";
import { ContactBand } from "@/components/sections/contact-band";
import { FaqSection } from "@/components/sections/faq-section";
import { PageHero } from "@/components/sections/page-hero";
import { ServiceCard } from "@/components/services/service-card";
import { ButtonLink } from "@/components/ui/button-link";
import { BulletList } from "@/components/ui/check-list";
import { IconTile } from "@/components/ui/icon";
import { FactCards, FeaturePanel, splitInTwo } from "@/components/ui/feature-panel";
import { SectionHeading } from "@/components/ui/section-heading";
import { TextLink } from "@/components/ui/text-link";
import {
  breadcrumbNode,
  faqNode,
  graph,
  organizationNode,
  webPageNode,
  type BreadcrumbTrailItem,
} from "@/lib/seo/structured-data";
import type { SectorSlug } from "@/types/content";

/** Shared template for every sector page. Content comes from the registry. */
export function SectorPageLayout({ slug }: { slug: SectorSlug }) {
  const sector = getSector(slug);
  const path = routes.sector(sector.slug);
  const faqs = getFaqs(sector.faqIds);
  const relevantServices = getServices(sector.services);
  const breadcrumb: BreadcrumbTrailItem[] = [
    { name: "Home", path: routes.home },
    { name: staticPages.sectors.title, path: routes.sectors },
    { name: sector.title, path },
  ];

  return (
    <>
      <JsonLd
        data={graph([
          organizationNode(),
          webPageNode({ path, name: sector.title, description: sector.seo.description, dateModified: sector.updatedAt }),
          breadcrumbNode(breadcrumb),
          ...(faqs.length > 0 ? [faqNode(faqs, path)] : []),
        ])}
      />

      <PageHero
        breadcrumb={breadcrumb}
        title={sector.title}
        description={sector.summary}
        actions={
          <ButtonLink href={primaryCta.href} variant="light" icon="arrow-right">
            {primaryCta.label}
          </ButtonLink>
        }
      />

      <section aria-labelledby="overview-title" className="section-y bg-white">
        <div className="container-page">
          <FeaturePanel
            id="overview-title"
            label={sector.shortTitle}
            title="Industry Overview"
            features={[
              { title: "The Starting Point", text: sector.intro[0] ?? "" },
              { title: "The Plan", text: sector.intro[1] ?? "" },
            ]}
            action={<TextLink href="#related-services">Related Services</TextLink>}
            image={heroArchitecture}
            imageAlt=""
            imageClassName="object-[72%_60%]"
            details={<FactCards groups={splitInTwo(sector.examples.map((example) => ({ label: example })))} />}
          />
        </div>
      </section>

      <section aria-labelledby="needs-title" className="bg-white pb-20 md:pb-28 lg:pb-34">
        <div className="container-page">
          <SectionHeading
            id="needs-title"
            tag="Needs"
            title="Key Needs"
            description="The topics that matter most in this industry."
          />
          <ul className="mt-14 grid gap-4 md:grid-cols-2">
            {sector.needs.map((need) => (
              <li key={need.title} className="flex gap-5 frame rounded-card p-7">
                <IconTile name="file-check" size="sm" />
                <div>
                  <h3 className="text-title text-navy">{need.title}</h3>
                  <p data-single-line="" className="mt-2 text-label text-navy">
                    {need.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="related-services" aria-labelledby="services-title" className="scroll-mt-6 bg-white pb-20 md:pb-28 lg:pb-34">
        <div className="container-page">
          <SectionHeading id="services-title" tag="Services" title="Related Services" />
          <ul className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {relevantServices.map((service) => (
              <li key={service.slug}>
                <ServiceCard service={service} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="operations-title" className="bg-white pb-20 md:pb-28 lg:pb-34">
        <div className="container-page">
          <div className="frame rounded-card p-7 md:p-10">
            <h2 id="operations-title" className="text-title text-navy">
              Operational Points
            </h2>
            <div className="mt-6 max-w-3xl">
              <BulletList items={sector.considerations} />
            </div>
          </div>
        </div>
      </section>

      <FaqSection items={faqs} padding="bottom" />
      <ContactBand />
    </>
  );
}
