import type { MetadataRoute } from "next";
import { brandColors } from "@/config/brand";
import { siteConfig } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "MAB Global",
    description: siteConfig.shortDescription,
    lang: siteConfig.language,
    start_url: "/",
    display: "browser",
    background_color: brandColors.white,
    theme_color: brandColors.navyDeep,
    icons: [
      { src: "/icon.svg", type: "image/svg+xml", sizes: "any" },
      { src: "/apple-icon", type: "image/png", sizes: "180x180" },
    ],
  };
}
