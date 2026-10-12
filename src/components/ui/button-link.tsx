import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utilities/cn";

type Variant = "primary" | "secondary" | "outline" | "outline-light";

const variants: Record<Variant, { button: string; arrow: string }> = {
  primary: {
    button: "bg-accent text-navy-deep hover:bg-accent-hover",
    arrow: "bg-navy-deep text-white",
  },
  secondary: {
    button: "bg-navy text-white hover:bg-navy-deep",
    arrow: "bg-white/12 text-white",
  },
  outline: {
    button: "border border-line bg-white text-navy hover:border-navy",
    arrow: "bg-surface text-navy",
  },
  "outline-light": {
    button: "border border-white/30 text-white hover:border-white/60 hover:bg-white/5",
    arrow: "bg-white/10 text-white",
  },
};

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
}

/**
 * Call-to-action link. Rendered as an anchor because every CTA on the site
 * navigates. External links open in the same tab and carry rel attributes.
 */
export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  external = false,
}: ButtonLinkProps) {
  const styles = variants[variant];
  const classes = cn(
    "group inline-flex min-h-12 items-center gap-3 rounded-control py-2 pl-5 pr-2 text-label font-medium transition-colors duration-200",
    styles.button,
    className,
  );
  const content = (
    <>
      <span>{children}</span>
      <span
        aria-hidden="true"
        className={cn(
          "inline-flex size-8 items-center justify-center rounded-[4px] transition-transform duration-200 group-hover:translate-x-0.5",
          styles.arrow,
        )}
      >
        <ArrowUpRight className="size-4" strokeWidth={1.8} />
      </span>
    </>
  );

  if (external) {
    return (
      <a href={href} className={classes} rel="noopener noreferrer">
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
