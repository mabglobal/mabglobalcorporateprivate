import Image from "next/image";
import { homeContent } from "@/content/home";

/**
 * White strip under the hero, laid out like the "As seen on" wall of
 * behringeb5.com: the agencies for which filings are prepared as plain text,
 * then the banks and payment platforms as logos. Both carry a note that they
 * show no affiliation. No agency logos or state seals are used.
 */
export function PlatformStrip() {
  const { agencies, platforms } = homeContent;
  return (
    <section aria-labelledby="filings-title" className="bg-white py-12 md:py-16">
      <div className="container-page">
        <h2 id="filings-title" className="text-center font-sans text-label font-medium text-navy">
          {agencies.caption}
        </h2>
        <ul className="mt-6 flex flex-wrap items-stretch justify-center gap-4">
          {agencies.items.map((agency) => (
            <li
              key={agency.name}
              className="frame flex min-w-56 flex-col items-center rounded-control px-8 py-4 text-center"
            >
              <span className="font-display text-[1.375rem] font-bold leading-tight tracking-[0.04em] text-navy">
                {agency.name}
              </span>
              <span className="mt-1 text-label text-navy">{agency.detail}</span>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-center text-caption text-navy">{agencies.note}</p>

        <h2 className="mt-14 text-center font-sans text-label font-medium text-navy md:mt-16">
          {platforms.caption}
        </h2>
        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-16">
          {platforms.items.map((platform) => (
            <li key={platform.name} className="flex items-center">
              <Image
                src={platform.src}
                alt={platform.name}
                width={platform.width}
                height={platform.height}
                unoptimized
                className="h-auto max-w-full"
              />
            </li>
          ))}
        </ul>
        <p className="mt-8 text-center text-caption text-navy">{platforms.note}</p>
      </div>
    </section>
  );
}
