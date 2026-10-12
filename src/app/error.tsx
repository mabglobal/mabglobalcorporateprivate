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
      <div className="container-page pb-24 pt-16 md:pb-32 md:pt-24">
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
            className="inline-flex min-h-13 items-center whitespace-nowrap rounded-control bg-white px-6 text-[0.8125rem] font-bold uppercase tracking-[0.06em] text-navy hover:bg-white/90"
          >
            Try Again
          </button>
          <Link
            href={routes.home}
            className="inline-flex min-h-13 items-center whitespace-nowrap rounded-control border border-white px-6 text-[0.8125rem] font-bold uppercase tracking-[0.06em] text-white hover:bg-white hover:text-navy"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
