import type { IconName, TitledText } from "@/types/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utilities/cn";

const panelTones = ["bg-navy", "bg-navy-deep", "bg-slate"] as const;

/** Adjacent rounded panels with white text, as in the reference "How it works". */
export function ProcessPanels({ steps }: { steps: readonly TitledText[] }) {
  const columns = steps.length >= 4 ? "md:grid-cols-2 xl:grid-cols-4" : "md:grid-cols-3";
  return (
    <ol className={cn("grid gap-3", columns)}>
      {steps.map((step, index) => (
        <li
          key={step.title}
          className={cn(
            "on-dark flex min-h-[240px] flex-col justify-between gap-10 rounded-card p-7 md:min-h-[280px]",
            panelTones[index % panelTones.length],
          )}
        >
          <div>
            <span className="text-caption font-medium text-white/80">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 text-title text-white">{step.title}</h3>
          </div>
          <p className="text-label text-white/80">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}

interface ProcessSectionProps {
  id: string;
  icon?: IconName;
  title: string;
  description?: string;
  steps: readonly TitledText[];
  /** "bottom" removes top padding when the section follows another white section. */
  padding?: "full" | "bottom";
}

export function ProcessSection({ id, icon = "layers", title, description, steps, padding = "full" }: ProcessSectionProps) {
  return (
    <section aria-labelledby={id} className={cn("bg-white", padding === "full" ? "section-y" : "pb-20 md:pb-28 lg:pb-34")}>
      <div className="container-page">
        <SectionHeading id={id} icon={icon} title={title} description={description} />
        <div className="mt-14">
          <ProcessPanels steps={steps} />
        </div>
      </div>
    </section>
  );
}
