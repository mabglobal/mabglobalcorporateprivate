import Image from "next/image";
import heroColumns from "@/assets/images/hero-columns.jpg";
import { homeContent } from "@/content/home";
import { ButtonLink } from "@/components/ui/button-link";
import { Tag } from "@/components/ui/tag";

/**
 * White hero with a two-tone heading over a wide architectural photograph
 * that fades into the page, following the consulting reference.
 * Photo by Carol M. Highsmith, Library of Congress, public domain.
 */
export function Hero() {
  const { hero } = homeContent;
  return (
    <section aria-labelledby="hero-title" className="relative bg-white">
      <div className="container-page relative z-10 pt-12 md:pt-16">
        <Tag>{hero.badge}</Tag>
        <h1 id="hero-title" className="mt-6 max-w-3xl text-display text-navy">
          {hero.titleLead}
          <br />
          <span className="text-slate">{hero.titleRest}</span>
        </h1>
        <p className="mt-5 max-w-xl text-body text-slate">{hero.description}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href={hero.primaryCta.href}>{hero.primaryCta.label}</ButtonLink>
          <ButtonLink href={hero.secondaryCta.href} variant="outline">
            {hero.secondaryCta.label}
          </ButtonLink>
        </div>
      </div>

      <div className="container-page relative mt-6 md:mt-4">
        <div className="relative overflow-hidden rounded-card">
          <Image
            src={heroColumns}
            alt={hero.imageAlt}
            priority
            placeholder="blur"
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="h-[260px] w-full object-cover object-[50%_40%] opacity-85 sm:h-[340px] lg:h-[460px]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(180deg,var(--color-white)_0%,rgb(255_255_255/0.6)_25%,rgb(255_255_255/0)_55%)]"
          />
        </div>
      </div>
    </section>
  );
}
