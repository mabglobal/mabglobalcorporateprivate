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
        "inline-flex min-h-11 items-center gap-3",
        tone === "light" ? "text-navy" : "text-white",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "relative inline-flex h-9 items-center rounded-[4px] px-2 text-[0.9375rem] font-[650] tracking-[0.04em]",
          tone === "light" ? "bg-navy text-white" : "bg-white text-navy",
        )}
      >
        MAB
        <span className="absolute -bottom-px left-2 right-2 h-0.5 bg-accent" />
      </span>
      <span className="sr-only">{siteConfig.name} ana sayfa</span>
      <span aria-hidden="true" className="text-[1.0625rem] font-[450] tracking-[-0.01em]">
        Global Partners
      </span>
    </Link>
  );
}
