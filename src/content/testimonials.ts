import type { Testimonial } from "@/types/content";

/**
 * Customer testimonials. Only add entries with written customer approval and
 * set status to "published" after the approval reference is recorded.
 * The homepage section renders nothing while this list has no published entry.
 */
const allTestimonials: Testimonial[] = [];

export const testimonials: Testimonial[] = allTestimonials.filter(
  (testimonial) => testimonial.status === "published",
);
