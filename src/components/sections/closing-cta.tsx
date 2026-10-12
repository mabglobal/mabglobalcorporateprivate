import { homeContent } from "@/content/home";
import { ButtonLink } from "@/components/ui/button-link";

interface ClosingCtaProps {
  title?: string;
  description?: string;
  cta?: { label: string; href: string };
}

export function ClosingCta({
  title = homeContent.closingCta.title,
  description = homeContent.closingCta.description,
  cta = homeContent.closingCta.cta,
}: ClosingCtaProps) {
  return (
    <section
      aria-labelledby="closing-cta-title"
      className="relative isolate overflow-hidden bg-navy text-white"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-56 bg-[repeating-linear-gradient(to_bottom,rgb(255_255_255/0.07)_0_1px,transparent_1px_12px)] [mask-image:linear-gradient(to_bottom,black,transparent)]"
      />
      <div className="container-page section-y">
        <div className="max-w-3xl">
          <h2 id="closing-cta-title" className="text-heading text-white">
            {title}
          </h2>
          <p className="mt-6 max-w-2xl text-lead text-white/75">{description}</p>
          <div className="mt-10">
            <ButtonLink href={cta.href}>{cta.label}</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
