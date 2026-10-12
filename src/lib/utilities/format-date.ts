// en-GB order ("12 October 2026") avoids the comma of the US long format.
const formatter = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "Europe/Istanbul",
});

/** Formats an ISO calendar date (YYYY-MM-DD) as a long English date. */
export function formatDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  if (!year || !month || !day) {
    throw new Error(`Invalid ISO date "${isoDate}"`);
  }
  return formatter.format(new Date(Date.UTC(year, month - 1, day, 12)));
}
