import type { Metadata } from "next";
import Link from "next/link";
import ServiceHero from "@/components/ServiceHero";
import ServiceGallery from "@/components/ServiceGallery";
import ProcessSteps from "@/components/ProcessSteps";
import FAQAccordion from "@/components/FAQAccordion";
import CtaSection from "@/components/CtaSection";
import ServiceCityLinksStrip from "@/components/ServiceCityLinksStrip";
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
    q: "How much does a bathroom remodel cost?",
    a: "Bathroom remodel costs in the Inland Empire range from $12,000–$20,000 for a cosmetic update (new vanity, fixtures, tile surround, and flooring), $20,000–$45,000 for a full remodel of a standard 5×8 or 6×9 bathroom (gut to studs, new tile, plumbing, and fixtures), and $45,000–$80,000+ for a master suite with a custom walk-in shower, freestanding tub, heated floors, and custom tile work. The biggest cost drivers are tile complexity, fixture tier, shower size, and whether you're relocating plumbing. We provide transparent, itemized written estimates after the free design consultation. Licensed CSLB #1108879.",
  },
  {
    q: "How long does a bathroom remodel take?",
    a: "Timeline depends on scope: a cosmetic refresh (new vanity, toilet, mirror, and paint) takes 1–2 weeks; a standard full remodel (gut, new tile, plumbing) takes 3–6 weeks; a master bath gut with custom tile and structural changes runs 6–10 weeks. Custom tile work — especially large-format, mosaic, or natural stone — takes longer due to layout, cutting, and curing requirements. We provide a written project schedule before signing so you know when each phase starts and finishes.",
  },
  {
    q: "What does the bathroom remodel process look like?",
    a: "Our process: (1) Demolition — all existing tile, fixtures, vanity, and flooring down to studs; (2) Rough plumbing — relocate or rough in new drain, supply, or vent lines; (3) Rough electrical — new circuits, exhaust fan, and lighting rough-in; (4) Waterproofing — Schluter Kerdi, Wedi panels, or RedGard membrane on all shower walls; (5) Backer board installation in wet areas; (6) Tile installation — shower walls, shower floor, and floor tile; (7) Drywall and paint; (8) Flooring; (9) Vanity and countertop; (10) Plumbing finish — faucets, showerheads, toilets; (11) Electrical finish — light fixtures, exhaust fan, outlets; (12) Accessories — towel bars, mirrors, toilet paper holders; (13) Final cleanup and walkthrough.",
  },
  {
    q: "Can you convert a bathtub to a walk-in shower?",
    a: "Yes — this is one of our most common bathroom upgrades. Converting a 60-inch tub alcove to a walk-in shower involves removing the tub and surround, lowering the drain, waterproofing with a membrane system, and installing tile, pan, glass enclosure, and fixtures. We offer curbless (zero-threshold) walk-in showers for accessibility and contemporary aesthetics. A standard tub-to-shower conversion in an existing 60-inch alcove runs $8,000–$18,000 depending on tile selection, glass type, and fixture tier. Full custom walk-in showers in master baths with bench, body sprays, niche, and frameless glass run $22,000–$40,000+. Walk-in showers are the #1 most-requested bathroom upgrade in IE real estate.",
  },
  {
    q: "What are aging-in-place bathroom modifications?",
    a: "Aging-in-place modifications adapt bathrooms for safer use as mobility changes — whether for a current need or planning ahead. Features we install: curbless walk-in showers, grab bars (we install wall blocking during remodels so bars can be added anytime), comfort-height toilets (2 inches taller than standard), non-slip floor tile, handheld showerheads with slide bars, fold-down shower seats, widened doorways (to 36 inches for wheelchair access), and ADA-compliant fixture placement. These features integrate cleanly into modern bathroom design without looking institutional. Many clients remodeling for resale request aging-in-place features because they appeal to a large segment of IE buyers aged 50 and older.",
  },
  {
    q: "Do I need permits for a bathroom remodel?",
    a: "It depends on scope. A cosmetic refresh — new vanity in the same location, new fixtures, tile replacement — typically does not require permits. If you're relocating the toilet, moving the shower drain, converting a tub to a walk-in shower (plumbing modification), adding electrical circuits, or moving a wall, permits are required. Construction Station obtains all required permits and schedules all inspections. Proper permitting protects you at resale — unpermitted bathroom work is regularly flagged by home inspectors and can delay or kill a sale.",
  },
  {
    q: "What tile options do you recommend for bathrooms?",
    a: "For bathroom floors, we recommend slip-resistant porcelain tile with a coefficient of friction (COF) of 0.42 or higher — large-format 12×24 or 24×24 looks contemporary and is easy to maintain. For shower walls, rectified porcelain in 12×24 or 12×48 plank format is our most popular choice — minimal grout lines, consistent appearance, easy to clean. Natural stone (marble, travertine) is beautiful but requires periodic sealing. Subway tile (3×6 or 4×8) is a classic, budget-friendly option. Mosaic tile works well for shower floors where smaller pieces accommodate the slope to the drain. We carry samples from multiple distributors and bring options to match your aesthetic and budget.",
  },
  {
    q: "How do I choose a shower system?",
    a: "Start with basic configuration: single showerhead vs. rain head vs. combination. Then select valve brand — Kohler, Moen, Delta, Grohe, and Hansgrohe represent different price-to-quality tiers. Consider add-ons: body spray jets (require a high-capacity water heater), handheld, thermostatic valve (precise temperature control, ideal for families). For most full bathroom remodels, we recommend a thermostatic system with rain head and handheld — approximately $800–$2,500 in fixtures depending on brand. Body sprays and steam generators are luxury upgrades adding $3,000–$8,000+ to scope. We guide you based on your budget and existing water heater capacity.",
  },
  {
    q: "Can you add a bathroom to my home?",
    a: "Yes — adding a bathroom is a full general contractor project and Construction Station handles it under one contract. It involves selecting a location (proximity to an existing plumbing stack significantly affects cost), running drain, supply, and vent lines, waterproofing, tile, fixtures, and drywall. Adding a bathroom within the existing footprint typically runs $25,000–$50,000 depending on plumbing complexity. Adding a bathroom as part of a room addition runs $50,000–$100,000+ for the addition and bathroom combined. Permits are always required. We assess your home's layout and plumbing and give you an honest cost range during the free consultation.",
  },
  {
    q: "What bathroom features add the most resale value?",
    a: "In Inland Empire real estate, the bathroom features that return the most: (1) Walk-in shower in the master bath — especially with frameless glass; (2) Double vanity in the master — a major differentiator in the $500K–$800K price range; (3) Updated tile throughout — outdated tile immediately dates a bathroom; (4) Modern lighting with dimmer control; (5) Undermount sink with quartz or stone countertop. A mid-grade full master bath remodel ($30,000–$50,000) typically returns 60–75% of cost at resale. The return is higher in competitive markets and for homes where the bathroom is clearly the weakest room relative to the asking price.",
  },
  {
    q: "How do I prevent mold in a remodeled bathroom?",
    a: "Mold prevention starts in construction. The most important factor is proper waterproofing — we use Schluter Kerdi membrane or Wedi panels on all shower walls, never mastic adhesive (which is not waterproof long-term). Niches, curbs, and benches are pre-sloped and membrane-wrapped. Beyond construction: install a properly sized exhaust fan (at minimum 1 CFM per square foot of bathroom area) that vents to the exterior; use grout sealer annually in the shower; squeegee glass after each use; run the exhaust fan for 20–30 minutes after showering. A well-waterproofed bathroom with proper ventilation rarely develops mold issues under normal residential use.",
  },
  {
    q: "What is a wet room and is it right for my home?",
    a: "A wet room is a fully waterproofed bathroom where the shower has no defined barrier — the entire floor slopes to a central drain, creating an open shower space without a glass enclosure. Wet rooms create a dramatic, spa-like aesthetic and are gaining traction in high-end Inland Empire master baths. The entire floor and walls must be waterproofed (not just the shower zone), which adds cost but eliminates the need for a glass enclosure. Wet rooms work best in dedicated master suites — they're less practical in family bathrooms where users need a consistently dry floor area. We can advise on whether your bathroom's layout and plumbing support this design.",
  },
  {
    q: "Do you do ADA-compliant bathroom remodels?",
    a: "Yes. ADA-compliant bathroom design follows specific dimensional standards: 60-inch turning radius for wheelchair access, toilet centerline at 18 inches from the side wall, grab bars at 33–36 inches, sink with knee clearance underneath, and a curbless shower with 36×36-inch minimum or 60-inch roll-in configuration. Construction Station has experience with residential accessibility modifications and commercial ADA compliance. For residential clients, we customize features to what actually makes your daily use safer and easier — ADA standards are a guide, not a rigid prescription for a home setting. Licensed CSLB #1108879.",
  },
  {
    q: "Can I stay in my home during a bathroom remodel?",
    a: "In most cases, yes. If you have two or more bathrooms, one remains fully functional while we remodel the other. If you have only one bathroom, we work as efficiently as possible to minimize the window without a working toilet and shower — typically 3–5 days during the rough plumbing phase. Some clients stay in a hotel for the first week, then return once basic function is restored. We always prioritize restoring toilet function first, followed by a usable shower, before completing finish work. We're transparent about each phase's timeline so you can plan accordingly.",
  },
  {
    q: "How much does a walk-in shower installation cost?",
    a: "Walk-in shower costs range widely by size and finish level. A standard tub-to-shower conversion in a 60-inch alcove with ceramic tile, basic glass, and mid-grade fixtures runs $8,000–$14,000. A mid-grade standalone walk-in shower (36×48 or 48×48 inches) with porcelain tile, frameless glass, and Kohler or Moen fixtures runs $12,000–$22,000. A large luxury walk-in shower (60 inches or wider, with bench, niche, large-format tile, rain head, and frameless glass) runs $22,000–$40,000+. Natural stone, steam generator, and body sprays add cost. Construction Station provides itemized estimates so you can see exactly where the money goes before any work begins. Licensed CSLB #1108879.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a as string },
  })),
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

      <ServiceCityLinksStrip serviceKey="bathroom-remodeling" />

      <CtaSection
        heading="Design the bathroom you've sketched in your head."
        subheading="Free in-home design consultation. We bring the swatches and the renderings."
        showForm
      />
    </>
  );
}
