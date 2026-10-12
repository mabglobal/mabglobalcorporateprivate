import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utilities/cn";

export interface Tile {
  href: string;
  title: string;
  description: string;
}

interface TileBandProps {
  id: string;
  title: string;
  description?: string;
  tiles: readonly Tile[];
  /** Navy band as on the homepage, or white under a navy page hero. */
  tone?: "dark" | "light";
  columns?: 3 | 4;
  /** Heading level of the tile titles. */
  tileHeading?: "h2" | "h3";
  sectionId?: string;
}

/**
 * Centered large heading over a grid of linked tiles, following the dark
 * content band of behringeb5.com. The dark tone carries white only; the
 * light tone uses framed white tiles. Each tile is clickable through its
 * title link, so the link name stays the title alone.
 */
export function TileBand({
  id,
  title,
  description,
  tiles,
  tone = "dark",
  columns = 4,
  tileHeading: TileHeading = "h3",
  sectionId,
}: TileBandProps) {
  const dark = tone === "dark";
  return (
    <section
      id={sectionId}
      aria-labelledby={id}
      className={cn("scroll-mt-6 py-20 md:py-28", dark ? "on-dark bg-navy-deep" : "bg-white")}
    >
      <div className="container-page">
        <div className="mx-auto max-w-4xl text-center">
          <h2 id={id} className={cn("text-heading", dark ? "text-white" : "text-navy")}>
            {title}
          </h2>
          {description ? (
            <p
              data-single-line=""
              className={cn("mt-5 text-body md:text-lead", dark ? "text-white" : "text-navy")}
            >
              {description}
            </p>
          ) : null}
        </div>
        <ul
          className={cn(
            "mt-14 grid gap-4 sm:grid-cols-2",
            columns === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3",
          )}
        >
          {tiles.map((tile) => (
            <li
              key={tile.href + tile.title}
              className={cn(
                "group relative flex min-h-56 flex-col justify-between gap-8 rounded-panel p-7 transition-colors",
                dark ? "border border-white/15 hover:bg-navy" : "frame hover:border-navy",
              )}
            >
              <div>
                <TileHeading
                  className={cn("text-title font-bold", dark ? "text-white" : "text-navy")}
                >
                  <Link
                    href={tile.href}
                    className={cn(
                      "after:absolute after:inset-0 after:rounded-panel focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-2",
                      dark ? "focus-visible:after:outline-white" : "focus-visible:after:outline-navy",
                    )}
                  >
                    {tile.title}
                  </Link>
                </TileHeading>
                <p className={cn("mt-3 text-label", dark ? "text-white" : "text-navy")}>
                  {tile.description}
                </p>
              </div>
              <span
                aria-hidden="true"
                className={cn(
                  "inline-flex size-10 items-center justify-center rounded-control border transition-colors",
                  dark
                    ? "border-white/40 text-white group-hover:bg-white group-hover:text-navy"
                    : "border-line text-navy group-hover:bg-navy group-hover:text-white",
                )}
              >
                <ArrowRight className="size-4" strokeWidth={1.8} />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
