import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ServiceHero from "@/components/ServiceHero";
import ProcessSteps from "@/components/ProcessSteps";
import FAQAccordion from "@/components/FAQAccordion";
import JsonLd from "@/components/JsonLd";
import { CS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Window & Door Replacement | Construction Station",
  description:
    "Energy-efficient window replacement and door installation across San Bernardino County — dual-pane windows, sliding glass doors, French doors, and entry doors. Licensed contractor #1108879 since 2008. Call 909-797-6333.",
  alternates: { canonical: "/services/windows-and-doors" },
};

const GALLERY = [
  { src: "/images/services/windows-doors/windows-01.jpg", alt: "Energy-efficient dual-pane window installation in the Inland Empire" },
  { src: "/images/services/windows-doors/windows-02.jpg", alt: "Sliding glass patio door installation" },
  { src: "/images/services/windows-doors/windows-03.jpg", alt: "Custom French door entry replacement" },
  { src: "/images/services/windows-doors/windows-04.jpg", alt: "Modern front entry door installation" },
  { src: "/images/services/windows-doors/windows-05.jpg", alt: "Black-framed picture window with matching trim" },
];

const STEPS = [
  {
    number: "01",
    title: "Free In-Home Measure",
    description: "Exact measurements, frame condition assessment, and product recommendations for every opening.",
  },
  {
    number: "02",
    title: "Product & Glass Selection",
    description: "Frame material, glass package, grids, hardware, and finish — picked to match your home, climate, and HOA.",
  },
  {
    number: "03",
    title: "Custom Order & Permits",
    description: "Manufacturer-direct ordering with locked-in pricing. We pull required permits before delivery.",
  },
  {
    number: "04",
    title: "Professional Installation",
    description: "Old units removed, openings inspected for damage, flashing done correctly, and trim restored to match.",
  },
  {
    number: "05",
    title: "Final Walkthrough & Warranty",
    description: "Operation test on every unit, weather seal verification, and lifetime install warranty in writing.",
  },
];

const FAQS = [
  {
    q: "How much do replacement windows cost in the Inland Empire?",
    a: "Vinyl dual-pane replacement windows typically run $650–$1,400 per opening installed, depending on size, glass package, and grids. Fiberglass and clad-wood units run $1,200–$2,800. Sliding glass patio doors run $2,400–$5,500 installed. Your free measure ends with a written, line-item quote — no high-pressure sales presentation, no fake discounts.",
  },
  {
    q: "Do new windows really lower energy bills?",
    a: "Yes, especially in San Bernardino County. Upgrading from single-pane or 1990s aluminum frames to modern Low-E dual-pane vinyl or fiberglass typically cuts heating and cooling costs 15–30% and dramatically reduces hot-spot rooms on west-facing walls. Look for U-factor below 0.30 and SHGC below 0.25 for the Inland Empire climate.",
  },
  {
    q: "What brands of windows and doors do you install?",
    a: "We install Milgard, Anlin, Pella, Marvin, Andersen, and Simonton — chosen per project based on price point, climate performance, and aesthetic. For entry doors we work with Therma-Tru, Plastpro, Masonite, and custom shops. We&rsquo;re not locked into a single brand, so we recommend what actually fits your home and budget.",
  },
  {
    q: "Do I need a permit to replace windows?",
    a: "California requires permits for any window or door replacement that changes the opening size, structural framing, or egress configuration. Like-for-like replacements in the same rough opening sometimes don&rsquo;t require permits, but San Bernardino County jurisdictions vary. We verify with each city (Redlands, Yucaipa, Loma Linda, Highland, San Bernardino) and pull permits whenever required — unpermitted alterations can cause issues at sale.",
  },
  {
    q: "Can you do retrofit installs or do they need to be full-frame replacements?",
    a: "Both — and we recommend the right one per opening. Retrofit (insert) installs go faster and cost less, but only work if your existing frames are square and water-tight. Full-frame (new construction) replacements are required when frames are rotted, the home has stucco damage, or you&rsquo;re changing the opening size. We inspect each frame during the measure and tell you straight which approach makes sense.",
  },
];

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://constructionstation.com";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Window and Door Replacement",
  provider: {
    "@type": "GeneralContractor",
    name: CS.name,
    telephone: CS.phone,
    url: SITE_URL,
    identifier: CS.license,
  },
  areaServed: { "@type": "Place", name: "San Bernardino County, California" },
  description:
    "Energy-efficient window replacement, door installation, sliding glass doors, French doors, and entry doors. Licensed contractor since 2008.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: CS.name,
  telephone: CS.phone,
  email: CS.email,
  url: `${SITE_URL}/services/windows-and-doors`,
  image: `${SITE_URL}/images/services/windows-doors/windows-01.jpg`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressRegion: "CA",
    addressCountry: "US",
    addressLocality: "Inland Empire",
  },
  areaServed: [
    "San Bernardino, CA",
    "Redlands, CA",
    "Yucaipa, CA",
    "Loma Linda, CA",
    "Highland, CA",
    "Beaumont, CA",
    "Rancho Cucamonga, CA",
    "Riverside, CA",
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

export default function WindowsAndDoorsPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={faqSchema} />

      <ServiceHero
        eyebrow="Service · Windows & Doors"
        title="Window & Door Installation Experts in the Inland Empire"
        italicWord="Inland Empire"
        subtitle="Energy-efficient dual-pane windows, sliding glass doors, French doors, and entry doors installed correctly the first time. Licensed contractor serving San Bernardino County since 2008."
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
                Windows and doors are not a commodity. They&rsquo;re a
                weatherproofing system, a security system, and the single
                largest visual element of your home&rsquo;s exterior. A bad
                install — leaky flashing, out-of-square frames, the wrong
                glass package for the Inland Empire&rsquo;s 110-degree
                summers — turns a $20,000 upgrade into a 20-year headache.
                We&rsquo;ve been replacing windows and doors across San
                Bernardino County since 2008 and we do it like our name is
                on the building. Because it is.
              </p>
              <p className="text-navy/75 leading-[1.8] mb-5">
                <strong className="text-navy">Energy-efficient dual-pane windows</strong>{" "}
                are the highest-leverage upgrade most Inland Empire homes
                can make. Modern Low-E coatings cut solar heat gain by
                70–80% compared to single-pane or 1990s aluminum frames.
                Translated: cooler bedrooms in July, lower HVAC bills, and
                drapes that don&rsquo;t bleach out. We install vinyl,
                fiberglass, and clad-wood — sized to your budget and HOA.
              </p>
              <p className="text-navy/75 leading-[1.8] mb-5">
                <strong className="text-navy">Sliding glass patio doors</strong>{" "}
                open up the back of your home to your outdoor living space.
                Standard 6-foot openings can become 8-, 10-, or 12-foot
                multi-panel sliders with the right header engineering.
                We&rsquo;ve installed everything from a basic Milgard
                2-panel slider to multi-panel telescoping doors and
                disappearing pocket sliders.
              </p>
              <p className="text-navy/75 leading-[1.8] mb-5">
                <strong className="text-navy">French doors and atrium doors</strong>{" "}
                bring light and a clear architectural statement to any
                opening. We install in-swing, out-swing, and center-hinged
                configurations with full weatherstripping, multi-point
                locking, and the correct sill pan flashing — the detail
                most installers skip and most water intrusion starts at.
              </p>
              <p className="text-navy/75 leading-[1.8] mb-5">
                <strong className="text-navy">Entry doors</strong> set the
                tone the second someone walks up. We install fiberglass,
                steel, and solid-wood entry doors with smart-lock
                pre-wiring, multi-point locking hardware, sidelights, and
                custom transoms. Therma-Tru, Plastpro, Masonite, and custom
                wood shops are all in our regular rotation.
              </p>
              <p className="text-navy/75 leading-[1.8] mb-5">
                <strong className="text-navy">Installation done correctly.</strong>{" "}
                We pull old units, inspect rough openings for rot or
                termite damage (Inland Empire homes have plenty of both),
                replace damaged framing, install proper sill pans and
                flashing, foam the perimeter with low-expansion foam, set
                units plumb and level, and restore interior and exterior
                trim to match the original profile. Stucco patching,
                texture matching, and caulking are part of the work — not
                an upcharge.
              </p>
              <p className="text-navy/75 leading-[1.8] mb-5">
                <strong className="text-navy">Permits and code compliance</strong>{" "}
                are entirely on us. California Title 24 specifies maximum
                U-factor and SHGC values; egress windows have minimum size
                rules; tempered glass is required adjacent to doors and
                tubs. We know the requirements for each jurisdiction in
                San Bernardino County and pull permits where required.
              </p>
              <p className="text-navy/75 leading-[1.8]">
                Every installation comes with a lifetime workmanship
                warranty on installation labor and manufacturer warranty
                pass-through on the units themselves — Milgard, Anlin,
                Pella, Marvin, Andersen, and Simonton are all backed by
                their respective glass-breakage and frame warranties.
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
                Recent Installations
              </span>
              <span className="w-10 h-px bg-gold" />
            </div>
            <h2 className="font-display text-navy text-4xl md:text-5xl leading-[1]">
              Built for{" "}
              <span className="italic text-gold">desert sun</span>.
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
                New windows, new layout
              </div>
            </Link>
            <Link
              href="/services/room-additions"
              className="bg-white border border-navy/10 p-6 hover:border-gold transition-colors group"
            >
              <div className="font-display text-navy text-2xl">Room Additions</div>
              <div className="text-navy/60 text-sm mt-1">
                Expand square footage
              </div>
            </Link>
            <Link
              href="/services/outdoor-living"
              className="bg-white border border-navy/10 p-6 hover:border-gold transition-colors group"
            >
              <div className="font-display text-navy text-2xl">Outdoor Living</div>
              <div className="text-navy/60 text-sm mt-1">
                Slide into the backyard
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
            <span className="text-gold text-xs uppercase tracking-[0.4em]">Free in-home measure</span>
            <span className="w-10 h-px bg-gold" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl leading-[1] mb-5">
            Tired of paying to{" "}
            <span className="italic text-gold">cool the outside?</span>
          </h2>
          <p className="text-white/70 mb-10 text-base leading-relaxed max-w-xl mx-auto">
            Free in-home measure across San Bernardino County. We bring
            sample frames and glass packages; you bring the energy bill
            you&rsquo;d like to cut.
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
