import { Plus } from "lucide-react";
import type { FaqItem } from "@/types/content";

/**
 * Accordion built on native <details>/<summary>: keyboard operable (Enter and
 * Space), announced as expandable by screen readers and functional without
 * JavaScript. Answers stay in the HTML so crawlers can read them.
 */
export function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="grid gap-2">
      {items.map((item) => (
        <details key={item.id} className="frame group rounded-panel px-5 transition-colors open:border-navy">
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-6 py-4 text-body font-medium text-navy marker:content-none [&::-webkit-details-marker]:hidden">
            <span>{item.question}</span>
            <span
              aria-hidden="true"
              className="inline-flex size-7 shrink-0 items-center justify-center rounded-control border border-line text-navy transition-transform duration-200 group-open:rotate-45"
            >
              <Plus className="size-4" strokeWidth={1.8} />
            </span>
          </summary>
          <p className="max-w-3xl pb-5 pr-10 text-label text-navy">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
