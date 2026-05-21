import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import JsonLd from "@/components/JsonLd";
import { CS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "ADU Cost in the Inland Empire | Construction Station",
  description:
    "Transparent ADU pricing from a licensed Inland Empire general contractor. Most IE ADU projects run $200,000 to $435,000 all-in. See the full cost breakdown — vertical build, design, permits, sitework, and utilities. No surprises.",
  alternates: { canonical: "/services/adu/costs" },
};

const CALENDLY_URL =
  "https://calendly.com/constructionstation-sales/free-adu-remodeling-consult";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://constructionstation.com";

type CostRow = {
  type: string;
  size: string;
  vertical: string;
  verticalSqft: string;
  allIn: string;
  allInSqft: string;
};

const COST_ROWS: CostRow[] = [
  { type: "Studio / 1BA", size: "400 sq ft", vertical: "$150K", verticalSqft: "$375", allIn: "$200K", allInSqft: "$500" },
  { type: "1BR / 1BA", size: "500 sq ft", vertical: "$175K", verticalSqft: "$350", allIn: "$235K", allInSqft: "$470" },
  { type: "1BR / 1BA", size: "650 sq ft", vertical: "$210K", verticalSqft: "$323", allIn: "$275K", allInSqft: "$423" },
  { type: "2BR / 1BA", size: "750 sq ft", vertical: "$233K", verticalSqft: "$310", allIn: "$300K", allInSqft: "$400" },
  { type: "2BR / 2BA", size: "900 sq ft", vertical: "$270K", verticalSqft: "$300", allIn: "$345K", allInSqft: "$383" },
  { type: "2BR / 2BA", size: "1,000 sq ft", vertical: "$295K", verticalSqft: "$295", allIn: "$375K", allInSqft: "$375" },
  { type: "2BR / 2BA", size: "1,200 sq ft", vertical: "$348K", verticalSqft: "$290", allIn: "$435K", allInSqft: "$363" },
];

type CostCard = {
  icon: string;
  title: string;
  price: string;
  blurb: string;
};

const COST_CARDS: CostCard[] = [
  {
    icon: "📐",
    title: "Design & Engineering",
    price: "$8,000 – $12,000",
    blurb: "Architectural plans, structural engineering, and Title 24 energy compliance.",
  },
  {
    icon: "🏛️",
    title: "Permit Fees",
    price: "Varies by city",
    blurb: "Impact fees waived for ADUs under 750 sq ft. Larger units: $2–8/sq ft depending on city.",
  },
  {
    icon: "🚜",
    title: "Sitework & Grading",
    price: "$15,000 – $40,000",
    blurb: "Foundation prep, grading, and drainage. Flat lots cost less. Sloped lots cost more.",
  },
  {
    icon: "🔌",
    title: "Utility Connections",
    price: "$5,000 – $25,000",
    blurb: "Water, sewer, and electrical connections to existing services. Long runs cost more.",
  },
  {
    icon: "🏗️",
    title: "Vertical Construction",
    price: "$290 – $375/sq ft",
    blurb: "Full stick-built construction including all systems and standard finishes.",
  },
  {
    icon: "🚿",
    title: "Finishes & Fixtures",
    price: "Included in vertical cost",
    blurb: "Standard package included. Premium upgrades available at additional cost.",
  },
];

type CompareRow = { label: string; conversion: string; newBuild: string };

const COMPARE_ROWS: CompareRow[] = [
  { label: "Cost range", conversion: "$80,000 – $150,000", newBuild: "$200,000 – $435,000" },
  { label: "Timeline", conversion: "3–5 months", newBuild: "6–10 months" },
  { label: "Permits", conversion: "Simpler", newBuild: "Full permit set" },
  { label: "Size limit", conversion: "Existing garage size", newBuild: "Up to 1,200 sq ft" },
  { label: "Best for", conversion: "Budget-conscious", newBuild: "Maximum rental income" },
];

const COST_FACTORS = [
  {
    q: "Lot slope and grading requirements",
    a: "Flat lots need minimal grading. Sloped lots require retaining walls, extra excavation, and engineered foundations — all of which add to sitework cost.",
  },
  {
    q: "Distance from existing utility connections",
    a: "The farther your ADU sits from existing water, sewer, and electrical service, the longer the trenching runs — and the higher the connection cost.",
  },
  {
    q: "City permit fees (varies by city)",
    a: "Each Inland Empire city sets its own permit and plan-check fees. Units under 750 sq ft are exempt from impact fees under California law; larger units pay roughly $2–$8 per sq ft depending on the jurisdiction.",
  },
  {
    q: "Size and number of bedrooms",
    a: "More square footage and more bedrooms mean more framing, plumbing, and electrical. Cost per square foot actually drops as size increases, but total cost rises.",
  },
  {
    q: "Finish level (standard vs premium)",
    a: "Our all-in pricing includes a quality standard finish package. Premium cabinetry, countertops, flooring, and fixtures are available at additional cost.",
  },
  {
    q: "Foundation type required",
    a: "A standard slab-on-grade is the most economical option. Raised foundations, caissons, or grade beams on difficult soils add cost.",
  },
  {
    q: "Access for construction equipment",
    a: "Tight side yards or limited street access can require smaller equipment, hand-digging, or crane work — which adds labor and time to the build.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "ADU Construction Cost Estimating",
  provider: {
    "@type": "GeneralContractor",
    name: CS.name,
    telephone: CS.phone,
    url: SITE_URL,
    identifier: CS.license,
  },
  areaServed: { "@type": "Place", name: "Inland Empire, California" },
  description:
    "Transparent ADU pricing from a licensed Inland Empire general contractor. Detached ADU all-in costs from $200,000 to $435,000 covering design, engineering, permits, sitework, utilities, and construction.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: CS.name,
  telephone: CS.phone,
  email: CS.email,
  url: `${SITE_URL}/services/adu/costs`,
  image: `${SITE_URL}/images/services/adu/adu-01.jpg`,
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    addressRegion: "CA",
    addressCountry: "US",
    addressLocality: "Inland Empire",
  },
  areaServed: "Inland Empire, California",
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

function PrimaryCta({ label = "Get Your Free Cost Estimate" }: { label?: string }) {
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

export default function ADUCostsPage() {
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
            ADU · Costs
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-5 lg:px-10">
          <div className="max-w-4xl">
            <div className="text-gold text-xs tracking-[0.4em] uppercase mb-5 md:hidden">
              ADU · Costs
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1] mb-7">
              How Much Does an ADU Cost in the{" "}
              <span className="italic text-gold">Inland Empire?</span>
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-2xl mb-9 leading-relaxed">
              Transparent pricing from a licensed IE general contractor. No
              surprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <PrimaryCta />
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

      {/* Section 1 — Headline cost statement */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-5 lg:px-10 text-center">
          <div className="text-gold text-xs tracking-[0.4em] uppercase mb-5">
            Starting From
          </div>
          <div className="font-display text-navy text-5xl md:text-7xl leading-[1] mb-6">
            $200,000 <span className="italic text-gold">— All-In</span>
          </div>
          <p className="text-navy/75 text-lg leading-relaxed max-w-2xl mx-auto">
            Most Inland Empire ADU projects range from{" "}
            <span className="font-semibold text-navy">$200,000 to $435,000</span>{" "}
            depending on size, site conditions, and finish level.
          </p>
        </div>
      </section>

      {/* Section 2 — Cost breakdown table */}
      <section className="bg-cream py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-12">
            <SectionEyebrow label="Cost Breakdown" />
            <h2 className="font-display text-navy text-3xl md:text-4xl lg:text-5xl leading-[1.05]">
              Cost To Build a New Detached ADU
            </h2>
            <p className="text-navy/60 mt-3 uppercase tracking-[0.2em] text-xs">
              Inland Empire, California
            </p>
          </div>

          <div className="overflow-x-auto bg-white border border-navy/10 shadow-sm">
            <table className="w-full text-sm text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-4 py-4 font-body font-semibold uppercase tracking-wider text-xs">Type</th>
                  <th className="px-4 py-4 font-body font-semibold uppercase tracking-wider text-xs">Size</th>
                  <th className="px-4 py-4 font-body font-semibold uppercase tracking-wider text-xs">Vertical Build Cost</th>
                  <th className="px-4 py-4 font-body font-semibold uppercase tracking-wider text-xs">Build Cost/sqft</th>
                  <th className="px-4 py-4 font-body font-semibold uppercase tracking-wider text-xs">Typical All-In Cost</th>
                  <th className="px-4 py-4 font-body font-semibold uppercase tracking-wider text-xs">All-In/sqft</th>
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
                    <td className="px-4 py-4 text-navy/80 whitespace-nowrap">{row.vertical}</td>
                    <td className="px-4 py-4 text-navy/80 whitespace-nowrap">{row.verticalSqft}</td>
                    <td className="px-4 py-4 font-semibold text-gold whitespace-nowrap">{row.allIn}</td>
                    <td className="px-4 py-4 text-navy/80 whitespace-nowrap">{row.allInSqft}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-navy/60 text-sm leading-relaxed max-w-4xl">
            *Vertical build cost covers framing, roofing, insulation, drywall,
            windows, doors, electrical, plumbing, HVAC, and standard finishes.
            All-in cost adds design, engineering, permits, sitework, and utility
            connections.
          </p>
        </div>
      </section>

      {/* Section 3 — What's included in All-In cost */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-14">
            <SectionEyebrow label="What's Included" />
            <h2 className="font-display text-navy text-4xl md:text-5xl leading-[1]">
              Inside your{" "}
              <span className="italic text-gold">all-in cost</span>.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {COST_CARDS.map((card, i) => (
              <div
                key={card.title}
                className="bg-cream border border-navy/10 p-7 hover:border-gold transition-colors flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{card.icon}</div>
                  <div className="text-gold text-xs tracking-[0.3em] uppercase">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
                <div className="font-display text-navy text-2xl mb-1 leading-tight">
                  {card.title}
                </div>
                <div className="text-gold font-semibold mb-3">{card.price}</div>
                <div className="text-navy/70 text-sm leading-relaxed">
                  {card.blurb}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Garage Conversion vs New Construction */}
      <section className="bg-cream py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-12">
            <SectionEyebrow label="Compare" />
            <h2 className="font-display text-navy text-4xl md:text-5xl leading-[1]">
              Garage conversion vs{" "}
              <span className="italic text-gold">new construction</span>.
            </h2>
          </div>
          <div className="overflow-x-auto bg-white border border-navy/10 shadow-sm">
            <table className="w-full text-sm text-left border-collapse min-w-[560px]">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-5 py-4 font-body font-semibold uppercase tracking-wider text-xs" />
                  <th className="px-5 py-4 font-body font-semibold uppercase tracking-wider text-xs">Garage Conversion</th>
                  <th className="px-5 py-4 font-body font-semibold uppercase tracking-wider text-xs">New Construction</th>
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
                    <td className="px-5 py-4 text-navy/80">{row.newBuild}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 5 — What affects your ADU cost */}
      <FAQAccordion faqs={COST_FACTORS} />

      {/* Section 6 — Disclaimer + CTA */}
      <section className="bg-navy texture-navy text-white py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-5 lg:px-10 text-center">
          <SectionEyebrow label="Get An Estimate" />
          <h2 className="font-display text-4xl md:text-5xl leading-[1] mb-6">
            Every project is{" "}
            <span className="italic text-gold">unique</span>.
          </h2>
          <p className="text-white/70 mb-10 text-base leading-relaxed max-w-xl mx-auto">
            These are typical ranges based on current Inland Empire market
            conditions as of 2026. Schedule a free feasibility consultation to
            get a detailed estimate for your specific property.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <PrimaryCta />
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
              Send Us a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
