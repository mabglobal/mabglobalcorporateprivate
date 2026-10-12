/** True when pathname is the link target or one of its sub-pages. */
export function isActivePath(pathname: string, href: string): boolean {
  const target = href.split("#")[0] || "/";
  if (target === "/") return pathname === "/";
  return pathname === target || pathname.startsWith(`${target}/`);
}
