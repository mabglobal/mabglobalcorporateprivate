import { routes } from "@/config/routes";
import { getFaqs } from "@/content/faqs";
import { staticPages } from "@/content/pages";
import { getSector } from "@/content/sectors";
import { getServices } from "@/content/services";
import { JsonLd } from "@/components/seo/json-ld";
import { ClosingCta } from "@/components/sections/closing-cta";
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

const nextSteps = [
  {
    title: "Talebinizi iletin",
    description: "İş modelinizi ve hedeflerinizi iletişim formu üzerinden kısaca paylaşın.",
  },
  {
    title: "Ön görüşme yapalım",
    description: "İhtiyaçlarınızı birlikte değerlendirelim ve uygun yapıyı konuşalım.",
  },
  {
    title: "Planı netleştirelim",
    description: "Önerilen hizmet kapsamını ve süreç adımlarını sizinle paylaşalım.",
  },
];

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
          webPageNode({
            path,
            name: sector.title,
            description: sector.seo.description,
            dateModified: sector.updatedAt,
          }),
          breadcrumbNode(breadcrumb),
          ...(faqs.length > 0 ? [faqNode(faqs, path)] : []),
        ])}
      />

      <PageHero
        breadcrumb={breadcrumb}
        eyebrow="Sektörler"
        title={sector.title}
        description={sector.intro[0]}
        actions={
          <>
            <ButtonLink href={routes.contactForm}>Danışmanlık Talep Et</ButtonLink>
            <ButtonLink href="#ilgili-hizmetler" variant="outline">
              İlgili hizmetler
            </ButtonLink>
          </>
        }
        aside={
          <div className="rounded-card border border-line bg-white p-8">
            <p className="text-caption font-medium text-slate">Kimler için</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {sector.examples.map((example) => (
                <li
                  key={example}
                  className="rounded-[4px] bg-surface px-2.5 py-1.5 text-caption text-navy"
                >
                  {example}
                </li>
              ))}
            </ul>
          </div>
        }
      />

      <section aria-labelledby="needs-title" className="section-y bg-white">
        <div className="container-page">
          <SectionHeading
            id="needs-title"
            eyebrow="Öne çıkan ihtiyaçlar"
            title="Bu iş modelinde öncelikli konular"
            description={sector.intro[1]}
          />
          <ul className="mt-16 grid gap-5 md:grid-cols-2">
            {sector.needs.map((need) => (
              <li key={need.title} className="flex gap-6 rounded-card bg-surface p-8">
                <IconTile name={sector.icon} />
                <div>
                  <h3 className="text-title text-navy">{need.title}</h3>
                  <p className="mt-3 text-body text-slate">{need.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="ilgili-hizmetler"
        aria-labelledby="services-title"
        className="section-y scroll-mt-24 bg-surface"
      >
        <div className="container-page">
          <SectionHeading
            id="services-title"
            eyebrow="İlgili hizmetler"
            title="Bu alanda sunduğumuz hizmetler"
          />
          <ul className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {relevantServices.map((service) => (
              <li key={service.slug}>
                <ServiceCard service={service} tone="white" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="operations-title" className="section-y bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 id="operations-title" className="text-heading text-navy">
              Operasyonel konular
            </h2>
            <p className="mt-5 text-body text-slate">
              Gereklilikler ilgili ülkenin mevzuatına ve işletmenizin durumuna göre değişir.
            </p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <BulletList items={sector.considerations} />
          </div>
        </div>
      </section>

      <section aria-labelledby="next-steps-title" className="section-y bg-surface">
        <div className="container-page">
          <SectionHeading id="next-steps-title" eyebrow="Sonraki adımlar" title="Nasıl başlarız" />
          <ol className="mt-16 grid gap-px overflow-hidden rounded-card border border-line bg-line md:grid-cols-3">
            {nextSteps.map((step, index) => (
              <li key={step.title} className="bg-white p-8">
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

      <FaqSection items={faqs} />
      <ClosingCta />
    </>
  );
}
