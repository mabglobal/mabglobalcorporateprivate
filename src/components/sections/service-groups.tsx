import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { routes } from "@/config/routes";
import { homeContent } from "@/content/home";
import { getService, getServices } from "@/content/services";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { TextLink } from "@/components/ui/text-link";

/**
 * Services grouped by need: a stack of framed rows per group, with the last
 * service opened up into a larger framed card, as in the consulting reference.
 */
export function ServiceGroups() {
  const content = homeContent.services;
  return (
    <section aria-labelledby="services-title" className="section-y bg-white">
      <div className="container-page">
        <SectionHeading
          id="services-title"
          tag={content.tag}
          title={content.titleLead}
          accent={content.titleAccent}
          action={<TextLink href={routes.services}>{content.allServicesLabel}</TextLink>}
        />

        <div className="mt-14 grid gap-14">
          {content.groups.map((group) => {
            const rows = getServices([...group.services]);
            const featured = getService(group.featured);
            return (
              <div key={group.label} className="grid gap-6 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <h3 className="text-title text-navy">{group.label}</h3>
                  <p className="mt-2 text-label text-slate">{group.description}</p>
                </div>
                <ul className="grid gap-2 lg:col-span-8">
                  {rows.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={routes.service(service.slug)}
                        className="frame group flex min-h-16 items-center justify-between gap-6 rounded-panel px-6 py-4 transition-colors hover:border-slate"
                      >
                        <span className="font-medium text-title text-navy">{service.title}</span>
                        <ArrowUpRight
                          aria-hidden="true"
                          className="size-5 shrink-0 text-slate transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-navy"
                        />
                      </Link>
                    </li>
                  ))}
                  <li className="frame rounded-panel p-6 md:p-7">
                    <h4 className="text-title text-navy">{featured.title}</h4>
                    <div className="mt-3 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                      <p className="flex-1 text-label text-slate">{featured.summary}</p>
                      <ButtonLink href={routes.service(featured.slug)} variant="outline" size="sm">
                        İnceleyin
                      </ButtonLink>
                    </div>
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
