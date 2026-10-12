import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { homeContent } from "@/content/home";
import { Icon } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";

/** Three framed principle cards and one navy call-to-action card. */
export function Principles() {
  const { principles } = homeContent;
  return (
    <section aria-labelledby="principles-title" className="bg-white pb-20 md:pb-28 lg:pb-34">
      <div className="container-page">
        <SectionHeading id="principles-title" tag={principles.tag} title={principles.title} />
        <ul className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {principles.items.map((item) => (
            <li key={item.title} className="frame flex min-h-[220px] flex-col justify-between gap-8 rounded-card p-6">
              <Icon name={item.icon} className="size-6 text-accent-strong" />
              <div>
                <h3 className="text-title text-navy">{item.title}</h3>
                <p className="mt-2 text-label text-slate">{item.description}</p>
              </div>
            </li>
          ))}
          <li>
            <Link
              href={principles.cta.href}
              className="on-dark group flex h-full min-h-[220px] flex-col justify-between gap-8 rounded-card bg-navy p-6 transition-colors hover:bg-navy-deep"
            >
              <ArrowUpRight
                aria-hidden="true"
                className="size-6 self-end text-white transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
              <span>
                <span className="block font-display text-title text-white">{principles.cta.title}</span>
                <span className="mt-2 block text-label text-white/80">{principles.cta.description}</span>
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
