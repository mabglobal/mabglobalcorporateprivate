import { homeContent } from "@/content/home";
import { SectionHeading } from "@/components/ui/section-heading";

/** Large values with short explanations on a light grey band, as in the reference. */
export function Facts() {
  const { facts } = homeContent;
  return (
    <section
      aria-labelledby="facts-title"
      className="section-y bg-[linear-gradient(180deg,var(--color-surface)_0%,var(--color-surface-strong)_100%)]"
    >
      <div className="container-page">
        <SectionHeading id="facts-title" icon="file-check" title={facts.title} description={facts.description} />
        <dl className="mt-14 grid gap-10">
          {facts.items.map((fact) => (
            <div key={fact.value} className="grid gap-3 md:grid-cols-12 md:items-center md:gap-10">
              <dt className="md:col-span-6">
                <span className="block text-[clamp(3rem,2.4rem+2.4vw,4.5rem)] font-[350] leading-none tracking-[-0.04em] text-navy">
                  {fact.value}
                </span>
              </dt>
              <dd className="md:col-span-6">
                <p className="text-title text-navy">{fact.title}</p>
                <p className="mt-1 text-label text-slate">{fact.description}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
