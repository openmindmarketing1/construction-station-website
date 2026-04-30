import type { Metadata } from "next";
import Link from "next/link";
import ServiceHero from "@/components/ServiceHero";
import ProcessSteps from "@/components/ProcessSteps";
import FAQAccordion from "@/components/FAQAccordion";
import CtaSection from "@/components/CtaSection";
import JsonLd from "@/components/JsonLd";
import { CS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Bathroom Remodeling in the Inland Empire",
  description:
    "Luxury bathroom remodeling in the Inland Empire — walk-in showers, freestanding tubs, heated floors, and master suites since 2008. Licensed contractor #1108879. Call 909-797-6333.",
  alternates: { canonical: "/services/bathroom-remodeling" },
};

const STEPS = [
  {
    number: "01",
    title: "Free Design Consultation",
    description: "On-site measure, layout discussion, and finish-level walkthrough.",
  },
  {
    number: "02",
    title: "3D Design Rendering",
    description: "See every tile, fixture, and finish before we lift a hammer.",
  },
  {
    number: "03",
    title: "Permits & Materials",
    description: "We handle plumbing and electrical permits and stage materials.",
  },
  {
    number: "04",
    title: "Expert Installation",
    description: "Waterproofing, tile, plumbing, fixtures — same crew, every step.",
  },
  {
    number: "05",
    title: "Final Walkthrough",
    description: "Two-year workmanship warranty + lifetime tile warranty.",
  },
];

const FAQS = [
  {
    q: "How long does a bathroom remodel take?",
    a: "Most full bathroom remodels run 3–5 weeks. Guest bath refreshes (vanity + shower swap) can finish in 10–14 days. Master bath gut renovations with custom tile work, freestanding tubs, and curbless showers run 4–6 weeks. Tile cure times and inspection scheduling are the most common timeline factors.",
  },
  {
    q: "What's the average cost?",
    a: "Inland Empire bathroom remodels typically range from $18,000 for a guest bath refresh to $75,000+ for a luxury primary suite remodel with custom tile, heated floors, and high-end fixtures. Your free design session ends with a transparent line-item quote.",
  },
  {
    q: "Can you do a tub-to-shower conversion?",
    a: "Yes — this is one of our most-requested upgrades. We remove the tub, frame the new shower, install a proper drain, waterproof with Schluter Kerdi or Wedi membrane, and finish with custom tile. Curbless (zero-threshold) showers are also a specialty.",
  },
  {
    q: "Do you handle plumbing and electrical?",
    a: "Yes, in-house. We&rsquo;re licensed for both, pull all permits, and coordinate inspection scheduling. Moving fixtures, upgrading to a 1.28 GPF toilet, adding GFCI outlets, or running new circuits for heated floors and exhaust fans is all part of the scope.",
  },
  {
    q: "How do you handle water damage?",
    a: "We open up the affected area, remove rotted framing and substrate, treat for mold, replace structural elements per code, and reinstall with modern waterproofing membranes (Schluter Kerdi, Wedi, RedGard). We document everything for insurance if applicable.",
  },
  {
    q: "What tile brands do you use?",
    a: "We work with Daltile, Walker Zanger, Ann Sacks, Bedrosians, Marazzi, and local stone yards for natural marble, travertine, and limestone. Large-format porcelain (24x48 and up) is a common choice for showers — fewer grout lines, easier maintenance.",
  },
  {
    q: "Can you add heated floors?",
    a: "Yes. Electric radiant systems (Schluter Ditra-Heat, WarmlyYours) install under tile or stone, run on a dedicated circuit, and use a programmable thermostat. Plan for a $1,500–$3,500 add depending on bathroom size and tile choice.",
  },
  {
    q: "What's your warranty?",
    a: "Two years on workmanship (anything we install or build) and lifetime warranty on tile installation. Manufacturer warranties on fixtures and materials pass through to you. Full warranty terms are spelled out in your contract before signing.",
  },
];

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://constructionstation.com";

export default function BathroomRemodelingPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Bathroom Remodeling",
    provider: {
      "@type": "GeneralContractor",
      name: CS.name,
      telephone: CS.phone,
      url: SITE_URL,
      identifier: CS.license,
    },
    areaServed: { "@type": "Place", name: "Inland Empire, California" },
    description:
      "Full-service bathroom remodeling — walk-in showers, soaking tubs, tile work, and master suites. Licensed contractor since 2008.",
  };

  return (
    <>
      <JsonLd data={serviceSchema} />

      <ServiceHero
        eyebrow="Service · Bathrooms"
        title="Bathroom Remodeling in the Inland Empire"
        italicWord="Inland Empire"
        subtitle="Walk-in showers, freestanding tubs, heated floors, and tile work that holds up for decades. Properly waterproofed, properly permitted."
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
                Bathrooms are punishing rooms — water, heat, weight, daily
                use. A poorly built bathroom rots from the inside out within
                five years. We&rsquo;ve been remodeling them across the
                Inland Empire since 2008 with one rule: build the
                waterproofing right and the rest takes care of itself.
              </p>
              <p className="text-navy/75 leading-[1.8] mb-5">
                Our bathroom scope covers everything from a quick guest-bath
                refresh to a full primary suite gut renovation.{" "}
                <strong className="text-navy">Walk-in showers</strong> —
                including curbless, zero-threshold designs — are our most
                requested upgrade. We waterproof with Schluter Kerdi or
                Wedi systems before any tile goes down. Linear drains,
                rainfall heads, body sprays, and frameless glass are all
                part of the conversation.
              </p>
              <p className="text-navy/75 leading-[1.8] mb-5">
                <strong className="text-navy">Freestanding tubs</strong>{" "}
                from Kohler, Victoria + Albert, and MTI Baths are installed
                with proper structural support and floor-mounted filler
                lines. We coordinate with structural engineers when cast
                iron tubs require reinforced floor joists.
              </p>
              <p className="text-navy/75 leading-[1.8] mb-5">
                <strong className="text-navy">Tile work and waterproofing</strong>{" "}
                is what separates a 5-year bathroom from a 30-year
                bathroom. We never use mastic in wet areas. We use Schluter
                Kerdi, Wedi panels, or RedGard liquid membrane behind every
                shower wall. Niches, benches, and curbs are pre-sloped and
                membrane-wrapped.
              </p>
              <p className="text-navy/75 leading-[1.8] mb-5">
                <strong className="text-navy">Vanities and storage</strong>{" "}
                can be off-the-shelf, semi-custom, or fully built-in. We
                fabricate quartz tops with rectangular undermount sinks,
                vessel bowls, or integrated trough designs. Mirror selections,
                medicine cabinets, and integrated outlets are part of every
                vanity wall plan.
              </p>
              <p className="text-navy/75 leading-[1.8] mb-5">
                <strong className="text-navy">Lighting</strong> in
                bathrooms requires layered design — wet-rated recessed
                cans in the shower, sconces flanking mirrors at face
                height, and ambient lighting for late-night use. Dimmers
                and night lights are standard, not upgrades.
              </p>
              <p className="text-navy/75 leading-[1.8] mb-5">
                <strong className="text-navy">Flooring</strong> uses
                large-format porcelain tile, natural stone, or premium
                LVP. Heated floors (Schluter Ditra-Heat or WarmlyYours)
                are an affordable upgrade — about $1,500–$3,500 depending
                on bathroom size, with lifetime element warranties.
              </p>
              <p className="text-navy/75 leading-[1.8] mb-5">
                <strong className="text-navy">Accessibility upgrades</strong>{" "}
                — grab bars, comfort-height toilets, curbless showers,
                widened doorways, and ADA-compliant fixtures — are
                designed to age in place without looking institutional.
              </p>
              <p className="text-navy/75 leading-[1.8]">
                Whether you&rsquo;re finishing a guest bath for resale or
                building the spa-like primary suite you&rsquo;ve sketched
                for a decade, we bring the same crew, same standards, and
                same warranty to every job.
              </p>
            </div>
          </div>
        </div>
      </article>

      <ProcessSteps steps={STEPS} />
      <FAQAccordion faqs={FAQS} />

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
              href="/services/kitchen-remodeling"
              className="bg-white border border-navy/10 p-6 hover:border-gold transition-colors group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-display text-navy text-2xl">
                    Kitchen Remodeling
                  </div>
                  <div className="text-navy/60 text-sm mt-1">
                    Custom cabinetry, stone counters
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
                    Free Estimate
                  </div>
                  <div className="text-navy/60 text-sm mt-1">
                    Book your design session
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
        heading="Design the bathroom you've sketched in your head."
        subheading="Free in-home design consultation. We bring the swatches and the renderings."
        showForm
      />
    </>
  );
}
