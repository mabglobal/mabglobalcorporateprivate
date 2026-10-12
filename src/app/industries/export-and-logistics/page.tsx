import { SectorPageLayout } from "@/components/sectors/sector-page-layout";
import { buildSectorMetadata } from "@/lib/seo/metadata";

export const metadata = buildSectorMetadata("export-and-logistics");

export default function ExportAndLogisticsIndustryPage() {
  return <SectorPageLayout slug="export-and-logistics" />;
}
