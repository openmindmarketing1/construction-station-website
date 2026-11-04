import type { Metadata } from "next";
import Link from "next/link";
import ServiceHero from "@/components/ServiceHero";
import FAQAccordion from "@/components/FAQAccordion";
import JsonLd from "@/components/JsonLd";
import { CS } from "@/lib/constants";
import { BUSINESS_REF, businessEntity } from "@/lib/business-schema";

export const metadata: Metadata = {
  title: "Interior & Exterior Painting",
  description:
    "Interior and exterior painting across the Inland Empire from Construction Station — on its own or as part of your remodel. Every job is quoted after a free consultation. CSLB #1108879. Call 909-797-6333.",
  alternates: { canonical: "/services/painting" },
};

const FAQS = [
  {
    q: "Do you do both interior and exterior painting?",
    a: "Yes. Construction Station does interior and exterior painting, either as its own project or as part of a kitchen, bath, room addition, or ADU we're building for you.",
  },
  {
    q: "How much does painting cost?",
    a: "Every painting job is quoted after a free consultation. The price depends on the size of the space, the surfaces, how much prep and repair they need, and the paint you choose. The consultation ends with a written, line-item quote.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Interior and Exterior Painting",
  provider: BUSINESS_REF,
  areaServed: { "@type": "Place", name: "Inland Empire, California" },
  description:
    "Interior and exterior painting across the Inland Empire, on its own or as part of a remodel. Quoted after a free consultation. CSLB #1108879.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  ...businessEntity(),
  priceRange: "$$",
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

export default function PaintingPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={faqSchema} />

      <ServiceHero
        eyebrow="Service · Painting"
        title="Interior & Exterior Painting in the Inland Empire"
        italicWord="Inland Empire"
        subtitle="Interior and exterior painting from the same licensed team that builds your remodel. Quoted after a free consultation. CSLB #1108879."
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
                Construction Station does interior and exterior painting
                across the Inland Empire. Book it as its own project, or add
                it to a kitchen, bath, room addition, or ADU we&rsquo;re
                already building, so one team handles the work from start to
                finish.
              </p>
              <p className="text-navy/75 leading-[1.8] mb-5">
                <strong className="text-navy">Interior painting</strong>{" "}
                for rooms, ceilings, trim, and doors.
              </p>
              <p className="text-navy/75 leading-[1.8] mb-5">
                <strong className="text-navy">Exterior painting</strong>{" "}
                for the outside of your home.
              </p>
              <p className="text-navy/75 leading-[1.8]">
                <strong className="text-navy">Pricing.</strong> Every painting
                job is quoted after a free consultation, with a written,
                line-item quote.
              </p>
            </div>
          </div>
        </div>
      </article>

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
              href="/services/kitchen-remodeling"
              className="bg-white border border-navy/10 p-6 hover:border-gold transition-colors group"
            >
              <div className="font-display text-navy text-2xl">Kitchen Remodeling</div>
              <div className="text-navy/60 text-sm mt-1">
                Finish it with fresh paint
              </div>
            </Link>
            <Link
              href="/services/bathroom-remodeling"
              className="bg-white border border-navy/10 p-6 hover:border-gold transition-colors group"
            >
              <div className="font-display text-navy text-2xl">Bathroom Remodeling</div>
              <div className="text-navy/60 text-sm mt-1">
                One team, start to finish
              </div>
            </Link>
            <Link
              href="/services/windows-and-doors"
              className="bg-white border border-navy/10 p-6 hover:border-gold transition-colors group"
            >
              <div className="font-display text-navy text-2xl">Windows &amp; Doors</div>
              <div className="text-navy/60 text-sm mt-1">
                Trim restored and painted
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy texture-navy text-white py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-5 lg:px-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-px bg-gold" />
            <span className="text-gold text-xs uppercase tracking-[0.4em]">Free consultation</span>
            <span className="w-10 h-px bg-gold" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl leading-[1] mb-5">
            Ready for a{" "}
            <span className="italic text-gold">fresh coat?</span>
          </h2>
          <p className="text-white/70 mb-10 text-base leading-relaxed max-w-xl mx-auto">
            Tell us what you&rsquo;d like painted, inside or out. Your free
            consultation ends with a written quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={CS.phoneHref}
              className="inline-flex items-center justify-center gap-3 bg-gold text-navy font-body font-semibold px-8 py-4 text-base hover:bg-yellow-400 transition-colors tracking-wide"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Call {CS.phone}
            </a>
            <Link
              href="/contact"
              className="border border-white/40 text-white px-8 py-4 text-base hover:border-gold hover:text-gold transition-colors text-center font-body"
            >
              Request a Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
