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
    "Tenant improvements, restaurant & retail buildouts, commercial flooring, and office renovations for Inland Empire businesses. Licensed CA #1108879. Call 909-797-6333.",
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
      "Our W-2 crew executes framing, electrical, plumbing, HVAC rough-in, drywall, finishes, and flooring on a published schedule.",
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
    q: "What types of commercial projects do you handle?",
    a: "We handle the full range of commercial interior construction: tenant improvements (TIs), restaurant and retail buildouts, office renovations, commercial flooring installations, and ADA compliance upgrades. We work for tenants, landlords, property managers, franchisees, and owner-operators across San Bernardino and Riverside counties. Project sizes range from a $30,000 suite refresh to $500,000+ full buildouts.",
  },
  {
    q: "Do you do tenant improvements?",
    a: "Yes — TIs are a core part of our commercial business. We execute tenant improvements for office tenants, medical and dental practices, fitness studios, salons, urgent care clinics, and specialty retail. Our scope covers everything from demising walls and MEP rough-ins to suspended ceilings, flooring, millwork, and final finishes. We produce permit-ready drawings in-house and handle all city submittals, plan check responses, and inspections.",
  },
  {
    q: "Can you build out a restaurant space?",
    a: "Absolutely. Restaurant construction is one of our specialties. We handle grease interceptor installation, Type I hood rough-ins, fire suppression systems, walk-in cooler/freezer blocking, commercial kitchen MEP rough-ins, tile work rated for food service environments, bar construction, and dining room finishes. We understand that restaurant opening dates are tied to marketing spend and lease obligations — we build schedules around your opening date and protect them.",
  },
  {
    q: "Do you handle commercial flooring?",
    a: "Yes. We install the full range of commercial flooring systems: polished and stained concrete, large-format porcelain tile, luxury vinyl tile (LVT) and plank, carpet tile, rubber flooring for gyms and healthcare, epoxy and urethane coatings for industrial and commercial kitchens, and hardwood. We also handle subfloor prep, moisture mitigation, and transitions between flooring types — all to commercial specification standards.",
  },
  {
    q: "Are you licensed for commercial work in California?",
    a: `Yes. Construction Station holds California Contractor's License ${CS.license}, which covers both residential and commercial construction statewide. We carry commercial general liability insurance at the limits most landlords and property managers require, and we are fully bonded. We can provide certificates of insurance and additional insured endorsements for your landlord or property management company.`,
  },
  {
    q: "How long does a commercial tenant improvement take?",
    a: "Timeline depends on scope and permit complexity. A cosmetic TI — flooring, paint, lighting — can finish in 2–4 weeks. A full buildout with new plumbing, HVAC, and electrical typically runs 8–16 weeks from permit approval. We provide a written milestone schedule before breaking ground and track it daily.",
  },
  {
    q: "Can you work nights or weekends to minimize business disruption?",
    a: "Yes. For occupied buildings and businesses that can't shut down, we offer phased construction and off-hours scheduling. We've completed projects in occupied office buildings, active retail centers, and operating restaurants with zero business interruption. Temporary dust walls, daily cleanup, and maintained egress paths are standard on every occupied-space project.",
  },
  {
    q: "Do you handle ADA compliance upgrades?",
    a: "Yes. We perform path-of-travel assessments and all required ADA remediation: accessible parking striping, entry door hardware and threshold corrections, accessible restroom conversions, grab bars, service counter lowering, and interior route clearances. Triggered ADA upgrades — improvements required when you pull a permit for other work — are identified in our permitting review so there are no surprise scope additions mid-project.",
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
      "Full-service commercial construction — tenant improvements, restaurant & retail buildouts, commercial flooring, office renovations, and ADA compliance. Licensed CA contractor since 2008.",
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
        subtitle="Tenant improvements, restaurant & retail buildouts, commercial flooring, and office renovations for businesses across San Bernardino and Riverside counties. Licensed CA #1108879 · Bonded & Insured."
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

          {/* Overview */}
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
                permitting discipline, and the no-subcontractor-revolving-door
                approach we apply to residential work comes standard on every
                commercial project — from a 500 sq ft suite refresh in Redlands
                to a 12,000 sq ft restaurant buildout in Rancho Cucamonga.
              </p>
              <p className="text-navy/75 leading-[1.8] mb-5">
                Commercial construction demands a different discipline than
                residential. Deadlines tie directly to lease commencement dates,
                permit timelines are less predictable, and a delayed Certificate
                of Occupancy carries real financial consequences for your
                business. We&rsquo;ve built our commercial practice around
                eliminating those risks — with in-house permit drawings,
                published milestone schedules, and a single project manager
                accountable from groundbreak to CO.
              </p>
              <p className="text-navy/75 leading-[1.8]">
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
                  i === 0
                    ? "col-span-2 md:col-span-2 aspect-[16/9]"
                    : "aspect-square"
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

          {/* 01 — Tenant Improvements / TI Buildouts */}
          <div id="tenant-improvements" className="scroll-mt-24 mb-16">
            <div className="grid grid-cols-12 gap-6 items-start">
              <div className="col-span-12 md:col-span-3">
                <div className="text-gold text-xs tracking-[0.3em] uppercase">01</div>
                <div className="font-display text-navy text-2xl mt-2 leading-tight">
                  Tenant Improvements<br />& TI Buildouts
                </div>
                <div className="hidden md:block w-12 h-px bg-gold mt-3" />
              </div>
              <div className="col-span-12 md:col-span-9">
                <p className="text-navy/75 leading-[1.8] mb-4">
                  Tenant improvements — TIs in commercial real estate shorthand
                  — are the buildout of leased space to suit a specific
                  occupant. We execute TIs for office tenants, medical and
                  dental practices, fitness studios, salons, urgent care
                  clinics, and specialty retail across San Bernardino and
                  Riverside counties. Whether your landlord is providing a
                  bare shell, a vanilla box, or warm grey shell, we scope and
                  build from wherever the space starts.
                </p>
                <p className="text-navy/75 leading-[1.8] mb-4">
                  Our TI scope typically includes: demising wall framing,
                  interior partition layout, electrical panel upgrades and
                  branch circuit work, plumbing rough-in for break rooms and
                  restrooms, HVAC zoning and ductwork, suspended ceiling
                  systems, flooring (LVT, carpet tile, polished concrete), and
                  all finish work through final cleaning. We coordinate directly
                  with the landlord&rsquo;s property manager on building
                  standards, shared system connections, and move-in logistics.
                </p>
                <p className="text-navy/75 leading-[1.8] mb-4">
                  For medical and dental TIs, we have experience with the
                  specific requirements of healthcare environments: plumbing
                  rough-ins for dental operatories and sterilization rooms,
                  medical gas blocking and support structures, infection
                  control during construction, and finishes that meet
                  healthcare hygiene standards. We&rsquo;ve built out dental
                  offices, chiropractic clinics, physical therapy suites, and
                  urgent care centers across the Inland Empire.
                </p>
                <p className="text-navy/75 leading-[1.8]">
                  We produce permit-ready architectural drawings in-house,
                  coordinate with structural and MEP engineers when required,
                  and manage all city plan check interactions. Most TI projects
                  in Inland Empire jurisdictions reach permit approval within
                  3–6 weeks of submittal. We track every plan check comment in
                  real time so there are no surprises at your lease
                  commencement date.
                </p>
              </div>
            </div>
          </div>

          {/* 02 — Restaurant & Retail Construction */}
          <div id="restaurant-retail" className="scroll-mt-24 mb-16">
            <div className="grid grid-cols-12 gap-6 items-start">
              <div className="col-span-12 md:col-span-3">
                <div className="text-gold text-xs tracking-[0.3em] uppercase">02</div>
                <div className="font-display text-navy text-2xl mt-2 leading-tight">
                  Restaurant &amp; Retail Construction
                </div>
                <div className="hidden md:block w-12 h-px bg-gold mt-3" />
              </div>
              <div className="col-span-12 md:col-span-9">
                <p className="text-navy/75 leading-[1.8] mb-4">
                  Restaurant and retail construction are the most schedule-
                  sensitive commercial projects we build — opening dates are
                  tied to marketing spend, franchise obligations, and lease
                  commencement. We understand what&rsquo;s at stake and build
                  our project schedules backward from your opening day. Our
                  commercial team has completed restaurant buildouts ranging
                  from fast-casual quick-service concepts to full-service
                  dining rooms and bar programs throughout the Inland Empire.
                </p>
                <p className="text-navy/75 leading-[1.8] mb-4">
                  Restaurant construction scope includes: grease interceptor
                  installation and sanitary sewer tie-in, Type I commercial
                  hood rough-in and fire suppression system coordination,
                  walk-in cooler and freezer blocking and electrical, commercial
                  kitchen MEP rough-ins (gas, 3-phase electrical, floor drains,
                  hand sinks), food service-grade tile flooring with proper
                  slope and coved bases, bar construction including plumbing
                  and undercounter equipment rough-ins, and dining room and
                  restroom finishes to health department and building code
                  requirements.
                </p>
                <p className="text-navy/75 leading-[1.8] mb-4">
                  For retail, we construct storefront systems, display fixture
                  blocking and backing, specialty lighting layouts, POS
                  infrastructure, fitting rooms, backroom and stockroom
                  buildouts, and all front-of-house finishes. We work from
                  brand standard documentation and prototype drawings for
                  franchise operators, replicating the concept across multiple
                  Inland Empire locations when needed.
                </p>
                <p className="text-navy/75 leading-[1.8]">
                  Health department coordination is part of our standard
                  restaurant buildout process. We prepare the kitchen layout
                  documentation required for health department pre-approval,
                  schedule the necessary inspections, and deliver a facility
                  that passes its health inspection on the first attempt. For
                  existing restaurant renovations, we plan and sequence the
                  work to minimize or eliminate downtime for your operation.
                </p>
              </div>
            </div>
          </div>

          {/* 03 — Commercial Flooring */}
          <div id="commercial-flooring" className="scroll-mt-24 mb-16">
            <div className="grid grid-cols-12 gap-6 items-start">
              <div className="col-span-12 md:col-span-3">
                <div className="text-gold text-xs tracking-[0.3em] uppercase">03</div>
                <div className="font-display text-navy text-2xl mt-2 leading-tight">
                  Commercial Flooring
                </div>
                <div className="hidden md:block w-12 h-px bg-gold mt-3" />
              </div>
              <div className="col-span-12 md:col-span-9">
                <p className="text-navy/75 leading-[1.8] mb-4">
                  Commercial flooring is one of the highest-impact elements of
                  any business environment — it affects first impressions,
                  employee productivity, maintenance costs, and acoustic
                  comfort. We install the full range of commercial flooring
                  systems for offices, retail spaces, restaurants, healthcare
                  facilities, gyms, and industrial environments across the
                  Inland Empire. Unlike residential flooring work, commercial
                  installations require attention to load ratings, slip
                  resistance ratings, seamless transitions across large spans,
                  and compliance with ADA surface requirements.
                </p>
                <p className="text-navy/75 leading-[1.8] mb-4">
                  Our commercial flooring systems include: polished and
                  decorative concrete (grind-and-seal, densified, stained,
                  and full mechanical polish to any specified sheen level),
                  large-format porcelain and ceramic tile for retail, restaurant,
                  and lobby environments, luxury vinyl tile (LVT) and luxury
                  vinyl plank (LVP) including glue-down and floating systems
                  for commercial-grade use, carpet tile for open-plan offices
                  and hospitality, rubber flooring for gyms, weight rooms, and
                  healthcare, and epoxy and urethane resin systems for
                  commercial kitchens, warehouses, and food service environments.
                </p>
                <p className="text-navy/75 leading-[1.8] mb-4">
                  Subfloor preparation is where commercial flooring installations
                  succeed or fail. We perform self-leveling underlayment pours,
                  moisture vapor barrier installation, concrete grinding and
                  patching, and plywood subfloor replacement as needed before
                  any finish flooring goes down. Our flatness tolerances meet
                  manufacturer warranty requirements for every flooring type
                  we install.
                </p>
                <p className="text-navy/75 leading-[1.8]">
                  For occupied commercial spaces, we schedule flooring work
                  in phases or sections to keep your business operating during
                  the installation. We use commercial-grade adhesives and
                  coatings with low-VOC options for occupied environments,
                  and we coordinate with your operations team on curing and
                  traffic timelines before returning areas to use.
                </p>
              </div>
            </div>
          </div>

          {/* 04 — Office Renovations */}
          <div id="office-renovations" className="scroll-mt-24 mb-16">
            <div className="grid grid-cols-12 gap-6 items-start">
              <div className="col-span-12 md:col-span-3">
                <div className="text-gold text-xs tracking-[0.3em] uppercase">04</div>
                <div className="font-display text-navy text-2xl mt-2 leading-tight">
                  Office Renovations
                </div>
                <div className="hidden md:block w-12 h-px bg-gold mt-3" />
              </div>
              <div className="col-span-12 md:col-span-9">
                <p className="text-navy/75 leading-[1.8] mb-4">
                  A well-built office communicates credibility before a single
                  word is spoken. We build and renovate professional offices for
                  law firms, financial advisors, insurance agencies, real estate
                  brokerages, medical groups, and corporate headquarters
                  throughout the Inland Empire. Whether you&rsquo;re moving
                  into a new suite and need a full buildout, or refreshing an
                  existing space to attract and retain employees in a post-
                  pandemic hybrid environment, we deliver offices that function
                  as well as they look.
                </p>
                <p className="text-navy/75 leading-[1.8] mb-4">
                  Office renovation scope includes: open-plan workstation
                  layouts with power and data infrastructure, private office
                  and conference room construction, executive suite finishes,
                  custom millwork and built-in cabinetry for reception and
                  credenzas, glass partition systems and frameless glass
                  doors, integrated AV rough-ins and display mounting
                  structures, specialty lighting (layered ambient, task, and
                  accent systems), break room and kitchenette buildout, and
                  accessible restroom upgrades. We handle full gut renovations
                  — taking dated office space down to studs and rebuilding
                  completely — as well as targeted refreshes: new flooring,
                  paint, lighting, and millwork in an occupied suite.
                </p>
                <p className="text-navy/75 leading-[1.8] mb-4">
                  For occupied renovations, we work in phases, schedule
                  disruptive work during evenings and weekends, and maintain
                  functional access to all active areas throughout
                  construction. Temporary dust walls with negative air
                  pressure and daily cleanup are standard practice on every
                  occupied office project.
                </p>
                <p className="text-navy/75 leading-[1.8]">
                  We also handle office furniture decommission and
                  reinstallation coordination — working with your furniture
                  dealer to sequence the construction and furniture scopes
                  so your team moves back into a fully operational office
                  on day one, not a construction site with furniture stacked
                  in the hallway.
                </p>
              </div>
            </div>
          </div>

          {/* 05 — ADA Compliance */}
          <div id="ada-compliance" className="scroll-mt-24 mb-8">
            <div className="grid grid-cols-12 gap-6 items-start">
              <div className="col-span-12 md:col-span-3">
                <div className="text-gold text-xs tracking-[0.3em] uppercase">05</div>
                <div className="font-display text-navy text-2xl mt-2 leading-tight">
                  ADA Compliance
                </div>
                <div className="hidden md:block w-12 h-px bg-gold mt-3" />
              </div>
              <div className="col-span-12 md:col-span-9">
                <p className="text-navy/75 leading-[1.8] mb-4">
                  California&rsquo;s access compliance requirements under
                  Title 24 and the federal ADA are among the most stringent
                  in the country — and non-compliance exposes property owners
                  and business tenants to significant litigation risk from
                  serial ADA plaintiffs who specifically target Inland Empire
                  commercial properties. A proactive ADA assessment and
                  remediation program is far less expensive than defending
                  a demand letter. We perform assessments and all required
                  remediation construction for commercial properties
                  throughout San Bernardino and Riverside counties.
                </p>
                <p className="text-navy/75 leading-[1.8] mb-4">
                  Our ADA scope covers: accessible parking stall striping
                  and van-accessible spaces with proper signage, path-of-
                  travel from parking to entrance including curb ramp
                  construction and slope corrections, accessible entry door
                  hardware and threshold corrections, restroom conversions
                  to meet turning radius, grab bar, fixture height, and
                  signage requirements, service counter lowering, and
                  interior route clearance corrections. We document all work
                  with photographs and as-built drawings for your compliance
                  records — documentation that is critical evidence if
                  you ever face an access complaint.
                </p>
                <p className="text-navy/75 leading-[1.8]">
                  Triggered ADA upgrades — path-of-travel improvements
                  required by California law when you pull a permit for
                  any other alteration — are identified in our permitting
                  review before construction starts, with a cost estimate
                  included in your project budget. We never surface surprise
                  ADA scope mid-project. If you&rsquo;re planning a TI,
                  remodel, or any permitted commercial work, ask us to
                  include a path-of-travel review in your site walk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      <ProcessSteps steps={STEPS} />

      {/* Why choose us */}
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
              <div key={item.title} className="bg-white border border-navy/10 p-6">
                <div className="w-8 h-px bg-gold mb-4" />
                <div className="font-display text-navy text-xl mb-3">{item.title}</div>
                <p className="text-navy/65 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion faqs={FAQS} />

      {/* Related residential services */}
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
                    <div className="font-display text-navy text-xl">{s.name}</div>
                    <div className="text-navy/60 text-sm mt-1">{s.desc}</div>
                  </div>
                  <div className="text-gold group-hover:translate-x-1 transition-transform">→</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        heading="Let's walk your commercial space."
        subheading="Free site walk and scope estimate. No obligation — just a straight conversation about your project and timeline."
        showForm
      />
    </>
  );
}
