"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Suspense, useEffect, useId, useRef, useState } from "react";
import type { NavGroup, NavItem } from "@/types/navigation";
import { cn } from "@/lib/utilities/cn";
import { isActivePath } from "./is-active-path";

interface MobileNavigationProps {
  items: NavItem[];
  groups: NavGroup[];
  cta: NavItem;
}

/**
 * Mobile menu built on the native <dialog> element: showModal() provides focus
 * containment, Escape to close and an inert background without extra code.
 */
export function MobileNavigation({ items, groups, cta }: MobileNavigationProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  const titleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        className="inline-flex size-11 items-center justify-center rounded-control border border-white/30 text-white lg:hidden"
      >
        <Menu aria-hidden="true" className="size-5" strokeWidth={1.8} />
        <span className="sr-only">Open menu</span>
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        onClose={close}
        onClick={(event) => {
          if (event.target === dialogRef.current) close();
        }}
        className="m-0 ml-auto h-dvh max-h-dvh w-full max-w-md bg-white p-0 text-ink [--focus-ring:var(--color-navy)] backdrop:bg-navy-deep/70 open:flex open:flex-col"
      >
        <div className="flex items-center justify-between px-5 py-4">
          <p id={titleId} className="text-label font-medium text-navy">
            Menu
          </p>
          <button
            type="button"
            onClick={close}
            className="inline-flex size-11 items-center justify-center rounded-control border border-line text-navy"
          >
            <X aria-hidden="true" className="size-5" strokeWidth={1.8} />
            <span className="sr-only">Close menu</span>
          </button>
        </div>

        <nav aria-label="Mobile menu" className="flex-1 overflow-y-auto px-5 pb-6">
          <Suspense fallback={<PrimaryLinks items={items} onNavigate={close} />}>
            <PrimaryLinksWithActiveState items={items} onNavigate={close} />
          </Suspense>

          {groups.map((group) => (
            <div key={group.title} className="mt-8">
              <p className="px-4 text-caption font-medium text-navy">{group.title}</p>
              <ul className="mt-2 grid gap-0.5">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={close}
                      className="flex min-h-10 items-center rounded-control px-4 text-label text-navy hover:underline"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="px-5 py-5">
          <Link
            href={cta.href}
            onClick={close}
            data-brand-accent=""
            className="flex min-h-13 items-center justify-center whitespace-nowrap rounded-control bg-accent px-5 text-[0.8125rem] font-bold uppercase tracking-[0.06em] text-white"
          >
            {cta.label}
          </Link>
        </div>
      </dialog>
    </>
  );
}

interface PrimaryLinksProps {
  items: NavItem[];
  onNavigate: () => void;
  pathname?: string | null;
}

function PrimaryLinksWithActiveState(props: PrimaryLinksProps) {
  const pathname = usePathname();
  return <PrimaryLinks {...props} pathname={pathname} />;
}

function PrimaryLinks({ items, onNavigate, pathname }: PrimaryLinksProps) {
  return (
    <ul className="grid gap-1">
      {items.map((item) => {
        const active = pathname ? isActivePath(pathname, item.href) : false;
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={onNavigate}
              aria-current={active ? "page" : undefined}
              className={cn(
                "flex min-h-12 items-center rounded-control border px-4 text-title",
                active ? "border-line text-navy" : "border-transparent text-ink hover:text-navy",
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
