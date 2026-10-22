"use client";

/**
 * The browser half of the lead-form bot check (the server half is OMM's
 * src/lib/leads/bot-check.ts, behind /api/leads/landing and /callback).
 * Renders a hidden field no person sees and, when NEXT_PUBLIC_TURNSTILE_SITE_KEY
 * is set, Cloudflare Turnstile in "interaction-only" mode: invisible unless
 * Cloudflare wants a click. `payload()` returns the fields the form adds to
 * its POST body; it waits a few seconds for the token if the visitor submits
 * before Turnstile has finished, and sends without one rather than hold a
 * real customer up.
 *
 * Forms that already have their own hidden "website" field pass
 * { honeypot: false } and send that field's value as `hp` themselves.
 */

import { useCallback, useEffect, useRef, type ReactNode } from "react";

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";
const SCRIPT_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
const TOKEN_WAIT_MS = 5000;

type Turnstile = {
  render: (el: HTMLElement, opts: Record<string, unknown>) => string;
  reset: (id: string) => void;
  remove: (id: string) => void;
};
declare global {
  interface Window {
    turnstile?: Turnstile;
  }
}

let scriptPromise: Promise<void> | null = null;
function loadScript(): Promise<void> {
  if (window.turnstile) return Promise.resolve();
  scriptPromise ??= new Promise<void>((resolve, reject) => {
    const s = document.createElement("script");
    s.src = SCRIPT_SRC;
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => {
      scriptPromise = null;
      reject(new Error("turnstile script failed to load"));
    };
    document.head.appendChild(s);
  });
  return scriptPromise;
}

export interface BotGuard {
  /** Place inside the <form>. */
  node: ReactNode;
  /** Fields to spread into the POST body. */
  payload: () => Promise<{ hp?: string; turnstile_token: string | null }>;
  /** After a failed submit: tokens are single-use, so get a fresh one. */
  reset: () => void;
}

export function useBotGuard({ honeypot = true }: { honeypot?: boolean } = {}): BotGuard {
  const hpRef = useRef<HTMLInputElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);
  const token = useRef<string | null>(null);
  const waiters = useRef<Array<(t: string | null) => void>>([]);

  useEffect(() => {
    if (!SITE_KEY || !boxRef.current) return;
    let cancelled = false;
    loadScript()
      .then(() => {
        if (cancelled || !boxRef.current || !window.turnstile) return;
        widgetId.current = window.turnstile.render(boxRef.current, {
          sitekey: SITE_KEY,
          appearance: "interaction-only",
          "refresh-expired": "auto",
          callback: (t: string) => {
            token.current = t;
            waiters.current.splice(0).forEach((w) => w(t));
          },
          "expired-callback": () => {
            token.current = null;
          },
        });
      })
      .catch((e) => console.warn("[bot-guard]", e instanceof Error ? e.message : e));
    return () => {
      cancelled = true;
      if (widgetId.current && window.turnstile) window.turnstile.remove(widgetId.current);
      widgetId.current = null;
    };
  }, []);

  const payload = useCallback(async () => {
    const hp = honeypot ? { hp: hpRef.current?.value ?? "" } : {};
    if (!SITE_KEY || token.current) return { ...hp, turnstile_token: token.current };
    const t = await new Promise<string | null>((resolve) => {
      const timer = setTimeout(() => resolve(token.current), TOKEN_WAIT_MS);
      waiters.current.push((v) => {
        clearTimeout(timer);
        resolve(v);
      });
    });
    return { ...hp, turnstile_token: t };
  }, [honeypot]);

  const reset = useCallback(() => {
    token.current = null;
    if (widgetId.current && window.turnstile) window.turnstile.reset(widgetId.current);
  }, []);

  const node = (
    <>
      {honeypot ? (
        // Hidden from people and screen readers; bots fill every field.
        <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", top: "auto", width: 1, height: 1, overflow: "hidden" }}>
          <label>
            Leave this empty
            <input ref={hpRef} type="text" name="company_website" tabIndex={-1} autoComplete="off" defaultValue="" />
          </label>
        </div>
      ) : null}
      {SITE_KEY ? <div ref={boxRef} /> : null}
    </>
  );

  return { node, payload, reset };
}
