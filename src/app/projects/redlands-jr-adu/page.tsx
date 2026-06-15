import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { CS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Junior ADU in Redlands — Making Room for Family",
  description:
    "How Construction Station built a 465 sq ft Junior ADU in Redlands, CA for a family needing multigenerational housing — on budget and on schedule. See the project details.",
  alternates: { canonical: "/projects/redlands-jr-adu" },
};

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://constructionstation.com";
const SB = "https://ihvgrybmtngekmfjpxnz.supabase.co/storage/v1/object/public/user-assets/";

const ADU_PHOTOS = [
  `${SB}1/Jr%20ADU%20Redlands/1781284267634-IMG_4468.jpeg`,
  `${SB}1/Jr%20ADU%20Redlands/1781284265236-IMG_4469.jpeg`,
];

const CALENDLY_URL =
  "https://calendly.com/constructionstation-sales/free-adu-remodeling-consult";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Junior ADU in Redlands — Making Room for Family",
  description:
    "A 465 sq ft Junior ADU in Redlands, CA — new construction incorporating two existing home walls to control cost. $200K all-in budget met.",
  url: `${SITE_URL}/projects/redlands-jr-adu`,
  datePublished: "2026-06-15",
  dateModified: "2026-06-15",
  author: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: CS.name,
  },
  publisher: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: CS.name,
    logo: { "@type": "ImageObject", url: `${SITE_URL}/images/logo/cs-logo.png` },
  },
  about: {
    "@type": "Service",
    serviceType: "Junior ADU Construction",
    areaServed: { "@type": "City", name: "Redlands", addressRegion: "CA" },
  },
};

const SECTIONS = [
  {
    label: "The Goal",
    heading: "Space for family, close to home.",
    body: "A Redlands couple wanted a Junior ADU so a family member could move in and help around the home — multigenerational living without the cost of a full detached unit. The priority was privacy, a proper bedroom and bathroom, and staying within a realistic budget.",
  },
  {
    label: "The Solution",
    heading: "465 sq ft. New construction. Two shared walls.",
    body: "We designed a 465 sq ft 1-bedroom / 1-bathroom Junior ADU as new construction, deliberately incorporating two existing walls of the main home into the build. Sharing those walls eliminated significant framing cost and reduced the project's structural scope — a common JADU strategy that can save $15,000–$25,000 versus a fully standalone addition.",
  },
  {
    label: "The Numbers",
    heading: "~$200K all-in. Budget met.",
    body: "Total project cost landed at approximately $200,000. Construction accounted for roughly $175,000; the balance covered design, structural engineering, Title 24 energy compliance, and permit fees. Fixed-price contract — no change orders beyond owner-requested scope.",
  },
  {
    label: "The Timeline",
    heading: "Design to keys in under a year.",
    body: "Design and city approvals ran through late 2025. Construction broke ground at the end of March 2026. Completion is scheduled for end of June 2026 — on schedule.",
  },
];

const META_CHIPS = [
  { label: "Location", value: "Redlands, CA" },
  { label: "Type", value: "Junior ADU (JADU)" },
  { label: "Size", value: "465 sq ft" },
  { label: "Beds / Baths", value: "1 BD / 1 BA" },
  { label: "Budget", value: "~$200K all-in" },
  { label: "Status", value: "In Progress" },
];

export default function RedlandsJrADUPage() {
  return (
    <>
      <JsonLd data={articleSchema} />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative bg-navy texture-navy pt-40 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #F5A623 0, #F5A623 1px, transparent 0, transparent 50%)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream to-transparent" />

        <div className="relative max-w-7xl mx-auto px-5 lg:px-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-white/40 text-xs tracking-wide mb-8">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services/adu" className="hover:text-gold transition-colors">ADU</Link>
            <span>/</span>
            <span className="text-white/60">Redlands Jr ADU</span>
          </nav>

          <div className="flex items-center gap-3 mb-5">
            <span className="w-10 h-px bg-gold" />
            <span className="text-gold text-xs uppercase tracking-[0.4em]">
              Featured Project
            </span>
          </div>
          <h1 className="font-display text-white text-4xl md:text-6xl lg:text-7xl leading-[1] mb-8 max-w-4xl">
            Junior ADU in Redlands —{" "}
            <span className="italic text-gold">Making Room for Family</span>
          </h1>

          {/* Meta chips */}
          <div className="flex flex-wrap gap-3 mt-10">
            {META_CHIPS.map((chip) => (
              <div
                key={chip.label}
                className="flex items-center gap-2 border border-white/20 px-4 py-2"
              >
                <span className="text-white/45 text-xs uppercase tracking-wider">
                  {chip.label}
                </span>
                <span className="w-px h-3 bg-white/20" />
                <span className="text-white text-sm font-semibold">{chip.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Project Sections ─────────────────────────────────────────── */}
      <article className="bg-cream py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-5 lg:px-10">
          <div className="space-y-20">
            {SECTIONS.map((section, i) => (
              <div
                key={section.label}
                className={`grid grid-cols-12 gap-6 items-start ${
                  i < SECTIONS.length - 1
                    ? "pb-20 border-b border-navy/10"
                    : ""
                }`}
              >
                <div className="col-span-12 md:col-span-3">
                  <div className="text-gold text-xs tracking-[0.35em] uppercase mb-1">
                    {section.label}
                  </div>
                  <div className="hidden md:block w-8 h-px bg-gold mt-3" />
                </div>
                <div className="col-span-12 md:col-span-9">
                  <h2 className="font-display text-navy text-2xl md:text-3xl lg:text-4xl mb-5 leading-tight">
                    {section.heading}
                  </h2>
                  <p className="text-navy/75 text-base md:text-lg leading-relaxed">
                    {section.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>

      {/* ── Gallery ──────────────────────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-px bg-gold" />
            <span className="text-gold text-xs uppercase tracking-[0.4em]">
              Project Gallery
            </span>
            <span className="w-10 h-px bg-gold" />
          </div>
          <h2 className="font-display text-navy text-4xl md:text-5xl text-center mb-4 leading-[1]">
            Project in{" "}
            <span className="italic text-gold">Progress</span>
          </h2>
          <p className="text-navy/55 text-center text-base max-w-lg mx-auto mb-16">
            Construction underway since March 2026. Scheduled completion June 2026.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {ADU_PHOTOS.map((src, i) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden bg-navy/5">
                <Image
                  src={src}
                  alt={`Redlands Jr ADU construction photo ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="bg-navy texture-navy py-24">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-10 h-px bg-gold" />
            <span className="text-gold text-xs uppercase tracking-[0.4em]">
              Your Turn
            </span>
            <span className="w-10 h-px bg-gold" />
          </div>
          <h2 className="font-display text-white text-4xl md:text-5xl mb-6 leading-tight">
            Planning an ADU for family?
          </h2>
          <p className="text-white/65 text-lg mb-10 leading-relaxed">
            We&apos;ll walk your lot, confirm what your city will approve, and give
            you a transparent line-item estimate — free, no commitment.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-navy font-body font-semibold uppercase tracking-wider px-8 py-4 hover:bg-yellow-400 transition-colors"
            >
              Book Free Consultation
            </a>
            <a
              href={CS.phoneHref}
              className="border border-white/40 text-white font-body font-semibold uppercase tracking-wider px-8 py-4 hover:border-gold hover:text-gold transition-colors"
            >
              Call {CS.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
