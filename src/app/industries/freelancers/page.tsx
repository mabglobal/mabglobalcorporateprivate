import { SectorPageLayout } from "@/components/sectors/sector-page-layout";
import { buildSectorMetadata } from "@/lib/seo/metadata";

export const metadata = buildSectorMetadata("freelancers");

export default function FreelancersIndustryPage() {
  return <SectorPageLayout slug="freelancers" />;
}
