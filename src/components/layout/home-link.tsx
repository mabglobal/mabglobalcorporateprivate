"use client";

import Link from "next/link";
import type { MouseEvent, ReactNode } from "react";
import { routes } from "@/config/routes";

/**
 * Link to the homepage that always lands at the top. From another page the
 * navigation already starts at the top; on the homepage itself the click
 * scrolls back up, smoothly unless the visitor prefers reduced motion.
 * The pathname is read at click time so the link renders statically.
 */
export function HomeLink({ className, children }: { className?: string; children: ReactNode }) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    if (window.location.pathname !== routes.home) return;
    event.preventDefault();
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    if (window.location.hash) window.history.replaceState(null, "", routes.home);
  }

  return (
    <Link href={routes.home} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
