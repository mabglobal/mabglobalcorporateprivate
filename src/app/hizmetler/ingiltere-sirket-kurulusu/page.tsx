import { ServicePageLayout } from "@/components/services/service-page-layout";
import { buildServiceMetadata } from "@/lib/seo/metadata";

export const metadata = buildServiceMetadata("ingiltere-sirket-kurulusu");

export default function IngiltereSirketKurulusuPage() {
  return <ServicePageLayout slug="ingiltere-sirket-kurulusu" />;
}
