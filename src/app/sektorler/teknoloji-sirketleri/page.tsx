import { SectorPageLayout } from "@/components/sectors/sector-page-layout";
import { buildSectorMetadata } from "@/lib/seo/metadata";

export const metadata = buildSectorMetadata("teknoloji-sirketleri");

export default function TeknolojiSirketleriSectorPage() {
  return <SectorPageLayout slug="teknoloji-sirketleri" />;
}
