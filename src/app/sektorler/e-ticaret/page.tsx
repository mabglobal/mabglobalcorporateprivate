import { SectorPageLayout } from "@/components/sectors/sector-page-layout";
import { buildSectorMetadata } from "@/lib/seo/metadata";

export const metadata = buildSectorMetadata("e-ticaret");

export default function ETicaretSectorPage() {
  return <SectorPageLayout slug="e-ticaret" />;
}
