import aboutColumns from "@/assets/images/about-columns.jpg";
import { routes } from "@/config/routes";
import { homeContent } from "@/content/home";
import { FactCards, FeaturePanel } from "@/components/ui/feature-panel";
import { TextLink } from "@/components/ui/text-link";

/** Company profile in the framed feature panel with verified figures. */
export function AboutBlock() {
  const { about } = homeContent;
  return (
    <section aria-labelledby="about-title" className="bg-white pb-20 md:pb-28 lg:pb-34">
      <div className="container-page">
        <FeaturePanel
          id="about-title"
          label={about.label}
          title={about.title}
          features={about.features}
          action={<TextLink href={routes.about}>{about.linkLabel}</TextLink>}
          image={aboutColumns}
          imageAlt={about.imageAlt}
          imageClassName="object-[50%_30%]"
          details={<FactCards groups={about.facts} />}
        />
      </div>
    </section>
  );
}
