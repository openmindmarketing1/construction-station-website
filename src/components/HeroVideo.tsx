"use client";

/**
 * HeroVideo — cinematic, full-viewport hero for the homepage.
 *
 * Dark/immersive (navy-tinted video background) with a GSAP on-load reveal:
 * a masked line-by-line headline rise, fading subtext + CTAs, an animated
 * stats bar, and a bouncing scroll indicator. A subtle scroll-driven parallax
 * (Lenis-synced ScrollTrigger) drifts the video layer and lifts the content.
 *
 * All motion is gated behind `prefers-reduced-motion: no-preference` via
 * gsap.matchMedia() — reduced-motion users get the fully-visible static hero.
 */

import { useRef } from "react";
import Link from "next/link";
import { useGSAP, gsap } from "@/lib/design-system";

// Gold accent for the redesign (slightly warmer than the global token).
const GOLD = "#C9A84C";

const STATS: { value: string; label: string }[] = [
  { value: "17", label: "5★ Reviews" },
  { value: "A+", label: "BBB Rated" },
  { value: "CSLB #1108879", label: "Licensed" },
  { value: "29", label: "Cities Served" },
  { value: "$200K", label: "ADUs From" },
];

export default function HeroVideo() {
  const root = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // --- On-load reveal timeline ---
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.from(".hero-eyebrow", { y: 24, autoAlpha: 0, duration: 0.7 })
          .from(
            ".hero-line > span",
            { yPercent: 115, duration: 0.95, stagger: 0.12 },
            "-=0.3"
          )
          .from(".hero-sub", { y: 24, autoAlpha: 0, duration: 0.7 }, "-=0.45")
          .from(
            ".hero-cta",
            { y: 20, autoAlpha: 0, duration: 0.6, stagger: 0.12 },
            "-=0.35"
          )
          .from(
            ".hero-stat",
            { y: 16, autoAlpha: 0, duration: 0.5, stagger: 0.08 },
            "-=0.2"
          )
          .from(".hero-scroll", { autoAlpha: 0, duration: 0.6 }, "-=0.15");

        // Looping bounce on the scroll-indicator arrow.
        gsap.to(".hero-scroll-arrow", {
          y: 9,
          duration: 1.1,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        // --- Scroll parallax ---
        gsap.to(bgRef.current, {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to(".hero-content", {
          yPercent: -16,
          autoAlpha: 0.15,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        // Fade the scroll cue out quickly as the user starts scrolling.
        gsap.to(".hero-scroll", {
          autoAlpha: 0,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "18% top",
            scrub: true,
          },
        });
      });
    },
    { scope: root }
  );

  const scrollToNext = () =>
    root.current?.nextElementSibling?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      ref={root}
      className="relative h-[100dvh] min-h-[640px] w-full overflow-hidden bg-navy-dark"
    >
      {/* Background layer (parallax target) */}
      <div ref={bgRef} className="absolute inset-0">
        {/* Editorial fallback — visible until the video paints */}
        <div className="absolute inset-0 bg-navy-dark" />
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 30% 30%, rgba(201,168,76,0.18) 0%, transparent 55%), radial-gradient(ellipse at 70% 80%, rgba(36,50,86,0.6) 0%, transparent 60%)",
          }}
        />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full scale-[1.25] object-cover"
        >
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Navy-tinted cinematic overlay */}
      <div className="absolute inset-0 hero-overlay" />
      <div className="absolute inset-0 bg-navy/30 mix-blend-multiply" />

      {/* Foreground content */}
      <div className="hero-content relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6 pt-24 lg:px-10">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <div className="hero-eyebrow mb-6 flex items-center gap-3">
              <span
                className="h-px w-10"
                style={{ backgroundColor: GOLD }}
              />
              <span
                className="text-xs uppercase tracking-[0.4em]"
                style={{ color: GOLD }}
              >
                Licensed General Contractor · Est. 2008
              </span>
            </div>

            {/* Headline — masked line-by-line reveal */}
            <h1 className="font-display text-5xl leading-[0.95] text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]">
              <span className="hero-line block overflow-hidden pb-1">
                <span className="block">Inland Empire&rsquo;s</span>
              </span>
              <span className="hero-line block overflow-hidden pb-1">
                <span className="block">Premier General</span>
              </span>
              <span className="hero-line block overflow-hidden pb-1">
                <span className="block italic" style={{ color: GOLD }}>
                  Contractor
                </span>
              </span>
            </h1>

            {/* Subtext */}
            <p className="hero-sub mt-8 max-w-xl font-body text-base tracking-wide text-white/80 md:text-lg">
              Kitchens · Bathrooms · ADUs · Room Additions · Outdoor Living
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="hero-cta group flex items-center justify-center gap-3 px-8 py-4 font-body text-sm font-semibold uppercase tracking-[0.2em] text-navy transition-colors"
                style={{ backgroundColor: GOLD }}
              >
                Book Free Consultation
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
              <Link
                href="/services/adu/floor-plans"
                className="hero-cta flex items-center justify-center gap-3 border border-white/40 px-8 py-4 font-body text-sm uppercase tracking-[0.2em] text-white transition-colors hover:border-[#C9A84C] hover:text-[#C9A84C]"
              >
                View ADU Plans
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        type="button"
        onClick={scrollToNext}
        aria-label="Scroll to content"
        className="hero-scroll group absolute bottom-24 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 border-0 bg-transparent p-0 sm:bottom-28 md:flex"
      >
        <span className="hero-scroll-arrow flex flex-col items-center">
          <svg
            className="h-6 w-6 transition-colors"
            style={{ color: GOLD }}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
        <span className="text-[10px] uppercase tracking-[0.4em] text-white/60 transition-colors group-hover:text-white/90">
          Explore
        </span>
      </button>

      {/* Stats bar — lifted above the mobile FloatingCTA bar (md:hidden, ~56px) */}
      <div className="absolute bottom-[56px] left-0 right-0 z-20 border-t border-white/10 bg-navy-dark/40 backdrop-blur-sm md:bottom-0">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="no-scrollbar flex items-stretch divide-x divide-white/10 overflow-x-auto">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="hero-stat flex shrink-0 flex-col items-center justify-center gap-0.5 px-5 py-4 text-center sm:flex-1 sm:px-3"
              >
                <span
                  className="font-display text-lg leading-none sm:text-xl"
                  style={{ color: GOLD }}
                >
                  {s.value}
                </span>
                <span className="whitespace-nowrap text-[10px] uppercase tracking-[0.2em] text-white/60 sm:text-[11px]">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
