import { routes } from "@/config/routes";
import { homeContent } from "@/content/home";
import { sectors } from "@/content/sectors";
import { SectorCard } from "@/components/sectors/sector-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { TextLink } from "@/components/ui/text-link";

export function SectorsGrid() {
  const content = homeContent.sectors;
  return (
    <section aria-labelledby="sectors-title" className="section-y bg-surface">
      <div className="container-page">
        <SectionHeading
          id="sectors-title"
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
          action={<TextLink href={routes.sectors}>{content.allSectorsLabel}</TextLink>}
        />
        <ul className="mt-16 grid gap-5 md:mt-20 md:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector) => (
            <li key={sector.slug}>
              <SectorCard sector={sector} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
