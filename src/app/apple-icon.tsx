import { ImageResponse } from "next/og";
import { brandColors } from "@/config/brand";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Home screen icon. Mirrors src/app/icon.svg. */
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
        <svg width="132" height="132" viewBox="0 0 64 64">
          <path
            d="M15 44V20h5.6l7.4 13.2L35.4 20H41v24h-5.2V29.6L29.6 40.4h-3.2L20.2 29.6V44z"
            fill={brandColors.white}
          />
          <rect x="45" y="38" width="6" height="6" rx="1.5" fill={brandColors.white} />
        </svg>
      </div>
    ),
    size,
  );
}
