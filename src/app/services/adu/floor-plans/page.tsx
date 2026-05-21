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

const CALENDLY_URL = "https://calendly.com/constructionstation-sales/free-adu-remodeling-consult";

type FloorPlan = {
  name: string;
  size: string;
  beds: string;
  type: string;
  price: string;
  image?: string;
};

const PLANS: FloorPlan[] = [
  { name: "The Yucaipa",         size: "400 sq ft",   beds: "Studio / 1ba", type: "Garage Conversion", price: "Est. $200K all-in", image: "/images/adu/floor-plans/yucaipa-3d.jpg" },
  { name: "The Redlands",        size: "500 sq ft",   beds: "1bd / 1ba",    type: "Detached", price: "Est. $235K all-in" },
  { name: "The Highland",        size: "600 sq ft",   beds: "1bd / 1ba",    type: "Detached", price: "Est. $255K all-in" },
  { name: "The Loma Linda",      size: "650 sq ft",   beds: "1bd / 1ba",    type: "Attached", price: "Est. $275K all-in" },
  { name: "The San Bernardino",  size: "750 sq ft",   beds: "2bd / 1ba",    type: "Detached", price: "Est. $300K all-in" },
  { name: "The Beaumont",        size: "800 sq ft",   beds: "2bd / 1ba",    type: "Detached", price: "Est. $320K all-in" },
  { name: "The Fontana",         size: "900 sq ft",   beds: "2bd / 2ba",    type: "Detached", price: "Est. $345K all-in" },
  { name: "The Ontario",         size: "950 sq ft",   beds: "2bd / 2ba",    type: "Attached", price: "Est. $360K all-in" },
  { name: "The Rancho",          size: "1,000 sq ft", beds: "2bd / 2ba",    type: "Detached", price: "Est. $375K all-in" },
  { name: "The Murrieta",        size: "1,100 sq ft", beds: "2bd / 2ba",    type: "Detached", price: "Est. $410K all-in" },
  { name: "The Palm Desert",     size: "1,150 sq ft", beds: "3bd / 2ba",    type: "Detached", price: "Est. $423K all-in" },
  { name: "The Inland",          size: "1,200 sq ft", beds: "3bd / 2ba",    type: "Detached", price: "Est. $435K all-in" },
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

      {/* Plans grid */}
      <section className="bg-cream py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PLANS.map((p) => (
              <article
                key={p.name}
                className="bg-white border border-navy/10 hover:border-gold transition-colors flex flex-col"
              >
                {/* Image / placeholder */}
                <div className="relative aspect-[4/3] bg-navy/5 overflow-hidden">
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={`${p.name} ADU floor plan — ${p.size} ${p.beds}, ${p.type}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-navy/30">
                      <div className="text-center">
                        <div className="font-display text-3xl mb-1">{p.size}</div>
                        <div className="text-xs uppercase tracking-[0.3em]">
                          Render coming soon
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="text-gold text-xs tracking-[0.3em] uppercase mb-2">
                    {p.type}
                  </div>
                  <h2 className="font-display text-navy text-2xl leading-tight mb-2">
                    {p.name}
                  </h2>
                  <div className="text-gold font-semibold mb-4">{p.price}</div>
                  <div className="grid grid-cols-2 gap-3 text-sm text-navy/70 mb-6 pb-6 border-b border-navy/10">
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-navy/40 mb-1">
                        Size
                      </div>
                      <div className="font-semibold text-navy">{p.size}</div>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-navy/40 mb-1">
                        Beds / Baths
                      </div>
                      <div className="font-semibold text-navy">{p.beds}</div>
                    </div>
                  </div>
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center justify-center gap-2 bg-navy text-white font-body uppercase tracking-[0.2em] text-xs py-3 hover:bg-gold hover:text-navy transition-colors"
                  >
                    Discuss This Plan
                    <span aria-hidden>→</span>
                  </a>
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
            Pick the plan that&rsquo;s closest, and we&rsquo;ll customize it
            to your lot, your jurisdiction, and your budget.
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
