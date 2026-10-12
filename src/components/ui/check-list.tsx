import { Check } from "lucide-react";
import type { TitledText } from "@/types/content";

/** Grid of titled items, each in a framed box with a check mark. */
export function TitledCheckList({ items }: { items: TitledText[] }) {
  return (
    <ul className="grid gap-3 md:grid-cols-2">
      {items.map((item) => (
        <li key={item.title} className="frame flex gap-4 rounded-panel p-5">
          <span
            aria-hidden="true"
            className="mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-chip border border-line text-navy"
          >
            <Check className="size-4" strokeWidth={2} />
          </span>
          <div>
            <h3 className="text-title text-navy">{item.title}</h3>
            <p data-single-line="" className="mt-1 text-label text-navy">
              {item.description}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

/** Simple list for plain sentences. */
export function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="grid gap-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-label text-ink">
          <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-navy" strokeWidth={2} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
