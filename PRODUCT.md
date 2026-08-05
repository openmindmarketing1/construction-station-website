# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Homeowners in the Inland Empire, CA (Riverside/San Bernardino counties and desert cities — Yucaipa, Redlands, Riverside, Norco, Eastvale, Perris, Palm Springs, Cathedral City, Palm Desert, and neighbors) researching and hiring a licensed general contractor for a remodel, addition, or ADU. Secondary audience: local business owners needing commercial tenant improvements and buildouts. Users typically arrive from Google Ads or organic search on a specific service + city, compare a few contractors, and convert by calling or submitting a lead form / booking a Calendly consultation.

## Product Purpose

Marketing and lead-generation website for Construction Station, a licensed Inland Empire general contractor (CA license #1108879). The site exists to turn service/city search traffic into qualified leads: phone calls to 909-797-6333, quote-form submissions (posted to the Open Mind Marketing leads API), and booked consultations. Success is measured in lead volume and cost per lead across Google Ads (GA4 G-CG9QRL26H7) and organic.

## Positioning

Longevity and trust: operating since 2008, CA licensed #1108879, BBB A+ rated, with a substantial verified review base. The safe, established choice among Inland Empire contractors — a claim newer or unlicensed competitors cannot truthfully make.

## Operating Context

Prospects evaluate contractors on proof: license number, years in business, BBB rating, reviews, and photos of completed work (before/after sliders, project galleries). The site carries SEO surfaces — per-service pages, per-city area pages (`src/app/areas/[city]`), service+city landing pages, a 70+ question FAQ, a blog (fed from the OMM CMS via `src/lib/omm-blog.ts`), financing and ADU-guide resources. Lead capture runs through quick-quote forms, a floating CTA, and Calendly embeds.

## Capabilities and Constraints

- Next.js 14 (App Router) + Tailwind, deployed on Vercel; production deploys via `git push origin master`.
- Services: kitchen remodeling, bathroom remodeling, room additions, windows & doors, outdoor living/patio covers, ADUs, flooring, general contracting, commercial TI. All services matter for lead generation, with kitchen & bath remodels a highlighted priority.
- Leads post to `https://openmindmarketing.ai/api/leads/landing` (businessId 1); Supabase keys are env-driven; public assets live in the OMM Supabase `user-assets` bucket.
- Root layout appends "| Construction Station" to every page title; use `title.absolute` to avoid doubling.
- Animation stack: GSAP, Framer Motion, Lenis smooth scroll (`src/lib/design-system`).

## Brand Commitments

- Name: Construction Station. Tagline: "Building Dreams Across the Inland Empire."
- Incumbent palette: navy (#1a2744 family) + gold (#c9a227 family) on cream (#faf8f3), defined in `tailwind.config.ts`.
- Verified social profiles linked in the footer: Facebook, Instagram, LinkedIn, YouTube, TikTok (@constructionstation).

## Evidence on Hand

- CA contractor license #1108879, founded 2008, BBB A+ (in `src/lib/constants.ts`).
- Real customer reviews surfaced on `/reviews`; project photos/galleries under `public/` and the OMM Supabase asset bucket.
- Do not fabricate testimonials, project counts, pricing, or completion timelines not present in these sources.

## Product Principles

- Every page is a lead surface: a visible path to call, quote form, or booking within one scroll.
- Proof over promises: license, years, BBB rating, and real reviews/photos anchor trust claims.
- Local relevance wins: service + city specificity in content, titles, and schema drives both SEO and conversion.
- Preserve page speed: ad landing quality and Core Web Vitals directly affect cost per lead.
