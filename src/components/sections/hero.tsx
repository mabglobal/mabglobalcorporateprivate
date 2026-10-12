import Image from "next/image";
import heroArchitecture from "@/assets/images/hero-architecture.jpg";
import { homeContent } from "@/content/home";
import { ButtonLink } from "@/components/ui/button-link";
import { Tag } from "@/components/ui/tag";

/**
 * White hero with a two-tone heading over a wide grayscale architectural
 * image whose white sky and faded base blend into the page, following the
 * consulting reference. Image supplied by MAB Global Partners.
 */
export function Hero() {
  const { hero } = homeContent;
  return (
    <section aria-labelledby="hero-title" className="relative bg-white">
      <div className="container-page relative z-10 pt-12 md:pt-16">
        <Tag>{hero.badge}</Tag>
        <h1 id="hero-title" className="mt-6 max-w-5xl text-display text-navy">
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

      <div className="container-page relative mt-4 md:mt-2 lg:-mt-12 xl:-mt-28">
        <div className="relative">
          <Image
            src={heroArchitecture}
            alt={hero.imageAlt}
            priority
            placeholder="blur"
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="h-[240px] w-full object-cover object-[80%_50%] sm:h-[320px] lg:h-auto"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-1/3 bg-[linear-gradient(180deg,rgb(255_255_255/0)_0%,var(--color-white)_100%)]"
          />
        </div>
      </div>
    </section>
  );
}
