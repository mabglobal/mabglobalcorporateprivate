"use client";

import Link from "next/link";
import { useEffect } from "react";
import { contactConfig, mailtoHref } from "@/config/contact";
import { routes } from "@/config/routes";

export default function ErrorPage({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section aria-labelledby="error-title" className="on-dark bg-navy-deep">
      <div className="container-page pb-24 pt-36 md:pb-32 md:pt-44">
        <h1 id="error-title" className="text-heading text-white">
          Something Went Wrong
        </h1>
        <p className="mt-5 text-lead text-white">
          Reload the page. If the problem continues email us at{" "}
          <a href={mailtoHref} className="text-white underline underline-offset-4">
            {contactConfig.email}
          </a>
          .
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => retry()}
            className="inline-flex min-h-12 items-center whitespace-nowrap rounded-control bg-white px-6 text-label font-medium text-navy hover:bg-white/90"
          >
            Try Again
          </button>
          <Link
            href={routes.home}
            className="inline-flex min-h-12 items-center whitespace-nowrap rounded-control border border-white/25 bg-navy-deep/40 px-6 text-label font-medium text-white hover:border-white/60"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
