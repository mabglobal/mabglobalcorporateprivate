import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utilities/cn";

/**
 * Variants follow the brand pairing rules:
 *  - accent: orange fill, white text. Light surfaces only.
 *  - dark: navy fill, white text. Light surfaces.
 *  - light: white fill, navy text. Navy surfaces.
 *  - outline / outline-light: bordered secondary actions.
 */
type Variant = "accent" | "dark" | "light" | "outline" | "outline-light";

const variants: Record<Variant, { button: string; arrow: string }> = {
  accent: {
    button: "bg-accent text-white hover:bg-accent-hover",
    arrow: "bg-white/20 text-white",
  },
  dark: {
    button: "bg-navy text-white hover:bg-navy-deep",
    arrow: "bg-white/15 text-white",
  },
  light: {
    button: "bg-white text-navy hover:bg-surface",
    arrow: "bg-navy text-white",
  },
  outline: {
    button: "border border-line bg-white text-navy hover:border-slate",
    arrow: "bg-surface text-navy",
  },
  "outline-light": {
    button: "border border-white/25 text-white hover:bg-white/10",
    arrow: "bg-white/10 text-white",
  },
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
  const styles = variants[variant];
  const classes = cn(
    "group inline-flex items-center gap-2.5 whitespace-nowrap rounded-control font-medium transition-colors duration-200",
    size === "md" ? "min-h-12 py-2 pl-5 pr-2 text-label" : "min-h-10 py-1.5 pl-4 pr-1.5 text-label",
    styles.button,
    className,
  );
  const content = (
    <>
      <span>{children}</span>
      <span
        aria-hidden="true"
        className={cn(
          "inline-flex items-center justify-center rounded-tile transition-transform duration-200 group-hover:translate-x-0.5",
          size === "md" ? "size-8" : "size-7",
          styles.arrow,
        )}
      >
        <ArrowUpRight className="size-4" strokeWidth={1.8} />
      </span>
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
