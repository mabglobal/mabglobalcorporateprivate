const formatter = new Intl.DateTimeFormat("tr-TR", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "Europe/Istanbul",
});

/** Formats an ISO calendar date (YYYY-MM-DD) as a Turkish long date. */
export function formatDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  if (!year || !month || !day) {
    throw new Error(`Invalid ISO date "${isoDate}"`);
  }
  return formatter.format(new Date(Date.UTC(year, month - 1, day, 12)));
}
