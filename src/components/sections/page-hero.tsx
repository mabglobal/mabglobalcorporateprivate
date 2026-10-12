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
  /** Light or outline-white buttons only: orange never sits on navy. */
  actions?: ReactNode;
}

/**
 * Navy opening band for inner pages, built like the homepage hero: large
 * bold title, a short line and two buttons on the left, the architectural
 * image on the right on wide screens. White on navy only.
 */
export function PageHero({ breadcrumb, title, description, actions }: PageHeroProps) {
  return (
    <section aria-labelledby="page-title" className="on-dark relative isolate overflow-hidden bg-navy-deep">
      <div className="absolute bottom-0 right-0 -z-10 hidden aspect-[3/1] w-[64%] lg:block">
        <Image src={heroArchitecture} alt="" fill sizes="64vw" className="object-cover object-bottom" />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(90deg,var(--color-navy-deep)_0%,color-mix(in_srgb,var(--color-navy-deep)_75%,transparent)_25%,transparent_55%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(0deg,var(--color-navy-deep)_0%,transparent_45%)]"
        />
      </div>
      <div className="container-page flex flex-col justify-center pb-16 pt-10 md:pb-24 md:pt-14 lg:min-h-[34rem]">
        <Breadcrumb items={breadcrumb} tone="dark" />
        <h1 id="page-title" className="mt-8 max-w-3xl text-display text-white">
          {title}
        </h1>
        {description ? (
          <p data-single-line="" className="mt-6 text-body text-white md:text-lead">
            {description}
          </p>
        ) : null}
        {actions ? <div className="mt-9 flex flex-wrap gap-3">{actions}</div> : null}
      </div>
    </section>
  );
}
