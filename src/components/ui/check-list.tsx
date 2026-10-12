import { Check } from "lucide-react";
import type { TitledText } from "@/types/content";

/** Two-column list of titled items with check marks. */
export function TitledCheckList({ items }: { items: TitledText[] }) {
  return (
    <ul className="grid gap-x-10 gap-y-10 md:grid-cols-2">
      {items.map((item) => (
        <li key={item.title} className="flex gap-4">
          <span
            aria-hidden="true"
            className="mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-[4px] bg-navy text-accent"
          >
            <Check className="size-4" strokeWidth={2} />
          </span>
          <div>
            <h3 className="text-[1.125rem] font-medium leading-snug text-navy">
              {item.title}
            </h3>
            <p className="mt-2 text-body text-slate">{item.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

/** Simple bulleted list for plain sentences. */
export function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="grid gap-4">
      {items.map((item) => (
        <li key={item} className="flex gap-4 text-body text-ink">
          <span aria-hidden="true" className="mt-[0.7em] size-1.5 shrink-0 rounded-full bg-accent" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
