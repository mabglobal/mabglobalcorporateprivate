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
    { value: "multiple-services", label: "Multiple Services" },
    { value: "other", label: "Other Topics" },
  ],
  sectors: [
    ...sectors.map((sector) => ({ value: sector.slug, label: sector.title })),
    { value: "other", label: "Other" },
  ],
};
