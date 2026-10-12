import type { Metadata } from "next";
import { routes } from "@/config/routes";
import { ButtonLink } from "@/components/ui/button-link";
import { Eyebrow } from "@/components/ui/section-heading";
import { TextLink } from "@/components/ui/text-link";

export const metadata: Metadata = {
  title: "Sayfa bulunamadı",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section aria-labelledby="not-found-title" className="section-y bg-surface">
      <div className="container-page max-w-3xl">
        <Eyebrow>Hata 404</Eyebrow>
        <h1 id="not-found-title" className="mt-5 text-heading text-navy">
          Aradığınız sayfa bulunamadı.
        </h1>
        <p className="mt-5 text-lead text-slate">
          Sayfa taşınmış ya da adresi hatalı yazılmış olabilir. Ana sayfaya dönebilir veya
          hizmetlerimizi inceleyebilirsiniz.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <ButtonLink href={routes.home}>Ana sayfaya dön</ButtonLink>
          <TextLink href={routes.services}>Hizmetleri inceleyin</TextLink>
        </div>
      </div>
    </section>
  );
}
