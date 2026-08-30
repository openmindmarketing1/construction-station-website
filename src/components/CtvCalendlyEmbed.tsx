"use client";

import Script from "next/script";
import { CS } from "@/lib/constants";
import useCalendlyVibeLead from "@/components/useCalendlyVibeLead";

// The CTV lander's OWN Calendly event, so bookings driven by the TV spot are
// distinguishable from web and paid-search bookings.
//
// Verified live 2026-08-30: "Home Remodeling Initial Call" — 30 min, PHONE
// CALL, Pacific Time, under the constructionstation-sales account. It is NOT a
// site visit and NOT an estimate; the copy around this embed says so, because a
// homeowner who books expecting someone at their door with a quote is a bad
// first appointment for everyone.
//
// The other landers point at:
//   /contact + /kitchen-remodeler-yucaipa-ca → .../free-kitchen-design-consultation
//   ADU pages                                → .../free-adu-remodeling-consult
const CTV_CALENDLY_URL =
  "https://calendly.com/constructionstation-sales/home-remodeling-initial-call";

export default function CtvCalendlyEmbed() {
  useCalendlyVibeLead();

  if (!CTV_CALENDLY_URL) {
    // Fallback until the CTV event type exists. Never render a dead embed —
    // and on a phone-first page the call is the better conversion anyway.
    return (
      <div className="bg-white border border-navy/10 p-6 sm:p-8 text-center">
        <div className="text-gold-deep text-xs tracking-[0.3em] uppercase mb-3">
          Book by phone
        </div>
        <p className="text-navy/70 text-base leading-relaxed mb-6">
          Call and we&rsquo;ll set up your intro call while you&rsquo;re on the
          line.
        </p>
        <a
          href={CS.ctvPhoneHref}
          className="inline-flex w-full sm:w-auto items-center justify-center gap-3 bg-navy text-white font-body font-semibold px-8 py-4 text-lg tracking-wide active:bg-navy-light"
        >
          {CS.ctvPhone}
        </a>
      </div>
    );
  }

  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      <div
        className="calendly-inline-widget w-full"
        data-url={CTV_CALENDLY_URL}
        style={{ minWidth: "280px", height: "700px" }}
      />
    </>
  );
}
