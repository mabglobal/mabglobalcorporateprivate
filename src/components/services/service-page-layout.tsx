import { ExternalLink } from "lucide-react";
import heroArchitecture from "@/assets/images/hero-architecture.jpg";
import { routes } from "@/config/routes";
import { getFaqs } from "@/content/faqs";
import { primaryCta } from "@/content/navigation";
import { staticPages } from "@/content/pages";
import { getService, getServices } from "@/content/services";
import { JsonLd } from "@/components/seo/json-ld";
import { ContactBand } from "@/components/sections/contact-band";
import { FaqSection } from "@/components/sections/faq-section";
import { PageHero } from "@/components/sections/page-hero";
import { ProcessSection } from "@/components/sections/process-steps";
import { TileBand } from "@/components/sections/tile-band";
import { ButtonLink } from "@/components/ui/button-link";
import { BulletList, TitledCheckList } from "@/components/ui/check-list";
import { FactCards, FeaturePanel, splitInTwo } from "@/components/ui/feature-panel";
import { SectionHeading } from "@/components/ui/section-heading";
import { TextLink } from "@/components/ui/text-link";
import {
  breadcrumbNode,
  faqNode,
  graph,
  organizationNode,
  serviceNode,
  webPageNode,
  type BreadcrumbTrailItem,
} from "@/lib/seo/structured-data";
import type { ServiceSlug } from "@/types/content";

/** Shared template for every service page. Content comes from the registry. */
export function ServicePageLayout({ slug }: { slug: ServiceSlug }) {
  const service = getService(slug);
  const path = routes.service(service.slug);
  const faqs = getFaqs(service.faqIds);
  const relatedServices = getServices(service.relatedServices);
  const breadcrumb: BreadcrumbTrailItem[] = [
    { name: "Home", path: routes.home },
    { name: staticPages.services.title, path: routes.services },
    { name: service.title, path },
  ];

  return (
    <>
      <JsonLd
        data={graph([
          organizationNode(),
          webPageNode({ path, name: service.title, description: service.seo.description, dateModified: service.updatedAt }),
          breadcrumbNode(breadcrumb),
          serviceNode(service, path),
          ...(faqs.length > 0 ? [faqNode(faqs, path)] : []),
        ])}
      />

      <PageHero
        breadcrumb={breadcrumb}
        title={service.title}
        description={service.summary}
        actions={
          <>
            <ButtonLink href={primaryCta.href} variant="light" icon="calendar">
              Schedule a Consultation
            </ButtonLink>
            <ButtonLink href="#service-scope" variant="outline-white" icon="none">
              See What Is Included
            </ButtonLink>
          </>
        }
      />

      <section aria-labelledby="overview-title" className="section-y bg-white">
        <div className="container-page">
          <FeaturePanel
            id="overview-title"
            label={service.shortTitle}
            title="Service Overview"
            features={[
              { title: "What It Covers", text: service.definition },
              { title: "How We Help", text: service.intro.join(" ") },
            ]}
            action={
              service.externalReference ? (
                <a
                  href={service.externalReference.href}
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 text-label font-medium text-accent-strong underline-offset-4 hover:underline"
                >
                  {service.externalReference.label}
                  <ExternalLink aria-hidden="true" className="size-4" />
                </a>
              ) : (
                <TextLink href="#related-services">Related Services</TextLink>
              )
            }
            image={heroArchitecture}
            imageAlt=""
            imageClassName="object-[72%_60%]"
            details={<FactCards groups={splitInTwo(service.scope.slice(0, 4).map((item) => ({ label: item.title })))} />}
          />
        </div>
      </section>

      <section aria-labelledby="audience-title" className="bg-white pb-20 md:pb-28 lg:pb-34">
        <div className="container-page">
          <SectionHeading
            id="audience-title"
            tag="Audience"
            title="Who It Is For"
            description="Typical clients for this service."
          />
          <ul className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {service.audience.map((item) => (
              <li key={item.title} className="frame rounded-card p-7">
                <h3 className="text-title text-navy">{item.title}</h3>
                <p data-single-line="" className="mt-2 text-label text-navy">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="service-scope" aria-labelledby="scope-title" className="scroll-mt-6 bg-white pb-20 md:pb-28 lg:pb-34">
        <div className="container-page">
          <SectionHeading
            id="scope-title"
            tag="Scope"
            title="Service Scope"
            description="Everything this service includes."
          />
          <div className="mt-14">
            <TitledCheckList items={service.scope} />
          </div>
        </div>
      </section>

      <ProcessSection id="process-title" tag="Process" title="How the Process Works" steps={service.process} padding="bottom" />

      {service.documents ? (
        <section aria-labelledby="documents-title" className="bg-white pb-20 md:pb-28 lg:pb-34">
          <div className="container-page">
            <div className="frame rounded-card p-7 md:p-8">
              <h2 id="documents-title" className="text-title text-navy">
                Documents You May Need
              </h2>
              <div className="mt-6">
                <BulletList items={service.documents} />
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <TileBand
        id="related-title"
        sectionId="related-services"
        columns={3}
        title="Related Services"
        description="Services that often go together with this one."
        tiles={relatedServices.slice(0, 3).map((related) => ({
          href: routes.service(related.slug),
          title: related.shortTitle,
          description: related.summary,
        }))}
      />
      <div className="h-20 bg-white md:h-28 lg:h-34" aria-hidden="true" />

      <FaqSection items={faqs} padding="bottom" />
      <ContactBand />
    </>
  );
}
