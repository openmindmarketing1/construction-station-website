import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: { absolute: "Our Work | Construction Station" },
  description:
    "Real projects by Construction Station — licensed general contractor in the Inland Empire. ADUs, room additions, kitchen and bathroom remodels. See the work before you hire.",
  alternates: { canonical: "/projects" },
};

const SB = "https://ihvgrybmtngekmfjpxnz.supabase.co/storage/v1/object/public/user-assets/";

const PROJECTS = [
  {
    slug: "redlands-jr-adu",
    label: "Junior ADU — Redlands, CA",
    heading: "Making Room for Family",
    chips: ["465 sq ft", "1 BD / 1 BA", "~$200K all-in", "In Progress"],
    body: "New-construction Junior ADU sharing two walls with the main home. Design to CO in under a year. Fixed-price contract — no surprises.",
    image: `${SB}1/Jr%20ADU%20Redlands/1781284267634-IMG_4468.jpeg`,
    cta: "Read the Case Study",
    status: "In Progress",
  },
];

export default function ProjectsPage() {
  return (
    <>
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
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-px bg-gold" />
            <span className="text-gold text-xs uppercase tracking-[0.4em]">
              Portfolio
            </span>
          </div>
          <h1 className="font-display text-white text-5xl md:text-7xl lg:text-8xl leading-[1] mb-8 max-w-4xl">
            Real projects.{" "}
            <span className="italic text-gold">Real results.</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl leading-relaxed">
            Every project has a story — a family needing more space, a homeowner
            ready to invest in their property. Here&apos;s ours.
          </p>
        </div>
      </section>

      {/* ── Project Grid ─────────────────────────────────────────────── */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group block bg-white border border-navy/10 hover:border-gold transition-colors overflow-hidden"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-navy/5">
                  <Image
                    src={project.image}
                    alt={`${project.label} — ${project.heading}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 right-4 inline-flex px-3 py-1 border border-amber-200 bg-amber-100 text-amber-900 text-xs uppercase tracking-wider font-semibold">
                    {project.status}
                  </div>
                </div>
                <div className="p-8">
                  <div className="text-gold text-xs uppercase tracking-[0.35em] mb-2">
                    {project.label}
                  </div>
                  <h2 className="font-display text-navy text-2xl md:text-3xl mb-4 group-hover:text-gold transition-colors leading-tight">
                    {project.heading}
                  </h2>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.chips.map((chip) => (
                      <span
                        key={chip}
                        className="border border-navy/20 text-navy/65 text-xs px-3 py-1 uppercase tracking-wide"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                  <p className="text-navy/65 text-sm leading-relaxed mb-6">
                    {project.body}
                  </p>
                  <span className="inline-flex items-center gap-2 text-gold font-body font-semibold text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                    {project.cta} →
                  </span>
                </div>
              </Link>
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
              Start Your Project
            </span>
            <span className="w-10 h-px bg-gold" />
          </div>
          <h2 className="font-display text-white text-4xl md:text-5xl mb-6 leading-tight">
            Ready to see your project here?
          </h2>
          <p className="text-white/65 text-lg mb-10 leading-relaxed">
            Free consultation, 3D design rendering, and a transparent line-item
            estimate — no commitment, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-gold text-navy font-body font-semibold uppercase tracking-wider px-8 py-4 hover:bg-yellow-400 transition-colors"
            >
              Book Free Consultation
            </Link>
            <Link
              href="/services/adu"
              className="border border-white/40 text-white font-body font-semibold uppercase tracking-wider px-8 py-4 hover:border-gold hover:text-gold transition-colors"
            >
              ADU Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
