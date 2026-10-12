import Image from "next/image";
import { homeContent } from "@/content/home";

/**
 * White strip under the hero, laid out like the "As seen on" wall of
 * behringeb5.com: banks and payment platforms as single-color logos with a
 * note that they show no partnership.
 */
export function PlatformStrip() {
  const { platforms } = homeContent;
  return (
    <section aria-labelledby="platforms-title" className="bg-white py-12 md:py-16">
      <div className="container-page">
        <h2 id="platforms-title" className="text-center font-sans text-label font-medium text-navy">
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
