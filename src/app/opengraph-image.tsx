import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { brandColors } from "@/config/brand";
import { seoDefaults } from "@/config/seo";
import { siteConfig } from "@/config/site";

export const alt = seoDefaults.socialImageAlt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const fontDirectory = join(process.cwd(), "src/assets/fonts");
const [medium, regular] = await Promise.all([
  readFile(join(fontDirectory, "GoogleSansFlex-Medium.ttf")),
  readFile(join(fontDirectory, "GoogleSansFlex-Regular.ttf")),
]);

/** Default social sharing image used by every page. */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: brandColors.navyDeep,
          color: brandColors.white,
          fontFamily: "Google Sans Flex",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              display: "flex",
              position: "relative",
              backgroundColor: brandColors.white,
              color: brandColors.navy,
              fontSize: 30,
              fontWeight: 500,
              letterSpacing: 2,
              padding: "6px 14px",
              borderRadius: 6,
              borderBottom: `4px solid ${brandColors.accent}`,
            }}
          >
            MAB
          </div>
          <div style={{ display: "flex", fontSize: 32, fontWeight: 400 }}>Global Partners</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              display: "flex",
              fontSize: 76,
              fontWeight: 500,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 900,
            }}
          >
            Global işinizi sağlam temeller üzerine kurun.
          </div>
          <div style={{ display: "flex", fontSize: 30, fontWeight: 400, color: "rgba(255,255,255,0.75)" }}>
            {siteConfig.shortDescription}
          </div>
        </div>
        <div style={{ display: "flex", width: 120, height: 6, backgroundColor: brandColors.accent }} />
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Google Sans Flex", data: medium, weight: 500, style: "normal" },
        { name: "Google Sans Flex", data: regular, weight: 400, style: "normal" },
      ],
    },
  );
}
