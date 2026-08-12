"use client";

import { useEffect } from "react";
import { vibeLead } from "@/lib/vibe";

// Calendly's inline embed posts a message to the parent window the moment a
// booking completes. Firing the Vibe lead here keeps it in the top window —
// Calendly's confirmation-page redirect setting would instead navigate inside
// the iframe, so the pixel would fire with ifr:1 and risk misattribution.
export default function useCalendlyVibeLead() {
  useEffect(() => {
    function onMessage(e: MessageEvent) {
      const data = e.data as { event?: string } | null;
      if (e.origin === "https://calendly.com" && data?.event === "calendly.event_scheduled") {
        vibeLead();
      }
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);
}
