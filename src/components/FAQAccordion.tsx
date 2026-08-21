"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";

type FAQ = { q: string; a: ReactNode };

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-24 lg:py-28">
      <div className="max-w-4xl mx-auto px-5 lg:px-10">
        <Reveal className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-px bg-gold" />
            <span className="text-gold-deep text-xs uppercase tracking-[0.4em]">
              FAQ
            </span>
            <span className="w-10 h-px bg-gold" />
          </div>
          <h2 className="font-display text-navy text-4xl md:text-5xl lg:text-6xl leading-[1]">
            Questions, <span className="italic text-gold-dark">answered</span>.
          </h2>
        </Reveal>

        <div className="border-t border-navy/10">
          {faqs.map((f, i) => (
            <Reveal key={i} delay={Math.min(i * 40, 400)} className="border-b border-navy/10">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                aria-expanded={open === i}
              >
                <span className="font-display text-navy text-lg md:text-xl group-hover:text-gold transition-colors">
                  {f.q}
                </span>
                <span
                  className={`shrink-0 w-9 h-9 border border-gold flex items-center justify-center text-gold transition-transform duration-300 ${
                    open === i ? "rotate-45" : ""
                  }`}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M7 1v12M1 7h12" strokeLinecap="round" />
                  </svg>
                </span>
              </button>
              <div className={`disclosure ${open === i ? "disclosure-open" : ""}`}>
                <div>
                  <div className="pb-6 pr-12 text-navy/75 leading-relaxed">
                    {f.a}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
