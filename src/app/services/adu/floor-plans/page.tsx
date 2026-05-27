import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ServiceHero from "@/components/ServiceHero";
import JsonLd from "@/components/JsonLd";
import { CS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "ADU Floor Plans Inland Empire | Construction Station",
  description:
    "12 sample ADU floor plans from 400 to 1,200 sq ft — studios, 1-bedrooms, 2-bedrooms, and 3-bedrooms. Detached, attached, and garage-conversion layouts customized to your lot. Inland Empire ADU contractor since 2008.",
  alternates: { canonical: "/services/adu/floor-plans" },
};

const CALENDLY_URL =
  "https://calendly.com/constructionstation-sales/free-adu-remodeling-consult";

// Public Supabase bucket folder holding the 3D renderings and 2D plan PDFs.
const PLAN_ASSET_BASE =
  "https://ihvgrybmtngekmfjpxnz.supabase.co/storage/v1/object/public/user-assets/1/ADU%20Plans/";

type FloorPlan = {
  name: string;
  size: string;
  beds: string;
  type: string;
  price: string; // dollar amount only; rendered as "Est. {price} All-In"
  image?: string; // filename in PLAN_ASSET_BASE; omit when coming soon
  pdf?: string; // filename in PLAN_ASSET_BASE; omit when coming soon
  comingSoon?: boolean;
};

const PLANS: FloorPlan[] = [
  { name: "The Yucaipa",        size: "400 sq ft",   beds: "Studio / 1ba", type: "Garage Conversion", price: "$200K", comingSoon: true },
  { name: "The Redlands",       size: "499 sq ft",   beds: "1bd / 1ba",    type: "Detached",     price: "$235K", image: "1779910725950-3d-1br1ba499.png",  pdf: "1779901312791-1br1ba499.pdf" },
  { name: "The Highland",       size: "550 sq ft",   beds: "1bd / 1ba",    type: "Detached",     price: "$258K", image: "1779910725016-3d-1br1ba550.png",  pdf: "1779901313749-1br1ba550.pdf" },
  { name: "The Loma Linda",     size: "749 sq ft",   beds: "1bd / 1ba",    type: "Detached",     price: "$300K", image: "1779910726961-3d-1br1ba749.png",  pdf: "1779901314421-1br1ba749.pdf" },
  { name: "The San Bernardino", size: "756 sq ft",   beds: "1bd / 1ba",    type: "Detached",     price: "$302K", image: "1779910720690-3d-1br1ba756.png",  pdf: "1779901315194-1br1ba756.pdf" },
  { name: "The Beaumont",       size: "999 sq ft",   beds: "1bd / 1ba",    type: "Detached",     price: "$375K", image: "1779910723947-3d-1br1ba999.png",  pdf: "1779901316446-1br1ba999.pdf" },
  { name: "The Fontana",        size: "749 sq ft",   beds: "2bd / 2ba",    type: "Detached",     price: "$300K", image: "1779910719762-3d-2br2ba749.png",  pdf: "1779901317217-2br2ba749.pdf" },
  { name: "The Ontario",        size: "800 sq ft",   beds: "2bd / 2ba",    type: "Detached",     price: "$320K", image: "1779910718081-3d-2br2ba800.png",  pdf: "1779901317974-2br2ba800.pdf" },
  { name: "The Rancho",         size: "999 sq ft",   beds: "2bd / 2ba",    type: "Detached",     price: "$375K", image: "1779910716807-3d-2br2ba999.png",  pdf: "1779901318793-2br2ba999.pdf" },
  { name: "The Murrieta",       size: "1,200 sq ft", beds: "2bd / 2ba",    type: "With Garage",  price: "$435K", image: "1779910721755-3d-2br2ba1200.jpeg", pdf: "1779901319495-2br2ba1200.pdf" },
  { name: "The Palm Desert",    size: "1,155 sq ft", beds: "3bd / 2ba",    type: "2-Story",      price: "$423K", image: "1779910722713-3d-3br2ba1155.png",  pdf: "1779901320177-3br2ba1155.pdf" },
  { name: "The Inland",         size: "1,194 sq ft", beds: "3bd / 2ba",    type: "Detached",     price: "$432K", image: "1779910719101-3d-3br2ba1194.jpeg", pdf: "1779901302440-3br2ba1194.pdf" },
];

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://constructionstation.com";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "ADU Floor Plans",
  provider: {
    "@type": "GeneralContractor",
    name: CS.name,
    telephone: CS.phone,
    url: SITE_URL,
    identifier: CS.license,
  },
  areaServed: { "@type": "Place", name: "Inland Empire, California" },
  description:
    "Sample ADU floor plans — 12 layouts from 400 to 1,200 sq ft. Studios, 1-bedroom, 2-bedroom, and 3-bedroom configurations. Detached, attached, and garage-conversion ADUs.",
};

export default function ADUFloorPlansPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />

      <ServiceHero
        eyebrow="Service · ADU Floor Plans"
        title="Sample ADU Floor Plans"
        italicWord="Floor Plans"
        subtitle="12 layouts from 400 to 1,200 sq ft. All plans are samples — every ADU is customized to your property and local regulations."
      />

      {/* Sample-plans note */}
      <section className="bg-white py-8 border-b border-navy/10">
        <p className="max-w-3xl mx-auto px-5 lg:px-10 text-center text-navy/65 text-sm leading-relaxed">
          All plans shown are sample layouts. Every ADU is customized to your
          specific property, local regulations, and preferences. 3D renderings
          are illustrative only.
        </p>
      </section>

      {/* Plans grid */}
      <section className="bg-cream py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PLANS.map((p) => (
              <article
                key={p.name}
                className="bg-white border border-navy/10 hover:border-gold transition-colors flex flex-col"
              >
                {/* 3D image / placeholder */}
                <div className="relative aspect-[4/3] bg-navy/5 overflow-hidden">
                  {p.comingSoon || !p.image ? (
                    <>
                      <div className="absolute inset-0 flex items-center justify-center text-navy/30">
                        <div className="text-center">
                          <div className="font-display text-3xl mb-1">
                            {p.size}
                          </div>
                          <div className="text-xs uppercase tracking-[0.3em]">
                            Rendering Coming Soon
                          </div>
                        </div>
                      </div>
                      <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] uppercase tracking-wider font-semibold bg-amber-100 text-amber-900 border border-amber-200">
                        Plan Coming Soon
                      </span>
                    </>
                  ) : (
                    <Image
                      src={`${PLAN_ASSET_BASE}${p.image}`}
                      alt={`${p.name} ADU — ${p.size} ${p.beds} ${p.type} 3D rendering`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  )}
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h2 className="font-display text-navy text-2xl leading-tight mb-3">
                    {p.name}
                  </h2>

                  {/* Specs row: sqft · beds/baths · type badge */}
                  <div className="flex items-center flex-wrap gap-x-2 gap-y-2 text-sm text-navy/70 mb-3">
                    <span className="font-semibold text-navy">{p.size}</span>
                    <span className="text-navy/30" aria-hidden>
                      ·
                    </span>
                    <span className="font-semibold text-navy">{p.beds}</span>
                    <span className="inline-block px-2.5 py-1 text-[10px] uppercase tracking-wider font-semibold bg-navy/5 text-navy/70 border border-navy/10">
                      {p.type}
                    </span>
                  </div>

                  <div className="text-gold font-semibold mb-5">
                    Est. {p.price} All-In
                  </div>

                  {/* Buttons */}
                  <div className="mt-auto grid grid-cols-2 gap-3">
                    {p.comingSoon || !p.pdf ? (
                      <span
                        aria-disabled="true"
                        className="inline-flex items-center justify-center gap-2 border border-navy/15 text-navy/30 font-body uppercase tracking-[0.2em] text-xs py-3 cursor-not-allowed"
                      >
                        View 2D Plan
                      </span>
                    ) : (
                      <a
                        href={`${PLAN_ASSET_BASE}${p.pdf}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 border border-navy/30 text-navy font-body uppercase tracking-[0.2em] text-xs py-3 hover:border-gold hover:text-gold transition-colors"
                      >
                        View 2D Plan
                      </a>
                    )}
                    <a
                      href={CALENDLY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-navy text-white font-body uppercase tracking-[0.2em] text-xs py-3 hover:bg-gold hover:text-navy transition-colors"
                    >
                      Discuss This Plan
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pricing disclaimer */}
          <p className="mt-14 max-w-3xl mx-auto text-center text-navy/65 text-sm leading-relaxed border-t border-navy/10 pt-8">
            Pricing shown is estimated all-in cost based on typical IE market
            conditions. Actual costs vary based on site conditions, city fees,
            finish selections, and utility connections. Schedule a free
            consultation for a detailed estimate on your specific property.
          </p>

          {/* Footer note */}
          <p className="mt-4 max-w-3xl mx-auto text-center text-navy/65 text-sm leading-relaxed">
            All floor plans are samples and starting points. Final plans are
            engineered and stamped for your specific property and city
            requirements.
          </p>
        </div>
      </section>

      {/* City pre-approved plans CTA */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-5 lg:px-10">
          <div className="bg-cream border-l-4 border-gold p-8 text-center">
            <h2 className="font-display text-navy text-2xl md:text-3xl leading-tight mb-3">
              Looking for a City Pre-Approved Plan?
            </h2>
            <p className="text-navy/75 leading-relaxed mb-6 max-w-xl mx-auto">
              Many IE cities offer free pre-approved ADU plans that can save
              $6,000–$14,000 in design fees. Check your city&rsquo;s page for
              available plans.
            </p>
            <Link
              href="/services/adu#cities"
              className="inline-flex items-center justify-center gap-2 border border-navy/30 text-navy px-7 py-4 text-sm uppercase tracking-[0.2em] hover:border-gold hover:text-gold transition-colors"
            >
              View City Plans
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy texture-navy text-white py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-5 lg:px-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-px bg-gold" />
            <span className="text-gold text-xs uppercase tracking-[0.4em]">
              Like one of these?
            </span>
            <span className="w-10 h-px bg-gold" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl leading-[1] mb-5">
            Book your free{" "}
            <span className="italic text-gold">ADU consultation</span>.
          </h2>
          <p className="text-white/70 mb-10 text-base leading-relaxed max-w-xl mx-auto">
            Pick the plan that&rsquo;s closest, and we&rsquo;ll customize it to
            your lot, your jurisdiction, and your budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-gold text-navy font-body font-semibold px-8 py-4 text-base hover:bg-yellow-400 transition-colors tracking-wide uppercase"
            >
              Book Free ADU Consultation
              <span aria-hidden>→</span>
            </a>
            <Link
              href="/services/adu"
              className="inline-flex items-center justify-center gap-3 border border-white/40 text-white px-8 py-4 text-base hover:border-gold hover:text-gold transition-colors font-body tracking-wide uppercase"
            >
              Back to ADU Overview
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
