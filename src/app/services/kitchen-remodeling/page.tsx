import type { Metadata } from "next";
import Link from "next/link";
import ServiceHero from "@/components/ServiceHero";
import ServiceGallery from "@/components/ServiceGallery";
import TrustBar from "@/components/TrustBar";
import ProcessSteps from "@/components/ProcessSteps";
import FAQAccordion from "@/components/FAQAccordion";
import LeadMagnetCard from "@/components/LeadMagnetCard";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import KitchenQuickForm from "@/components/KitchenQuickForm";
import ServiceCityLinksStrip from "@/components/ServiceCityLinksStrip";
import JsonLd from "@/components/JsonLd";
import { CS } from "@/lib/constants";

export const metadata: Metadata = {
  // `absolute` bypasses the root layout's "%s | Construction Station" template
  // so the brand isn't appended twice.
  title: {
    absolute:
      "Kitchen Remodeler Yucaipa CA | Free Estimates | Licensed & Insured | Construction Station",
  },
  description:
    "Top-rated kitchen remodeler in Yucaipa CA. Custom kitchen remodels, free design consultation. CSLB Licensed #1108879. Call (909) 797-6333.",
  alternates: { canonical: "/services/kitchen-remodeling" },
};

const GALLERY = [
  { src: "https://www.openmindmarketing.ai/images/kitchen/kitchen-hero-main.jpg", alt: "Kitchen remodel completed by Construction Station — Inland Empire" },
  { src: "https://ihvgrybmtngekmfjpxnz.supabase.co/storage/v1/object/public/user-assets/business-1/Kitchen%20Images/v3/kitchen-modern-v3.jpg", alt: "Modern kitchen remodel with quartz countertops and shaker cabinets" },
  { src: "https://ihvgrybmtngekmfjpxnz.supabase.co/storage/v1/object/public/user-assets/business-1/Kitchen%20Images/v3/kitchen-luxury-v3.jpg", alt: "Luxury kitchen remodel with custom cabinetry and stone counters" },
  { src: "https://ihvgrybmtngekmfjpxnz.supabase.co/storage/v1/object/public/user-assets/business-1/Kitchen%20Images/v3/kitchen-open-concept-v3.jpg", alt: "Open concept kitchen transformation with large island" },
  { src: "https://ihvgrybmtngekmfjpxnz.supabase.co/storage/v1/object/public/user-assets/business-1/Kitchen%20Images/v3/kitchen-transformation-v3.jpg", alt: "Full kitchen transformation in the Inland Empire" },
  { src: "https://ihvgrybmtngekmfjpxnz.supabase.co/storage/v1/object/public/user-assets/1/Design%20Renderings/1779330560547-Gerson_Kitchen_3__1_.jpg", alt: "3D kitchen design rendering by Construction Station" },
];

const STEPS = [
  {
    number: "01",
    title: "Free Design Consultation",
    description: "60-minute in-home walkthrough. Normally $299 — free for new clients.",
  },
  {
    number: "02",
    title: "3D Design Rendering",
    description: "Photoreal renderings before a single cabinet is ordered.",
  },
  {
    number: "03",
    title: "Permits & Materials",
    description: "We pull every permit and lock material pricing before demo.",
  },
  {
    number: "04",
    title: "Expert Installation",
    description: "Our W-2 crew. No revolving subs. Site protected daily.",
  },
  {
    number: "05",
    title: "Walkthrough & Touch-Ups",
    description: "Punch list completed before final invoice. Two-year workmanship warranty.",
  },
];

const FAQS = [
  {
    q: "How much does a kitchen remodel cost in the Inland Empire?",
    a: "Kitchen remodel costs in the Inland Empire range from $35,000–$60,000 for a mid-grade refresh (new cabinets, countertops, flooring, and appliances without structural changes), $60,000–$100,000 for a full remodel with semi-custom cabinetry and stone countertops, and $100,000–$150,000+ for a luxury remodel with custom-built cabinetry, high-end appliances, and structural changes such as opening walls. The biggest cost drivers are cabinet quality (stock vs. semi-custom vs. fully custom), whether you're moving plumbing or gas lines, countertop material, and appliance tier. Construction Station provides a transparent, line-item written estimate after your free in-home design consultation — no vague 'starting at' pricing.",
  },
  {
    q: "How long does a kitchen remodel take?",
    a: "Most full kitchen remodels with Construction Station take 4–8 weeks from demo to final walkthrough. A cosmetic refresh — new cabinet doors, countertops, and appliances without moving plumbing or electrical — can finish in 3–4 weeks. Full gut remodels with custom cabinetry (4–8 week manufacturing lead time), layout changes, and new flooring typically run 8–12 weeks total. We provide a written project schedule before you sign anything, with each phase and its expected start and finish date.",
  },
  {
    q: "What is the kitchen remodel process?",
    a: "Our process: (1) Free design consultation — in-home walkthrough to measure, discuss layout, and review your wish list; (2) 3D photorealistic rendering of the finished kitchen before any orders are placed; (3) Material selection — cabinet, countertop, tile, and flooring samples; (4) Permitting — we pull any required permits; (5) Demolition — existing cabinets, countertops, flooring, and fixtures removed; (6) Rough work — plumbing, electrical, or structural modifications; (7) Cabinet installation; (8) Countertop templating and installation; (9) Tile and backsplash; (10) Flooring; (11) Appliance installation; (12) Final walkthrough and punch list. One crew, one warranty, one point of contact from design through keys.",
  },
  {
    q: "Do I need permits for a kitchen remodel?",
    a: "It depends on scope. A cosmetic remodel — replacing cabinets in the same location, new countertops, tile, and appliances — typically does not require permits. If you're moving plumbing (relocating the sink, adding a gas line), adding dedicated electrical circuits, or making structural changes (removing walls, adding a beam), permits are required. Construction Station pulls all required permits as part of your project and schedules all inspections. We'll tell you up front which elements require permits and handle the process on your behalf.",
  },
  {
    q: "Should I remodel my kitchen or just replace the cabinets?",
    a: "If your cabinet boxes are solid and the layout works, cabinet refacing or door replacement can refresh the look for 40–60% of the cost of new cabinets. If the layout is inefficient, the boxes are failing, or you want to change the footprint, a full remodel is the better investment. Cabinet refacing typically runs $8,000–$20,000; a full kitchen remodel with new cabinets starts around $35,000. The right answer depends on cabinet condition, how long you plan to stay, and what's actually bothering you about the kitchen. We give you an honest assessment during the free consultation — no pressure to sell more than you need.",
  },
  {
    q: "What are the most popular kitchen layouts?",
    a: "The most popular layouts in Inland Empire homes: L-shape (efficient use of corner space, works well in open-concept homes), U-shape (maximum storage and counter space, ideal for serious cooks), galley (efficient for narrower kitchens with high traffic flow), and island or peninsula (adds prep space and casual seating, works in most open-concept layouts). Our designer will assess your existing footprint, traffic patterns, and family use to recommend the optimal configuration. Sometimes a minor reconfiguration — moving a doorway or removing a non-load-bearing wall — dramatically improves function without a complete gut.",
  },
  {
    q: "Can I stay in my home during a kitchen remodel?",
    a: "Yes — most clients do. You'll temporarily lose access to the kitchen itself for 4–8 weeks. Many families set up a temporary kitchen with a microwave, electric skillet, mini-fridge, and coffee maker in the dining room or garage. We install construction-grade barriers to contain dust and protect adjacent rooms, clean the site daily, and schedule deliveries to minimize driveway disruption. Families with young children or special dietary needs should budget for restaurant and grocery delivery spending during the active phase.",
  },
  {
    q: "What countertop materials do you recommend?",
    a: "Quartz (engineered stone) is our most popular recommendation — non-porous (no sealing required), extremely durable, and available in hundreds of colors. We install Caesarstone, Cambria, and Silestone regularly. Natural granite adds unique character and holds up well with periodic sealing. Quartzite offers marble-like aesthetics with better hardness. Marble is beautiful but porous and prone to etching from acids — best in lower-traffic areas or for clients who embrace natural patina. Modern laminate countertops work well for budget-conscious remodels. We walk every natural stone slab in person before fabrication.",
  },
  {
    q: "How do I choose kitchen cabinets?",
    a: "Start with door style — shaker is the most popular and timeless, flat-panel is contemporary, raised-panel is traditional. Then consider face-frame vs. frameless construction, material (plywood box vs. MDF, solid wood vs. thermofoil doors), and finish (paint, stain, or factory laminate). The biggest value decision is stock vs. semi-custom vs. custom. We carry semi-custom lines from Shiloh, Wellborn, and Decora — quality products with hundreds of configurations at mid-range pricing. During your design consultation we'll show samples from all tiers and help you match cabinet quality to your budget and timeline.",
  },
  {
    q: "What's the difference between stock, semi-custom, and custom cabinets?",
    a: "Stock cabinets are pre-manufactured in standard 3-inch width increments, available off the shelf — fastest and least expensive, but limited configuration. Semi-custom cabinets are manufactured to order in more size increments with more door styles, finish options, and interior accessories — 3–8 week lead times, 30–60% more than stock. Custom cabinets are built to your exact dimensions by a cabinet maker — maximum flexibility and quality, but 8–16 week lead times and the highest cost. For most $50,000–$100,000 kitchen remodels, semi-custom delivers the best balance of quality, customization, and price. Full custom makes sense for unique spaces, luxury builds, or exact-fit requirements.",
  },
  {
    q: "Do you handle kitchen plumbing and electrical?",
    a: "Yes — completely. Construction Station is a licensed general contractor (CSLB #1108879), not just a cabinet installer. We handle all trades: plumbing (sink connections, garbage disposal, dishwasher, gas lines, pot filler), electrical (dedicated circuits for dishwasher, disposal, microwave, and range; under-cabinet lighting; pendant wiring; GFCI outlets), and any structural work. Our licensed tradespeople handle all rough and finish work under our general contractor license — one accountable party for the entire project, one permit package, one warranty.",
  },
  {
    q: "What kitchen features add the most resale value?",
    a: "In Inland Empire real estate, the features that consistently add the most resale value: quartz or stone countertops (buyers notice immediately), updated cabinet faces with soft-close hardware (critical in the $400K–$700K market), a functional island with seating, updated lighting (recessed cans plus pendants over the island), and stainless or panel-ready appliances. Kitchen remodels in the Inland Empire generally return 60–80% of cost at resale — higher for homes priced under $600K, where kitchen condition directly influences offers.",
  },
  {
    q: "How much should I budget for kitchen appliances?",
    a: "Appliance budgets range from $3,000–$6,000 for mid-grade (GE, Whirlpool, Frigidaire), $6,000–$15,000 for premium (Bosch, KitchenAid, Samsung), and $15,000–$40,000+ for luxury (Wolf, Sub-Zero, Thermador, Miele). Construction Station installs all tiers and coordinates directly with appliance reps to confirm rough-in dimensions. A common mistake: clients allocate nearly all their budget to cabinetry and countertops and are surprised by appliance costs. We include a recommended appliance budget in every estimate so you have the complete picture before signing.",
  },
  {
    q: "Can you remodel a kitchen in stages?",
    a: "Yes — phased remodels work for clients who want to spread costs or minimize disruption. A common sequence: Phase 1 — countertops and sink (high visual impact, short disruption); Phase 2 — cabinets and flooring; Phase 3 — appliances and lighting. The tradeoffs: phased work costs more overall due to multiple mobilizations and potential rework between stages. If budget is the main driver, we can prioritize which elements deliver the most value improvement per dollar so you start with the highest-impact changes first.",
  },
  {
    q: "Do you offer kitchen design services?",
    a: "Yes. Every kitchen remodel starts with a free in-home design consultation — normally $299, included at no charge for new clients. Our designer measures your space, discusses your lifestyle and cooking habits, reviews your inspiration images, and develops a floor plan with cabinet layout. We then produce 3D photorealistic renderings showing the finished kitchen — every cabinet, countertop, tile, and fixture — before any order is placed. The design process is included in your project cost; we don't charge separately for revisions. Our goal is for you to love the design on paper before construction begins.",
  },
];

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://constructionstation.com";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function KitchenRemodelingPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Kitchen Remodeling",
    provider: {
      "@type": "GeneralContractor",
      name: CS.name,
      telephone: CS.phone,
      url: SITE_URL,
      identifier: CS.license,
    },
    areaServed: { "@type": "Place", name: "Inland Empire, California" },
    description:
      "Full-service kitchen remodeling — design, cabinetry, countertops, appliances, and installation. Licensed contractor since 2008.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free in-home design consultation (normally $299)",
    },
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      {/* 1. Hero */}
      <ServiceHero
        eyebrow="Service · Kitchens"
        title="Kitchen Remodeling in the Inland Empire"
        italicWord="Inland Empire"
        subtitle="Custom cabinetry, stone countertops, and tile work delivered by the same Construction Station crew you meet on day one. No subs. No surprises. No shortcuts."
      />

      {/* 2. Trust bar */}
      <TrustBar />

      {/* Gallery — moved above the detailed content sections so users see
          real work immediately after the trust signals. */}
      <section className="bg-cream py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-px bg-gold" />
              <span className="text-gold text-xs uppercase tracking-[0.4em]">Our Work</span>
              <span className="w-10 h-px bg-gold" />
            </div>
            <h2 className="font-display text-navy text-4xl md:text-5xl leading-[1]">
              Real kitchens, <span className="italic text-gold">real homes</span>.
            </h2>
          </div>
          <ServiceGallery images={GALLERY} />
        </div>
      </section>

      {/* 3. Lead magnet — lowest commitment */}
      <section className="bg-cream py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-px bg-gold" />
                <span className="text-gold text-xs uppercase tracking-[0.4em]">Free Resource</span>
              </div>
              <h2 className="font-display text-navy text-4xl md:text-5xl leading-[1.05] mb-5">
                Not ready to talk?{" "}
                <span className="italic text-gold">Get our free guide.</span>
              </h2>
              <p className="text-navy/70 leading-relaxed mb-6">
                Before you call anyone, arm yourself with the numbers. Our 2026
                cost guide covers everything Inland Empire homeowners need to
                know — average prices, how to compare bids, and the five
                mistakes that blow kitchen budgets.
              </p>
              <p className="text-navy/55 text-sm">
                Instant download. No spam. Unsubscribe anytime.
              </p>
            </div>
            <div className="lg:col-span-7">
              <LeadMagnetCard />
            </div>
          </div>
        </div>
      </section>

      {/* Content: overview, process, FAQs */}
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
                The kitchen is the most worked-in, most photographed, and most
                argued-over room in any home. We&rsquo;ve been remodeling them
                across the Inland Empire since 2008 — over 250 kitchens
                completed across Redlands, Yucaipa, Riverside, Rancho
                Cucamonga, and surrounding cities.
              </p>
              <p className="text-navy/75 leading-[1.8] mb-5">
                Our scope is comprehensive. We design and install{" "}
                <strong className="text-navy">custom shaker, slab, and
                inset cabinetry</strong>, fabricate quartz, granite, and marble
                countertops, and execute precision tile and stone work. From a
                galley refresh to a full open-concept transformation, the same
                crew handles framing, electrical, plumbing, drywall, tile,
                cabinetry, and final touch-ups.
              </p>
              <p className="text-navy/75 leading-[1.8] mb-5">
                <strong className="text-navy">Custom cabinetry</strong> sets
                the tone of the room. We offer fully custom-built options as
                well as semi-custom lines from Shiloh, Wellborn, and Decora.
                Our installers obsess over reveals, scribe lines, and crown
                returns — the small details that separate $40k kitchens from
                $80k kitchens.
              </p>
              <p className="text-navy/75 leading-[1.8] mb-5">
                <strong className="text-navy">Countertops</strong> are
                templated digitally for seamless seams. Quartz options like
                Caesarstone, Cambria, and Silestone run alongside natural
                granite and marble selections from local stone yards. We
                walk every slab in person before fabrication.
              </p>
              <p className="text-navy/75 leading-[1.8] mb-5">
                <strong className="text-navy">Islands</strong> are where most
                kitchens live or die. Our designer studies your traffic
                patterns, prep zones, and seating needs before drafting a
                layout. Waterfall edges, prep sinks, integrated outlets,
                drawer dishwashers, and microwave drawers are all on the
                table.
              </p>
              <p className="text-navy/75 leading-[1.8] mb-5">
                <strong className="text-navy">Appliance integration</strong>{" "}
                is engineered into the layout from day one. We&rsquo;re
                Wolf, Sub-Zero, Thermador, and Bosch installers, and we coordinate
                directly with appliance reps to confirm rough-in dimensions
                and venting before drywall closes up.
              </p>
              <p className="text-navy/75 leading-[1.8] mb-5">
                <strong className="text-navy">Lighting and electrical</strong>{" "}
                are not afterthoughts. Layered lighting plans (recessed,
                pendants, undercabinet, toe-kick) are part of every design.
                Dedicated circuits for the disposal, dishwasher, microwave,
                and induction range are part of every install.
              </p>
              <p className="text-navy/75 leading-[1.8] mb-5">
                <strong className="text-navy">Flooring</strong> options
                include large-format porcelain tile, engineered hardwood,
                solid hardwood (sand-and-finish or pre-finished), and
                luxury vinyl plank. We handle subfloor leveling, vapor
                barriers, and transitions between rooms so the finished
                surface looks like it was always there.
              </p>
              <p className="text-navy/75 leading-[1.8]">
                Most importantly: <strong className="text-navy">we&rsquo;re
                a single point of contact from design through final
                walkthrough.</strong> One project manager, one written
                schedule, one warranty. With 18 years in the Inland Empire
                and over 500 projects completed, we&rsquo;ve built a
                reputation on showing up, hitting dates, and finishing what
                we start.
              </p>
            </div>
          </div>
        </div>
      </article>

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
              href="/kitchen-remodeler-yucaipa-ca"
              className="bg-white border border-navy/10 p-6 hover:border-gold transition-colors group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-display text-navy text-2xl">
                    Kitchen Remodel Yucaipa CA
                  </div>
                  <div className="text-navy/60 text-sm mt-1">
                    Local projects, Yucaipa pricing &amp; neighborhoods
                  </div>
                </div>
                <div className="text-gold group-hover:translate-x-1 transition-transform">
                  →
                </div>
              </div>
            </Link>
            <Link
              href="/services/bathroom-remodeling"
              className="bg-white border border-navy/10 p-6 hover:border-gold transition-colors group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-display text-navy text-2xl">
                    Bathroom Remodeling
                  </div>
                  <div className="text-navy/60 text-sm mt-1">
                    Walk-in showers, soaking tubs, tile work
                  </div>
                </div>
                <div className="text-gold group-hover:translate-x-1 transition-transform">
                  →
                </div>
              </div>
            </Link>
            <Link
              href="/services/room-additions"
              className="bg-white border border-navy/10 p-6 hover:border-gold transition-colors group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-display text-navy text-2xl">
                    Room Additions
                  </div>
                  <div className="text-navy/60 text-sm mt-1">
                    Expand your living space
                  </div>
                </div>
                <div className="text-gold group-hover:translate-x-1 transition-transform">
                  →
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Calendly — medium commitment */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-px bg-gold" />
              <span className="text-gold text-xs uppercase tracking-[0.4em]">Free Consultation</span>
              <span className="w-10 h-px bg-gold" />
            </div>
            <h2 className="font-display text-navy text-4xl md:text-5xl leading-[1] mb-4">
              Ready to talk?{" "}
              <span className="italic text-gold">Pick a time.</span>
            </h2>
            <p className="text-navy/65 max-w-lg mx-auto text-sm leading-relaxed">
              Book your free 60-minute design consultation directly on our
              calendar. Normally $299 — free for new clients. No obligation,
              no high-pressure pitch.
            </p>
          </div>
          <CalendlyEmbed />
        </div>
      </section>

      {/* 5. Call section — highest commitment */}
      <section className="bg-navy texture-navy text-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-5 lg:px-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-px bg-gold" />
            <span className="text-gold text-xs uppercase tracking-[0.4em]">Ready Now?</span>
            <span className="w-10 h-px bg-gold" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl leading-[1] mb-4">
            Call us directly.
          </h2>
          <p className="text-white/65 mb-8 text-sm leading-relaxed">
            Speak with a project coordinator right now. We answer during business
            hours and return all missed calls within 30 minutes.
          </p>
          <a
            href={CS.phoneHref}
            className="inline-flex items-center gap-3 bg-gold text-navy font-body font-semibold px-10 py-5 text-xl hover:bg-yellow-400 transition-colors tracking-wide"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {CS.phone}
          </a>
        </div>
      </section>

      {/* 6. Contact form — simplified 3 fields */}
      <section className="bg-cream py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-px bg-gold" />
                <span className="text-gold text-xs uppercase tracking-[0.4em]">Request a Callback</span>
              </div>
              <h2 className="font-display text-navy text-4xl md:text-5xl leading-[1.05] mb-5">
                Prefer us to{" "}
                <span className="italic text-gold">call you?</span>
              </h2>
              <p className="text-navy/70 leading-relaxed mb-6">
                Leave your name and number and we&rsquo;ll reach out within 2
                business hours to discuss your project — no obligation, no
                high-pressure sales call.
              </p>
              <div className="space-y-3 text-sm text-navy/70">
                <div className="flex items-center gap-3">
                  <span className="w-5 h-5 bg-gold/20 border border-gold flex items-center justify-center text-gold text-xs font-bold shrink-0">✓</span>
                  Response within 2 business hours
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-5 h-5 bg-gold/20 border border-gold flex items-center justify-center text-gold text-xs font-bold shrink-0">✓</span>
                  Free in-home estimate included
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-5 h-5 bg-gold/20 border border-gold flex items-center justify-center text-gold text-xs font-bold shrink-0">✓</span>
                  No obligation, ever
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <KitchenQuickForm />
            </div>
          </div>
        </div>
      </section>

      <ServiceCityLinksStrip serviceKey="kitchen-remodeling" />
    </>
  );
}
