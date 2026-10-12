import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utilities/cn";

/**
 * Variants follow the brand pairing rules:
 *  - accent: orange fill, white text. White surfaces only.
 *  - outline: white, thin border, navy text (framed button).
 *  - dark: navy fill, white text.
 *  - light / outline-light: for navy surfaces.
 */
type Variant = "accent" | "outline" | "dark" | "light" | "outline-light";

const variants: Record<Variant, string> = {
  accent: "bg-accent text-white hover:bg-accent-hover",
  outline: "border border-line bg-white text-navy shadow-frame hover:border-slate",
  dark: "bg-navy text-white hover:bg-navy-deep",
  light: "bg-white text-navy hover:bg-white/90",
  "outline-light": "border border-white/30 text-white hover:border-white/60",
};

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: "md" | "sm";
  className?: string;
  external?: boolean;
}

export function ButtonLink({
  href,
  children,
  variant = "accent",
  size = "md",
  className,
  external = false,
}: ButtonLinkProps) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-control font-medium transition-colors duration-200",
    size === "md" ? "min-h-12 px-5 text-label" : "min-h-10 px-4 text-label",
    variants[variant],
    className,
  );
  const content = (
    <>
      <span>{children}</span>
      <ArrowUpRight
        aria-hidden="true"
        strokeWidth={1.8}
        className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </>
  );

  const brandAccent = variant === "accent" ? { "data-brand-accent": "" } : {};

  if (external) {
    return (
      <a href={href} className={classes} rel="noopener noreferrer" {...brandAccent}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} {...brandAccent}>
      {content}
    </Link>
  );
}
