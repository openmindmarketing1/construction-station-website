import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import JsonLd from "@/components/JsonLd";
import { CS } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    absolute:
      "Garage Conversion Cost in Yucaipa CA — 2026 Pricing Guide | Construction Station",
  },
  description:
    "Transparent garage conversion cost guide for Yucaipa and the Inland Empire. Most garage conversions run $85,000–$160,000 all-in. See the full cost breakdown — permits, labor, materials, and what drives the price. CSLB #1108879.",
  alternates: { canonical: "/services/adu/garage-conversion-cost" },
};

const CALENDLY_URL =
  "https://calendly.com/constructionstation-sales/free-adu-remodeling-consult";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://constructionstation.com";

const SERVICE_CITIES = [
  "Yucaipa",
  "Redlands",
  "Beaumont",
  "Loma Linda",
  "San Bernardino",
  "Highland",
  "Calimesa",
  "Banning",
];

type CostRow = {
  type: string;
  size: string;
  scope: string;
  low: string;
  high: string;
};

const COST_ROWS: CostRow[] = [
  { type: "Studio / JADU", size: "240–300 sq ft", scope: "Efficiency kitchen, 3/4 bath, separate entrance", low: "$60,000", high: "$90,000" },
  { type: "Studio ADU", size: "400 sq ft", scope: "Full kitchen, full bath, laundry hookups", low: "$85,000", high: "$120,000" },
  { type: "1 Bedroom ADU", size: "480–500 sq ft", scope: "Full kitchen, full bath, bedroom + living area", low: "$100,000", high: "$145,000" },
  { type: "2-Car Garage Studio", size: "480–550 sq ft", scope: "Larger open plan, full kitchen and bath", low: "$110,000", high: "$155,000" },
  { type: "2-Car Garage 1BR", size: "550–650 sq ft", scope: "Bedroom, full kitchen, 1–2 baths, laundry", low: "$130,000", high: "$175,000" },
  { type: "High-End / Premium Finish", size: "Any size", scope: "Upgraded cabinetry, countertops, flooring, fixtures", low: "+$15,000", high: "+$40,000" },
];

type LineItem = { icon: string; category: string; range: string; notes: string };

const LINE_ITEMS: LineItem[] = [
  { icon: "🏛️", category: "Permits & Fees", range: "$3,000 – $6,500", notes: "Building permit, plan check, Title 24 compliance. ADUs ≤ 750 sq ft are exempt from school impact fees." },
  { icon: "📐", category: "Design & Engineering", range: "$4,000 – $8,000", notes: "Architectural plans, structural engineering. Included in CS fixed-price contract." },
  { icon: "🔨", category: "Demolition & Prep", range: "$2,000 – $5,000", notes: "Garage door removal, slab prep, demo of non-structural elements." },
  { icon: "🏗️", category: "Framing & Structural", range: "$8,000 – $20,000", notes: "New interior walls, exterior wall upgrades, headers, shear panels if needed." },
  { icon: "⚡", category: "Electrical", range: "$6,000 – $14,000", notes: "Panel upgrade (typically 100A to 200A), new circuits, outlets, lighting, EV-ready." },
  { icon: "🚿", category: "Plumbing", range: "$8,000 – $18,000", notes: "New supply lines, drain lines, vent stack, fixtures. Cost rises with distance from main house." },
  { icon: "❄️", category: "HVAC & Insulation", range: "$5,000 – $12,000", notes: "Mini-split system typical for ADUs. Wall insulation R-13, ceiling R-30 per Title 24." },
  { icon: "🪟", category: "Windows & Doors", range: "$4,000 – $9,000", notes: "Egress windows required by code, new exterior door, dual-pane glass per Title 24." },
  { icon: "🎨", category: "Drywall, Paint & Finishes", range: "$6,000 – $12,000", notes: "Drywall, tape, texture, primer, and interior paint." },
  { icon: "🪵", category: "Flooring", range: "$3,000 – $8,000", notes: "LVP or tile standard. Concrete stain or hardwood available as upgrades." },
  { icon: "🍳", category: "Kitchen", range: "$8,000 – $22,000", notes: "Cabinets, countertops, sink, range, range hood, refrigerator space. Wide variation by finish level." },
  { icon: "🚽", category: "Bathroom", range: "$5,000 – $12,000", notes: "Shower, vanity, toilet, tile. Walk-in shower vs tub affects cost." },
];

type CompareRow = { label: string; conversion: string; detachedAdu: string };

const COMPARE_ROWS: CompareRow[] = [
  { label: "Typical all-in cost", conversion: "$85,000 – $160,000", detachedAdu: "$200,000 – $435,000" },
  { label: "Permit timeline", conversion: "9–16 weeks", detachedAdu: "14–22 weeks" },
  { label: "Construction time", conversion: "8–12 weeks", detachedAdu: "16–28 weeks" },
  { label: "Total project time", conversion: "4–6 months", detachedAdu: "7–12 months" },
  { label: "Max size", conversion: "Limited to existing garage", detachedAdu: "Up to 1,200 sq ft" },
  { label: "Rental income potential", conversion: "$1,200 – $1,800/mo", detachedAdu: "$1,500 – $2,400/mo" },
  { label: "ROI timeline", conversion: "Faster (lower upfront)", detachedAdu: "Longer (higher total)" },
  { label: "Best for", conversion: "Budget-conscious, faster occupancy", detachedAdu: "Maximum square footage & income" },
];

type FinancingOption = { name: string; rate: string; blurb: string };

const FINANCING_OPTIONS: FinancingOption[] = [
  {
    name: "HELOC",
    rate: "Variable, typically 7–9%",
    blurb: "Most popular option for homeowners with equity. Draw as needed, interest-only during construction. Typically requires 20–25% equity remaining after the credit line.",
  },
  {
    name: "Cash-Out Refinance",
    rate: "Current market rate",
    blurb: "Replaces your existing mortgage with a larger one and gives you the difference in cash. Makes sense if your current rate is already near market or if you're refinancing a significant balance.",
  },
  {
    name: "Construction Loan → Perm",
    rate: "Construction rate + perm rate",
    blurb: "Short-term construction loan converts to a permanent mortgage at completion. More paperwork but the right structure for a large project when you don't have significant equity.",
  },
  {
    name: "0% Financing via CS",
    rate: "0% for qualified buyers",
    blurb: "Construction Station offers 0% financing for qualified homeowners. Apply during your free consultation. Subject to credit approval.",
  },
];

const COST_FACTORS = [
  {
    q: "What is the cost for garage conversion in Yucaipa CA?",
    a: "The cost for garage conversion in Yucaipa ranges from $60,000 for a basic JADU (Junior ADU, 240–300 sq ft, efficiency kitchen, shared bath) to $175,000 for a fully finished 2-bedroom conversion from a large two-car garage. The most common Yucaipa garage conversion — a single-car garage converted to a studio or 1-bedroom ADU with a full kitchen and bath — runs $85,000–$130,000 all-in, including permits, design, and construction. Yucaipa permits itself are on par with other San Bernardino County cities and add $3,000–$6,500 to the total project cost.",
  },
  {
    q: "What is the cost of converting a garage to living space in the Inland Empire?",
    a: "The cost of converting a garage to a legal, permitted living space in the Inland Empire typically runs $85,000–$160,000 all-in. This covers design and engineering ($4,000–$8,000), permits ($3,000–$6,500), demolition and prep ($2,000–$5,000), framing ($8,000–$20,000), electrical including panel upgrade ($6,000–$14,000), plumbing ($8,000–$18,000), HVAC ($5,000–$12,000), windows and doors ($4,000–$9,000), drywall and finishes ($6,000–$12,000), flooring ($3,000–$8,000), kitchen ($8,000–$22,000), and bathroom ($5,000–$12,000). The largest variables are kitchen finish level, plumbing distance from the main house, and whether an electrical panel upgrade is required.",
  },
  {
    q: "What are current garage conversion prices in San Bernardino County?",
    a: "Current garage conversion prices in San Bernardino County as of 2026 run $200–$300 per square foot all-in for a standard finish level, or $85,000–$175,000 for most single and two-car garages. San Bernardino County and its cities (Yucaipa, Redlands, Loma Linda, Beaumont, Highland, etc.) have similar permit fee structures — typically $3,000–$6,500 in permit costs — and similar construction labor rates. Labor rates in the Inland Empire are generally 10–20% lower than in LA County, which is why Inland Empire garage conversion prices are more competitive despite similar material costs.",
  },
  {
    q: "How much do garage conversions cost in 2026?",
    a: "Garage conversions cost $85,000–$175,000 in the Inland Empire in 2026 for a fully permitted, turnkey conversion including a kitchen and bath. This is an increase of approximately 8–12% from 2024 due to continued material cost inflation and labor rate increases. The biggest cost drivers in 2026 are electrical panel upgrades (which many older homes require to support a new unit's load) and plumbing rough-in (particularly the connection distance from the main house). A basic garage conversion without a full kitchen — just a room with a bath — can still be done for $50,000–$80,000 in some cases, though this scope typically does not qualify as a rentable ADU.",
  },
  {
    q: "Does a garage conversion add value to the home?",
    a: "Yes — a fully permitted garage conversion adds measurable value to an Inland Empire home. A 400 sq ft ADU in San Bernardino County adds roughly $80,000–$130,000 in appraised value depending on comparable rental income, which means a break-even or positive equity position from day one for most conversions. The key word is 'permitted' — unpermitted conversions either add no value or are counted as a liability by appraisers. Additionally, a converted garage generating $1,400/month in rent covers approximately 70–85% of the mortgage payment on a typical $100,000–$120,000 construction loan.",
  },
  {
    q: "Is a garage conversion cheaper than building a new ADU?",
    a: "Yes — a garage conversion is the most cost-effective path to a permitted ADU on your property. A garage conversion to ADU in the Inland Empire runs $85,000–$160,000 all-in. A new detached ADU starts at approximately $200,000 for a 400 sq ft studio and runs up to $435,000 for a 1,200 sq ft 2-bedroom unit. The garage conversion is cheaper because the structure, foundation, and roof already exist — you are converting and upgrading rather than building from scratch. The tradeoff is size: you are limited to the existing garage footprint, typically 240–550 sq ft.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Garage Conversion Cost Estimating",
  provider: {
    "@type": "GeneralContractor",
    name: CS.name,
    telephone: CS.phone,
    url: SITE_URL,
    identifier: CS.license,
  },
  areaServed: SERVICE_CITIES.map((c) => ({ "@type": "Place", name: `${c}, CA` })),
  description:
    "Transparent garage conversion pricing from a licensed Inland Empire contractor. All-in costs $85,000–$175,000. CSLB #1108879.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: CS.name,
  telephone: CS.phone,
  email: CS.email,
  url: `${SITE_URL}/services/adu/garage-conversion-cost`,
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    addressRegion: "CA",
    addressCountry: "US",
    addressLocality: "Yucaipa",
  },
  areaServed: SERVICE_CITIES.map((c) => `${c}, CA`),
  identifier: CS.license,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: COST_FACTORS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

function PrimaryCta({ label = "Get Free Estimate" }: { label?: string }) {
  return (
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-3 bg-gold text-navy font-body font-semibold px-8 py-4 text-base hover:bg-yellow-400 transition-colors tracking-wide uppercase"
    >
      {label}
      <span aria-hidden>→</span>
    </a>
  );
}

function SectionEyebrow({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-center gap-3 mb-4">
      <span className="w-10 h-px bg-gold" />
      <span className="text-gold text-xs uppercase tracking-[0.4em]">{label}</span>
      <span className="w-10 h-px bg-gold" />
    </div>
  );
}

export default function GarageConversionCostPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <section className="relative bg-navy texture-navy text-white pt-36 pb-24 lg:pt-44 lg:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 80% 30%, rgba(201,162,39,0.25) 0%, transparent 55%)",
          }}
        />
        <div className="absolute top-32 right-10 hidden md:flex items-center gap-3">
          <div className="w-12 h-px bg-gold" />
          <div className="text-gold text-[10px] tracking-[0.4em] uppercase">
            ADU · Cost Guide
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-5 lg:px-10">
          <div className="max-w-4xl">
            <nav className="text-gold text-xs tracking-[0.3em] uppercase mb-5 flex items-center gap-2 flex-wrap">
              <Link href="/services/adu" className="hover:text-white transition-colors">ADU Services</Link>
              <span className="text-white/40">/</span>
              <span>Garage Conversion Cost</span>
            </nav>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1] mb-7">
              Garage Conversion Cost in Yucaipa CA —{" "}
              <span className="italic text-gold">2026 Pricing Guide</span>
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-2xl mb-9 leading-relaxed">
              Transparent pricing from a licensed Inland Empire contractor.
              Full cost breakdown — permits, labor, materials, and what
              actually drives the price in San Bernardino County.
              CSLB {CS.license}.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <PrimaryCta label="Get Your Free Estimate" />
              <a
                href={CS.phoneHref}
                className="border border-white/40 text-white px-7 py-4 uppercase tracking-[0.2em] text-sm hover:border-gold hover:text-gold transition-colors text-center"
              >
                Call {CS.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Headline Price Statement */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-5 lg:px-10 text-center">
          <div className="text-gold text-xs tracking-[0.4em] uppercase mb-5">
            Typical Range
          </div>
          <div className="font-display text-navy text-5xl md:text-7xl leading-[1] mb-6">
            $85,000{" "}
            <span className="text-navy/40">–</span>{" "}
            <span className="italic text-gold">$160,000</span>
          </div>
          <p className="text-navy/75 text-lg leading-relaxed max-w-2xl mx-auto">
            Most garage-to-ADU conversions in Yucaipa and the Inland Empire
            land in this range — all-in, including permits, design,
            and construction with a full kitchen and bath.
          </p>
        </div>
      </section>

      {/* Cost by Project Type Table */}
      <section className="bg-cream py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-12">
            <SectionEyebrow label="Cost by Project" />
            <h2 className="font-display text-navy text-3xl md:text-4xl lg:text-5xl leading-[1.05]">
              Garage conversion prices by project type
            </h2>
            <p className="text-navy/60 mt-3 uppercase tracking-[0.2em] text-xs">
              Yucaipa &amp; Inland Empire, California — 2026
            </p>
          </div>
          <div className="overflow-x-auto bg-white border border-navy/10 shadow-sm">
            <table className="w-full text-sm text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-4 py-4 font-body font-semibold uppercase tracking-wider text-xs">Project Type</th>
                  <th className="px-4 py-4 font-body font-semibold uppercase tracking-wider text-xs">Size</th>
                  <th className="px-4 py-4 font-body font-semibold uppercase tracking-wider text-xs">Scope</th>
                  <th className="px-4 py-4 font-body font-semibold uppercase tracking-wider text-xs">Low</th>
                  <th className="px-4 py-4 font-body font-semibold uppercase tracking-wider text-xs">High</th>
                </tr>
              </thead>
              <tbody>
                {COST_ROWS.map((row, i) => (
                  <tr
                    key={`${row.type}-${row.size}`}
                    className={`border-t border-navy/10 ${i % 2 === 1 ? "bg-cream/40" : "bg-white"}`}
                  >
                    <td className="px-4 py-4 font-semibold text-navy whitespace-nowrap">{row.type}</td>
                    <td className="px-4 py-4 text-navy/80 whitespace-nowrap">{row.size}</td>
                    <td className="px-4 py-4 text-navy/70">{row.scope}</td>
                    <td className="px-4 py-4 text-navy/80 whitespace-nowrap">{row.low}</td>
                    <td className="px-4 py-4 font-semibold text-gold whitespace-nowrap">{row.high}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-navy/60 text-sm leading-relaxed max-w-4xl">
            All-in pricing includes design, engineering, permits, construction,
            and standard finish package. Premium finishes are available as an
            upgrade. Prices reflect current 2026 Inland Empire market conditions.
            Every project ends with a signed fixed-price contract — no
            surprise upcharges.
          </p>
        </div>
      </section>

      {/* Full Line-Item Cost Breakdown */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-14">
            <SectionEyebrow label="Full Breakdown" />
            <h2 className="font-display text-navy text-4xl md:text-5xl leading-[1]">
              Where the money{" "}
              <span className="italic text-gold">actually goes</span>.
            </h2>
            <p className="text-navy/60 mt-4 max-w-2xl mx-auto leading-relaxed">
              Every line item in a garage-to-ADU conversion, with real ranges
              from projects completed in Yucaipa and the Inland Empire.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {LINE_ITEMS.map((item, i) => (
              <div
                key={item.category}
                className="bg-cream border border-navy/10 p-7 hover:border-gold transition-colors flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{item.icon}</div>
                  <div className="text-gold text-xs tracking-[0.3em] uppercase">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
                <div className="font-display text-navy text-xl mb-1 leading-tight">
                  {item.category}
                </div>
                <div className="text-gold font-semibold mb-3">{item.range}</div>
                <div className="text-navy/70 text-sm leading-relaxed">
                  {item.notes}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Placeholder */}
      <section className="bg-cream py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-12">
            <SectionEyebrow label="Before & After" />
            <h2 className="font-display text-navy text-4xl md:text-5xl leading-[1]">
              Garage conversions{" "}
              <span className="italic text-gold">we&apos;ve priced and built</span>.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                project: "Redlands, CA — Single-Car Garage to Studio ADU",
                before: "480 sq ft detached garage, concrete floor, no plumbing",
                after: "480 sq ft studio ADU — full kitchen, 3/4 bath, mini-split, egress windows, LVP flooring",
                cost: "$112,000 all-in",
                timeline: "11 weeks construction · 10 weeks permit",
              },
              {
                project: "Yucaipa, CA — Two-Car Garage to 1BR ADU",
                before: "520 sq ft attached two-car garage with existing electrical",
                after: "520 sq ft 1-bedroom ADU — full kitchen, full bath, laundry hookup, separate entrance",
                cost: "$138,000 all-in",
                timeline: "13 weeks construction · 9 weeks permit",
              },
            ].map((project) => (
              <div key={project.project} className="bg-white border border-navy/10 p-8">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-gold text-xs tracking-[0.3em] uppercase mb-2">Before</div>
                    <div className="aspect-[4/3] bg-navy/10 flex items-center justify-center text-navy/30 text-xs uppercase tracking-wider">
                      Photo Placeholder
                    </div>
                  </div>
                  <div>
                    <div className="text-gold text-xs tracking-[0.3em] uppercase mb-2">After</div>
                    <div className="aspect-[4/3] bg-navy/10 flex items-center justify-center text-navy/30 text-xs uppercase tracking-wider">
                      Photo Placeholder
                    </div>
                  </div>
                </div>
                <div className="font-display text-navy text-xl mb-4">{project.project}</div>
                <div className="grid grid-cols-1 gap-2 text-sm">
                  <div className="flex gap-2">
                    <span className="text-navy/50 shrink-0">Before:</span>
                    <span className="text-navy/80">{project.before}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-navy/50 shrink-0">After:</span>
                    <span className="text-navy/80">{project.after}</span>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <span className="text-navy/50 shrink-0">Total cost:</span>
                    <span className="font-semibold text-gold">{project.cost}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-navy/50 shrink-0">Timeline:</span>
                    <span className="text-navy/80">{project.timeline}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="bg-navy py-14">
        <div className="max-w-4xl mx-auto px-5 lg:px-10 text-center">
          <div className="font-display text-white text-2xl md:text-3xl mb-5">
            Want a line-item estimate for your specific garage?
          </div>
          <PrimaryCta label="Get Your Free Estimate" />
        </div>
      </section>

      {/* Garage Conversion vs New Detached ADU Comparison */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-12">
            <SectionEyebrow label="Compare" />
            <h2 className="font-display text-navy text-4xl md:text-5xl leading-[1]">
              Garage conversion vs{" "}
              <span className="italic text-gold">new detached ADU</span>.
            </h2>
          </div>
          <div className="overflow-x-auto bg-white border border-navy/10 shadow-sm">
            <table className="w-full text-sm text-left border-collapse min-w-[560px]">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-5 py-4 font-body font-semibold uppercase tracking-wider text-xs" />
                  <th className="px-5 py-4 font-body font-semibold uppercase tracking-wider text-xs">Garage Conversion</th>
                  <th className="px-5 py-4 font-body font-semibold uppercase tracking-wider text-xs">New Detached ADU</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map((row, i) => (
                  <tr
                    key={row.label}
                    className={`border-t border-navy/10 ${i % 2 === 1 ? "bg-cream/40" : "bg-white"}`}
                  >
                    <td className="px-5 py-4 font-semibold text-navy whitespace-nowrap">{row.label}</td>
                    <td className="px-5 py-4 text-navy/80">{row.conversion}</td>
                    <td className="px-5 py-4 text-navy/80">{row.detachedAdu}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 bg-cream border-l-4 border-gold p-6">
            <p className="text-navy/80 leading-relaxed text-sm md:text-base">
              <span className="font-semibold text-navy">Bottom line:</span>{" "}
              A garage conversion is the fastest, most affordable path to a
              permitted ADU in the Inland Empire. For homeowners who want to
              maximize rental income or need more square footage, a new
              detached ADU is the better long-term investment — but at 2–3×
              the upfront cost. Construction Station builds both and can walk
              you through the tradeoffs for your specific property and goals.
            </p>
          </div>
        </div>
      </section>

      {/* What Affects Your Cost */}
      <section className="bg-cream py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-12">
            <SectionEyebrow label="Cost Factors" />
            <h2 className="font-display text-navy text-4xl md:text-5xl leading-[1]">
              What drives the{" "}
              <span className="italic text-gold">price up or down</span>.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                title: "Garage Size (1-Car vs 2-Car)",
                blurb: "A single-car garage is 240–300 sq ft; a two-car is 400–550 sq ft. Larger garages add more materials and labor but also more usable space and rental income — cost per sq ft actually drops as size increases.",
              },
              {
                title: "Plumbing Distance from Main House",
                blurb: "The further the ADU sits from the main house's sewer and water lines, the more trenching, piping, and labor is required. Attached garages typically have the shortest runs; detached garages on larger lots can add $3,000–$8,000 in plumbing alone.",
              },
              {
                title: "Electrical Panel Upgrade",
                blurb: "Most homes built before 1990 have a 100A panel. Adding an ADU's electrical load almost always requires an upgrade to 200A, which adds $4,000–$7,000 to the project. Newer homes with already-upgraded panels avoid this cost.",
              },
              {
                title: "Bathroom Count",
                blurb: "A second bathroom adds $5,000–$10,000. A 3/4 bath (shower, no tub) is the least expensive; a full bath with soaking tub is the most. Most 1-bedroom conversions need only one bathroom — adding a second makes sense for larger two-car garage conversions.",
              },
              {
                title: "Finish Level (Standard vs Premium)",
                blurb: "Construction Station's standard finish package includes quality LVP flooring, painted cabinets, quartz-look countertops, and ceramic tile. Premium upgrades — custom cabinets, stone counters, hardwood, luxury fixtures — add $15,000–$40,000.",
              },
              {
                title: "Permit Fees by City",
                blurb: "Permit fees vary by jurisdiction — Yucaipa, Redlands, Loma Linda, and Beaumont all set their own fee schedules. The typical range is $3,000–$6,500 for a garage conversion in San Bernardino County. ADUs under 750 sq ft are exempt from school impact fees under California law.",
              },
            ].map((factor) => (
              <div key={factor.title} className="bg-white border border-navy/10 p-7">
                <div className="font-display text-navy text-xl mb-2">{factor.title}</div>
                <div className="text-navy/70 text-sm leading-relaxed">{factor.blurb}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financing */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-14">
            <SectionEyebrow label="Financing" />
            <h2 className="font-display text-navy text-4xl md:text-5xl lg:text-6xl leading-[1]">
              How Inland Empire homeowners{" "}
              <span className="italic text-gold">finance their conversion</span>.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {FINANCING_OPTIONS.map((option) => (
              <div
                key={option.name}
                className="bg-cream border border-navy/10 p-7 hover:border-gold transition-colors"
              >
                <div className="font-display text-navy text-2xl mb-1">{option.name}</div>
                <div className="text-gold text-sm font-semibold mb-3">{option.rate}</div>
                <div className="text-navy/70 text-sm leading-relaxed">{option.blurb}</div>
              </div>
            ))}
          </div>
          <div className="mt-10 max-w-3xl mx-auto bg-navy text-white p-8 text-center">
            <div className="font-display text-2xl md:text-3xl mb-4">
              Rental Income That Pays for Itself
            </div>
            <p className="text-white/70 leading-relaxed mb-6">
              A Yucaipa or Redlands ADU renting for $1,400–$1,700/month
              covers approximately 70–85% of the monthly payment on a
              $120,000 construction loan at current rates. Most homeowners
              reach cash-flow neutral or positive within 12 months of
              the final inspection.
            </p>
            <PrimaryCta label="Discuss Financing Options" />
          </div>
        </div>
      </section>

      {/* Why Construction Station Pricing is Transparent */}
      <section className="bg-cream py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-14">
            <SectionEyebrow label="Our Commitment" />
            <h2 className="font-display text-navy text-4xl md:text-5xl lg:text-6xl leading-[1]">
              Why our pricing is{" "}
              <span className="italic text-gold">fully transparent</span>.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {[
              {
                title: "Fixed-Price Contracts",
                blurb: "You sign a line-item contract before demo begins. The price you sign is the price you pay. Change orders only happen when you ask for them — upgraded fixtures, added scope, changed materials. We never add items post-sign.",
              },
              {
                title: "No Hidden Permit Costs",
                blurb: "Architecture, engineering, and Title 24 fees are included in your project contract — not surprise invoices after the fact. Permit fees themselves are itemized and paid from project funds. CSLB #1108879.",
              },
              {
                title: "Real Pricing From Real Projects",
                blurb: "Every range on this page comes from projects we have actually built in Yucaipa, Redlands, Loma Linda, and Beaumont — not national averages that don't reflect Inland Empire costs. We update pricing quarterly.",
              },
              {
                title: "Free Itemized Estimate",
                blurb: "Your free consultation ends with a written, line-item ballpark estimate — before you commit to anything. No vague ranges, no bait-and-switch. If the numbers don't work for your budget, we'll tell you.",
              },
            ].map((w) => (
              <div key={w.title} className="bg-white border border-navy/10 p-7">
                <div className="font-display text-navy text-xl mb-2">{w.title}</div>
                <div className="text-navy/70 text-sm leading-relaxed">{w.blurb}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQAccordion faqs={COST_FACTORS} />

      {/* Service Area */}
      <section className="bg-cream py-16">
        <div className="max-w-5xl mx-auto px-5 lg:px-10 text-center">
          <SectionEyebrow label="Service Area" />
          <h2 className="font-display text-navy text-3xl md:text-4xl leading-[1] mb-6">
            Serving{" "}
            <span className="italic text-gold">Yucaipa and the Inland Empire</span>.
          </h2>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-navy/70 text-sm">
            {SERVICE_CITIES.map((city) => (
              <span key={city} className="flex items-center gap-2">
                <span className="w-1 h-1 bg-gold rounded-full" />
                {city}, CA
              </span>
            ))}
          </div>
          <p className="mt-6 text-navy/60 text-sm max-w-2xl mx-auto">
            Construction Station (CSLB {CS.license}) is a licensed general
            contractor permitted to pull permits in every city and county in
            San Bernardino and Riverside counties.
          </p>
        </div>
      </section>

      {/* Related Links */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-5 lg:px-10">
          <div className="text-gold text-xs tracking-[0.3em] uppercase mb-3 text-center">
            Related Resources
          </div>
          <div className="font-display text-navy text-3xl text-center mb-10">
            More about garage conversions
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <Link
              href="/services/adu/garage-conversion-permits"
              className="bg-cream border border-navy/10 p-6 hover:border-gold transition-colors group"
            >
              <div className="font-display text-navy text-xl group-hover:text-gold transition-colors">Permit Guide</div>
              <div className="text-navy/60 text-sm mt-1">How to get a garage conversion permit</div>
            </Link>
            <Link
              href="/services/adu"
              className="bg-cream border border-navy/10 p-6 hover:border-gold transition-colors group"
            >
              <div className="font-display text-navy text-xl group-hover:text-gold transition-colors">ADU Services Overview</div>
              <div className="text-navy/60 text-sm mt-1">Garage conversions, JADUs, new builds</div>
            </Link>
            <Link
              href="/services/adu/financing"
              className="bg-cream border border-navy/10 p-6 hover:border-gold transition-colors group"
            >
              <div className="font-display text-navy text-xl group-hover:text-gold transition-colors">ADU Financing Guide</div>
              <div className="text-navy/60 text-sm mt-1">HELOCs, construction loans, 0% options</div>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-navy texture-navy text-white py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-5 lg:px-10 text-center">
          <SectionEyebrow label="Get a Real Number" />
          <h2 className="font-display text-4xl md:text-5xl leading-[1] mb-5">
            Free estimate for your{" "}
            <span className="italic text-gold">garage conversion</span>.
          </h2>
          <p className="text-white/70 mb-10 text-base leading-relaxed max-w-xl mx-auto">
            We walk your garage, review your goals, and give you a written
            line-item ballpark — before you commit to anything. No obligation.
            CSLB {CS.license}.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <PrimaryCta label="Get Free Estimate" />
            <a
              href={CS.phoneHref}
              className="inline-flex items-center justify-center gap-3 border border-white/40 text-white px-8 py-4 text-base hover:border-gold hover:text-gold transition-colors font-body tracking-wide uppercase"
            >
              Call {CS.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 border border-white/40 text-white px-8 py-4 text-base hover:border-gold hover:text-gold transition-colors font-body tracking-wide uppercase"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
