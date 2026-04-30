"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CS } from "@/lib/constants";

type Props = {
  eyebrow: string;
  title: string;
  subtitle: string;
  italicWord?: string;
};

export default function ServiceHero({
  eyebrow,
  title,
  subtitle,
  italicWord,
}: Props) {
  // Render title with italic accent on chosen word
  const renderTitle = () => {
    if (!italicWord) return title;
    const parts = title.split(italicWord);
    return (
      <>
        {parts[0]}
        <span className="italic text-gold">{italicWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <section className="relative bg-navy texture-navy text-white pt-36 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
      {/* Decorative editorial elements */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 80% 30%, rgba(201,162,39,0.25) 0%, transparent 55%)",
        }}
      />
      <div className="absolute top-32 right-10 hidden md:flex items-center gap-3">
        <div className="w-12 h-px bg-gold" />
        <div className="text-gold text-[10px] tracking-[0.4em] uppercase">
          {eyebrow}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-5 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <div className="text-gold text-xs tracking-[0.4em] uppercase mb-5 md:hidden">
            {eyebrow}
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1] mb-7">
            {renderTitle()}
          </h1>
          <p className="text-white/80 text-base md:text-lg max-w-2xl mb-9 leading-relaxed">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="bg-gold text-navy font-body font-semibold px-7 py-4 uppercase tracking-[0.2em] text-sm hover:bg-gold-light transition-colors text-center"
            >
              Free Design Session
            </Link>
            <a
              href={CS.phoneHref}
              className="border border-white/40 text-white px-7 py-4 uppercase tracking-[0.2em] text-sm hover:border-gold hover:text-gold transition-colors text-center"
            >
              Call {CS.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
