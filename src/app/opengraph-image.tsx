import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { brandColors } from "@/config/brand";
import { logoArt } from "@/config/logo";
import { seoDefaults } from "@/config/seo";
import { siteConfig } from "@/config/site";

export const alt = seoDefaults.socialImageAlt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const fontDirectory = join(process.cwd(), "src/assets/fonts");
// The OpenType masters are kept for this image; the site uses WOFF2 subsets.
const [bold, regular] = await Promise.all([
  readFile(join(fontDirectory, "TeXGyreAdventor-Bold.otf")),
  readFile(join(fontDirectory, "TeXGyreAdventor-Regular.otf")),
]);

const lockup = logoArt.lockup;

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
          backgroundImage: `linear-gradient(180deg, ${brandColors.navyDeep} 0%, ${brandColors.navy} 100%)`,
          color: brandColors.white,
          fontFamily: "TeX Gyre Adventor",
        }}
      >
        <svg width="300" height={Math.round((300 * lockup.height) / lockup.width)} viewBox={lockup.viewBox}>
          <g transform={lockup.transform} fill={brandColors.white}>
            {lockup.paths.map((d) => (
              <path key={d.slice(0, 24)} d={d} />
            ))}
          </g>
        </svg>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 900,
            }}
          >
            Invest in the United States With the Right Structure
          </div>
          <div style={{ display: "flex", fontSize: 30, fontWeight: 400, color: "rgba(255,255,255,0.75)" }}>
            {siteConfig.shortDescription}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "rgba(255,255,255,0.6)" }}>mabglobalpartners.com</div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "TeX Gyre Adventor", data: bold, weight: 700, style: "normal" },
        { name: "TeX Gyre Adventor", data: regular, weight: 400, style: "normal" },
      ],
    },
  );
}
