import { ServicePageLayout } from "@/components/services/service-page-layout";
import { buildServiceMetadata } from "@/lib/seo/metadata";

export const metadata = buildServiceMetadata("tax-advisory");

export default function TaxAdvisoryPage() {
  return <ServicePageLayout slug="tax-advisory" />;
}
