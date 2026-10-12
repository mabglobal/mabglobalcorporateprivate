import {
  Building2,
  CalendarCheck,
  Calculator,
  CircleHelp,
  Compass,
  Cpu,
  Factory,
  FileCheck,
  Globe,
  Landmark,
  Laptop,
  Layers,
  MapPin,
  ReceiptText,
  Rocket,
  ShieldCheck,
  Ship,
  ShoppingBag,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "@/types/content";
import { cn } from "@/lib/utilities/cn";

const icons: Record<IconName, LucideIcon> = {
  building: Building2,
  landmark: Landmark,
  receipt: ReceiptText,
  calculator: Calculator,
  shield: ShieldCheck,
  "map-pin": MapPin,
  globe: Globe,
  "shopping-bag": ShoppingBag,
  ship: Ship,
  laptop: Laptop,
  cpu: Cpu,
  rocket: Rocket,
  factory: Factory,
  compass: Compass,
  layers: Layers,
  calendar: CalendarCheck,
  "file-check": FileCheck,
  help: CircleHelp,
};

export function Icon({ name, className }: { name: IconName; className?: string }) {
  const Component = icons[name];
  return <Component aria-hidden="true" strokeWidth={1.7} className={className} />;
}

/**
 * Rounded square icon box. Navy with a white icon on light surfaces,
 * translucent white with a white icon on navy surfaces. Never orange on navy.
 */
export function IconTile({
  name,
  tone = "light",
  size = "md",
}: {
  name: IconName;
  tone?: "light" | "dark";
  size?: "sm" | "md";
}) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-tile text-white",
        size === "md" ? "size-10" : "size-8",
        tone === "light" ? "bg-navy" : "bg-white/12",
      )}
    >
      <Icon name={name} className={size === "md" ? "size-5" : "size-4"} />
    </span>
  );
}
