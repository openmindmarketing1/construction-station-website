"use client";

import { motion } from "framer-motion";

const ITEMS = [
  {
    n: "01",
    title: "18 Years of Expertise",
    body: "Founded in 2008, we've completed over 500 projects across the Inland Empire. The same hands that swung the hammer on day one still oversee every job today.",
    pull: "Family-run since 2008",
  },
  {
    n: "02",
    title: "Free Design Sessions",
    body: "Most contractors charge $299+ for a design consultation. New clients get ours free — including a custom 3D rendering and detailed line-item estimate.",
    pull: "$299 design — free for new clients",
  },
  {
    n: "03",
    title: "Licensed & Insured",
    body: "California State License #1108879. Bonded and fully insured. We pull every permit, follow every code, and stand behind every weld and seam.",
    pull: "Licensed & Insured · #1108879",
  },
  {
    n: "04",
    title: "On-Time Guarantee",
    body: "Schedule slipping is the #1 contractor complaint. We sequence trades in-house, order materials before demo, and hit promised completion dates — in writing.",
    pull: "Written completion dates",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="about"
      className="texture-cream diagonal-pattern py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Decorative gold rule */}
      <div className="absolute left-1/2 top-0 w-px h-24 bg-gradient-to-b from-gold to-transparent" />

      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-px bg-gold" />
            <span className="text-gold text-xs uppercase tracking-[0.4em]">
              Why Construction Station
            </span>
          </div>
          <h2 className="font-display text-navy text-5xl md:text-6xl lg:text-7xl leading-[1]">
            Four reasons clients
            <br />
            <span className="italic">stay</span> with us.
          </h2>
        </motion.div>

        <div className="space-y-20 lg:space-y-32">
          {ITEMS.map((item, i) => {
            const isReversed = i % 2 === 1;
            return (
              <motion.div
                key={item.n}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
                className={`grid grid-cols-12 gap-6 items-center ${
                  isReversed ? "lg:[direction:rtl]" : ""
                }`}
              >
                <div
                  className={`col-span-12 lg:col-span-5 ${
                    isReversed ? "lg:[direction:ltr]" : ""
                  }`}
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-gold text-[7rem] md:text-[10rem] leading-none">
                      {item.n}
                    </span>
                    <div className="flex-1 h-px bg-gold/40" />
                  </div>
                </div>

                <div
                  className={`col-span-12 lg:col-span-7 ${
                    isReversed ? "lg:[direction:ltr]" : ""
                  }`}
                >
                  <div className="text-gold text-xs tracking-[0.3em] uppercase mb-3">
                    {item.pull}
                  </div>
                  <h3 className="font-display text-navy text-3xl md:text-4xl lg:text-5xl mb-5 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-navy/75 text-base md:text-lg leading-relaxed max-w-xl">
                    {item.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
