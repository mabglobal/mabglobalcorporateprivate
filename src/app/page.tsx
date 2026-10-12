import { getFaqs, homepageFaqIds } from "@/content/faqs";
import { homeContent } from "@/content/home";
import { staticPages } from "@/content/pages";
import { JsonLd } from "@/components/seo/json-ld";
import { Comparison } from "@/components/sections/comparison";
import { Facts } from "@/components/sections/facts";
import { FaqSection } from "@/components/sections/faq-section";
import { Hero } from "@/components/sections/hero";
import { ProcessSection } from "@/components/sections/process-steps";
import { SectorsGrid } from "@/components/sections/sectors-grid";
import { ServicesGrid } from "@/components/sections/services-grid";
import { Testimonials } from "@/components/sections/testimonials";
import { WhySection } from "@/components/sections/why-section";
import { buildStaticPageMetadata } from "@/lib/seo/metadata";
import { faqNode, graph, organizationNode, webPageNode, websiteNode } from "@/lib/seo/structured-data";

const page = staticPages.home;

export const metadata = buildStaticPageMetadata(page);

export default function HomePage() {
  const faqs = getFaqs(homepageFaqIds);
  const { process, faq } = homeContent;

  return (
    <>
      <JsonLd
        data={graph([
          organizationNode(),
          websiteNode(),
          webPageNode({ path: page.path, name: page.title, description: page.description, dateModified: page.updatedAt }),
          faqNode(faqs, page.path),
        ])}
      />
      <Hero />
      <WhySection />
      <ProcessSection
        id="process-title"
        title={process.title}
        description={process.description}
        steps={process.steps}
        padding="bottom"
      />
      <ServicesGrid />
      <SectorsGrid />
      <Facts />
      <Comparison />
      <Testimonials />
      <FaqSection items={faqs} title={faq.title} description={faq.description} padding="bottom" />
    </>
  );
}
