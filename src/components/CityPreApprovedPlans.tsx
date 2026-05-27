import type { ADUCity, CityPreApprovedPlan } from "@/lib/adu-cities";

// Public Supabase bucket that hosts the downloadable city plan PDFs.
const SUPABASE_PUBLIC_BASE =
  "https://ihvgrybmtngekmfjpxnz.supabase.co/storage/v1/object/public/user-assets";

const SAVINGS_WITH_PLANS =
  "Using a city pre-approved plan can save you $6,000–$14,000 in architectural fees and get your permit approved in 30 days instead of 60.";

const SAVINGS_GENERIC =
  "Pre-approved plans save $6,000–$14,000 in architectural fees and get 30-day permit approval.";

const DISCLAIMER =
  "Pre-approved plan availability changes frequently. Always verify current programs directly with your city's Building & Safety Department before starting your project.";

function planSpec(plan: CityPreApprovedPlan): string {
  const beds = plan.beds === 0 ? "Studio" : `${plan.beds} Bed`;
  return `${beds} · ${plan.baths} Bath · ${plan.sqft.toLocaleString("en-US")} sq ft`;
}

function planUrl(plan: CityPreApprovedPlan): string {
  return `${SUPABASE_PUBLIC_BASE}/${plan.supabasePath}`;
}

function SectionHeader() {
  return (
    <div className="text-center mb-10">
      <div className="flex items-center justify-center gap-3 mb-4">
        <span className="w-10 h-px bg-gold" />
        <span className="text-gold text-xs uppercase tracking-[0.4em]">
          Pre-Approved Plans
        </span>
        <span className="w-10 h-px bg-gold" />
      </div>
      <h2 className="font-display text-navy text-4xl md:text-5xl leading-[1]">
        City Pre-Approved <span className="italic text-gold">ADU Plans</span>
      </h2>
    </div>
  );
}

function AvailableBadge() {
  return (
    <div className="flex justify-center mb-8">
      <span className="inline-flex items-center gap-2 px-4 py-1.5 border text-xs uppercase tracking-wider font-semibold bg-emerald-100 text-emerald-900 border-emerald-200">
        <span className="w-2 h-2 rounded-full bg-emerald-500" />
        Pre-Approved Plans Available
      </span>
    </div>
  );
}

function CheckWithCityBadge() {
  return (
    <div className="flex justify-center mb-8">
      <span className="inline-flex items-center gap-2 px-4 py-1.5 border text-xs uppercase tracking-wider font-semibold bg-sky-100 text-sky-900 border-sky-200">
        <span className="w-2 h-2 rounded-full bg-sky-500" />
        Pre-Approved Plans — Check With City
      </span>
    </div>
  );
}

function SavingsCallout({ text }: { text: string }) {
  return (
    <div className="border-l-4 border-gold bg-cream p-6 mb-8 max-w-2xl mx-auto">
      <div className="text-gold text-[11px] uppercase tracking-[0.3em] mb-2">
        Why it matters
      </div>
      <p className="text-navy/85 leading-relaxed text-sm md:text-base">{text}</p>
    </div>
  );
}

function PrimaryCta({ calendlyUrl }: { calendlyUrl: string }) {
  return (
    <div className="text-center mt-10">
      <a
        href={calendlyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-3 bg-gold text-navy font-body font-semibold px-8 py-4 text-base hover:bg-yellow-400 transition-colors tracking-wide uppercase"
      >
        Book Free Consultation
        <span aria-hidden>→</span>
      </a>
    </div>
  );
}

function Disclaimer() {
  return (
    <p className="mt-10 text-navy/50 text-xs leading-relaxed text-center max-w-2xl mx-auto">
      {DISCLAIMER}
    </p>
  );
}

export default function CityPreApprovedPlans({
  city,
  calendlyUrl,
}: {
  city: ADUCity;
  calendlyUrl: string;
}) {
  const program = city.preApprovedPlans;
  const plans = program.plans ?? [];
  const hasPlans = program.available && plans.length > 0;

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="max-w-5xl mx-auto px-5 lg:px-10">
        <SectionHeader />

        {hasPlans ? (
          /* ---- Variant A: available + downloadable plan sets ---- */
          <>
            <AvailableBadge />
            <SavingsCallout text={SAVINGS_WITH_PLANS} />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className="bg-cream border border-navy/10 p-6 flex flex-col"
                >
                  <span className="inline-block self-start px-2.5 py-1 mb-3 text-[10px] uppercase tracking-wider font-semibold bg-navy/5 text-navy/70 border border-navy/10">
                    {plan.type}
                  </span>
                  <div className="font-display text-navy text-xl leading-tight mb-2">
                    {plan.name}
                  </div>
                  <div className="text-navy/60 text-sm mb-5">
                    {planSpec(plan)}
                  </div>
                  <a
                    href={planUrl(plan)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center justify-center gap-2 border border-navy/30 text-navy px-4 py-3 text-xs uppercase tracking-[0.2em] hover:border-gold hover:text-gold transition-colors"
                  >
                    Download Plan (PDF)
                    <span aria-hidden>↓</span>
                  </a>
                </div>
              ))}
            </div>

            {program.programUrl && (
              <p className="mt-6 text-center text-navy/50 text-xs">
                Source:{" "}
                <a
                  href={program.programUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy/70 underline hover:text-gold"
                >
                  {program.programName ?? `${city.name} pre-approved ADU program`}
                </a>
              </p>
            )}

            <p className="mt-8 text-navy/80 leading-relaxed text-center max-w-2xl mx-auto">
              Construction Station can build any of these pre-approved plans. We
              handle permits, site plan, and construction end to end.
            </p>

            <PrimaryCta calendlyUrl={calendlyUrl} />
          </>
        ) : program.available ? (
          /* ---- Variant B: available program, no hosted plan sets ---- */
          <>
            <AvailableBadge />

            {program.description && (
              <p className="text-navy/80 leading-relaxed text-center max-w-2xl mx-auto mb-8">
                {program.description}
              </p>
            )}

            {program.programUrl && (
              <div className="text-center mb-8">
                <a
                  href={program.programUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 border border-navy/30 text-navy px-7 py-4 text-sm uppercase tracking-[0.2em] hover:border-gold hover:text-gold transition-colors"
                >
                  View City Pre-Approved Plans
                  <span aria-hidden>→</span>
                </a>
              </div>
            )}

            <SavingsCallout text={SAVINGS_GENERIC} />

            <p className="text-navy/80 leading-relaxed text-center max-w-2xl mx-auto">
              Construction Station can build any city pre-approved plan.
            </p>

            <PrimaryCta calendlyUrl={calendlyUrl} />
          </>
        ) : (
          /* ---- Variant C: no confirmed program — check with city ---- */
          <>
            <CheckWithCityBadge />

            <p className="text-navy/80 leading-relaxed text-center max-w-2xl mx-auto mb-6">
              California AB 1332 requires all cities to offer pre-approved ADU
              plans. Contact the {city.name} Planning Department to ask about
              available options.
            </p>

            {program.description && (
              <p className="text-navy/60 leading-relaxed text-center max-w-2xl mx-auto mb-8 text-sm">
                {program.description}
              </p>
            )}

            <p className="text-navy/80 leading-relaxed text-center max-w-2xl mx-auto">
              Construction Station can also submit our own engineered plans — no
              pre-approval needed.
            </p>

            <PrimaryCta calendlyUrl={calendlyUrl} />
          </>
        )}

        <Disclaimer />
      </div>
    </section>
  );
}
