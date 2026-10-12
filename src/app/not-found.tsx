import type { Metadata } from "next";
import { routes } from "@/config/routes";
import { ButtonLink } from "@/components/ui/button-link";

export const metadata: Metadata = {
  title: "Sayfa bulunamadı",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section aria-labelledby="not-found-title" className="on-dark bg-navy-deep">
      <div className="container-page pb-24 pt-16 md:pb-32">
        <p className="text-caption text-white/60">Hata 404</p>
        <h1 id="not-found-title" className="mt-4 text-heading text-white">
          Aradığınız sayfa bulunamadı.
        </h1>
        <p className="mt-3 max-w-xl text-body text-white/75">
          Sayfa taşınmış ya da adresi hatalı yazılmış olabilir. Ana sayfaya dönün veya hizmetleri inceleyin.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href={routes.home} variant="light">
            Ana Sayfaya Dönün
          </ButtonLink>
          <ButtonLink href={routes.services} variant="outline-light">
            Hizmetleri İnceleyin
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
