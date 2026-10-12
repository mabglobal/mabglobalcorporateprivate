import Link from "next/link";
import { Suspense } from "react";
import {
  mainNavigation,
  primaryCta,
  sectorNavigation,
  serviceNavigation,
} from "@/content/navigation";
import { DesktopNavigation, NavigationList } from "./desktop-navigation";
import { MobileNavigation } from "./mobile-navigation";
import { SiteLogo } from "./site-logo";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white">
      <div className="container-page flex h-20 items-center justify-between gap-6">
        <SiteLogo />

        <nav aria-label="Ana menü" className="hidden lg:block">
          <Suspense fallback={<NavigationList items={mainNavigation} />}>
            <DesktopNavigation items={mainNavigation} />
          </Suspense>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={primaryCta.href}
            className="hidden min-h-11 items-center rounded-control bg-accent px-5 text-label font-medium text-navy-deep transition-colors hover:bg-accent-hover sm:inline-flex"
          >
            {primaryCta.label}
          </Link>
          <MobileNavigation
            items={mainNavigation}
            cta={primaryCta}
            groups={[
              { title: "Hizmetler", items: serviceNavigation },
              { title: "Sektörler", items: sectorNavigation },
            ]}
          />
        </div>
      </div>
    </header>
  );
}
