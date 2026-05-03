"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const SLIDES = [
  {
    title: "Modern Farmhouse Kitchen",
    location: "Redlands, CA",
    year: "2024",
    description:
      "Full gut remodel — custom shaker cabinets, quartz waterfall island, brass fixtures.",
    before: "/images/before-after/kitchen-before.jpg",
    after: "/images/before-after/kitchen-after.jpg",
  },
  {
    title: "Spa-Inspired Master Bath",
    location: "Yucaipa, CA",
    year: "2023",
    description:
      "Curbless walk-in shower, freestanding soaking tub, heated marble flooring.",
    before: "/images/before-after/bathroom-before.jpg",
    after: "/images/before-after/bathroom-after.jpg",
  },
];

type Slide = (typeof SLIDES)[number];

function DragSlider({ slide }: { slide: Slide }) {
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const updateFromClientX = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setPos(Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100)));
  };

  useEffect(() => {
    if (!dragging) return;
    const onMove = (e: MouseEvent) => updateFromClientX(e.clientX);
    const onUp = () => setDragging(false);
    const onTouch = (e: TouchEvent) =>
      e.touches[0] && updateFromClientX(e.touches[0].clientX);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onTouch, { passive: true });
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("touchend", onUp);
    };
  }, [dragging]);

  // Reset position when slide changes
  useEffect(() => { setPos(50); }, [slide]);

  return (
    <div
      ref={ref}
      className="relative w-full aspect-[16/10] overflow-hidden bg-navy select-none cursor-col-resize"
      onMouseDown={(e) => { setDragging(true); updateFromClientX(e.clientX); }}
      onTouchStart={(e) => { setDragging(true); if (e.touches[0]) updateFromClientX(e.touches[0].clientX); }}
    >
      {/* AFTER — back layer */}
      <div className="absolute inset-0">
        <Image
          src={slide.after}
          alt={`${slide.title} — after`}
          fill
          className="object-cover"
          sizes="(max-width: 1280px) 100vw, 1280px"
          priority
        />
        <div className="absolute inset-0 flex items-end p-6 md:p-8 bg-gradient-to-t from-navy-dark/60 to-transparent pointer-events-none">
          <div>
            <div className="text-white/80 text-xs tracking-[0.4em] uppercase mb-1">After</div>
            <div className="font-display text-white text-3xl md:text-4xl drop-shadow-lg">Reborn.</div>
          </div>
        </div>
      </div>

      {/* BEFORE — front layer, clipped */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Image
          src={slide.before}
          alt={`${slide.title} — before`}
          fill
          className="object-cover grayscale"
          sizes="(max-width: 1280px) 100vw, 1280px"
          priority
        />
        <div className="absolute inset-0 flex items-end p-6 md:p-8 bg-gradient-to-t from-navy-dark/60 to-transparent pointer-events-none">
          <div>
            <div className="text-white/70 text-xs tracking-[0.4em] uppercase mb-1">Before</div>
            <div className="font-display text-white text-3xl md:text-4xl drop-shadow-lg">Dated.</div>
          </div>
        </div>
      </div>

      {/* Drag handle */}
      <div className="absolute top-0 bottom-0 z-20" style={{ left: `calc(${pos}% - 1px)` }}>
        <div className="w-px h-full bg-gold" />
        <button
          type="button"
          aria-label="Drag to compare before and after"
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-0 w-12 h-12 bg-gold border-2 border-white shadow-xl flex items-center justify-center hover:bg-gold-light transition-colors"
          onMouseDown={(e) => { e.stopPropagation(); setDragging(true); }}
          onTouchStart={(e) => { e.stopPropagation(); setDragging(true); }}
        >
          <svg className="w-5 h-5 text-navy" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M7 5L3 10l4 5M13 5l4 5-4 5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function BeforeAfterSlider() {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);
  const total = SLIDES.length;

  const go = useCallback((next: number) => {
    setDir(next > current ? 1 : -1);
    setCurrent((next + total) % total);
  }, [current, total]);

  // Auto-rotate every 7 s
  useEffect(() => {
    const id = setInterval(() => go(current + 1), 7000);
    return () => clearInterval(id);
  }, [current, go]);

  const slide = SLIDES[current];

  return (
    <section id="work" className="bg-white py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-px bg-gold" />
            <span className="text-gold text-xs uppercase tracking-[0.4em]">Recent Work</span>
            <span className="w-10 h-px bg-gold" />
          </div>
          <h2 className="font-display text-navy text-5xl md:text-6xl lg:text-7xl leading-[1] max-w-3xl mx-auto">
            Before. <span className="italic text-gold">After.</span>
            <br />
            Always intentional.
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Slide meta */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={slide.title + "-meta"}
              initial={{ opacity: 0, x: dir * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -40 }}
              transition={{ duration: 0.35 }}
              className="flex items-end justify-between mb-4 gap-4"
            >
              <div>
                <div className="text-gold text-xs tracking-[0.3em] uppercase mb-1">
                  Project {String(current + 1).padStart(2, "0")} · {slide.year}
                </div>
                <h3 className="font-display text-navy text-2xl md:text-3xl">{slide.title}</h3>
                <div className="text-navy/60 text-sm">{slide.location}</div>
              </div>
              <div className="hidden md:block text-navy/50 text-xs italic max-w-xs text-right">
                Drag to reveal — before / after
              </div>
            </motion.div>
          </AnimatePresence>

          {/* The drag-compare image */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={slide.title}
              initial={{ opacity: 0, x: dir * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -60 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <DragSlider slide={slide} />
            </motion.div>
          </AnimatePresence>

          {/* Description */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.p
              key={slide.title + "-desc"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-navy/70 text-sm mt-4 max-w-2xl"
            >
              {slide.description}
            </motion.p>
          </AnimatePresence>

          {/* Navigation row */}
          <div className="flex items-center justify-between mt-8">
            {/* Dot indicators */}
            <div className="flex gap-2">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? "w-8 bg-gold" : "w-4 bg-navy/20 hover:bg-navy/40"
                  }`}
                />
              ))}
            </div>

            {/* Arrow buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => go(current - 1)}
                aria-label="Previous project"
                className="w-12 h-12 border border-navy/20 flex items-center justify-center text-navy hover:border-gold hover:text-gold transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 4l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={() => go(current + 1)}
                aria-label="Next project"
                className="w-12 h-12 border border-navy/20 flex items-center justify-center text-navy hover:border-gold hover:text-gold transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M8 4l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
