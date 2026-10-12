import type { TitledText } from "@/types/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utilities/cn";

/**
 * Staggered process boxes: numbered, alternating navy (white text) and
 * framed white boxes, as in the consulting reference.
 */
export function ProcessPanels({ steps }: { steps: readonly TitledText[] }) {
  const columns = steps.length >= 4 ? "md:grid-cols-2 xl:grid-cols-4" : "md:grid-cols-3";
  return (
    <ol className={cn("grid gap-4", columns)}>
      {steps.map((step, index) => {
        const filled = index % 2 === 0;
        return (
          <li
            key={step.title}
            className={cn(
              "flex min-h-[220px] flex-col justify-between gap-8 rounded-card p-6 md:p-7",
              index % 2 === 1 ? "md:mt-14" : "",
              filled ? "on-dark bg-navy" : "frame",
            )}
          >
            <div>
              <span className={cn("text-caption font-medium", filled ? "text-white/80" : "text-slate")}>
                [{index + 1}]
              </span>
              <h3 className={cn("mt-3 text-title", filled ? "text-white" : "text-navy")}>{step.title}</h3>
            </div>
            <p className={cn("text-label", filled ? "text-white/80" : "text-slate")}>{step.description}</p>
          </li>
        );
      })}
    </ol>
  );
}

interface ProcessSectionProps {
  id: string;
  tag?: string;
  title: string;
  description?: string;
  steps: readonly TitledText[];
  /** "bottom" removes top padding when the section follows another white section. */
  padding?: "full" | "bottom";
}

export function ProcessSection({ id, tag, title, description, steps, padding = "full" }: ProcessSectionProps) {
  return (
    <section aria-labelledby={id} className={cn("bg-white", padding === "full" ? "section-y" : "pb-20 md:pb-28 lg:pb-34")}>
      <div className="container-page">
        <SectionHeading id={id} tag={tag} title={title} description={description} />
        <div className="mt-14">
          <ProcessPanels steps={steps} />
        </div>
      </div>
    </section>
  );
}
