import type { TitledText } from "@/types/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utilities/cn";

const panelTones = ["bg-navy", "bg-navy-deep", "bg-slate"] as const;

interface ProcessStepsProps {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  steps: readonly TitledText[];
  className?: string;
}

/** Numbered process panels. Used on the homepage and the services index. */
export function ProcessSteps({
  id,
  eyebrow,
  title,
  description,
  steps,
  className,
}: ProcessStepsProps) {
  return (
    <section aria-labelledby={id} className={cn("section-y bg-white", className)}>
      <div className="container-page">
        <SectionHeading id={id} eyebrow={eyebrow} title={title} description={description} />
        <ol className="mt-16 grid overflow-hidden rounded-card md:mt-20 md:grid-cols-3">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className={cn(
                "flex min-h-[300px] flex-col justify-between gap-12 p-8 text-white md:min-h-[360px] md:p-10",
                panelTones[index % panelTones.length],
              )}
            >
              <div>
                <span aria-hidden="true" className="block h-0.5 w-8 bg-accent" />
                <span className="mt-4 block text-label font-medium text-white/80">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-title text-white">{step.title}</h3>
              </div>
              <p className="text-body text-white/80">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
