import {
  ArrowLeftRight,
  BadgeCheck,
  BookOpen,
  Building2,
  CalendarCheck,
  Calculator,
  ChartColumn,
  CircleHelp,
  ClipboardList,
  Compass,
  Cpu,
  DraftingCompass,
  Factory,
  FileCheck,
  FileSignature,
  Fingerprint,
  FolderOpen,
  Globe,
  Inbox,
  Landmark,
  Laptop,
  Layers,
  Map as MapIcon,
  MapPin,
  MessagesSquare,
  ReceiptText,
  Rocket,
  Route,
  Scale,
  Search,
  Send,
  ShieldCheck,
  Ship,
  ShoppingBag,
  Target,
  UserCheck,
  Users,
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
  message: MessagesSquare,
  "drafting-compass": DraftingCompass,
  "badge-check": BadgeCheck,
  map: MapIcon,
  "file-signature": FileSignature,
  users: Users,
  fingerprint: Fingerprint,
  search: Search,
  folder: FolderOpen,
  send: Send,
  book: BookOpen,
  "arrow-left-right": ArrowLeftRight,
  chart: ChartColumn,
  "user-check": UserCheck,
  inbox: Inbox,
  clipboard: ClipboardList,
  target: Target,
  scale: Scale,
  route: Route,
};

export function Icon({ name, className }: { name: IconName; className?: string }) {
  const Component = icons[name];
  return <Component aria-hidden="true" strokeWidth={1.7} className={className} />;
}

/**
 * Small framed icon box, framed like the buttons: white with a thin border,
 * soft shadow and a navy icon on white surfaces; a thin white border and a
 * white icon on navy surfaces.
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
        "inline-flex shrink-0 items-center justify-center rounded-tile",
        size === "md" ? "size-10" : "size-9",
        tone === "light" ? "border border-line bg-white text-navy shadow-frame" : "border border-white/25 text-white",
      )}
    >
      <Icon name={name} className={size === "md" ? "size-5" : "size-4"} />
    </span>
  );
}
