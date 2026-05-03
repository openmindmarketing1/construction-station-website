"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CS } from "@/lib/constants";

export default function HeroVideo() {
  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-navy-dark">
      {/* Fallback editorial background — visible if no video loads */}
      <div className="absolute inset-0 bg-navy-dark">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 30% 30%, rgba(201,162,39,0.18) 0%, transparent 55%), radial-gradient(ellipse at 70% 80%, rgba(36,50,86,0.6) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, rgba(201,162,39,0.06) 0 2px, transparent 2px 80px)",
          }}
        />
      </div>

      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Top-right accent (editorial tag) */}
      <div className="absolute top-28 right-6 lg:right-16 z-10 hidden md:flex items-center gap-3 text-white">
        <div className="w-10 h-px bg-gold" />
        <div className="text-xs tracking-[0.4em] uppercase text-gold">
          Est. {CS.founded} · Inland Empire
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full pt-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-10 h-px bg-gold" />
              <span className="text-gold text-xs uppercase tracking-[0.4em]">
                Residential &amp; Commercial Construction
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="font-display text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] mb-8"
            >
              Building Dreams
              <br />
              <span className="text-gold italic">Across</span> the
              <br />
              Inland Empire.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="text-gold/90 font-body text-base md:text-lg tracking-wide mb-10 max-w-xl"
            >
              Residential &amp; Commercial Construction Serving the Inland
              Empire Since 2008 · Licensed {CS.license} · 5-Star Rated ·
              500+ Projects Delivered.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/contact"
                className="group bg-gold text-navy font-body font-semibold px-8 py-4 uppercase tracking-[0.2em] text-sm hover:bg-gold-light transition-all flex items-center justify-center gap-3"
              >
                Get Your Free Estimate
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
              <Link
                href="#work"
                className="border border-white/40 text-white font-body px-8 py-4 uppercase tracking-[0.2em] text-sm hover:border-gold hover:text-gold transition-all flex items-center justify-center gap-3"
              >
                See Our Work
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.85 }}
              className="mt-12 flex items-center gap-6 text-white/70 text-sm"
            >
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <svg
                      key={n}
                      className="w-4 h-4 text-gold"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 1l2.928 6.001 6.572.962-4.75 4.626 1.121 6.535L10 16.022l-5.871 3.102 1.121-6.535L.5 7.963l6.572-.962L10 1z" />
                    </svg>
                  ))}
                </div>
                <span>5.0 / 5 — 17 Google Reviews</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Explore / skip-to-content button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        onClick={() =>
          document
            .getElementById("content")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 group cursor-pointer bg-transparent border-0 p-0"
        aria-label="Skip to content"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1"
        >
          <svg
            className="w-6 h-6 text-gold/80 group-hover:text-gold transition-colors"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
          <svg
            className="w-6 h-6 text-gold/40 group-hover:text-gold/70 transition-colors -mt-2"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.div>
        <div className="text-white/60 group-hover:text-white/90 text-[10px] tracking-[0.4em] uppercase transition-colors">
          Explore
        </div>
      </motion.button>
    </section>
  );
}
