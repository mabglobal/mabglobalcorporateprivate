import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { BreadcrumbTrailItem } from "@/lib/seo/structured-data";
import { cn } from "@/lib/utilities/cn";

/**
 * Visible breadcrumb trail. The matching BreadcrumbList JSON-LD is emitted by
 * the page from the same items.
 */
export function Breadcrumb({
  items,
  tone = "light",
}: {
  items: BreadcrumbTrailItem[];
  tone?: "light" | "dark";
}) {
  return (
    <nav aria-label="Breadcrumb">
      <ol
        className={cn(
          "flex flex-wrap items-center gap-x-1.5 gap-y-1 text-caption",
          tone === "dark" ? "text-white" : "text-navy",
        )}
      >
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={item.path} className="inline-flex items-center gap-1.5">
              {last ? (
                <span aria-current="page" className={cn("font-medium", tone === "dark" ? "text-white" : "text-navy")}>
                  {item.name}
                </span>
              ) : (
                <>
                  <Link href={item.path} className="inline-flex min-h-8 items-center hover:underline">
                    {item.name}
                  </Link>
                  <ChevronRight aria-hidden="true" className="size-3.5" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
