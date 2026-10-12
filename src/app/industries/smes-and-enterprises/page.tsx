import { SectorPageLayout } from "@/components/sectors/sector-page-layout";
import { buildSectorMetadata } from "@/lib/seo/metadata";

export const metadata = buildSectorMetadata("smes-and-enterprises");

export default function SmesAndEnterprisesIndustryPage() {
  return <SectorPageLayout slug="smes-and-enterprises" />;
}
