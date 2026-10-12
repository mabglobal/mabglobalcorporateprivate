"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/types/navigation";
import { isActivePath } from "./is-active-path";

export function DesktopNavigation({ items }: { items: NavItem[] }) {
  const pathname = usePathname();
  return <NavigationList items={items} pathname={pathname} />;
}

const topLink =
  "inline-flex min-h-24 items-center gap-1.5 whitespace-nowrap px-3 text-[0.8125rem] font-bold uppercase tracking-[0.06em] text-white underline-offset-[10px] decoration-2 hover:underline aria-[current=page]:underline xl:px-4";

/**
 * Uppercase menu with dropdowns, following behringeb5.com. Dropdowns open on
 * hover and on keyboard focus (focus-within), so every sub-page is reachable
 * with Tab; each parent link also leads to the section index.
 * Static rendering is used before the pathname is known.
 */
export function NavigationList({
  items,
  pathname,
}: {
  items: NavItem[];
  pathname?: string | null;
}) {
  return (
    <ul className="flex items-center">
      {items.map((item) => {
        const active = pathname ? isActivePath(pathname, item.href) : false;
        if (!item.children?.length) {
          return (
            <li key={item.href}>
              <Link href={item.href} aria-current={active ? "page" : undefined} className={topLink}>
                {item.label}
              </Link>
            </li>
          );
        }
        return (
          <li key={item.href} className="group relative">
            <Link href={item.href} aria-current={active ? "page" : undefined} className={topLink}>
              {item.label}
              <ChevronDown
                aria-hidden="true"
                strokeWidth={2.4}
                className="size-4 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
              />
            </Link>
            <div className="invisible absolute left-0 top-full z-50 min-w-72 translate-y-1 opacity-0 transition duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <ul className="rounded-b-control border border-white/10 bg-navy-deep py-2 shadow-[0_16px_32px_-12px_rgb(10_26_54/0.5)]">
                {item.children.map((child) => (
                  <li key={`${child.href}-${child.label}`}>
                    <Link
                      href={child.href}
                      aria-current={pathname === child.href.split("#")[0] ? "page" : undefined}
                      className="block px-5 py-2.5 text-label text-white hover:bg-white/10 focus-visible:bg-white/10 aria-[current=page]:font-bold"
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
