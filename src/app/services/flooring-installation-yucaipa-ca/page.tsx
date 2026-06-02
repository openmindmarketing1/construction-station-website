import type { Metadata } from "next";
import ServiceHero from "@/components/ServiceHero";
import TrustBar from "@/components/TrustBar";
import ProcessSteps from "@/components/ProcessSteps";
import FAQAccordion from "@/components/FAQAccordion";
import FlooringQuickForm from "@/components/FlooringQuickForm";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import JsonLd from "@/components/JsonLd";
import { CS } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    absolute:
      "Flooring Installation Yucaipa CA | Construction Station",
  },
  description:
    "Expert flooring installation in Yucaipa CA — hardwood, LVP, laminate, carpet, and tile. Free estimates. Licensed CSLB #1108879. Serving Redlands, Beaumont, Loma Linda & the Inland Empire.",
  alternates: {
    canonical: "/services/flooring-installation-yucaipa-ca",
  },
};

const STEPS = [
  {
    number: "01",
    title: "Free In-Home Estimate",
    description:
      "We measure your space, review your lifestyle needs, and recommend the best flooring products for your budget.",
  },
  {
    number: "02",
    title: "Material Selection",
    description:
      "Choose from hundreds of hardwood, LVP, laminate, carpet, and tile samples — we bring options to you.",
  },
  {
    number: "03",
    title: "Subfloor Preparation",
    description:
      "We remove old flooring, level the subfloor, and install any required moisture barriers before a single plank is laid.",
  },
  {
    number: "04",
    title: "Expert Installation",
    description:
      "Our own crew installs to manufacturer spec — no revolving subs, no shortcuts, no excuses.",
  },
  {
    number: "05",
    title: "Trim, Transitions & Walkthrough",
    description:
      "Baseboards, thresholds, and transitions finished to perfection. Final walkthrough before invoice.",
  },
];

const FAQS = [
  {
    q: "How long does flooring installation take?",
    a: "Most single-room flooring projects complete in 1–2 days. Whole-home re-floors (1,200–2,000 sq ft) typically take 3–5 days including subfloor prep. Tile installations run longer due to mortar cure time — usually 5–7 days for a kitchen or bathroom. We give you a written timeline before starting.",
  },
  {
    q: "What flooring works best in kitchens and bathrooms?",
    a: "Porcelain or ceramic tile is the traditional choice for wet areas — it's fully waterproof and extremely durable. Luxury vinyl plank (LVP) is a strong alternative: 100% waterproof, comfortable underfoot, and available in realistic wood and stone looks. We don't recommend solid hardwood or standard laminate in kitchens or bathrooms due to moisture sensitivity.",
  },
  {
    q: "Do you install hardwood flooring in Yucaipa?",
    a: "Yes — we install both solid hardwood and engineered hardwood throughout the Inland Empire including Yucaipa. Engineered hardwood is often the better choice for Southern California homes due to its improved dimensional stability in our dry climate. We also offer sand-and-finish services to refinish existing hardwood floors.",
  },
  {
    q: "How much does LVP flooring installation cost in the Inland Empire?",
    a: "LVP flooring installation in the Inland Empire typically runs $4–$8 per square foot installed (materials and labor), depending on product quality, room complexity, and subfloor condition. A 500 sq ft living room might cost $2,000–$4,000 all-in. We provide exact pricing in your free written estimate.",
  },
  {
    q: "Do you remove old flooring before installing new?",
    a: "Yes. Old flooring removal, disposal, and subfloor prep are included in our installation process. We don't install over compromised subfloors — we level, patch, and repair before laying any new material so your investment lasts.",
  },
  {
    q: "What areas do you serve for flooring installation?",
    a: "We serve Yucaipa, Redlands, Beaumont, Loma Linda, Banning, Calimesa, San Bernardino, Riverside, Rancho Cucamonga, Ontario, Fontana, Upland, and surrounding Inland Empire cities. Call us to confirm availability at your address.",
  },
];

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://constructionstation.com";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/services/flooring-installation-yucaipa-ca`,
  name: CS.name,
  description:
    "Professional flooring installation company serving Yucaipa and the Inland Empire. Hardwood, luxury vinyl plank, laminate, carpet, and tile installation. Licensed CSLB #1108879.",
  telephone: CS.phone,
  url: SITE_URL,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Yucaipa",
    addressRegion: "CA",
    addressCountry: "US",
  },
  areaServed: [
    "Yucaipa, CA",
    "Redlands, CA",
    "Beaumont, CA",
    "Loma Linda, CA",
    "Banning, CA",
    "San Bernardino, CA",
    "Riverside, CA",
    "Inland Empire, CA",
  ],
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "16:00",
    },
  ],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "license",
    name: `California Contractors State License Board (CSLB) ${CS.license}`,
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Flooring Installation",
  name: "Flooring Installation Yucaipa CA",
  provider: {
    "@type": "GeneralContractor",
    name: CS.name,
    telephone: CS.phone,
    url: SITE_URL,
    identifier: CS.license,
  },
  areaServed: { "@type": "Place", name: "Inland Empire, California" },
  description:
    "Full-service flooring installation — hardwood, LVP, laminate, carpet, and tile. Includes subfloor prep, old flooring removal, and trim installation.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Flooring Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hardwood Flooring Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Luxury Vinyl Plank (LVP) Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Laminate Flooring Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Carpet Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tile Flooring Installation" } },
    ],
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free in-home flooring estimate",
  },
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

export default function FlooringInstallationPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      {/* 1. Hero */}
      <ServiceHero
        eyebrow="Service · Flooring"
        title="Flooring Installation in Yucaipa CA"
        italicWord="Yucaipa CA"
        subtitle="Hardwood, luxury vinyl plank, laminate, carpet, and tile — installed right the first time by Construction Station's own licensed crew. Serving the Inland Empire since 2008. CSLB #1108879."
      />

      {/* 2. Trust bar */}
      <TrustBar />

      {/* 3. Overview */}
      <article className="bg-white py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-12 gap-6 mb-10 items-start">
            <div className="col-span-12 md:col-span-3">
              <div className="text-gold text-xs tracking-[0.3em] uppercase">
                Overview
              </div>
              <div className="hidden md:block w-12 h-px bg-gold mt-3" />
            </div>
            <div className="col-span-12 md:col-span-9 prose prose-lg max-w-none">
              <p className="text-navy/85 text-lg leading-[1.7] mb-6">
                The right flooring transforms a house. The wrong installation
                ruins it. Construction Station has been installing floors across
                Yucaipa and the Inland Empire since 2008 — and we treat every
                square foot with the same care we bring to a $150,000 kitchen
                remodel.
              </p>
              <p className="text-navy/75 leading-[1.8] mb-5">
                We&rsquo;re a full-service flooring contractor, not a big-box
                install crew. That means we handle everything: removing your
                existing floors, diagnosing and repairing the subfloor,
                installing your chosen material, and finishing with trim,
                baseboards, and transitions that look like they were always
                there. One call, one crew, one warranty.
              </p>

              <h2 className="font-display text-navy text-3xl mt-10 mb-4">
                Flooring Types We Install
              </h2>

              <h3 className="font-display text-navy text-xl mt-6 mb-2">
                Hardwood Flooring
              </h3>
              <p className="text-navy/75 leading-[1.8] mb-4">
                Nothing matches the warmth and character of real wood. We
                install both{" "}
                <strong className="text-navy">solid hardwood</strong> and{" "}
                <strong className="text-navy">engineered hardwood</strong>{" "}
                throughout Yucaipa, Redlands, and the surrounding Inland Empire.
                Engineered hardwood is often the smarter choice for Southern
                California homes — its cross-ply construction handles the
                region&rsquo;s dry climate and temperature swings better than
                solid hardwood, with the same authentic wood surface you can
                sand and refinish over time. Species options include oak, maple,
                hickory, walnut, and more. We also offer{" "}
                <strong className="text-navy">sand-and-finish services</strong>{" "}
                to restore existing hardwood floors to like-new condition.
              </p>

              <h3 className="font-display text-navy text-xl mt-6 mb-2">
                Luxury Vinyl Plank (LVP)
              </h3>
              <p className="text-navy/75 leading-[1.8] mb-4">
                LVP has become the top flooring choice for Inland Empire
                homeowners — and with good reason. It&rsquo;s{" "}
                <strong className="text-navy">100% waterproof</strong>,
                scratch-resistant, and available in hundreds of realistic wood
                and stone looks. LVP installs over most existing subfloors
                without glue or nails, which means faster installation and
                easier future replacement. It&rsquo;s pet-friendly,
                kid-friendly, and stands up to the high foot traffic and UV
                exposure of Southern California living. Brands we install
                include COREtec, Shaw, Pergo, and Karndean.
              </p>

              <h3 className="font-display text-navy text-xl mt-6 mb-2">
                Laminate Flooring
              </h3>
              <p className="text-navy/75 leading-[1.8] mb-4">
                Laminate delivers a hardwood look at a lower price point.
                Modern laminate products feature{" "}
                <strong className="text-navy">
                  textured embossed-in-register surfaces
                </strong>{" "}
                that closely mimic real wood grain, with AC4 or AC5 wear
                ratings that hold up in high-traffic living rooms, hallways,
                and home offices. We install water-resistant laminate that
                handles the occasional spill, though it&rsquo;s best avoided
                in full wet areas like bathrooms.
              </p>

              <h3 className="font-display text-navy text-xl mt-6 mb-2">
                Carpet
              </h3>
              <p className="text-navy/75 leading-[1.8] mb-4">
                Carpet remains the preferred choice for bedrooms, media rooms,
                and bonus rooms where comfort and acoustic performance
                matter most. We install{" "}
                <strong className="text-navy">
                  stain-resistant nylon and polyester carpets
                </strong>{" "}
                in plush, Berber, frieze, and pattern styles. Our installers
                power-stretch every installation — no wrinkles, no bubbles,
                no callbacks. Paired with a quality pad, carpet adds years of
                warmth and comfort underfoot.
              </p>

              <h3 className="font-display text-navy text-xl mt-6 mb-2">
                Tile Flooring (Porcelain, Ceramic &amp; Natural Stone)
              </h3>
              <p className="text-navy/75 leading-[1.8] mb-5">
                For kitchens, bathrooms, entryways, and outdoor-to-indoor
                transitions, tile is unmatched in durability and design
                flexibility. We install{" "}
                <strong className="text-navy">
                  large-format porcelain tile
                </strong>{" "}
                (up to 24&times;48&rdquo;), classic ceramic, subway tile, and
                natural stone including travertine, slate, and marble. Our
                tile crews are trained in both{" "}
                <strong className="text-navy">
                  rectified and non-rectified settings
                </strong>
                , pattern layouts (herringbone, basketweave, Versailles), and
                the precision leveling systems required for large-format
                installations without lippage.
              </p>

              <h2 className="font-display text-navy text-3xl mt-10 mb-4">
                Why Choose Construction Station for Flooring?
              </h2>
              <p className="text-navy/75 leading-[1.8] mb-4">
                Licensed under CSLB{" "}
                <strong className="text-navy">#1108879</strong> and carrying
                full liability and workers&rsquo; comp insurance, Construction
                Station brings the same licensed accountability to your flooring
                project that we bring to a full home remodel.
              </p>
              <p className="text-navy/75 leading-[1.8] mb-4">
                Our flooring crews are our employees — not day-labor subs
                sourced from a staffing agency. They&rsquo;re the same people
                who floor our kitchen and bathroom remodels, which means they
                know how to work around cabinetry, plumbing stub-outs,
                transitions between rooms, and other real-world challenges that
                trip up single-trade flooring shops.
              </p>
              <p className="text-navy/75 leading-[1.8] mb-4">
                We serve Yucaipa, Redlands, Beaumont, Loma Linda, Banning,
                Calimesa, San Bernardino, Riverside, Rancho Cucamonga, Ontario,
                and surrounding Inland Empire communities. All projects start
                with a{" "}
                <strong className="text-navy">free in-home estimate</strong> —
                no obligation, no sales pressure, just an honest assessment and
                written price within 5 business days.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* 4. Process */}
      <ProcessSteps steps={STEPS} />

      {/* 5. Project Gallery */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-px bg-gold" />
              <span className="text-gold text-xs uppercase tracking-[0.4em]">
                Our Work
              </span>
              <span className="w-10 h-px bg-gold" />
            </div>
            <h2 className="font-display text-navy text-4xl md:text-5xl lg:text-6xl leading-[1]">
              Recent flooring{" "}
              <span className="italic text-gold">projects</span>.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                type: "Luxury Vinyl Plank",
                location: "Yucaipa, CA",
                year: "2025",
                sqft: "1,400 sq ft",
                detail:
                  "Whole-home LVP re-floor replacing 25-year-old carpet and tile. Herringbone entry transition, custom stair nosings.",
              },
              {
                type: "Engineered Hardwood",
                location: "Redlands, CA",
                year: "2024",
                sqft: "900 sq ft",
                detail:
                  "Wide-plank European oak in main living areas. Sand-and-finish matched to existing hardwood in bedrooms.",
              },
              {
                type: "Large-Format Porcelain Tile",
                location: "Loma Linda, CA",
                year: "2024",
                sqft: "600 sq ft",
                detail:
                  "24×48\" rectified porcelain in kitchen and great room. Level-5 subfloor prep, minimal-grout-joint installation.",
              },
            ].map((p) => (
              <div
                key={p.location}
                className="bg-cream border border-navy/10 p-8 hover:border-gold transition-colors"
              >
                <div className="text-gold text-xs tracking-[0.3em] uppercase mb-2">
                  {p.type}
                </div>
                <div className="font-display text-navy text-2xl mb-1">
                  {p.location}
                </div>
                <div className="text-navy/50 text-sm mb-4">
                  {p.year} · {p.sqft}
                </div>
                <p className="text-navy/70 text-sm leading-relaxed">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <FAQAccordion faqs={FAQS} />

      {/* 7. Calendly */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-px bg-gold" />
              <span className="text-gold text-xs uppercase tracking-[0.4em]">
                Free Consultation
              </span>
              <span className="w-10 h-px bg-gold" />
            </div>
            <h2 className="font-display text-navy text-4xl md:text-5xl leading-[1] mb-4">
              Ready to talk?{" "}
              <span className="italic text-gold">Pick a time.</span>
            </h2>
            <p className="text-navy/65 max-w-lg mx-auto text-sm leading-relaxed">
              Book a free in-home flooring consultation directly on our calendar.
              We&rsquo;ll measure your space, bring samples, and follow up with a
              written estimate within 5 business days.
            </p>
          </div>
          <CalendlyEmbed />
        </div>
      </section>

      {/* 8. Call CTA */}
      <section className="bg-navy texture-navy text-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-5 lg:px-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-px bg-gold" />
            <span className="text-gold text-xs uppercase tracking-[0.4em]">
              Ready Now?
            </span>
            <span className="w-10 h-px bg-gold" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl leading-[1] mb-4">
            Call us directly.
          </h2>
          <p className="text-white/65 mb-8 text-sm leading-relaxed">
            Speak with a flooring specialist right now. We answer during business
            hours and return all missed calls within 30 minutes. Licensed CSLB
            #1108879.
          </p>
          <a
            href={CS.phoneHref}
            className="inline-flex items-center gap-3 bg-gold text-navy font-body font-semibold px-10 py-5 text-xl hover:bg-yellow-400 transition-colors tracking-wide"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {CS.phone}
          </a>
        </div>
      </section>

      {/* 9. Free estimate form */}
      <section className="bg-cream py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-px bg-gold" />
                <span className="text-gold text-xs uppercase tracking-[0.4em]">
                  Free Estimate
                </span>
              </div>
              <h2 className="font-display text-navy text-4xl md:text-5xl leading-[1.05] mb-5">
                Prefer us to{" "}
                <span className="italic text-gold">call you?</span>
              </h2>
              <p className="text-navy/70 leading-relaxed mb-6">
                Leave your name and number and we&rsquo;ll reach out within 2
                business hours to discuss your flooring project — no obligation,
                no high-pressure sales call.
              </p>
              <div className="space-y-3 text-sm text-navy/70">
                <div className="flex items-center gap-3">
                  <span className="w-5 h-5 bg-gold/20 border border-gold flex items-center justify-center text-gold text-xs font-bold shrink-0">
                    ✓
                  </span>
                  Response within 2 business hours
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-5 h-5 bg-gold/20 border border-gold flex items-center justify-center text-gold text-xs font-bold shrink-0">
                    ✓
                  </span>
                  Free in-home measurement included
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-5 h-5 bg-gold/20 border border-gold flex items-center justify-center text-gold text-xs font-bold shrink-0">
                    ✓
                  </span>
                  Written estimate within 5 business days
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-5 h-5 bg-gold/20 border border-gold flex items-center justify-center text-gold text-xs font-bold shrink-0">
                    ✓
                  </span>
                  Licensed CSLB #1108879 · No obligation, ever
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <FlooringQuickForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
