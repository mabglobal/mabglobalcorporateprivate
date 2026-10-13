import { routes } from "@/config/routes";
import aboutColumns from "@/assets/images/about-columns.jpg";
import { aboutContent } from "@/content/about";
import { homeContent } from "@/content/home";
import { primaryCta } from "@/content/navigation";
import { staticPages } from "@/content/pages";
import { JsonLd } from "@/components/seo/json-ld";
import { ContactBand } from "@/components/sections/contact-band";
import { PageHero } from "@/components/sections/page-hero";
import { ButtonLink } from "@/components/ui/button-link";
import { FeaturePanel } from "@/components/ui/feature-panel";
import { IconTile } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";
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
  { name: "Home", path: routes.home },
  { name: page.title, path: page.path },
];

export default function AboutPage() {
  const { hero, introduction, philosophy, approach } = aboutContent;
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
        title={hero.title}
        description={hero.description}
        actions={
          <>
            <ButtonLink href={primaryCta.href} variant="light" icon="calendar">
              Schedule a Consultation
            </ButtonLink>
            <ButtonLink href={routes.services} variant="outline-white" icon="none">
              Explore Our Services
            </ButtonLink>
          </>
        }
      />

      <section aria-labelledby="intro-title" className="section-y bg-white">
        <div className="container-page">
          <FeaturePanel
            id="intro-title"
            label={introduction.tag}
            title={introduction.title}
            features={[
              { title: "Our Story", text: `${introduction.paragraphs[0]} ${introduction.paragraphs[2]}` },
              { title: "Our Services", text: introduction.paragraphs[1] ?? "" },
            ]}
            image={aboutColumns}
            imageAlt={homeContent.about.imageAlt}
            imageClassName="object-[50%_30%]"
          />
        </div>
      </section>

      <section aria-labelledby="philosophy-title" className="bg-white pb-20 md:pb-28 lg:pb-34">
        <div className="container-page">
          <div className="on-dark grid gap-10 rounded-card bg-accent p-8 md:p-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <IconTile name="compass" tone="dark" />
              <h2 id="philosophy-title" className="mt-5 text-[1.3125rem] font-bold text-white">
                {philosophy.title}
              </h2>
              <figure className="mt-4">
                <blockquote className="text-heading text-white">
                  <p>&ldquo;{philosophy.quote}&rdquo;</p>
                </blockquote>
              </figure>
            </div>
            <div className="grid content-end gap-4 lg:col-span-5 lg:col-start-8">
              {philosophy.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-[1.1875rem] font-bold leading-relaxed text-white">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="approach-title" className="bg-white pb-20 md:pb-28 lg:pb-34">
        <div className="container-page">
          <SectionHeading id="approach-title" tag={approach.tag} title={approach.title} />
          <ol className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {approach.items.map((item, index) => (
              <li key={item.title} className="frame rounded-card p-7">
                <span className="text-caption font-medium text-navy">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-title text-navy">{item.title}</h3>
                <p data-single-line="" className="mt-2 text-label text-navy">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
