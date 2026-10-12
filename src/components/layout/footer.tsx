import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { contactConfig, mailtoHref } from "@/config/contact";
import { siteConfig } from "@/config/site";
import { footerNavigation, legalNavigation } from "@/content/navigation";
import { CopyrightYear } from "./copyright-year";
import { SiteLogo } from "./site-logo";

const footerDescription = "Your partner for doing business across borders.";

const registeredAgentBrand = siteConfig.relatedBrands[0];

const footerLink = "inline-flex min-h-9 items-center text-label text-white underline-offset-4 hover:underline";

/**
 * Footer following the reference: a rounded navy panel inset on the white
 * page with the wordmark and a short line on top, link columns and the
 * sister brand in the middle, and the legal bar at the bottom.
 * White only on navy.
 */
export function Footer() {
  return (
    <footer className="bg-white py-4 sm:py-6">
      <div className="container-page">
        <div className="on-dark rounded-card bg-navy-deep px-6 py-10 sm:px-10 lg:px-14 lg:py-12">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <SiteLogo tone="dark" />
            <p className="text-label text-white">{footerDescription}</p>
          </div>

          <div className="mt-8 grid gap-10 border-t border-white/15 pt-10 lg:grid-cols-12">
            <div className="grid gap-10 sm:grid-cols-[1.2fr_0.8fr_1.4fr] lg:col-span-9">
              {footerNavigation.map((group) => (
                <nav key={group.title} aria-label={group.title}>
                  <h2 className="text-label font-medium text-white">{group.title}</h2>
                  <ul className="mt-4 grid gap-0.5">
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} className={footerLink}>
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              ))}

              <div>
                <h2 className="text-label font-medium text-white">Contact</h2>
                <ul className="mt-4 grid gap-4 text-label">
                  <li>
                    <a
                      href={contactConfig.mapsUrl}
                      rel="noopener noreferrer"
                      className="text-white underline-offset-4 hover:underline"
                    >
                      <address className="not-italic">{contactConfig.address.full}</address>
                    </a>
                  </li>
                  <li>
                    <a href={mailtoHref} className={`${footerLink} whitespace-nowrap`}>
                      {contactConfig.email}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {registeredAgentBrand ? (
              <div className="lg:col-span-3 lg:justify-self-end">
                <a
                  href={registeredAgentBrand.url}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 text-white underline-offset-4 hover:underline"
                >
                  <ShieldCheck aria-hidden="true" className="size-8 shrink-0" strokeWidth={1.5} />
                  <span aria-hidden="true" className="h-10 w-px bg-white/25" />
                  <span className="text-label leading-snug">
                    Registered agent services
                    <span className="block">by {registeredAgentBrand.name}</span>
                  </span>
                </a>
              </div>
            ) : null}
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-white/15 pt-6 md:flex-row md:items-center md:justify-between">
            <p className="text-caption text-white">
              © <CopyrightYear /> {siteConfig.name}. All rights reserved.
            </p>
            <nav aria-label="Legal information">
              <ul className="flex flex-wrap gap-x-6 gap-y-1">
                {legalNavigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="inline-flex min-h-9 items-center whitespace-nowrap text-caption text-white underline-offset-4 hover:underline"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
