import { SectorPageLayout } from "@/components/sectors/sector-page-layout";
import { buildSectorMetadata } from "@/lib/seo/metadata";

export const metadata = buildSectorMetadata("kobiler-ve-kurumsal-isletmeler");

export default function KobilerVeKurumsalIsletmelerSectorPage() {
  return <SectorPageLayout slug="kobiler-ve-kurumsal-isletmeler" />;
}
