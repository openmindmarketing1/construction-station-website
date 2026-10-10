// Browser-side first-touch + last-click capture. Mirrors OMM's
// src/lib/first-touch-client.ts and uses the same localStorage keys as the
// OMM chat widget (public/widget/chat.js), so the widget and these forms agree.
//
// First touch: written once, on the first visit, never overwritten.
// Last click: rewritten on every visit that arrives with an ad click id —
// Google's offline import credits the click that led to the lead.
// Forms send readFirstTouch() as `first_touch`.

const FIRST_TOUCH_KEY = "omm_first_touch";
const LAST_CLICK_KEY = "omm_last_click";

const PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid", "gbraid", "wbraid", "fbclid"] as const;
const CLICK_PARAMS = ["gclid", "gbraid", "wbraid", "fbclid"] as const;

type Touch = Record<string, unknown>;

/** Record this visit as the first touch unless one is stored, and as the last
 *  click when it carries a click id. Never throws. */
export function captureFirstTouch(): void {
  if (typeof window === "undefined") return;
  try {
    const q = new URLSearchParams(window.location.search);
    const landingPage = (window.location.origin + window.location.pathname).slice(0, 500);
    const click: Record<string, string> = {};
    for (const k of CLICK_PARAMS) {
      const v = q.get(k);
      if (v) click[k] = v.slice(0, 500);
    }
    if (Object.keys(click).length > 0) {
      click.landing_page = landingPage;
      click.at = new Date().toISOString();
      window.localStorage.setItem(LAST_CLICK_KEY, JSON.stringify(click));
    }

    if (window.localStorage.getItem(FIRST_TOUCH_KEY)) return;
    const t: Record<string, string> = { landing_page: landingPage, first_seen_at: new Date().toISOString() };
    if (document.referrer) t.referrer = document.referrer.slice(0, 500);
    for (const k of PARAMS) {
      const v = q.get(k);
      if (v) t[k] = v.slice(0, 500);
    }
    window.localStorage.setItem(FIRST_TOUCH_KEY, JSON.stringify(t));
  } catch {
    // Storage blocked (private mode, disabled) — attribution is best-effort.
  }
}

/** The stored first touch with `last_click` attached, or null. Never throws. */
export function readFirstTouch(): Touch | null {
  if (typeof window === "undefined") return null;
  captureFirstTouch();
  try {
    const raw = window.localStorage.getItem(FIRST_TOUCH_KEY);
    if (!raw) return null;
    const t = JSON.parse(raw) as Touch;
    const lc = window.localStorage.getItem(LAST_CLICK_KEY);
    if (lc) t.last_click = JSON.parse(lc);
    return t;
  } catch {
    return null;
  }
}
