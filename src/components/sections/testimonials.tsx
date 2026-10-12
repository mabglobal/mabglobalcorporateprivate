import { testimonials } from "@/content/testimonials";
import { SectionHeading } from "@/components/ui/section-heading";

/**
 * Renders only approved, published testimonials. With no published entries
 * the section is omitted entirely; no placeholder content is shown.
 */
export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section aria-labelledby="testimonials-title" className="section-y bg-white">
      <div className="container-page">
        <SectionHeading
          id="testimonials-title"
          tag="Testimonials"
          title="Client Experiences"
        />
        <ul className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <li key={testimonial.id} className="frame rounded-card p-7">
              <figure>
                <blockquote className="text-body text-ink">
                  <p>{testimonial.quote}</p>
                </blockquote>
                <figcaption className="mt-6 text-label text-navy">
                  <span className="font-medium text-navy">{testimonial.name}</span>
                  {testimonial.role || testimonial.company ? (
                    <span className="block">
                      {[testimonial.role, testimonial.company].filter(Boolean).join(", ")}
                    </span>
                  ) : null}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
