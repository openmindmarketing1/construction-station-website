"use client";

import { useState } from "react";
import { CS } from "@/lib/constants";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

const GUIDE_URL = "/kitchen-remodel-cost-guide-2026.pdf";

const BULLETS = [
  "Average costs for IE kitchen remodels",
  "Cost breakdown by component",
  "Timeline and what to expect",
  "5 costly mistakes to avoid",
  "How to choose the right contractor",
];

export default function LeadMagnetCard() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch(CS.leadsApiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          business_id: CS.businessId,
          full_name: name || undefined,
          email,
          source: "lead_magnet",
          service_requested: "kitchen_remodel",
        }),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      if (typeof window !== "undefined" && window.fbq) {
        window.fbq("track", "Lead", { content_name: "kitchen_cost_guide" });
      }
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-white border-t-4 border-gold p-8 lg:p-10 text-center">
        <div className="w-14 h-14 bg-gold/20 border border-gold flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12l5 5L20 7" strokeLinecap="round" />
          </svg>
        </div>
        <h3 className="font-display text-navy text-2xl mb-2">Check your email!</h3>
        <p className="text-navy/70 text-sm mb-6">Your guide is on the way.</p>
        <a
          href={GUIDE_URL}
          download
          className="inline-flex items-center gap-2 bg-gold text-navy font-body font-semibold px-6 py-3 uppercase tracking-[0.15em] text-sm hover:bg-yellow-400 transition-colors"
        >
          <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          Download Your Guide Now
        </a>
      </div>
    );
  }

  return (
    <div className="bg-white border-t-4 border-gold p-8 lg:p-10">
      <div className="flex items-start gap-3 mb-2">
        <span className="shrink-0 bg-gold text-navy text-[10px] font-semibold px-2 py-1 uppercase tracking-wider mt-0.5">
          FREE
        </span>
        <h3 className="font-display text-navy text-xl md:text-2xl leading-snug">
          2026 Kitchen Remodel Cost Guide
        </h3>
      </div>
      <p className="text-navy/60 text-sm mb-5 pl-[calc(2.5rem+0.75rem)]">
        What Inland Empire homeowners need to know before starting their project
      </p>
      <ul className="space-y-2 mb-6">
        {BULLETS.map((b) => (
          <li key={b} className="flex items-start gap-2.5 text-sm text-navy/80">
            <span className="text-gold font-bold mt-0.5 shrink-0">✓</span>
            {b}
          </li>
        ))}
      </ul>
      <form onSubmit={onSubmit} className="space-y-3">
        <input
          id="lm-name"
          type="text"
          placeholder="Your name (optional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border-b-2 border-navy/20 focus:border-gold py-3 outline-none bg-transparent text-navy placeholder:text-navy/35 text-sm"
        />
        <input
          id="lm-email"
          type="email"
          required
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border-b-2 border-navy/20 focus:border-gold py-3 outline-none bg-transparent text-navy placeholder:text-navy/35 text-sm"
        />
        {error && <p className="text-red-700 text-xs">{error}</p>}
        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-navy text-white font-body uppercase tracking-[0.2em] text-sm py-4 hover:bg-gold hover:text-navy transition-colors disabled:opacity-60"
        >
          {submitting ? "Sending…" : "Download Free Guide"}
        </button>
        <p className="text-xs text-navy/40 text-center">
          We&rsquo;ll email you the guide instantly. No spam, unsubscribe anytime.
        </p>
      </form>
    </div>
  );
}
