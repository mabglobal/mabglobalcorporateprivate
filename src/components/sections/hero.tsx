import { homeContent } from "@/content/home";
import { ButtonLink } from "@/components/ui/button-link";
import { Eyebrow } from "@/components/ui/section-heading";
import { HeroGraphic } from "./hero-graphic";

export function Hero() {
  const { hero } = homeContent;
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-navy-deep text-white"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_35%,rgb(255_255_255/0.07),transparent_60%)]"
      />
      <div className="container-page">
        <div className="grid items-center gap-12 pb-16 pt-20 md:pt-24 lg:min-h-[640px] lg:grid-cols-12 lg:gap-10 lg:pb-20 lg:pt-28">
          <div className="lg:col-span-7">
            <Eyebrow tone="dark">{hero.eyebrow}</Eyebrow>
            <h1 id="hero-title" className="mt-6 max-w-[13ch] text-display text-white">
              {hero.title}
            </h1>
            <p className="mt-7 max-w-xl text-lead text-white/75">{hero.description}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink href={hero.primaryCta.href}>{hero.primaryCta.label}</ButtonLink>
              <ButtonLink href={hero.secondaryCta.href} variant="outline-light">
                {hero.secondaryCta.label}
              </ButtonLink>
            </div>
          </div>
          <div className="hidden text-white md:block lg:col-span-5">
            <HeroGraphic className="mx-auto w-full max-w-[520px]" />
          </div>
        </div>

        <div className="flex flex-col gap-5 border-t border-white/10 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-caption text-white/60">{hero.marketsLabel}</p>
          <ul className="flex flex-wrap gap-x-10 gap-y-3">
            {hero.markets.map((market) => (
              <li key={market.code} className="flex items-center gap-3 text-label text-white/85">
                <span className="rounded-[3px] border border-white/20 px-1.5 py-0.5 text-caption font-medium tracking-[0.06em] text-white">
                  {market.code}
                </span>
                {market.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
