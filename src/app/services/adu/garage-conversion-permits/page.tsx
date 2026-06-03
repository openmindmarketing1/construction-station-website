import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import JsonLd from "@/components/JsonLd";
import { CS } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    absolute:
      "Garage Conversion Permits in Yucaipa & San Bernardino County — Complete Guide | Construction Station",
  },
  description:
    "Everything you need to know about garage conversion permits in Yucaipa and San Bernardino County — costs, timeline, required inspections, and how Construction Station handles the entire permit process. CSLB #1108879.",
  alternates: { canonical: "/services/adu/garage-conversion-permits" },
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

type PermitStep = { number: string; title: string; description: string };

const PERMIT_STEPS: PermitStep[] = [
  {
    number: "01",
    title: "Pre-Application Feasibility Check",
    description:
      "Before spending a dollar on plans, we verify your garage's existing footprint, setbacks from property lines, and whether your lot's coverage allows the conversion. San Bernardino County and Yucaipa both require the converted space to meet current setback minimums, though existing structures built at the original footprint often qualify under California's ADU laws.",
  },
  {
    number: "02",
    title: "Architectural Plans & Engineering",
    description:
      "We coordinate a licensed architect for floor plans and elevations, a structural engineer for any load-bearing modifications, and a Title 24 energy consultant. Garage conversions require minimum R-13 wall insulation, R-30 ceiling insulation, dual-pane windows, and energy-compliant HVAC — all documented in the permit set.",
  },
  {
    number: "03",
    title: "Plan Submittal to City or County",
    description:
      "We submit the complete permit package to the applicable jurisdiction — City of Yucaipa Building & Safety, County of San Bernardino Building and Safety, or whichever city you're in. We track plan-check status, respond to correction notices, and resubmit as needed without burdening you.",
  },
  {
    number: "04",
    title: "Permit Issuance & Fee Payment",
    description:
      "Once plans are approved, we pull the permit and coordinate fee payment. Permit fees in San Bernardino County generally run $2,500–$5,500 for a garage-to-ADU conversion. Units under 750 sq ft are exempt from school impact fees under California law — we confirm this at time of submittal.",
  },
  {
    number: "05",
    title: "Construction with Staged Inspections",
    description:
      "Our crew calls for each inspection at the correct stage — foundation, rough framing, rough mechanical/electrical/plumbing, insulation, drywall, and final. The building inspector signs off at each stage before we move to the next. No shortcuts, no covering work before it's inspected.",
  },
  {
    number: "06",
    title: "Final Inspection & Certificate of Completion",
    description:
      "At the final inspection, the building inspector verifies the work matches the approved plans. After final sign-off, the unit is legal, insurable, and can be rented long-term as an ADU. San Bernardino County issues a Certificate of Completion in place of a traditional CO for ADU conversions.",
  },
];

type InspectionRow = { stage: string; what: string; timing: string };

const INSPECTIONS: InspectionRow[] = [
  { stage: "Foundation / Footings", what: "Concrete poured to plan, anchor bolts set", timing: "Before concrete pour" },
  { stage: "Rough Framing", what: "All structural framing, headers, shear panels", timing: "Before insulation" },
  { stage: "Rough Electrical", what: "Panel upgrade, circuits, boxes, grounding", timing: "Before drywall" },
  { stage: "Rough Plumbing", what: "New supply and drain lines, vent stack", timing: "Before drywall" },
  { stage: "Rough HVAC", what: "Ductwork, equipment rough-in, fresh-air provisions", timing: "Before drywall" },
  { stage: "Insulation", what: "R-value per Title 24 energy compliance", timing: "Before drywall" },
  { stage: "Drywall Nailing", what: "Fire blocking, drywall attachment to framing", timing: "Before taping" },
  { stage: "Final", what: "All systems complete, smoke/CO detectors, egress", timing: "End of project" },
];

type CostRow = { item: string; low: string; high: string; notes: string };

const PERMIT_COSTS: CostRow[] = [
  { item: "Building Permit Fee", low: "$1,800", high: "$3,500", notes: "Varies by city and valuation" },
  { item: "Plan Check Fee", low: "$600", high: "$1,500", notes: "Included in some cities" },
  { item: "School Impact Fee", low: "$0", high: "$2,000", notes: "Waived for ADUs ≤ 750 sq ft" },
  { item: "Energy Compliance (Title 24)", low: "$500", high: "$900", notes: "Consultant fee" },
  { item: "Structural Engineering", low: "$1,200", high: "$2,500", notes: "May not be required for simple conversions" },
  { item: "Architectural Plans", low: "$2,500", high: "$5,000", notes: "Included in CS project cost" },
];

const FAQS = [
  {
    q: "Do I need a garage conversion permit in California?",
    a: "Yes — always. Every garage conversion in California requires a building permit, regardless of whether you are converting to an ADU, a bedroom, a home office, or any other habitable use. The permit covers structural modifications, electrical upgrades to meet current code, plumbing for a kitchen or bathroom, HVAC, insulation to Title 24 standards, egress windows, and fire safety. Skipping the permit voids your homeowner's insurance, creates title problems when you sell, and risks a stop-work order or demolition order from the city. There is no legal shortcut in any San Bernardino County city.",
  },
  {
    q: "How do I get a permit for garage conversion in San Bernardino County?",
    a: "Getting a permit for garage conversion in San Bernardino County involves five steps: (1) Hire a licensed general contractor or architect to prepare a permit set including floor plans, elevations, structural calculations, and Title 24 energy compliance. (2) Submit to the applicable building department — City of Yucaipa Building & Safety for Yucaipa projects, County of San Bernardino Building and Safety for unincorporated parcels, or the relevant city building department for incorporated cities. (3) Respond to plan-check correction comments, typically 1–2 rounds. (4) Pay permit fees upon approval and pull the permit before breaking ground. (5) Schedule and pass all staged inspections during construction. Construction Station handles every one of these steps for our clients.",
  },
  {
    q: "What permits for garage conversion are required beyond the building permit?",
    a: "The building permit is the primary document, but permits for garage conversion also include sub-permits: (1) Electrical permit — required whenever you upgrade the panel, add circuits, or install new fixtures. Most conversions require a panel upgrade from 100A to 200A. (2) Plumbing permit — required for any new supply lines, drain lines, or vent stack work. Converting to an ADU always involves a plumbing permit. (3) Mechanical permit — required for HVAC rough-in, exhaust fans, and fresh-air provisions. In some San Bernardino County jurisdictions these are included under the main building permit; in others they are separate. Your contractor's permit package should cover all of them.",
  },
  {
    q: "How much do garage conversion permits cost in Yucaipa?",
    a: "Garage conversion permits in Yucaipa and the broader San Bernardino County area typically run $2,500–$5,500 all-in, including the building permit fee, plan-check fee, and any applicable sub-permits. ADU conversions under 750 sq ft qualify for a school impact fee exemption under California state law, which saves $1,000–$2,000 compared to larger projects. Architecture and engineering fees are separate — typically $4,000–$8,000 — but are included in a Construction Station project contract, not billed as a surprise add-on.",
  },
  {
    q: "How long does the garage conversion permit process take in San Bernardino County?",
    a: "Plan preparation typically takes 4–6 weeks. Plan-check review in Yucaipa and San Bernardino County cities generally runs 4–8 weeks for a first submittal, with 2–4 weeks per correction round. Allow 10–16 weeks total from design start to permit-in-hand. California state law (Government Code §65950) requires jurisdictions to act on ADU applications within 60 days, which has shortened review times significantly. Once the permit is in hand, garage conversions typically complete construction in 8–12 weeks.",
  },
  {
    q: "Can I pull my own garage conversion permit without a contractor?",
    a: "Yes — California allows owner-builder permits, which means a homeowner can pull their own permit for a primary residence. However, to legally act as your own general contractor, you must personally supervise all trades, not hire unlicensed subcontractors, and occupy the structure after completion. If you intend to rent the unit, owner-builder permits create complications at final inspection. More practically, the plan-check process requires licensed architectural and engineering stamps, so you will still need to pay those professionals. Construction Station handles permits as part of our fixed-price contract — one fee, no surprises.",
  },
  {
    q: "What happens if I convert my garage without a permit?",
    a: "An unpermitted garage conversion creates serious problems: (1) Homeowner's insurance may deny claims for any damage involving the unpermitted space. (2) Lenders will not count the unpermitted square footage when appraising the home for a sale or refinance. (3) A buyer's home inspector will flag the conversion, causing the deal to fall apart or requiring a price reduction. (4) The city can issue a stop-use order and require you to remove the conversion at your expense. (5) In some jurisdictions, an unpermitted ADU cannot legally be rented. The cost to retroactively permit an unpermitted conversion is often 30–50% higher than permitting it properly from the start.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Garage Conversion Permit Services",
  provider: {
    "@type": "GeneralContractor",
    name: CS.name,
    telephone: CS.phone,
    url: SITE_URL,
    identifier: CS.license,
  },
  areaServed: SERVICE_CITIES.map((c) => ({ "@type": "Place", name: `${c}, CA` })),
  description:
    "Licensed garage conversion contractor handling all permits in Yucaipa and San Bernardino County. CSLB #1108879.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: CS.name,
  telephone: CS.phone,
  email: CS.email,
  url: `${SITE_URL}/services/adu/garage-conversion-permits`,
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
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

function PrimaryCta({ label = "Book Free Consultation" }: { label?: string }) {
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

export default function GarageConversionPermitsPage() {
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
            ADU · Permits
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-5 lg:px-10">
          <div className="max-w-4xl">
            <nav className="text-gold text-xs tracking-[0.3em] uppercase mb-5 flex items-center gap-2 flex-wrap">
              <Link href="/services/adu" className="hover:text-white transition-colors">ADU Services</Link>
              <span className="text-white/40">/</span>
              <span>Garage Conversion Permits</span>
            </nav>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1] mb-7">
              Garage Conversion Permits in Yucaipa &amp;{" "}
              <span className="italic text-gold">San Bernardino County</span>
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-2xl mb-9 leading-relaxed">
              Everything you need to know about the garage conversion permit
              process — costs, timeline, required inspections, and how
              Construction Station handles it all. CSLB {CS.license}.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <PrimaryCta label="Get Free Consultation" />
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

      {/* Quick Answer — Do You Need a Permit? */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-12 gap-6 mb-10 items-start">
            <div className="col-span-12 md:col-span-3">
              <div className="text-gold text-xs tracking-[0.3em] uppercase">
                Quick Answer
              </div>
              <div className="hidden md:block w-12 h-px bg-gold mt-3" />
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="font-display text-navy text-3xl md:text-4xl leading-[1.05] mb-6">
                Do you need a permit to convert your garage?{" "}
                <span className="italic text-gold">Yes — always.</span>
              </h2>
              <p className="text-navy/85 text-lg leading-[1.7] mb-6">
                Every garage conversion in California requires a building
                permit. There is no legal path around it — not for a bedroom
                conversion, not for a home office, and especially not for a
                rentable ADU. The permit covers structural changes, electrical
                upgrades, plumbing for a new kitchen or bath, HVAC, Title 24
                energy insulation, egress windows, and fire safety — the full
                scope of turning a storage space into a habitable room.
              </p>
              <p className="text-navy/75 leading-[1.8] mb-5">
                In San Bernardino County — which includes Yucaipa, Redlands,
                Loma Linda, Highland, Beaumont, and dozens of other cities —
                the garage conversion permit process follows California&apos;s
                statewide ADU framework but each jurisdiction still runs its
                own plan-check queue, enforces its own correction checklist,
                and schedules its own inspections. The rules are streamlined
                compared to five years ago, but they are not optional.
              </p>
              <p className="text-navy/75 leading-[1.8]">
                The good news: California&apos;s ADU laws (AB 68, AB 881,
                AB 3182, and follow-on legislation) have shortened approval
                timelines, waived most parking requirements, and exempted ADUs
                under 750 sq ft from school impact fees. A Yucaipa or Redlands
                garage conversion permit that once took 6 months can now be
                in hand in 10–16 weeks. Construction Station has navigated
                every Inland Empire jurisdiction&apos;s process — we know what
                each city flags before we even submit.
              </p>
            </div>
          </div>

          {/* Callout box */}
          <div className="bg-cream border-l-4 border-gold p-7 max-w-3xl mx-auto">
            <div className="font-display text-navy text-xl md:text-2xl leading-tight mb-3">
              Unpermitted Conversions Cost More to Fix Than to Do Right
            </div>
            <p className="text-navy/75 leading-relaxed text-sm md:text-base">
              Retroactively permitting an unpermitted garage conversion typically
              costs 30–50% more than permitting it properly from the start —
              because the inspector requires walls to be opened for verification,
              non-compliant work to be torn out, and additional correction cycles.
              It also creates insurance gaps, lender problems, and sale complications
              in the meantime.
            </p>
          </div>
        </div>
      </section>

      {/* Permit Process Steps */}
      <section className="bg-cream py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-14">
            <SectionEyebrow label="The Process" />
            <h2 className="font-display text-navy text-4xl md:text-5xl lg:text-6xl leading-[1]">
              How to get a garage conversion permit{" "}
              <span className="italic text-gold">in San Bernardino County</span>.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {PERMIT_STEPS.map((step) => (
              <div
                key={step.number}
                className="bg-white border border-navy/10 p-7 hover:border-gold transition-colors"
              >
                <div className="flex items-start gap-5">
                  <div className="text-gold font-display text-3xl leading-none shrink-0 pt-1">
                    {step.number}
                  </div>
                  <div>
                    <div className="font-display text-navy text-xl mb-2 leading-tight">
                      {step.title}
                    </div>
                    <div className="text-navy/70 text-sm leading-relaxed">
                      {step.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Permit Costs Table */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-12">
            <SectionEyebrow label="Permit Costs" />
            <h2 className="font-display text-navy text-4xl md:text-5xl leading-[1]">
              Garage conversion permit costs in{" "}
              <span className="italic text-gold">Yucaipa & San Bernardino County</span>.
            </h2>
            <p className="text-navy/60 mt-4 max-w-2xl mx-auto leading-relaxed">
              Permit fees are set by each jurisdiction. The ranges below reflect
              typical costs for a single-car or two-car garage conversion to ADU
              in the San Bernardino County area as of 2026.
            </p>
          </div>
          <div className="overflow-x-auto bg-white border border-navy/10 shadow-sm">
            <table className="w-full text-sm text-left border-collapse min-w-[540px]">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-5 py-4 font-body font-semibold uppercase tracking-wider text-xs">Fee Item</th>
                  <th className="px-5 py-4 font-body font-semibold uppercase tracking-wider text-xs">Low</th>
                  <th className="px-5 py-4 font-body font-semibold uppercase tracking-wider text-xs">High</th>
                  <th className="px-5 py-4 font-body font-semibold uppercase tracking-wider text-xs">Notes</th>
                </tr>
              </thead>
              <tbody>
                {PERMIT_COSTS.map((row, i) => (
                  <tr
                    key={row.item}
                    className={`border-t border-navy/10 ${i % 2 === 1 ? "bg-cream/40" : "bg-white"}`}
                  >
                    <td className="px-5 py-4 font-semibold text-navy">{row.item}</td>
                    <td className="px-5 py-4 text-navy/80 whitespace-nowrap">{row.low}</td>
                    <td className="px-5 py-4 text-gold font-semibold whitespace-nowrap">{row.high}</td>
                    <td className="px-5 py-4 text-navy/60 text-xs">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-navy/60 text-sm leading-relaxed">
            Architecture and engineering fees ($4,000–$8,000) are included in
            a Construction Station project contract — not itemized separately.
            Total permit-related out-of-pocket costs for most Yucaipa-area
            garage conversions run $3,000–$6,500.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-cream py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-12">
            <SectionEyebrow label="Timeline" />
            <h2 className="font-display text-navy text-4xl md:text-5xl leading-[1]">
              How long does the{" "}
              <span className="italic text-gold">permit process take?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { phase: "Plan Preparation", duration: "4–6 weeks", note: "Architecture, structural engineering, Title 24 energy compliance" },
              { phase: "Plan Check & Corrections", duration: "4–8 weeks", note: "First submittal + correction rounds. CA law caps ADU review at 60 days." },
              { phase: "Permit Issuance", duration: "1–2 weeks", note: "Fee payment, permit card posted, construction can begin." },
            ].map((item) => (
              <div key={item.phase} className="bg-white border border-navy/10 p-7 text-center hover:border-gold transition-colors">
                <div className="font-display text-gold text-4xl md:text-5xl leading-none mb-3">{item.duration}</div>
                <div className="font-display text-navy text-xl mb-2">{item.phase}</div>
                <div className="text-navy/60 text-sm leading-relaxed">{item.note}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-white border-l-4 border-gold p-6">
            <p className="text-navy/80 leading-relaxed">
              <span className="font-semibold text-navy">Total permit timeline: 9–16 weeks</span>{" "}
              from engagement to permit card on-site. Construction Station files
              the moment plans are stamped — there is no gap between plan approval
              and submittal. Once the permit is in hand, a typical single-car
              garage conversion runs 8–12 weeks to final inspection.
            </p>
          </div>
        </div>
      </section>

      {/* Inspections Table */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-12">
            <SectionEyebrow label="Required Inspections" />
            <h2 className="font-display text-navy text-4xl md:text-5xl leading-[1]">
              Inspections required for a{" "}
              <span className="italic text-gold">garage conversion</span>.
            </h2>
            <p className="text-navy/60 mt-4 max-w-2xl mx-auto leading-relaxed">
              Every inspection must be called and signed off before proceeding
              to the next phase. Construction Station schedules all inspections
              and never covers work before it is approved.
            </p>
          </div>
          <div className="overflow-x-auto bg-white border border-navy/10 shadow-sm">
            <table className="w-full text-sm text-left border-collapse min-w-[540px]">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-5 py-4 font-body font-semibold uppercase tracking-wider text-xs">Inspection Stage</th>
                  <th className="px-5 py-4 font-body font-semibold uppercase tracking-wider text-xs">What&apos;s Verified</th>
                  <th className="px-5 py-4 font-body font-semibold uppercase tracking-wider text-xs">Timing</th>
                </tr>
              </thead>
              <tbody>
                {INSPECTIONS.map((row, i) => (
                  <tr
                    key={row.stage}
                    className={`border-t border-navy/10 ${i % 2 === 1 ? "bg-cream/40" : "bg-white"}`}
                  >
                    <td className="px-5 py-4 font-semibold text-navy whitespace-nowrap">{row.stage}</td>
                    <td className="px-5 py-4 text-navy/80">{row.what}</td>
                    <td className="px-5 py-4 text-navy/60 text-xs whitespace-nowrap">{row.timing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How CS Handles Permits */}
      <section className="bg-cream py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-14">
            <SectionEyebrow label="Our Process" />
            <h2 className="font-display text-navy text-4xl md:text-5xl lg:text-6xl leading-[1]">
              Construction Station handles{" "}
              <span className="italic text-gold">every permit step</span>.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {[
              {
                title: "One Point of Contact",
                blurb: "You never call City Hall, chase down an engineer, or wonder where your application stands. One project manager owns the permit process from pre-app through final sign-off.",
              },
              {
                title: "Permit Fees Included",
                blurb: "Architecture, engineering, and Title 24 costs are included in your fixed-price contract. Permit fees themselves are itemized and paid from project funds at issuance — no surprise invoices.",
              },
              {
                title: "We Know the Corrections",
                blurb: `Family-run in the Inland Empire since 2008. We know which details Yucaipa, Redlands, and San Bernardino County flag before we submit — our first-submittal correction rate is very low. CSLB ${CS.license}.`,
              },
              {
                title: "No Work Before Inspection",
                blurb: "We call every required inspection before advancing to the next phase. No covering framing before rough sign-off. No drywall before insulation approval. The project file is clean at final — no deferred items.",
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

      {/* Before/After Placeholder */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-12">
            <SectionEyebrow label="Our Work" />
            <h2 className="font-display text-navy text-4xl md:text-5xl leading-[1]">
              Permitted garage conversions{" "}
              <span className="italic text-gold">we&apos;ve completed</span>.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                location: "Redlands, CA",
                desc: "Two-car garage converted to 480 sq ft ADU — full kitchen, bath, egress windows. Permitted through City of Redlands in 11 weeks.",
              },
              {
                location: "Yucaipa, CA",
                desc: "Single-car garage converted to 240 sq ft JADU — efficiency kitchen, 3/4 bath, separate entrance. Permitted through City of Yucaipa in 9 weeks.",
              },
            ].map((project) => (
              <div key={project.location} className="bg-cream border border-navy/10 p-8">
                <div className="aspect-[16/9] bg-navy/10 flex items-center justify-center mb-6 text-navy/30 text-sm uppercase tracking-wider">
                  Project Photo Placeholder
                </div>
                <div className="font-display text-navy text-2xl mb-2">{project.location}</div>
                <div className="text-navy/70 text-sm leading-relaxed">{project.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQAccordion faqs={FAQS} />

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
            Construction Station is a licensed general contractor (CSLB {CS.license}) permitted to
            pull permits in every city and unincorporated area of San Bernardino
            and Riverside counties.
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
              href="/services/adu/garage-conversion-cost"
              className="bg-cream border border-navy/10 p-6 hover:border-gold transition-colors group"
            >
              <div className="font-display text-navy text-xl group-hover:text-gold transition-colors">Garage Conversion Cost Guide</div>
              <div className="text-navy/60 text-sm mt-1">Full pricing breakdown for 2026</div>
            </Link>
            <Link
              href="/services/adu"
              className="bg-cream border border-navy/10 p-6 hover:border-gold transition-colors group"
            >
              <div className="font-display text-navy text-xl group-hover:text-gold transition-colors">ADU Services Overview</div>
              <div className="text-navy/60 text-sm mt-1">All ADU types, from garage to detached</div>
            </Link>
            <Link
              href="/contact"
              className="bg-cream border border-navy/10 p-6 hover:border-gold transition-colors group"
            >
              <div className="font-display text-navy text-xl group-hover:text-gold transition-colors">Free Permit Consultation</div>
              <div className="text-navy/60 text-sm mt-1">Walk your project with our team</div>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-navy texture-navy text-white py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-5 lg:px-10 text-center">
          <SectionEyebrow label="Ready to Start?" />
          <h2 className="font-display text-4xl md:text-5xl leading-[1] mb-5">
            We handle every permit,{" "}
            <span className="italic text-gold">start to final inspection</span>.
          </h2>
          <p className="text-white/70 mb-10 text-base leading-relaxed max-w-xl mx-auto">
            Free consultation — we&apos;ll walk your garage, confirm what your
            city requires, and give you a fixed-price permit-to-move-in quote.
            No obligation. CSLB {CS.license}.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <PrimaryCta label="Book Free Consultation" />
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
