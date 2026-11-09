import { ServicePageLayout } from "@/components/services/service-page-layout";
import { buildServiceMetadata } from "@/lib/seo/metadata";

export const metadata = buildServiceMetadata("europe-company-services");

export default function EuropeCompanyServicesPage() {
  return <ServicePageLayout slug="europe-company-services" />;
}
