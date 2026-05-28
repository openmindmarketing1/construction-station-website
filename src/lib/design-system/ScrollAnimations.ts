/**
 * ScrollAnimations — GSAP ScrollTrigger setup + reusable scroll-reveal helpers.
 *
 * Part of the premium design system. These are imperative helpers meant to be
 * called from inside a client component (ideally within `useGSAP()` from
 * @gsap/react so they're automatically reverted on unmount):
 *
 *   "use client";
 *   import { useGSAP } from "@gsap/react";
 *   import { scrollReveal, scrollStagger } from "@/lib/design-system";
 *
 *   function Section() {
 *     const root = useRef<HTMLDivElement>(null);
 *     useGSAP(() => {
 *       scrollReveal(".headline");
 *       scrollStagger(".cards");
 *     }, { scope: root });
 *     return <div ref={root}>…</div>;
 *   }
 *
 * Smooth scrolling is provided separately by <SmoothScroll/> (Lenis), which is
 * already wired to drive ScrollTrigger.update.
 */

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

/** Register the ScrollTrigger plugin once (no-op on the server / if already done). */
export function registerScrollAnimations(): void {
  if (registered || typeof window === "undefined") return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

// Register eagerly on the client so plugin methods are available immediately.
registerScrollAnimations();

type DomTarget = Element | string;

export interface ScrollRevealOptions {
  /** Vertical travel distance in px (positive = rises up into place). */
  y?: number;
  /** Horizontal travel distance in px. */
  x?: number;
  /** Starting opacity. */
  opacity?: number;
  /** Starting scale (1 = no scaling). */
  scale?: number;
  duration?: number;
  ease?: string;
  delay?: number;
  /** ScrollTrigger `start`, e.g. "top 85%". */
  start?: string;
  /** Replay every time it scrolls in/out (false) or only once (true, default). */
  once?: boolean;
  markers?: boolean;
}

/**
 * Reveal a single element as it scrolls into view.
 * Returns the created tween (with its ScrollTrigger attached).
 */
export function scrollReveal(
  target: DomTarget,
  options: ScrollRevealOptions = {}
): gsap.core.Tween {
  registerScrollAnimations();
  const {
    y = 48,
    x = 0,
    opacity = 0,
    scale = 1,
    duration = 0.9,
    ease = "power3.out",
    delay = 0,
    start = "top 85%",
    once = true,
    markers = false,
  } = options;

  return gsap.from(target, {
    y,
    x,
    opacity,
    scale,
    duration,
    ease,
    delay,
    scrollTrigger: {
      trigger: target,
      start,
      once,
      toggleActions: once
        ? "play none none none"
        : "play reverse play reverse",
      markers,
    },
  });
}

export interface ScrollStaggerOptions extends ScrollRevealOptions {
  /** Selector for the children to stagger (default: direct children). */
  childrenSelector?: string;
  /** Delay between each child, in seconds. */
  stagger?: number;
}

/**
 * Reveal a container's children with a stagger as the container scrolls in.
 */
export function scrollStagger(
  container: DomTarget,
  options: ScrollStaggerOptions = {}
): gsap.core.Tween | undefined {
  registerScrollAnimations();
  const el =
    typeof container === "string"
      ? document.querySelector(container)
      : container;
  if (!el) return undefined;

  const {
    childrenSelector = ":scope > *",
    y = 40,
    x = 0,
    opacity = 0,
    duration = 0.8,
    ease = "power3.out",
    stagger = 0.12,
    start = "top 80%",
    once = true,
    markers = false,
  } = options;

  const children = el.querySelectorAll(childrenSelector);
  if (!children.length) return undefined;

  return gsap.from(children, {
    y,
    x,
    opacity,
    duration,
    ease,
    stagger,
    scrollTrigger: { trigger: el, start, once, markers },
  });
}

export interface ParallaxOptions {
  /** Total px the element travels across the scroll range (negative = up). */
  amount?: number;
  start?: string;
  end?: string;
  /** Scrub smoothing in seconds (true = instant follow). */
  scrub?: number | boolean;
}

/** Subtle parallax drift tied to scroll position. */
export function parallax(
  target: DomTarget,
  options: ParallaxOptions = {}
): gsap.core.Tween {
  registerScrollAnimations();
  const { amount = -80, start = "top bottom", end = "bottom top", scrub = true } =
    options;

  return gsap.to(target, {
    y: amount,
    ease: "none",
    scrollTrigger: {
      trigger: target,
      start,
      end,
      scrub,
    },
  });
}

/** Recompute all ScrollTrigger positions (call after layout/content changes). */
export function refreshScrollTriggers(): void {
  if (typeof window === "undefined") return;
  ScrollTrigger.refresh();
}

/** Kill every ScrollTrigger instance (useful for hard teardown). */
export function killScrollTriggers(): void {
  if (typeof window === "undefined") return;
  ScrollTrigger.getAll().forEach((t) => t.kill());
}
