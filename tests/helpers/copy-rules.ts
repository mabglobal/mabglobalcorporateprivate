import { contactConfig } from "@/config/contact";

/**
 * Turkish copy rules for public-facing text (see docs/content-model.md).
 * The official address is exempt because it is reproduced verbatim.
 */
export const forbiddenCopyPatterns: { label: string; pattern: RegExp }[] = [
  { label: "\"değil\"", pattern: /değil/u },
  { label: "\"ötesinde\"", pattern: /ötesinde/u },
  { label: "\"ayrıca\"", pattern: /ayrıca/u },
  { label: "\"sonuç olarak\"", pattern: /sonuç olarak/u },
  { label: "colon", pattern: /:/u },
  { label: "em dash", pattern: /—/u },
  { label: "en dash", pattern: /–/u },
];

export function copyViolations(text: string): string[] {
  const normalized = text
    .replaceAll(contactConfig.address.full, "")
    .replaceAll(contactConfig.address.streetAddress, "")
    .toLocaleLowerCase("tr");
  return forbiddenCopyPatterns
    .filter(({ pattern }) => pattern.test(normalized))
    .map(({ label }) => label);
}
