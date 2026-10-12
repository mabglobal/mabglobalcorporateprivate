import { ServicePageLayout } from "@/components/services/service-page-layout";
import { buildServiceMetadata } from "@/lib/seo/metadata";

export const metadata = buildServiceMetadata("amerika-sirket-kurulusu");

export default function AmerikaSirketKurulusuPage() {
  return <ServicePageLayout slug="amerika-sirket-kurulusu" />;
}
