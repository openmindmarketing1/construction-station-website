import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ServiceHero from "@/components/ServiceHero";
import ProcessSteps from "@/components/ProcessSteps";
import FAQAccordion from "@/components/FAQAccordion";
import JsonLd from "@/components/JsonLd";
import { CS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Room Additions & Home Expansions | Construction Station",
  description:
    "Custom room additions across the Inland Empire — master suites, second-story builds, family room expansions, and garage conversions. Licensed contractor #1108879 since 2008. Call 909-797-6333.",
  alternates: { canonical: "/services/room-additions" },
};

const GALLERY = [
  { src: "/images/services/room-additions/room-addition-01.jpg", alt: "Two-story room addition in progress in the Inland Empire" },
  { src: "/images/services/room-additions/room-addition-02.jpg", alt: "Master suite addition with vaulted ceiling" },
  { src: "/images/services/room-additions/room-addition-03.jpg", alt: "Family room expansion connecting to existing home" },
  { src: "/images/services/room-additions/room-addition-04.jpg", alt: "Second story addition with matching exterior" },
  { src: "/images/services/room-additions/room-addition-05.jpg", alt: "Completed garage conversion with finished interior" },
];

const STEPS = [
  {
    number: "01",
    title: "Free Site Consultation",
    description: "We walk the property, measure existing structure, and discuss scope, setbacks, and what's realistic on your lot.",
  },
  {
    number: "02",
    title: "Design & 3D Renderings",
    description: "Architectural drawings, structural plans, and photoreal renderings before a single permit is pulled.",
  },
  {
    number: "03",
    title: "Permits & Engineering",
    description: "We submit to the city, coordinate structural engineering, and lock in the schedule before breaking ground.",
  },
  {
    number: "04",
    title: "Foundation to Finish",
    description: "Same Construction Station crew handles foundation, framing, MEP rough-in, drywall, and finish work — no subs.",
  },
  {
    number: "05",
    title: "Final Inspection & Warranty",
    description: "Final city inspection, certificate of occupancy where applicable, and two-year workmanship warranty.",
  },
];

const FAQS = [
  {
    q: "How long does a room addition take in the Inland Empire?",
    a: "A typical single-room ground-floor addition runs 12–16 weeks from permit pull to final inspection. Master suite additions average 16–20 weeks. Second-story additions take 5–7 months because of structural engineering, temporary roof protection, and additional inspections. We give you a written calendar before signing.",
  },
  {
    q: "Do I need permits for a room addition?",
    a: "Always. Any addition to your home's square footage requires a building permit, structural engineering, and inspections from the city or county (Yucaipa, Redlands, Loma Linda, Beaumont, Highland, and San Bernardino all enforce this). We handle every submittal, plan-check correction, and inspection — unpermitted square footage will torpedo a future home sale and can void homeowner's insurance.",
  },
  {
    q: "Can you match the existing exterior of my house?",
    a: "Yes — that's the whole point of a quality addition. We match stucco texture and color, roofing profile and tile blend, fascia and trim details, window styles, and paint. From the curb, a finished addition should be indistinguishable from the original build. We custom-mix paints and source matching roof tile and stucco texture profiles.",
  },
  {
    q: "What's the average cost of a room addition?",
    a: "Inland Empire room additions typically run $350–$550 per square foot for standard ground-floor work, and $450–$700 per square foot for second-story additions because of structural reinforcement and roof modification. Master suites with high-end finishes can push higher. Your free consultation ends with a transparent line-item estimate — no surprise upcharges.",
  },
  {
    q: "Can you do a garage conversion or ADU instead?",
    a: "Yes — garage conversions and detached ADUs are often the most cost-effective way to add livable square footage. California law (AB 68/881) has streamlined ADU approval, and a garage conversion can frequently bypass the typical setback and lot-coverage limits. Ask us about both during your consultation so we can compare costs and timelines side-by-side.",
  },
];

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://constructionstation.com";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Room Additions and Home Expansions",
  provider: {
    "@type": "GeneralContractor",
    name: CS.name,
    telephone: CS.phone,
    url: SITE_URL,
    identifier: CS.license,
  },
  areaServed: { "@type": "Place", name: "Inland Empire, California" },
  description:
    "Custom room additions — master suites, second-story builds, family room expansions, and garage conversions. Licensed contractor since 2008.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: CS.name,
  telephone: CS.phone,
  email: CS.email,
  url: `${SITE_URL}/services/room-additions`,
  image: `${SITE_URL}/images/services/room-additions/room-addition-01.jpg`,
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    addressRegion: "CA",
    addressCountry: "US",
    addressLocality: "Inland Empire",
  },
  areaServed: [
    "Yucaipa, CA",
    "Redlands, CA",
    "Loma Linda, CA",
    "Beaumont, CA",
    "Highland, CA",
    "San Bernardino, CA",
  ],
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

export default function RoomAdditionsPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={faqSchema} />

      <ServiceHero
        eyebrow="Service · Additions"
        title="Room Addition Contractors Serving the Inland Empire"
        italicWord="Inland Empire"
        subtitle="Expand your living space without moving. Master suites, second-story builds, family room expansions, and garage conversions matched seamlessly to your existing home."
      />

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
                Moving is expensive, exhausting, and often unnecessary. A
                well-designed room addition gives you the space you need
                without giving up your neighborhood, school district, or
                mortgage rate. We&rsquo;ve been adding rooms across the
                Inland Empire since 2008 — Yucaipa, Redlands, Loma Linda,
                Beaumont, Highland, and San Bernardino — and the same
                Construction Station crew handles foundation, framing,
                roofing, electrical, plumbing, drywall, and finish.
              </p>
              <p className="text-navy/75 leading-[1.8] mb-5">
                <strong className="text-navy">Master suite additions</strong>{" "}
                are our most-requested expansion. A primary bedroom with a
                walk-in closet, ensuite bath, and a sitting area typically
                runs 400–650 square feet. We design these to feel like a
                quiet retreat — vaulted ceilings, transom windows, exterior
                French doors to a private patio, and integrated lighting
                plans are all on the table.
              </p>
              <p className="text-navy/75 leading-[1.8] mb-5">
                <strong className="text-navy">Second-story additions</strong>{" "}
                are the highest-leverage way to add square footage when your
                lot is constrained. We bring in a structural engineer to
                verify foundation capacity, design new shear walls, and
                upgrade existing framing where needed. We also build a
                temporary protective roof over the existing home during
                construction so weather never becomes a problem.
              </p>
              <p className="text-navy/75 leading-[1.8] mb-5">
                <strong className="text-navy">Family room and great room expansions</strong>{" "}
                open up the heart of your home. We frequently combine an
                addition with removing a load-bearing wall in the existing
                house — engineered beams, post relocation, and seamless
                drywall transitions are all part of the scope. The
                finished space should read as one cohesive room, not a
                bolt-on.
              </p>
              <p className="text-navy/75 leading-[1.8] mb-5">
                <strong className="text-navy">Garage conversions</strong>{" "}
                turn underused square footage into a bedroom, home office,
                gym, or in-law suite. California has streamlined approval
                for many garage conversions to JADUs (junior accessory
                dwelling units), and we handle the permitting nuance for
                each jurisdiction. Insulation, egress windows, HVAC
                tie-ins, and proper floor leveling are the make-or-break
                details.
              </p>
              <p className="text-navy/75 leading-[1.8] mb-5">
                <strong className="text-navy">Matching the existing home</strong>{" "}
                is what separates a quality addition from a tacked-on box.
                We match stucco texture and color, roof tile blend and
                profile, fascia and trim, window grids, and paint sheen.
                From the curb the finished work should be invisible — like
                the addition was there from day one.
              </p>
              <p className="text-navy/75 leading-[1.8] mb-5">
                <strong className="text-navy">Permits, engineering, and inspections</strong>{" "}
                are entirely on us. Every Inland Empire jurisdiction has
                its own plan-check process, setback rules, lot-coverage
                limits, and fire-code requirements. We&rsquo;ve worked
                through them all and know which corrections each city
                tends to flag before we even submit.
              </p>
              <p className="text-navy/75 leading-[1.8]">
                Most importantly: <strong className="text-navy">one project
                manager, one written schedule, one warranty.</strong> With
                18 years and hundreds of completed projects across the
                Inland Empire, we&rsquo;ve built our reputation on showing
                up, hitting dates, and finishing what we start.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Gallery */}
      <section className="bg-cream py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-px bg-gold" />
              <span className="text-gold text-xs uppercase tracking-[0.4em]">
                Recent Additions
              </span>
              <span className="w-10 h-px bg-gold" />
            </div>
            <h2 className="font-display text-navy text-4xl md:text-5xl leading-[1]">
              Real projects, <span className="italic text-gold">real homes</span>.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {GALLERY.map((img, i) => (
              <div
                key={img.src}
                className={`relative overflow-hidden ${
                  i === 0 ? "md:col-span-2 md:row-span-2 aspect-[4/3]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes={i === 0 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps steps={STEPS} />
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
              href="/services/kitchen-remodeling"
              className="bg-white border border-navy/10 p-6 hover:border-gold transition-colors group"
            >
              <div className="font-display text-navy text-2xl">Kitchen Remodeling</div>
              <div className="text-navy/60 text-sm mt-1">
                Open up your floor plan
              </div>
            </Link>
            <Link
              href="/services/bathroom-remodeling"
              className="bg-white border border-navy/10 p-6 hover:border-gold transition-colors group"
            >
              <div className="font-display text-navy text-2xl">Bathroom Remodeling</div>
              <div className="text-navy/60 text-sm mt-1">
                Add an ensuite to your suite
              </div>
            </Link>
            <Link
              href="/services/outdoor-living"
              className="bg-white border border-navy/10 p-6 hover:border-gold transition-colors group"
            >
              <div className="font-display text-navy text-2xl">Outdoor Living</div>
              <div className="text-navy/60 text-sm mt-1">
                Extend the addition outside
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy texture-navy text-white py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-5 lg:px-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-px bg-gold" />
            <span className="text-gold text-xs uppercase tracking-[0.4em]">Ready to expand?</span>
            <span className="w-10 h-px bg-gold" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl leading-[1] mb-5">
            Add the room you&rsquo;ve been{" "}
            <span className="italic text-gold">drawing on napkins.</span>
          </h2>
          <p className="text-white/70 mb-10 text-base leading-relaxed max-w-xl mx-auto">
            Free in-home consultation across Yucaipa, Redlands, Loma Linda,
            Beaumont, Highland, and San Bernardino. We bring the renderings;
            you bring the wishlist.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={CS.phoneHref}
              className="inline-flex items-center justify-center gap-3 bg-gold text-navy font-body font-semibold px-8 py-4 text-base hover:bg-yellow-400 transition-colors tracking-wide"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Call {CS.phone}
            </a>
            <Link
              href="/contact"
              className="border border-white/40 text-white px-8 py-4 text-base hover:border-gold hover:text-gold transition-colors text-center font-body"
            >
              Request a Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
