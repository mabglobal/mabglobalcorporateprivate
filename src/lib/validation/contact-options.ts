import { sectors } from "@/content/sectors";
import { services } from "@/content/services";
import type { ContactOptions } from "./contact";

/**
 * Select options for the contact form, derived from the published registries.
 * Server-only usage: the contact page passes these to the client form as props.
 */
export const contactOptions: ContactOptions = {
  services: [
    ...services.map((service) => ({ value: service.slug, label: service.title })),
    { value: "birden-fazla-hizmet", label: "Birden fazla hizmet" },
    { value: "diger", label: "Diğer konular" },
  ],
  sectors: [
    ...sectors.map((sector) => ({ value: sector.slug, label: sector.title })),
    { value: "diger", label: "Diğer" },
  ],
};
