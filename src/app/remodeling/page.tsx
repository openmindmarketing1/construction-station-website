import type { Metadata } from "next";
import Image from "next/image";
import JsonLd from "@/components/JsonLd";
import CtvCallBar from "@/components/CtvCallBar";
import CtvQuickForm from "@/components/CtvQuickForm";
import CtvCalendlyEmbed from "@/components/CtvCalendlyEmbed";
import { CS, REVIEWS } from "@/lib/constants";

// Connected-TV landing page. Reached ONLY by scanning a QR code off a
// television spot, so every assumption here is phone-first: one hand, a couch,
// a 390px-wide screen.
//
// Four things are load-bearing and must not drift:
//
//  1. PHONE. The only number on this page is CS.ctvPhone — (909) 316-3032, the
//     CTV tracking line. The office line (909) 797-6333 appears in the site
//     header, footer and floating CTA, so all three are suppressed for this
//     route by BareRouteGate in the root layout. A tap on any of them would
//     have attributed a TV-driven call to the office number instead.
//
//  2. VIBE PIXEL. Inherited from the root layout (advertiser MuZz4z), which is
//     the reason this page belongs on constructionstation.com and not on
//     openmindmarketing.ai — the pixel is installed here and nowhere else.
//     Lead events fire on tap-to-call, form success, and Calendly booking.
//
//  3. NOINDEX. It must not compete with the rest of the site or pick up
//     organic traffic that would muddy CTV attribution. No canonical, not in
//     the sitemap, not linked from anywhere.
//
//  4. LEAD ENDPOINT. CtvQuickForm posts to /api/leads/callback, NOT to
//     CS.leadsApiUrl — that one is a 404 (see the note in constants.ts).
export const metadata: Metadata = {
  title: {
    absolute: "Home Remodeling in the Inland Empire | Construction Station",
  },
  description:
    "Kitchens, bathrooms, additions, ADUs and flooring by one licensed local crew. Free in-home consultation. CSLB #1108879.",
  // Deliberately noindex — TV traffic only. No canonical: a canonical on a
  // noindexed page sends mixed signals about which URL should rank.
  robots: { index: false, follow: false, nocache: true },
};

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://constructionstation.com";

// Deliberately mixed across trades — the whole point of this page is that
// Construction Station is not a one-room contractor.
const GALLERY = [
  {
    src: "https://www.openmindmarketing.ai/images/kitchen/kitchen-hero-main.jpg",
    alt: "Kitchen remodel completed by Construction Station in the Inland Empire",
  },
  {
    src: "https://ihvgrybmtngekmfjpxnz.supabase.co/storage/v1/object/public/user-assets/business-1/Bathroom%20Images/v3/bathroom-master-luxury-v3.jpg",
    alt: "Luxury master bathroom with a freestanding soaking tub and marble finishes",
  },
  {
    src: "https://ihvgrybmtngekmfjpxnz.supabase.co/storage/v1/object/public/user-assets/business-1/ADU%20Images/v3/adu-detached-day-v3.jpg",
    alt: "Detached accessory dwelling unit built in a backyard",
  },
  {
    src: "https://ihvgrybmtngekmfjpxnz.supabase.co/storage/v1/object/public/user-assets/business-1/Kitchen%20Images/v3/kitchen-open-concept-v3.jpg",
    alt: "Open-concept kitchen transformation with a large island",
  },
];

const SCOPES = [
  {
    title: "Kitchens",
    blurb:
      "Custom cabinetry, quartz and granite counters, tile backsplashes, and open-concept conversions that take out the wall you've always hated.",
  },
  {
    title: "Bathrooms",
    blurb:
      "Walk-in showers, freestanding tubs, double vanities, heated floors — from a guest-bath refresh to a full master suite.",
  },
  {
    title: "Room Additions",
    blurb:
      "Bedrooms, family rooms, home offices and second-story additions, framed and finished to match the house you already have.",
  },
  {
    title: "ADUs",
    blurb:
      "Detached and attached backyard homes, plus garage conversions — permits to keys, built to California code.",
  },
  {
    title: "Flooring",
    blurb:
      "Hardwood, luxury vinyl plank, tile and large-format porcelain, installed level with proper subfloor prep. It's where this company started.",
  },
  {
    title: "Whole-Home",
    blurb:
      "Windows and doors, patio covers and outdoor living. One contractor, one contract, one crew that shows up.",
  },
];

const STEPS: Array<[string, string, string]> = [
  ["01", "Call or scan", "Tell us what you're thinking. Two minutes on the phone."],
  ["02", "Free in-home visit", "We measure, look at what's there, and talk budget honestly."],
  ["03", "Written line-item quote", "Within 5 business days. No surprise upcharges."],
  ["04", "We build it", "Our own W-2 crew. Two-year workmanship warranty."],
];

// LocalBusiness schema carries the CTV number deliberately — this page's
// telephone is the tracking line, not the office line.
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/remodeling`,
  name: CS.name,
  description:
    "General remodeling contractor serving the Inland Empire — kitchens, bathrooms, room additions, ADUs and flooring. Licensed CSLB #1108879.",
  telephone: CS.ctvPhone,
  url: `${SITE_URL}/remodeling`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "33145 Yucaipa Blvd",
    addressLocality: "Yucaipa",
    addressRegion: "CA",
    postalCode: "92399",
    addressCountry: "US",
  },
  areaServed: [
    "Inland Empire, CA",
    "San Bernardino County, CA",
    "Riverside County, CA",
  ],
  priceRange: "$$$",
};

export default function CtvRemodelingPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />

      {/* pb-24 reserves room for the FIXED call bar on phones; from lg the bar is
          a normal inline element, so the reserved space goes away with it. */}
      <div className="pb-24 lg:pb-0">
        {/* 1. Hero — everything that matters is above the fold at 390px. */}
        <section className="relative bg-navy texture-navy text-white px-5 pt-6 pb-8 overflow-hidden">
          <div
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(ellipse at 75% 15%, rgba(201,162,39,0.28) 0%, transparent 55%)",
            }}
          />
          {/* lg: two columns — logo + copy + CTAs on the left, video on the
              right. Placement is explicit (col-start/row-start) rather than
              source order, so the MOBILE DOM order is untouched: logo, video,
              then copy, exactly as it was. */}
          <div className="relative max-w-2xl mx-auto md:max-w-3xl lg:max-w-6xl lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-center lg:py-8">
            {/* Branding. The site header is suppressed on this route (its links
                point at the office line), so the logo is placed here as a
                standalone, non-navigating element — a QR scanner needs to see
                whose ad they just scanned, but must not be handed a way out of
                the page or a second phone number. */}
            {/* cs-logo-mark.png, not cs-logo.png: the original is a 5001x5000
                square that is ~75% transparent padding, so it rendered as a
                150px SQUARE with the wordmark marooned in the middle and ate
                ~100px of the fold. This is the same artwork trimmed to its
                alpha bounds (600x202). Declared width/height match the real
                ratio so nothing shifts as it loads. */}
            <Image
              src="/images/logo/cs-logo-mark.png"
              alt="Construction Station Flooring and Design"
              width={600}
              height={202}
              priority
              className="w-[170px] h-auto mb-4 brightness-0 invert md:w-[200px] lg:w-[230px] lg:col-start-1 lg:row-start-1 lg:mb-6 lg:self-end"
            />

            {/* The same kitchen transformation the TV spot opens with, so a
                viewer who just scanned the QR recognises it instantly. */}
            <div className="relative mb-5 overflow-hidden border border-white/15 bg-navy-dark lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:self-center lg:mb-0 lg:shadow-2xl">
              <video
                className="w-full h-auto block"
                src="/video/cs-kitchen-transformation.mp4"
                poster="/images/video/cs-kitchen-transformation-poster.jpg"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Kitchen transformation: dated oak cabinets become a white open-concept kitchen with a quartz island"
              />
            </div>

            <div className="lg:col-start-1 lg:row-start-2 lg:self-start">
            <div className="text-gold text-[10px] tracking-[0.35em] uppercase mb-3 md:text-[11px]">
              As Seen on TV · Inland Empire
            </div>
            <h1 className="font-display text-[2rem] leading-[1.05] sm:text-5xl mb-3 lg:text-6xl lg:mb-4">
              Remodel it once.{" "}
              <span className="italic text-gold">Do it right.</span>
            </h1>
            <p className="text-white/85 text-[15px] leading-relaxed mb-5 md:text-lg lg:mb-7">
              Kitchens, bathrooms, additions, ADUs and flooring — built by one
              licensed local crew that has been at it since {CS.founded}.
            </p>

            {/* Primary action. Big, thumb-height, first thing they can hit.
                Stacked full-width on a phone; side by side from md, where a
                full-width button would look like a mistake. */}
            <div className="md:flex md:gap-3">
            <a
              href={CS.ctvPhoneHref}
              className="flex items-center justify-center gap-3 w-full bg-gold text-navy font-body font-bold text-xl py-5 tracking-wide active:bg-gold-light md:flex-1 hover:bg-gold-light transition-colors"
            >
              <svg
                className="w-6 h-6 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <path
                  d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {CS.ctvPhone}
            </a>
            {/* Second primary CTA. Deliberately labelled as a CALL, not a
                consultation or an estimate — the Calendly event is a 30-minute
                phone call, and someone who books expecting a van in their
                driveway with a quote has been misled by us, not by Calendly. */}
            <a
              href="#calendly"
              className="flex items-center justify-center gap-3 w-full bg-white text-navy font-body font-bold text-lg py-4 mt-3 tracking-wide active:bg-white/90 md:flex-1 md:mt-0 md:py-5 md:text-xl hover:bg-white/90 transition-colors"
            >
              <svg
                className="w-5 h-5 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <rect x="3" y="5" width="18" height="16" rx="2" />
                <path d="M3 10h18M8 3v4M16 3v4" strokeLinecap="round" />
              </svg>
              Book a 30-Minute Call
            </a>
            </div>
            <p className="text-white/60 text-xs leading-relaxed mt-3 md:text-sm">
              A phone call with our team to talk through what you&rsquo;re
              planning and answer your questions. Not a site visit, and not a
              quote &mdash; just a conversation about your project.
            </p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-6 text-white/60 text-[11px] uppercase tracking-[0.18em]">
              <span>CSLB {CS.license}</span>
              <span className="text-gold">·</span>
              <span>BBB {CS.bbb}</span>
              <span className="text-gold">·</span>
              <span>Since {CS.founded}</span>
              <span className="text-gold">·</span>
              <span>5★ Rated</span>
            </div>
            </div>
          </div>
        </section>

        {/* 2. What we build — the generalisation from one trade to all of them. */}
        <section className="bg-cream px-5 py-12 md:px-8 md:py-16 lg:py-20">
          <div className="max-w-2xl mx-auto md:max-w-3xl lg:max-w-5xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-px bg-gold" />
              <span className="text-gold-deep text-[10px] uppercase tracking-[0.35em]">
                What We Build
              </span>
            </div>
            <h2 className="font-display text-navy text-3xl leading-tight md:text-4xl lg:text-5xl mb-7">
              One contractor for the{" "}
              <span className="italic text-gold-deep">whole house</span>.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-5 lg:grid-cols-3">
              {SCOPES.map((s) => (
                <div key={s.title} className="bg-white border border-navy/10 p-5">
                  <div className="font-display text-navy text-xl mb-1">
                    {s.title}
                  </div>
                  <p className="text-navy/70 text-sm leading-relaxed md:text-base">{s.blurb}</p>
                </div>
              ))}
            </div>
            <p className="text-navy/70 text-sm leading-relaxed mt-6">
              Most of our clients start with one room and keep going. Because
              it&rsquo;s the same crew, the same project manager and the same
              contract, the second project is always easier than the first.
            </p>
          </div>
        </section>

        {/* 3. Work */}
        <section className="bg-white px-5 py-12 md:px-8 md:py-16 lg:py-20">
          <div className="max-w-2xl mx-auto md:max-w-3xl lg:max-w-5xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-px bg-gold" />
              <span className="text-gold-deep text-[10px] uppercase tracking-[0.35em]">
                Our Work
              </span>
            </div>
            <h2 className="font-display text-navy text-3xl leading-tight md:text-4xl lg:text-5xl mb-6">
              Real projects,{" "}
              <span className="italic text-gold-deep">real homes</span>.
            </h2>
            <div className="space-y-3 md:grid md:grid-cols-2 md:gap-4 md:space-y-0">
              {GALLERY.map((img, i) => (
                <div key={img.src} className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    priority={i === 0}
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 640px"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Process */}
        <section className="bg-navy texture-navy text-white px-5 py-12 md:px-8 md:py-16 lg:py-20">
          <div className="max-w-2xl mx-auto md:max-w-3xl lg:max-w-5xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-px bg-gold" />
              <span className="text-gold text-[10px] uppercase tracking-[0.35em]">
                How It Works
              </span>
            </div>
            <h2 className="font-display text-3xl leading-tight md:text-4xl lg:text-5xl mb-8">
              Four steps. <span className="italic text-gold">No mystery.</span>
            </h2>
            <div className="space-y-6 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-8 md:space-y-0 lg:grid-cols-4">
              {STEPS.map(([n, title, desc]) => (
                <div key={n} className="flex gap-4">
                  <div className="font-display text-gold text-2xl leading-none shrink-0 w-9">
                    {n}
                  </div>
                  <div>
                    <div className="font-display text-xl leading-tight mb-1">
                      {title}
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Reviews */}
        <section className="bg-cream px-5 py-12 md:px-8 md:py-16 lg:py-20">
          <div className="max-w-2xl mx-auto md:max-w-3xl lg:max-w-5xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-px bg-gold" />
              <span className="text-gold-deep text-[10px] uppercase tracking-[0.35em]">
                Reviews
              </span>
            </div>
            <h2 className="font-display text-navy text-3xl leading-tight md:text-4xl lg:text-5xl mb-6">
              What neighbors <span className="italic text-gold-deep">say</span>.
            </h2>
            <div className="space-y-4 md:grid md:grid-cols-3 md:gap-4 md:space-y-0">
              {REVIEWS.slice(0, 3).map((r) => (
                <div key={r.name} className="bg-white border border-navy/10 p-5">
                  <div className="text-gold-deep text-sm tracking-widest mb-2">
                    {"★".repeat(r.stars)}
                  </div>
                  <p className="text-navy/75 text-sm leading-relaxed mb-3">
                    &ldquo;{r.text}&rdquo;
                  </p>
                  <div className="text-navy/50 text-xs uppercase tracking-[0.2em]">
                    {r.name} · {r.date}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Book a time — the CTV-specific Calendly event (30-min phone
            call). scroll-mt keeps the heading clear of the sticky call bar
            when the hero CTA jumps here. */}
        <section id="calendly" className="bg-white px-5 py-12 scroll-mt-4 md:px-8 md:py-16 lg:py-20">
          <div className="max-w-2xl mx-auto md:max-w-3xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-px bg-gold" />
              <span className="text-gold-deep text-[10px] uppercase tracking-[0.35em]">
                Book a Call
              </span>
            </div>
            <h2 className="font-display text-navy text-3xl leading-tight md:text-4xl lg:text-5xl mb-4">
              Pick a time that{" "}
              <span className="italic text-gold-deep">works</span>.
            </h2>
            {/* Say what the appointment IS, right above the picker. */}
            <p className="text-navy/70 text-base leading-relaxed mb-6">
              Thirty minutes on the phone with our team &mdash; we&rsquo;ll go
              through what you&rsquo;re thinking about, answer your questions,
              and tell you honestly what your project is likely to involve.
              It&rsquo;s not a site visit and it&rsquo;s not a quote; if it
              makes sense to come out and measure after that, we&rsquo;ll set
              that up separately.
            </p>
            <CtvCalendlyEmbed />
          </div>
        </section>

        {/* 7. Callback form */}
        <section id="callback" className="bg-cream px-5 py-12 scroll-mt-4 md:px-8 md:py-16 lg:py-20">
          <div className="max-w-2xl mx-auto md:max-w-2xl">
            <CtvQuickForm />
          </div>
        </section>

        {/* 8. Closing CTA + minimal legal footer. The full site footer is
            suppressed on this route (it links the office line). */}
        <section className="bg-navy texture-navy text-white px-5 py-12 md:px-8 md:py-16 lg:py-20 lg:pb-8">
          <div className="max-w-2xl mx-auto text-center md:max-w-3xl">
            <h2 className="font-display text-3xl leading-tight md:text-4xl lg:text-5xl mb-3">
              Ready when you are.
            </h2>
            <p className="text-white/65 text-sm leading-relaxed mb-7">
              We answer during business hours and return missed calls within 30
              minutes.
            </p>
            {/* Hidden at lg: from there the (inline, no longer fixed) call bar
                sits directly below this section and carries the same action —
                two identical gold buttons 100px apart reads as a mistake. */}
            <a
              href={CS.ctvPhoneHref}
              className="flex items-center justify-center gap-3 w-full bg-gold text-navy font-body font-bold text-xl py-5 tracking-wide active:bg-gold-light lg:hidden"
            >
              {CS.ctvPhone}
            </a>
            <div className="text-white/40 text-[11px] leading-relaxed mt-8">
              {CS.name} · CSLB {CS.license}
              <br />
              33145 Yucaipa Blvd, Yucaipa, CA 92399
              <br />
              Licensed, bonded and insured. Serving San Bernardino and Riverside
              Counties.
            </div>
          </div>
        </section>
      </div>

      <CtvCallBar />
    </>
  );
}
