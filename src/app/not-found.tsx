import type { Metadata } from "next";
import { routes } from "@/config/routes";
import { ButtonLink } from "@/components/ui/button-link";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section aria-labelledby="not-found-title" className="on-dark bg-navy-deep">
      <div className="container-page pb-24 pt-16 md:pb-32 md:pt-24">
        <p className="text-caption font-medium uppercase tracking-[0.14em] text-white">Error 404</p>
        <h1 id="not-found-title" className="mt-4 text-heading text-white">
          Page Not Found
        </h1>
        <p data-single-line="" className="mt-3 text-body text-white">
          The page may have moved. Return to the homepage or browse our services.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href={routes.home} variant="light" icon="arrow-right">
            Back to Home
          </ButtonLink>
          <ButtonLink href={routes.services} variant="outline-light" icon="none">
            View Services
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
