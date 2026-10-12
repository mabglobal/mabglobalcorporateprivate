import Image from "next/image";
import { homeContent } from "@/content/home";

/**
 * White strip under the hero, laid out like the "As seen on" wall of
 * behringeb5.com: the filings and services the firm handles as bold
 * wordmarks, then the banks and payment platforms as logos with a note that
 * they show no partnership. No agency logos or state seals are used.
 */
export function CapabilityStrip() {
  const { capabilities, platforms } = homeContent;
  return (
    <section aria-labelledby="capabilities-title" className="bg-white py-12 md:py-16">
      <div className="container-page">
        <h2 id="capabilities-title" className="text-center font-sans text-label font-medium text-navy">
          {capabilities.caption}
        </h2>
        <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
          {capabilities.items.map((item) => (
            <li
              key={item}
              className="flex min-h-12 items-center justify-center text-balance text-center font-display text-[clamp(1rem,0.85rem+0.55vw,1.3125rem)] font-bold leading-tight text-navy lg:whitespace-nowrap"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-14 md:mt-16">
          <h3 className="text-center font-sans text-label font-medium text-navy">{platforms.caption}</h3>
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
      </div>
    </section>
  );
}
