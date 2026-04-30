"use client";

import { motion } from "framer-motion";
import { TRUST_STATS } from "@/lib/constants";

export default function TrustBar() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="bg-navy texture-navy py-8 md:py-10"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {TRUST_STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="px-4 py-4 md:py-2 text-center relative"
            >
              <div className="font-display text-3xl md:text-4xl text-gold leading-none">
                {s.value}
              </div>
              <div className="text-white/60 text-[10px] md:text-xs uppercase tracking-[0.2em] mt-2">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
