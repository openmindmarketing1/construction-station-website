import type { Metadata } from "next";
import Link from "next/link";
import ServiceHero from "@/components/ServiceHero";
import ServiceGallery from "@/components/ServiceGallery";
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

const GALLERY = [
  { src: "https://ihvgrybmtngekmfjpxnz.supabase.co/storage/v1/object/public/user-assets/business-1/Bathroom%20Images/v3/bathroom-master-luxury-v3.jpg", alt: "Luxury master bathroom remodel with freestanding tub" },
  { src: "https://ihvgrybmtngekmfjpxnz.supabase.co/storage/v1/object/public/user-assets/business-1/Bathroom%20Images/v3/bathroom-modern-v3.jpg", alt: "Modern bathroom remodel with floating vanity" },
  { src: "https://ihvgrybmtngekmfjpxnz.supabase.co/storage/v1/object/public/user-assets/business-1/Bathroom%20Images/v3/bathroom-walkin-shower-v3.jpg", alt: "Custom walk-in shower with curbless entry and tile work" },
  { src: "https://ihvgrybmtngekmfjpxnz.supabase.co/storage/v1/object/public/user-assets/business-1/Bathroom%20Images/v3/bathroom-vanity-detail-v3.jpg", alt: "Double vanity detail with quartz countertop and custom mirrors" },
  { src: "https://ihvgrybmtngekmfjpxnz.supabase.co/storage/v1/object/public/user-assets/business-1/Bathroom%20Images/v3/bathroom-small-transformation-v3.jpg", alt: "Small bathroom transformation — Inland Empire remodel" },
];

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
    a: "Depending on the size of the bathroom, most remodels take 2-6 weeks. Larger or more complex bathrooms fall on the longer end of that range.",
  },
  {
    q: "What does the bathroom remodel process look like?",
    a: (
      <>
        <p className="mb-3">Here&rsquo;s our general process:</p>
        <ol className="list-decimal list-outside ml-5 space-y-1.5">
          <li>Demolition — remove existing fixtures and finishes</li>
          <li>Buildout — frame to the approved drawings and move plumbing or electrical as needed</li>
          <li>Waterproofing — hot-mop waterproofing for the shower</li>
          <li>Tile installation — shower and any tile work</li>
          <li>Finish work — drywall repairs, painting, setting vanities</li>
          <li>Flooring — flooring installation</li>
          <li>Accessories — towel bars, toilet paper holders, fixtures</li>
          <li>Final clean — we leave the space ready to use</li>
        </ol>
        <p className="mt-3">Every project varies, but that&rsquo;s the typical flow.</p>
      </>
    ),
  },
  {
    q: "Do I need a permit for my bathroom remodel?",
    a: "For a standard bathroom remodel that doesn't add square footage, permits usually aren't required unless you'd like them pulled. If the project adds square footage, we recommend permitting — and we handle all of it for you.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does a bathroom remodel take?",
      acceptedAnswer: { "@type": "Answer", text: "Depending on the size of the bathroom, most remodels take 2-6 weeks. Larger or more complex bathrooms fall on the longer end of that range." },
    },
    {
      "@type": "Question",
      name: "What does the bathroom remodel process look like?",
      acceptedAnswer: { "@type": "Answer", text: "Here's our general process: 1. Demolition — remove existing fixtures and finishes 2. Buildout — frame to the approved drawings and move plumbing or electrical as needed 3. Waterproofing — hot-mop waterproofing for the shower 4. Tile installation — shower and any tile work 5. Finish work — drywall repairs, painting, setting vanities 6. Flooring — flooring installation 7. Accessories — towel bars, toilet paper holders, fixtures 8. Final clean — we leave the space ready to use. Every project varies, but that's the typical flow." },
    },
    {
      "@type": "Question",
      name: "Do I need a permit for my bathroom remodel?",
      acceptedAnswer: { "@type": "Answer", text: "For a standard bathroom remodel that doesn't add square footage, permits usually aren't required unless you'd like them pulled. If the project adds square footage, we recommend permitting — and we handle all of it for you." },
    },
  ],
};

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
      <JsonLd data={faqSchema} />

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

      {/* Gallery */}
      <section className="bg-cream py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-px bg-gold" />
              <span className="text-gold text-xs uppercase tracking-[0.4em]">Our Work</span>
              <span className="w-10 h-px bg-gold" />
            </div>
            <h2 className="font-display text-navy text-4xl md:text-5xl leading-[1]">
              Real bathrooms, <span className="italic text-gold">real homes</span>.
            </h2>
          </div>
          <ServiceGallery images={GALLERY} />
        </div>
      </section>

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
