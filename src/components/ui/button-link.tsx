import Link from "next/link";
import { ArrowRight, ArrowUpRight, CalendarDays } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utilities/cn";

/**
 * Variants follow the brand pairing rules:
 *  - accent: orange fill, white text. White surfaces only.
 *  - outline: white, thin border, navy text (framed button).
 *  - dark: navy fill, white text.
 *  - light: white fill, navy text. For navy surfaces.
 *  - outline-light: translucent navy with a thin white border. For navy surfaces.
 *  - outline-white: transparent with a solid white border (header button).
 * Labels are uppercase with wide tracking, following behringeb5.com.
 */
type Variant = "accent" | "outline" | "dark" | "light" | "outline-light" | "outline-white";

const variants: Record<Variant, string> = {
  accent: "bg-accent text-white hover:bg-accent-hover",
  outline: "border border-line bg-white text-navy shadow-frame hover:border-navy",
  dark: "bg-navy text-white hover:bg-navy-deep",
  light: "bg-white text-navy hover:bg-white/90",
  "outline-light": "border border-white/25 bg-navy-deep/40 text-white hover:border-white/60",
  "outline-white": "border border-white text-white hover:bg-white hover:text-navy",
};

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: "md" | "sm";
  /** Trailing icon. The hero reference uses a straight arrow. */
  icon?: "arrow-up-right" | "arrow-right" | "calendar" | "none";
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
    "group inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-control font-bold uppercase tracking-[0.06em] transition-colors duration-200",
    size === "md" ? "min-h-13 px-6 text-[0.8125rem]" : "min-h-11 px-5 text-[0.75rem]",
    variants[variant],
    className,
  );
  const Icon = icon === "arrow-right" ? ArrowRight : icon === "calendar" ? CalendarDays : ArrowUpRight;
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
              : icon === "calendar"
                ? ""
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
