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
import { SiteLogo } from "./site-logo";

/**
 * Transparent header laid over the navy hero of every page, following the
 * hero reference: wordmark and links on the left, a white call to action on
 * the right. White on navy only.
 */
export function Header() {
  return (
    <header className="on-dark absolute inset-x-0 top-0 z-40">
      <div className="container-page flex h-20 items-center justify-between gap-6 md:h-24">
        <div className="flex items-center gap-10 xl:gap-14">
          <SiteLogo tone="dark" />
          <nav aria-label="Main menu" className="hidden lg:block">
            <Suspense fallback={<NavigationList items={mainNavigation} />}>
              <DesktopNavigation items={mainNavigation} />
            </Suspense>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <ButtonLink href={headerCta.href} variant="light" size="sm" icon="none">
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
