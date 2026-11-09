import { routes } from "@/config/routes";
import { homeContent } from "@/content/home";
import { featuredServices } from "@/content/services";
import { TileBand } from "./tile-band";

/** Homepage services band: featured services plus the index and a consultation tile. */
export function ServicesBand() {
  const { servicesBand } = homeContent;
  return (
    <TileBand
      id="services-band-title"
      title={servicesBand.title}
      description={servicesBand.description}
      tiles={[
        ...featuredServices.map((service) => ({
          href: routes.service(service.slug),
          title: service.shortTitle,
          description: service.summary,
        })),
        {
          href: routes.services,
          title: servicesBand.allServicesLabel,
          description: servicesBand.allServicesDescription,
        },
        {
          href: routes.contactForm,
          title: servicesBand.consultationLabel,
          description: servicesBand.consultationDescription,
          highlight: true,
          icon: "phone",
        },
      ]}
    />
  );
}
