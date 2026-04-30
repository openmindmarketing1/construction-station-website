"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";

const cardGradients = [
  "from-navy via-navy-light to-navy-dark",
  "from-navy-dark via-navy to-navy-light",
  "from-[#1e2f50] via-navy to-navy-dark",
  "from-navy via-[#243256] to-[#162039]",
  "from-[#111b2f] via-navy to-[#1e2f50]",
  "from-[#243256] via-navy to-navy-dark",
];

export default function ServicesGrid() {
  const [featured, ...rest] = SERVICES;

  return (
    <section className="bg-cream texture-cream py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-px bg-gold" />
              <span className="text-gold text-xs uppercase tracking-[0.4em]">
                Our Craft
              </span>
            </div>
            <h2 className="font-display text-navy text-5xl md:text-6xl lg:text-7xl leading-[1] max-w-2xl">
              Six disciplines.
              <br />
              <span className="italic">One</span> standard.
            </h2>
          </div>
          <p className="text-navy/70 max-w-md text-base leading-relaxed">
            From a single bathroom refresh to a full second-story addition,
            every project is delivered by the same Construction Station crew —
            no rotating subcontractors, no shortcuts.
          </p>
        </motion.div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Featured card (Kitchen) — spans 2 rows */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:row-span-2"
          >
            <Link
              href={`/services/${featured.slug}`}
              className="group block relative overflow-hidden h-full min-h-[500px] lg:min-h-[700px]"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cardGradients[0]} transition-transform duration-700 group-hover:scale-105`}
              />
              {/* Decorative editorial pattern */}
              <div
                className="absolute inset-0 opacity-30 transition-opacity duration-500 group-hover:opacity-50"
                style={{
                  backgroundImage:
                    "radial-gradient(ellipse at 70% 20%, rgba(201,162,39,0.4) 0%, transparent 50%), radial-gradient(ellipse at 20% 80%, rgba(201,162,39,0.15) 0%, transparent 60%)",
                }}
              />
              {/* Vertical gold rule */}
              <div className="absolute left-8 top-0 w-px h-20 bg-gold" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/95 via-navy-dark/30 to-transparent" />
              {/* Gold border on hover */}
              <div className="absolute inset-3 border border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative h-full flex flex-col justify-between p-8 lg:p-12 z-10">
                <div className="flex items-start justify-between">
                  <div className="text-gold text-xs tracking-[0.4em] uppercase">
                    01 — Featured Service
                  </div>
                  <div className="text-5xl">{featured.icon}</div>
                </div>

                <div>
                  <h3 className="font-display text-white text-4xl md:text-5xl lg:text-6xl leading-[1] mb-4">
                    {featured.name}
                  </h3>
                  <p className="text-white/80 text-base mb-8 max-w-md leading-relaxed">
                    {featured.long}
                  </p>
                  <div className="flex items-center gap-3 text-gold uppercase tracking-[0.3em] text-xs">
                    Explore
                    <span className="w-10 h-px bg-gold group-hover:w-16 transition-all" />
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Smaller cards */}
          {rest.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
            >
              <Link
                href={`/services/${s.slug}`}
                className="group block relative overflow-hidden h-[300px] lg:h-[340px]"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${
                    cardGradients[(i + 1) % cardGradients.length]
                  } transition-transform duration-700 group-hover:scale-105`}
                />
                <div
                  className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                  style={{
                    backgroundImage:
                      "radial-gradient(ellipse at 80% 30%, rgba(201,162,39,0.5) 0%, transparent 55%)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 to-transparent" />
                <div className="absolute inset-3 border border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative h-full flex flex-col justify-between p-6 lg:p-7 z-10">
                  <div className="flex items-start justify-between">
                    <div className="text-gold text-xs tracking-[0.3em] uppercase">
                      0{i + 2}
                    </div>
                    <div className="text-3xl">{s.icon}</div>
                  </div>

                  <div>
                    <h3 className="font-display text-white text-2xl lg:text-3xl leading-tight mb-2">
                      {s.name}
                    </h3>
                    <p className="text-white/70 text-sm mb-4 line-clamp-2">
                      {s.description}
                    </p>
                    <div className="flex items-center gap-2 text-gold uppercase tracking-[0.3em] text-[10px]">
                      Read more
                      <span className="w-6 h-px bg-gold group-hover:w-10 transition-all" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
