import Image from "next/image";
import aboutColumns from "@/assets/images/about-columns.jpg";
import { routes } from "@/config/routes";
import { homeContent } from "@/content/home";
import { Tag } from "@/components/ui/tag";
import { TextLink } from "@/components/ui/text-link";

/** Photo, short introduction and verified figures, as in the reference profile block. */
export function AboutBlock() {
  const { about } = homeContent;
  return (
    <section aria-labelledby="about-title" className="bg-white pb-20 md:pb-28 lg:pb-34">
      <div className="container-page grid items-center gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="frame overflow-hidden rounded-card p-2">
            <Image
              src={aboutColumns}
              alt={about.imageAlt}
              placeholder="blur"
              sizes="(min-width: 1024px) 480px, 100vw"
              className="aspect-[4/5] h-auto w-full rounded-panel object-cover lg:max-h-[520px]"
            />
          </div>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <Tag>{about.tag}</Tag>
          <h2 id="about-title" className="mt-5 text-heading text-navy">
            {about.title}
          </h2>
          <p className="mt-2 text-label text-accent-strong">{about.subtitle}</p>
          <div className="mt-6 grid gap-4">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-body text-slate">
                {paragraph}
              </p>
            ))}
          </div>
          <dl className="mt-8 grid grid-cols-3 gap-3">
            {about.stats.map((stat) => (
              <div key={stat.label} className="frame rounded-panel p-4">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-medium text-heading leading-none text-navy">{stat.value}</span>
                  <span className="mt-2 block text-caption text-slate">{stat.label}</span>
                </dd>
              </div>
            ))}
          </dl>
          <TextLink href={routes.about} className="mt-6">
            {about.linkLabel}
          </TextLink>
        </div>
      </div>
    </section>
  );
}
