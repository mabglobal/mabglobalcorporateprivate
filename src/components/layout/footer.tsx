import Link from "next/link";
import { contactConfig, mailtoHref } from "@/config/contact";
import { siteConfig } from "@/config/site";
import { footerLinks, legalNavigation } from "@/content/navigation";
import { CopyrightYear } from "./copyright-year";
import { SiteLogo } from "./site-logo";

const tagline = "Your partner for doing business across borders.";

const registeredAgentBrand = siteConfig.relatedBrands[0];

/**
 * White footer following the EY-Parthenon reference: the logo lockup with a
 * bold line and two short paragraphs on the left, bold underlined links on
 * the right, and the legal links with the copyright at the bottom right.
 * Social links are omitted until accounts are confirmed.
 */
export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="container-page grid gap-12 py-14 md:py-20 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <SiteLogo tone="light" variant="lockup" size="footer" />
          <p className="mt-4 font-display text-title font-bold text-navy">{tagline}</p>
          <div className="mt-8 grid max-w-2xl gap-4 text-label text-navy">
            <p>
              {siteConfig.name} is a corporate services brand for entrepreneurs and companies that do
              business in the United States and the United Kingdom.
              {registeredAgentBrand ? (
                <>
                  {" "}
                  Registered agent services are provided by{" "}
                  <a
                    href={registeredAgentBrand.url}
                    rel="noopener noreferrer"
                    className="font-bold underline underline-offset-4"
                  >
                    {registeredAgentBrand.name}
                  </a>
                  {registeredAgentBrand.name.endsWith(".") ? null : "."}
                </>
              ) : null}
            </p>
            <p>
              Content on this website is general information and is no substitute for personal legal or
              tax advice. Office{" "}
              <a href={contactConfig.mapsUrl} rel="noopener noreferrer" className="underline underline-offset-4">
                {contactConfig.address.full}
              </a>
              . Email{" "}
              <a href={mailtoHref} className="underline underline-offset-4">
                {contactConfig.email}
              </a>
              .
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-12 lg:col-span-5 lg:items-end">
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-7 gap-y-3 lg:justify-end">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-9 items-center whitespace-nowrap text-body font-bold text-navy underline underline-offset-[6px] hover:decoration-2"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="grid gap-3 lg:justify-items-end">
            <nav aria-label="Legal information">
              <ul className="flex flex-wrap gap-x-6 gap-y-1 lg:justify-end">
                {legalNavigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="inline-flex min-h-9 items-center whitespace-nowrap text-label text-navy underline-offset-4 hover:underline"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <p className="text-caption text-navy">
              © <CopyrightYear /> {siteConfig.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
