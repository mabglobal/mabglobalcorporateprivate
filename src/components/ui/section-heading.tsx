import type { ReactNode } from "react";
import type { IconName } from "@/types/content";
import { cn } from "@/lib/utilities/cn";
import { IconTile } from "./icon";

interface SectionHeadingProps {
  icon?: IconName;
  title: string;
  description?: string;
  tone?: "light" | "dark";
  /** Optional element aligned to the end of the heading row (for example a link). */
  action?: ReactNode;
  id?: string;
  as?: "h1" | "h2";
}

/** Section opening used across the site: icon box, short heading, short description. */
export function SectionHeading({
  icon,
  title,
  description,
  tone = "light",
  action,
  id,
  as: Heading = "h2",
}: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div className="max-w-xl">
        {icon ? <IconTile name={icon} tone={tone} /> : null}
        <Heading
          id={id}
          className={cn("text-heading", icon ? "mt-5" : "", tone === "light" ? "text-navy" : "text-white")}
        >
          {title}
        </Heading>
        {description ? (
          <p className={cn("mt-3 text-body", tone === "light" ? "text-slate" : "text-white/75")}>
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
