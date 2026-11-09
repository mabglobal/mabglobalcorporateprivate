import { ServicePageLayout } from "@/components/services/service-page-layout";
import { buildServiceMetadata } from "@/lib/seo/metadata";

export const metadata = buildServiceMetadata("uk-company-services");

export default function UkCompanyServicesPage() {
  return <ServicePageLayout slug="uk-company-services" />;
}
