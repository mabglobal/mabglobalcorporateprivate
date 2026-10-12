import { homeContent } from "@/content/home";
import { IconTile } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";

export function WhySection() {
  const { why } = homeContent;
  return (
    <section aria-labelledby="why-title" className="section-y bg-surface">
      <div className="container-page">
        <SectionHeading
          id="why-title"
          eyebrow={why.eyebrow}
          title={why.title}
          description={why.description}
        />
        <ul className="mt-16 grid gap-5 md:mt-20 md:grid-cols-2 xl:grid-cols-4">
          {why.items.map((item) => (
            <li
              key={item.title}
              className="flex flex-col rounded-card border border-line bg-white p-8"
            >
              <IconTile name={item.icon} />
              <h3 className="mt-10 text-title text-navy">{item.title}</h3>
              <p className="mt-4 text-body text-slate">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
