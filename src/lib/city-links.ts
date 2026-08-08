// Single source of truth for where a city name should link now that the
// thin /areas/[city] pages are consolidated into /services/adu/[city].
// Cities without an ADU guide (Claremont, Pomona, Corona) link to the
// /areas service-area hub instead.

import { ADU_CITY_SLUGS } from "@/lib/adu-cities";

const ADU_SLUG_SET = new Set<string>(ADU_CITY_SLUGS);

export function cityPageHref(slug: string): string {
  return ADU_SLUG_SET.has(slug) ? `/services/adu/${slug}` : "/areas";
}
