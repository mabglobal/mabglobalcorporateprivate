import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { routes } from "@/config/routes";
import { IconTile } from "@/components/ui/icon";
import type { Service } from "@/types/content";
import { cn } from "@/lib/utilities/cn";

/** Whole-card link using a stretched pseudo-element on the title link. */
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
        "group relative flex h-full flex-col rounded-card p-8 transition-colors duration-200 md:p-10",
        tone === "surface"
          ? "bg-surface hover:bg-surface-strong"
          : "border border-line bg-white hover:border-slate",
      )}
    >
      <IconTile name={service.icon} />
      <Heading className="mt-12 text-title text-navy">
        <Link
          href={routes.service(service.slug)}
          className="after:absolute after:inset-0 after:rounded-card focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-accent"
        >
          {service.title}
        </Link>
      </Heading>
      <p className="mt-4 flex-1 text-body text-slate">{service.summary}</p>
      <span
        aria-hidden="true"
        className="mt-8 inline-flex items-center gap-2 text-label font-medium text-navy"
      >
        Hizmeti inceleyin
        <ArrowRight className="size-4 text-accent-strong transition-transform duration-200 group-hover:translate-x-1" />
      </span>
    </article>
  );
}
