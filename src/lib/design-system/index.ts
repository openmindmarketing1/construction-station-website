/**
 * Premium design system — the animation foundation for client websites.
 *
 * Single entry point:
 *   import {
 *     SmoothScroll,
 *     scrollReveal, scrollStagger, parallax,
 *     fadeUp, slideIn, staggerChildren, countUp,
 *     useGSAP, gsap, ScrollTrigger,
 *   } from "@/lib/design-system";
 *
 *  - SmoothScroll        Lenis smooth-scroll wrapper (wrap the app once)
 *  - ScrollAnimations.*  scroll-triggered reveal helpers
 *  - animations.*        standalone entrance presets
 *  - useGSAP             @gsap/react hook for scoped, auto-cleaned animations
 */

export { SmoothScroll, type SmoothScrollProps } from "./SmoothScroll";

export {
  registerScrollAnimations,
  scrollReveal,
  scrollStagger,
  parallax,
  refreshScrollTriggers,
  killScrollTriggers,
  type ScrollRevealOptions,
  type ScrollStaggerOptions,
  type ParallaxOptions,
} from "./ScrollAnimations";

export {
  fadeUp,
  slideIn,
  staggerChildren,
  countUp,
  type FadeUpOptions,
  type SlideInOptions,
  type SlideDirection,
  type StaggerChildrenOptions,
  type CountUpOptions,
} from "./animations";

// Re-export the core libs so consumers import everything from one place.
export { useGSAP } from "@gsap/react";
export { gsap } from "gsap";
export { ScrollTrigger } from "gsap/ScrollTrigger";
