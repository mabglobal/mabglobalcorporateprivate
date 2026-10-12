import { SectorPageLayout } from "@/components/sectors/sector-page-layout";
import { buildSectorMetadata } from "@/lib/seo/metadata";

export const metadata = buildSectorMetadata("girisimciler-ve-yatirimcilar");

export default function GirisimcilerVeYatirimcilarSectorPage() {
  return <SectorPageLayout slug="girisimciler-ve-yatirimcilar" />;
}
