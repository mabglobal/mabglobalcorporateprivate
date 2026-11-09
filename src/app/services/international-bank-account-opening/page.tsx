import { ServicePageLayout } from "@/components/services/service-page-layout";
import { buildServiceMetadata } from "@/lib/seo/metadata";

export const metadata = buildServiceMetadata("international-bank-account-opening");

export default function InternationalBankAccountOpeningPage() {
  return <ServicePageLayout slug="international-bank-account-opening" />;
}
