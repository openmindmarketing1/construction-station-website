"use client";

/**
 * SmoothScroll — Lenis smooth-scroll wrapper for the whole app.
 *
 * Wrap your layout once (e.g. in app/layout body):
 *
 *   import { SmoothScroll } from "@/lib/design-system";
 *   <SmoothScroll>{children}</SmoothScroll>
 *
 * Lenis's internal RAF is disabled (`autoRaf={false}`) and instead driven by
 * GSAP's ticker, and every Lenis scroll event calls `ScrollTrigger.update()`.
 * This keeps Lenis and any ScrollTrigger animations perfectly in sync — the
 * recommended GSAP + Lenis integration.
 */

import { ReactLenis } from "@studio-freight/react-lenis";
import {
  useEffect,
  useRef,
  type ComponentProps,
  type ElementRef,
  type ReactNode,
} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type LenisOptions = NonNullable<ComponentProps<typeof ReactLenis>["options"]>;

export interface SmoothScrollProps {
  children: ReactNode;
  /** Override Lenis options (merged over the premium defaults). */
  options?: LenisOptions;
  /** Disable smooth scrolling (renders children untouched). */
  disabled?: boolean;
}

const DEFAULT_OPTIONS: LenisOptions = {
  lerp: 0.1,
  smoothWheel: true,
  wheelMultiplier: 1,
  touchMultiplier: 1.5,
};

export function SmoothScroll({ children, options, disabled }: SmoothScrollProps) {
  const lenisRef = useRef<ElementRef<typeof ReactLenis>>(null);

  useEffect(() => {
    if (disabled) return;

    const update = (time: number) => {
      // GSAP ticker time is in seconds; Lenis expects milliseconds.
      lenisRef.current?.lenis?.raf(time * 1000);
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    const lenis = lenisRef.current?.lenis;
    lenis?.on("scroll", ScrollTrigger.update);

    return () => {
      gsap.ticker.remove(update);
      lenis?.off("scroll", ScrollTrigger.update);
    };
  }, [disabled]);

  if (disabled) return <>{children}</>;

  return (
    <ReactLenis
      root
      ref={lenisRef}
      autoRaf={false}
      options={{ ...DEFAULT_OPTIONS, ...options }}
    >
      {children}
    </ReactLenis>
  );
}
