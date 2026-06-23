import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ProcessSteps from "@/components/ProcessSteps";
import ServiceGallery from "@/components/ServiceGallery";
import FAQAccordion from "@/components/FAQAccordion";
import JsonLd from "@/components/JsonLd";
import { CS } from "@/lib/constants";
import { ADU_CITIES } from "@/lib/adu-cities";

export const metadata: Metadata = {
  title: "ADU Contractors Inland Empire | Construction Station",
  description:
    "Licensed ADU general contractor serving the Inland Empire, Temecula Valley, and Desert communities. Detached ADUs, JADUs, garage conversions, and room-addition ADUs up to 1,200 sq ft. Permits to move-in. Call 909-797-6333.",
  alternates: { canonical: "/services/adu" },
};

const CALENDLY_URL = "https://calendly.com/constructionstation-sales/free-adu-remodeling-consult";

const ADU_TYPES = [
  {
    title: "Detached ADU",
    blurb: "Standalone unit up to 1,200 sq ft, built fresh on your lot with its own address, utilities, and entrance.",
    icon: "🏠",
  },
  {
    title: "Garage Conversion",
    blurb: "Convert an existing attached or detached garage into a fully permitted living space — the fastest path to an ADU.",
    icon: "🚪",
  },
  {
    title: "Junior ADU (JADU)",
    blurb: "Up to 500 sq ft carved out of the existing home footprint. Streamlined approval under California state law.",
    icon: "📐",
  },
  {
    title: "Room Addition ADU",
    blurb: "Attached addition to the main home — adds a bedroom, kitchenette, and bath under one shared roof and foundation.",
    icon: "🏗️",
  },
];

const GALLERY = [
  { src: "https://ihvgrybmtngekmfjpxnz.supabase.co/storage/v1/object/public/user-assets/business-1/ADU%20Images/v3/adu-detached-day-v3.jpg", alt: "Detached ADU completed in California backyard — daytime" },
  { src: "https://ihvgrybmtngekmfjpxnz.supabase.co/storage/v1/object/public/user-assets/business-1/ADU%20Images/v3/adu-garage-conversion-v3.jpg", alt: "Garage conversion to ADU — Inland Empire" },
  { src: "https://ihvgrybmtngekmfjpxnz.supabase.co/storage/v1/object/public/user-assets/business-1/ADU%20Images/v3/adu-interior-living-v3.jpg", alt: "ADU interior living space — modern finishes" },
  { src: "https://ihvgrybmtngekmfjpxnz.supabase.co/storage/v1/object/public/user-assets/business-1/ADU%20Images/v3/adu-detached-evening-v3.jpg", alt: "Detached ADU at evening — exterior lighting" },
  { src: "https://ihvgrybmtngekmfjpxnz.supabase.co/storage/v1/object/public/user-assets/business-1/ADU%20Images/v3/adu-under-construction-v3.jpg", alt: "ADU under construction — framing stage" },
  { src: "https://ihvgrybmtngekmfjpxnz.supabase.co/storage/v1/object/public/user-assets/business-1/ADU%20Images/v3/adu-aerial-view-v3.jpg", alt: "Aerial view of completed ADU on California property" },
];

const PROJECTS = [
  {
    name: "Redlands Garage Conversion",
    status: "Completed",
    badge: "bg-emerald-100 text-emerald-900 border-emerald-200",
  },
  {
    name: "Redlands Jr ADU / Room Addition",
    status: "In Progress",
    badge: "bg-amber-100 text-amber-900 border-amber-200",
  },
  {
    name: "Lake Elsinore Dual Garage ADU",
    status: "Permitted · Construction Pending",
    badge: "bg-sky-100 text-sky-900 border-sky-200",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Free Feasibility Consultation",
    description: "We walk your lot, check setbacks and lot coverage, and confirm what your jurisdiction will approve.",
  },
  {
    number: "02",
    title: "Design & Engineering",
    description: "Floor plan, elevations, structural calcs, and Title 24 energy compliance — drawn for your specific lot.",
  },
  {
    number: "03",
    title: "Permit Submission & Approval",
    description: "We submit to your city or county, manage plan-check corrections, and pay the permit fees.",
  },
  {
    number: "04",
    title: "Construction",
    description: "Same Construction Station crew handles foundation, framing, MEP, drywall, and finish — start to keys.",
  },
  {
    number: "05",
    title: "Final Inspection & Move-In Ready",
    description: "Final city inspection, certificate of occupancy where applicable, and two-year workmanship warranty.",
  },
];

const WHY_CS = [
  {
    title: "Licensed General Contractor",
    blurb: `California Contractor's License ${CS.license}. Bonded, insured, and credentialed to pull permits in every Inland Empire jurisdiction.`,
  },
  {
    title: "Inland Empire Local",
    blurb: "Family-run in the Inland Empire since 2008. We know which corrections each city flags before we even submit.",
  },
  {
    title: "Fixed-Price Contracts",
    blurb: "Transparent line-item quotes signed before demo. Change orders only happen when you ask for them — no surprise upcharges.",
  },
  {
    title: "End-to-End Project Management",
    blurb: "One project manager, one written schedule, one warranty — feasibility through final inspection.",
  },
];

const CITIES = ADU_CITIES.map((c) => ({ name: c.name, slug: c.slug }));

const FAQS = [
  // ADU Basics
  {
    q: "What is an ADU?",
    a: "An Accessory Dwelling Unit (ADU) is a secondary residential unit on a single-family or multifamily property with its own entrance, kitchen, bathroom, and sleeping area — a fully independent living space. In California, ADUs can be detached in the backyard, attached to the main home, or converted from an existing garage or bedroom. They're called granny flats, backyard cottages, in-law suites, or casitas — the legal term is ADU. California's ADU reforms (2020–2023) slashed setback requirements to 4 feet, waived parking mandates for garage conversions, set a 60-day statewide permit processing limit, and eliminated the owner-occupancy requirement. The result: Inland Empire homeowners can add a rentable unit, a multi-generational space, or a home office on land they already own.",
  },
  {
    q: "What types of ADUs can I build in California?",
    a: "California recognizes four main ADU types: (1) Detached ADU — a standalone structure up to 1,200 sq ft, separate from the main house with its own utilities; (2) Attached ADU — an addition to the main home sharing at least one wall, up to 50% of the main home's size or 1,200 sq ft, whichever is less; (3) Garage Conversion ADU — converting an existing attached or detached garage into a fully permitted living space; (4) Junior ADU (JADU) — up to 500 sq ft carved from within the existing home footprint, with its own exterior entrance and efficiency kitchen. Construction Station builds all four types across 29 Inland Empire cities. During your free feasibility consultation we'll recommend which type best fits your property, budget, and goals.",
  },
  {
    q: "What is a Junior ADU (JADU) and how is it different from a full ADU?",
    a: "A Junior ADU is limited to 500 square feet and must be created entirely within the existing footprint of a single-family home — typically from a bedroom or garage space. Unlike a full ADU, a JADU must share a wall with the main residence and requires its own exterior entrance and efficiency kitchen (a cooktop and sink; a full range hood is not required). JADUs typically cost less because they use existing structure and foundation. Our Redlands project — a 465 sq ft, 1BD/1BA Jr. ADU using two existing home walls — came in at approximately $200K all-in, well below the cost of a detached ADU of similar size. JADUs are often the fastest, most budget-friendly path to adding living space.",
  },
  {
    q: "Can I build more than one ADU on my property?",
    a: "Yes. California state law (effective 2023) allows single-family properties to have one full ADU plus one Junior ADU simultaneously — two additional units on a single lot. Multifamily properties get even more flexibility: they can convert existing non-livable spaces (storage rooms, common areas, garages) into ADUs up to 25% of existing unit count, and can also build up to two detached ADUs on the lot. Some cities may have additional restrictions beyond state minimums. We'll review your specific parcel, zoning, and any HOA covenants during your free feasibility consultation to confirm what your property actually supports.",
  },
  {
    q: "Can I sell my ADU separately from my home?",
    a: "Under standard real estate law, ADUs cannot be separately parceled and sold apart from the primary residence. However, California AB 1033 (effective 2024) allows cities to opt into a program permitting ADU condominiumization — the ADU and primary dwelling can be established as separate condos and sold to different buyers. Not all Inland Empire cities have adopted this option yet. For rental income, there is no restriction — ADUs are fully legal, income-producing rental units. Many CS clients earn $1,400–$2,200 per month renting their completed ADU while living in the primary home.",
  },
  // California Law & Permits
  {
    q: "Can my HOA stop me from building an ADU?",
    a: "No — not outright. California AB 670 (2020) prohibits HOAs from imposing blanket bans on ADU construction or conditions that effectively make building infeasible. HOAs may require design consistency with the primary dwelling — matching stucco, paint colors, roofline — and may have reasonable placement guidelines, but they cannot issue a blanket prohibition. If your HOA has rejected or threatened to block your project, contact us. Many clients who were initially told 'no' by their HOA have successfully built once we reviewed the CC&Rs alongside the applicable state law and submitted a properly documented request.",
  },
  {
    q: "What are the setback requirements for an ADU in the Inland Empire?",
    a: "California state law sets a minimum 4-foot rear and side yard setback for new detached ADUs — your ADU can be built as close as 4 feet from the rear and side property lines. Front setbacks still follow local zoning. Garage conversions are an important exception: if you're converting an existing structure, it can remain in its current location regardless of whether it meets today's setback minimums — even if it sits closer than 4 feet to the property line. Individual Inland Empire cities may impose height limits (typically 16–25 feet) and lot coverage maximums on top of state minimums. We verify your specific city's rules at every feasibility consultation.",
  },
  {
    q: "Do I need to live on my property to build an ADU?",
    a: "No. California eliminated the owner-occupancy requirement in 2020 (AB 68). You don't need to live in the primary residence or the ADU. This means ADUs can be added to investment or rental properties — both units can be rented simultaneously. The one caveat is short-term rentals: some Inland Empire cities prohibit ADUs from being used for short-term rentals (under 30 days). For traditional long-term rentals (30+ days), there is no owner-occupancy restriction anywhere in California.",
  },
  {
    q: "What is the 60-day permit rule for ADUs?",
    a: "California Government Code Section 65852.2 requires cities and counties to approve or deny complete ADU permit applications within 60 days. If a jurisdiction fails to act within that window, the permit is deemed approved by operation of law. In practice, most Inland Empire cities process ADU permits in 30–60 days, though plan-check corrections can extend the timeline if the initial submittal is incomplete. Construction Station manages the entire permit process — we track deadlines, respond to correction letters promptly, and follow up with building departments proactively. Permit delays are almost always caused by incomplete submittals; we prepare thorough, complete packages.",
  },
  {
    q: "Do I need replacement parking if I convert my garage to an ADU?",
    a: "No. California state law explicitly prohibits cities from requiring replacement parking when a garage is converted to an ADU. If you convert your two-car garage, the city cannot require you to build a new carport or garage as a condition of approval. This is one of the most impactful provisions in California's ADU reform — it removes a major cost and space barrier that previously made garage conversions difficult. If you encounter pushback from a building department on parking replacement, let us know and we'll help you navigate it with the appropriate state code citation.",
  },
  // Costs & Financing
  {
    q: "How much does an ADU cost in the Inland Empire?",
    a: "ADU costs in the Inland Empire range by type: garage conversions run $85,000–$150,000 all-in (permits, plans, construction, and utility connections); Junior ADUs range from $100,000–$175,000; detached ADUs with new construction run $175,000–$350,000 for a standard 600–1,000 sq ft unit, and up to $400,000+ for larger or more complex builds. Our Redlands Jr. ADU project came in at approximately $200,000 for 465 sq ft — a realistic benchmark for a quality Jr. ADU in the current market. These are all-in figures: design, permits, construction, MEP, finishes, and utility connections included. We provide transparent, line-item written estimates after your free feasibility consultation.",
  },
  {
    q: "What financing options are available for ADU construction?",
    a: "Several options exist: (1) HELOC or Home Equity Loan — borrow against current equity, typically up to 80% LTV minus your mortgage balance; (2) Cash-out Refinance — replace your mortgage with a larger one and take the equity difference in cash; (3) Construction Loan — short-term financing that converts to a permanent mortgage at completion; (4) RenoFi Loan — a renovation loan based on your home's projected after-renovation value, allowing you to borrow significantly more than a traditional HELOC without refinancing your first mortgage; (5) ADU-specific programs — CalHFA and some local lenders offer ADU-targeted products. We can refer you to lenders experienced in ADU construction financing. See constructionstation.com/financing for a full comparison.",
  },
  {
    q: "Does an ADU increase my property value?",
    a: "Yes, significantly. A well-built ADU typically adds value equal to 100–150% of its construction cost. In the Inland Empire, where rental demand is strong and single-family land is limited, ADUs can add $150,000–$350,000 to appraised value depending on size, quality, and location. Appraisers typically capitalize the ADU's rental income potential (at 60–75% of market rent) into the property value. Beyond appreciation, the ADU's monthly rental income ($1,400–$2,200 in most IE markets) offsets financing cost — many clients find their ADU is cash-flow neutral or positive within 5–7 years of completion.",
  },
  {
    q: "How much rental income can I earn from an ADU in the Inland Empire?",
    a: "Current rental income for IE ADUs: studios and one-bedrooms rent for $1,200–$1,800/month; two-bedroom units range from $1,600–$2,400/month. Rates vary by submarket — Redlands, Loma Linda, and Riverside command a premium. Areas near Loma Linda University Medical Center or major employment centers see stronger demand. A realistic benchmark: a $200,000 ADU in a strong IE submarket generating $1,500–$1,800/month provides a 9–11% gross yield on construction cost. We can provide rental comparables for your specific city during your consultation so you can model the investment return accurately.",
  },
  {
    q: "What is a RenoFi loan and how does it work for ADUs?",
    a: "A RenoFi loan is a renovation loan that calculates your borrowing capacity based on your home's projected after-renovation value (ARV) rather than its current equity. Traditional HELOCs are capped by what your home is worth today. A RenoFi loan uses what your home will be worth after the ADU is built — potentially $150,000–$350,000 higher — allowing you to borrow significantly more without refinancing your existing first mortgage. This is particularly valuable for ADU projects where current equity is insufficient to fund the full build. Construction Station can refer you to lenders who offer this product and are experienced with ADU construction financing.",
  },
  // Design & Construction
  {
    q: "How long does it take to build an ADU from start to finish?",
    a: "Total ADU timelines: detached ADUs typically take 8–14 months from initial consultation to move-in. Breakdown: feasibility and design (1–2 months), permit submission and approval (2–4 months), construction (4–8 months), final inspection (2–4 weeks). Garage conversions are faster — 6–10 months total because there's no foundation work. Junior ADUs often fall in between at 5–9 months. Our Redlands Jr. ADU broke ground in March 2026 targeting a June 2026 completion — roughly a 4-month construction phase after permits were secured. We provide a written schedule with key milestone dates before you sign anything.",
  },
  {
    q: "What is the ADU construction process from start to finish?",
    a: "Our ADU process has five phases: (1) Free Feasibility Consultation — we walk your lot, review setbacks, utilities, and zoning to confirm what your city will approve; (2) Design and Engineering — floor plans, elevations, structural calculations, Title 24 energy compliance; (3) Permit Submission — we prepare and submit to your city, respond to plan-check corrections, pay permit fees; (4) Construction — foundation, framing, MEP (mechanical, electrical, plumbing), insulation, drywall, tile, finishes, and punch list; (5) Final Inspection — city sign-off, certificate of occupancy where applicable, and our two-year workmanship warranty. One project manager, one point of contact, permits to keys.",
  },
  {
    q: "What size ADU can I build on my lot?",
    a: "State law sets the maximum at 1,200 sq ft for detached ADUs. Attached ADUs are capped at 50% of the existing home's square footage or 1,200 sq ft, whichever is less. Junior ADUs are limited to 500 sq ft. Beyond state maximums, your city's lot coverage rules — typically 50% maximum impervious coverage — further constrain what's buildable. Your setbacks, existing structures, and any easements also shape the buildable footprint. During the feasibility consultation, we calculate the maximum buildable envelope for your specific parcel, accounting for all constraints, and present the realistic size range.",
  },
  {
    q: "Do I need an architect for my ADU project?",
    a: "Yes — California ADU construction requires permitted plans drawn by a licensed architect or engineer before the city will issue a building permit. Construction Station coordinates architectural design as part of our process. We work with licensed architects who specialize in ADU design and are familiar with each local jurisdiction's typical plan-check requirements. Many Inland Empire cities (Yucaipa, Redlands, Temecula, Rancho Cucamonga, Fontana, and others) offer free pre-approved ADU plans that save $6,000–$14,000 in design fees and weeks off your permit timeline — we build any city pre-approved plan.",
  },
  {
    q: "Can I convert my garage into an ADU?",
    a: "Yes — garage conversions are one of the most cost-effective ADU paths. Both attached and detached garages can be converted. California prohibits cities from requiring replacement parking, so you don't need to build a new carport when you convert. The process involves: closing or modifying the garage door opening, framing an exterior wall, adding insulation, running new MEP (mechanical, electrical, plumbing), installing drywall, flooring, a kitchen, and bathroom. Attached garages typically convert for $85,000–$130,000 all-in; detached garages run $95,000–$150,000+ depending on size and finish level. See our Garage Conversion Cost guide for a full 2026 pricing breakdown.",
  },
  // Our ADU Experience
  {
    q: "Does Construction Station build all types of ADUs?",
    a: "Yes. We build the full range: detached new-construction ADUs, attached ADUs, garage conversions (attached and detached), and Junior ADUs. Active and completed projects include a Redlands garage conversion (complete), a Redlands Jr. ADU currently under construction targeting June 2026 completion, and a Lake Elsinore dual-garage ADU in the permitted stage. CSLB License #1108879 covers all ADU construction in California. We use our own W-2 crew for framing, MEP, tile, and finishes — no revolving subcontractors on core trades.",
  },
  {
    q: "What Inland Empire cities do you serve for ADU construction?",
    a: "We serve 29 cities across San Bernardino, Riverside, and San Diego counties: Yucaipa, Redlands, Loma Linda, Highland, San Bernardino, Rialto, Colton, Fontana, Rancho Cucamonga, Ontario, Upland, Chino Hills, Beaumont, Banning, Calimesa, Riverside, Corona, Lake Elsinore, Temecula, Murrieta, Menifee, Perris, Hemet, Palm Springs, Palm Desert, Cathedral City, Indio, Coachella, and Desert Hot Springs. We know each city's plan-check process and common corrections before we submit. View city-specific ADU regulation guides in the Cities We Serve section below.",
  },
  {
    q: "Does Construction Station handle permits and inspections for ADUs?",
    a: "Yes — completely. We prepare all permit documents: architectural plans, structural calculations, Title 24 energy reports, and permit applications. We submit to the building department, respond to plan-check correction letters, and track approval status. During construction, we schedule and pass every required inspection: foundation, framing, rough MEP, insulation, drywall, and final. You never need to visit a building department or track a permit status — we handle it and keep you updated at each milestone. CSLB License #1108879 authorizes us to pull permits in every Inland Empire jurisdiction.",
  },
  {
    q: "What is included in Construction Station's all-in ADU pricing?",
    a: "Our all-in ADU pricing includes: architectural design and engineering, Title 24 energy reports, all permit fees, site preparation, foundation (slab, raised, or crawlspace per soil conditions), framing, roofing, exterior finish (stucco or siding), windows and exterior doors, insulation, drywall, electrical (panel upgrade if required, all wiring and fixtures), plumbing (water supply, drain, vent, and utility connection), HVAC (mini-split system), kitchen (cabinets, countertops, and appliances), bathroom (tile, vanity, and fixtures), flooring, interior and exterior paint, final cleanup, and all required city inspections. We do not charge separately for project management.",
  },
  {
    q: "Do you offer ADU floor plans?",
    a: "Yes. We have 12 sample ADU floor plans ranging from 400 to 1,200 sq ft — studio, 1-bedroom, and 2-bedroom configurations in both detached and garage-conversion formats. Plans can be customized to your specific lot dimensions. We also build directly from your city's pre-approved plan library — Yucaipa, Redlands, Temecula, Rancho Cucamonga, Fontana, Lake Elsinore, and other IE cities offer free pre-approved plans that save $6,000–$14,000 in design fees and cut weeks from permit approval. View all 12 sample plans at constructionstation.com/services/adu/floor-plans, or request custom plans during your free feasibility consultation.",
  },
];

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://constructionstation.com";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "ADU Construction",
  provider: {
    "@type": "GeneralContractor",
    name: CS.name,
    telephone: CS.phone,
    url: SITE_URL,
    identifier: CS.license,
  },
  areaServed: { "@type": "Place", name: "Inland Empire, Temecula Valley, and Desert Communities, California" },
  description:
    "Licensed ADU general contractor — detached ADUs, JADUs, garage conversions, and room-addition ADUs up to 1,200 sq ft. Permits to move-in.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: CS.name,
  telephone: CS.phone,
  email: CS.email,
  url: `${SITE_URL}/services/adu`,
  image: `${SITE_URL}/images/services/adu/adu-01.jpg`,
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    addressRegion: "CA",
    addressCountry: "US",
    addressLocality: "Inland Empire",
  },
  areaServed: CITIES.map((city) => `${city.name}, CA`),
  identifier: CS.license,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a as string },
  })),
};

function PrimaryCta({ id }: { id?: string }) {
  return (
    <a
      id={id}
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

export default function ADUPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero — custom block so we can swap CTAs for Calendly */}
      <section className="relative bg-navy texture-navy text-white pt-36 pb-0 lg:pt-44 overflow-hidden">
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
            Service · ADUs
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-5 lg:px-10 pb-20 lg:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="text-gold text-xs tracking-[0.4em] uppercase mb-5 md:hidden">
                Service · ADUs
              </div>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1] mb-7">
                Inland Empire&rsquo;s{" "}
                <span className="italic text-gold">ADU General Contractor</span>
              </h1>
              <p className="text-white/80 text-base md:text-lg max-w-2xl mb-9 leading-relaxed">
                From permits to move-in, we build accessory dwelling units up
                to 1,200 sq ft across the Inland Empire, Temecula Valley, and
                Desert communities.
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
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] overflow-hidden shadow-2xl">
                <Image
                  src="/images/services/adu/adu-01.jpg"
                  alt="Modern accessory dwelling unit built by Construction Station in the Inland Empire"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <article className="bg-white py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-12 gap-6 mb-10 items-start">
            <div className="col-span-12 md:col-span-3">
              <div className="text-gold text-xs tracking-[0.3em] uppercase">
                Overview
              </div>
              <div className="hidden md:block w-12 h-px bg-gold mt-3" />
            </div>
            <div className="col-span-12 md:col-span-9">
              <p className="text-navy/85 text-lg leading-[1.7] mb-6">
                Construction Station is a licensed general contractor
                specializing in ADU construction across San Bernardino,
                Riverside, and Orange counties. We&rsquo;ve completed garage
                conversions, Junior ADUs, and full detached ADUs — and we
                have projects currently permitted and under construction.
                We handle everything: feasibility, design coordination,
                permits, construction, and final inspection.
              </p>
              <p className="text-navy/75 leading-[1.8] mb-5">
                California&rsquo;s statewide ADU laws (AB 68, AB 881, and
                follow-on legislation) have made backyard housing the most
                attractive home-value upgrade in a generation. Setback
                minimums dropped to 4 ft, parking requirements were waived
                in most jurisdictions, and approval timelines shortened
                statewide. The result: Inland Empire homeowners can add a
                rentable unit, a multi-generational housing space, or a
                home office on land they already own — often with rental
                income that covers the financing.
              </p>
              <p className="text-navy/75 leading-[1.8] mb-5">
                The catch: state law sets the floor, but every jurisdiction
                still enforces its own plan-check process, lot-coverage
                rules, fire-code requirements, and utility-tie-in standards.
                Yucaipa, Redlands, Loma Linda, Highland, Lake Elsinore, and
                San Bernardino County all approve ADUs — but each city has
                its own preferred details, common corrections, and
                inspection cadence. We&rsquo;ve worked through them all.
              </p>
              <p className="text-navy/75 leading-[1.8]">
                Whether you&rsquo;re converting an existing garage, adding
                a Junior ADU to an existing bedroom, building an attached
                room-addition ADU, or breaking ground on a new detached
                unit, you get one project manager, one written schedule,
                one fixed-price contract, and one warranty.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Gallery */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-px bg-gold" />
              <span className="text-gold text-xs uppercase tracking-[0.4em]">Our Work</span>
              <span className="w-10 h-px bg-gold" />
            </div>
            <h2 className="font-display text-navy text-4xl md:text-5xl leading-[1]">
              ADUs we&apos;ve <span className="italic text-gold">built</span>.
            </h2>
          </div>
          <ServiceGallery images={GALLERY} />
        </div>
      </section>

      {/* ADU Types */}
      <section className="bg-cream py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-px bg-gold" />
              <span className="text-gold text-xs uppercase tracking-[0.4em]">
                ADU Types
              </span>
              <span className="w-10 h-px bg-gold" />
            </div>
            <h2 className="font-display text-navy text-4xl md:text-5xl lg:text-6xl leading-[1]">
              Four paths to{" "}
              <span className="italic text-gold">more square footage</span>.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {ADU_TYPES.map((t) => (
              <div
                key={t.title}
                className="bg-white border border-navy/10 p-7 hover:border-gold transition-colors"
              >
                <div className="text-4xl mb-4">{t.icon}</div>
                <div className="font-display text-navy text-2xl mb-2 leading-tight">
                  {t.title}
                </div>
                <div className="text-navy/70 text-sm leading-relaxed">
                  {t.blurb}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Completed Projects */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-px bg-gold" />
              <span className="text-gold text-xs uppercase tracking-[0.4em]">
                Projects
              </span>
              <span className="w-10 h-px bg-gold" />
            </div>
            <h2 className="font-display text-navy text-4xl md:text-5xl leading-[1]">
              Completed and{" "}
              <span className="italic text-gold">in-progress</span>.
            </h2>
          </div>
          <div className="space-y-4">
            {PROJECTS.map((p) => (
              <div
                key={p.name}
                className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 bg-cream p-6 border border-navy/10"
              >
                <div className="font-display text-navy text-xl md:text-2xl">
                  {p.name}
                </div>
                <span
                  className={`inline-flex self-start md:self-auto px-3 py-1 border text-xs uppercase tracking-wider font-semibold ${p.badge}`}
                >
                  {p.status}
                </span>
              </div>
            ))}
          </div>

          {/* Featured Project Card */}
          <div className="mt-10 border border-gold/40 bg-navy p-8 md:p-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-gold text-xs uppercase tracking-[0.4em]">
                Featured Project
              </span>
              <span className="h-px flex-1 bg-gold/30" />
              <span className="inline-flex px-3 py-1 border border-amber-200 bg-amber-100 text-amber-900 text-xs uppercase tracking-wider font-semibold">
                In Progress
              </span>
            </div>
            <h3 className="font-display text-white text-2xl md:text-3xl lg:text-4xl mb-4 leading-tight">
              Junior ADU in Redlands —{" "}
              <span className="italic text-gold">Making Room for Family</span>
            </h3>
            <p className="text-white/65 text-sm md:text-base leading-relaxed mb-6 max-w-2xl">
              465 sq ft 1BD/1BA Junior ADU. New construction incorporating two existing home
              walls to reduce cost. ~$200K all-in budget met. Construction started March 2026,
              completion June 2026.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              {[
                { l: "Location", v: "Redlands, CA" },
                { l: "Size", v: "465 sq ft" },
                { l: "Budget", v: "~$200K" },
              ].map((chip) => (
                <div key={chip.l} className="flex items-center gap-2 border border-white/15 px-4 py-2">
                  <span className="text-white/40 text-xs uppercase tracking-wider">{chip.l}</span>
                  <span className="w-px h-3 bg-white/15" />
                  <span className="text-white text-sm font-semibold">{chip.v}</span>
                </div>
              ))}
            </div>
            <Link
              href="/projects/redlands-jr-adu"
              className="inline-flex items-center gap-2 bg-gold text-navy font-body font-semibold uppercase tracking-wider px-7 py-3 text-sm hover:bg-yellow-400 transition-colors"
            >
              Read the Case Study
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Mid-page CTA #2 */}
      <section className="bg-cream py-12">
        <div className="max-w-4xl mx-auto px-5 lg:px-10 text-center">
          <div className="font-display text-navy text-2xl md:text-3xl mb-5">
            Wondering what your lot can support?
          </div>
          <PrimaryCta />
        </div>
      </section>

      <ProcessSteps steps={STEPS} />

      {/* Why CS */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-px bg-gold" />
              <span className="text-gold text-xs uppercase tracking-[0.4em]">
                Why Construction Station
              </span>
              <span className="w-10 h-px bg-gold" />
            </div>
            <h2 className="font-display text-navy text-4xl md:text-5xl lg:text-6xl leading-[1]">
              Four reasons{" "}
              <span className="italic text-gold">homeowners pick us</span>.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {WHY_CS.map((w) => (
              <div
                key={w.title}
                className="bg-cream border border-navy/10 p-7"
              >
                <div className="font-display text-navy text-xl mb-2">
                  {w.title}
                </div>
                <div className="text-navy/70 text-sm leading-relaxed">
                  {w.blurb}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floor Plans Preview */}
      <section className="bg-cream py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-px bg-gold" />
              <span className="text-gold text-xs uppercase tracking-[0.4em]">
                Floor Plans
              </span>
              <span className="w-10 h-px bg-gold" />
            </div>
            <h2 className="font-display text-navy text-4xl md:text-5xl leading-[1] mb-4">
              Sample ADU{" "}
              <span className="italic text-gold">floor plans</span>.
            </h2>
            <p className="text-navy/70 max-w-xl mx-auto">
              View our sample ADU floor plans — 12 layouts from 400 to 1,200 sq ft.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title: "Studio", size: "400 sq ft", type: "Garage Conversion" },
              { title: "1-Bedroom", size: "600 sq ft", type: "Detached ADU" },
              { title: "2-Bedroom", size: "1,000 sq ft", type: "Detached ADU" },
            ].map((p) => (
              <Link
                key={p.title}
                href="/services/adu/floor-plans"
                className="bg-white border border-navy/10 p-7 hover:border-gold transition-colors group"
              >
                <div className="text-gold text-xs tracking-[0.3em] uppercase mb-3">
                  Sample Plan
                </div>
                <div className="font-display text-navy text-2xl mb-2">
                  {p.title}
                </div>
                <div className="text-navy/60 text-sm mb-4">
                  {p.size} · {p.type}
                </div>
                <div className="flex items-center gap-2 text-gold uppercase tracking-[0.3em] text-xs">
                  View All Plans
                  <span className="w-6 h-px bg-gold group-hover:w-10 transition-all" />
                  <span aria-hidden>→</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services/adu/floor-plans"
              className="inline-flex items-center gap-3 border border-navy/40 text-navy px-7 py-4 uppercase tracking-[0.2em] text-sm hover:border-gold hover:text-gold transition-colors"
            >
              See all 12 sample plans →
            </Link>
          </div>
        </div>
      </section>

      {/* ADU Resources */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-px bg-gold" />
              <span className="text-gold text-xs uppercase tracking-[0.4em]">
                ADU Resources
              </span>
              <span className="w-10 h-px bg-gold" />
            </div>
            <h2 className="font-display text-navy text-4xl md:text-5xl lg:text-6xl leading-[1]">
              Everything you need to{" "}
              <span className="italic text-gold">plan your ADU</span>.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "📘", title: "ADU Basics", blurb: "What an ADU is, the types, and how it works.", href: "/services/adu/basics" },
              { icon: "💰", title: "ADU Costs", blurb: "Transparent all-in pricing and full cost breakdown.", href: "/services/adu/costs" },
              { icon: "🏦", title: "ADU Financing", blurb: "HELOCs, construction loans, grants, and more.", href: "/services/adu/financing" },
              { icon: "📈", title: "ADU Investment", blurb: "Rental income, ROI, and property value impact.", href: "/services/adu/investment" },
              { icon: "📐", title: "Floor Plans", blurb: "12 sample layouts from 400 to 1,200 sq ft.", href: "/services/adu/floor-plans" },
              { icon: "🏛️", title: "Regulations by City", blurb: "ADU rules across 29 Inland Empire cities.", href: "/services/adu/yucaipa" },
              { icon: "🚗", title: "Garage Conversion Cost", blurb: "2026 pricing guide — $85K–$160K all-in breakdown.", href: "/services/adu/garage-conversion-cost" },
              { icon: "📋", title: "Garage Conversion Permits", blurb: "Complete permit guide for Yucaipa & San Bernardino County.", href: "/services/adu/garage-conversion-permits" },
            ].map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="bg-cream border border-navy/10 p-7 hover:border-gold transition-colors group flex flex-col"
              >
                <div className="text-4xl mb-4">{r.icon}</div>
                <div className="font-display text-navy text-2xl mb-2 leading-tight group-hover:text-gold transition-colors">
                  {r.title}
                </div>
                <div className="text-navy/70 text-sm leading-relaxed mb-5">
                  {r.blurb}
                </div>
                <div className="mt-auto flex items-center gap-2 text-gold uppercase tracking-[0.3em] text-xs">
                  Learn More
                  <span className="w-6 h-px bg-gold group-hover:w-10 transition-all" />
                  <span aria-hidden>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cities — clickable links to regulation pages */}
      <section id="cities" className="bg-cream py-20 lg:py-24 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-4">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-px bg-gold" />
              <span className="text-gold text-xs uppercase tracking-[0.4em]">
                Cities We Serve
              </span>
              <span className="w-10 h-px bg-gold" />
            </div>
            <h2 className="font-display text-navy text-4xl md:text-5xl leading-[1]">
              ADU regulations across{" "}
              <span className="italic text-gold">29 cities</span>.
            </h2>
            <p className="text-navy/70 mt-5 max-w-2xl mx-auto leading-relaxed">
              Click any city below for a complete ADU regulation guide — max
              size, setbacks, height, parking, JADUs, impact fees, and the
              local permit process.
            </p>
          </div>
          <div className="mt-10 max-w-3xl mx-auto bg-white border-l-4 border-gold p-7 md:p-8">
            <div className="font-display text-navy text-2xl md:text-3xl leading-tight mb-3">
              Many IE Cities Offer Free Pre-Approved ADU Plans
            </div>
            <p className="text-navy/75 leading-relaxed">
              Cities like Yucaipa, Redlands, Temecula, Menifee, Lake Elsinore,
              Rancho Cucamonga, Fontana, and Cathedral City offer free
              pre-approved ADU plans that can save you $6,000–$14,000 in design
              fees and weeks off your approval timeline. Construction Station
              builds any city pre-approved plan — we handle everything from
              permit to move-in ready.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-3 gap-x-6 text-sm mt-10">
            {CITIES.map((c) => (
              <Link
                key={c.slug}
                href={`/services/adu/${c.slug}`}
                className="flex items-center gap-2 text-navy/80 hover:text-gold transition-colors"
              >
                <span className="w-1 h-1 bg-gold rounded-full shrink-0" />
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion faqs={FAQS} />

      {/* Related services */}
      <section className="bg-cream py-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-gold text-xs tracking-[0.3em] uppercase mb-3 text-center">
            Related Services
          </div>
          <div className="font-display text-navy text-3xl text-center mb-10">
            Explore more of our craft
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            <Link
              href="/services/room-additions"
              className="bg-white border border-navy/10 p-6 hover:border-gold transition-colors group"
            >
              <div className="font-display text-navy text-2xl">Room Additions</div>
              <div className="text-navy/60 text-sm mt-1">
                Attached square footage
              </div>
            </Link>
            <Link
              href="/services/adu/floor-plans"
              className="bg-white border border-navy/10 p-6 hover:border-gold transition-colors group"
            >
              <div className="font-display text-navy text-2xl">Sample Floor Plans</div>
              <div className="text-navy/60 text-sm mt-1">
                12 layouts, 400–1,200 sq ft
              </div>
            </Link>
            <Link
              href="/contact"
              className="bg-white border border-navy/10 p-6 hover:border-gold transition-colors group"
            >
              <div className="font-display text-navy text-2xl">Send Us a Message</div>
              <div className="text-navy/60 text-sm mt-1">
                Request a free estimate
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA #3 */}
      <section className="bg-navy texture-navy text-white py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-5 lg:px-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-px bg-gold" />
            <span className="text-gold text-xs uppercase tracking-[0.4em]">Ready to start?</span>
            <span className="w-10 h-px bg-gold" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl leading-[1] mb-5">
            Book your free{" "}
            <span className="italic text-gold">ADU consultation</span>.
          </h2>
          <p className="text-white/70 mb-10 text-base leading-relaxed max-w-xl mx-auto">
            We&rsquo;ll walk your lot, confirm what your jurisdiction allows,
            and ballpark cost before you commit to anything.
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
