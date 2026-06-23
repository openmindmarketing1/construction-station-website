import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import FAQAccordion from "@/components/FAQAccordion";
import { CS } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    absolute:
      "Complete ADU Guide for Inland Empire Homeowners | Construction Station",
  },
  description:
    "Everything Inland Empire homeowners need to know about ADU construction — types, California laws, costs, financing, rental income, and how to get started. From the licensed ADU contractors at Construction Station. CSLB #1108879.",
  alternates: { canonical: "/resources/adu-guide" },
};

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://constructionstation.com";

const GUIDE_FAQS = [
  {
    q: "What is the difference between an ADU and a JADU?",
    a: "A full ADU can be detached, attached, or a garage conversion — up to 1,200 sq ft — and is a completely independent dwelling. A Junior ADU (JADU) is limited to 500 sq ft, must be created within the existing home's footprint, and must share a wall with the main residence. JADUs have their own entrance and efficiency kitchen but typically cost less because they use existing structure. For comparison: our Redlands Jr. ADU (465 sq ft) came in at approximately $200K all-in, while a similar-size detached ADU would run $200K–$275K.",
  },
  {
    q: "How has California law changed to make ADUs easier to build?",
    a: "California passed sweeping ADU reform legislation beginning in 2017 and accelerating through 2023. Key changes: AB 68 (2020) reduced minimum setbacks to 4 feet and eliminated the owner-occupancy requirement; SB 13 (2020) waived impact fees for ADUs under 750 sq ft on owner-occupied properties and set the 60-day permit processing mandate; AB 881 eliminated parking replacement requirements for garage conversions; AB 976 (2024) extended the owner-occupancy waiver permanently. The practical result: Inland Empire homeowners can now add ADUs to investment properties, convert garages without replacing parking, and get permits processed faster than ever before.",
  },
  {
    q: "Can I build an ADU on a rental property I don't live in?",
    a: "Yes. California eliminated the owner-occupancy requirement in 2020 (AB 68). You can add an ADU to a single-family rental property and rent both units. Note that some cities restrict short-term rentals (under 30 days) in ADUs — verify your city's ordinance before planning Airbnb-style use. For standard long-term rentals, there is no restriction anywhere in California.",
  },
  {
    q: "What financing makes the most sense for an ADU in the Inland Empire?",
    a: "The best financing depends on your current equity and financial situation. HELOCs work well if you have significant equity and want a revolving credit line. RenoFi loans are ideal when your current equity is limited — they lend against the home's projected after-renovation value, allowing you to borrow substantially more without refinancing your existing mortgage. Construction loans are useful when you want to roll ADU financing into a long-term mortgage at completion. Many Inland Empire clients use a HELOC or RenoFi loan for construction, then refinance after the ADU is complete and the property appraises at its new higher value.",
  },
  {
    q: "What is a realistic rental income expectation for an ADU near Loma Linda?",
    a: "ADUs near Loma Linda University Medical Center consistently command premium rents due to healthcare worker and student housing demand. Current market rates: studios rent for $1,400–$1,700/month; one-bedrooms for $1,600–$2,000/month; two-bedrooms for $2,000–$2,600/month. These are 15–25% above typical IE market rates for comparable units. If you're within 2 miles of the medical center, a well-appointed ADU will rarely sit vacant — demand from travel nurses, residents, and students is strong year-round.",
  },
  {
    q: "How do I know if my lot can support an ADU?",
    a: "The main factors: lot size (larger lots have more room but minimum lot size requirements were eliminated statewide), lot coverage (typically 50% maximum impervious coverage — your existing home counts toward this), setbacks (4-foot minimum rear and sides for new construction), existing structures, and any easements or HOA restrictions. The fastest way to know is a free feasibility consultation with Construction Station — we walk your property, measure the buildable envelope, and confirm what your city will approve, usually within a few days of your call.",
  },
  {
    q: "How does Construction Station charge for ADU projects?",
    a: "We provide fixed-price contracts after your free feasibility consultation and design phase. Our pricing is all-in: design coordination, permit fees, site prep, foundation, framing, MEP (mechanical, electrical, plumbing), finishes (tile, cabinets, countertops), and city inspections. Change orders only happen when you request them — not from scope creep on our end. We provide a transparent, line-item written estimate so you can see exactly where every dollar goes before signing anything.",
  },
  {
    q: "What should I ask when interviewing ADU contractors?",
    a: "The essential questions: (1) Are you a licensed general contractor with CSLB in good standing? Ask for their license number and verify at cslb.ca.gov. (2) Do you handle permits and inspections, or do I manage that? (3) Is your crew in-house or subcontracted? (4) What does all-in mean — does your price include design, permits, utility connections, and finishes? (5) Can I see permits or photos from completed ADU projects in this city? (6) What is your warranty, and how are warranty claims handled? Construction Station's CSLB License #1108879 is in good standing, our crew is W-2, and we handle every step from permits to keys.",
  },
  {
    q: "How do I get started with an ADU project?",
    a: "The best first step is a free feasibility consultation. We walk your property, assess setbacks and lot coverage, review your city's ADU ordinance, and tell you what's buildable and what it will cost — no obligation, no high-pressure pitch. From there, if you want to move forward, we begin design and permitting. You can book online at constructionstation.com/contact or call us directly at (909) 797-6333. Most feasibility consultations can be scheduled within 1–2 weeks.",
  },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Complete ADU Guide for Inland Empire Homeowners",
  description:
    "Comprehensive guide covering ADU types, California laws, construction costs, financing options, and rental income in the Inland Empire.",
  author: {
    "@type": "Organization",
    name: CS.name,
    url: SITE_URL,
  },
  publisher: {
    "@type": "Organization",
    name: CS.name,
    url: SITE_URL,
  },
  mainEntityOfPage: `${SITE_URL}/resources/adu-guide`,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: GUIDE_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

const TOC = [
  { id: "what-is-an-adu", label: "What Is an ADU?" },
  { id: "types-of-adus", label: "Types of ADUs" },
  { id: "california-laws", label: "California ADU Laws" },
  { id: "construction-process", label: "Construction Process" },
  { id: "costs", label: "Costs in the IE" },
  { id: "financing", label: "Financing Options" },
  { id: "rental-income", label: "Rental Income" },
  { id: "timeline", label: "Timeline Expectations" },
  { id: "get-started", label: "Getting Started" },
];

export default function ADUGuidePage() {
  return (
    <>
      <JsonLd data={pageSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <section className="relative bg-navy texture-navy text-white pt-36 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 75% 30%, rgba(201,162,39,0.25) 0%, transparent 55%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-5 lg:px-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-px bg-gold" />
              <span className="text-gold text-xs uppercase tracking-[0.4em]">
                ADU Resource Guide
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1] mb-6">
              The Complete{" "}
              <span className="italic text-gold">ADU Guide</span>{" "}
              for Inland Empire Homeowners
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-2xl leading-relaxed mb-8">
              Everything you need to know about accessory dwelling units —
              types, California law, construction costs, financing, rental
              income, and how to choose a contractor. Written by the ADU
              specialists at Construction Station. CSLB&nbsp;#1108879.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="bg-gold text-navy font-body font-semibold px-7 py-4 uppercase tracking-[0.2em] text-sm hover:bg-yellow-400 transition-colors text-center"
              >
                Free ADU Consultation
              </Link>
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

      {/* Table of Contents */}
      <section className="bg-cream border-b border-navy/10 py-8 sticky top-0 z-10 hidden lg:block">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-navy/50 text-xs uppercase tracking-[0.3em] mr-4">
              In This Guide
            </span>
            {TOC.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-navy/70 hover:text-gold text-sm transition-colors px-3 py-1 border border-navy/10 hover:border-gold"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Body */}
          <article className="lg:col-span-8 space-y-20">

            {/* Section 1: What Is an ADU */}
            <section id="what-is-an-adu" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-px bg-gold" />
                <span className="text-gold text-xs uppercase tracking-[0.4em]">Section 1</span>
              </div>
              <h2 className="font-display text-navy text-3xl md:text-4xl lg:text-5xl leading-[1] mb-6">
                What Is an ADU?
              </h2>
              <div className="prose max-w-none text-navy/75 leading-[1.8] space-y-4">
                <p>
                  An <strong className="text-navy">Accessory Dwelling Unit (ADU)</strong> is a
                  secondary residential unit on a single-family or multifamily
                  property that includes its own entrance, kitchen, bathroom, and
                  sleeping area. It&rsquo;s a fully independent living space — not a
                  bonus room or a converted closet — with the same amenities as a
                  standalone apartment.
                </p>
                <p>
                  ADUs go by many names: granny flat, backyard cottage, in-law
                  suite, casita, secondary unit, or companion home. The legal
                  term in California is ADU, and since 2020 California has made
                  ADU construction significantly easier, more affordable, and
                  faster to permit than at any previous point in history.
                </p>
                <p>
                  ADUs serve many purposes. Inland Empire homeowners build them
                  to house aging parents, adult children, or other family members
                  while maintaining independence. Others build for rental income
                  — a well-built ADU in the Inland Empire can generate
                  $1,400–$2,200/month, often covering the financing payment
                  entirely. Still others build to increase property value ahead
                  of a sale.
                </p>
                <p>
                  Whatever your reason, the economics of ADU construction have
                  never been more favorable. Setback requirements dropped to 4
                  feet. Parking replacement was eliminated for garage conversions.
                  Permit timelines are capped by state law. And impact fees were
                  waived for ADUs under 750 sq ft on many properties. The window
                  to add a rental-income unit to land you already own — at costs
                  that pencil out — is wide open.
                </p>
              </div>
            </section>

            {/* Section 2: Types of ADUs */}
            <section id="types-of-adus" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-px bg-gold" />
                <span className="text-gold text-xs uppercase tracking-[0.4em]">Section 2</span>
              </div>
              <h2 className="font-display text-navy text-3xl md:text-4xl lg:text-5xl leading-[1] mb-6">
                Types of ADUs
              </h2>
              <div className="prose max-w-none text-navy/75 leading-[1.8] space-y-4">
                <p>
                  California recognizes four main types of ADUs. Each has
                  different cost profiles, timelines, and use cases. Construction
                  Station builds all four.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
                {[
                  {
                    title: "Detached ADU",
                    range: "$175K–$400K+",
                    size: "Up to 1,200 sq ft",
                    detail:
                      "A standalone structure built in the backyard — completely separate from the main home with its own foundation, utilities, address, and entrance. Maximum design flexibility and privacy. The most expensive ADU type but also the most rentable and the most valuable at resale.",
                  },
                  {
                    title: "Attached ADU",
                    range: "$120K–$280K",
                    size: "Up to 50% of main home or 1,200 sq ft",
                    detail:
                      "An addition to the main home that shares at least one wall. Can be added to the side or rear of the home. Shares the main home's foundation system where possible, reducing cost. Requires its own separate entrance.",
                  },
                  {
                    title: "Garage Conversion ADU",
                    range: "$85K–$160K",
                    size: "Existing garage footprint",
                    detail:
                      "Converting an existing attached or detached garage into a fully permitted living space. The fastest and most affordable ADU path. California prohibits cities from requiring replacement parking. Construction Station has completed multiple garage conversions in Redlands and the broader Inland Empire.",
                  },
                  {
                    title: "Junior ADU (JADU)",
                    range: "$100K–$175K",
                    size: "Up to 500 sq ft",
                    detail:
                      "Carved from within the existing home footprint — typically a bedroom, garage, or interior space. Must share a wall with the main residence. Requires its own exterior entrance and efficiency kitchen. Our Redlands Jr. ADU project (465 sq ft, 1BD/1BA) came in at approximately $200K all-in.",
                  },
                ].map((t) => (
                  <div key={t.title} className="bg-cream border border-navy/10 p-7">
                    <div className="font-display text-navy text-2xl mb-1">{t.title}</div>
                    <div className="text-gold text-sm font-semibold mb-1">{t.range}</div>
                    <div className="text-navy/50 text-xs uppercase tracking-wider mb-3">{t.size}</div>
                    <p className="text-navy/70 text-sm leading-relaxed">{t.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: California ADU Laws */}
            <section id="california-laws" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-px bg-gold" />
                <span className="text-gold text-xs uppercase tracking-[0.4em]">Section 3</span>
              </div>
              <h2 className="font-display text-navy text-3xl md:text-4xl lg:text-5xl leading-[1] mb-6">
                California ADU Laws
              </h2>
              <div className="prose max-w-none text-navy/75 leading-[1.8] space-y-4">
                <p>
                  California&rsquo;s ADU legislation has transformed what&rsquo;s possible
                  for homeowners. Here are the most important bills and what they
                  mean in practice:
                </p>
              </div>
              <div className="mt-8 space-y-5">
                {[
                  {
                    law: "AB 68 (2020)",
                    title: "Eliminated Owner-Occupancy Requirement",
                    body: "You no longer need to live on the property to build or rent an ADU. Investment properties qualify. Reduced minimum setbacks to 4 feet for rear and side yards. Permitted ADUs in single-family and multifamily zones statewide.",
                  },
                  {
                    law: "SB 13 (2020)",
                    title: "60-Day Permit Rule & Impact Fee Waivers",
                    body: "Cities and counties must approve or deny complete ADU applications within 60 days (deemed approved if not acted upon). Impact fees waived for ADUs under 750 sq ft on owner-occupied properties. School fees significantly reduced for ADUs.",
                  },
                  {
                    law: "AB 881 (2020)",
                    title: "No Replacement Parking for Garage Conversions",
                    body: "Cities cannot require replacement parking when a garage is converted to an ADU. No minimum lot size requirement. Eliminated setback requirements for garage conversions within existing footprints.",
                  },
                  {
                    law: "AB 1033 (2024)",
                    title: "ADU Condominiumization",
                    body: "Cities that opt in can allow ADUs to be sold separately from the primary dwelling as individual condominiums. Not all IE cities have adopted this yet, but it opens the door to treating an ADU as a separate real estate asset in participating jurisdictions.",
                  },
                  {
                    law: "AB 976 (2024)",
                    title: "Permanent Owner-Occupancy Waiver",
                    body: "Made the owner-occupancy waiver permanent (previously set to expire). Homeowners who don't live on the property can build ADUs and rent both units without any sunset date.",
                  },
                ].map((l) => (
                  <div key={l.law} className="border-l-4 border-gold pl-6">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold">{l.law}</span>
                      <span className="w-px h-3 bg-navy/20" />
                      <span className="font-display text-navy text-lg">{l.title}</span>
                    </div>
                    <p className="text-navy/70 text-sm leading-relaxed">{l.body}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 bg-navy text-white p-7">
                <div className="text-gold text-xs uppercase tracking-[0.3em] mb-3">Important Note</div>
                <p className="text-white/80 text-sm leading-relaxed">
                  State law sets the <em>floor</em>, not the ceiling. Every
                  Inland Empire city enforces its own plan-check process, lot
                  coverage rules, height limits, and utility tie-in standards.
                  Yucaipa, Redlands, Loma Linda, Lake Elsinore, and San
                  Bernardino County all approve ADUs — but each city has its
                  own inspection cadence and common plan-check corrections.
                  Construction Station has worked through all of them.
                </p>
              </div>
            </section>

            {/* Section 4: Construction Process */}
            <section id="construction-process" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-px bg-gold" />
                <span className="text-gold text-xs uppercase tracking-[0.4em]">Section 4</span>
              </div>
              <h2 className="font-display text-navy text-3xl md:text-4xl lg:text-5xl leading-[1] mb-6">
                The Construction Process
              </h2>
              <div className="prose max-w-none text-navy/75 leading-[1.8] space-y-4 mb-8">
                <p>
                  Building an ADU involves five distinct phases. Understanding
                  each phase helps you plan your timeline and budget, and
                  know what questions to ask a contractor.
                </p>
              </div>
              <div className="space-y-6">
                {[
                  {
                    number: "01",
                    title: "Free Feasibility Consultation",
                    body: "We walk your lot, verify setbacks and lot coverage, assess utility connections (water, sewer, electrical panel capacity), check for easements, and confirm what your city will and won't approve. This is free with Construction Station and takes about 60–90 minutes. You leave with a realistic sense of what you can build and what it will cost.",
                  },
                  {
                    number: "02",
                    title: "Design & Engineering",
                    body: "A licensed architect draws floor plans, elevations, and a site plan. A structural engineer provides calculations for the foundation and framing. A Title 24 energy consultant produces the required energy compliance report. This phase takes 4–8 weeks depending on design complexity and whether you use custom plans or city pre-approved plans (much faster).",
                  },
                  {
                    number: "03",
                    title: "Permit Submission & Approval",
                    body: "We submit your complete package to the building department — plans, calculations, Title 24, and permit application. The city has 60 days to approve or request corrections (plan check). Most IE cities respond with corrections in 3–6 weeks; we respond and resubmit quickly. Total permit time: 2–4 months depending on city workload and whether corrections are needed.",
                  },
                  {
                    number: "04",
                    title: "Construction",
                    body: "Once permits are approved and posted, construction begins. For a detached ADU: site prep and grading, foundation pour (slab or raised), framing, roofing, rough MEP (mechanical, electrical, plumbing), insulation, drywall, tile, cabinets and countertops, flooring, exterior finishes, and final punch list. Construction runs 4–8 months depending on ADU type and size.",
                  },
                  {
                    number: "05",
                    title: "Final Inspection & Move-In",
                    body: "The city inspector conducts a final inspection — checking structural, MEP, insulation, and finish work against the approved plans. A certificate of occupancy is issued where applicable. Construction Station provides a two-year workmanship warranty on all ADU projects.",
                  },
                ].map((step) => (
                  <div key={step.number} className="flex gap-6">
                    <div className="font-display text-gold text-4xl leading-none opacity-60 shrink-0 w-12">
                      {step.number}
                    </div>
                    <div>
                      <div className="font-display text-navy text-xl mb-2">{step.title}</div>
                      <p className="text-navy/70 text-sm leading-relaxed">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 5: Costs */}
            <section id="costs" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-px bg-gold" />
                <span className="text-gold text-xs uppercase tracking-[0.4em]">Section 5</span>
              </div>
              <h2 className="font-display text-navy text-3xl md:text-4xl lg:text-5xl leading-[1] mb-6">
                ADU Costs in the Inland Empire
              </h2>
              <div className="prose max-w-none text-navy/75 leading-[1.8] space-y-4 mb-8">
                <p>
                  ADU costs vary significantly by type, size, site conditions,
                  and finish level. The figures below are 2026 all-in estimates
                  for the Inland Empire — including design, permits, construction,
                  MEP, finishes, and utility connections.
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-navy text-white">
                      <th className="text-left p-4 font-body font-semibold">ADU Type</th>
                      <th className="text-left p-4 font-body font-semibold">Size Range</th>
                      <th className="text-left p-4 font-body font-semibold">All-In Cost Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { type: "Garage Conversion (Attached)", size: "Existing footprint", cost: "$85,000–$130,000" },
                      { type: "Garage Conversion (Detached)", size: "Existing footprint", cost: "$95,000–$160,000" },
                      { type: "Junior ADU (JADU)", size: "Up to 500 sq ft", cost: "$100,000–$175,000" },
                      { type: "Detached ADU — Studio", size: "400–500 sq ft", cost: "$150,000–$210,000" },
                      { type: "Detached ADU — 1 Bedroom", size: "550–700 sq ft", cost: "$185,000–$270,000" },
                      { type: "Detached ADU — 2 Bedroom", size: "750–1,000 sq ft", cost: "$240,000–$350,000" },
                      { type: "Detached ADU — Max Size", size: "1,000–1,200 sq ft", cost: "$300,000–$420,000+" },
                    ].map((row, i) => (
                      <tr
                        key={row.type}
                        className={i % 2 === 0 ? "bg-white" : "bg-cream"}
                      >
                        <td className="p-4 font-semibold text-navy">{row.type}</td>
                        <td className="p-4 text-navy/70">{row.size}</td>
                        <td className="p-4 text-gold font-semibold">{row.cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 prose max-w-none text-navy/75 leading-[1.8] space-y-4">
                <p className="text-sm">
                  <strong className="text-navy">What drives costs up:</strong>{" "}
                  Hillside or slope lots (foundation complexity), properties far
                  from the existing sewer or electrical panel (utility run costs),
                  high-end finishes (tile, countertops, appliances), and detached
                  new construction vs. conversion.
                </p>
                <p className="text-sm">
                  <strong className="text-navy">What drives costs down:</strong>{" "}
                  Using city pre-approved plans (saves $6,000–$14,000 in design
                  fees), keeping the ADU close to existing plumbing and electrical,
                  standard finish selections, and garage conversions (no
                  foundation required).
                </p>
              </div>
            </section>

            {/* Section 6: Financing */}
            <section id="financing" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-px bg-gold" />
                <span className="text-gold text-xs uppercase tracking-[0.4em]">Section 6</span>
              </div>
              <h2 className="font-display text-navy text-3xl md:text-4xl lg:text-5xl leading-[1] mb-6">
                Financing Your ADU
              </h2>
              <div className="prose max-w-none text-navy/75 leading-[1.8] space-y-4 mb-8">
                <p>
                  ADU projects are large investments — $100,000–$400,000 for
                  most types. Most homeowners use some form of financing rather
                  than cash. The right product depends on your current equity,
                  existing mortgage, credit profile, and long-term goals.
                </p>
              </div>
              <div className="space-y-5">
                {[
                  {
                    name: "HELOC (Home Equity Line of Credit)",
                    how: "Revolving credit line secured by your home's equity, typically up to 80% LTV minus your mortgage balance.",
                    best: "Homeowners with significant equity who want flexible draw timing as costs are incurred.",
                    watch: "Variable interest rate; total borrowing capacity limited by current appraised value.",
                  },
                  {
                    name: "Home Equity Loan",
                    how: "Lump-sum loan secured by home equity at a fixed interest rate. Works like a second mortgage.",
                    best: "Homeowners who want a fixed monthly payment and have enough equity to cover the full ADU cost.",
                    watch: "Lower rates than unsecured loans but limited to current equity.",
                  },
                  {
                    name: "Cash-Out Refinance",
                    how: "Replace your existing mortgage with a larger loan and take the equity difference in cash.",
                    best: "Homeowners whose current mortgage rate is close to or higher than today's rates — refinancing doesn't cost much more than holding.",
                    watch: "Refinancing at today's rates may increase your monthly payment significantly if your current rate is low.",
                  },
                  {
                    name: "RenoFi Renovation Loan",
                    how: "Lends against your home's projected after-renovation value (ARV) rather than current equity — allowing you to borrow significantly more without refinancing your first mortgage.",
                    best: "Homeowners with limited current equity whose home will appraise much higher after the ADU is built.",
                    watch: "Offered through partner lenders (not directly through RenoFi). Shop rates and terms carefully.",
                  },
                  {
                    name: "Construction Loan",
                    how: "Short-term loan that funds construction in draws, then converts to a permanent mortgage at project completion.",
                    best: "Homeowners who want to consolidate ADU financing into a long-term mortgage product.",
                    watch: "Requires two closings (construction loan and permanent loan) with associated fees. Construction lenders require detailed plans and contractor qualifications.",
                  },
                  {
                    name: "FHA 203(k) Renovation Loan",
                    how: "FHA-backed loan that combines home purchase or refinance with renovation costs into a single mortgage.",
                    best: "Buyers purchasing a home with plans to add an ADU, or homeowners refinancing and adding renovation costs.",
                    watch: "FHA loan limits apply; requires an FHA-approved contractor and HUD consultant oversight.",
                  },
                ].map((opt) => (
                  <div key={opt.name} className="bg-cream border border-navy/10 p-7">
                    <div className="font-display text-navy text-xl mb-3">{opt.name}</div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <div className="text-gold text-xs uppercase tracking-[0.3em] mb-1">How It Works</div>
                        <p className="text-navy/70 leading-relaxed">{opt.how}</p>
                      </div>
                      <div>
                        <div className="text-gold text-xs uppercase tracking-[0.3em] mb-1">Best For</div>
                        <p className="text-navy/70 leading-relaxed">{opt.best}</p>
                      </div>
                      <div>
                        <div className="text-gold text-xs uppercase tracking-[0.3em] mb-1">Watch Out For</div>
                        <p className="text-navy/70 leading-relaxed">{opt.watch}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 border-l-4 border-gold pl-6">
                <p className="text-navy/75 text-sm leading-relaxed">
                  Construction Station works with local lenders experienced in
                  ADU construction financing and can provide referrals. We also
                  work with borrowers using Enhancify financing for smaller
                  renovation projects. See our{" "}
                  <Link href="/financing" className="text-gold underline decoration-gold/50 hover:text-navy transition-colors">
                    financing page
                  </Link>{" "}
                  for more details.
                </p>
              </div>
            </section>

            {/* Section 7: Rental Income */}
            <section id="rental-income" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-px bg-gold" />
                <span className="text-gold text-xs uppercase tracking-[0.4em]">Section 7</span>
              </div>
              <h2 className="font-display text-navy text-3xl md:text-4xl lg:text-5xl leading-[1] mb-6">
                Rental Income Potential in the Inland Empire
              </h2>
              <div className="prose max-w-none text-navy/75 leading-[1.8] space-y-4 mb-8">
                <p>
                  Rental income is one of the most compelling reasons to build an
                  ADU. Current Inland Empire rental market data shows strong demand
                  and limited supply of small, well-built units — the exact
                  product ADUs create.
                </p>
              </div>
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-navy text-white">
                      <th className="text-left p-4 font-body font-semibold">ADU Type</th>
                      <th className="text-left p-4 font-body font-semibold">Monthly Rent (IE Market)</th>
                      <th className="text-left p-4 font-body font-semibold">Near Loma Linda LLUMC</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { type: "Studio (400–500 sq ft)", ie: "$1,100–$1,500", ll: "$1,400–$1,700" },
                      { type: "1 Bedroom (550–700 sq ft)", ie: "$1,300–$1,800", ll: "$1,600–$2,000" },
                      { type: "2 Bedroom (750–1,000 sq ft)", ie: "$1,600–$2,200", ll: "$2,000–$2,600" },
                    ].map((row, i) => (
                      <tr key={row.type} className={i % 2 === 0 ? "bg-white" : "bg-cream"}>
                        <td className="p-4 font-semibold text-navy">{row.type}</td>
                        <td className="p-4 text-navy/70">{row.ie}</td>
                        <td className="p-4 text-gold font-semibold">{row.ll}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="prose max-w-none text-navy/75 leading-[1.8] space-y-4">
                <p>
                  <strong className="text-navy">Investment return example:</strong>{" "}
                  A $200,000 Redlands Jr. ADU generating $1,600/month in rent
                  produces a 9.6% gross yield on construction cost. After a
                  typical 20% vacancy factor, net yield is approximately 7.7%.
                  At a 7% 30-year mortgage rate on $200,000, the monthly payment
                  is approximately $1,330 — meaning the ADU is cash-flow positive
                  from day one.
                </p>
                <p>
                  <strong className="text-navy">Property value impact:</strong>{" "}
                  A well-built ADU typically increases property value by
                  100–150% of construction cost in the IE. A $200,000 ADU can
                  add $200,000–$300,000 to the appraised value of the primary
                  property. This compounds with rising rents over time — an ADU
                  built today with $1,600/month rent will likely command
                  $2,000–$2,400/month in 5 years at historical IE rent growth
                  rates.
                </p>
              </div>
            </section>

            {/* Section 8: Timeline */}
            <section id="timeline" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-px bg-gold" />
                <span className="text-gold text-xs uppercase tracking-[0.4em]">Section 8</span>
              </div>
              <h2 className="font-display text-navy text-3xl md:text-4xl lg:text-5xl leading-[1] mb-6">
                Timeline Expectations
              </h2>
              <div className="prose max-w-none text-navy/75 leading-[1.8] space-y-4 mb-8">
                <p>
                  The single most common source of homeowner frustration with ADU
                  projects is unrealistic timeline expectations. Most contractors
                  quote construction time without factoring in design and
                  permitting. Here&rsquo;s the complete picture:
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-navy text-white">
                      <th className="text-left p-4 font-body font-semibold">ADU Type</th>
                      <th className="text-left p-4 font-body font-semibold">Design</th>
                      <th className="text-left p-4 font-body font-semibold">Permitting</th>
                      <th className="text-left p-4 font-body font-semibold">Construction</th>
                      <th className="text-left p-4 font-body font-semibold">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { type: "Garage Conversion", design: "4–8 wks", permit: "6–12 wks", build: "12–20 wks", total: "6–10 months" },
                      { type: "Junior ADU (JADU)", design: "4–8 wks", permit: "6–14 wks", build: "14–24 wks", total: "6–11 months" },
                      { type: "Detached ADU (pre-approved plans)", design: "2–4 wks", permit: "6–10 wks", build: "16–28 wks", total: "7–11 months" },
                      { type: "Detached ADU (custom plans)", design: "6–12 wks", permit: "8–16 wks", build: "18–32 wks", total: "9–15 months" },
                    ].map((row, i) => (
                      <tr key={row.type} className={i % 2 === 0 ? "bg-white" : "bg-cream"}>
                        <td className="p-4 font-semibold text-navy">{row.type}</td>
                        <td className="p-4 text-navy/70">{row.design}</td>
                        <td className="p-4 text-navy/70">{row.permit}</td>
                        <td className="p-4 text-navy/70">{row.build}</td>
                        <td className="p-4 text-gold font-semibold">{row.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 prose max-w-none text-navy/75 leading-[1.8] space-y-4">
                <p className="text-sm">
                  Permitting timeline assumes a complete, correct submittal.
                  Incomplete applications, missing documents, or sites with
                  unusual conditions extend timelines. Using city pre-approved
                  plans (available in Yucaipa, Redlands, Temecula, Rancho
                  Cucamonga, and others) can reduce design time by 4–8 weeks.
                </p>
              </div>
            </section>

            {/* Section 9: Getting Started */}
            <section id="get-started" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-px bg-gold" />
                <span className="text-gold text-xs uppercase tracking-[0.4em]">Section 9</span>
              </div>
              <h2 className="font-display text-navy text-3xl md:text-4xl lg:text-5xl leading-[1] mb-6">
                How to Get Started with Construction Station
              </h2>
              <div className="prose max-w-none text-navy/75 leading-[1.8] space-y-4">
                <p>
                  The best first step is a free feasibility consultation — a
                  60–90 minute site visit where we walk your property, assess
                  setbacks and lot coverage, review your city&rsquo;s ADU ordinance,
                  and give you an honest picture of what&rsquo;s buildable and what it
                  will cost.
                </p>
                <p>
                  No obligation, no sales pitch. You leave with a realistic
                  understanding of your options and a sense of whether an ADU
                  makes sense for your property and goals.
                </p>
                <p>
                  If you want to move forward, we begin design coordination and
                  permitting. We provide a fixed-price contract after the design
                  is complete so you know the all-in cost before any site work
                  begins.
                </p>
                <p>
                  Construction Station has active ADU projects in Redlands,
                  Lake Elsinore, and other Inland Empire cities — and has
                  completed garage conversions and Jr. ADUs in the region. CSLB
                  License #1108879 is in good standing and verifiable at
                  cslb.ca.gov.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-gold text-navy font-body font-semibold px-7 py-4 uppercase tracking-[0.2em] text-sm hover:bg-yellow-400 transition-colors text-center"
                >
                  Book Free Consultation
                </Link>
                <a
                  href={CS.phoneHref}
                  className="border border-navy/30 text-navy px-7 py-4 uppercase tracking-[0.2em] text-sm hover:border-gold hover:text-gold transition-colors text-center"
                >
                  Call {CS.phone}
                </a>
                <Link
                  href="/services/adu"
                  className="border border-navy/30 text-navy px-7 py-4 uppercase tracking-[0.2em] text-sm hover:border-gold hover:text-gold transition-colors text-center"
                >
                  ADU Services Overview →
                </Link>
              </div>
            </section>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Quick Facts */}
            <div className="bg-navy text-white p-8 sticky top-28">
              <div className="text-gold text-xs uppercase tracking-[0.4em] mb-5">ADU Quick Facts</div>
              <div className="space-y-4">
                {[
                  { label: "Max detached ADU size", value: "1,200 sq ft" },
                  { label: "Min rear/side setback", value: "4 feet" },
                  { label: "Permit processing limit", value: "60 days" },
                  { label: "Owner occupancy required?", value: "No" },
                  { label: "Parking required (garage conv.)?", value: "No" },
                  { label: "HOA ban allowed?", value: "No" },
                  { label: "Garage conversion cost (IE)", value: "$85K–$160K" },
                  { label: "Detached ADU cost (IE)", value: "$150K–$420K" },
                  { label: "Typical rental income", value: "$1,200–$2,400/mo" },
                  { label: "Construction Station license", value: "CSLB #1108879" },
                ].map((f) => (
                  <div key={f.label} className="flex justify-between text-sm border-b border-white/10 pb-3">
                    <span className="text-white/65">{f.label}</span>
                    <span className="text-gold font-semibold text-right ml-4">{f.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="block w-full text-center bg-gold text-navy font-body font-semibold px-6 py-4 uppercase tracking-[0.2em] text-sm hover:bg-yellow-400 transition-colors"
                >
                  Free Consultation
                </Link>
                <a
                  href={CS.phoneHref}
                  className="block w-full text-center border border-white/30 text-white px-6 py-4 uppercase tracking-[0.2em] text-sm hover:border-gold hover:text-gold transition-colors mt-3"
                >
                  {CS.phone}
                </a>
              </div>
            </div>

            {/* Related Links */}
            <div className="border border-navy/10 p-7">
              <div className="text-navy/50 text-xs uppercase tracking-[0.3em] mb-4">ADU Resources</div>
              <div className="space-y-3">
                {[
                  { label: "ADU Costs & Pricing", href: "/services/adu/costs" },
                  { label: "ADU Financing", href: "/services/adu/financing" },
                  { label: "ADU Floor Plans", href: "/services/adu/floor-plans" },
                  { label: "Garage Conversion Cost Guide", href: "/services/adu/garage-conversion-cost" },
                  { label: "Garage Conversion Permits", href: "/services/adu/garage-conversion-permits" },
                  { label: "ADU Investment & ROI", href: "/services/adu/investment" },
                  { label: "Redlands Jr. ADU Case Study", href: "/projects/redlands-jr-adu" },
                  { label: "ADU by City (29 Cities)", href: "/services/adu" },
                ].map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="flex items-center gap-2 text-navy/70 hover:text-gold text-sm transition-colors"
                  >
                    <span className="w-1 h-1 bg-gold rounded-full shrink-0" />
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* FAQ Section */}
      <FAQAccordion faqs={GUIDE_FAQS} />

      {/* Final CTA */}
      <section className="bg-navy texture-navy text-white py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-5 lg:px-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-px bg-gold" />
            <span className="text-gold text-xs uppercase tracking-[0.4em]">Ready to Start?</span>
            <span className="w-10 h-px bg-gold" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl leading-[1] mb-5">
            Book your free{" "}
            <span className="italic text-gold">ADU feasibility consultation</span>.
          </h2>
          <p className="text-white/70 mb-10 text-base leading-relaxed max-w-xl mx-auto">
            We walk your lot, confirm what your jurisdiction allows, and
            provide a realistic cost range — before you commit to anything.
            Licensed CSLB&nbsp;#1108879. No obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-gold text-navy font-body font-semibold px-8 py-4 text-base hover:bg-yellow-400 transition-colors tracking-wide uppercase"
            >
              Book Free Consultation
            </Link>
            <a
              href={CS.phoneHref}
              className="inline-flex items-center justify-center gap-3 border border-white/40 text-white px-8 py-4 text-base hover:border-gold hover:text-gold transition-colors font-body tracking-wide uppercase"
            >
              Call {CS.phone}
            </a>
            <Link
              href="/services/adu"
              className="inline-flex items-center justify-center gap-3 border border-white/40 text-white px-8 py-4 text-base hover:border-gold hover:text-gold transition-colors font-body tracking-wide uppercase"
            >
              ADU Services →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
