import Link from "next/link";
import { logoArt, type LogoVariant } from "@/config/logo";
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

/**
 * The MAB logo linking home. The header shows the mark; the footer shows the
 * full lockup with the tagline, which is only legible at a larger size.
 */
export function SiteLogo({
  tone = "light",
  variant = "mark",
  className,
}: {
  tone?: "light" | "dark";
  variant?: "mark" | "lockup";
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
      <LogoArt variant={variant} className={variant === "mark" ? "h-8 md:h-9" : "h-16 md:h-20"} />
      <span className="sr-only">{siteConfig.name} home</span>
    </Link>
  );
}
