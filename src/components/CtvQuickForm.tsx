"use client";
import { callbackConfirmation } from "@/lib/callback-promise";

import { useState } from "react";
import { CS } from "@/lib/constants";
import { vibeLead } from "@/lib/vibe";
import { QUICKFORM_TRANSACTIONAL_V1 } from "@/lib/sms-consent";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

// Callback form for the CTV landing page.
//
// Posts cross-origin to OMM's /api/leads/callback — the LIVE endpoint. The
// site's other forms use CS.leadsApiUrl (/api/leads/landing), which 404s.
// constructionstation.com is on that route's CORS allowlist, and the post goes
// straight from the visitor's browser on purpose: proxying it through this
// site's server would put every lead on one egress IP and trip the endpoint's
// per-visitor rate limit during a TV spot.
//
// source "ctv_landing" and service "general_remodel" are both on the route's
// allowlist, so a TV-driven lead is attributable in the CRM instead of
// silently defaulting into the Facebook bucket.
const BEST_TIMES = [
  { value: "", label: "Any time" },
  { value: "morning", label: "Morning (8–11am)" },
  { value: "afternoon", label: "Afternoon (11am–3pm)" },
  { value: "evening", label: "Evening (3–6pm)" },
];

export default function CtvQuickForm() {
  const [form, setForm] = useState({ name: "", phone: "", bestTime: "", honeypot: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function update<K extends keyof typeof form>(k: K, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      setError("Name and phone are required.");
      return;
    }
    if (form.honeypot) {
      setSubmitted(true);
      return;
    }
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch(CS.callbackApiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: form.name.trim(),
          phone: form.phone.trim(),
          best_time: form.bestTime || undefined,
          source: "ctv_landing",
          service_requested: "general_remodel",
          campaign_name: "CS CTV - General Remodeling",
          // Disclosure below the submit button renders from this same
          // constant, so the evidence matches what the visitor read.
          sms_transactional_consent: true,
          sms_consent_text: QUICKFORM_TRANSACTIONAL_V1,
        }),
      });
      // Only a confirmed 2xx counts as submitted. Never show "got it" for a
      // lead the server did not save.
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      if (typeof window !== "undefined" && window.fbq) {
        window.fbq("track", "Lead", { content_name: "ctv_landing" });
      }
      vibeLead();
      setSubmitted(true);
    } catch {
      setError(`Something went wrong. Please call us at ${CS.ctvPhone}.`);
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-white p-6 sm:p-8 border-t-4 border-gold text-center" role="status" aria-live="polite">
        <div className="w-14 h-14 bg-gold/20 border border-gold flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-gold-deep" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path d="M5 12l5 5L20 7" strokeLinecap="round" />
          </svg>
        </div>
        <h3 className="font-display text-navy text-2xl mb-2">
          Got it — we&rsquo;ll call you.
        </h3>
        <p className="text-navy/65 text-sm">
          Thanks {form.name.trim().split(" ")[0]}. {callbackConfirmation()} A
          project coordinator follows up during business hours.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 sm:p-8 border-t-4 border-gold">
      <div className="text-gold-deep text-xs tracking-[0.3em] uppercase mb-2">
        Get a Callback
      </div>
      <h3 className="font-display text-navy text-2xl sm:text-3xl mb-1">
        Rather we call you?
      </h3>
      <p className="text-navy/60 text-sm mb-6">
        Name and number is all we need. No obligation.
      </p>
      <form onSubmit={onSubmit} className="space-y-5">
        <div>
          <label htmlFor="ctv-name" className="block text-xs uppercase tracking-wider text-navy/70 mb-2">
            Full Name <span className="text-gold-deep">*</span>
          </label>
          <input
            id="ctv-name"
            required
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Jane Doe"
            className="w-full border-b-2 border-navy/20 focus:border-gold py-3 text-base outline-none bg-transparent text-navy"
          />
        </div>
        <div>
          <label htmlFor="ctv-phone" className="block text-xs uppercase tracking-wider text-navy/70 mb-2">
            Phone <span className="text-gold-deep">*</span>
          </label>
          <input
            id="ctv-phone"
            required
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="(909) 555-0123"
            className="w-full border-b-2 border-navy/20 focus:border-gold py-3 text-base outline-none bg-transparent text-navy"
          />
        </div>
        <div>
          <label htmlFor="ctv-time" className="block text-xs uppercase tracking-wider text-navy/70 mb-2">
            Best time to reach you
          </label>
          <select
            id="ctv-time"
            value={form.bestTime}
            onChange={(e) => update("bestTime", e.target.value)}
            className="w-full border-b-2 border-navy/20 focus:border-gold py-3 text-base outline-none bg-transparent text-navy"
          >
            {BEST_TIMES.map((t) => (
              <option key={t.label} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </div>
        {/* Honeypot */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={form.honeypot}
          onChange={(e) => update("honeypot", e.target.value)}
          className="sr-only"
          aria-hidden="true"
        />
        {error && (
          <p className="bg-red-50 border border-red-300 text-red-800 px-3 py-2 text-sm" role="alert">
            {error}
          </p>
        )}
        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-navy text-white font-body uppercase tracking-[0.2em] text-sm py-4 hover:bg-gold hover:text-navy transition-colors disabled:opacity-60"
        >
          {submitting ? "Sending…" : "Request a Callback"}
        </button>
        <p className="text-xs text-navy/45 text-center leading-snug">
          {QUICKFORM_TRANSACTIONAL_V1}
        </p>
      </form>
    </div>
  );
}
