import Link from "next/link";
import { wordmarkArt } from "@/config/logo";
import { routes } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utilities/cn";

/** Horizontal wordmark with tagline: orange MAB, navy text. White backgrounds only. */
export function WordmarkArt({ className }: { className?: string }) {
  const art = wordmarkArt;
  return (
    <svg aria-hidden="true" viewBox={art.viewBox} className={cn("block w-auto", className)}>
      <g transform={art.transform} className="fill-accent">
        {art.accentPaths.map((d, index) => (
          <path key={index} d={d} />
        ))}
      </g>
      <g transform={art.transform} className="fill-navy-deep">
        {art.basePaths.map((d, index) => (
          <path key={index} d={d} />
        ))}
      </g>
      <g transform={art.transform} className="fill-navy">
        {art.detailPaths.map((d, index) => (
          <path key={index} d={d} />
        ))}
      </g>
    </svg>
  );
}

const wordmarkSizes = {
  // Header: leaves room for the menu at every width (320 px phones to 2xl).
  header: "h-[30px] min-[375px]:h-9 sm:h-10 xl:h-11 2xl:h-12",
  footer: "h-9 sm:h-12 md:h-16",
} as const;

/** Links home with the wordmark. */
export function HeaderLogo({ size = "header" }: { size?: keyof typeof wordmarkSizes }) {
  return (
    <Link href={routes.home} className="inline-flex min-h-11 shrink-0 items-center">
      <WordmarkArt className={wordmarkSizes[size]} />
      <span className="sr-only">{siteConfig.name} home</span>
    </Link>
  );
}
