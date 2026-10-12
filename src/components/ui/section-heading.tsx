import type { ReactNode } from "react";
import { cn } from "@/lib/utilities/cn";

export function Eyebrow({
  children,
  tone = "light",
}: {
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <p className={cn("eyebrow", tone === "light" ? "text-slate" : "text-white/75")}>
      <span aria-hidden="true" className="size-2 rounded-[1px] bg-accent" />
      {children}
    </p>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
  /** Optional element aligned to the end of the heading row (for example a link). */
  action?: ReactNode;
  id?: string;
  as?: "h1" | "h2";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  action,
  id,
  as: Heading = "h2",
}: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}
        <Heading
          id={id}
          className={cn(
            "mt-5 text-heading",
            tone === "light" ? "text-navy" : "text-white",
          )}
        >
          {title}
        </Heading>
        {description ? (
          <p
            className={cn(
              "mt-5 text-lead",
              tone === "light" ? "text-slate" : "text-white/75",
            )}
          >
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
