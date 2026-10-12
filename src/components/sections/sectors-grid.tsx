import { routes } from "@/config/routes";
import { homeContent } from "@/content/home";
import { sectors } from "@/content/sectors";
import { SectorCard } from "@/components/sectors/sector-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { TextLink } from "@/components/ui/text-link";

export function SectorsGrid() {
  const content = homeContent.sectors;
  return (
    <section aria-labelledby="sectors-title" className="bg-white pb-20 md:pb-28 lg:pb-34">
      <div className="container-page">
        <SectionHeading
          id="sectors-title"
          tag={content.tag}
          title={content.title}
          description={content.description}
          action={<TextLink href={routes.sectors}>{content.allSectorsLabel}</TextLink>}
        />
        <ul className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
