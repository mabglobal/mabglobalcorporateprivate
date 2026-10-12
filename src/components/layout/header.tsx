import { Suspense } from "react";
import {
  mainNavigation,
  primaryCta,
  sectorNavigation,
  serviceNavigation,
} from "@/content/navigation";
import { ButtonLink } from "@/components/ui/button-link";
import { DesktopNavigation, NavigationList } from "./desktop-navigation";
import { MobileNavigation } from "./mobile-navigation";
import { SiteLogo } from "./site-logo";

/** White header with a framed call to action, as in the consulting reference. */
export function Header() {
  return (
    <header className="relative z-40 bg-white">
      <div className="container-page flex h-20 items-center justify-between gap-6">
        <SiteLogo />

        <nav aria-label="Ana menü" className="hidden lg:block">
          <Suspense fallback={<NavigationList items={mainNavigation} />}>
            <DesktopNavigation items={mainNavigation} />
          </Suspense>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block lg:hidden xl:block">
            <ButtonLink href={primaryCta.href} variant="outline" size="sm">
              {primaryCta.label}
            </ButtonLink>
          </div>
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
