"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { CS } from "@/lib/constants";

type Props = {
  heading: string;
  subheading?: string;
  showForm?: boolean;
};

export default function CtaSection({
  heading,
  subheading = "Free design session — normally $299. Book yours today.",
  showForm = false,
}: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitting(true);
    setError(null);
    try {
      await fetch(CS.leadsApiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          business_id: CS.businessId,
          full_name: name,
          phone,
          source: "homepage_cta",
        }),
      });
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please call us at " + CS.phone);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="relative bg-navy texture-navy text-white py-24 lg:py-32 clip-diagonal overflow-hidden">
      {/* Decorative editorial elements */}
      <div className="absolute top-10 left-10 w-px h-24 bg-gold opacity-50" />
      <div className="absolute top-10 left-10 text-gold/60 text-[10px] tracking-[0.4em] uppercase rotate-90 origin-top-left translate-x-3 translate-y-2">
        Begin your project
      </div>

      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 80% 20%, rgba(201,162,39,0.25) 0%, transparent 50%), radial-gradient(ellipse at 10% 80%, rgba(201,162,39,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className={showForm ? "lg:col-span-7" : "lg:col-span-12 text-center max-w-4xl mx-auto"}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className={`flex items-center gap-3 mb-5 ${showForm ? "" : "justify-center"}`}>
                <span className="w-10 h-px bg-gold" />
                <span className="text-gold text-xs uppercase tracking-[0.4em]">
                  Ready When You Are
                </span>
                {!showForm && <span className="w-10 h-px bg-gold" />}
              </div>
              <h2 className="font-display text-white text-5xl md:text-6xl lg:text-7xl leading-[1] mb-6">
                {heading}
              </h2>
              <p className="text-gold/90 text-base md:text-lg mb-10 max-w-xl">
                {subheading}
              </p>

              {!showForm && (
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={CS.phoneHref}
                    className="bg-gold text-navy font-body font-semibold px-8 py-4 uppercase tracking-[0.2em] text-sm hover:bg-gold-light transition-colors"
                  >
                    Call {CS.phone}
                  </a>
                  <Link
                    href="/contact"
                    className="border border-white/40 text-white font-body px-8 py-4 uppercase tracking-[0.2em] text-sm hover:border-gold hover:text-gold transition-colors"
                  >
                    Book Free Consultation
                  </Link>
                </div>
              )}
            </motion.div>
          </div>

          {showForm && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-5"
            >
              <div className="bg-white text-navy p-8 lg:p-10 relative">
                <div className="absolute -top-3 left-8 bg-gold px-3 py-1 text-navy text-[10px] tracking-[0.3em] uppercase font-semibold">
                  Free Estimate
                </div>
                {!submitted ? (
                  <form onSubmit={onSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-navy/70 mb-2">
                        Full Name
                      </label>
                      <input
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full border-b-2 border-navy/20 focus:border-gold py-3 outline-none bg-transparent"
                        placeholder="Jane Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-navy/70 mb-2">
                        Phone
                      </label>
                      <input
                        required
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full border-b-2 border-navy/20 focus:border-gold py-3 outline-none bg-transparent"
                        placeholder="(909) 555-0123"
                      />
                    </div>
                    {error && (
                      <div className="text-red-700 text-sm">{error}</div>
                    )}
                    <button
                      disabled={submitting}
                      className="w-full bg-navy text-white font-body uppercase tracking-[0.2em] text-sm py-4 hover:bg-gold hover:text-navy transition-colors disabled:opacity-60"
                    >
                      {submitting ? "Sending..." : "Book My Consultation"}
                    </button>
                    <div className="text-xs text-navy/50">
                      We&rsquo;ll call within 2 business hours. No obligation.
                    </div>
                  </form>
                ) : (
                  <div className="py-6 text-center">
                    <div className="w-14 h-14 bg-gold/20 border border-gold flex items-center justify-center mx-auto mb-4">
                      <svg className="w-7 h-7 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12l5 5L20 7" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div className="font-display text-2xl mb-2">Thank you!</div>
                    <div className="text-sm text-navy/70">
                      We&rsquo;ll call you within 2 business hours.
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
