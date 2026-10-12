import { ServicePageLayout } from "@/components/services/service-page-layout";
import { buildServiceMetadata } from "@/lib/seo/metadata";

export const metadata = buildServiceMetadata("accounting");

export default function AccountingPage() {
  return <ServicePageLayout slug="accounting" />;
}
