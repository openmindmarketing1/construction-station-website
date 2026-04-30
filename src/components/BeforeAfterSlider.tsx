"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/constants";

type Project = {
  title: string;
  location: string;
  year: string;
  description: string;
};

function Slider({ project, index }: { project: Project; index: number }) {
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const updateFromClientX = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, next)));
  };

  useEffect(() => {
    if (!dragging) return;
    const onMove = (e: MouseEvent) => updateFromClientX(e.clientX);
    const onUp = () => setDragging(false);
    const onTouch = (e: TouchEvent) =>
      e.touches[0] && updateFromClientX(e.touches[0].clientX);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onTouch);
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("touchend", onUp);
    };
  }, [dragging]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="group"
    >
      <div className="flex items-end justify-between mb-4 gap-4">
        <div>
          <div className="text-gold text-xs tracking-[0.3em] uppercase mb-1">
            Project {String(index + 1).padStart(2, "0")} · {project.year}
          </div>
          <h3 className="font-display text-navy text-2xl md:text-3xl">
            {project.title}
          </h3>
          <div className="text-navy/60 text-sm">{project.location}</div>
        </div>
        <div className="hidden md:block text-navy/50 text-xs italic max-w-xs text-right">
          Drag to reveal — before / after
        </div>
      </div>

      <div
        ref={ref}
        className="relative w-full aspect-[16/10] overflow-hidden bg-navy select-none"
        onMouseDown={(e) => {
          setDragging(true);
          updateFromClientX(e.clientX);
        }}
        onTouchStart={(e) => {
          setDragging(true);
          if (e.touches[0]) updateFromClientX(e.touches[0].clientX);
        }}
      >
        {/* AFTER (back layer) — gold/cream tones */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #faf8f3 0%, #e8dcb4 40%, #c9a227 100%)",
          }}
        >
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 40%, rgba(255,255,255,0.6) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(168,131,32,0.4) 0%, transparent 60%)",
            }}
          />
          <div className="absolute inset-0 flex items-end p-6 md:p-8">
            <div>
              <div className="text-navy/60 text-xs tracking-[0.4em] uppercase mb-1">
                After
              </div>
              <div className="font-display text-navy-dark text-3xl md:text-4xl">
                Reborn.
              </div>
            </div>
          </div>
        </div>

        {/* BEFORE (front layer, clipped) — desaturated cool tones */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: `inset(0 ${100 - pos}% 0 0)`,
            background:
              "linear-gradient(135deg, #2a3144 0%, #4a5060 50%, #6b7080 100%)",
          }}
        >
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, rgba(0,0,0,0.2) 0 1px, transparent 1px 6px)",
            }}
          />
          <div className="absolute inset-0 flex items-end p-6 md:p-8">
            <div>
              <div className="text-white/70 text-xs tracking-[0.4em] uppercase mb-1">
                Before
              </div>
              <div className="font-display text-white text-3xl md:text-4xl">
                Dated.
              </div>
            </div>
          </div>
        </div>

        {/* Slider handle */}
        <div
          className="absolute top-0 bottom-0 z-20 ba-handle"
          style={{ left: `calc(${pos}% - 1px)` }}
        >
          <div className="w-px h-full bg-gold" />
          <button
            type="button"
            aria-label="Drag to compare"
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-0 w-12 h-12 bg-gold border-2 border-white shadow-xl flex items-center justify-center hover:bg-gold-light transition-colors"
            onMouseDown={(e) => {
              e.stopPropagation();
              setDragging(true);
            }}
            onTouchStart={(e) => {
              e.stopPropagation();
              setDragging(true);
            }}
          >
            <svg
              className="w-5 h-5 text-navy"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M7 5L3 10l4 5M13 5l4 5-4 5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      <p className="text-navy/70 text-sm mt-4 max-w-2xl">
        {project.description}
      </p>
    </motion.div>
  );
}

export default function BeforeAfterSlider() {
  return (
    <section id="work" className="bg-white py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-px bg-gold" />
            <span className="text-gold text-xs uppercase tracking-[0.4em]">
              Recent Work
            </span>
            <span className="w-10 h-px bg-gold" />
          </div>
          <h2 className="font-display text-navy text-5xl md:text-6xl lg:text-7xl leading-[1] max-w-3xl mx-auto">
            Before. <span className="italic text-gold">After.</span>
            <br />
            Always intentional.
          </h2>
        </motion.div>

        <div className="space-y-20">
          {PROJECTS.map((p, i) => (
            <Slider key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
