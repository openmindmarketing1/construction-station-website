/**
 * animations — reusable GSAP animation presets.
 *
 * Standalone tween factories (not scroll-bound). Compose them with
 * ScrollTrigger via the helpers in ./ScrollAnimations, or fire them directly
 * inside `useGSAP()` for entrance animations:
 *
 *   useGSAP(() => { fadeUp(".title"); staggerChildren(".grid"); }, { scope });
 */

import { gsap } from "gsap";

type DomTarget = gsap.TweenTarget;

function resolveElement(target: Element | string): HTMLElement | null {
  if (typeof target === "string") {
    return document.querySelector<HTMLElement>(target);
  }
  return target as HTMLElement;
}

export interface FadeUpOptions {
  /** Travel distance in px. */
  distance?: number;
  opacity?: number;
  duration?: number;
  delay?: number;
  ease?: string;
}

/** Fade + rise into place. */
export function fadeUp(
  target: DomTarget,
  { distance = 40, opacity = 0, duration = 0.8, delay = 0, ease = "power3.out" }: FadeUpOptions = {}
): gsap.core.Tween {
  return gsap.from(target, { y: distance, opacity, duration, delay, ease });
}

export type SlideDirection = "left" | "right" | "up" | "down";

export interface SlideInOptions {
  direction?: SlideDirection;
  distance?: number;
  opacity?: number;
  duration?: number;
  delay?: number;
  ease?: string;
}

/** Slide + fade in from a given direction. */
export function slideIn(
  target: DomTarget,
  {
    direction = "left",
    distance = 80,
    opacity = 0,
    duration = 0.8,
    delay = 0,
    ease = "power3.out",
  }: SlideInOptions = {}
): gsap.core.Tween {
  const horizontal = direction === "left" || direction === "right";
  const axis = horizontal ? "x" : "y";
  const sign = direction === "left" || direction === "up" ? -1 : 1;
  return gsap.from(target, {
    [axis]: sign * distance,
    opacity,
    duration,
    delay,
    ease,
  });
}

export interface StaggerChildrenOptions {
  /** Selector for children relative to the container (default: direct children). */
  childrenSelector?: string;
  distance?: number;
  opacity?: number;
  duration?: number;
  delay?: number;
  ease?: string;
  /** Delay between each child, in seconds. */
  stagger?: number;
  /** Stagger origin. */
  from?: "start" | "end" | "center" | "edges";
}

/** Reveal a container's children with a stagger (entrance, not scroll-bound). */
export function staggerChildren(
  container: Element | string,
  {
    childrenSelector = ":scope > *",
    distance = 30,
    opacity = 0,
    duration = 0.6,
    delay = 0,
    ease = "power3.out",
    stagger = 0.1,
    from = "start",
  }: StaggerChildrenOptions = {}
): gsap.core.Tween | undefined {
  const el = resolveElement(container);
  if (!el) return undefined;
  const children = el.querySelectorAll(childrenSelector);
  if (!children.length) return undefined;

  return gsap.from(children, {
    y: distance,
    opacity,
    duration,
    delay,
    ease,
    stagger: { each: stagger, from },
  });
}

export interface CountUpOptions {
  /** Value to count from (default 0). */
  from?: number;
  duration?: number;
  ease?: string;
  /** Thousands separator. */
  separator?: string;
  /** Number of decimal places. */
  decimals?: number;
  prefix?: string;
  suffix?: string;
}

/**
 * Animate an element's text from `from` to `to` (e.g. stat counters).
 * The element's textContent is updated each frame.
 */
export function countUp(
  target: Element | string,
  to: number,
  {
    from = 0,
    duration = 2,
    ease = "power1.out",
    separator = ",",
    decimals = 0,
    prefix = "",
    suffix = "",
  }: CountUpOptions = {}
): gsap.core.Tween | undefined {
  const el = resolveElement(target);
  if (!el) return undefined;

  const format = (value: number): string => {
    const fixed = value.toFixed(decimals);
    const [intPart, decPart] = fixed.split(".");
    const withSep = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    const body = decPart ? `${withSep}.${decPart}` : withSep;
    return `${prefix}${body}${suffix}`;
  };

  const state = { value: from };
  el.textContent = format(from);
  return gsap.to(state, {
    value: to,
    duration,
    ease,
    onUpdate: () => {
      el.textContent = format(state.value);
    },
  });
}
