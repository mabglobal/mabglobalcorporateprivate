import Image from "next/image";
import heroArchitecture from "@/assets/images/hero-architecture.jpg";
import { homeContent } from "@/content/home";
import { ButtonLink } from "@/components/ui/button-link";

/**
 * Navy hero below the solid header, following behringeb5.com: a large
 * positioning headline, a bold line of proof points, a short paragraph and
 * two buttons on the left, the architectural image on the right. The image
 * sky is the same navy as the section. White on navy only.
 * Image supplied by MAB Global Partners.
 */
export function Hero() {
  const { hero } = homeContent;
  return (
    <section
      aria-labelledby="hero-title"
      className="on-dark relative isolate flex min-h-[640px] flex-col overflow-hidden bg-navy-deep lg:h-[min(calc(100svh-6rem),56rem)] lg:min-h-[680px]"
    >
      {/* The text column stays clear of the pediment and dome at desktop widths. */}
      <div className="absolute inset-x-0 bottom-0 -z-10 h-[46%] sm:h-[52%] lg:left-[18%] lg:right-auto lg:h-auto lg:w-[92%] lg:aspect-[3/1]">
        <Image
          src={heroArchitecture}
          alt={hero.imageAlt}
          fill
          priority
          placeholder="blur"
          sizes="(min-width: 1024px) 92vw, 100vw"
          className="object-cover object-[78%_100%]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(90deg,var(--color-navy-deep)_0%,color-mix(in_srgb,var(--color-navy-deep)_80%,transparent)_20%,transparent_45%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(0deg,var(--color-navy-deep)_0%,color-mix(in_srgb,var(--color-navy-deep)_55%,transparent)_22%,transparent_50%)]"
        />
      </div>

      <div className="container-page flex flex-1 flex-col justify-center pb-56 pt-14 sm:pb-64 lg:py-20">
        <h1 id="hero-title" className="max-w-3xl text-display text-white">
          {hero.title}
        </h1>
        <p className="mt-7 text-lead font-bold text-white md:text-[1.25rem]">{hero.proofPoints.join("  |  ")}</p>
        <p className="mt-5 max-w-3xl text-body text-white md:text-lead">{hero.description}</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <ButtonLink href={hero.primaryCta.href} variant="light" icon="arrow-right">
            {hero.primaryCta.label}
          </ButtonLink>
          <ButtonLink href={hero.secondaryCta.href} variant="outline-white" icon="calendar">
            {hero.secondaryCta.label}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
