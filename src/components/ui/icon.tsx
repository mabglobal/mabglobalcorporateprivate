import {
  Building2,
  CalendarCheck,
  Calculator,
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
};

export function Icon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  const Component = icons[name];
  return (
    <Component aria-hidden="true" strokeWidth={1.6} className={className} />
  );
}

/** Small square icon tile used on cards. */
export function IconTile({
  name,
  tone = "light",
}: {
  name: IconName;
  tone?: "light" | "dark";
}) {
  return (
    <span
      className={
        tone === "light"
          ? "inline-flex size-11 items-center justify-center rounded-control bg-navy text-accent"
          : "inline-flex size-11 items-center justify-center rounded-control bg-white/10 text-accent"
      }
    >
      <Icon name={name} className="size-5" />
    </span>
  );
}
