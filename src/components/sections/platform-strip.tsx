import Image from "next/image";
import { homeContent } from "@/content/home";

/**
 * White strip under the hero, laid out like the "As seen on" wall of
 * behringeb5.com: banks and payment platforms as single-color logos with an
 * ownership note. Referral sign-up links carry rel="sponsored"; the note
 * discloses every linked logo.
 */
export function PlatformStrip() {
  const { platforms } = homeContent;
  return (
    <section aria-labelledby="platforms-title" className="bg-white py-12 md:py-16">
      <div className="container-page">
        <h2 id="platforms-title" className="text-center font-sans text-label font-medium text-navy">
          {platforms.caption}
        </h2>
        {/* One row from lg: logos shrink in proportion when the row is tight. */}
        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 lg:flex-nowrap lg:justify-between lg:gap-x-8 xl:gap-x-10">
          {platforms.items.map((platform) => {
            const logo = (
              <Image
                src={platform.src}
                alt={platform.link ? platform.link.label : platform.name}
                width={platform.width}
                height={platform.height}
                unoptimized
                className="h-auto max-w-full"
              />
            );
            return (
              <li key={platform.name} className="flex min-w-0 shrink items-center">
                {platform.link ? (
                  <a
                    href={platform.link.href}
                    rel={platform.link.sponsored ? "sponsored noopener" : "noopener"}
                    className="flex min-h-11 min-w-0 items-center rounded-control"
                  >
                    {logo}
                  </a>
                ) : (
                  logo
                )}
              </li>
            );
          })}
        </ul>
        <p className="mt-8 text-center text-caption text-navy">{platforms.note}</p>
      </div>
    </section>
  );
}
