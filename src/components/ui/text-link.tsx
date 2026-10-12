import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utilities/cn";

/**
 * Text link with a round framed arrow, following the analytics reference.
 * Orange on white surfaces; white on navy surfaces, where orange never sits.
 */
export function TextLink({
  href,
  children,
  tone = "light",
  className,
}: {
  href: string;
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex min-h-11 items-center gap-3 whitespace-nowrap text-label font-medium",
        tone === "light" ? "text-accent-strong" : "text-white",
        className,
      )}
    >
      {children}
      <span
        aria-hidden="true"
        className={cn(
          "inline-flex size-10 shrink-0 items-center justify-center rounded-full border transition-colors duration-200",
          tone === "light"
            ? "border-accent-strong group-hover:bg-accent-strong group-hover:text-white"
            : "border-white/40 group-hover:bg-white group-hover:text-navy",
        )}
      >
        <ArrowRight strokeWidth={1.8} className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
