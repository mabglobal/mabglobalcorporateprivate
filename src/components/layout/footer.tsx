import Link from "next/link";
import { Plus } from "lucide-react";
import { contactConfig, mailtoHref } from "@/config/contact";
import { siteConfig } from "@/config/site";
import { footerNavigation, legalNavigation } from "@/content/navigation";
import { CopyrightYear } from "./copyright-year";

const footerDescription = "Amerika ve İngiltere'de şirket kuruluşu, vergi, muhasebe ve registered agent danışmanlığı.";

/**
 * Navy footer band with the brand name set large, link columns and the legal
 * bar, following the consulting reference. White only on navy.
 */
export function Footer() {
  return (
    <footer className="on-dark overflow-hidden bg-navy">
      <div aria-hidden="true" className="flex items-center gap-8 whitespace-nowrap py-10 md:py-14">
        {Array.from({ length: 4 }, (_, index) => (
          <span key={index} className="flex shrink-0 items-center gap-8">
            <span className="font-display text-[clamp(2.75rem,2rem+3vw,5rem)] leading-none text-white">
              {siteConfig.name}
            </span>
            <Plus className="size-8 shrink-0 text-white md:size-10" strokeWidth={2.5} />
          </span>
        ))}
      </div>

      <div className="container-page grid gap-12 pb-14 pt-4 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="font-display text-title text-white">{siteConfig.name}</p>
          <p className="mt-3 max-w-xs text-label text-white/70">{footerDescription}</p>
        </div>

        <div className="grid gap-10 sm:grid-cols-[1.15fr_0.7fr_1.35fr] lg:col-span-8">
          {footerNavigation.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className="text-label text-white">{group.title}</h2>
              <ul className="mt-4 grid gap-0.5">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="inline-flex min-h-9 items-center text-label text-white/70 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h2 className="text-label text-white">İletişim</h2>
            <ul className="mt-4 grid gap-4 text-label">
              <li>
                <a href={mailtoHref} className="inline-flex min-h-9 items-center whitespace-nowrap text-white/70 hover:text-white">
                  {contactConfig.email}
                </a>
              </li>
              <li>
                <a href={contactConfig.mapsUrl} rel="noopener noreferrer" className="text-white/70 hover:text-white">
                  <address className="not-italic">{contactConfig.address.full}</address>
                  <span className="mt-2 inline-flex text-white underline underline-offset-4">Haritada görüntüleyin</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container-page flex flex-col gap-4 pb-10 md:flex-row md:items-center md:justify-between">
        <p className="text-caption text-white/70">
          © <CopyrightYear /> {siteConfig.name}. Tüm hakları saklıdır.
        </p>
        <nav aria-label="Yasal bilgiler">
          <ul className="flex flex-wrap gap-x-6 gap-y-1">
            {legalNavigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-9 items-center whitespace-nowrap text-caption text-white/70 hover:text-white"
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
