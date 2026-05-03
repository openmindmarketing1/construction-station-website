import type { Metadata } from "next";
import Link from "next/link";
import ServiceHero from "@/components/ServiceHero";
import ProcessSteps from "@/components/ProcessSteps";
import FAQAccordion from "@/components/FAQAccordion";
import CtaSection from "@/components/CtaSection";
import JsonLd from "@/components/JsonLd";
import { CS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Kitchen Remodeling in the Inland Empire",
  description:
    "Premium kitchen remodeling in the Inland Empire — custom cabinetry, quartz and granite countertops, expert tile work, and full design-build service since 2008. Call 909-797-6333.",
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

      <ServiceHero
        eyebrow="Service · Kitchens"
        title="Kitchen Remodeling in the Inland Empire"
        italicWord="Inland Empire"
        subtitle="Custom cabinetry, stone countertops, and tile work delivered by the same Construction Station crew you meet on day one. No subs. No surprises. No shortcuts."
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

      <CtaSection
        heading="Let's design your kitchen."
        subheading="Free 60-minute in-home consultation. No obligation, no high pressure."
        showForm
      />
    </>
  );
}
