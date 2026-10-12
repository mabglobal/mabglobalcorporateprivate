import { SectorPageLayout } from "@/components/sectors/sector-page-layout";
import { buildSectorMetadata } from "@/lib/seo/metadata";

export const metadata = buildSectorMetadata("entrepreneurs-and-investors");

export default function EntrepreneursAndInvestorsIndustryPage() {
  return <SectorPageLayout slug="entrepreneurs-and-investors" />;
}
