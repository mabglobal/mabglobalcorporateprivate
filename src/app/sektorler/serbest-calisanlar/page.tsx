import { SectorPageLayout } from "@/components/sectors/sector-page-layout";
import { buildSectorMetadata } from "@/lib/seo/metadata";

export const metadata = buildSectorMetadata("serbest-calisanlar");

export default function SerbestCalisanlarSectorPage() {
  return <SectorPageLayout slug="serbest-calisanlar" />;
}
