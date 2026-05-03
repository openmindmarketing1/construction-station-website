"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ImageUpload from "@/components/ImageUpload";
import { CS, HOURS, SERVICES } from "@/lib/constants";

const PROJECT_TYPES = [
  ...SERVICES.map((s) => s.name),
  "Commercial",
  "Other",
];

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  const [form, setForm] = useState({
    full_name: "",
    phone: "",
    email: "",
    address: "",
    service_requested: "",
    notes: "",
    honeypot: "",
  });

  function update<K extends keyof typeof form>(k: K, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.full_name || !form.phone) {
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
          full_name: form.full_name,
          phone: form.phone,
          email: form.email || undefined,
          address: form.address || undefined,
          service_requested: form.service_requested || undefined,
          notes: form.notes || undefined,
          source: "website",
          images: imageUrls,
        }),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setSubmitted(true);
    } catch {
      setError(
        `Something went wrong. Please call us at ${CS.phone}.`
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      {/* Hero band */}
      <section className="bg-navy texture-navy text-white pt-36 pb-16 lg:pt-44 lg:pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 80% 30%, rgba(201,162,39,0.25) 0%, transparent 55%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-5 lg:px-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-px bg-gold" />
            <span className="text-gold text-xs uppercase tracking-[0.4em]">
              Begin Your Project
            </span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1] mb-5"
          >
            Get your <span className="italic text-gold">free</span> estimate.
          </motion.h1>
          <p className="text-white/75 max-w-xl text-base md:text-lg">
            No obligation. Our design consultations are normally $299 — free
            for new clients. We&rsquo;ll respond within 2 business hours.
          </p>
        </div>
      </section>

      <section className="bg-cream py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-7">
              {!submitted ? (
                <div className="bg-white p-6 md:p-10 border-t-4 border-gold">
                  <div className="text-gold text-xs tracking-[0.3em] uppercase mb-2">
                    Estimate Request
                  </div>
                  <h2 className="font-display text-navy text-3xl md:text-4xl mb-2">
                    Tell us about your project
                  </h2>
                  <p className="text-navy/60 text-sm mb-8">
                    The more detail you share, the more accurate your
                    estimate. Photos help a lot.
                  </p>

                  <form onSubmit={onSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <Field
                        label="Full Name"
                        id="full_name"
                        required
                        value={form.full_name}
                        onChange={(v) => update("full_name", v)}
                        placeholder="Jane Doe"
                      />
                      <Field
                        label="Phone"
                        id="phone"
                        required
                        type="tel"
                        value={form.phone}
                        onChange={(v) => update("phone", v)}
                        placeholder="(909) 555-0123"
                      />
                      <Field
                        label="Email"
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(v) => update("email", v)}
                        placeholder="you@email.com"
                      />
                      <Field
                        label="Address"
                        id="address"
                        value={form.address}
                        onChange={(v) => update("address", v)}
                        placeholder="City or full address"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-navy/70 mb-2">
                        Project Type
                      </label>
                      <select
                        value={form.service_requested}
                        onChange={(e) =>
                          update("service_requested", e.target.value)
                        }
                        className="w-full border-b-2 border-navy/20 focus:border-gold py-3 outline-none bg-transparent text-navy"
                      >
                        <option value="">Select a project type…</option>
                        {PROJECT_TYPES.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-navy/70 mb-2">
                        Project Description
                      </label>
                      <textarea
                        value={form.notes}
                        onChange={(e) => update("notes", e.target.value)}
                        rows={5}
                        className="w-full border-b-2 border-navy/20 focus:border-gold py-3 outline-none bg-transparent resize-none text-navy"
                        placeholder="Layout changes, finish ideas, timing, budget range, anything else…"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-navy/70 mb-2">
                        Photos (optional)
                      </label>
                      <ImageUpload onChange={setImageUrls} />
                    </div>

                    {/* Honeypot — hidden from humans, traps bots */}
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
                      <div className="bg-red-50 border border-red-300 text-red-800 px-4 py-3 text-sm">
                        {error}
                      </div>
                    )}

                    <button
                      disabled={submitting}
                      className="w-full bg-navy text-white font-body uppercase tracking-[0.2em] text-sm py-5 hover:bg-gold hover:text-navy transition-colors disabled:opacity-60"
                    >
                      {submitting ? "Sending…" : "Book My Free Consultation"}
                    </button>
                    <div className="text-xs text-navy/50 text-center">
                      By submitting you agree to be contacted by Construction
                      Station. We never sell your info.
                    </div>
                  </form>
                </div>
              ) : (
                <div className="bg-white p-10 border-t-4 border-gold text-center">
                  <div className="w-16 h-16 bg-gold/20 border border-gold flex items-center justify-center mx-auto mb-5">
                    <svg
                      className="w-8 h-8 text-gold"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M5 12l5 5L20 7" strokeLinecap="round" />
                    </svg>
                  </div>
                  <h2 className="font-display text-navy text-3xl md:text-4xl mb-3">
                    We&rsquo;ll call you within 2 hours!
                  </h2>
                  <p className="text-navy/70 max-w-md mx-auto">
                    Thanks {form.full_name.split(" ")[0]}. A team member is
                    already reviewing your request. If your project is urgent,
                    you can reach us directly at{" "}
                    <a
                      href={CS.phoneHref}
                      className="text-gold underline underline-offset-4"
                    >
                      {CS.phone}
                    </a>
                    .
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar info */}
            <aside className="lg:col-span-5 space-y-8">
              <div className="bg-navy texture-navy text-white p-8">
                <div className="text-gold text-xs tracking-[0.3em] uppercase mb-3">
                  Direct Line
                </div>
                <a
                  href={CS.phoneHref}
                  className="font-display text-4xl md:text-5xl text-white hover:text-gold transition-colors block leading-none"
                >
                  {CS.phone}
                </a>
                <a
                  href={`mailto:${CS.email}`}
                  className="text-white/70 hover:text-gold text-sm mt-3 inline-block"
                >
                  {CS.email}
                </a>

                <div className="border-t border-white/10 mt-6 pt-6">
                  <div className="text-gold text-xs tracking-[0.3em] uppercase mb-3">
                    Hours
                  </div>
                  {HOURS.map((h) => (
                    <div
                      key={h.day}
                      className="flex justify-between text-white/80 text-sm py-1"
                    >
                      <span>{h.day}</span>
                      <span>{h.time}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-white/10 mt-6 pt-6 grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <div className="text-gold text-xs uppercase tracking-wider mb-1">
                      License
                    </div>
                    <div className="text-white">{CS.license}</div>
                  </div>
                  <div>
                    <div className="text-gold text-xs uppercase tracking-wider mb-1">
                      BBB
                    </div>
                    <div className="text-white">{CS.bbb} Accredited</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 border border-navy/10">
                <div className="text-gold text-xs tracking-[0.3em] uppercase mb-3">
                  Why Our Estimate Is Different
                </div>
                <ul className="space-y-4">
                  {[
                    "Fixed line-item pricing — no &lsquo;allowance&rsquo; fine print",
                    "3D rendering included before contract",
                    "In-home measure, not over-the-phone guesses",
                  ].map((b, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="font-display text-gold text-2xl leading-none">
                        0{i + 1}
                      </span>
                      <span
                        className="text-navy/80 text-sm leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: b }}
                      />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Map */}
              <div className="bg-white border border-navy/10 overflow-hidden">
                <div className="aspect-[4/3] w-full">
                  <iframe
                    title="Service Area Map — Inland Empire"
                    src="https://www.google.com/maps?q=Redlands,CA&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="p-5">
                  <div className="text-gold text-xs tracking-[0.3em] uppercase mb-1">
                    Service Area
                  </div>
                  <div className="text-navy text-sm">
                    Inland Empire, California — Redlands, Yucaipa, Riverside,
                    Rancho Cucamonga, and surrounding cities.
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  id,
  value,
  onChange,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs uppercase tracking-wider text-navy/70 mb-2">
        {label} {required && <span className="text-gold">*</span>}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full border-b-2 border-navy/20 focus:border-gold py-3 outline-none bg-transparent text-navy"
      />
    </div>
  );
}
