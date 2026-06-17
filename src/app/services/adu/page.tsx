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
  {
    q: "How long does it take to build an ADU?",
    a: "From start to finish, most ADU projects take 8-16 months. The process begins with a site survey, then deciding on plans — whether a custom design or one of your city's pre-approved plans — followed by submitting for and securing your city permit, and finally the build. Design and permitting often take as long as construction, so we set realistic expectations up front and keep you updated at every stage.",
  },
  {
    q: "What is the process for building an ADU with Construction Station?",
    a: (
      <>
        <p className="mb-3">Our ADU process runs in four main phases:</p>
        <ol className="list-decimal list-outside ml-5 space-y-1.5">
          <li>Site survey — we assess your property, lot dimensions, utilities, and existing conditions</li>
          <li>Plans — we help you choose between a custom design or a city pre-approved plan</li>
          <li>Permitting — we prepare and submit your plans to the city and manage approvals</li>
          <li>Build — once permits are approved, we construct your ADU through to final inspection</li>
        </ol>
        <p className="mt-3">We handle the entire process under one roof so you have a single accountable team from survey to keys.</p>
      </>
    ),
  },
  {
    q: "How much does an ADU cost?",
    a: (
      <>
        ADU costs vary based on size, type, and finishes. We&rsquo;ve broken down detailed, current pricing on our{" "}
        <Link href="/services/adu/costs" className="text-gold underline decoration-gold/50 hover:text-navy transition-colors">
          ADU Costs page
        </Link>
        {" "}— including how garage conversions, Junior ADUs, and detached new construction compare. We&rsquo;ll also give you a clear, itemized estimate for your specific project.
      </>
    ),
  },
  {
    q: "What is a Junior ADU (JADU)?",
    a: (
      <>
        A Junior ADU is a compact independent living space of up to 500 square feet, created within the existing footprint of your home — often from a garage or spare bedroom. It has its own exterior entrance and an efficiency kitchen. Our recent{" "}
        <Link href="/projects/redlands-jr-adu" className="text-gold underline decoration-gold/50 hover:text-navy transition-colors">
          Redlands project
        </Link>
        {" "}was a Junior ADU, built so a family member could move in and help around the home. JADUs are often the most budget-friendly path to adding living space.
      </>
    ),
  },
  {
    q: "What types of ADUs can you build?",
    a: "We build the full range: garage conversions, Junior ADUs, attached ADUs, and detached new-construction ADUs. The right type depends on your lot, budget, and how you plan to use the space — we'll walk you through the options during your site survey.",
  },
  {
    q: "Do I need a permit to build an ADU?",
    a: "Yes. An ADU adds living space and must meet California building codes, so it requires permits. We handle the entire permitting process for you — preparing plans, submitting to the city, and managing approvals through to final inspection.",
  },
  {
    q: "What's the difference between custom plans and pre-approved plans?",
    a: "Pre-approved (or \"permit-ready\") plans are designs your city has already reviewed and approved, which can speed up permitting. Custom plans are designed specifically for your property and vision. Pre-approved plans can save time when they fit your lot as-is but offer limited flexibility; custom plans give you exactly what you want but take longer to permit. We help you weigh the tradeoff.",
  },
  {
    q: "Can I rent out my ADU?",
    a: "Yes. ADUs can be rented, and California no longer requires the owner to live on the property — so an ADU can be added to a rental or investment property. Short-term rental rules vary by location, so check with your city or county to confirm whether your ADU can be used as a short-term rental.",
  },
  {
    q: "Will my ADU have its own address and utilities?",
    a: "Typically yes. ADUs are usually assigned a separate address (important for emergency services), and they're metered separately for electrical service. We handle the utility coordination as part of your project.",
  },
  {
    q: "Why are people building ADUs?",
    a: "The reasons vary — many of our clients build for family, creating space for an aging parent, an adult child, or a relative who needs to be close by. Others build for rental income or added property value. Whatever your reason, we design an ADU that fits your needs and your property.",
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
  mainEntity: [
    { "@type": "Question", name: "How long does it take to build an ADU?", acceptedAnswer: { "@type": "Answer", text: "From start to finish, most ADU projects take 8-16 months. The process begins with a site survey, then deciding on plans — whether a custom design or one of your city's pre-approved plans — followed by submitting for and securing your city permit, and finally the build. Design and permitting often take as long as construction, so we set realistic expectations up front and keep you updated at every stage." } },
    { "@type": "Question", name: "What is the process for building an ADU with Construction Station?", acceptedAnswer: { "@type": "Answer", text: "Our ADU process runs in four main phases: 1. Site survey — we assess your property, lot dimensions, utilities, and existing conditions 2. Plans — we help you choose between a custom design or a city pre-approved plan 3. Permitting — we prepare and submit your plans to the city and manage approvals 4. Build — once permits are approved, we construct your ADU through to final inspection. We handle the entire process under one roof so you have a single accountable team from survey to keys." } },
    { "@type": "Question", name: "How much does an ADU cost?", acceptedAnswer: { "@type": "Answer", text: "ADU costs vary based on size, type, and finishes. We've broken down detailed, current pricing on our ADU Costs page — including how garage conversions, Junior ADUs, and detached new construction compare. We'll also give you a clear, itemized estimate for your specific project." } },
    { "@type": "Question", name: "What is a Junior ADU (JADU)?", acceptedAnswer: { "@type": "Answer", text: "A Junior ADU is a compact independent living space of up to 500 square feet, created within the existing footprint of your home — often from a garage or spare bedroom. It has its own exterior entrance and an efficiency kitchen. Our recent Redlands project was a Junior ADU, built so a family member could move in and help around the home. JADUs are often the most budget-friendly path to adding living space." } },
    { "@type": "Question", name: "What types of ADUs can you build?", acceptedAnswer: { "@type": "Answer", text: "We build the full range: garage conversions, Junior ADUs, attached ADUs, and detached new-construction ADUs. The right type depends on your lot, budget, and how you plan to use the space — we'll walk you through the options during your site survey." } },
    { "@type": "Question", name: "Do I need a permit to build an ADU?", acceptedAnswer: { "@type": "Answer", text: "Yes. An ADU adds living space and must meet California building codes, so it requires permits. We handle the entire permitting process for you — preparing plans, submitting to the city, and managing approvals through to final inspection." } },
    { "@type": "Question", name: "What's the difference between custom plans and pre-approved plans?", acceptedAnswer: { "@type": "Answer", text: "Pre-approved (or \"permit-ready\") plans are designs your city has already reviewed and approved, which can speed up permitting. Custom plans are designed specifically for your property and vision. Pre-approved plans can save time when they fit your lot as-is but offer limited flexibility; custom plans give you exactly what you want but take longer to permit. We help you weigh the tradeoff." } },
    { "@type": "Question", name: "Can I rent out my ADU?", acceptedAnswer: { "@type": "Answer", text: "Yes. ADUs can be rented, and California no longer requires the owner to live on the property — so an ADU can be added to a rental or investment property. Short-term rental rules vary by location, so check with your city or county to confirm whether your ADU can be used as a short-term rental." } },
    { "@type": "Question", name: "Will my ADU have its own address and utilities?", acceptedAnswer: { "@type": "Answer", text: "Typically yes. ADUs are usually assigned a separate address (important for emergency services), and they're metered separately for electrical service. We handle the utility coordination as part of your project." } },
    { "@type": "Question", name: "Why are people building ADUs?", acceptedAnswer: { "@type": "Answer", text: "The reasons vary — many of our clients build for family, creating space for an aging parent, an adult child, or a relative who needs to be close by. Others build for rental income or added property value. Whatever your reason, we design an ADU that fits your needs and your property." } },
  ],
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
