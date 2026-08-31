"use client";

import { useEffect } from "react";

/**
 * Image-beacon fallback for the Vibe pixel.
 *
 * WHY: Vibe's script host is unreliable. Measured 2026-08-30 by fetching the
 * script directly — no browser, no page involved:
 *
 *     s.vibe.co/vbpx.js        2/12 succeeded  (ECONNRESET on a second,
 *                                               independent network too)
 *     tracker.vibe.co/vbpx.js  0/12            (the host in Vibe's own docs)
 *     t.vibe.co/pixel/s        8/8             (the event COLLECTOR)
 *
 * The collector is healthy; only the script host fails. When it fails, the
 * synchronously-queued page_view — and any lead queued behind it — are
 * discarded with nothing logged anywhere.
 *
 * WHY NOT eid DEDUPLICATION: the script builds its own event id as
 * `eid: uuid()`, a fresh random UUID per event (confirmed by reading the
 * de-minified vbpx.js). It is not derived from anything a second sender can
 * observe or reproduce, so two independent senders can never agree on an eid
 * and Vibe would count two events, not one.
 *
 * So this does not dedupe — it makes the two paths MUTUALLY EXCLUSIVE:
 *
 *   1. Wait a grace period for the real script.
 *   2. If `vbpx.process` exists, the script won its race. Do nothing at all.
 *   3. Otherwise take ownership: drain `vbpx.queue` and send each queued event
 *      as an image beacon, then install ourselves as `vbpx.process` so later
 *      calls go straight out.
 *
 * Draining the queue is what makes it safe. The real script replays with
 * `for (i=0; i<px.queue.length; i++) px.process(...px.queue[i])`, so a script
 * that arrives late finds an empty queue and replays nothing. Exactly one
 * sender handles each event.
 */

const AID = "MuZz4z";
const COLLECTOR = "https://t.vibe.co/pixel/s";
const PIXEL_VERSION = 4;

/** Long enough for a healthy load (measured median ~560-740ms), short enough
 *  that a visitor who taps to call still gets their lead sent. */
const GRACE_MS = 3500;

type VbpxStub = {
  (...args: unknown[]): void;
  queue?: unknown[];
  process?: (...args: unknown[]) => void;
};

function readCookie(name: string): string {
  const m = document.cookie.match(new RegExp("(?:^|; )" + name + "=([^;]*)"));
  return m ? decodeURIComponent(m[1]) : "";
}

function randomEventId(): string {
  const c = globalThis.crypto;
  if (c && typeof c.randomUUID === "function") return c.randomUUID();
  return `${Date.now().toString(16)}-${Math.random().toString(16).slice(2, 14)}`;
}

/**
 * Fire one event as an image beacon. Mirrors the parameter set the real script
 * sends, so rows from either path look the same in Vibe.
 */
function sendBeacon(eventName: string): void {
  try {
    const params = new URLSearchParams({
      aid: AID,
      cid: readCookie("_vb"),
      gid: readCookie("_ga"),
      eid: randomEventId(),
      a: eventName,
      ed: "",
      v: String(PIXEL_VERSION),
      url: location.href,
      ifr: window.top === window.self ? "0" : "1",
      ref: document.referrer,
      ts: String(Date.now()),
      sr: `${screen.width}x${screen.height}`,
      vp: `${window.innerWidth}x${window.innerHeight}`,
    });
    // An Image get is used rather than fetch/sendBeacon so it behaves like
    // Vibe's own documented image-pixel integrations and survives a page that
    // is being unloaded into the dialer.
    new Image().src = `${COLLECTOR}?${params.toString()}`;
  } catch {
    // Tracking must never throw into the page.
  }
}

/** The stub queues `["event", "page_view"]`-shaped arg lists. */
function eventNameFrom(args: unknown): string | null {
  const a = Array.isArray(args) ? args : Array.from((args ?? []) as ArrayLike<unknown>);
  if (a.length >= 2 && a[0] === "event" && typeof a[1] === "string") return a[1];
  return null;
}

export default function VibePixelFallback() {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      const px = (window as unknown as { vbpx?: VbpxStub }).vbpx;
      if (!px) return; // no stub at all — nothing to rescue
      if (typeof px.process === "function") return; // the real script won; stay out of its way

      const queued = Array.isArray(px.queue) ? px.queue.slice() : [];
      px.queue = []; // take ownership: a late-arriving script now replays nothing

      for (const args of queued) {
        const name = eventNameFrom(args);
        if (name) sendBeacon(name);
      }

      // Route anything fired from here on straight to the collector. If the
      // real script does eventually land it overwrites this, and its queue is
      // already empty, so no event is sent twice either way.
      px.process = (...args: unknown[]) => {
        const name = eventNameFrom(args);
        if (name) sendBeacon(name);
      };
    }, GRACE_MS);

    return () => window.clearTimeout(timer);
  }, []);

  return null;
}
