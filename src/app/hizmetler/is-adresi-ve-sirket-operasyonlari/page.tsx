import { ServicePageLayout } from "@/components/services/service-page-layout";
import { buildServiceMetadata } from "@/lib/seo/metadata";

export const metadata = buildServiceMetadata("is-adresi-ve-sirket-operasyonlari");

export default function IsAdresiVeSirketOperasyonlariPage() {
  return <ServicePageLayout slug="is-adresi-ve-sirket-operasyonlari" />;
}
