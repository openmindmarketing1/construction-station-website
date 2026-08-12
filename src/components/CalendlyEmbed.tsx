"use client";

import Script from "next/script";
import useCalendlyVibeLead from "@/components/useCalendlyVibeLead";

const CALENDLY_URL =
  "https://calendly.com/constructionstation-sales/free-kitchen-design-consultation";

export default function CalendlyEmbed() {
  useCalendlyVibeLead();
  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      <div
        className="calendly-inline-widget w-full"
        data-url={CALENDLY_URL}
        style={{ minWidth: "320px", height: "700px" }}
      />
    </>
  );
}
