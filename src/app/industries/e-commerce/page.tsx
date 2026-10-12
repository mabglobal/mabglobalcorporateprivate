import { SectorPageLayout } from "@/components/sectors/sector-page-layout";
import { buildSectorMetadata } from "@/lib/seo/metadata";

export const metadata = buildSectorMetadata("e-commerce");

export default function ECommerceIndustryPage() {
  return <SectorPageLayout slug="e-commerce" />;
}
