// Live Google review numbers (average rating + review count) from the OMM
// platform's public review-summary endpoint. Replaces the hard-coded
// "5.0 / 17 reviews" that went stale (2026-11-04: Google showed 4.8 / 30).
//
// Config: NEXT_PUBLIC_OMM_API_URL (shared with omm-blog.ts). Business id is
// CS.businessId — the same numeric id the lead forms send.
//
// Fails soft: env unset, endpoint down, 404 (OMM can't read the numbers live)
// or a malformed body all return null, and every caller then shows NO number
// and emits no aggregateRating. Never fall back to a typed-in figure.

import { CS } from "@/lib/constants";

export interface ReviewSummary {
  rating: number;
  count: number;
}

/** Strict shape check: rating a number 1–5, count an integer ≥ 1. */
export function parseReviewSummary(json: unknown): ReviewSummary | null {
  if (!json || typeof json !== "object") return null;
  const { rating, count } = json as { rating?: unknown; count?: unknown };
  if (typeof rating !== "number" || !Number.isFinite(rating)) return null;
  if (rating < 1 || rating > 5) return null;
  if (typeof count !== "number" || !Number.isInteger(count) || count < 1) return null;
  return { rating, count };
}

/** One decimal, never rounded up to a whole star: 4.8 → "4.8", 5 → "5.0". */
export function formatRating(rating: number): string {
  return (Math.floor(rating * 10 + 1e-9) / 10).toFixed(1);
}

/** "30 Google reviews" / "1 Google review". */
export function reviewCountLabel(count: number): string {
  return `${count} Google review${count === 1 ? "" : "s"}`;
}

export async function getReviewSummary(): Promise<ReviewSummary | null> {
  // Trim defensively — see omm-blog.ts (a pasted trailing newline broke it).
  const base = process.env.NEXT_PUBLIC_OMM_API_URL?.trim();
  if (!base) {
    console.warn("[omm-reviews] NEXT_PUBLIC_OMM_API_URL missing — review numbers hidden.");
    return null;
  }
  const endpoint = `${base.replace(/\/+$/, "")}/api/public/review-summary?business_id=${encodeURIComponent(
    String(CS.businessId)
  )}`;
  try {
    const res = await fetch(endpoint, { next: { revalidate: 3600 } });
    if (!res.ok) {
      console.warn(`[omm-reviews] fetch returned ${res.status} from ${endpoint} — review numbers hidden.`);
      return null;
    }
    const summary = parseReviewSummary(await res.json());
    if (!summary) console.warn(`[omm-reviews] malformed body from ${endpoint} — review numbers hidden.`);
    return summary;
  } catch (err) {
    console.warn("[omm-reviews] fetch threw — review numbers hidden:", err);
    return null;
  }
}

/** schema.org AggregateRating from live numbers, or nothing at all. */
export function aggregateRatingSchema(
  summary: ReviewSummary | null
): { aggregateRating: Record<string, string> } | Record<string, never> {
  if (!summary) return {};
  return {
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: formatRating(summary.rating),
      reviewCount: String(summary.count),
      bestRating: "5",
      worstRating: "1",
    },
  };
}
