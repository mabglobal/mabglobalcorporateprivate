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

/** White opening section for inner pages. */
export function PageHero({ breadcrumb, title, description, actions, aside }: PageHeroProps) {
  return (
    <section aria-labelledby="page-title" className="bg-white">
      <div className="container-page pb-6 pt-6 md:pb-8">
        <Breadcrumb items={breadcrumb} />
        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className={aside ? "lg:col-span-7" : "lg:col-span-9"}>
            <h1 id="page-title" className="text-[clamp(2.125rem,1.75rem+1.4vw,3rem)] leading-[1.1] text-navy">
              {title}
            </h1>
            {description ? <p className="mt-4 max-w-2xl text-body text-slate">{description}</p> : null}
            {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
          </div>
          {aside ? <div className="lg:col-span-5 lg:col-start-8">{aside}</div> : null}
        </div>
      </div>
    </section>
  );
}
