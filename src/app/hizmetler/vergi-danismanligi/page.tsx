import { ServicePageLayout } from "@/components/services/service-page-layout";
import { buildServiceMetadata } from "@/lib/seo/metadata";

export const metadata = buildServiceMetadata("vergi-danismanligi");

export default function VergiDanismanligiPage() {
  return <ServicePageLayout slug="vergi-danismanligi" />;
}
