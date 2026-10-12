import type { Metadata } from "next";
import { routes } from "@/config/routes";
import { ButtonLink } from "@/components/ui/button-link";

export const metadata: Metadata = {
  title: "Sayfa bulunamadı",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section aria-labelledby="not-found-title" className="bg-white">
      <div className="container-page pb-24 pt-16 md:pb-32">
        <p className="text-caption text-slate">Hata 404</p>
        <h1 id="not-found-title" className="mt-4 text-heading text-navy">
          Aradığınız sayfa bulunamadı.
        </h1>
        <p className="mt-3 max-w-xl text-body text-slate">
          Sayfa taşınmış ya da adresi hatalı yazılmış olabilir. Ana sayfaya dönün veya hizmetleri inceleyin.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href={routes.home} variant="accent">
            Ana Sayfaya Dönün
          </ButtonLink>
          <ButtonLink href={routes.services} variant="outline">
            Hizmetleri İnceleyin
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
