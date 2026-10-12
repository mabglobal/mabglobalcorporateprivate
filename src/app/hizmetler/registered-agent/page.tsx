import { ServicePageLayout } from "@/components/services/service-page-layout";
import { buildServiceMetadata } from "@/lib/seo/metadata";

export const metadata = buildServiceMetadata("registered-agent");

export default function RegisteredAgentPage() {
  return <ServicePageLayout slug="registered-agent" />;
}
