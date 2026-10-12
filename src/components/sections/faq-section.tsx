import { routes } from "@/config/routes";
import type { FaqItem } from "@/types/content";
import { Eyebrow } from "@/components/ui/section-heading";
import { TextLink } from "@/components/ui/text-link";
import { cn } from "@/lib/utilities/cn";
import { FaqAccordion } from "./faq-accordion";

interface FaqSectionProps {
  items: FaqItem[];
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
}

export function FaqSection({
  items,
  eyebrow = "Sıkça sorulan sorular",
  title = "Merak edilen konular",
  description,
  className,
}: FaqSectionProps) {
  if (items.length === 0) return null;
  return (
    <section aria-labelledby="faq-title" className={cn("section-y bg-white", className)}>
      <div className="container-page grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 id="faq-title" className="mt-5 text-heading text-navy">
            {title}
          </h2>
          {description ? <p className="mt-5 text-body text-slate">{description}</p> : null}
          <div className="mt-8 rounded-card bg-surface p-6">
            <p className="text-label text-slate">Sorunuzun yanıtını bulamadınız mı?</p>
            <TextLink href={routes.contactForm} className="mt-1">
              Bize yazın
            </TextLink>
          </div>
        </div>
        <div className="lg:col-span-7 lg:col-start-6">
          <FaqAccordion items={items} />
        </div>
      </div>
    </section>
  );
}
