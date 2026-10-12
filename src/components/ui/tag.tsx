import type { ReactNode } from "react";
import { cn } from "@/lib/utilities/cn";

/** Small framed label shown above section headings. */
export function Tag({ children, tone = "light" }: { children: ReactNode; tone?: "light" | "dark" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center whitespace-nowrap rounded-chip border px-3 py-1 text-caption",
        tone === "light" ? "border-line bg-white text-navy" : "border-white/25 text-white",
      )}
    >
      {children}
    </span>
  );
}
