import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { BreadcrumbTrailItem } from "@/lib/seo/structured-data";

/**
 * Visible breadcrumb trail. The matching BreadcrumbList JSON-LD is emitted by
 * the page from the same items.
 */
export function Breadcrumb({ items }: { items: BreadcrumbTrailItem[] }) {
  return (
    <nav aria-label="Sayfa konumu">
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-caption text-slate">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={item.path} className="inline-flex items-center gap-1.5">
              {last ? (
                <span aria-current="page" className="text-navy">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link href={item.path} className="inline-flex min-h-8 items-center hover:text-navy hover:underline">
                    {item.name}
                  </Link>
                  <ChevronRight aria-hidden="true" className="size-3.5 text-muted" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
