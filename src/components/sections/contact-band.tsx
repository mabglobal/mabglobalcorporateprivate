import { Mail, MapPin } from "lucide-react";
import { contactConfig, mailtoHref } from "@/config/contact";
import { contactBand } from "@/content/home";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";

/** Contact details with icons framed like the buttons and a framed request card. */
export function ContactBand() {
  return (
    <section aria-labelledby="contact-band-title" className="bg-white pb-20 md:pb-28 lg:pb-34">
      <div className="container-page grid gap-10 lg:grid-cols-12 lg:items-center">
        <div className="min-w-0 lg:col-span-6">
          <SectionHeading
            id="contact-band-title"
            tag={contactBand.tag}
            title={contactBand.title}
            description={contactBand.description}
          />
          <ul className="mt-8 grid gap-4">
            <li className="flex items-start gap-4">
              <span aria-hidden="true" className="inline-flex size-10 shrink-0 items-center justify-center rounded-control border border-line bg-white text-navy shadow-frame">
                <MapPin className="size-4" />
              </span>
              <div className="min-w-0">
                <p className="text-caption font-medium text-navy">Address</p>
                <a href={contactConfig.mapsUrl} rel="noopener noreferrer" className="text-label text-navy [overflow-wrap:anywhere] hover:underline">
                  {contactConfig.address.full}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span aria-hidden="true" className="inline-flex size-10 shrink-0 items-center justify-center rounded-control border border-line bg-white text-navy shadow-frame">
                <Mail className="size-4" />
              </span>
              <div className="min-w-0">
                <p className="text-caption font-medium text-navy">Email</p>
                <a href={mailtoHref} className="text-label text-navy [overflow-wrap:anywhere] hover:underline">
                  {contactConfig.email}
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className="min-w-0 lg:col-span-5 lg:col-start-8">
          <div className="frame rounded-card p-7 md:p-8">
            <h3 className="text-title text-navy">{contactBand.cardTitle}</h3>
            <p data-single-line="" className="mt-2 text-label text-navy">
              {contactBand.cardDescription}
            </p>
            <ButtonLink href={contactBand.cta.href} className="mt-6 w-full">
              {contactBand.cta.label}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
