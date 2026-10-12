import Image, { type StaticImageData } from "next/image";
import { Check } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utilities/cn";

interface Feature {
  title: string;
  text: string;
}

interface FeaturePanelProps {
  id: string;
  label: string;
  title: string;
  /** Two short feature blocks set side by side under the heading. */
  features: readonly Feature[];
  action?: ReactNode;
  image: StaticImageData;
  imageAlt: string;
  imageClassName?: string;
  /** Framed cards shown under the image, usually FactCards. */
  details?: ReactNode;
}

/**
 * Framed feature panel following the analytics reference: an uppercase label
 * and heading at the top left, two feature columns and a link at the bottom
 * left, an image with framed fact cards on the right.
 */
export function FeaturePanel({
  id,
  label,
  title,
  features,
  action,
  image,
  imageAlt,
  imageClassName,
  details,
}: FeaturePanelProps) {
  return (
    <div className="frame grid gap-10 rounded-card p-6 sm:p-8 lg:grid-cols-12 lg:gap-12 lg:p-12">
      <div className="flex flex-col lg:col-span-6">
        <p className="text-caption font-medium uppercase tracking-[0.14em] text-navy">{label}</p>
        <h2 id={id} className="mt-4 max-w-xl text-heading text-navy">
          {title}
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:mt-auto lg:pt-16">
          {features.map((feature) => (
            <div key={feature.title}>
              <h3 className="text-title text-navy">{feature.title}</h3>
              <p className="mt-3 text-label text-navy">{feature.text}</p>
            </div>
          ))}
        </div>
        {action ? <div className="mt-8">{action}</div> : null}
      </div>
      <div className="grid content-start gap-4 lg:col-span-6">
        <div className="relative aspect-[16/10] overflow-hidden rounded-panel">
          <Image
            src={image}
            alt={imageAlt}
            fill
            placeholder="blur"
            sizes="(min-width: 1024px) 45vw, 100vw"
            className={cn("object-cover", imageClassName)}
          />
        </div>
        {details}
      </div>
    </div>
  );
}

export interface FactRow {
  label: string;
  /** Omitted for a checklist row, which shows a check mark instead. */
  value?: string;
}

/** Framed cards with label and value rows separated by dashed lines. */
export function FactCards({ groups }: { groups: readonly (readonly FactRow[])[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {groups.map((rows) => (
        <dl key={rows.map((row) => row.label).join("|")} className="frame rounded-panel px-5">
          {rows.map((row, index) => (
            <div
              key={row.label}
              className={cn(
                "flex min-h-14 items-center justify-between gap-4 py-3",
                index > 0 ? "border-t border-dashed border-line" : "",
              )}
            >
              <dt className="text-label text-navy">{row.label}</dt>
              <dd className="shrink-0 text-title font-medium text-navy">
                {row.value ?? (
                  <>
                    <Check aria-hidden="true" className="size-4 text-accent-strong" strokeWidth={2.2} />
                    <span className="sr-only">Included</span>
                  </>
                )}
              </dd>
            </div>
          ))}
        </dl>
      ))}
    </div>
  );
}

/** Splits a list into two groups for a pair of fact cards. */
export function splitInTwo<T>(items: readonly T[]): [T[], T[]] {
  const middle = Math.ceil(items.length / 2);
  return [items.slice(0, middle), items.slice(middle)];
}
