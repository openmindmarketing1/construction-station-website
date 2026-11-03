// Owner-confirmed price ranges (Greg, 2026-11-02). Every price on the site
// comes from here; don't type a cost figure into a page. Always pair a range
// with PRICE_NOTE: these are typical ranges, and the final price comes after a
// free consultation. Commercial tenant improvements have no number on purpose.

export const PRICES = {
  kitchen: "$25,000–$100,000",
  bathroom: "$15,000–$40,000+",
  carpet: "$30–$100+ per sq yd installed",
  hardSurface: "$7–$15 per sq ft installed",
  /** ADUs and room additions. */
  perSqFt: "$250–$550+ per sq ft",
  windows: "$700–$2,000 per window installed",
  decks: "$30–$100+ per sq ft",
} as const;

/** The low end of PRICES.perSqFt, for "from" stat tiles. */
export const PER_SQ_FT_FROM = "$250/sq ft";

/** Where an ADU or room addition lands in PRICES.perSqFt. */
export const PER_SQ_FT_DRIVERS =
  "depending on the build (attached or simpler projects sit at the low end) and your interior selections";

export const PRICE_NOTE =
  "That's a typical range; your final price comes after a free consultation.";
