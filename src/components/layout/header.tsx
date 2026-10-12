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

/** Header sits on the navy band that opens every page, as in the reference. */
export function Header() {
  return (
    <header className="on-dark relative z-40 bg-navy-deep">
      <div className="container-page flex h-20 items-center justify-between gap-6">
        <SiteLogo tone="dark" />

        <nav aria-label="Ana menü" className="hidden lg:block">
          <Suspense fallback={<NavigationList items={mainNavigation} />}>
            <DesktopNavigation items={mainNavigation} />
          </Suspense>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <ButtonLink href={primaryCta.href} variant="light" size="sm">
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
