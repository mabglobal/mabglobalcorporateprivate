import { Check } from "lucide-react";
import { homeContent } from "@/content/home";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utilities/cn";

/** Two market cards side by side, following the reference pricing layout. */
export function Comparison() {
  const { comparison } = homeContent;
  return (
    <section aria-labelledby="comparison-title" className="section-y bg-white">
      <div className="container-page">
        <SectionHeading
          id="comparison-title"
          icon="compass"
          title={comparison.title}
          description={comparison.description}
        />
        <div className="mt-14 grid gap-4 lg:grid-cols-2">
          {comparison.plans.map((plan) => {
            const dark = plan.tone === "dark";
            return (
              <article
                key={plan.key}
                aria-labelledby={`plan-${plan.key}`}
                className={cn("flex flex-col rounded-card p-6 md:p-8", dark ? "on-dark bg-navy-deep" : "bg-surface")}
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <h3 id={`plan-${plan.key}`} className={cn("text-title", dark ? "text-white" : "text-navy")}>
                      {plan.name}
                    </h3>
                    <p className={cn("mt-1 text-caption", dark ? "text-white/60" : "text-slate")}>{plan.tagline}</p>
                  </div>
                  <p className={cn("whitespace-nowrap text-label font-medium", dark ? "text-white" : "text-navy")}>
                    {plan.label}
                  </p>
                </div>

                <ul className="mt-8 grid flex-1 grid-cols-1 gap-2 sm:grid-cols-2">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className={cn(
                        "flex items-center gap-3 rounded-panel p-4 text-label sm:min-h-20 sm:flex-col sm:items-start sm:justify-between",
                        dark ? "bg-white/6 text-white/90" : "bg-white text-ink",
                      )}
                    >
                      <Check aria-hidden="true" className={cn("size-4", dark ? "text-white" : "text-navy")} strokeWidth={2} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <ButtonLink
                  href={plan.cta.href}
                  variant={dark ? "light" : "dark"}
                  className="mt-6 w-full justify-between"
                >
                  {plan.cta.label}
                </ButtonLink>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
