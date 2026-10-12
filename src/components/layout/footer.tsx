import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { contactConfig, mailtoHref } from "@/config/contact";
import { siteConfig } from "@/config/site";
import { closingCta, homeContent } from "@/content/home";
import { footerNavigation, legalNavigation, primaryCta } from "@/content/navigation";
import { ButtonLink } from "@/components/ui/button-link";
import { IconTile } from "@/components/ui/icon";
import { CopyrightYear } from "./copyright-year";
import { SiteLogo } from "./site-logo";

/**
 * Closing call to action, white footer card and bottom bar on one navy band,
 * following the reference composition.
 */
export function Footer() {
  return (
    <footer className="on-dark bg-[linear-gradient(180deg,var(--color-navy-deep)_0%,var(--color-navy)_100%)]">
      <section aria-labelledby="closing-cta-title" className="container-page pb-16 pt-24 md:pt-28">
        <IconTile name="globe" tone="dark" />
        <h2 id="closing-cta-title" className="mt-5 max-w-2xl text-heading text-white">
          {closingCta.title}
        </h2>
        <p className="mt-3 max-w-xl text-body text-white/75">{closingCta.description}</p>
        <div className="mt-8">
          <ButtonLink href={closingCta.cta.href} variant="light">
            {closingCta.cta.label}
          </ButtonLink>
        </div>
      </section>

      <div className="container-page">
        <div className="rounded-card bg-white p-8 text-ink [--focus-ring:var(--color-navy)] md:p-12">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SiteLogo />
              <p className="mt-6 max-w-sm text-heading text-navy">{homeContent.hero.title}</p>
              <div className="mt-8">
                <ButtonLink href={primaryCta.href} variant="dark">
                  {primaryCta.label}
                </ButtonLink>
              </div>
            </div>

            <div className="grid gap-10 sm:grid-cols-[1.15fr_0.7fr_1.35fr] lg:col-span-8">
              {footerNavigation.map((group) => (
                <nav key={group.title} aria-label={group.title}>
                  <h2 className="text-label font-medium text-navy">{group.title}</h2>
                  <ul className="mt-4 grid gap-0.5">
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="inline-flex min-h-9 items-center text-label text-slate transition-colors hover:text-navy"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              ))}

              <div>
                <h2 className="text-label font-medium text-navy">İletişim</h2>
                <ul className="mt-4 grid gap-4 text-label">
                  <li>
                    <a href={mailtoHref} className="inline-flex min-h-9 items-center whitespace-nowrap text-slate hover:text-navy">
                      {contactConfig.email}
                    </a>
                  </li>
                  <li>
                    <a href={contactConfig.mapsUrl} rel="noopener noreferrer" className="group text-slate hover:text-navy">
                      <address className="not-italic">{contactConfig.address.full}</address>
                      <span className="mt-2 inline-flex items-center gap-1 font-medium text-navy">
                        Haritada görüntüleyin
                        <ArrowUpRight aria-hidden="true" className="size-3.5" />
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-page flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between">
        <p className="text-caption text-white/60">
          © <CopyrightYear /> {siteConfig.name}. Tüm hakları saklıdır.
        </p>
        <nav aria-label="Yasal bilgiler">
          <ul className="flex flex-wrap gap-x-6 gap-y-1">
            {legalNavigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-9 items-center whitespace-nowrap text-caption text-white/60 hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
