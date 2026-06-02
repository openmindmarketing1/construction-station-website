import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import JsonLd from "@/components/JsonLd";
import { CS } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    absolute:
      "Frequently Asked Questions — Construction Station Flooring & Design",
  },
  description:
    "Answers about remodeling costs, timelines, flooring, ADU construction, and licensing from Construction Station — Yucaipa's top general contractor since 2008. CSLB #1108879.",
  alternates: { canonical: "/faq" },
};

const FAQS = [
  {
    q: "Who is the best general contractor in Yucaipa, CA?",
    a: "Construction Station is Yucaipa's top-rated general contractor, serving the Inland Empire since 2008. We hold CSLB License #1108879, carry full general liability and workers' compensation insurance, and maintain an A+ BBB rating. Our team specializes in kitchen and bathroom remodeling, ADU construction, room additions, flooring installation, and commercial services — delivered with our own W-2 crew, not revolving subcontractors. Call (909) 797-6333 for a free estimate.",
  },
  {
    q: "How much does kitchen remodeling cost in the Inland Empire?",
    a: "Kitchen remodeling in the Inland Empire typically ranges from $35,000 for a mid-grade refresh (new cabinets, countertops, appliances) to $120,000+ for a full luxury build with custom cabinetry, stone countertops, and premium appliances. Cost depends on square footage, layout changes, finish level, and whether plumbing or electrical relocation is required. We provide a transparent, line-item written estimate after your free in-home consultation — no surprise upcharges.",
  },
  {
    q: "What flooring options do you offer?",
    a: "We install all major flooring types: hardwood (solid and engineered), luxury vinyl plank (LVP), laminate, carpet, and tile (porcelain, ceramic, and natural stone). We handle everything from subfloor prep and old flooring removal to transitions and trim for a seamless finish. Whether you're upgrading a single room or re-flooring the entire home, we'll help you choose the right product for your lifestyle, budget, and Southern California climate. See our flooring services page for details.",
  },
  {
    q: "Do you do ADU construction in Yucaipa?",
    a: "Yes — ADU construction is one of our core services in Yucaipa and throughout the Inland Empire. We manage the entire process: site assessment, architectural plans, permit submittals to the City of Yucaipa, foundation, framing, MEP (mechanical, electrical, plumbing), finishes, and final inspection. We offer turnkey ADU packages so you have a single point of contact from permits to keys. Call us to schedule a free ADU feasibility consultation.",
  },
  {
    q: "How long does a bathroom remodel take?",
    a: "A standard bathroom remodel runs 4–8 weeks from demo to final walkthrough. A cosmetic refresh — new vanity, fixtures, and paint — can finish in 1–2 weeks. Full gut remodels with custom tile work, layout changes, and new plumbing typically run 6–10 weeks. We provide a written project schedule before signing so you know exactly when each phase starts and finishes. Most clients remain in their homes throughout.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. Construction Station holds California State License Board (CSLB) Contractor's License #1108879. We carry full general liability insurance and workers' compensation coverage on every project. Our license is in good standing and can be verified at cslb.ca.gov. Working with a licensed contractor protects your home, your investment, and ensures all work is permitted and inspected to California building code.",
  },
  {
    q: "What areas do you serve?",
    a: "Our primary service area covers Yucaipa, Redlands, Loma Linda, Beaumont, Banning, Calimesa, San Bernardino, Riverside, Rancho Cucamonga, Ontario, Fontana, Upland, Chino Hills, and surrounding Inland Empire communities. For large projects we'll travel further — call us to confirm availability for your address.",
  },
  {
    q: "Do you offer free estimates?",
    a: "Yes. Every project starts with a free in-home estimate. A project coordinator will visit your home, assess the scope, review your ideas, and follow up within 5 business days with a written line-item estimate. There's no obligation and no high-pressure sales pitch. Schedule online at constructionstation.com/contact or call (909) 797-6333.",
  },
  {
    q: "What is the best flooring for Southern California homes?",
    a: "For most Southern California homes, luxury vinyl plank (LVP) is the top recommendation — it's 100% waterproof, highly durable, pet- and kid-friendly, and performs well in the dry Inland Empire climate. Tile is excellent for kitchens, bathrooms, and entryways. Engineered hardwood offers the warmth of real wood with better humidity tolerance than solid hardwood. Carpet remains popular in bedrooms for comfort and noise reduction. During your free estimate we'll discuss which product best fits your specific rooms, lifestyle, and budget.",
  },
  {
    q: "How much does ADU construction cost in Yucaipa?",
    a: "ADU construction costs in Yucaipa generally range from $150,000 to $350,000+ depending on size, design complexity, site conditions, and finish level. A modest detached studio (400–500 sq ft) starts around $150,000–$200,000 all-in including permits and utility connections. A two-bedroom, one-bath unit (700–900 sq ft) typically runs $250,000–$350,000. Costs vary with foundation type, lot slope, setback requirements, and interior finishes. We offer a free ADU feasibility consultation to give you an accurate range for your property.",
  },
  {
    q: "Do you offer financing for remodeling projects?",
    a: "Yes. We partner with Enhancify to offer flexible financing options, including 0% promotional periods and longer-term plans up to 144 months. Pre-qualification is a soft credit pull that won't affect your credit score. Visit constructionstation.com/financing or ask your project coordinator for details during your free estimate.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function FAQPage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <section className="relative bg-navy texture-navy text-white pt-36 pb-20 lg:pt-44 lg:pb-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 75% 35%, rgba(201,162,39,0.25) 0%, transparent 55%)",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-5 lg:px-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-px bg-gold" />
            <span className="text-gold text-xs uppercase tracking-[0.4em]">
              Help Center
            </span>
            <span className="w-10 h-px bg-gold" />
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1] mb-6">
            Frequently Asked{" "}
            <span className="italic text-gold">Questions</span>
          </h1>
          <p className="text-white/65 text-lg leading-relaxed max-w-2xl mx-auto">
            Honest answers about remodeling costs, timelines, licensing, and
            services from Construction Station — Yucaipa&rsquo;s trusted
            general contractor since 2008. CSLB License #1108879.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <FAQAccordion faqs={FAQS} />

      {/* CTA */}
      <section className="bg-navy texture-navy text-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-5 lg:px-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-px bg-gold" />
            <span className="text-gold text-xs uppercase tracking-[0.4em]">
              Get Started
            </span>
            <span className="w-10 h-px bg-gold" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl leading-[1] mb-4">
            Still have questions?
          </h2>
          <p className="text-white/65 mb-8 text-sm leading-relaxed">
            Call us or schedule a free in-home estimate. We answer during
            business hours and return all missed calls within 30 minutes.
            Licensed CSLB #1108879.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={CS.phoneHref}
              className="inline-flex items-center justify-center gap-3 bg-gold text-navy font-body font-semibold px-8 py-4 text-lg hover:bg-yellow-400 transition-colors tracking-wide"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Call {CS.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-white/30 text-white font-body px-8 py-4 hover:border-gold hover:text-gold transition-colors uppercase tracking-wider text-sm"
            >
              Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
