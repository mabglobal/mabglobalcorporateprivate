import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { routes } from "@/config/routes";
import { IconTile } from "@/components/ui/icon";
import type { Service } from "@/types/content";
import { cn } from "@/lib/utilities/cn";

/** Light grey rounded card; the whole card is clickable through the title link. */
export function ServiceCard({
  service,
  tone = "surface",
  headingLevel = "h3",
}: {
  service: Service;
  tone?: "surface" | "white";
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col rounded-card p-7 transition-colors duration-200",
        tone === "surface" ? "bg-surface hover:bg-surface-strong" : "bg-white hover:bg-surface-strong",
      )}
    >
      <IconTile name={service.icon} size="sm" />
      <Heading className="mt-8 text-title text-navy">
        <Link
          href={routes.service(service.slug)}
          className="after:absolute after:inset-0 after:rounded-card focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-navy"
        >
          {service.shortTitle}
        </Link>
      </Heading>
      <p className="mt-2 flex-1 text-label text-slate">{service.summary}</p>
      <span aria-hidden="true" className="mt-6 inline-flex items-center gap-2 text-label font-medium text-navy">
        İnceleyin
        <ArrowRight className="size-4 text-accent-strong transition-transform duration-200 group-hover:translate-x-1" />
      </span>
    </article>
  );
}
