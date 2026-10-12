import { routes } from "@/config/routes";
import { getFaqs } from "@/content/faqs";
import { primaryCta } from "@/content/navigation";
import { staticPages } from "@/content/pages";
import { getSector } from "@/content/sectors";
import { getServices } from "@/content/services";
import { JsonLd } from "@/components/seo/json-ld";
import { FaqSection } from "@/components/sections/faq-section";
import { PageHero } from "@/components/sections/page-hero";
import { ServiceCard } from "@/components/services/service-card";
import { ButtonLink } from "@/components/ui/button-link";
import { BulletList } from "@/components/ui/check-list";
import { IconTile } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";
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
    { name: "Ana Sayfa", path: routes.home },
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
        description={sector.intro[0]}
        actions={
          <ButtonLink href={primaryCta.href} variant="light">
            {primaryCta.label}
          </ButtonLink>
        }
        aside={
          <div className="rounded-card bg-white p-7">
            <p className="text-caption font-medium text-slate">Kimler için</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {sector.examples.map((example) => (
                <li key={example} className="rounded-tile bg-surface px-3 py-1.5 text-caption text-navy">
                  {example}
                </li>
              ))}
            </ul>
          </div>
        }
      />

      <section aria-labelledby="needs-title" className="section-y bg-white">
        <div className="container-page">
          <SectionHeading id="needs-title" icon={sector.icon} title="Öne çıkan ihtiyaçlar" description={sector.intro[1]} />
          <ul className="mt-14 grid gap-4 md:grid-cols-2">
            {sector.needs.map((need) => (
              <li key={need.title} className="flex gap-5 rounded-card bg-surface p-7">
                <IconTile name="file-check" size="sm" />
                <div>
                  <h3 className="text-title text-navy">{need.title}</h3>
                  <p className="mt-2 text-label text-slate">{need.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="services-title" className="bg-white pb-20 md:pb-28 lg:pb-34">
        <div className="container-page">
          <SectionHeading id="services-title" icon="building" title="İlgili hizmetler" />
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
          <div className="rounded-card bg-surface p-7 md:p-10">
            <h2 id="operations-title" className="text-title text-navy">
              Operasyonel konular
            </h2>
            <div className="mt-6 max-w-3xl">
              <BulletList items={sector.considerations} />
            </div>
          </div>
        </div>
      </section>

      <FaqSection items={faqs} padding="bottom" />
    </>
  );
}
