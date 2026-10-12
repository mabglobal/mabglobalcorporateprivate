import { ImageResponse } from "next/og";
import { brandColors } from "@/config/brand";
import { logoArt } from "@/config/logo";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const letters = logoArt.letters;

/** Home screen icon: the MAB letters on navy. Mirrors src/app/icon.svg. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: brandColors.navy,
        }}
      >
        <svg width="136" height={Math.round((136 * letters.height) / letters.width)} viewBox={letters.viewBox}>
          <g transform={letters.transform} fill={brandColors.white}>
            {letters.paths.map((d) => (
              <path key={d.slice(0, 24)} d={d} />
            ))}
          </g>
        </svg>
      </div>
    ),
    size,
  );
}
