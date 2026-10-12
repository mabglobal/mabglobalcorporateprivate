import Image from "next/image";
import type { ReactNode } from "react";
import heroArchitecture from "@/assets/images/hero-architecture.jpg";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import type { BreadcrumbTrailItem } from "@/lib/seo/structured-data";

interface PageHeroProps {
  breadcrumb: BreadcrumbTrailItem[];
  title: string;
  /** One line under the title. */
  description?: string;
  /** Light or outline-light buttons only: orange never sits on navy. */
  actions?: ReactNode;
}

/**
 * Navy opening band for inner pages under the solid header. It repeats the
 * architectural image faintly on wide screens. White on navy only.
 */
export function PageHero({ breadcrumb, title, description, actions }: PageHeroProps) {
  return (
    <section aria-labelledby="page-title" className="on-dark relative isolate overflow-hidden bg-navy-deep">
      <div aria-hidden="true" className="absolute bottom-0 right-0 -z-20 hidden aspect-[3/1] w-[62%] opacity-45 lg:block">
        <Image src={heroArchitecture} alt="" fill sizes="62vw" className="object-cover object-bottom" />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 hidden bg-[linear-gradient(90deg,var(--color-navy-deep)_38%,transparent_85%)] lg:block"
      />
      <div className="container-page pb-14 pt-12 md:pb-20 md:pt-16">
        <Breadcrumb items={breadcrumb} tone="dark" />
        <h1
          id="page-title"
          className="mt-8 max-w-5xl text-[clamp(2.125rem,1.75rem+1.4vw,3rem)] leading-[1.1] tracking-[-0.01em] text-white"
        >
          {title}
        </h1>
        {description ? (
          <p data-single-line="" className="mt-4 text-body text-white">
            {description}
          </p>
        ) : null}
        {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
      </div>
    </section>
  );
}
