import { routes } from "@/config/routes";
import type { FaqItem } from "@/types/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { TextLink } from "@/components/ui/text-link";
import { cn } from "@/lib/utilities/cn";
import { FaqAccordion } from "./faq-accordion";

interface FaqSectionProps {
  items: FaqItem[];
  title?: string;
  description?: string;
  /** "bottom" removes top padding when the section follows another white section. */
  padding?: "full" | "bottom";
}

export function FaqSection({
  items,
  title = "Sıkça sorulan sorular",
  description = "Merak edilen konuların kısa yanıtlarını inceleyin.",
  padding = "full",
}: FaqSectionProps) {
  if (items.length === 0) return null;
  return (
    <section aria-labelledby="faq-title" className={cn("bg-white", padding === "full" ? "section-y" : "pb-20 md:pb-28 lg:pb-34")}>
      <div className="container-page grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading id="faq-title" icon="help" title={title} description={description} />
          <div className="mt-6">
            <p className="text-label text-slate">Sorunuzun yanıtını bulamadınız mı?</p>
            <TextLink href={routes.contactForm}>Bize yazın</TextLink>
          </div>
        </div>
        <div className="lg:col-span-7 lg:col-start-6">
          <FaqAccordion items={items} />
        </div>
      </div>
    </section>
  );
}
