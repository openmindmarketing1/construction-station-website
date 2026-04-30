"use client";

import { motion } from "framer-motion";
import { REVIEWS } from "@/lib/constants";

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-4 h-4 text-gold"
        >
          <path d="M10 1l2.928 6.001 6.572.962-4.75 4.626 1.121 6.535L10 16.022l-5.871 3.102 1.121-6.535L.5 7.963l6.572-.962L10 1z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  const [featured, ...rest] = REVIEWS;

  return (
    <section className="bg-navy texture-navy text-white py-24 lg:py-32 relative overflow-hidden">
      {/* Editorial decorative quote mark */}
      <div className="absolute -top-10 right-10 lg:right-32 font-display text-gold/10 text-[20rem] leading-none select-none pointer-events-none">
        “
      </div>

      <div className="max-w-7xl mx-auto px-5 lg:px-10 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-px bg-gold" />
              <span className="text-gold text-xs uppercase tracking-[0.4em]">
                Client Letters
              </span>
            </div>
            <h2 className="font-display text-white text-5xl md:text-6xl lg:text-7xl leading-[1]">
              Words that <span className="italic text-gold">stick</span>
              <br />
              with us.
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex flex-col">
              <Stars />
              <div className="text-white/70 text-sm mt-2">
                <span className="text-gold font-display text-2xl">4.9</span>
                <span className="ml-2">avg · 127 Google Reviews</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5"
                fill="none"
              >
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              <span className="text-white/80 text-sm">Verified on Google</span>
            </div>
          </div>
        </motion.div>

        {/* Featured pull quote */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 lg:mb-20 grid grid-cols-12 gap-6"
        >
          <div className="col-span-12 lg:col-span-2 lg:flex justify-end items-start hidden">
            <div className="font-display text-gold text-[8rem] leading-none -mt-6">
              “
            </div>
          </div>
          <div className="col-span-12 lg:col-span-9">
            <Stars count={featured.stars} />
            <blockquote className="font-display text-white text-3xl md:text-4xl lg:text-5xl leading-[1.15] mt-6 mb-8">
              {featured.text}
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gold/20 border border-gold flex items-center justify-center font-display text-gold text-lg">
                {featured.name.charAt(0)}
              </div>
              <div>
                <div className="text-white font-body font-medium">
                  {featured.name}
                </div>
                <div className="text-white/50 text-xs uppercase tracking-wider">
                  {featured.date} · Inland Empire
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Three smaller reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rest.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white/5 border-l-2 border-gold p-6 hover:bg-white/10 transition-colors"
            >
              <Stars count={r.stars} />
              <p className="text-white/85 text-sm mt-4 mb-6 leading-relaxed line-clamp-5">
                “{r.text}”
              </p>
              <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                <div>
                  <div className="font-body text-white text-sm">{r.name}</div>
                  <div className="text-white/40 text-xs uppercase tracking-wider mt-1">
                    {r.date}
                  </div>
                </div>
                <div className="text-gold/70 text-xs uppercase tracking-wider">
                  Google
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
