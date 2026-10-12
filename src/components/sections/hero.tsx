import { homeContent } from "@/content/home";
import { ButtonLink } from "@/components/ui/button-link";

/**
 * Soft layered ridges at the top of the hero, echoing the reference
 * composition. Filled shapes only, no strokes.
 */
function HeroBackdrop() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 1440 640"
      preserveAspectRatio="xMidYMin slice"
      className="absolute inset-0 h-full w-full"
    >
      <defs>
        <linearGradient id="hero-ridge-far" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" style={{ stopColor: "var(--color-navy-deep)" }} stopOpacity="1" />
          <stop offset="1" style={{ stopColor: "var(--color-navy-deep)" }} stopOpacity="0" />
        </linearGradient>
        <linearGradient id="hero-ridge-near" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" style={{ stopColor: "var(--color-navy-deep)" }} stopOpacity="0.9" />
          <stop offset="1" style={{ stopColor: "var(--color-navy-deep)" }} stopOpacity="0" />
        </linearGradient>
        <radialGradient id="hero-glow" cx="0.72" cy="0.55" r="0.6">
          <stop offset="0" style={{ stopColor: "var(--color-white)" }} stopOpacity="0.07" />
          <stop offset="1" style={{ stopColor: "var(--color-white)" }} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="1440" height="640" fill="url(#hero-glow)" />
      <path
        d="M0 0H1440V190C1340 150 1250 120 1150 150C1040 182 960 250 840 240C720 230 660 150 540 140C420 130 330 210 210 220C130 226 60 200 0 180Z"
        fill="url(#hero-ridge-far)"
      />
      <path
        d="M0 0H1440V110C1360 90 1290 70 1200 92C1100 116 1030 170 930 168C820 166 760 100 650 96C540 92 470 150 360 158C250 166 140 120 0 100Z"
        fill="url(#hero-ridge-near)"
      />
    </svg>
  );
}

export function Hero() {
  const { hero } = homeContent;
  return (
    <section aria-labelledby="hero-title" className="on-dark relative isolate overflow-hidden bg-navy">
      <HeroBackdrop />
      <div className="container-page relative flex min-h-[520px] flex-col justify-end pb-14 pt-28 lg:min-h-[600px]">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h1 id="hero-title" className="max-w-2xl text-display text-white">
              {hero.title}
            </h1>
            <p className="mt-5 max-w-lg text-body text-white/75">{hero.description}</p>
            <div className="mt-8">
              <ButtonLink href={hero.primaryCta.href} variant="light">
                {hero.primaryCta.label}
              </ButtonLink>
            </div>
          </div>
          <div className="lg:col-span-5 lg:justify-self-end">
            <p className="text-caption text-white/60">{hero.marketsLabel}</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {hero.markets.map((market) => (
                <li
                  key={market.code}
                  className="inline-flex items-center gap-2 whitespace-nowrap rounded-control bg-white/10 px-3 py-2 text-label text-white"
                >
                  <span className="font-semibold">{market.code}</span>
                  <span className="text-white/80">{market.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
