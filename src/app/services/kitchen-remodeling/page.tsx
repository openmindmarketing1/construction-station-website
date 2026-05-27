import type { Metadata } from "next";
import Link from "next/link";
import ServiceHero from "@/components/ServiceHero";
import TrustBar from "@/components/TrustBar";
import ProcessSteps from "@/components/ProcessSteps";
import FAQAccordion from "@/components/FAQAccordion";
import LeadMagnetCard from "@/components/LeadMagnetCard";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import KitchenQuickForm from "@/components/KitchenQuickForm";
import JsonLd from "@/components/JsonLd";
import { CS } from "@/lib/constants";

export const metadata: Metadata = {
  title:
    "Kitchen Remodeler Yucaipa CA | Free Estimates | Licensed & Insured | Construction Station",
  description:
    "Top-rated kitchen remodeler in Yucaipa CA. Custom kitchen remodels, free design consultation. CSLB Licensed #1108879. Call (909) 797-6333.",
  alternates: { canonical: "/services/kitchen-remodeling" },
};

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
    q: "How long does a kitchen remodel take?",
    a: "A typical full kitchen remodel runs 6–10 weeks from demo to final walkthrough. Cosmetic refreshes (cabinet refacing, countertops only) can finish in 2–3 weeks. Layout changes that move plumbing or load-bearing walls extend the timeline by 2–4 weeks. We give you a written calendar before signing.",
  },
  {
    q: "How much does a kitchen remodel cost?",
    a: "Inland Empire kitchen remodels typically range from $35,000 for a mid-grade refresh to $120,000+ for a full luxury build with custom cabinetry, stone counters, and high-end appliances. Your free design session ends with a transparent line-item quote — no surprise upcharges.",
  },
  {
    q: "Do you pull permits?",
    a: "Always. Any electrical, plumbing, or structural change requires a permit, and we handle the entire process — drawings, submittals, inspections. Unpermitted work can void homeowner&apos;s insurance and torpedo a future home sale.",
  },
  {
    q: "Can I stay in my home during the remodel?",
    a: "Yes — most clients do. We seal off the work zone with zip walls, set up a temporary kitchenette (sink, fridge, microwave) in another room, and clean the home daily. We also have relationships with extended-stay hotels for clients who prefer to be away during demo week.",
  },
  {
    q: "What brands do you work with?",
    a: "We partner with Wolf, Sub-Zero, Thermador, Bosch, KitchenAid, Cafe, and GE Monogram for appliances. For cabinetry, we offer custom-built options as well as Shiloh, Wellborn, and Decora. Counter brands include Caesarstone, Cambria, Silestone, and natural stone yards.",
  },
  {
    q: "Do you offer financing?",
    a: "Yes. We partner with Enhancify to offer flexible financing — 0% promotional periods and longer-term plans up to 144 months. Apply at constructionstation.com/financing — pre-qualification is a soft credit pull that won&apos;t affect your score.",
  },
  {
    q: "Do you handle the design?",
    a: "Yes. Our in-house designer works with you on layout, finish selection, lighting plan, and 3D renderings — included with every full kitchen project. You&apos;re welcome to bring your own designer or interior architect; we collaborate seamlessly.",
  },
  {
    q: "What's included in the free consultation?",
    a: "An in-home measure, scope discussion, finish-level conversation, ballpark range based on similar past projects, and a follow-up written estimate within 5 business days. No high-pressure pitch — bring your Pinterest board, we&apos;ll bring our portfolio.",
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
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
              href="/contact"
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
    </>
  );
}
