import { getFaqs, homepageFaqIds } from "@/content/faqs";
import { homeContent } from "@/content/home";
import { staticPages } from "@/content/pages";
import { JsonLd } from "@/components/seo/json-ld";
import { AboutBlock } from "@/components/sections/about-block";
import { ContactBand } from "@/components/sections/contact-band";
import { FaqSection } from "@/components/sections/faq-section";
import { Hero } from "@/components/sections/hero";
import { Principles } from "@/components/sections/principles";
import { ProcessSection } from "@/components/sections/process-steps";
import { SectorsGrid } from "@/components/sections/sectors-grid";
import { ServiceGroups } from "@/components/sections/service-groups";
import { Testimonials } from "@/components/sections/testimonials";
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
      <ServiceGroups />
      <ProcessSection
        id="process-title"
        tag={process.tag}
        title={process.title}
        description={process.description}
        steps={process.steps}
        padding="bottom"
      />
      <AboutBlock />
      <Principles />
      <SectorsGrid />
      <Testimonials />
      <FaqSection items={faqs} tag={faq.tag} title={faq.title} description={faq.description} padding="bottom" />
      <ContactBand />
    </>
  );
}
