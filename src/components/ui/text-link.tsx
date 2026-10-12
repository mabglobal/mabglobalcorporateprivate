import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utilities/cn";

/** Inline navigational link with a trailing arrow. */
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
        "group inline-flex min-h-11 items-center gap-2 text-label font-medium underline-offset-4 hover:underline",
        tone === "light" ? "text-navy" : "text-white",
        className,
      )}
    >
      {children}
      <ArrowRight
        aria-hidden="true"
        strokeWidth={1.8}
        className="size-4 text-accent-strong transition-transform duration-200 group-hover:translate-x-0.5"
      />
    </Link>
  );
}
