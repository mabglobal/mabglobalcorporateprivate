import { routes } from "@/config/routes";
import { homeContent } from "@/content/home";
import { featuredServices } from "@/content/services";
import { ServiceCard } from "@/components/services/service-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { TextLink } from "@/components/ui/text-link";

export function ServicesGrid() {
  const content = homeContent.services;
  return (
    <section aria-labelledby="services-title" className="section-y bg-white">
      <div className="container-page">
        <SectionHeading
          id="services-title"
          icon="building"
          title={content.title}
          description={content.description}
          action={<TextLink href={routes.services}>{content.allServicesLabel}</TextLink>}
        />
        <ul className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service) => (
            <li key={service.slug}>
              <ServiceCard service={service} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
