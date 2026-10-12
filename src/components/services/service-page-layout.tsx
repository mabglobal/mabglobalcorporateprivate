import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { routes } from "@/config/routes";
import { getFaqs } from "@/content/faqs";
import { staticPages } from "@/content/pages";
import { getSectors } from "@/content/sectors";
import { getService, getServices, jurisdictionLabels } from "@/content/services";
import { JsonLd } from "@/components/seo/json-ld";
import { ClosingCta } from "@/components/sections/closing-cta";
import { FaqSection } from "@/components/sections/faq-section";
import { PageHero } from "@/components/sections/page-hero";
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
  const relatedSectors = getSectors(service.relatedSectors);
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
          webPageNode({
            path,
            name: service.title,
            description: service.seo.description,
            dateModified: service.updatedAt,
          }),
          breadcrumbNode(breadcrumb),
          serviceNode(service, path),
          ...(faqs.length > 0 ? [faqNode(faqs, path)] : []),
        ])}
      />

      <PageHero
        breadcrumb={breadcrumb}
        eyebrow={jurisdictionLabels[service.jurisdiction]}
        title={service.title}
        description={service.intro[0]}
        actions={
          <>
            <ButtonLink href={routes.contactForm}>Danışmanlık Talep Et</ButtonLink>
            <ButtonLink href="#hizmet-kapsami" variant="outline">
              Hizmet kapsamı
            </ButtonLink>
          </>
        }
        aside={
          <div className="rounded-card border border-line bg-white p-8">
            <p className="text-caption font-medium text-slate">Bu hizmet nedir</p>
            <p className="mt-4 text-body text-ink">{service.definition}</p>
            {service.externalReference ? (
              <a
                href={service.externalReference.href}
                rel="noopener noreferrer"
                className="mt-6 inline-flex min-h-11 items-center gap-2 text-label font-medium text-navy underline-offset-4 hover:underline"
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
          <SectionHeading
            id="audience-title"
            eyebrow="Kimler için"
            title="Bu hizmetten yararlanan işletmeler"
            description={service.intro[1]}
          />
          <ul className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {service.audience.map((item) => (
              <li key={item.title} className="rounded-card bg-surface p-8">
                <h3 className="text-title text-navy">{item.title}</h3>
                <p className="mt-4 text-body text-slate">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="hizmet-kapsami"
        aria-labelledby="scope-title"
        className="section-y scroll-mt-24 bg-surface"
      >
        <div className="container-page">
          <SectionHeading
            id="scope-title"
            eyebrow="Hizmet kapsamı"
            title="Neleri üstleniyoruz"
          />
          <div className="mt-16 rounded-card bg-white p-8 md:p-12">
            <TitledCheckList items={service.scope} />
          </div>
        </div>
      </section>

      <section aria-labelledby="process-title" className="section-y bg-white">
        <div className="container-page">
          <SectionHeading id="process-title" eyebrow="Süreç" title="Nasıl ilerliyoruz" />
          <ol className="mt-16 grid gap-px overflow-hidden rounded-card border border-line bg-line md:grid-cols-2 xl:grid-cols-4">
            {service.process.map((step, index) => (
              <li key={step.title} className="flex flex-col bg-white p-8">
                <span className="text-label font-medium text-accent-strong">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-title text-navy">{step.title}</h3>
                <p className="mt-4 text-body text-slate">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="considerations-title" className="section-y bg-surface">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          {service.documents ? (
            <div className="lg:col-span-5">
              <h2 className="text-title text-navy">Gerekebilecek belgeler</h2>
              <p className="mt-3 text-label text-slate">
                Belge listesi şirket yapısına göre değişebilir.
              </p>
              <div className="mt-8">
                <BulletList items={service.documents} />
              </div>
            </div>
          ) : null}
          <div className={service.documents ? "lg:col-span-6 lg:col-start-7" : "lg:col-span-8"}>
            <h2 id="considerations-title" className="text-title text-navy">
              Dikkat edilmesi gerekenler
            </h2>
            <p className="mt-3 text-label text-slate">
              Gereklilikler ilgili ülkenin mevzuatına ve kişisel durumunuza göre değişir.
            </p>
            <div className="mt-8">
              <BulletList items={service.considerations} />
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="related-title" className="section-y bg-white">
        <div className="container-page">
          <SectionHeading
            id="related-title"
            eyebrow="İlgili hizmetler"
            title="Bu hizmetle birlikte planlananlar"
          />
          <ul className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {relatedServices.slice(0, 3).map((related) => (
              <li key={related.slug}>
                <ServiceCard service={related} />
              </li>
            ))}
          </ul>
          {relatedSectors.length > 0 ? (
            <div className="mt-14 flex flex-col gap-4 border-t border-line pt-10 md:flex-row md:items-center">
              <p className="text-label text-slate md:w-56">Sık çalıştığımız sektörler</p>
              <ul className="flex flex-wrap gap-2">
                {relatedSectors.map((sector) => (
                  <li key={sector.slug}>
                    <Link
                      href={routes.sector(sector.slug)}
                      className="inline-flex min-h-10 items-center rounded-[4px] border border-line px-3 text-label text-navy transition-colors hover:border-navy"
                    >
                      {sector.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </section>

      <FaqSection items={faqs} className="border-t border-line" />
      <ClosingCta />
    </>
  );
}
