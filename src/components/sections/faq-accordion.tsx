import { Plus } from "lucide-react";
import type { FaqItem } from "@/types/content";

/**
 * Accordion built on native <details>/<summary>: keyboard operable (Enter and
 * Space), announced as expandable by screen readers and functional without
 * JavaScript. Answers stay in the HTML so crawlers can read them.
 */
export function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="border-t border-line">
      {items.map((item) => (
        <details key={item.id} className="group border-b border-line">
          <summary className="flex min-h-16 cursor-pointer list-none items-start justify-between gap-6 py-6 text-[1.125rem] font-medium leading-snug text-navy marker:content-none [&::-webkit-details-marker]:hidden">
            <span>{item.question}</span>
            <span
              aria-hidden="true"
              className="mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-[4px] border border-line text-navy transition-transform duration-200 group-open:rotate-45 group-open:border-accent group-open:text-accent-strong"
            >
              <Plus className="size-4" strokeWidth={1.8} />
            </span>
          </summary>
          <p className="max-w-3xl pb-7 pr-12 text-body text-slate">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
