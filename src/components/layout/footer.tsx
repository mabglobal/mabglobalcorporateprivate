import Link from "next/link";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { contactConfig, mailtoHref } from "@/config/contact";
import { siteConfig } from "@/config/site";
import { footerNavigation, legalNavigation, primaryCta } from "@/content/navigation";
import { ButtonLink } from "@/components/ui/button-link";
import { CopyrightYear } from "./copyright-year";
import { SiteLogo } from "./site-logo";

const footerDescription =
  "Amerika ve İngiltere'de şirket kuruluşu, vergi, muhasebe ve registered agent hizmetleriyle uluslararası operasyonlarınızı destekliyoruz.";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="container-page pb-10 pt-20 md:pt-24">
        <div className="grid gap-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-3">
            <SiteLogo tone="dark" />
            <p className="mt-6 max-w-sm text-label text-white/70">
              {footerDescription}
            </p>
            <div className="mt-8">
              <ButtonLink href={primaryCta.href} variant="primary">
                {primaryCta.label}
              </ButtonLink>
            </div>
          </div>

          {footerNavigation.map((group, index) => (
            <nav
              key={group.title}
              aria-label={group.title}
              className={index === 0 ? "lg:col-span-3 lg:col-start-5" : "lg:col-span-2"}
            >
              <h2 className="text-caption font-medium text-white/60">{group.title}</h2>
              <ul className="mt-5 grid gap-0.5">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="inline-flex min-h-10 items-center text-label text-white/85 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="lg:col-span-3">
            <h2 className="text-caption font-medium text-white/60">İletişim</h2>
            <ul className="mt-5 grid gap-5">
              <li>
                <a
                  href={mailtoHref}
                  className="inline-flex min-h-10 items-start gap-3 text-label text-white/85 hover:text-white"
                >
                  <Mail aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" strokeWidth={1.8} />
                  {contactConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={contactConfig.mapsUrl}
                  rel="noopener noreferrer"
                  className="inline-flex items-start gap-3 text-label text-white/85 hover:text-white"
                >
                  <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" strokeWidth={1.8} />
                  <span>
                    <address className="not-italic">{contactConfig.address.full}</address>
                    <span className="mt-2 inline-flex items-center gap-1 text-white/60">
                      Google Haritalar&apos;da görüntüle
                      <ArrowUpRight aria-hidden="true" className="size-3.5" />
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-caption text-white/60">
            © <CopyrightYear /> {siteConfig.name}. Tüm hakları saklıdır.
          </p>
          <nav aria-label="Yasal bilgiler">
            <ul className="flex flex-wrap gap-x-6 gap-y-1">
              {legalNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-10 items-center text-caption text-white/60 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
