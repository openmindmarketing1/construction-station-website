"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const AMBER = "#F5A623";
const NAVY = "#111b2f";

const SERVICES = [
  {
    name: "Kitchen Remodeling",
    tagline: "Dream Kitchens Designed in 3D",
    cta: "Get Free Design",
    href: "/services/kitchen-remodeling",
    image:
      "https://www.openmindmarketing.ai/images/kitchen/kitchen-hero-main.jpg",
  },
  {
    name: "Bathroom Remodeling",
    tagline: "Luxury Bathrooms Built to Last",
    cta: "Get Free Design",
    href: "/services/bathroom-remodeling",
    image:
      "https://ihvgrybmtngekmfjpxnz.supabase.co/storage/v1/object/public/user-assets/business-1/Bathroom%20Images/v3/bathroom-master-luxury-v3.jpg",
  },
  {
    name: "ADU Construction",
    tagline: "Add Space. Add Value. Add Income.",
    cta: "Free ADU Consult",
    href: "/services/adu",
    image:
      "https://ihvgrybmtngekmfjpxnz.supabase.co/storage/v1/object/public/user-assets/business-1/ADU%20Images/v3/adu-detached-day-v3.jpg",
  },
  {
    name: "Room Additions",
    tagline: "Expand Your Home. Expand Your Life.",
    cta: "Get Free Quote",
    href: "/services/room-additions",
    image:
      "https://ihvgrybmtngekmfjpxnz.supabase.co/storage/v1/object/public/user-assets/business-1/Service%20Images/real/room-addition-completed.jpg",
  },
  {
    name: "Windows & Doors",
    tagline: "Energy Efficient. Beautifully Crafted.",
    cta: "Get Free Quote",
    href: "/services/windows-and-doors",
    image:
      "https://ihvgrybmtngekmfjpxnz.supabase.co/storage/v1/object/public/user-assets/business-1/Service%20Images/v3/windows-doors-v3.jpg",
  },
  {
    name: "Outdoor Living & Patio Covers",
    tagline: "Extend Your Living Space Outdoors",
    cta: "Get Free Quote",
    href: "/services/outdoor-living",
    image:
      "https://ihvgrybmtngekmfjpxnz.supabase.co/storage/v1/object/public/user-assets/business-1/Service%20Images/v3/outdoor-living-v3.jpg",
  },
  {
    name: "Commercial Services",
    tagline: "Commercial Projects Done Right",
    cta: "Get Free Quote",
    href: "/services/commercial",
    image:
      "https://ihvgrybmtngekmfjpxnz.supabase.co/storage/v1/object/public/user-assets/business-1/Service%20Images/real/commercial-concrete-2.jpg",
  },
  {
    name: "Flooring",
    tagline: "Beautiful Floors for Every Space",
    cta: "Get Free Quote",
    href: "/services/flooring-installation-yucaipa-ca",
    image:
      "https://ihvgrybmtngekmfjpxnz.supabase.co/storage/v1/object/public/user-assets/business-1/Service%20Images/v3/flooring-v3.jpg",
  },
];

const COUNT = SERVICES.length;
const STEP = 360 / COUNT; // 45°
const CARD_W = 320;
const CARD_H = 310;
const RADIUS = 460;

const TRUST_ITEMS = [
  { icon: "★", label: "5.0 Google Rating", sub: "17 Reviews" },
  { icon: "✓", label: "BBB A+ Rated", sub: "Accredited" },
  { icon: "⚖", label: "Licensed & Insured", sub: "CSLB #1108879" },
  { icon: "🏠", label: "Since 2008", sub: "18 Years" },
  { icon: "📍", label: "29 Cities", sub: "Inland Empire" },
];

export default function ServiceCarousel() {
  const router = useRouter();
  const [active, setActive] = useState(0);
  const [lean, setLean] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      // Pause only while a real pointer is over the cards. Queried live via
      // :hover (no stored state — a missed mouseleave can't wedge it), scoped
      // to the card track so blank hero space doesn't pause, and gated on
      // (hover: hover) so touch taps never pause rotation.
      const paused =
        window.matchMedia("(hover: hover)").matches &&
        trackRef.current?.matches(":hover");
      if (!paused) {
        setActive((i) => (i + 1) % COUNT);
      }
    }, 4000);
  }, []);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  const navigate = useCallback(
    (idx: number) => {
      setActive(((idx % COUNT) + COUNT) % COUNT);
      startTimer();
    },
    [startTimer]
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const rel = (e.clientX - rect.left) / rect.width;
    setLean(rel - 0.5); // –0.5 to +0.5
  };

  const handleMouseLeave = () => {
    setLean(0);
  };


  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden" style={{ background: "#0B1629" }}>
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(245,166,35,0.10) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(26,39,68,0.8) 0%, transparent 60%)",
        }}
      />

      {/* Headline block */}
      <div className="relative z-10 flex flex-col items-center text-center pt-28 pb-4 px-5">
        <div className="flex items-center gap-3 mb-5">
          <span className="h-px w-8 opacity-80" style={{ backgroundColor: AMBER }} />
          <span
            className="text-[10px] uppercase tracking-[0.42em] font-body"
            style={{ color: AMBER }}
          >
            Licensed General Contractor · Est. 2008
          </span>
          <span className="h-px w-8 opacity-80" style={{ backgroundColor: AMBER }} />
        </div>

        <h1 className="font-display text-white leading-[1.0] text-4xl sm:text-5xl md:text-[3.4rem] lg:text-[4.2rem] max-w-4xl">
          Southern California&apos;s{" "}
          <span className="italic" style={{ color: AMBER }}>
            Full-Service
          </span>
          <br />
          Remodeling Contractor
        </h1>
        <p className="mt-4 font-body text-white/60 text-sm sm:text-base max-w-lg leading-relaxed">
          From Kitchen Remodels to ADUs — We Design, Permit &amp; Build
        </p>
      </div>

      {/* 3D Carousel */}
      <div
        ref={containerRef}
        className="relative flex-1 flex items-center justify-center"
        style={{ perspective: "1300px", minHeight: "500px" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onTouchStart={(e) => {
          touchStartX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchStartX.current === null) return;
          const delta = e.changedTouches[0].clientX - touchStartX.current;
          if (Math.abs(delta) > 50)
            navigate(delta < 0 ? active + 1 : active - 1);
          touchStartX.current = null;
        }}
      >
        {/* Track — preserve-3d origin for all cards */}
        <div
          ref={trackRef}
          style={{
            position: "relative",
            width: `${CARD_W}px`,
            height: `${CARD_H}px`,
            transformStyle: "preserve-3d",
            transform: `rotateY(${lean * 14}deg)`,
            transition: "transform 0.25s ease-out",
          }}
        >
          {SERVICES.map((svc, i) => {
            let angle = ((i - active + COUNT) % COUNT) * STEP;
            if (angle > 180) angle -= 360;
            const absAngle = Math.abs(angle);
            const isActive = i === active;
            const hidden = absAngle > 140;
            const opacity = hidden ? 0 : isActive ? 1 : absAngle <= 45 ? 0.75 : 0.45;
            const scale = isActive ? 1.04 : absAngle <= 45 ? 0.9 : 0.8;
            const brightness = isActive ? 1 : absAngle <= 45 ? 0.6 : 0.35;

            return (
              <div
                key={svc.name}
                onClick={() => router.push(svc.href)}
                style={{
                  position: "absolute",
                  width: `${CARD_W}px`,
                  height: `${CARD_H}px`,
                  top: "50%",
                  left: "50%",
                  marginTop: `${-CARD_H / 2}px`,
                  marginLeft: `${-CARD_W / 2}px`,
                  transform: `rotateY(${angle}deg) translateZ(${RADIUS}px) scale(${scale})`,
                  transition:
                    "transform 0.75s cubic-bezier(0.4,0,0.2,1), opacity 0.75s ease",
                  opacity,
                  cursor: "pointer",
                  backfaceVisibility: "hidden",
                  pointerEvents: hidden ? "none" : "auto",
                }}
              >
                <div
                  className="relative w-full h-full overflow-hidden shadow-2xl"
                  style={{
                    filter: `brightness(${brightness})`,
                    transition: "filter 0.75s ease",
                    borderRadius: "2px",
                  }}
                >
                  <Image
                    src={svc.image}
                    alt={svc.name}
                    fill
                    className="object-cover"
                    sizes="320px"
                    priority={i < 3}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/25 to-transparent" />

                  {/* Active amber top bar */}
                  {isActive && (
                    <div
                      className="absolute inset-x-0 top-0 h-[3px]"
                      style={{ backgroundColor: AMBER }}
                    />
                  )}

                  {/* Card text */}
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p
                      className="text-xs uppercase tracking-[0.3em] font-body mb-2"
                      style={{ color: AMBER, opacity: 0.85 }}
                    >
                      {String(i + 1).padStart(2, "0")} / {String(COUNT).padStart(2, "0")}
                    </p>
                    <h3 className="font-display text-white text-2xl font-bold leading-tight">
                      {svc.name}
                    </h3>
                    <p className="font-body text-white/70 text-sm mt-1">
                      {svc.tagline}
                    </p>
                    {isActive && (
                      <Link
                        href={svc.href}
                        className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 font-body text-xs font-semibold uppercase tracking-[0.18em] transition-opacity hover:opacity-90 active:opacity-80"
                        style={{ backgroundColor: AMBER, color: NAVY }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        {svc.cta}
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Prev arrow */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            navigate(active - 1);
          }}
          aria-label="Previous service"
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center border border-white/20 bg-white/5 text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Next arrow */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            navigate(active + 1);
          }}
          aria-label="Next service"
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center border border-white/20 bg-white/5 text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* Dot indicators */}
      <div className="relative z-10 flex items-center justify-center gap-2 pt-2 pb-5">
        {SERVICES.map((svc, i) => (
          <button
            key={svc.name}
            onClick={() => navigate(i)}
            aria-label={`Go to ${svc.name}`}
            className="h-[5px] rounded-full transition-all duration-300"
            style={{
              width: i === active ? "22px" : "7px",
              backgroundColor:
                i === active ? AMBER : "rgba(255,255,255,0.28)",
            }}
          />
        ))}
      </div>

      {/* Trust bar */}
      <div className="relative z-10 border-t border-white/8">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="flex flex-wrap items-center justify-center divide-x divide-white/10 overflow-hidden">
            {TRUST_ITEMS.map((t) => (
              <div
                key={t.label}
                className="flex flex-col items-center justify-center px-5 sm:px-7 py-4 text-center"
              >
                <span
                  className="font-display text-base leading-none"
                  style={{ color: AMBER }}
                >
                  {t.icon} {t.label}
                </span>
                <span className="mt-0.5 font-body text-[10px] uppercase tracking-[0.22em] text-white/45">
                  {t.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
