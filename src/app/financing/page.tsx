import type { Metadata } from "next";
import Script from "next/script";
import { CS } from "@/lib/constants";
import JsonLd from "@/components/JsonLd";
import TrustBar from "@/components/TrustBar";

export const metadata: Metadata = {
  title: "Home Improvement Financing | HELOC, RenoFi & More",
  description:
    "Financing options for kitchen remodels, bathroom renovations, ADU construction, and flooring — HELOC, RenoFi renovation loans, construction loans, and Enhancify. Serving the Inland Empire since 2008. CSLB #1108879.",
  alternates: { canonical: "/financing" },
};

const SELLING_POINTS = [
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" strokeLinecap="round" />
        <path d="M2 12h2M20 12h2M12 2v2M12 20v2" strokeLinecap="round" />
      </svg>
    ),
    title: "Loans from $1,000 to $100,000+",
    body: "Whether it's a bathroom refresh or a full home renovation, we have financing options sized for your project.",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" strokeLinecap="round" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" strokeLinecap="round" />
      </svg>
    ),
    title: "Multiple Lender Options",
    body: "We work with a network of lenders to match you with competitive rates and terms that fit your budget.",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" strokeLinecap="round" />
      </svg>
    ),
    title: "Quick Approval Process",
    body: "Get a decision in minutes — not days. Soft credit check to see your options with no impact on your score.",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Competitive Rates",
    body: "Our Enhancify partnership gives homeowners access to rates typically reserved for borrowers with excellent credit.",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 11l3 3L22 4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" strokeLinecap="round" />
      </svg>
    ),
    title: "No Prepayment Penalties",
    body: "Pay off your loan early at any time with no fees. Your project, your timeline, your terms.",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Choose Your Project",
    body: "Pick the renovation you've been dreaming about — kitchen, bath, ADU, room addition, or anything else we build.",
  },
  {
    number: "02",
    title: "Apply in Minutes",
    body: "Complete a quick application powered by Enhancify. Checking your rate uses a soft pull with no impact on your credit score.",
  },
  {
    number: "03",
    title: "Get Approved & Pick Your Plan",
    body: "Review your offers from multiple lenders. Choose the rate and monthly payment that works for your household budget.",
  },
  {
    number: "04",
    title: "We Start Building",
    body: "Once funding is confirmed, your project goes on our schedule. Same licensed crew, same quality — just a smarter way to pay for it.",
  },
];

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://constructionstation.com";

export default function FinancingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        name: CS.name,
        url: SITE_URL,
        telephone: CS.phone,
        email: CS.email,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Inland Empire",
          addressRegion: "CA",
          addressCountry: "US",
        },
        foundingDate: String(CS.founded),
        identifier: CS.license,
      },
      {
        "@type": "FinancialService",
        name: `${CS.name} — Home Improvement Financing`,
        url: `${SITE_URL}/financing`,
        description:
          "Home improvement financing through Enhancify — loans from $1,000 to $100,000+ for kitchen remodeling, bathroom renovations, and home construction projects in the Inland Empire.",
        areaServed: {
          "@type": "AdministrativeArea",
          name: "Inland Empire, CA",
        },
        provider: {
          "@type": "Organization",
          name: "Enhancify",
          url: "https://www.enhancify.com",
        },
      },
    ],
  };

  return (
    <>
      <JsonLd data={schema} />

      {/* Enhancify script — loaded after page is interactive */}
      <Script
        src="https://www.enhancify.com/fullpagewidget/"
        strategy="lazyOnload"
      />

      {/* Hero */}
      <section className="relative bg-navy texture-navy text-white pt-36 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 80% 30%, rgba(201,162,39,0.25) 0%, transparent 55%)",
          }}
        />
        <div className="absolute top-32 right-10 hidden md:flex items-center gap-3">
          <div className="w-12 h-px bg-gold" />
          <div className="text-gold text-[10px] tracking-[0.4em] uppercase">
            Home Improvement Financing
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-5 lg:px-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-px bg-gold" />
              <span className="text-gold text-xs uppercase tracking-[0.4em]">
                Powered by Enhancify
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1] mb-7">
              Flexible Financing for Your{" "}
              <span className="italic text-gold">Home Project</span>
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-2xl mb-9 leading-relaxed">
              Don&rsquo;t let budget hold back your dream kitchen, bathroom, or home
              renovation. We&rsquo;ve partnered with Enhancify to offer flexible
              payment plans with competitive rates.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#apply"
                className="bg-gold text-navy font-body font-semibold px-7 py-4 uppercase tracking-[0.2em] text-sm hover:bg-gold-light transition-colors text-center"
              >
                Check My Rate
              </a>
              <a
                href={CS.phoneHref}
                className="border border-white/40 text-white px-7 py-4 uppercase tracking-[0.2em] text-sm hover:border-gold hover:text-gold transition-colors text-center"
              >
                Call {CS.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Financing Options Overview */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-px bg-gold" />
              <span className="text-gold text-xs uppercase tracking-[0.4em]">Financing Options</span>
              <span className="w-10 h-px bg-gold" />
            </div>
            <h2 className="font-display text-navy text-4xl md:text-5xl lg:text-6xl leading-[1] mb-4">
              Six ways to <span className="italic text-gold">fund your project.</span>
            </h2>
            <p className="text-navy/65 max-w-2xl mx-auto leading-relaxed">
              From HELOCs to RenoFi renovation loans, the right financing
              depends on your equity, existing mortgage, and project scope.
              Here&rsquo;s how each option compares.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                name: "HELOC",
                full: "Home Equity Line of Credit",
                how: "Revolving credit line secured by your home's equity — borrow as needed, up to your credit limit.",
                best: "Homeowners with significant equity who want flexible timing as project costs are incurred.",
                note: "Variable rate; capped by current appraised value.",
              },
              {
                name: "Home Equity Loan",
                full: "Lump-Sum at Fixed Rate",
                how: "Single loan secured by home equity, paid in a lump sum at a fixed interest rate — like a second mortgage.",
                best: "Homeowners who want a fixed monthly payment and have enough equity to cover the full project.",
                note: "Rates typically lower than personal loans; limited to current equity.",
              },
              {
                name: "RenoFi Loan",
                full: "After-Renovation Value Lending",
                how: "Lends against your home's projected after-renovation value rather than current equity — borrow significantly more without refinancing your first mortgage.",
                best: "Homeowners with limited current equity whose property value will rise substantially after the project.",
                note: "Available through RenoFi partner lenders. Ideal for ADU projects.",
              },
              {
                name: "Cash-Out Refinance",
                full: "Replace Mortgage + Take Equity",
                how: "Replace your existing mortgage with a larger loan and receive the equity difference in cash at closing.",
                best: "Homeowners whose current rate is at or above today's rates — refinancing doesn't cost much more than holding.",
                note: "Raising your mortgage rate significantly can offset the benefit of lower project financing costs.",
              },
              {
                name: "Construction Loan",
                full: "Draw-Based Build Financing",
                how: "Short-term loan that funds construction in draws (staged payments), then converts to a permanent mortgage at project completion.",
                best: "Homeowners funding a large ADU or room addition who want to consolidate into a long-term mortgage.",
                note: "Requires two closings with fees. Lender reviews your plans and contractor credentials.",
              },
              {
                name: "FHA 203(k)",
                full: "FHA Renovation Mortgage",
                how: "FHA-backed loan that combines a home purchase or refinance with renovation costs into a single mortgage.",
                best: "Buyers purchasing a home with ADU or renovation plans, or refinancing homeowners adding major renovation costs.",
                note: "FHA loan limits apply. Requires FHA-approved contractor and HUD consultant.",
              },
            ].map((opt) => (
              <div key={opt.name} className="border border-navy/10 p-7 hover:border-gold transition-colors">
                <div className="text-gold text-xs uppercase tracking-[0.3em] mb-1">{opt.name}</div>
                <div className="font-display text-navy text-xl mb-4">{opt.full}</div>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="text-navy/40 text-xs uppercase tracking-wider mb-0.5">How It Works</div>
                    <p className="text-navy/70 leading-relaxed">{opt.how}</p>
                  </div>
                  <div>
                    <div className="text-navy/40 text-xs uppercase tracking-wider mb-0.5">Best For</div>
                    <p className="text-navy/70 leading-relaxed">{opt.best}</p>
                  </div>
                  <div className="border-t border-navy/10 pt-3">
                    <p className="text-navy/50 text-xs leading-relaxed">{opt.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RenoFi Partnership Highlight */}
      <section className="bg-cream py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-px bg-gold" />
                <span className="text-gold text-xs uppercase tracking-[0.4em]">RenoFi Partnership</span>
              </div>
              <h2 className="font-display text-navy text-3xl md:text-4xl lg:text-5xl leading-[1] mb-5">
                Borrow based on your home&rsquo;s{" "}
                <span className="italic text-gold">future value.</span>
              </h2>
              <p className="text-navy/75 leading-relaxed mb-4">
                We&rsquo;ve partnered with RenoFi to offer renovation loans
                based on your home&rsquo;s after-renovation value — so you can
                borrow up to 11&times; more than a traditional HELOC without
                refinancing your existing mortgage.
              </p>
              <p className="text-navy/70 leading-relaxed mb-4">
                Traditional HELOCs are capped by what your home is worth
                today. A RenoFi loan uses what your home will be worth after
                the ADU, kitchen, or addition is complete — unlocking equity
                that doesn&rsquo;t exist yet. This is particularly powerful
                for ADU projects where a $200,000 build can add $200,000–
                $300,000 to your property value.
              </p>
              <p className="text-navy/70 leading-relaxed">
                RenoFi loans are originated through partner lenders (not
                RenoFi directly). We can connect you with a lender in our
                network who offers this product and is experienced with
                Inland Empire ADU and renovation financing.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-navy text-white p-8">
                <div className="text-gold text-xs uppercase tracking-[0.4em] mb-4">RenoFi vs. Traditional HELOC</div>
                <div className="space-y-4">
                  {[
                    { label: "Based on", heloc: "Current home value", renofi: "After-renovation value" },
                    { label: "Refinance required?", heloc: "No", renofi: "No" },
                    { label: "Borrowing capacity", heloc: "Limited by equity now", renofi: "Based on future value" },
                    { label: "Ideal for", heloc: "Quick equity access", renofi: "Large renovation / ADU" },
                  ].map((row) => (
                    <div key={row.label} className="grid grid-cols-3 gap-2 text-sm border-b border-white/10 pb-3">
                      <div className="text-white/50">{row.label}</div>
                      <div className="text-white/70">{row.heloc}</div>
                      <div className="text-gold font-semibold">{row.renofi}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 grid grid-cols-3 gap-2 text-xs text-white/30 text-center">
                  <div />
                  <div>HELOC</div>
                  <div className="text-gold">RenoFi</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Per-Service Financing Ranges */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-px bg-gold" />
              <span className="text-gold text-xs uppercase tracking-[0.4em]">Project Budgets</span>
              <span className="w-10 h-px bg-gold" />
            </div>
            <h2 className="font-display text-navy text-4xl md:text-5xl lg:text-6xl leading-[1]">
              Typical financing by{" "}
              <span className="italic text-gold">project type.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                service: "Kitchen Remodel",
                range: "$30K–$80K",
                typical: "Most Inland Empire kitchen remodels fall in the $40K–$70K range. Semi-custom cabinetry, quartz countertops, and appliance upgrades. Full custom remodels with structural changes run $80K–$150K.",
                href: "/services/kitchen-remodeling",
              },
              {
                service: "Bathroom Remodel",
                range: "$15K–$50K",
                typical: "Standard full bathroom remodels run $20K–$35K. Master suites with custom walk-in showers and heated floors reach $45K–$80K. Walk-in shower conversion from a tub alcove: $8K–$18K.",
                href: "/services/bathroom-remodeling",
              },
              {
                service: "ADU Construction",
                range: "$85K–$400K+",
                typical: "Garage conversions: $85K–$160K. Junior ADUs: $100K–$175K. Detached 1-bedroom ADUs: $175K–$280K. Detached 2-bedroom ADUs: $240K–$400K. All-in pricing including permits, design, and finishes.",
                href: "/services/adu",
              },
              {
                service: "Flooring Installation",
                range: "$5K–$25K",
                typical: "Whole-home LVP or laminate installation (1,200–2,000 sq ft): $8K–$18K. Hardwood: $12K–$28K. Tile in kitchen and bathrooms: $5K–$15K. Includes subfloor prep, removal, and trim.",
                href: "/services/flooring-installation-yucaipa-ca",
              },
            ].map((svc) => (
              <div key={svc.service} className="border border-navy/10 p-7 hover:border-gold transition-colors group flex flex-col">
                <div className="font-display text-navy text-2xl mb-1 group-hover:text-gold transition-colors">{svc.service}</div>
                <div className="text-gold text-3xl font-display mb-4">{svc.range}</div>
                <p className="text-navy/65 text-sm leading-relaxed mb-5 flex-1">{svc.typical}</p>
                <a
                  href={svc.href}
                  className="text-gold text-xs uppercase tracking-[0.3em] hover:text-navy transition-colors flex items-center gap-2 mt-auto"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>
          <div className="mt-10 max-w-3xl mx-auto text-center">
            <p className="text-navy/60 text-sm leading-relaxed">
              We also work with local construction loan specialists for larger
              projects — ADUs, room additions, and full home renovations.{" "}
              <a href={CS.phoneHref} className="text-gold hover:text-navy transition-colors">
                Contact us for a referral
              </a>.
            </p>
          </div>
        </div>
      </section>

      {/* Selling points */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-px bg-gold" />
              <span className="text-gold text-xs uppercase tracking-[0.4em]">Why Finance With Us</span>
              <span className="w-10 h-px bg-gold" />
            </div>
            <h2 className="font-display text-navy text-4xl md:text-5xl lg:text-6xl leading-[1]">
              Built around your <span className="italic text-gold">budget.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SELLING_POINTS.map((pt) => (
              <div
                key={pt.title}
                className="border border-navy/10 p-8 hover:border-gold transition-colors group"
              >
                <div className="w-12 h-12 bg-gold/10 border border-gold/30 flex items-center justify-center text-gold mb-5 group-hover:bg-gold/20 transition-colors">
                  {pt.icon}
                </div>
                <h3 className="font-display text-navy text-xl mb-3">{pt.title}</h3>
                <p className="text-navy/65 text-sm leading-relaxed">{pt.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhancify widget */}
      <section id="apply" className="bg-cream py-20 lg:py-24 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-px bg-gold" />
              <span className="text-gold text-xs uppercase tracking-[0.4em]">Apply Now</span>
              <span className="w-10 h-px bg-gold" />
            </div>
            <h2 className="font-display text-navy text-4xl md:text-5xl leading-[1] mb-4">
              Check your rate in <span className="italic text-gold">minutes.</span>
            </h2>
            <p className="text-navy/65 max-w-xl mx-auto text-sm leading-relaxed">
              No hard credit inquiry to see your options. Checking your rate has zero
              impact on your credit score.
            </p>
          </div>

          <div
            id="fullpagewidget"
            data-color1="#68BA62"
            data-color2="#1C418C"
            data-coBrandedColor="#FFFFFF"
            data-page="9922630"
            data-hideLink="0"
            className="min-h-[400px]"
          />

          <div className="text-center mt-6">
            <a
              href="https://www.enhancify.com/construction-station"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy/60 hover:text-gold text-sm transition-colors inline-flex items-center gap-1.5"
            >
              View our Enhancify page
              <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-px bg-gold" />
              <span className="text-gold text-xs uppercase tracking-[0.4em]">The Process</span>
              <span className="w-10 h-px bg-gold" />
            </div>
            <h2 className="font-display text-navy text-4xl md:text-5xl lg:text-6xl leading-[1]">
              How financing <span className="italic text-gold">works.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {STEPS.map((step, i) => (
              <div key={step.number} className="relative">
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-[calc(100%-1rem)] w-8 h-px bg-gold/30 z-0" />
                )}
                <div className="relative z-10">
                  <div className="font-display text-gold text-5xl leading-none mb-4 opacity-60">
                    {step.number}
                  </div>
                  <h3 className="font-display text-navy text-xl mb-3">{step.title}</h3>
                  <p className="text-navy/65 text-sm leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy texture-navy text-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-5 lg:px-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-px bg-gold" />
            <span className="text-gold text-xs uppercase tracking-[0.4em]">Get Started</span>
            <span className="w-10 h-px bg-gold" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1] mb-4">
            Questions about <span className="italic text-gold">financing?</span>
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto leading-relaxed">
            Our team will walk you through your options before you apply —
            including which financing type fits your project, equity position,
            and goals. Free consultation, no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={CS.phoneHref}
              className="inline-flex items-center justify-center gap-3 bg-gold text-navy font-body font-semibold px-8 py-4 uppercase tracking-[0.2em] text-sm hover:bg-yellow-400 transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Call {CS.phone}
            </a>
            <a
              href="https://calendly.com/constructionstation-sales/free-adu-remodeling-consult"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-white/30 text-white font-body px-8 py-4 hover:border-gold hover:text-gold transition-colors uppercase tracking-[0.2em] text-sm"
            >
              Book Free Consultation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
