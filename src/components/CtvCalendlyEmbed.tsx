"use client";

import Script from "next/script";
import { CS } from "@/lib/constants";
import useCalendlyVibeLead from "@/components/useCalendlyVibeLead";

// ═══════════════════════════════════════════════════════════════════════════
//  ⚠️  PLACEHOLDER — PUT THE CTV CALENDLY URL ON THE NEXT LINE. NOWHERE ELSE.
//
//  This page needs its OWN Calendly event type so bookings driven by the TV
//  spot are distinguishable from web and paid-search bookings. For reference,
//  the existing ones are:
//     /contact + /kitchen-remodeler-yucaipa-ca → .../free-kitchen-design-consultation
//     ADU pages                                → .../free-adu-remodeling-consult
//
//  While this constant is empty the section renders a "book by phone" card
//  instead of an embed — an empty data-url renders a broken Calendly iframe,
//  which is worse than no iframe at all.
//
//  To go live: create the event type in Calendly, paste its full URL below,
//  commit, deploy. Nothing else changes — the Vibe lead event on booking is
//  already wired through useCalendlyVibeLead().
//
//    e.g. "https://calendly.com/constructionstation-sales/tv-remodeling-consult"
// ═══════════════════════════════════════════════════════════════════════════
const CTV_CALENDLY_URL = "";

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
          Call and we&rsquo;ll put your free in-home consultation on the
          calendar while you&rsquo;re on the line.
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
