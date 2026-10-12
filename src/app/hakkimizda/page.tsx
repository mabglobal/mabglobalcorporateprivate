import { routes } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { aboutContent } from "@/content/about";
import { staticPages } from "@/content/pages";
import { JsonLd } from "@/components/seo/json-ld";
import { ClosingCta } from "@/components/sections/closing-cta";
import { PageHero } from "@/components/sections/page-hero";
import { ButtonLink } from "@/components/ui/button-link";
import { Eyebrow, SectionHeading } from "@/components/ui/section-heading";
import { buildStaticPageMetadata } from "@/lib/seo/metadata";
import {
  breadcrumbNode,
  graph,
  organizationNode,
  webPageNode,
  type BreadcrumbTrailItem,
} from "@/lib/seo/structured-data";

const page = staticPages.about;

export const metadata = buildStaticPageMetadata(page);

const breadcrumb: BreadcrumbTrailItem[] = [
  { name: "Ana Sayfa", path: routes.home },
  { name: page.title, path: page.path },
];

export default function AboutPage() {
  const { hero, introduction, philosophy, focus, approach, founder } = aboutContent;
  return (
    <>
      <JsonLd
        data={graph([
          organizationNode(),
          webPageNode({
            path: page.path,
            name: page.title,
            description: page.description,
            type: "AboutPage",
            dateModified: page.updatedAt,
          }),
          breadcrumbNode(breadcrumb),
        ])}
      />
      <PageHero
        breadcrumb={breadcrumb}
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
        actions={<ButtonLink href={routes.contactForm}>Danışmanlık Talep Et</ButtonLink>}
      />

      <section aria-labelledby="intro-title" className="section-y bg-white">
        <div className="container-page grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow>{siteConfig.name}</Eyebrow>
            <h2 id="intro-title" className="mt-5 text-heading text-navy">
              {introduction.title}
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            {introduction.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mb-6 text-lead text-ink">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="philosophy-title" className="section-y bg-navy text-white">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow tone="dark">{philosophy.title}</Eyebrow>
            <h2 id="philosophy-title" className="sr-only">
              {philosophy.title}
            </h2>
            <figure className="mt-8">
              <blockquote className="text-heading text-white">
                <p>&ldquo;{philosophy.quote}&rdquo;</p>
              </blockquote>
              <figcaption className="mt-6 text-label text-white/70">
                {philosophy.quoteAttribution}
              </figcaption>
            </figure>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 lg:pt-16">
            {philosophy.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mb-6 text-lead text-white/80">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="focus-title" className="section-y bg-white">
        <div className="container-page">
          <SectionHeading id="focus-title" eyebrow="Pazarlar" title={focus.title} />
          <ul className="mt-16 grid gap-5 md:grid-cols-2">
            {focus.items.map((item) => (
              <li key={item.title} className="rounded-card bg-surface p-8 md:p-10">
                <h3 className="text-title text-navy">{item.title}</h3>
                <p className="mt-4 text-body text-slate">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="approach-title" className="section-y bg-surface">
        <div className="container-page">
          <SectionHeading id="approach-title" eyebrow="Yaklaşım" title={approach.title} />
          <ol className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {approach.items.map((item, index) => (
              <li key={item.title} className="rounded-card border border-line bg-white p-8">
                <span className="text-label font-medium text-accent-strong">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-title text-navy">{item.title}</h3>
                <p className="mt-4 text-body text-slate">{item.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="founder-title" className="section-y bg-white">
        <div className="container-page grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow>{founder.title}</Eyebrow>
            <h2 id="founder-title" className="mt-5 text-heading text-navy">
              {founder.name}
            </h2>
            <p className="mt-3 text-label text-slate">{founder.role}</p>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            {founder.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mb-6 text-lead text-ink">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
