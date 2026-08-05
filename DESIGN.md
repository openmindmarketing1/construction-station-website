# DESIGN.md — Construction Station

Brand contract for all design work on constructionstation.com. Every render,
page, and component must conform to this document. Product truth (audience,
positioning, evidence rules) lives in [PRODUCT.md](PRODUCT.md); this file owns
the visual system.

## Brand Identity

- **Name:** Construction Station
- **Tagline:** "Building Dreams Across the Inland Empire"
- **Positioning:** the established, trustworthy choice — operating since 2008,
  CA licensed #1108879, BBB A+. The design must read as substantial, proven,
  and premium-but-approachable; never trendy-startup, never budget-flyer.
- **Feel:** editorial craftsmanship. Navy authority, gold accents used like
  gilding — sparingly, for emphasis and proof moments.

## Color

Defined in `tailwind.config.ts` and `src/app/globals.css` (`--navy`, `--gold`,
`--cream`). Use the Tailwind tokens, not raw hex, in new code.

| Token | Hex | Role |
|---|---|---|
| `navy` (DEFAULT) | `#1a2744` | Primary brand color; headings, body text, dark sections |
| `navy-light` | `#243256` | Hover/elevated navy surfaces |
| `navy-800` | `#1e2f50` | Mid navy surface |
| `navy-dark` / `navy-900` | `#111b2f` | Deepest navy; footers, overlays |
| `gold` (DEFAULT) | `#c9a227` | Accent: CTAs, underlines, icons, highlights |
| `gold-light` | `#e2b83a` | Gold hover state |
| `gold-dark` | `#a88320` | Gold pressed/border state |
| `gold-50` | `#fdf8e8` | Pale gold tint backgrounds |
| `cream` | `#faf8f3` | Warm off-white page/section background |
| `background` | `#ffffff` | Base page background |

Rules:
- Gold is an accent, never a text color on cream/white at body sizes
  (contrast); gold text is allowed only on navy backgrounds or at large
  display sizes with care.
- Body text on light backgrounds is navy, not gray-on-gray.
- Alternate cream and white section backgrounds; navy sections for proof/CTA
  moments with gold accents.

## Typography

Loaded via `next/font/google` in `src/app/layout.tsx`:

- **Display:** DM Serif Display (`font-display`, `--font-display`), fallback
  Georgia/serif. Headlines, section titles, stat numbers.
- **Body:** Plus Jakarta Sans (`font-body`, `--font-body`), fallback
  system-ui/sans-serif. Everything else.

Do not introduce new font families. Display serif + humanist sans is the
brand's editorial signature.

## Signature Details

Utilities in `src/app/globals.css` — reuse these rather than reinventing:

- `.clip-diagonal`, `.clip-diagonal-reverse`, `.clip-diagonal-bottom` —
  diagonal section edges; the site's structural motif.
- `.gold-underline` — 60px × 3px gold rule under key headings.
- `.texture-cream`, `.texture-navy`, `.diagonal-pattern` — subtle dot/line
  textures; keep opacity at current levels (≤ 0.08).
- `.hero-overlay` — gradient scrim over hero imagery/video.

## Motion

Stack: GSAP (+ ScrollTrigger), Framer Motion, Lenis smooth scroll — wired in
`src/lib/design-system/` (`SmoothScroll.tsx`, `ScrollAnimations.ts`,
`animations.ts`).

- Reuse the shared animation helpers; don't add ad-hoc scroll listeners.
- Never set CSS `scroll-behavior: smooth` — it fights Lenis.
- Motion is reveal-on-scroll and subtle emphasis (`fade-in`, `bounce-slow`);
  no gratuitous parallax or long blocking intros. Respect
  `prefers-reduced-motion`.

## Components

Reuse the existing library in `src/components/` before building new:
`Header`, `Footer`, `HeroVideo`, `ServiceHero`, `ServicesGrid`,
`ServiceCarousel`, `ServiceGallery`, `BeforeAfterSlider`, `TrustBar`,
`WhyChooseUs`, `ReviewsSection`, `ProcessSteps`, `FAQAccordion`,
`CtaSection`, `FloatingCTA`, `KitchenQuickForm`, `FlooringQuickForm`,
`CalendlyEmbed`/`CalendlyWidget`, `ServiceAreaSection`, `ServiceCityPage`,
`LeadMagnetCard`, `JsonLd`.

City/service landing pages compose from `ServiceCityPage` and
`src/lib/service-city-pages.ts` / `src/lib/adu-cities.ts` — extend the data,
not the layout, for new locales.

## Voice & Content

- Confident, plainspoken contractor voice; benefit-led, no hype adjectives
  stacked ("luxurious", "premium" sparingly and concretely).
- Proof elements (license #1108879, since 2008, BBB A+, review counts) appear
  near every conversion point. Never fabricate reviews, project counts,
  pricing, or timelines (see PRODUCT.md · Evidence on Hand).
- Every page keeps a call path visible: phone 909-797-6333, quote form, or
  Calendly, within one scroll.

## Layout & Accessibility

- Mobile-first; primary traffic is mobile ad clicks. Tap targets ≥ 44px;
  sticky/floating CTA must not cover content on small screens.
- WCAG AA contrast minimum (navy on cream/white passes; check any gold usage).
- Preserve Core Web Vitals: no new render-blocking scripts, keep hero media
  optimized — ad Quality Score depends on it.

## Anti-patterns (do not)

- No new accent colors, gradients outside the navy/gold family, or font swaps.
- No pure-black text or gray-on-gray body copy.
- No emoji as UI iconography in new surfaces (legacy service icons aside).
- No dark-mode variant — the brand ships one light, warm theme.
