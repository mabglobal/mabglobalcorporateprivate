import { Suspense } from "react";
import {
  headerCta,
  mainNavigation,
  primaryCta,
  sectorNavigation,
  serviceNavigation,
} from "@/content/navigation";
import { ButtonLink } from "@/components/ui/button-link";
import { DesktopNavigation, NavigationList } from "./desktop-navigation";
import { MobileNavigation } from "./mobile-navigation";
import { HeaderLogo } from "./site-logo";

/**
 * Solid header bar following behringeb5.com: logo and uppercase menu with
 * dropdowns on the left, an outlined button on the right. It stays at the
 * top while the page scrolls. White, so the two-color logo (orange and navy)
 * keeps its own colors (client logo, 2026-10-31).
 */
export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white">
      <div className="container-page flex h-20 items-center justify-between gap-6 lg:h-24">
        <div className="flex items-center gap-6 xl:gap-10">
          <HeaderLogo />
          <nav aria-label="Main menu" className="hidden lg:block">
            <Suspense fallback={<NavigationList items={mainNavigation} />}>
              <DesktopNavigation items={mainNavigation} />
            </Suspense>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block lg:hidden xl:block">
            <ButtonLink href={headerCta.href} variant="accent-invert" size="sm" icon="none">
              {headerCta.label}
            </ButtonLink>
          </div>
          <MobileNavigation
            items={mainNavigation}
            cta={primaryCta}
            groups={[
              { title: "Services", items: serviceNavigation },
              { title: "Industries", items: sectorNavigation },
            ]}
          />
        </div>
      </div>
    </header>
  );
}
