import { homeContent } from "@/content/home";
import { Icon } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";

export function WhySection() {
  const { why } = homeContent;
  return (
    <section aria-labelledby="why-title" className="section-y bg-white">
      <div className="container-page">
        <SectionHeading id="why-title" icon="compass" title={why.title} description={why.description} />
        <ul className="mt-14 grid gap-10 md:grid-cols-3">
          {why.items.map((item) => (
            <li key={item.title}>
              <Icon name={item.icon} className="size-6 text-accent-strong" />
              <h3 className="mt-5 text-title text-navy">{item.title}</h3>
              <p className="mt-2 text-label text-slate">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
