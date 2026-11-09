import { SectionHeading } from "@/components/ui/section-heading";
import type { ServiceCatalog as ServiceCatalogData } from "@/types/content";

/** Itemized services of a page, grouped into framed cards. Rows stack on phones. */
export function ServiceCatalog({ catalog }: { catalog: ServiceCatalogData }) {
  return (
    <section
      id="service-items"
      aria-labelledby="service-items-title"
      className="scroll-mt-6 bg-white pb-20 md:pb-28 lg:pb-34"
    >
      <div className="container-page">
        <SectionHeading id="service-items-title" tag="Services" title={catalog.title} description={catalog.description} />
        <div className="mt-14 grid gap-4">
          {catalog.groups.map((group) => (
            <div key={group.title} className="frame rounded-card p-7 md:p-8">
              <h3 className="text-title text-navy">{group.title}</h3>
              <ul className="mt-2 divide-y divide-line">
                {group.items.map((item) => (
                  <li
                    key={item.title}
                    className="grid gap-2 py-5 last:pb-0 md:grid-cols-12 md:items-center md:gap-6"
                  >
                    <div className="md:col-span-8">
                      <h4 className="text-body font-bold text-navy">{item.title}</h4>
                      <p className="mt-1 text-label text-navy">{item.description}</p>
                    </div>
                    <p className="text-label text-navy md:col-span-4 md:text-right">
                      {item.frequency}
                      {item.includes ? <span className="block">Includes {item.includes}</span> : null}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-6 text-label text-navy">{catalog.note}</p>
      </div>
    </section>
  );
}
