import { ArrowUpRight, Building2, Mail, MapPin, Phone } from "lucide-react";
import { CONTACT_FORM_ANCHOR, routes } from "@/config/routes";
import {
  contactConfig,
  mailtoHref,
  offices,
  phoneHref,
  secondaryMailtoHref,
} from "@/config/contact";
import { staticPages } from "@/content/pages";
import { ContactForm } from "@/components/forms/contact-form";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { BulletList } from "@/components/ui/check-list";
import { SectionHeading } from "@/components/ui/section-heading";
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
        description="Fill in the form or reach us by email or phone."
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
                <span aria-hidden="true" className="inline-flex size-10 items-center justify-center rounded-control border border-line bg-white text-navy shadow-frame">
                  <Mail className="size-4" />
                </span>
                <h2 className="mt-6 text-title text-navy">Email</h2>
                <a
                  href={mailtoHref}
                  className="mt-2 flex min-h-11 items-center text-label font-medium text-navy underline underline-offset-4 [overflow-wrap:anywhere]"
                >
                  {contactConfig.email}
                </a>
                <a
                  href={secondaryMailtoHref}
                  className="flex min-h-11 items-center text-label font-medium text-navy underline underline-offset-4 [overflow-wrap:anywhere]"
                >
                  {contactConfig.secondaryEmail}
                </a>
              </div>
              <div className="frame rounded-card p-8">
                <span aria-hidden="true" className="inline-flex size-10 items-center justify-center rounded-control border border-line bg-white text-navy shadow-frame">
                  <Phone className="size-4" />
                </span>
                <h2 className="mt-6 text-title text-navy">Phone</h2>
                <a
                  href={phoneHref}
                  className="mt-2 flex min-h-11 items-center text-label font-medium text-navy underline underline-offset-4"
                >
                  {contactConfig.phone.display}
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

      <section aria-labelledby="offices-title" className="bg-white pb-20 md:pb-28 lg:pb-34">
        <div className="container-page">
          <SectionHeading
            id="offices-title"
            tag="Offices"
            title="Our Offices"
            description="Find us in Türkiye and the United Kingdom and the United States."
          />
          <ul className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {offices.map((office) => (
              <li key={office.id} className="frame flex flex-col rounded-card p-7">
                <span aria-hidden="true" className="inline-flex size-10 items-center justify-center rounded-control border border-line bg-white text-navy shadow-frame">
                  {office.id === "istanbul" ? <MapPin className="size-4" /> : <Building2 className="size-4" />}
                </span>
                <h3 className="mt-6 text-title text-navy">{office.heading}</h3>
                <p className="mt-1 text-label font-medium text-navy">{office.location}</p>
                {office.address ? (
                  <address className="mt-2 text-label not-italic text-ink [overflow-wrap:anywhere]">
                    {office.address}
                  </address>
                ) : null}
                {office.mapsUrl ? (
                  <a
                    href={office.mapsUrl}
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex min-h-11 items-center gap-1.5 pt-4 text-label font-medium text-navy underline underline-offset-4"
                  >
                    Visit Our Office
                    <ArrowUpRight aria-hidden="true" className="size-4 text-accent" />
                  </a>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
