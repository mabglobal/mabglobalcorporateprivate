/**
 * Brand palette for contexts that cannot read CSS custom properties
 * (generated Open Graph images and icons). The authoritative tokens live in
 * src/styles/tokens.css; tests/unit/brand-tokens.test.ts keeps both in sync.
 */
export const brandColors = {
  navy: "#12264A",
  navyDeep: "#0A1A36",
  line: "#C8D3EA",
  white: "#FFFFFF",
  ink: "#0D1B33",
  accent: "#F45800",
} as const;

export type BrandColor = keyof typeof brandColors;
