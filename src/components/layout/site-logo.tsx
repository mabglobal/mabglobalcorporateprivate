import { wordmarkArt } from "@/config/logo";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utilities/cn";
import { HomeLink } from "./home-link";

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

/** Links home with the wordmark and returns to the top of the homepage. */
export function HeaderLogo({ size = "header" }: { size?: keyof typeof wordmarkSizes }) {
  return (
    <HomeLink className="inline-flex min-h-11 shrink-0 items-center">
      <WordmarkArt className={wordmarkSizes[size]} />
      <span className="sr-only">{siteConfig.name} home</span>
    </HomeLink>
  );
}
