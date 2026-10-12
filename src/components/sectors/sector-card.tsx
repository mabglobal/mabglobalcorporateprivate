import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { routes } from "@/config/routes";
import { Icon } from "@/components/ui/icon";
import type { Sector } from "@/types/content";

export function SectorCard({
  sector,
  headingLevel = "h3",
}: {
  sector: Sector;
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;
  return (
    <article className="group relative flex h-full flex-col rounded-card border border-line bg-white p-8 transition-colors duration-200 hover:border-slate">
      <div className="flex items-center justify-between">
        <Icon name={sector.icon} className="size-6 text-accent-strong" />
        <ArrowRight
          aria-hidden="true"
          className="size-5 text-muted transition-transform duration-200 group-hover:translate-x-1 group-hover:text-navy"
        />
      </div>
      <Heading className="mt-10 text-title text-navy">
        <Link
          href={routes.sector(sector.slug)}
          className="after:absolute after:inset-0 after:rounded-card focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-accent"
        >
          {sector.title}
        </Link>
      </Heading>
      <p className="mt-4 flex-1 text-body text-slate">{sector.summary}</p>
      <ul className="mt-8 flex flex-wrap gap-2" aria-label="Örnek işletmeler">
        {sector.examples.slice(0, 3).map((example) => (
          <li
            key={example}
            className="rounded-[4px] bg-surface px-2.5 py-1 text-caption text-slate"
          >
            {example}
          </li>
        ))}
      </ul>
    </article>
  );
}
