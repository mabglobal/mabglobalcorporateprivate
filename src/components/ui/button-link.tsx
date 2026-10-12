import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utilities/cn";

/**
 * Variants follow the brand pairing rules:
 *  - accent: orange fill, white text. White surfaces only.
 *  - outline: white, thin border, navy text (framed button).
 *  - dark: navy fill, white text.
 *  - light: white fill, navy text. For navy surfaces.
 *  - outline-light: translucent navy with a thin white border. For navy surfaces.
 */
type Variant = "accent" | "outline" | "dark" | "light" | "outline-light";

const variants: Record<Variant, string> = {
  accent: "bg-accent text-white hover:bg-accent-hover",
  outline: "border border-line bg-white text-navy shadow-frame hover:border-navy",
  dark: "bg-navy text-white hover:bg-navy-deep",
  light: "bg-white text-navy hover:bg-white/90",
  "outline-light": "border border-white/25 bg-navy-deep/40 text-white hover:border-white/60",
};

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: "md" | "sm";
  /** Trailing icon. The hero reference uses a straight arrow. */
  icon?: "arrow-up-right" | "arrow-right" | "none";
  className?: string;
  external?: boolean;
}

export function ButtonLink({
  href,
  children,
  variant = "accent",
  size = "md",
  icon = "arrow-up-right",
  className,
  external = false,
}: ButtonLinkProps) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-control font-medium transition-colors duration-200",
    size === "md" ? "min-h-12 px-5 text-label" : "min-h-10 px-4 text-label",
    variants[variant],
    className,
  );
  const Icon = icon === "arrow-right" ? ArrowRight : ArrowUpRight;
  const content = (
    <>
      <span>{children}</span>
      {icon === "none" ? null : (
        <Icon
          aria-hidden="true"
          strokeWidth={1.8}
          className={cn(
            "size-4 transition-transform duration-200",
            icon === "arrow-right"
              ? "group-hover:translate-x-0.5"
              : "group-hover:-translate-y-0.5 group-hover:translate-x-0.5",
          )}
        />
      )}
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
