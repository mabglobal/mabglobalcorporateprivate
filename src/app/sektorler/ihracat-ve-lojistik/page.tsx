import { SectorPageLayout } from "@/components/sectors/sector-page-layout";
import { buildSectorMetadata } from "@/lib/seo/metadata";

export const metadata = buildSectorMetadata("ihracat-ve-lojistik");

export default function IhracatVeLojistikSectorPage() {
  return <SectorPageLayout slug="ihracat-ve-lojistik" />;
}
