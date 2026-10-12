import { ServicePageLayout } from "@/components/services/service-page-layout";
import { buildServiceMetadata } from "@/lib/seo/metadata";

export const metadata = buildServiceMetadata("business-address-and-operations");

export default function BusinessAddressAndOperationsPage() {
  return <ServicePageLayout slug="business-address-and-operations" />;
}
