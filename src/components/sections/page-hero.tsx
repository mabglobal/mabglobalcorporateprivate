import type { ReactNode } from "react";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import type { BreadcrumbTrailItem } from "@/lib/seo/structured-data";

interface PageHeroProps {
  breadcrumb: BreadcrumbTrailItem[];
  title: string;
  description?: string;
  actions?: ReactNode;
  aside?: ReactNode;
}

/** Opening navy band for inner pages; continues the header band. */
export function PageHero({ breadcrumb, title, description, actions, aside }: PageHeroProps) {
  return (
    <section aria-labelledby="page-title" className="on-dark bg-navy-deep">
      <div className="container-page pb-16 pt-6 md:pb-20">
        <Breadcrumb items={breadcrumb} />
        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className={aside ? "lg:col-span-7" : "lg:col-span-9"}>
            <h1
              id="page-title"
              className="text-[clamp(2rem,1.7rem+1.2vw,2.75rem)] leading-[1.12] tracking-[-0.024em] text-white"
            >
              {title}
            </h1>
            {description ? <p className="mt-4 max-w-2xl text-body text-white/75">{description}</p> : null}
            {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
          </div>
          {aside ? (
            <div className="text-ink [--focus-ring:var(--color-navy)] lg:col-span-5 lg:col-start-8">{aside}</div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
