"use client";

import {
  useEffect,
  useRef,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

type Props = {
  children: ReactNode;
  /** Entrance direction — matches the old framer-motion variants. */
  from?: "up" | "left" | "right" | "none";
  /** Transition delay in ms (stagger). */
  delay?: number;
  /** IntersectionObserver rootMargin bottom inset, e.g. "-50px". */
  margin?: string;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  id?: string;
};

/**
 * CSS-only scroll reveal — replaces framer-motion's `whileInView` fade-ins
 * (2026-08-21 PageSpeed work). framer-motion was shipping in the critical
 * bundle of every page purely for these entrance animations; this is a ~1 KB
 * IntersectionObserver + two CSS classes. Content is only hidden when JS is
 * running (html.js gate set in the root layout), so no-JS visitors and
 * crawlers always see the page. prefers-reduced-motion is respected in CSS.
 */
export default function Reveal({
  children,
  from = "up",
  delay = 0,
  margin = "0px",
  as: Tag = "div",
  className = "",
  style,
  id,
}: Props) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);

  useEffect(() => {
    const el = ref.current as HTMLElement | null;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("reveal-in");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          el.classList.add("reveal-in");
          io.disconnect();
        }
      },
      { rootMargin: `0px 0px ${margin} 0px` }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [margin]);

  return (
    <Tag
      ref={ref}
      id={id}
      className={`reveal reveal-${from} ${className}`}
      style={delay ? { ...style, transitionDelay: `${delay}ms` } : style}
    >
      {children}
    </Tag>
  );
}
