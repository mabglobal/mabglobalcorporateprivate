import { routes } from "@/config/routes";
import { homeContent } from "@/content/home";
import { Eyebrow } from "@/components/ui/section-heading";
import { TextLink } from "@/components/ui/text-link";

export function AboutPreview() {
  const { about } = homeContent;
  return (
    <section aria-labelledby="about-title" className="section-y bg-surface">
      <div className="container-page grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Eyebrow>{about.eyebrow}</Eyebrow>
          <h2 id="about-title" className="mt-5 text-heading text-navy">
            {about.title}
          </h2>
        </div>
        <div className="lg:col-span-6 lg:col-start-7 lg:pt-12">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mb-5 text-lead text-ink">
              {paragraph}
            </p>
          ))}
          <TextLink href={routes.about} className="mt-3">
            {about.linkLabel}
          </TextLink>
        </div>
      </div>
    </section>
  );
}
