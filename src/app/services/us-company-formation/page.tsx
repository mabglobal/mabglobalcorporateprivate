import { ServicePageLayout } from "@/components/services/service-page-layout";
import { buildServiceMetadata } from "@/lib/seo/metadata";

export const metadata = buildServiceMetadata("us-company-formation");

export default function UsCompanyFormationPage() {
  return <ServicePageLayout slug="us-company-formation" />;
}
