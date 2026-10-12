import { cacheLife } from "next/cache";

/**
 * Current year for the copyright line. Cached for a day so the footer stays
 * part of the prerendered shell while the year still updates automatically.
 */
export async function CopyrightYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}
