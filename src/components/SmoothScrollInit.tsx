"use client";

import { useEffect } from "react";

// Initialises Lenis smooth-scroll + GSAP ScrollTrigger integration without
// blocking first paint. All three libraries are loaded via dynamic import
// inside useEffect so they stay out of the shared JS bundle.
export default function SmoothScrollInit() {
  useEffect(() => {
    let disposed = false;
    let tickerFn: ((time: number) => void) | null = null;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let gsapRef: any = null;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let lenisRef: any = null;

    async function init() {
      const [{ gsap }, { default: Lenis }, { ScrollTrigger }] =
        await Promise.all([
          import("gsap"),
          import("lenis"),
          import("gsap/ScrollTrigger"),
        ]);

      if (disposed) return;

      gsap.registerPlugin(ScrollTrigger);
      gsapRef = gsap;

      const lenis = new Lenis({
        lerp: 0.1,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
      });
      lenisRef = lenis;

      tickerFn = (time: number) => lenis.raf(time * 1000);
      gsap.ticker.add(tickerFn);
      gsap.ticker.lagSmoothing(0);
      lenis.on("scroll", ScrollTrigger.update);
    }

    // Idle-defer (2026-08-21): initializing right after hydration put the
    // gsap+lenis dynamic imports inside the LCP window on slow devices.
    // Smooth scroll only matters once the user scrolls, so wait for idle
    // (or 4s, whichever first).
    let idleId: number | null = null;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    if (typeof requestIdleCallback === "function") {
      idleId = requestIdleCallback(() => init(), { timeout: 4000 });
    } else {
      timeoutId = setTimeout(init, 2500);
    }

    return () => {
      if (idleId !== null && typeof cancelIdleCallback === "function") cancelIdleCallback(idleId);
      if (timeoutId !== null) clearTimeout(timeoutId);
      disposed = true;
      if (tickerFn && gsapRef) gsapRef.ticker.remove(tickerFn);
      lenisRef?.destroy();
    };
  }, []);

  return null;
}
