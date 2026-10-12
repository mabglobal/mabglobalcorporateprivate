import Image from "next/image";
import heroArchitecture from "@/assets/images/hero-architecture.jpg";
import { homeContent } from "@/content/home";
import { ButtonLink } from "@/components/ui/button-link";

/**
 * Full-bleed navy hero following the consulting reference: the transparent
 * header sits on top, the copy is anchored bottom left and the architectural
 * image fills the right. The image sky is the same navy as the section, so
 * the photo blends into the background. White on navy only.
 * Image supplied by MAB Global Partners.
 */
export function Hero() {
  const { hero } = homeContent;
  return (
    <section
      aria-labelledby="hero-title"
      className="on-dark relative isolate flex min-h-[640px] flex-col overflow-hidden bg-navy-deep lg:h-[min(100svh,60rem)] lg:min-h-[700px]"
    >
      {/* The text column stays clear of the pediment and dome at every desktop width. */}
      <div className="absolute inset-x-0 bottom-0 -z-10 h-[52%] sm:h-[58%] lg:left-[7.5%] lg:right-auto lg:h-auto lg:w-[104%] lg:aspect-[3/1]">
        <Image
          src={heroArchitecture}
          alt={hero.imageAlt}
          fill
          priority
          placeholder="blur"
          sizes="(min-width: 1024px) 104vw, 100vw"
          className="object-cover object-[78%_100%]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(90deg,var(--color-navy-deep)_0%,rgb(28_36_50/0.85)_24%,rgb(28_36_50/0)_52%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(0deg,var(--color-navy-deep)_0%,rgb(28_36_50/0.6)_24%,rgb(28_36_50/0)_55%)]"
        />
      </div>

      <div className="container-page flex flex-1 flex-col justify-end pb-16 pt-36 md:pb-20 lg:pb-24">
        <p className="inline-flex items-center gap-2.5 text-caption font-medium uppercase tracking-[0.14em] text-white">
          <span aria-hidden="true" className="size-1.5 rounded-full bg-white" />
          {hero.badge}
        </p>
        <h1
          id="hero-title"
          className="mt-5 max-w-5xl text-[clamp(2.5rem,1.6rem+3.1vw,4.25rem)] leading-[1.05] tracking-[-0.02em] text-white"
        >
          {hero.titleLead}
          <br />
          {hero.titleRest}
        </h1>
        <p data-single-line="" className="mt-5 text-body text-white md:text-lead">
          {hero.description}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href={hero.primaryCta.href} variant="light" icon="arrow-right">
            {hero.primaryCta.label}
          </ButtonLink>
          <ButtonLink href={hero.secondaryCta.href} variant="outline-light" icon="none">
            {hero.secondaryCta.label}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
