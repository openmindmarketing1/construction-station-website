import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ServiceHero from "@/components/ServiceHero";
import ProcessSteps from "@/components/ProcessSteps";
import FAQAccordion from "@/components/FAQAccordion";
import JsonLd from "@/components/JsonLd";
import { CS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Outdoor Living & Patio Covers | Construction Station",
  description:
    "Custom patio covers, alumawood covers, outdoor kitchens, concrete patios, and pergolas across the Inland Empire. Licensed contractor #1108879 since 2008. Call 909-797-6333.",
  alternates: { canonical: "/services/outdoor-living" },
};

const GALLERY = [
  { src: "/images/services/outdoor-living/outdoor-01.jpg", alt: "Custom outdoor living space with covered patio" },
  { src: "/images/services/patio-covers/patio-01.jpg", alt: "Alumawood patio cover installation in the Inland Empire" },
  { src: "/images/services/outdoor-living/outdoor-02.jpg", alt: "Outdoor kitchen with built-in BBQ and seating" },
  { src: "/images/services/patio-covers/patio-02.jpg", alt: "Wood pergola over backyard patio" },
  { src: "/images/services/outdoor-living/outdoor-03.jpg", alt: "Outdoor fireplace and lounge area" },
  { src: "/images/services/patio-covers/patio-03.jpg", alt: "Solid-roof patio cover with recessed lighting" },
  { src: "/images/services/outdoor-living/outdoor-04.jpg", alt: "Concrete patio with fire feature" },
  { src: "/images/services/patio-covers/patio-04.jpg", alt: "Attached patio cover matching home architecture" },
  { src: "/images/services/outdoor-living/outdoor-05.jpg", alt: "Outdoor living space at twilight with ambient lighting" },
];

const STEPS = [
  {
    number: "01",
    title: "Backyard Walkthrough",
    description: "We walk your lot, discuss how you actually use the space, and identify sun, shade, and view priorities.",
  },
  {
    number: "02",
    title: "Design & 3D Renderings",
    description: "Layout, materials, lighting plan, and photoreal renderings so you see the space before we pour a footing.",
  },
  {
    number: "03",
    title: "Permits & Engineering",
    description: "We handle structural calcs, attachment to the house, electrical permits, and HOA submittals where needed.",
  },
  {
    number: "04",
    title: "Foundation to Finish",
    description: "Same crew handles concrete, framing, roofing, electrical, plumbing, and finish — start to keys.",
  },
  {
    number: "05",
    title: "Final Walkthrough & Warranty",
    description: "Final inspection, lighting and outlet test, and two-year workmanship warranty on every component.",
  },
];

const FAQS = [
  {
    q: "How much does a patio cover cost in the Inland Empire?",
    a: "Alumawood patio covers typically run $25–$45 per square foot installed, depending on attached vs freestanding, post style, and ceiling fan/lighting integration. Solid wood and steel covers run $45–$90 per square foot. A full outdoor living build with patio cover, concrete pad, built-in BBQ, and lighting typically lands between $35,000 and $120,000. Free consultation ends with a transparent line-item quote.",
  },
  {
    q: "Alumawood vs wood vs solid roof — which is best for the Inland Empire?",
    a: "All three work — they just solve different problems. Alumawood is low-maintenance, never rots or warps, and handles 110-degree summers without fading. Wood (cedar, redwood, Doug fir) looks warmer and accepts stain but requires re-staining every 3–5 years. Solid-roof covers (insulated panel or stick-framed with shingle or tile to match the house) give you true shade, allow ceiling-mounted fans and recessed lighting, and add real square footage feel. We help you compare side-by-side during your consultation.",
  },
  {
    q: "Can you build an outdoor kitchen with gas, water, and electrical?",
    a: "Yes — and we run all three correctly. Gas lines tie into the meter with proper sizing for your BBQ load (Wolf, DCS, Blaze, Lynx, and Twin Eagles are all in our regular rotation). Water and drain lines for sinks are permitted and freeze-protected. Dedicated 20-amp circuits and GFCI outlets for refrigeration, lighting, and accessory appliances are part of the scope. Stone veneer, stucco, and stainless cabinetry options all available.",
  },
  {
    q: "Do I need permits for a patio cover or pergola?",
    a: "Almost always. Inland Empire jurisdictions require permits for any structure attached to the house, and most freestanding covers over 120 square feet also require permits. Electrical, gas, and water work always require permits regardless of size. We pull every required permit, handle plan check, and coordinate inspections. Unpermitted patio covers are a major snag at home sale and a frequent cause of insurance claim denials.",
  },
  {
    q: "How long does an outdoor living build take?",
    a: "A standalone alumawood patio cover runs 1–2 weeks from permit pull. A concrete patio with cover runs 3–4 weeks (concrete cure time is the bottleneck). A full outdoor living build with cover, concrete, built-in BBQ, fire feature, and lighting typically runs 6–10 weeks. We give you a written calendar before signing and update it weekly.",
  },
];

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://constructionstation.com";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Outdoor Living and Patio Covers",
  provider: {
    "@type": "GeneralContractor",
    name: CS.name,
    telephone: CS.phone,
    url: SITE_URL,
    identifier: CS.license,
  },
  areaServed: { "@type": "Place", name: "Inland Empire, California" },
  description:
    "Custom patio covers, alumawood patio covers, outdoor kitchens, concrete patios, pergolas, and outdoor living spaces. Licensed contractor since 2008.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: CS.name,
  telephone: CS.phone,
  email: CS.email,
  url: `${SITE_URL}/services/outdoor-living`,
  image: `${SITE_URL}/images/services/outdoor-living/outdoor-01.jpg`,
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
    "San Bernardino, CA",
    "Highland, CA",
    "Riverside, CA",
    "Rancho Cucamonga, CA",
    "Beaumont, CA",
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

export default function OutdoorLivingPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={faqSchema} />

      <ServiceHero
        eyebrow="Service · Outdoor Living"
        title="Outdoor Living Spaces & Patio Covers in the Inland Empire"
        italicWord="Inland Empire"
        subtitle="Custom patio covers, alumawood covers, outdoor kitchens, concrete patios, and pergolas. Built for Inland Empire weather and the way you actually live."
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
                The Inland Empire gets 270+ sunny days a year — and 60+ of
                them are over 95 degrees. Your backyard is either a usable
                second living room or it&rsquo;s an oven you avoid. The
                difference is shade, airflow, and design. We&rsquo;ve been
                building patio covers and outdoor living spaces across
                Yucaipa, Redlands, Loma Linda, San Bernardino, Highland,
                and Riverside since 2008, and we build for the climate we
                actually live in — not a coastal climate, not a Phoenix
                climate, ours.
              </p>
              <p className="text-navy/75 leading-[1.8] mb-5">
                <strong className="text-navy">Alumawood patio covers</strong>{" "}
                are our most-installed product for one reason: they last.
                Powder-coated extruded aluminum with a baked-on woodgrain
                finish handles 110-degree heat without warping, never
                rots, never needs re-staining, and carries lifetime
                manufacturer warranties. Lattice, solid-roof, and
                insulated-panel options are all available — picked based
                on whether you want filtered shade, full shade, or true
                indoor-style room feel.
              </p>
              <p className="text-navy/75 leading-[1.8] mb-5">
                <strong className="text-navy">Custom wood and steel covers</strong>{" "}
                are the right call when matching architectural style
                matters more than maintenance. Cedar and redwood pergolas
                with stained beams, exposed rafter tails, and copper
                accents look stunning against Spanish-style and craftsman
                homes. We engineer the structure to local snow and wind
                loads and seal everything correctly the first time.
              </p>
              <p className="text-navy/75 leading-[1.8] mb-5">
                <strong className="text-navy">Outdoor kitchens</strong>{" "}
                are where the Inland Empire lifestyle lives. We build with
                stainless cabinetry, stone veneer, or stucco finishes to
                match the house. Wolf, DCS, Blaze, Lynx, and Twin Eagles
                BBQs are all in our regular rotation. Side burners, pizza
                ovens, kegerators, ice makers, and outdoor refrigeration
                tie into properly sized gas, water, and electrical
                infrastructure — permitted and inspected.
              </p>
              <p className="text-navy/75 leading-[1.8] mb-5">
                <strong className="text-navy">Concrete patios</strong>{" "}
                are the foundation of any outdoor build. We pour
                broom-finished, stamped, exposed-aggregate, and acid-stained
                concrete with proper expansion joints and control joints
                that won&rsquo;t crack in the desert heat-cool cycle.
                Decorative scoring patterns, integral color, and saw-cut
                grids tie the patio visually to the home.
              </p>
              <p className="text-navy/75 leading-[1.8] mb-5">
                <strong className="text-navy">Pergolas</strong> — both
                attached and freestanding — define an outdoor room without
                fully enclosing it. Adjustable louvered pergolas (motorized
                aluminum systems from StruXure, Equinox, and similar) give
                you on-demand shade or open sky with a remote. Traditional
                wood pergolas with climbing vines and overhead string
                lights are timeless and far cheaper.
              </p>
              <p className="text-navy/75 leading-[1.8] mb-5">
                <strong className="text-navy">Fire features and water features</strong>{" "}
                extend usable season from March through November. Gas fire
                pits, linear fire tables, and freestanding outdoor
                fireplaces are all permitted and tied into your existing
                gas line. Water features — from simple pondless fountains
                to architectural water walls — are sealed correctly the
                first time.
              </p>
              <p className="text-navy/75 leading-[1.8] mb-5">
                <strong className="text-navy">Lighting and electrical</strong>{" "}
                are designed in from day one. Layered lighting plans
                (overhead recessed, fan-mounted, sconce, low-voltage
                landscape, and string) come on programmable circuits.
                Dedicated 20-amp outlets for BBQs, refrigeration, TVs, and
                outdoor heaters are part of every plan.
              </p>
              <p className="text-navy/75 leading-[1.8]">
                Most importantly: <strong className="text-navy">one project
                manager, one written schedule, one warranty.</strong>{" "}
                Whether you&rsquo;re adding a simple alumawood cover to
                shade the back slider or building a full outdoor living
                suite with cover, kitchen, fire feature, and lighting, we
                bring the same crew, same standards, and same warranty.
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
                Recent Outdoor Builds
              </span>
              <span className="w-10 h-px bg-gold" />
            </div>
            <h2 className="font-display text-navy text-4xl md:text-5xl leading-[1]">
              Backyards that{" "}
              <span className="italic text-gold">earn their keep</span>.
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
              href="/services/room-additions"
              className="bg-white border border-navy/10 p-6 hover:border-gold transition-colors group"
            >
              <div className="font-display text-navy text-2xl">Room Additions</div>
              <div className="text-navy/60 text-sm mt-1">
                Bring the outside in
              </div>
            </Link>
            <Link
              href="/services/windows-and-doors"
              className="bg-white border border-navy/10 p-6 hover:border-gold transition-colors group"
            >
              <div className="font-display text-navy text-2xl">Windows & Doors</div>
              <div className="text-navy/60 text-sm mt-1">
                Sliders to the new patio
              </div>
            </Link>
            <Link
              href="/services/kitchen-remodeling"
              className="bg-white border border-navy/10 p-6 hover:border-gold transition-colors group"
            >
              <div className="font-display text-navy text-2xl">Kitchen Remodeling</div>
              <div className="text-navy/60 text-sm mt-1">
                Indoor-outdoor flow
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
            <span className="text-gold text-xs uppercase tracking-[0.4em]">Reclaim your backyard</span>
            <span className="w-10 h-px bg-gold" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl leading-[1] mb-5">
            Build a backyard you&rsquo;ll{" "}
            <span className="italic text-gold">actually use.</span>
          </h2>
          <p className="text-white/70 mb-10 text-base leading-relaxed max-w-xl mx-auto">
            Free in-home consultation across the Inland Empire. We bring
            material samples and a tape measure; you bring the wishlist
            and a cold drink.
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
