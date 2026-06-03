import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ServiceHero from "@/components/ServiceHero";
import TrustBar from "@/components/TrustBar";
import ProcessSteps from "@/components/ProcessSteps";
import FAQAccordion from "@/components/FAQAccordion";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import KitchenQuickForm from "@/components/KitchenQuickForm";
import JsonLd from "@/components/JsonLd";
import { CS } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    absolute:
      "Kitchen Remodel Yucaipa CA — Licensed Kitchen Remodeler | Construction Station",
  },
  description:
    "Construction Station is Yucaipa's kitchen remodeler — custom cabinets, quartz countertops, tile work, and open-concept transformations. Free in-home consultation. CSLB #1108879. (909) 797-6333.",
  alternates: { canonical: "/kitchen-remodeler-yucaipa-ca" },
};

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://constructionstation.com";

const GALLERY = [
  {
    src: "https://www.openmindmarketing.ai/images/kitchen/kitchen-hero-main.jpg",
    alt: "Kitchen remodel completed by Construction Station in Yucaipa CA",
  },
  {
    src: "https://ihvgrybmtngekmfjpxnz.supabase.co/storage/v1/object/public/user-assets/business-1/Kitchen%20Images/v3/kitchen-modern-v3.jpg",
    alt: "Modern Yucaipa kitchen remodel with shaker cabinets and quartz island",
  },
  {
    src: "https://ihvgrybmtngekmfjpxnz.supabase.co/storage/v1/object/public/user-assets/business-1/Kitchen%20Images/v3/kitchen-open-concept-v3.jpg",
    alt: "Open-concept kitchen transformation — Yucaipa CA",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Free In-Home Consultation",
    description:
      "We come to your Yucaipa home, measure the space, and discuss your vision. Normally $299 — free for new clients.",
  },
  {
    number: "02",
    title: "3D Design Rendering",
    description:
      "Photoreal renderings of your new kitchen before a single cabinet is ordered. You approve the design before demo begins.",
  },
  {
    number: "03",
    title: "Permits & Materials",
    description:
      "We pull every required permit from the City of Yucaipa Building & Safety and lock material pricing in writing before demo.",
  },
  {
    number: "04",
    title: "Expert Installation",
    description:
      "Our own licensed crew — no revolving subcontractors. The same team handles framing, electrical, plumbing, tile, and cabinetry.",
  },
  {
    number: "05",
    title: "Final Walkthrough & Warranty",
    description:
      "Punch list completed before the final invoice. Two-year workmanship warranty on every kitchen we complete.",
  },
];

const PROJECTS = [
  {
    neighborhood: "Chapman Heights, Yucaipa",
    year: "2025",
    scope: "Full gut remodel — shaker cabinets, quartz waterfall island, new hardwood floors, relocated gas range",
    before: "Closed galley layout with popcorn ceilings and laminate counters from 1988",
    after: "Open-concept L-shape, 12 ft quartz island, Wolf 36\" range, custom range hood",
    budget: "$82,000",
  },
  {
    neighborhood: "Yucaipa Village Area",
    year: "2024",
    scope: "Mid-range refresh — new Shiloh cabinetry, Cambria countertops, tile backsplash, Bosch appliance package",
    before: "Builder-grade oak cabinets with peel-and-stick backsplash",
    after: "White shaker soft-close cabinets, Calacatta Quartz counters, subway tile backsplash, under-cabinet lighting",
    budget: "$48,000",
  },
  {
    neighborhood: "Sand Creek Road Area, Yucaipa",
    year: "2024",
    scope: "Open-concept conversion — load-bearing wall removed, new island added, full cabinetry and appliance replacement",
    before: "Closed kitchen disconnected from family room — no island, no sight lines to backyard",
    after: "Open plan, 10 ft island with breakfast bar seating, waterfall quartz edge, Thermador appliance suite",
    budget: "$96,000",
  },
];

const FAQS = [
  {
    q: "How much does a kitchen remodel cost in Yucaipa CA?",
    a: "A kitchen remodel in Yucaipa CA typically ranges from $35,000 for a mid-grade refresh (new cabinets, countertops, and appliances while keeping the existing layout) up to $120,000 or more for a full luxury build with custom cabinetry, stone counters, high-end appliances, and a layout change. Most Yucaipa homeowners who do a complete transformation — new cabinets, quartz countertops, tile backsplash, flooring, and appliances — land between $50,000 and $85,000. Construction Station provides a transparent line-item quote after your free in-home consultation. No surprise upcharges, ever.",
  },
  {
    q: "Who is the best kitchen remodeler in Yucaipa?",
    a: "Construction Station has been the Inland Empire's trusted kitchen remodeler since 2008 and is headquartered locally in Yucaipa. We hold California Contractor's License #1108879, carry full liability and workers' compensation insurance, and have completed over 250 kitchens across the Inland Empire — dozens of them right here in Yucaipa neighborhoods including Chapman Heights, Yucaipa Village, and Sand Creek. Unlike national chains or big-box install crews, our team is local, our project managers are reachable, and the crew you meet on day one is the same crew that finishes your kitchen. We're rated 5 stars across Google and Houzz, and we back every kitchen with a two-year workmanship warranty.",
  },
  {
    q: "How long does a kitchen remodel take in Yucaipa?",
    a: "A full kitchen remodel in Yucaipa typically runs 6–10 weeks from demo to final walkthrough. A cosmetic refresh (cabinet refacing, new countertops only) can finish in 2–3 weeks. If your project involves moving plumbing, removing a load-bearing wall, or adding an island that requires new electrical circuits, add 2–4 weeks. City of Yucaipa Building & Safety permits for kitchen work are typically issued within 2–3 weeks, and we file for permits before demo so the permit is in hand the day work starts. We give every client a written project calendar before signing — and we hit our dates.",
  },
  {
    q: "Do you pull permits for kitchen remodels in Yucaipa?",
    a: "Yes — always. Any electrical work, plumbing change, or structural modification in a Yucaipa kitchen requires a permit from City of Yucaipa Building & Safety. We handle the entire permit process: drawings, plan submittal, fees, and all inspections. Unpermitted kitchen work can void your homeowner's insurance, create problems at resale, and leave you personally liable if something goes wrong. Construction Station is CSLB #1108879 — permitted to pull permits in Yucaipa and every other Inland Empire city.",
  },
  {
    q: "What neighborhoods in Yucaipa do you serve?",
    a: "We serve all of Yucaipa including Chapman Heights, Yucaipa Village, Sand Creek, Wildwood Canyon, County Line Road corridor, Avenue G and Tennessee Street neighborhoods, the Crafton Hills adjacent areas, and the foothills east toward Oak Glen. We also serve the surrounding communities of Redlands, Beaumont, Calimesa, Loma Linda, Banning, and the broader Inland Empire. If you're in San Bernardino County or western Riverside County, we build there.",
  },
  {
    q: "Can I stay in my Yucaipa home during the kitchen remodel?",
    a: "Yes — most of our Yucaipa clients do. We seal off the work zone with zip walls, set up a temporary kitchenette (sink, microwave, and mini-fridge) in your dining room or hallway, and clean the home daily before leaving. Demo week is the loudest and dustiest phase — a few nights at a local hotel is a reasonable option for that week only. We have relationships with extended-stay hotels in Yucaipa and Redlands for clients who prefer to be fully offsite during demo.",
  },
  {
    q: "Do you handle the kitchen design, or do I need to hire a designer?",
    a: "We handle design in-house — it's included with every full kitchen project at no additional charge. Our designer visits your Yucaipa home, measures the space, reviews your Pinterest board and lifestyle priorities, and produces photoreal 3D renderings before a single cabinet is ordered. You're welcome to bring your own designer or interior architect; we work seamlessly with outside designers and pay close attention to their specifications.",
  },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/kitchen-remodeler-yucaipa-ca`,
  name: CS.name,
  description:
    "Yucaipa's kitchen remodeler — custom cabinets, quartz countertops, open-concept transformations. Licensed CSLB #1108879.",
  telephone: CS.phone,
  url: SITE_URL,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Yucaipa",
    addressRegion: "CA",
    postalCode: "92399",
    addressCountry: "US",
  },
  areaServed: [
    "Yucaipa, CA",
    "Redlands, CA",
    "Beaumont, CA",
    "Calimesa, CA",
    "Loma Linda, CA",
    "San Bernardino, CA",
    "Inland Empire, CA",
  ],
  priceRange: "$$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "07:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "07:00",
      closes: "16:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "15:00",
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
  serviceType: "Kitchen Remodeling",
  name: "Kitchen Remodel Yucaipa CA",
  provider: {
    "@type": "GeneralContractor",
    name: CS.name,
    telephone: CS.phone,
    url: SITE_URL,
    identifier: CS.license,
  },
  areaServed: { "@type": "City", name: "Yucaipa, CA" },
  description:
    "Full-service kitchen remodeling in Yucaipa CA — custom cabinetry, quartz countertops, tile backsplash, open-concept conversions, and appliance integration. Licensed CSLB #1108879.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free in-home kitchen design consultation (normally $299)",
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

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Kitchen Remodeling", item: `${SITE_URL}/services/kitchen-remodeling` },
    { "@type": "ListItem", position: 3, name: "Kitchen Remodel Yucaipa CA", item: `${SITE_URL}/kitchen-remodeler-yucaipa-ca` },
  ],
};

export default function KitchenRemodelerYucaipaPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* 1. Hero */}
      <ServiceHero
        eyebrow="Kitchen Remodeling · Yucaipa CA"
        title="Kitchen Remodel Yucaipa CA"
        italicWord="Yucaipa CA"
        subtitle={`Yucaipa's local kitchen remodeler — custom cabinetry, quartz countertops, open-concept transformations, and tile work by our own licensed crew. Free in-home consultation. CSLB ${CS.license}.`}
      />

      {/* 2. Trust bar */}
      <TrustBar />

      {/* 3. Overview + Local Content */}
      <article className="bg-white py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-12 gap-6 mb-10 items-start">
            <div className="col-span-12 md:col-span-3">
              <div className="text-gold text-xs tracking-[0.3em] uppercase">
                Yucaipa&rsquo;s Kitchen Remodeler
              </div>
              <div className="hidden md:block w-12 h-px bg-gold mt-3" />
            </div>
            <div className="col-span-12 md:col-span-9 prose prose-lg max-w-none">
              <p className="text-navy/85 text-lg leading-[1.7] mb-6">
                Construction Station is based right here in Yucaipa. We live and
                work in the same neighborhoods we build in — Chapman Heights,
                Yucaipa Village, Sand Creek, Wildwood Canyon, and the foothills
                east toward Oak Glen. When you call us, you&rsquo;re calling a
                local team that cares about your street, not a call center routing
                jobs to whoever is available.
              </p>
              <p className="text-navy/75 leading-[1.8] mb-5">
                We&rsquo;ve completed kitchen remodels across Yucaipa for over
                fifteen years — everything from cosmetic refreshes on 1970s
                tract homes along Avenue G to full open-concept transformations
                in Chapman Heights, where homeowners are removing load-bearing
                walls and adding large quartz islands to create the indoor-outdoor
                living rooms their Yucaipa views deserve. We know the City of
                Yucaipa Building &amp; Safety permit process, what plan-check
                corrections they commonly flag, and how to get a kitchen permit
                issued in 2–3 weeks rather than 6.
              </p>
              <p className="text-navy/75 leading-[1.8] mb-5">
                California Contractor&rsquo;s License{" "}
                <strong className="text-navy">{CS.license}</strong>. Bonded and
                insured. Our crew are W-2 employees — not day-labor subs. The
                same people you meet at the design consultation are the people
                installing your cabinets.
              </p>

              <h2 className="font-display text-navy text-3xl mt-10 mb-4">
                What We Build in Yucaipa Kitchens
              </h2>
              <p className="text-navy/75 leading-[1.8] mb-4">
                Yucaipa homes have a style range that runs from mid-century ranch
                to contemporary mountain-view — and our design work reflects that.
                We build:
              </p>
              <ul className="list-none space-y-3 mb-6">
                {[
                  ["Custom cabinetry", "Fully custom-built and semi-custom options — shaker, slab, inset, and transitional styles. Hardware by Top Knobs, Emtek, and Amerock."],
                  ["Quartz & stone countertops", "Caesarstone, Cambria, Silestone, and natural granite or marble. Every slab walked in person before fabrication. Seams templated digitally."],
                  ["Open-concept conversions", "Load-bearing wall removal, beam installation, and structural engineering coordinated in-house. We build the full permit package."],
                  ["Tile backsplash & flooring", "Subway, penny tile, large-format porcelain, herringbone. Precision leveling systems for large-format floor tile without lippage."],
                  ["Appliance integration", "Wolf, Sub-Zero, Thermador, Bosch, KitchenAid. Rough-in dimensions confirmed before drywall. Venting, dedicated circuits, gas lines."],
                  ["Islands & layout optimization", "Traffic flow, prep zones, seating, prep sinks, waterfall edges, drawer dishwashers — designed around how you actually cook."],
                ].map(([title, desc]) => (
                  <li key={title} className="flex gap-3">
                    <span className="text-gold shrink-0 mt-1">→</span>
                    <span className="text-navy/75 text-base leading-relaxed">
                      <strong className="text-navy">{title}:</strong>{" "}{desc}
                    </span>
                  </li>
                ))}
              </ul>

              <h2 className="font-display text-navy text-3xl mt-10 mb-4">
                Yucaipa Neighborhoods We Serve
              </h2>
              <p className="text-navy/75 leading-[1.8] mb-4">
                We build kitchen remodels throughout Yucaipa CA and the surrounding
                Inland Empire communities:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 text-sm text-navy/70 mb-6">
                {[
                  "Chapman Heights",
                  "Yucaipa Village",
                  "Sand Creek",
                  "Wildwood Canyon",
                  "County Line Road",
                  "Tennessee Street area",
                  "Avenue G corridor",
                  "Crafton Hills area",
                  "Oak Glen road area",
                  "Redlands",
                  "Beaumont",
                  "Calimesa",
                  "Loma Linda",
                  "Banning",
                  "Inland Empire",
                ].map((n) => (
                  <span key={n} className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-gold rounded-full shrink-0" />
                    {n}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* 4. Gallery */}
      <section className="bg-cream py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-px bg-gold" />
              <span className="text-gold text-xs uppercase tracking-[0.4em]">Our Work</span>
              <span className="w-10 h-px bg-gold" />
            </div>
            <h2 className="font-display text-navy text-4xl md:text-5xl leading-[1]">
              Real kitchens, <span className="italic text-gold">Yucaipa homes</span>.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {GALLERY.map((img, i) => (
              <div
                key={img.src}
                className={`relative overflow-hidden ${
                  i === 0 ? "md:col-span-2 aspect-[16/9]" : "aspect-[4/3]"
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

      {/* 5. Before / After Project Examples */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-px bg-gold" />
              <span className="text-gold text-xs uppercase tracking-[0.4em]">
                Yucaipa Projects
              </span>
              <span className="w-10 h-px bg-gold" />
            </div>
            <h2 className="font-display text-navy text-4xl md:text-5xl leading-[1]">
              Before &amp; after:{" "}
              <span className="italic text-gold">Yucaipa kitchens we&rsquo;ve built</span>.
            </h2>
          </div>
          <div className="space-y-6 max-w-4xl mx-auto">
            {PROJECTS.map((p) => (
              <div
                key={p.neighborhood}
                className="bg-cream border border-navy/10 p-7 md:p-8 hover:border-gold transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">
                  <div>
                    <div className="text-gold text-xs tracking-[0.3em] uppercase mb-1">
                      Completed {p.year}
                    </div>
                    <div className="font-display text-navy text-2xl leading-tight">
                      {p.neighborhood}
                    </div>
                  </div>
                  <div className="font-display text-gold text-2xl shrink-0">
                    {p.budget}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="bg-white border border-navy/10 p-5">
                    <div className="text-navy/50 text-[10px] uppercase tracking-[0.3em] mb-2">
                      Before
                    </div>
                    <p className="text-navy/70 text-sm leading-relaxed">{p.before}</p>
                  </div>
                  <div className="bg-white border border-gold/30 p-5">
                    <div className="text-gold text-[10px] uppercase tracking-[0.3em] mb-2">
                      After
                    </div>
                    <p className="text-navy/70 text-sm leading-relaxed">{p.after}</p>
                  </div>
                </div>
                <p className="mt-4 text-navy/60 text-sm leading-relaxed">
                  <span className="font-semibold text-navy">Scope:</span>{" "}{p.scope}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Pricing snapshot */}
      <section className="bg-cream py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-px bg-gold" />
              <span className="text-gold text-xs uppercase tracking-[0.4em]">
                2026 Pricing
              </span>
              <span className="w-10 h-px bg-gold" />
            </div>
            <h2 className="font-display text-navy text-4xl md:text-5xl leading-[1]">
              Kitchen remodel cost in{" "}
              <span className="italic text-gold">Yucaipa CA</span>.
            </h2>
          </div>
          <div className="overflow-x-auto bg-white border border-navy/10 shadow-sm">
            <table className="w-full text-sm text-left border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-5 py-4 font-body font-semibold uppercase tracking-wider text-xs">Project Type</th>
                  <th className="px-5 py-4 font-body font-semibold uppercase tracking-wider text-xs">What&rsquo;s Included</th>
                  <th className="px-5 py-4 font-body font-semibold uppercase tracking-wider text-xs">Typical Range</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    type: "Cosmetic Refresh",
                    includes: "Cabinet refinishing or refacing, new countertops, backsplash, fixtures",
                    range: "$20,000 – $40,000",
                  },
                  {
                    type: "Mid-Range Remodel",
                    includes: "Semi-custom cabinets, quartz countertops, new appliances, tile, flooring",
                    range: "$40,000 – $75,000",
                  },
                  {
                    type: "Full Remodel",
                    includes: "New cabinets, countertops, appliances, flooring, lighting, plumbing",
                    range: "$75,000 – $100,000",
                  },
                  {
                    type: "Luxury / Open-Concept",
                    includes: "Custom cabinets, load-bearing wall removal, island, premium appliances, full design",
                    range: "$100,000 – $150,000+",
                  },
                ].map((row, i) => (
                  <tr
                    key={row.type}
                    className={`border-t border-navy/10 ${i % 2 === 1 ? "bg-cream/40" : "bg-white"}`}
                  >
                    <td className="px-5 py-4 font-semibold text-navy whitespace-nowrap">{row.type}</td>
                    <td className="px-5 py-4 text-navy/70">{row.includes}</td>
                    <td className="px-5 py-4 font-semibold text-gold whitespace-nowrap">{row.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-navy/60 text-sm leading-relaxed max-w-4xl">
            Ranges reflect 2026 Yucaipa / Inland Empire market conditions. Actual cost depends on kitchen
            size, layout changes, finish level, and appliance selections. Your free in-home consultation
            ends with a line-item estimate — no vague ranges, no bait-and-switch.
          </p>
        </div>
      </section>

      {/* 7. Process */}
      <ProcessSteps steps={STEPS} />

      {/* 8. Why Construction Station */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-px bg-gold" />
              <span className="text-gold text-xs uppercase tracking-[0.4em]">
                Why Construction Station
              </span>
              <span className="w-10 h-px bg-gold" />
            </div>
            <h2 className="font-display text-navy text-4xl md:text-5xl lg:text-6xl leading-[1]">
              Why Yucaipa homeowners{" "}
              <span className="italic text-gold">choose us</span>.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {[
              {
                title: "Local & Licensed",
                blurb: `We're based in Yucaipa, CSLB ${CS.license}, bonded and insured. When you call, a local person answers — not a scheduling bot routing to whoever is cheapest.`,
              },
              {
                title: "One Crew, One Warranty",
                blurb: "The same team handles design, permits, framing, electrical, plumbing, tile, cabinetry, and final touch-ups. No revolving subcontractors. Two-year workmanship warranty.",
              },
              {
                title: "Fixed-Price Contracts",
                blurb: "You sign a line-item contract before demo starts. The price you sign is the price you pay. Change orders only happen when you ask for them.",
              },
              {
                title: "Permits Handled",
                blurb: "We pull every permit from City of Yucaipa Building & Safety, manage inspections, and handle plan-check corrections. You never talk to City Hall.",
              },
            ].map((w) => (
              <div key={w.title} className="bg-cream border border-navy/10 p-7">
                <div className="font-display text-navy text-xl mb-2">{w.title}</div>
                <div className="text-navy/70 text-sm leading-relaxed">{w.blurb}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <FAQAccordion faqs={FAQS} />

      {/* 10. Related links */}
      <section className="bg-cream py-16">
        <div className="max-w-5xl mx-auto px-5 lg:px-10">
          <div className="text-gold text-xs tracking-[0.3em] uppercase mb-3 text-center">
            Related Resources
          </div>
          <div className="font-display text-navy text-3xl text-center mb-10">
            More from Construction Station
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <Link
              href="/services/kitchen-remodeling"
              className="bg-white border border-navy/10 p-6 hover:border-gold transition-colors group"
            >
              <div className="font-display text-navy text-xl group-hover:text-gold transition-colors">Kitchen Remodeling</div>
              <div className="text-navy/60 text-sm mt-1">Full IE service page — gallery, process, pricing</div>
            </Link>
            <Link
              href="/services/bathroom-remodeling"
              className="bg-white border border-navy/10 p-6 hover:border-gold transition-colors group"
            >
              <div className="font-display text-navy text-xl group-hover:text-gold transition-colors">Bathroom Remodeling</div>
              <div className="text-navy/60 text-sm mt-1">Walk-in showers, soaking tubs, tile work</div>
            </Link>
            <Link
              href="/contact"
              className="bg-white border border-navy/10 p-6 hover:border-gold transition-colors group"
            >
              <div className="font-display text-navy text-xl group-hover:text-gold transition-colors">Free Estimate</div>
              <div className="text-navy/60 text-sm mt-1">Request your free in-home consultation</div>
            </Link>
          </div>
        </div>
      </section>

      {/* 11. Calendly */}
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
              Book your free 60-minute kitchen design consultation for your Yucaipa
              home. Normally $299 — free for new clients. No obligation, no
              high-pressure pitch. CSLB {CS.license}.
            </p>
          </div>
          <CalendlyEmbed />
        </div>
      </section>

      {/* 12. Call CTA */}
      <section className="bg-navy texture-navy text-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-5 lg:px-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-px bg-gold" />
            <span className="text-gold text-xs uppercase tracking-[0.4em]">Ready Now?</span>
            <span className="w-10 h-px bg-gold" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl leading-[1] mb-4">
            Call Yucaipa&rsquo;s kitchen remodeler.
          </h2>
          <p className="text-white/65 mb-8 text-sm leading-relaxed max-w-md mx-auto">
            Speak with a local project coordinator right now. We answer during business
            hours and return missed calls within 30 minutes. CSLB {CS.license}.
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

      {/* 13. Contact form */}
      <section className="bg-cream py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-px bg-gold" />
                <span className="text-gold text-xs uppercase tracking-[0.4em]">Free Estimate</span>
              </div>
              <h2 className="font-display text-navy text-4xl md:text-5xl leading-[1.05] mb-5">
                Prefer us to{" "}
                <span className="italic text-gold">call you?</span>
              </h2>
              <p className="text-navy/70 leading-relaxed mb-6">
                Leave your name and number and we&rsquo;ll reach out within 2
                business hours to discuss your Yucaipa kitchen project.
              </p>
              <div className="space-y-3 text-sm text-navy/70">
                {[
                  "Response within 2 business hours",
                  "Free in-home estimate included",
                  "Written quote within 5 business days",
                  `Licensed CSLB ${CS.license} · No obligation, ever`,
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="w-5 h-5 bg-gold/20 border border-gold flex items-center justify-center text-gold text-xs font-bold shrink-0">✓</span>
                    {item}
                  </div>
                ))}
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
