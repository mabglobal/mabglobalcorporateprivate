import { ServicePageLayout } from "@/components/services/service-page-layout";
import { buildServiceMetadata } from "@/lib/seo/metadata";

export const metadata = buildServiceMetadata("uk-company-formation");

export default function UkCompanyFormationPage() {
  return <ServicePageLayout slug="uk-company-formation" />;
}
