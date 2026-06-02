"use client";

import { useState } from "react";
import { CS } from "@/lib/constants";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export default function FlooringQuickForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", honeypot: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function update<K extends keyof typeof form>(k: K, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.phone) {
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
      const res = await fetch(CS.leadsApiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          business_id: CS.businessId,
          full_name: form.name,
          phone: form.phone,
          email: form.email || undefined,
          source: "flooring_form",
          service_requested: "flooring_installation",
        }),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      if (typeof window !== "undefined" && window.fbq) {
        window.fbq("track", "Lead", { content_name: "flooring_contact" });
      }
      setSubmitted(true);
    } catch {
      setError(`Something went wrong. Please call us at ${CS.phone}.`);
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-white p-8 md:p-10 border-t-4 border-gold text-center">
        <div className="w-14 h-14 bg-gold/20 border border-gold flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-7 h-7 text-gold"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M5 12l5 5L20 7" strokeLinecap="round" />
          </svg>
        </div>
        <h3 className="font-display text-navy text-2xl mb-2">
          We&rsquo;ll call you within 2 hours!
        </h3>
        <p className="text-navy/65 text-sm">
          Thanks {form.name.split(" ")[0]}. A team member is already reviewing
          your flooring request.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-10 border-t-4 border-gold">
      <div className="text-gold text-xs tracking-[0.3em] uppercase mb-2">
        Free Estimate
      </div>
      <h3 className="font-display text-navy text-2xl md:text-3xl mb-1">
        Get your free flooring quote
      </h3>
      <p className="text-navy/60 text-sm mb-6">
        Leave your info and we&rsquo;ll reach out within 2 business hours with
        pricing for your project.
      </p>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="ff-name"
            className="block text-xs uppercase tracking-wider text-navy/70 mb-2"
          >
            Full Name <span className="text-gold">*</span>
          </label>
          <input
            id="ff-name"
            required
            type="text"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Jane Doe"
            className="w-full border-b-2 border-navy/20 focus:border-gold py-3 outline-none bg-transparent text-navy"
          />
        </div>
        <div>
          <label
            htmlFor="ff-phone"
            className="block text-xs uppercase tracking-wider text-navy/70 mb-2"
          >
            Phone <span className="text-gold">*</span>
          </label>
          <input
            id="ff-phone"
            required
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="(909) 555-0123"
            className="w-full border-b-2 border-navy/20 focus:border-gold py-3 outline-none bg-transparent text-navy"
          />
        </div>
        <div>
          <label
            htmlFor="ff-email"
            className="block text-xs uppercase tracking-wider text-navy/70 mb-2"
          >
            Email
          </label>
          <input
            id="ff-email"
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="you@email.com"
            className="w-full border-b-2 border-navy/20 focus:border-gold py-3 outline-none bg-transparent text-navy"
          />
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
          <p className="bg-red-50 border border-red-300 text-red-800 px-3 py-2 text-sm">
            {error}
          </p>
        )}
        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-navy text-white font-body uppercase tracking-[0.2em] text-sm py-4 hover:bg-gold hover:text-navy transition-colors disabled:opacity-60"
        >
          {submitting ? "Sending…" : "Get My Free Quote"}
        </button>
        <p className="text-xs text-navy/45 text-center">
          No obligation. We&rsquo;ll never sell your info. CSLB #1108879.
        </p>
      </form>
    </div>
  );
}
