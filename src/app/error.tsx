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
    <section aria-labelledby="error-title" className="section-y bg-surface">
      <div className="container-page max-w-3xl">
        <h1 id="error-title" className="text-heading text-navy">
          Beklenmeyen bir hata oluştu.
        </h1>
        <p className="mt-5 text-lead text-slate">
          Sayfayı yeniden yüklemeyi deneyebilirsiniz. Sorun devam ederse bize{" "}
          <a href={mailtoHref} className="text-navy underline underline-offset-4">
            {contactConfig.email}
          </a>{" "}
          adresinden ulaşabilirsiniz.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={() => retry()}
            className="inline-flex min-h-12 items-center rounded-control bg-accent px-6 text-label font-medium text-navy-deep hover:bg-accent-hover"
          >
            Tekrar dene
          </button>
          <Link
            href={routes.home}
            className="inline-flex min-h-12 items-center rounded-control border border-line bg-white px-6 text-label font-medium text-navy hover:border-navy"
          >
            Ana sayfaya dön
          </Link>
        </div>
      </div>
    </section>
  );
}
