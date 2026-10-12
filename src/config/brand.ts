/**
 * Brand palette for contexts that cannot read CSS custom properties
 * (generated Open Graph images and icons). The authoritative tokens live in
 * src/styles/tokens.css; tests/unit/brand-tokens.test.ts keeps both in sync.
 */
export const brandColors = {
  navy: "#262F40",
  navyDeep: "#1C2432",
  slate: "#526071",
  muted: "#697586",
  surface: "#F3F5F7",
  surfaceStrong: "#E9EDF2",
  line: "#DCE2E8",
  white: "#FFFFFF",
  ink: "#202938",
  accent: "#F45800",
} as const;

export type BrandColor = keyof typeof brandColors;
