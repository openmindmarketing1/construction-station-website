"use client";

import { CS } from "@/lib/constants";
import { vibeLead } from "@/lib/vibe";

// Call bar for /remodeling. Replaces the site-wide FloatingCTA (which links
// the office line) so the only number reachable from this page is the CTV
// tracking number.
//
// FIXED to the bottom on phones — every visitor arrives by QR from a TV, so the
// call has to stay one thumb-reach away through the whole scroll. From lg it
// becomes a NORMAL INLINE element at the end of the document: a desktop reader
// is not thumb-driven, and a floating bar there only covers content.
//
// Tapping to call fires the Vibe lead event. On a page reached only by scanning
// a QR off a television, a tap-to-call IS the conversion — and it is the only
// client-side signal a call ever produces, since the call itself happens in the
// dialer where no pixel can follow.
export default function CtvCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-navy border-t-2 border-gold shadow-2xl lg:static lg:z-auto lg:border-t-0 lg:shadow-none lg:bg-navy lg:texture-navy lg:pt-0 lg:pb-16">
      <a
        href={CS.ctvPhoneHref}
        onClick={() => vibeLead()}
        className="flex items-center justify-center gap-3 py-4 px-4 text-navy bg-gold font-body font-bold text-lg tracking-wide active:bg-gold-light lg:max-w-md lg:mx-auto lg:py-5 lg:text-xl lg:hover:bg-gold-light lg:transition-colors"
      >
        <svg
          className="w-5 h-5 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          aria-hidden="true"
        >
          <path
            d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Call {CS.ctvPhone}
      </a>
    </div>
  );
}
