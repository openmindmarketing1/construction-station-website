import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ServiceHero from "@/components/ServiceHero";
import ProcessSteps from "@/components/ProcessSteps";
import FAQAccordion from "@/components/FAQAccordion";
import CtaSection from "@/components/CtaSection";
import JsonLd from "@/components/JsonLd";
import { CS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Commercial Construction in the Inland Empire | Construction Station",
  description:
    "Commercial construction, tenant improvements, office buildouts, retail construction, and ADA compliance for Inland Empire businesses. Licensed CA #1108879. Call 909-797-6333.",
  alternates: { canonical: "/services/commercial" },
};

const STEPS = [
  {
    number: "01",
    title: "Site Walk & Scope",
    description:
      "We walk the space with your team, review lease requirements, and produce a written scope before any contract is signed.",
  },
  {
    number: "02",
    title: "Permit-Set Drawings",
    description:
      "Our drafting team produces permit-ready architectural and MEP drawings coordinated with your designer or architect.",
  },
  {
    number: "03",
    title: "City Permits & Approvals",
    description:
      "We handle all permit submittals, plan check responses, and inspection scheduling — no chasing the city on your end.",
  },
  {
    number: "04",
    title: "Construction",
    description:
      "Our W-2 crew executes framing, electrical, plumbing, HVAC rough-in, drywall, finishes, and fixture installation on a published schedule.",
  },
  {
    number: "05",
    title: "Final Inspection & Turnover",
    description:
      "We obtain the Certificate of Occupancy, complete the punch list, and hand over a clean, move-in-ready space.",
  },
];

const FAQS = [
  {
    q: "How long does a commercial tenant improvement take?",
    a: "Timeline depends on scope and permit complexity. A cosmetic TI (flooring, paint, lighting) can finish in 2–4 weeks. A full buildout with new plumbing, HVAC, and electrical typically runs 8–16 weeks from permit approval. We provide a written milestone schedule before breaking ground.",
  },
  {
    q: "Do you work with both landlords and tenants?",
    a: "Yes. We work directly with tenants building out their space, landlords improving vacant suites, and property management companies maintaining their portfolios. We can also coordinate with your leasing agent on allowance documentation and landlord-approval submissions.",
  },
  {
    q: "What permits are required for a commercial renovation?",
    a: "Most commercial projects require building, electrical, plumbing, and mechanical permits. ADA upgrades may require a separate accessibility permit. We handle the entire permitting process — drawings, submittals, plan check responses, and inspections — under our contractor's license.",
  },
  {
    q: "Are you licensed for commercial work in California?",
    a: `Yes. Construction Station holds California Contractor's License ${CS.license}, which covers both residential and commercial construction. We are fully bonded and insured for commercial projects of all sizes.`,
  },
  {
    q: "Do you handle ADA compliance upgrades?",
    a: "Absolutely. We perform ADA path-of-travel assessments, accessible restroom conversions, parking lot accessibility upgrades, ramp construction, door hardware replacement, and signage — all to current California Building Code Title 24 standards.",
  },
  {
    q: "Can you work nights or weekends to minimize business disruption?",
    a: "Yes. For occupied buildings or businesses that cannot shut down, we offer phased construction and off-hours scheduling. We've completed numerous projects in occupied office buildings and retail centers with zero business interruption.",
  },
  {
    q: "What is your minimum commercial project size?",
    a: "We take on projects starting at $25,000. Most of our commercial work ranges from $50,000 for a suite refresh to $500,000+ for a full ground-up buildout. We'll give you a straight answer on whether your project is a fit after a 30-minute site walk.",
  },
  {
    q: "Do you offer design-build commercial services?",
    a: "Yes. We can deliver a full design-build package — space planning, permit drawings, engineering, and construction under one contract. This eliminates the coordination gap between architect and contractor and typically saves 10–15% on total project cost.",
  },
];

const COMMERCIAL_PHOTOS = [
  "/images/services/commercial/commercial-01.jpg",
  "/images/services/commercial/commercial-02.jpg",
  "/images/services/commercial/commercial-03.jpg",
  "/images/services/commercial/commercial-04.jpg",
  "/images/services/commercial/commercial-05.jpg",
];

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://constructionstation.com";

export default function CommercialPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Commercial Construction",
    provider: {
      "@type": "GeneralContractor",
      name: CS.name,
      telephone: CS.phone,
      url: SITE_URL,
      identifier: CS.license,
    },
    areaServed: { "@type": "Place", name: "Inland Empire, California" },
    description:
      "Full-service commercial construction — tenant improvements, office buildouts, retail construction, and ADA compliance. Licensed California contractor since 2008.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free commercial site walk and scope estimate",
    },
  };

  return (
    <>
      <JsonLd data={serviceSchema} />

      <ServiceHero
        eyebrow="Service · Commercial"
        title="Commercial Construction in the Inland Empire"
        italicWord="Inland Empire"
        subtitle="Tenant improvements, office buildouts, retail construction, and ADA compliance for businesses across San Bernardino and Riverside counties. The same crew and standards that define our residential work — applied to every commercial project."
      />

      {/* Trust signals bar */}
      <div className="bg-navy py-5">
        <div className="max-w-5xl mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { value: CS.license, label: "CA Licensed" },
              { value: "Bonded", label: "& Fully Insured" },
              { value: "Since 2008", label: "Commercial Experience" },
              { value: "500+", label: "Projects Completed" },
            ].map((item) => (
              <div key={item.label}>
                <div className="font-display text-gold text-xl md:text-2xl leading-tight">
                  {item.value}
                </div>
                <div className="text-white/50 text-[10px] uppercase tracking-[0.2em] mt-1">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main article */}
      <article className="bg-white py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-12 gap-6 mb-16 items-start">
            <div className="col-span-12 md:col-span-3">
              <div className="text-gold text-xs tracking-[0.3em] uppercase">
                Overview
              </div>
              <div className="hidden md:block w-12 h-px bg-gold mt-3" />
            </div>
            <div className="col-span-12 md:col-span-9 prose prose-lg max-w-none">
              <p className="text-navy/85 text-lg leading-[1.7] mb-6">
                Construction Station has been serving commercial clients across
                the Inland Empire since 2008. The same licensed crew, the same
                permitting rigor, and the same no-subcontractor-revolving-door
                approach we apply to residential work comes standard on every
                commercial project — from a 500 sq ft suite refresh in Redlands
                to a 10,000 sq ft retail buildout in Rancho Cucamonga.
              </p>
              <p className="text-navy/75 leading-[1.8] mb-5">
                Commercial construction demands a different discipline than
                residential. Deadlines tie directly to lease commencement dates,
                city permit timelines are less predictable, and mistakes that
                delay a Certificate of Occupancy carry real financial
                consequences. We&rsquo;ve built our commercial practice around
                eliminating those risks — with in-house permit expediting,
                published milestone schedules, and a single project manager
                accountable from groundbreak to CO.
              </p>
              <p className="text-navy/75 leading-[1.8] mb-5">
                We hold California Contractor&rsquo;s License{" "}
                <strong className="text-navy">{CS.license}</strong>, are fully
                bonded and insured, and carry the commercial general liability
                limits most landlords and property managers require. We&rsquo;re
                comfortable working within existing lease structures, landlord
                work letters, and tenant improvement allowance documentation.
              </p>
            </div>
          </div>

          {/* Photo gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-20">
            {COMMERCIAL_PHOTOS.map((src, i) => (
              <div
                key={src}
                className={`relative overflow-hidden ${
                  i === 0 ? "col-span-2 md:col-span-2 aspect-[16/9]" : "aspect-square"
                }`}
              >
                <Image
                  src={src}
                  alt={`Commercial construction project ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>

          {/* Tenant Improvements */}
          <div id="tenant-improvements" className="scroll-mt-24 mb-16">
            <div className="grid grid-cols-12 gap-6 items-start">
              <div className="col-span-12 md:col-span-3">
                <div className="text-gold text-xs tracking-[0.3em] uppercase">
                  01
                </div>
                <div className="font-display text-navy text-2xl mt-2 leading-tight">
                  Tenant Improvements
                </div>
                <div className="hidden md:block w-12 h-px bg-gold mt-3" />
              </div>
              <div className="col-span-12 md:col-span-9">
                <p className="text-navy/75 leading-[1.8] mb-4">
                  Tenant improvements — TIs in commercial real estate shorthand —
                  are the buildout of leased space to suit a specific occupant.
                  We execute TIs for office tenants, medical and dental practices,
                  fitness studios, restaurants, and specialty retail across San
                  Bernardino and Riverside counties.
                </p>
                <p className="text-navy/75 leading-[1.8] mb-4">
                  Our TI scope typically includes: demising wall framing, interior
                  partition layout, electrical panel upgrades and branch circuit
                  work, plumbing rough-in for break rooms and restrooms, HVAC
                  zoning and ductwork, suspended ceiling systems, flooring
                  (LVP, carpet tile, polished concrete), and all finish work
                  through final cleaning.
                </p>
                <p className="text-navy/75 leading-[1.8]">
                  We produce permit-ready architectural drawings in-house,
                  coordinate with structural and MEP engineers when required,
                  and manage all city plan check interactions. Most TI projects
                  in the Inland Empire reach permit approval within 3–6 weeks of
                  submittal — we track every plan check comment so there are no
                  surprises.
                </p>
              </div>
            </div>
          </div>

          {/* Office Buildouts & Renovations */}
          <div id="office-renovations" className="scroll-mt-24 mb-16">
            <div className="grid grid-cols-12 gap-6 items-start">
              <div className="col-span-12 md:col-span-3">
                <div className="text-gold text-xs tracking-[0.3em] uppercase">
                  02
                </div>
                <div className="font-display text-navy text-2xl mt-2 leading-tight">
                  Office Buildouts &amp; Renovations
                </div>
                <div className="hidden md:block w-12 h-px bg-gold mt-3" />
              </div>
              <div className="col-span-12 md:col-span-9">
                <p className="text-navy/75 leading-[1.8] mb-4">
                  A well-designed office communicates credibility before a single
                  word is spoken. We build and renovate professional offices for
                  law firms, financial services, insurance agencies, medical
                  groups, and corporate headquarters throughout the Inland Empire.
                </p>
                <p className="text-navy/75 leading-[1.8] mb-4">
                  Office buildout work includes: open-plan workstation layouts,
                  private office construction, executive suite finishes,
                  conference room millwork, integrated AV and data infrastructure,
                  specialty lighting, glass partition systems, and reception area
                  design. We also handle full office renovations — gutting and
                  rebuilding dated space while the business operates in a
                  phased construction sequence.
                </p>
                <p className="text-navy/75 leading-[1.8]">
                  For occupied renovations, we schedule noisy and disruptive
                  work during off-hours, maintain safe egress paths at all times,
                  and use temporary dust walls to keep active office areas clean
                  and functional throughout construction.
                </p>
              </div>
            </div>
          </div>

          {/* Commercial Buildouts */}
          <div id="buildouts" className="scroll-mt-24 mb-16">
            <div className="grid grid-cols-12 gap-6 items-start">
              <div className="col-span-12 md:col-span-3">
                <div className="text-gold text-xs tracking-[0.3em] uppercase">
                  03
                </div>
                <div className="font-display text-navy text-2xl mt-2 leading-tight">
                  Commercial Buildouts
                </div>
                <div className="hidden md:block w-12 h-px bg-gold mt-3" />
              </div>
              <div className="col-span-12 md:col-span-9">
                <p className="text-navy/75 leading-[1.8] mb-4">
                  Ground-up commercial buildouts — taking a shell or grey-shell
                  space to fully finished and occupiable — are the most complex
                  commercial projects we deliver. We&rsquo;ve completed buildouts
                  for restaurants, urgent care clinics, veterinary practices,
                  specialty retail, and industrial office suites across the region.
                </p>
                <p className="text-navy/75 leading-[1.8] mb-4">
                  A full buildout involves every trade: structural rough framing,
                  MEP systems (mechanical, electrical, plumbing), fire sprinkler
                  coordination, insulation, drywall, flooring, millwork,
                  storefront glazing, exterior signage blocking, restroom build-out,
                  and all finish work. We self-perform the majority of this scope
                  rather than cascading it to unvetted subcontractors.
                </p>
                <p className="text-navy/75 leading-[1.8]">
                  Before breaking ground, we provide a detailed construction
                  schedule with milestone dates tied to your lease commencement.
                  Our project managers track schedule daily and report deviations
                  before they become delays.
                </p>
              </div>
            </div>
          </div>

          {/* Retail */}
          <div id="retail" className="scroll-mt-24 mb-16">
            <div className="grid grid-cols-12 gap-6 items-start">
              <div className="col-span-12 md:col-span-3">
                <div className="text-gold text-xs tracking-[0.3em] uppercase">
                  04
                </div>
                <div className="font-display text-navy text-2xl mt-2 leading-tight">
                  Retail Space Construction
                </div>
                <div className="hidden md:block w-12 h-px bg-gold mt-3" />
              </div>
              <div className="col-span-12 md:col-span-9">
                <p className="text-navy/75 leading-[1.8] mb-4">
                  Retail construction requires precision on aesthetics and brand
                  standards alongside the structural and systems requirements of
                  any commercial build. We construct and renovate retail spaces
                  for local and regional retailers, franchise operators, and
                  national brands entering Inland Empire markets.
                </p>
                <p className="text-navy/75 leading-[1.8] mb-4">
                  Retail scope includes: storefront and entry systems, display
                  fixture blocking and backing, specialty lighting layouts,
                  POS infrastructure, fitting room construction, backroom
                  and stockroom buildout, break room and restroom facilities,
                  and exterior curb appeal improvements. We work from brand
                  standards documentation and prototype drawings, replicating
                  the experience across multiple locations if needed.
                </p>
                <p className="text-navy/75 leading-[1.8]">
                  We understand that retail construction has an immovable opening
                  date tied to marketing spend and lease obligations. Our
                  commercial team prioritizes schedule reliability above all
                  else for retail clients.
                </p>
              </div>
            </div>
          </div>

          {/* ADA Compliance */}
          <div id="ada-compliance" className="scroll-mt-24 mb-8">
            <div className="grid grid-cols-12 gap-6 items-start">
              <div className="col-span-12 md:col-span-3">
                <div className="text-gold text-xs tracking-[0.3em] uppercase">
                  05
                </div>
                <div className="font-display text-navy text-2xl mt-2 leading-tight">
                  ADA Compliance
                </div>
                <div className="hidden md:block w-12 h-px bg-gold mt-3" />
              </div>
              <div className="col-span-12 md:col-span-9">
                <p className="text-navy/75 leading-[1.8] mb-4">
                  California&rsquo;s access compliance requirements under
                  Title 24 and the ADA are among the most stringent in the
                  country — and non-compliance exposes property owners and
                  tenants to significant litigation risk. We perform ADA
                  assessments and remediation construction for commercial
                  properties throughout the Inland Empire.
                </p>
                <p className="text-navy/75 leading-[1.8] mb-4">
                  Our ADA scope covers: accessible parking stall striping and
                  van-accessible spaces, path-of-travel from parking to
                  entrance, accessible entry door hardware and thresholds,
                  restroom conversions (turning radius, grab bars, fixtures,
                  signage), service counter lowering, and interior route
                  clearances. We document all work with photographs and
                  as-built drawings for your compliance records.
                </p>
                <p className="text-navy/75 leading-[1.8]">
                  Triggered ADA upgrades — improvements required when you
                  pull a permit for other work — are part of our standard
                  permitting review. We identify the required path-of-travel
                  work upfront so there are no surprise scope additions after
                  construction starts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      <ProcessSteps steps={STEPS} />

      {/* Commercial trust section */}
      <section className="bg-cream py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-px bg-gold" />
              <span className="text-gold text-xs uppercase tracking-[0.4em]">
                Why Commercial Clients Choose Us
              </span>
              <span className="w-10 h-px bg-gold" />
            </div>
            <h2 className="font-display text-navy text-4xl md:text-5xl leading-tight">
              Licensed. Bonded. Insured.
              <br />
              <span className="italic text-gold">Accountable.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Single Point of Contact",
                body: "One project manager from permit submittal through Certificate of Occupancy. No passing blame between GC and subs.",
              },
              {
                title: "In-House Permit Drawings",
                body: "We produce permit-ready architectural drawings in-house, eliminating the gap between architect delivery and contractor execution.",
              },
              {
                title: `Licensed ${CS.license}`,
                body: "California Contractor's License covering both residential and commercial construction. Bonded and fully insured to commercial GL requirements.",
              },
              {
                title: "Published Schedules",
                body: "Every commercial project gets a written milestone schedule before groundbreak. We track it daily and report deviations before they become delays.",
              },
              {
                title: "No Rotating Subcontractors",
                body: "Our W-2 crew handles the majority of scope in-house. When specialty subs are needed, we use vetted relationships — not random low-bidders.",
              },
              {
                title: "Occupied-Space Experience",
                body: "We routinely build in occupied buildings with active businesses. Off-hours scheduling, dust control, and safe egress are standard practice.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white border border-navy/10 p-6"
              >
                <div className="w-8 h-px bg-gold mb-4" />
                <div className="font-display text-navy text-xl mb-3">
                  {item.title}
                </div>
                <p className="text-navy/65 text-sm leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion faqs={FAQS} />

      {/* Related services */}
      <section className="bg-cream py-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-gold text-xs tracking-[0.3em] uppercase mb-3 text-center">
            Residential Services
          </div>
          <div className="font-display text-navy text-3xl text-center mb-10">
            We also build homes
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[
              {
                href: "/services/kitchen-remodeling",
                name: "Kitchen Remodeling",
                desc: "Custom cabinetry, countertops, tile work",
              },
              {
                href: "/services/bathroom-remodeling",
                name: "Bathroom Remodeling",
                desc: "Walk-in showers, soaking tubs, heated floors",
              },
              {
                href: "/services/adus",
                name: "ADUs",
                desc: "Turnkey accessory dwelling units",
              },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="bg-white border border-navy/10 p-6 hover:border-gold transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-display text-navy text-xl">
                      {s.name}
                    </div>
                    <div className="text-navy/60 text-sm mt-1">{s.desc}</div>
                  </div>
                  <div className="text-gold group-hover:translate-x-1 transition-transform">
                    →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        heading="Let's walk your commercial space."
        subheading="Free site walk and scope estimate. No obligation — just a straight conversation about your project."
        showForm
      />
    </>
  );
}
