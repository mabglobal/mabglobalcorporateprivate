import Link from "next/link";
import { routes } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utilities/cn";

/**
 * Typographic wordmark. No approved logo file exists yet, so the brand is set
 * in type rather than with an invented symbol.
 */
export function SiteLogo({
  tone = "light",
  className,
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <Link
      href={routes.home}
      className={cn(
        "inline-flex min-h-11 items-center gap-2.5 whitespace-nowrap",
        tone === "light" ? "text-navy" : "text-white",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "inline-flex h-8 items-center rounded-tile px-2 text-[0.875rem] font-[650] tracking-[0.04em]",
          tone === "light" ? "bg-navy text-white" : "bg-white text-navy",
        )}
      >
        MAB
      </span>
      <span className="sr-only">{siteConfig.name} home</span>
      <span aria-hidden="true" className="text-[1rem] font-[450] tracking-[-0.01em]">
        Global Partners
      </span>
    </Link>
  );
}
