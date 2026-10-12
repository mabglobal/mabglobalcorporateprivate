import { ServicePageLayout } from "@/components/services/service-page-layout";
import { buildServiceMetadata } from "@/lib/seo/metadata";

export const metadata = buildServiceMetadata("international-business-consulting");

export default function InternationalBusinessConsultingPage() {
  return <ServicePageLayout slug="international-business-consulting" />;
}
