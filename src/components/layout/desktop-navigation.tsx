"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/types/navigation";
import { cn } from "@/lib/utilities/cn";
import { isActivePath } from "./is-active-path";

export function DesktopNavigation({ items }: { items: NavItem[] }) {
  const pathname = usePathname();
  return <NavigationList items={items} pathname={pathname} />;
}

/** Static rendering used before the pathname is known. */
export function NavigationList({
  items,
  pathname,
}: {
  items: NavItem[];
  pathname?: string | null;
}) {
  return (
    <ul className="flex items-center gap-1">
      {items.map((item) => {
        const active = pathname ? isActivePath(pathname, item.href) : false;
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "inline-flex min-h-10 items-center whitespace-nowrap rounded-chip border px-3 text-label transition-colors",
                active ? "border-line text-navy" : "border-transparent text-slate hover:text-navy",
              )}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
