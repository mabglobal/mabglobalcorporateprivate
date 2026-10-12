import { SectorPageLayout } from "@/components/sectors/sector-page-layout";
import { buildSectorMetadata } from "@/lib/seo/metadata";

export const metadata = buildSectorMetadata("technology-companies");

export default function TechnologyCompaniesIndustryPage() {
  return <SectorPageLayout slug="technology-companies" />;
}
