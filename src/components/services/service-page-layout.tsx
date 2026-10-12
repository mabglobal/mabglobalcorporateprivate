import { ExternalLink } from "lucide-react";
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
import { ButtonLink } from "@/components/ui/button-link";
import { BulletList, TitledCheckList } from "@/components/ui/check-list";
import { SectionHeading } from "@/components/ui/section-heading";
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
import { ServiceCard } from "./service-card";

/** Shared template for every service page. Content comes from the registry. */
export function ServicePageLayout({ slug }: { slug: ServiceSlug }) {
  const service = getService(slug);
  const path = routes.service(service.slug);
  const faqs = getFaqs(service.faqIds);
  const relatedServices = getServices(service.relatedServices);
  const breadcrumb: BreadcrumbTrailItem[] = [
    { name: "Ana Sayfa", path: routes.home },
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
        description={service.intro[0]}
        actions={
          <>
            <ButtonLink href={primaryCta.href} variant="accent">
              {primaryCta.label}
            </ButtonLink>
            <ButtonLink href="#hizmet-kapsami" variant="outline">
              Kapsamı İnceleyin
            </ButtonLink>
          </>
        }
        aside={
          <div className="frame rounded-card p-7">
            <p className="text-caption font-medium text-slate">Bu hizmet nedir</p>
            <p className="mt-3 text-label text-ink">{service.definition}</p>
            {service.externalReference ? (
              <a
                href={service.externalReference.href}
                rel="noopener noreferrer"
                className="mt-4 inline-flex min-h-11 items-center gap-2 text-label font-medium text-navy underline-offset-4 hover:underline"
              >
                {service.externalReference.label}
                <ExternalLink aria-hidden="true" className="size-4 text-accent-strong" />
              </a>
            ) : null}
          </div>
        }
      />

      <section aria-labelledby="audience-title" className="section-y bg-white">
        <div className="container-page">
          <SectionHeading id="audience-title" tag="Hedef kitle" title="Kimler için" description={service.intro[1]} />
          <ul className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {service.audience.map((item) => (
              <li key={item.title} className="frame rounded-card p-7">
                <h3 className="text-title text-navy">{item.title}</h3>
                <p className="mt-2 text-label text-slate">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="hizmet-kapsami" aria-labelledby="scope-title" className="scroll-mt-6 bg-white pb-20 md:pb-28 lg:pb-34">
        <div className="container-page">
          <SectionHeading id="scope-title" tag="Kapsam" title="Hizmet kapsamı" />
          <div className="mt-14">
            <TitledCheckList items={service.scope} />
          </div>
        </div>
      </section>

      <ProcessSection id="process-title" tag="Süreç" title="Süreç nasıl işler" steps={service.process} padding="bottom" />

      <section aria-labelledby="considerations-title" className="bg-white pb-20 md:pb-28 lg:pb-34">
        <div className="container-page grid gap-4 lg:grid-cols-2">
          <div className="frame rounded-card p-7 md:p-8">
            <h2 id="considerations-title" className="text-title text-navy">
              Dikkat edilmesi gerekenler
            </h2>
            <div className="mt-6">
              <BulletList items={service.considerations} />
            </div>
          </div>
          {service.documents ? (
            <div className="frame rounded-card p-7 md:p-8">
              <h2 className="text-title text-navy">Gerekebilecek belgeler</h2>
              <div className="mt-6">
                <BulletList items={service.documents} />
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <section aria-labelledby="related-title" className="bg-white pb-20 md:pb-28 lg:pb-34">
        <div className="container-page">
          <SectionHeading id="related-title" tag="Diğer hizmetler" title="İlgili hizmetler" />
          <ul className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {relatedServices.slice(0, 3).map((related) => (
              <li key={related.slug}>
                <ServiceCard service={related} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FaqSection items={faqs} padding="bottom" />
      <ContactBand />
    </>
  );
}
