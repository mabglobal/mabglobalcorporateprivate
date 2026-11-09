import { ServicePageLayout } from "@/components/services/service-page-layout";
import { buildServiceMetadata } from "@/lib/seo/metadata";

export const metadata = buildServiceMetadata("amazon-and-e-commerce");

export default function AmazonAndECommercePage() {
  return <ServicePageLayout slug="amazon-and-e-commerce" />;
}
