"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CITIES } from "@/config/cities";

export default function ServiceAreaSection() {
  return (
    <section
      id="areas"
      className="texture-cream diagonal-pattern py-24 lg:py-32 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-px bg-gold" />
            <span className="text-gold text-xs uppercase tracking-[0.4em]">
              Coverage
            </span>
            <span className="w-10 h-px bg-gold" />
          </div>
          <h2 className="font-display text-navy text-5xl md:text-6xl lg:text-7xl leading-[1] mb-5">
            Proudly serving the
            <br />
            <span className="italic text-gold">Inland Empire</span>.
          </h2>
          <p className="text-navy/70 text-base md:text-lg max-w-xl mx-auto">
            From Redlands to Riverside, we bring premium craftsmanship to your
            neighborhood — with the same crew, same standards, every job.
          </p>
        </motion.div>

        {/* Tag cloud */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.04 } },
          }}
          className="flex flex-wrap items-center justify-center gap-3 max-w-5xl mx-auto"
        >
          {CITIES.map((c, i) => {
            // Vary sizes for editorial flow
            const variants = [
              "text-base px-5 py-2.5",
              "text-lg px-6 py-3",
              "text-xl px-7 py-3.5 font-display",
              "text-base px-5 py-2.5",
              "text-2xl px-8 py-4 font-display",
              "text-base px-5 py-2.5",
            ];
            const size = variants[i % variants.length];
            return (
              <motion.div
                key={c.slug}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <Link
                  href={`/areas/${c.slug}`}
                  className={`inline-block border border-navy/15 bg-white text-navy hover:bg-navy hover:text-gold hover:border-navy transition-all ${size}`}
                >
                  {c.name}
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12 text-navy/60 text-sm"
        >
          Don&rsquo;t see your city?{" "}
          <Link
            href="/contact"
            className="text-gold underline underline-offset-4 hover:text-gold-dark"
          >
            Ask if we cover it →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
