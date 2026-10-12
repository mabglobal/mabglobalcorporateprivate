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
  { name: "Home", path: routes.home },
  { name: "Contact", path: page.path },
];

const consultationTopics = [
  "Your business model and target market",
  "Your current or planned company structure",
  "Your tax and accounting needs",
  "The proposed service scope",
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
        title="Contact"
        description="Fill in the form or send us an email directly."
      />

      <section
        id={CONTACT_FORM_ANCHOR}
        aria-labelledby="form-title"
        className="section-y scroll-mt-24 bg-white"
      >
        <div className="container-page grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 id="form-title" className="text-title text-navy">
              Consultation Request
            </h2>
            <p className="mb-8 mt-2 text-label text-navy">
              Fields marked with an asterisk are required.
            </p>
            <ContactForm options={contactOptions} />
          </div>

          <aside aria-label="Contact details" className="lg:col-span-4 lg:col-start-9">
            <div className="grid gap-5">
              <div className="frame rounded-card p-8">
                <Mail aria-hidden="true" className="size-6 text-navy" strokeWidth={1.6} />
                <h2 className="mt-6 text-title text-navy">Email</h2>
                <a
                  href={mailtoHref}
                  className="mt-2 inline-flex min-h-11 items-center whitespace-nowrap text-label font-medium text-navy underline underline-offset-4"
                >
                  {contactConfig.email}
                </a>
              </div>
              <div className="frame rounded-card p-8">
                <MapPin aria-hidden="true" className="size-6 text-navy" strokeWidth={1.6} />
                <h2 className="mt-6 text-title text-navy">Office</h2>
                <address className="mt-2 text-label not-italic text-ink">
                  {contactConfig.address.full}
                </address>
                <a
                  href={contactConfig.mapsUrl}
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex min-h-11 items-center gap-1.5 text-label font-medium text-navy underline underline-offset-4"
                >
                  Open in Maps
                  <ArrowUpRight aria-hidden="true" className="size-4 text-accent-strong" />
                </a>
              </div>
              <div className="frame rounded-card p-8">
                <h2 className="text-title text-navy">Topics for the First Call</h2>
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
