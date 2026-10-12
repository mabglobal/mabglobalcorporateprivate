export interface NavItem {
  label: string;
  href: string;
  /** Sub-pages shown in a dropdown on desktop. */
  children?: NavItem[];
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}
