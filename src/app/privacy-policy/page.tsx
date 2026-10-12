import { staticPages } from "@/content/pages";
import { LegalPageLayout } from "@/components/legal/legal-page-layout";
import { buildStaticPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildStaticPageMetadata(staticPages.privacy);

export default function PrivacyPolicyPage() {
  return <LegalPageLayout documentKey="privacy" />;
}
