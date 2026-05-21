import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { CS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "ADU Investment & ROI | Construction Station",
  description:
    "Is an ADU a good investment in the Inland Empire? See regional rent estimates, a real ROI example, payback period, and property-value impact for IE homeowners. Licensed ADU contractor since 2008.",
  alternates: { canonical: "/services/adu/investment" },
};

const CALENDLY_URL =
  "https://calendly.com/constructionstation-sales/free-adu-remodeling-consult";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://constructionstation.com";

type RentRow = {
  region: string;
  studio: string;
  oneBed: string;
  twoBed: string;
};

const RENT_ROWS: RentRow[] = [
  { region: "IE Core", studio: "$1,200–1,600/mo", oneBed: "$1,500–2,000/mo", twoBed: "$1,800–2,500/mo" },
  { region: "Temecula Valley", studio: "$1,400–1,800/mo", oneBed: "$1,700–2,200/mo", twoBed: "$2,000–2,600/mo" },
  { region: "Desert Cities", studio: "$1,500–2,000/mo", oneBed: "$1,800–2,400/mo", twoBed: "$2,200–3,000/mo" },
  { region: "OC Adjacent", studio: "$1,600–2,100/mo", oneBed: "$2,000–2,600/mo", twoBed: "$2,400–3,200/mo" },
  { region: "High Desert", studio: "$900–1,200/mo", oneBed: "$1,100–1,500/mo", twoBed: "$1,400–1,800/mo" },
];

const ROI_LINES = [
  { label: "All-in build cost", value: "$300,000" },
  { label: "Monthly rent", value: "$1,800/mo" },
  { label: "Annual rental income", value: "$21,600" },
  { label: "Simple payback period", value: "~14 years" },
  { label: "Property value increase", value: "~$180,000 – $216,000" },
  { label: "Net equity gain after build cost", value: "Break even to positive" },
];

const BEYOND_RENTAL = [
  "Multigenerational living — house family nearby",
  "Home office or studio space",
  "Future flexibility — use now, rent later",
  "Property value increase regardless of rental use",
  "Hedge against housing costs for family members",
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "ADU Investment & ROI Consulting",
  provider: {
    "@type": "GeneralContractor",
    name: CS.name,
    telephone: CS.phone,
    url: SITE_URL,
    identifier: CS.license,
  },
  areaServed: { "@type": "Place", name: "Inland Empire, California" },
  description:
    "ADU investment and ROI guidance for Inland Empire homeowners — regional rental income estimates, payback period, and property value impact for detached and attached ADUs.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: CS.name,
  telephone: CS.phone,
  email: CS.email,
  url: `${SITE_URL}/services/adu/investment`,
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

function PrimaryCta() {
  return (
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-3 bg-gold text-navy font-body font-semibold px-8 py-4 text-base hover:bg-yellow-400 transition-colors tracking-wide uppercase"
    >
      Book Free ADU Consultation
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

export default function ADUInvestmentPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={localBusinessSchema} />

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
            ADU · Investment
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-5 lg:px-10">
          <div className="max-w-4xl">
            <div className="text-gold text-xs tracking-[0.4em] uppercase mb-5 md:hidden">
              ADU · Investment
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1] mb-7">
              Is an ADU a Good Investment in the{" "}
              <span className="italic text-gold">Inland Empire?</span>
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-2xl mb-9 leading-relaxed">
              ADUs generate rental income, increase property value, and pay for
              themselves. Here&rsquo;s the math for IE homeowners.
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

      {/* Section 1 — Rental income potential */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-12">
            <SectionEyebrow label="Rental Income" />
            <h2 className="font-display text-navy text-4xl md:text-5xl leading-[1]">
              What ADUs{" "}
              <span className="italic text-gold">rent for</span>.
            </h2>
            <p className="text-navy/60 mt-3 uppercase tracking-[0.2em] text-xs">
              Estimated monthly rent by region
            </p>
          </div>
          <div className="overflow-x-auto bg-white border border-navy/10 shadow-sm">
            <table className="w-full text-sm text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-5 py-4 font-body font-semibold uppercase tracking-wider text-xs">Region</th>
                  <th className="px-5 py-4 font-body font-semibold uppercase tracking-wider text-xs">Studio</th>
                  <th className="px-5 py-4 font-body font-semibold uppercase tracking-wider text-xs">1BD / 1BA</th>
                  <th className="px-5 py-4 font-body font-semibold uppercase tracking-wider text-xs">2BD / 2BA</th>
                </tr>
              </thead>
              <tbody>
                {RENT_ROWS.map((row, i) => (
                  <tr
                    key={row.region}
                    className={`border-t border-navy/10 ${i % 2 === 1 ? "bg-cream/40" : "bg-white"}`}
                  >
                    <td className="px-5 py-4 font-semibold text-navy whitespace-nowrap">{row.region}</td>
                    <td className="px-5 py-4 text-navy/80 whitespace-nowrap">{row.studio}</td>
                    <td className="px-5 py-4 text-navy/80 whitespace-nowrap">{row.oneBed}</td>
                    <td className="px-5 py-4 text-navy/80 whitespace-nowrap">{row.twoBed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 2 — ROI example */}
      <section className="bg-cream py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-12">
            <SectionEyebrow label="ROI Example" />
            <h2 className="font-display text-navy text-4xl md:text-5xl leading-[1]">
              The math on a{" "}
              <span className="italic text-gold">Redlands ADU</span>.
            </h2>
          </div>
          <div className="bg-white border border-navy/10 shadow-sm">
            <div className="bg-navy text-white px-7 py-5">
              <div className="text-gold text-xs tracking-[0.3em] uppercase mb-1">
                Example
              </div>
              <div className="font-display text-2xl">
                750 sq ft 2BR / 1BA in Redlands
              </div>
            </div>
            <dl>
              {ROI_LINES.map((line, i) => (
                <div
                  key={line.label}
                  className={`flex items-center justify-between gap-4 px-7 py-4 border-t border-navy/10 ${i % 2 === 1 ? "bg-cream/40" : "bg-white"}`}
                >
                  <dt className="text-navy/75 text-sm md:text-base">{line.label}</dt>
                  <dd className="font-semibold text-navy text-right">{line.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <p className="mt-6 text-navy/60 text-sm leading-relaxed">
            Property value increase estimates are based on the 100x monthly rent
            rule of thumb commonly used in real estate. Actual values vary by
            market conditions.
          </p>
        </div>
      </section>

      {/* Section 3 — Beyond rental income */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-12">
            <SectionEyebrow label="More Than Rent" />
            <h2 className="font-display text-navy text-4xl md:text-5xl leading-[1]">
              Beyond rental{" "}
              <span className="italic text-gold">income</span>.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {BEYOND_RENTAL.map((item) => (
              <div
                key={item}
                className="bg-cream border border-navy/10 p-6 text-navy/80 leading-relaxed flex items-start gap-3"
              >
                <span className="mt-1 text-gold shrink-0">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Tax considerations */}
      <section className="bg-cream py-16">
        <div className="max-w-3xl mx-auto px-5 lg:px-10">
          <div className="bg-white border-l-4 border-gold p-7 md:p-8">
            <div className="text-gold text-xs tracking-[0.3em] uppercase mb-3">
              Tax Considerations
            </div>
            <p className="text-navy/75 leading-relaxed">
              Consult a tax professional for guidance on depreciation, rental
              income reporting, and potential deductions for ADU construction
              costs.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-navy texture-navy text-white py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-5 lg:px-10 text-center">
          <SectionEyebrow label="Run the numbers" />
          <h2 className="font-display text-4xl md:text-5xl leading-[1] mb-6">
            See the return on{" "}
            <span className="italic text-gold">your lot</span>.
          </h2>
          <p className="text-white/70 mb-10 text-base leading-relaxed max-w-xl mx-auto">
            Book a free ADU consultation and we&rsquo;ll model rental income and
            payback for your specific property.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <PrimaryCta />
            <Link
              href="/services/adu/costs"
              className="inline-flex items-center justify-center gap-3 border border-white/40 text-white px-8 py-4 text-base hover:border-gold hover:text-gold transition-colors font-body tracking-wide uppercase"
            >
              See ADU Costs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
