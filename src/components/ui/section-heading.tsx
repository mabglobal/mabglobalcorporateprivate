import type { ReactNode } from "react";
import { cn } from "@/lib/utilities/cn";
import { Tag } from "./tag";

interface SectionHeadingProps {
  tag?: string;
  title: string;
  /** Optional second part of the title, set on its own line in the accent color. */
  accent?: string;
  description?: string;
  /** Optional element aligned to the end of the heading row (for example a link). */
  action?: ReactNode;
  id?: string;
  as?: "h1" | "h2";
}

/** Section opening: framed label, heading with optional accent line, short description. */
export function SectionHeading({ tag, title, accent, description, action, id, as: Heading = "h2" }: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        {tag ? <Tag>{tag}</Tag> : null}
        <Heading id={id} className={cn("text-heading text-navy", tag ? "mt-5" : "")}>
          {title}
          {accent ? (
            <>
              <br />
              <span className="text-accent">{accent}</span>
            </>
          ) : null}
        </Heading>
        {description ? <p className="mt-3 text-body text-slate">{description}</p> : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
