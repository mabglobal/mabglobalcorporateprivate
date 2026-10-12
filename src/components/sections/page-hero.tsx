import type { ReactNode } from "react";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { Eyebrow } from "@/components/ui/section-heading";
import type { BreadcrumbTrailItem } from "@/lib/seo/structured-data";

interface PageHeroProps {
  breadcrumb: BreadcrumbTrailItem[];
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: ReactNode;
  aside?: ReactNode;
}

/** Opening section for inner pages. */
export function PageHero({
  breadcrumb,
  eyebrow,
  title,
  description,
  actions,
  aside,
}: PageHeroProps) {
  return (
    <section aria-labelledby="page-title" className="bg-surface">
      <div className="container-page pb-20 pt-10 md:pb-24 lg:pb-28">
        <Breadcrumb items={breadcrumb} />
        <div className="mt-14 grid gap-12 md:mt-20 lg:grid-cols-12 lg:gap-10">
          <div className={aside ? "lg:col-span-7" : "lg:col-span-9"}>
            {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
            <h1
              id="page-title"
              className="mt-5 text-[clamp(2.25rem,1.6rem+2.4vw,3.75rem)] leading-[1.06] tracking-[-0.028em] text-navy"
            >
              {title}
            </h1>
            {description ? (
              <p className="mt-6 max-w-2xl text-lead text-slate">{description}</p>
            ) : null}
            {actions ? <div className="mt-10 flex flex-wrap gap-3">{actions}</div> : null}
          </div>
          {aside ? <div className="lg:col-span-5 lg:col-start-8">{aside}</div> : null}
        </div>
      </div>
    </section>
  );
}
