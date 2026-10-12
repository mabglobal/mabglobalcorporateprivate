import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { CONTACT_FORM_ANCHOR, routes } from "@/config/routes";
import { contactConfig, mailtoHref } from "@/config/contact";
import { staticPages } from "@/content/pages";
import { ContactForm } from "@/components/forms/contact-form";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { BulletList } from "@/components/ui/check-list";
import { buildStaticPageMetadata } from "@/lib/seo/metadata";
import {
  breadcrumbNode,
  graph,
  organizationNode,
  webPageNode,
  type BreadcrumbTrailItem,
} from "@/lib/seo/structured-data";
import { contactOptions } from "@/lib/validation/contact-options";

const page = staticPages.contact;

export const metadata = buildStaticPageMetadata(page);

const breadcrumb: BreadcrumbTrailItem[] = [
  { name: "Ana Sayfa", path: routes.home },
  { name: "İletişim", path: page.path },
];

const consultationTopics = [
  "İş modeliniz ve hedef pazarınız",
  "Mevcut veya planlanan şirket yapınız",
  "Vergi, muhasebe ve uyum ihtiyaçlarınız",
  "Önerilen hizmet kapsamı ve sonraki adımlar",
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={graph([
          organizationNode(),
          webPageNode({
            path: page.path,
            name: page.title,
            description: page.description,
            type: "ContactPage",
            dateModified: page.updatedAt,
          }),
          breadcrumbNode(breadcrumb),
        ])}
      />
      <PageHero
        breadcrumb={breadcrumb}
        eyebrow="İletişim"
        title="Uluslararası iş planınızı paylaşın"
        description="Formu doldurarak danışmanlık talebinizi iletebilir veya bize doğrudan e-posta gönderebilirsiniz. Talebinizi inceleyip sizinle iletişime geçeceğiz."
      />

      <section
        id={CONTACT_FORM_ANCHOR}
        aria-labelledby="form-title"
        className="section-y scroll-mt-24 bg-white"
      >
        <div className="container-page grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 id="form-title" className="text-heading text-navy">
              Danışmanlık talebi
            </h2>
            <p className="mb-10 mt-4 text-body text-slate">
              Yıldız ile işaretli alanların doldurulması gerekir.
            </p>
            <ContactForm options={contactOptions} />
          </div>

          <aside aria-label="İletişim bilgileri" className="lg:col-span-4 lg:col-start-9">
            <div className="grid gap-5">
              <div className="rounded-card bg-surface p-8">
                <Mail aria-hidden="true" className="size-6 text-accent-strong" strokeWidth={1.6} />
                <h2 className="mt-6 text-title text-navy">E-posta</h2>
                <a
                  href={mailtoHref}
                  className="mt-3 inline-flex min-h-11 items-center break-all text-body font-medium text-navy underline underline-offset-4"
                >
                  {contactConfig.email}
                </a>
              </div>
              <div className="rounded-card bg-surface p-8">
                <MapPin aria-hidden="true" className="size-6 text-accent-strong" strokeWidth={1.6} />
                <h2 className="mt-6 text-title text-navy">Ofis</h2>
                <address className="mt-3 text-body not-italic text-ink">
                  {contactConfig.address.full}
                </address>
                <a
                  href={contactConfig.mapsUrl}
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex min-h-11 items-center gap-1.5 text-label font-medium text-navy underline underline-offset-4"
                >
                  Google Haritalar&apos;da aç
                  <ArrowUpRight aria-hidden="true" className="size-4 text-accent-strong" />
                </a>
              </div>
              <div className="rounded-card border border-line p-8">
                <h2 className="text-title text-navy">Ön görüşmede neler konuşulur</h2>
                <div className="mt-6">
                  <BulletList items={consultationTopics} />
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
