import { ServicePageLayout } from "@/components/services/service-page-layout";
import { buildServiceMetadata } from "@/lib/seo/metadata";

export const metadata = buildServiceMetadata("uluslararasi-is-danismanligi");

export default function UluslararasiIsDanismanligiPage() {
  return <ServicePageLayout slug="uluslararasi-is-danismanligi" />;
}
