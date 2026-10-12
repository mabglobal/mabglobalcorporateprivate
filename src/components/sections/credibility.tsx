import { homeContent } from "@/content/home";
import { SectionHeading } from "@/components/ui/section-heading";

export function Credibility() {
  const { credibility } = homeContent;
  return (
    <section aria-labelledby="credibility-title" className="section-y bg-white">
      <div className="container-page">
        <SectionHeading
          id="credibility-title"
          eyebrow={credibility.eyebrow}
          title={credibility.title}
          description={credibility.description}
        />
        <dl className="mt-16 border-t border-line md:mt-20">
          {credibility.facts.map((fact) => (
            <div
              key={fact.value}
              className="grid gap-4 border-b border-line py-10 md:grid-cols-12 md:items-center md:gap-10 md:py-12"
            >
              <dt className="md:col-span-5">
                <span className="block text-[clamp(3.5rem,2.6rem+3.6vw,6rem)] font-[350] leading-none tracking-[-0.04em] text-navy">
                  {fact.value}
                </span>
              </dt>
              <dd className="md:col-span-6 md:col-start-7">
                <p className="text-title text-navy">{fact.title}</p>
                <p className="mt-3 text-body text-slate">{fact.description}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
