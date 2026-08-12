"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { vibePageView } from "@/lib/vibe";

// The base Vibe snippet in the root layout fires page_view once when vbpx.js
// loads. Next.js client-side routing never reloads that script, so this
// tracker covers every subsequent route change. The initial pathname is
// recorded without firing — the snippet owns the first page_view — which is
// what prevents a double fire on hard loads (and under React strict-mode
// double-invoked effects, where the pathname is unchanged on the re-run).
export default function VibeRouteTracker() {
  const lastTracked = useRef<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (lastTracked.current === null) {
      lastTracked.current = pathname;
      return;
    }
    if (lastTracked.current === pathname) return;
    lastTracked.current = pathname;
    vibePageView();
  }, [pathname]);

  return null;
}
