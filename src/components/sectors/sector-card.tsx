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
    <article className="frame group relative flex h-full flex-col rounded-card p-7 transition-colors duration-200 hover:border-navy">
      <div className="flex items-center justify-between">
        <Icon name={sector.icon} className="size-6 text-accent-strong" />
        <ArrowRight
          aria-hidden="true"
          className="size-5 text-navy transition-transform duration-200 group-hover:translate-x-1"
        />
      </div>
      <Heading className="mt-8 text-title text-navy">
        <Link
          href={routes.sector(sector.slug)}
          className="after:absolute after:inset-0 after:rounded-card focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-navy"
        >
          {sector.shortTitle}
        </Link>
      </Heading>
      <p data-single-line="" className="mt-2 text-label text-navy">
        {sector.summary}
      </p>
    </article>
  );
}
