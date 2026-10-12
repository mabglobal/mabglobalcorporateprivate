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
        className="inline-flex size-11 items-center justify-center rounded-control border border-line text-navy lg:hidden"
      >
        <Menu aria-hidden="true" className="size-5" strokeWidth={1.8} />
        <span className="sr-only">Menüyü aç</span>
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        onClose={close}
        onClick={(event) => {
          if (event.target === dialogRef.current) close();
        }}
        className="m-0 ml-auto h-dvh max-h-dvh w-full max-w-md bg-white p-0 text-ink backdrop:bg-navy-deep/60 open:flex open:flex-col"
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <p id={titleId} className="text-label font-medium text-slate">
            Menü
          </p>
          <button
            type="button"
            onClick={close}
            className="inline-flex size-11 items-center justify-center rounded-control border border-line text-navy"
          >
            <X aria-hidden="true" className="size-5" strokeWidth={1.8} />
            <span className="sr-only">Menüyü kapat</span>
          </button>
        </div>

        <nav aria-label="Mobil menü" className="flex-1 overflow-y-auto px-5 py-6">
          <Suspense fallback={<PrimaryLinks items={items} onNavigate={close} />}>
            <PrimaryLinksWithActiveState items={items} onNavigate={close} />
          </Suspense>

          {groups.map((group) => (
            <div key={group.title} className="mt-8">
              <p className="text-caption font-medium text-slate">{group.title}</p>
              <ul className="mt-3 grid gap-1">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={close}
                      className="flex min-h-11 items-center text-label text-navy"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="border-t border-line px-5 py-5">
          <Link
            href={cta.href}
            onClick={close}
            className="flex min-h-12 items-center justify-center rounded-control bg-accent px-5 text-label font-medium text-navy-deep"
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
    <ul className="flex flex-col">
      {items.map((item) => {
        const active = pathname ? isActivePath(pathname, item.href) : false;
        return (
          <li key={item.href} className="border-b border-line">
            <Link
              href={item.href}
              onClick={onNavigate}
              aria-current={active ? "page" : undefined}
              className={cn(
                "flex min-h-14 items-center justify-between text-title",
                active ? "text-navy" : "text-ink",
              )}
            >
              {item.label}
              {active ? (
                <span aria-hidden="true" className="size-2 rounded-[1px] bg-accent" />
              ) : null}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
