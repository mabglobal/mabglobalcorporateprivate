import { ServicePageLayout } from "@/components/services/service-page-layout";
import { buildServiceMetadata } from "@/lib/seo/metadata";

export const metadata = buildServiceMetadata("muhasebe-hizmetleri");

export default function MuhasebeHizmetleriPage() {
  return <ServicePageLayout slug="muhasebe-hizmetleri" />;
}
