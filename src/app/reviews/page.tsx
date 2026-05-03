import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import TrustBar from "@/components/TrustBar";
import CtaSection from "@/components/CtaSection";
import { CS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Customer Reviews",
  description:
    "See what Inland Empire homeowners say about Construction Station. 5.0 stars on Google. Licensed contractor serving Redlands, Yucaipa, Riverside, and surrounding cities since 2008.",
  alternates: { canonical: "/reviews" },
};

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://constructionstation.com";

// Google Business Profile CID: 8346061725681242502
// Write-review URL: replace placeid with the value from GBP → Get more reviews → Share review form
const GOOGLE_MAPS_URL = "https://www.google.com/maps?cid=8346061725681242502";
const GOOGLE_REVIEW_URL = "https://g.page/r/CYbRtpDrKtNzEAE/review";

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-5 h-5 text-gold" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 1l2.928 6.001 6.572.962-4.75 4.626 1.121 6.535L10 16.022l-5.871 3.102 1.121-6.535L.5 7.963l6.572-.962L10 1z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  const schema = {
    "@context": "https://schema.org",
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
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "17",
      bestRating: "5",
      worstRating: "1",
    },
  };

  return (
    <>
      <JsonLd data={schema} />

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
          <div className="text-gold text-[10px] tracking-[0.4em] uppercase">Google Verified</div>
        </div>

        <div className="relative max-w-7xl mx-auto px-5 lg:px-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-10 h-px bg-gold" />
            <span className="text-gold text-xs uppercase tracking-[0.4em]">Client Reviews</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1] mb-8 max-w-3xl">
            What Our{" "}
            <span className="italic text-gold">Customers</span> Say
          </h1>

          {/* Rating block */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-10">
            <div className="flex items-center gap-4 bg-white/10 border border-white/20 px-6 py-4">
              <div className="font-display text-5xl text-gold leading-none">5.0</div>
              <div>
                <Stars />
                <div className="text-white/70 text-sm mt-1">17 Google Reviews</div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Verified on Google
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-navy font-body font-semibold px-7 py-4 uppercase tracking-[0.2em] text-sm hover:bg-gold-light transition-colors text-center"
            >
              Leave Us a Review
            </a>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/40 text-white px-7 py-4 uppercase tracking-[0.2em] text-sm hover:border-gold hover:text-gold transition-colors text-center"
            >
              See All Reviews on Google
            </a>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Why reviews matter */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-px bg-gold" />
                <span className="text-gold text-xs uppercase tracking-[0.4em]">Your Voice Matters</span>
              </div>
              <h2 className="font-display text-navy text-4xl md:text-5xl leading-[1.05] mb-6">
                Honest feedback
                <br />
                <span className="italic text-gold">builds trust.</span>
              </h2>
              <p className="text-navy/75 leading-relaxed mb-5">
                Your feedback helps us improve and helps other homeowners find a
                contractor they can trust. Every review — whether it&rsquo;s a quick
                five stars or a detailed story — makes a real difference for the
                families searching for help with their next project.
              </p>
              <p className="text-navy/75 leading-relaxed mb-8">
                We read every review personally. When something went exceptionally well,
                we share it with the crew. When something fell short of expectations,
                we use it to do better on the next job.
              </p>
              <a
                href={GOOGLE_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-navy text-white font-body font-semibold px-7 py-4 uppercase tracking-[0.2em] text-sm hover:bg-gold hover:text-navy transition-colors"
              >
                Write a Review
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
              </a>
            </div>

            <div className="space-y-5">
              {[
                {
                  icon: "★",
                  title: "It Only Takes 2 Minutes",
                  body: "A sentence or two about your experience is all it takes. You don't need to write an essay — just share what stood out.",
                },
                {
                  icon: "🏠",
                  title: "Help Your Neighbors",
                  body: "Inland Empire homeowners rely on Google reviews to find contractors they can trust. Your experience could guide someone else's biggest investment.",
                },
                {
                  icon: "→",
                  title: "No Account Required",
                  body: "If you have a Google account, leaving a review takes seconds. Your review is published immediately and helps future homeowners right away.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-5 p-5 border border-navy/10 hover:border-gold transition-colors">
                  <div className="text-gold text-2xl font-display leading-none shrink-0 pt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-display text-navy text-lg mb-1">{item.title}</div>
                    <div className="text-navy/65 text-sm leading-relaxed">{item.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Short link callout */}
      <section className="bg-cream py-14">
        <div className="max-w-3xl mx-auto px-5 lg:px-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-px bg-gold" />
            <span className="text-gold text-xs uppercase tracking-[0.4em]">Quick Link</span>
            <span className="w-10 h-px bg-gold" />
          </div>
          <h2 className="font-display text-navy text-3xl md:text-4xl mb-4">
            Share the link with friends
          </h2>
          <p className="text-navy/65 mb-6">
            Know someone who had work done with us? Send them here.
          </p>
          <div className="inline-flex items-center gap-3 bg-white border border-navy/15 px-6 py-3 font-body text-navy text-sm">
            <span className="text-gold">→</span>
            constructionstation.com/review
          </div>
        </div>
      </section>

      <CtaSection
        heading="Ready to start your project?"
        subheading="Free design session — normally $299. Book yours today and see why our customers keep coming back."
      />
    </>
  );
}
