import { homeContent } from "@/content/home";

/**
 * White strip under the hero, laid out like the "As seen on" logo wall of
 * behringeb5.com. It lists filings and services the firm handles, set as
 * bold wordmarks; no press or partner logos are used because none are
 * verified.
 */
export function CapabilityStrip() {
  const { capabilities } = homeContent;
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
              className="flex min-h-12 items-center justify-center whitespace-nowrap text-center font-display text-[clamp(1.0625rem,0.9rem+0.5vw,1.3125rem)] font-bold leading-tight text-navy"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
