import Reveal from "@/components/Reveal";
import { TRUST_STATS } from "@/lib/constants";
import { formatRating, getReviewSummary } from "@/lib/omm-reviews";

export default async function TrustBar() {
  // Live Google rating as the third tile; with no live numbers it is left out.
  const reviews = await getReviewSummary();
  const stats = reviews
    ? [
        ...TRUST_STATS.slice(0, 2),
        { value: `${formatRating(reviews.rating)}★`, label: "Google Rating" },
        ...TRUST_STATS.slice(2),
      ]
    : TRUST_STATS;
  return (
    <Reveal
      as="section"
      margin="-50px"
      id="content"
      className="bg-navy texture-navy py-8 md:py-10"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="text-center mb-4 text-white/40 text-[10px] uppercase tracking-[0.35em]">
          Residential &amp; Commercial Construction · Inland Empire
        </div>
        <div className={`grid grid-cols-2 md:grid-cols-3 ${stats.length === 6 ? "lg:grid-cols-6" : "lg:grid-cols-5"} divide-y md:divide-y-0 md:divide-x divide-white/10`}>
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 60}
              className="px-4 py-4 md:py-2 text-center relative"
            >
              <div className="font-display text-3xl md:text-4xl text-gold leading-none">
                {s.value}
              </div>
              <div className="text-white/60 text-[10px] md:text-xs uppercase tracking-[0.2em] mt-2">
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
