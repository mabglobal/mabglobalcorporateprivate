import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { routes } from "@/config/routes";
import { homeContent } from "@/content/home";
import { services } from "@/content/services";

/**
 * Navy band with a large centered heading and a grid of service tiles,
 * following the dark content band of behringeb5.com. White on navy only.
 */
export function ServicesBand() {
  const { servicesBand } = homeContent;
  const tiles = [
    ...services.map((service) => ({
      href: routes.service(service.slug),
      title: service.shortTitle,
      description: service.summary,
    })),
    {
      href: routes.services,
      title: servicesBand.allServicesLabel,
      description: servicesBand.allServicesDescription,
    },
  ];
  return (
    <section aria-labelledby="services-band-title" className="on-dark bg-navy-deep py-20 md:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-4xl text-center">
          <h2 id="services-band-title" className="text-heading text-white">
            {servicesBand.title}
          </h2>
          <p data-single-line="" className="mt-5 text-body text-white md:text-lead">
            {servicesBand.description}
          </p>
        </div>
        <ul className="mt-14 grid gap-px overflow-hidden rounded-card border border-white/15 bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
          {tiles.map((tile) => (
            <li key={tile.href + tile.title} className="bg-navy-deep">
              <Link
                href={tile.href}
                className="group flex h-full min-h-56 flex-col justify-between gap-8 p-7 transition-colors hover:bg-navy"
              >
                <span>
                  <span className="block font-display text-title font-bold text-white">{tile.title}</span>
                  <span className="mt-3 block text-label text-white">{tile.description}</span>
                </span>
                <span
                  aria-hidden="true"
                  className="inline-flex size-10 items-center justify-center rounded-control border border-white/40 text-white transition-colors group-hover:bg-white group-hover:text-navy"
                >
                  <ArrowRight className="size-4" strokeWidth={1.8} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
