"use client";

import { usePathname } from "next/navigation";

// Routes that render WITHOUT the site chrome (header, footer, floating CTA).
//
// /remodeling is the Connected-TV QR landing page. Two reasons it goes bare:
//
//  1. Attribution. Every chrome component links CS.phone — the office line.
//     A visitor who taps the header or the floating "Call Now" bar would place
//     a call that attributes to the office number rather than the CTV tracking
//     number, silently undercounting the TV campaign that paid for the visit.
//
//  2. It is a landing page. Site nav gives a converting visitor twenty ways to
//     leave before they call.
const BARE_ROUTES = ["/remodeling"];

function isBare(pathname: string | null): boolean {
  if (!pathname) return false;
  return BARE_ROUTES.some((r) => pathname === r || pathname.startsWith(`${r}/`));
}

export default function BareRouteGate({ children }: { children: React.ReactNode }) {
  return isBare(usePathname()) ? null : <>{children}</>;
}
