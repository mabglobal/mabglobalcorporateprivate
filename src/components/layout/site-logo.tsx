import Link from "next/link";
import { logoArt, wordmarkArt, type LogoVariant } from "@/config/logo";
import { routes } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utilities/cn";

/** Inline MAB logo artwork; inherits the text color. */
export function LogoArt({ variant, className }: { variant: LogoVariant; className?: string }) {
  const art = logoArt[variant];
  return (
    <svg aria-hidden="true" viewBox={art.viewBox} className={cn("block w-auto", className)} fill="currentColor">
      <g transform={art.transform}>
        {art.paths.map((d) => (
          <path key={d.slice(0, 24)} d={d} />
        ))}
      </g>
    </svg>
  );
}

/** Two-color horizontal wordmark: orange MAB, navy GLOBAL PARTNERS. White backgrounds only. */
export function WordmarkArt({ className }: { className?: string }) {
  const art = wordmarkArt;
  return (
    <svg aria-hidden="true" viewBox={art.viewBox} className={cn("block w-auto", className)}>
      <g transform={art.transform} className="fill-accent">
        {art.accentPaths.map((d) => (
          <path key={d.slice(0, 24)} d={d} />
        ))}
      </g>
      <g transform={art.transform} className="fill-navy-deep">
        {art.basePaths.map((d) => (
          <path key={d.slice(0, 24)} d={d} />
        ))}
      </g>
    </svg>
  );
}

/** Links home with the two-color wordmark, sized to leave room for the menu. */
export function HeaderLogo() {
  return (
    <Link href={routes.home} className="inline-flex min-h-11 shrink-0 items-center">
      <WordmarkArt className="h-[14px] min-[375px]:h-4 sm:h-[18px] lg:h-4 xl:h-5 2xl:h-7" />
      <span className="sr-only">{siteConfig.name} home</span>
    </Link>
  );
}

const logoSizes = {
  mark: "h-8 md:h-9",
  header: "h-12 lg:h-16",
  footer: "h-16 md:h-20",
} as const;

/**
 * The MAB logo linking home. Header and footer show the full lockup with the
 * tagline (client decision, 2026-10-12); the mark alone remains available.
 */
export function SiteLogo({
  tone = "light",
  variant = "mark",
  size,
  className,
}: {
  tone?: "light" | "dark";
  variant?: "mark" | "lockup";
  size?: keyof typeof logoSizes;
  className?: string;
}) {
  return (
    <Link
      href={routes.home}
      className={cn(
        "inline-flex min-h-11 items-center",
        tone === "light" ? "text-navy" : "text-white",
        className,
      )}
    >
      <LogoArt variant={variant} className={logoSizes[size ?? (variant === "mark" ? "mark" : "footer")]} />
      <span className="sr-only">{siteConfig.name} home</span>
    </Link>
  );
}
