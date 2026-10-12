import { routes } from "@/config/routes";
import { staticPages } from "@/content/pages";
import { sectors } from "@/content/sectors";
import { JsonLd } from "@/components/seo/json-ld";
import { ClosingCta } from "@/components/sections/closing-cta";
import { PageHero } from "@/components/sections/page-hero";
import { SectorCard } from "@/components/sectors/sector-card";
import { ButtonLink } from "@/components/ui/button-link";
import { buildStaticPageMetadata } from "@/lib/seo/metadata";
import {
  breadcrumbNode,
  graph,
  organizationNode,
  webPageNode,
  type BreadcrumbTrailItem,
} from "@/lib/seo/structured-data";

const page = staticPages.sectors;

export const metadata = buildStaticPageMetadata(page);

const breadcrumb: BreadcrumbTrailItem[] = [
  { name: "Ana Sayfa", path: routes.home },
  { name: page.title, path: page.path },
];

export default function SectorsPage() {
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
        eyebrow="Sektörler"
        title="Farklı iş modelleri için uluslararası şirket yapıları"
        description="E-ticaretten teknolojiye, serbest çalışmadan kurumsal iştiraklere kadar her iş modelinin kuruluş, vergi ve muhasebe ihtiyacını kendi koşullarıyla ele alıyoruz."
        actions={<ButtonLink href={routes.contactForm}>Danışmanlık Talep Et</ButtonLink>}
      />
      <section aria-label="Sektör listesi" className="section-y bg-white">
        <div className="container-page">
          <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector) => (
              <li key={sector.slug}>
                <SectorCard sector={sector} headingLevel="h2" />
              </li>
            ))}
          </ul>
        </div>
      </section>
      <ClosingCta />
    </>
  );
}
