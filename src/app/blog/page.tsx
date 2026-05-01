import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { POSTS, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Home Improvement Blog — Construction Station",
  description:
    "Expert tips, cost guides, and design ideas for kitchen remodeling, bathroom renovations, flooring, and outdoor living in the Inland Empire.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy texture-navy text-white pt-36 pb-16 lg:pt-44 lg:pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-25 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 80% 30%, rgba(201,162,39,0.3) 0%, transparent 55%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-5 lg:px-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-px bg-gold" />
            <span className="text-gold text-xs uppercase tracking-[0.4em]">
              Resources & Guides
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1] mb-5">
            The Construction Station{" "}
            <span className="italic text-gold">Blog.</span>
          </h1>
          <p className="text-white/75 max-w-xl text-base md:text-lg">
            Cost guides, design ideas, and expert tips for Inland Empire
            homeowners planning their next remodel.
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="bg-cream py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {POSTS.map((post, i) => (
              <article key={post.slug} className="group flex flex-col bg-white border border-navy/10 overflow-hidden hover:border-gold transition-colors">
                <Link href={`/blog/${post.slug}`} className="relative block aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={i < 3}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gold text-navy text-[10px] uppercase tracking-[0.3em] px-3 py-1 font-body font-semibold">
                      {post.category}
                    </span>
                  </div>
                </Link>
                <div className="p-6 flex flex-col flex-1">
                  <div className="text-navy/40 text-xs mb-2">
                    {formatDate(post.date)}
                  </div>
                  <h2 className="font-display text-navy text-xl lg:text-2xl leading-tight mb-3 group-hover:text-gold transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-navy/70 text-sm leading-relaxed mb-5 flex-1">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex items-center gap-2 text-gold text-xs uppercase tracking-[0.3em] mt-auto group-hover:gap-3 transition-all"
                  >
                    Read Article
                    <span className="w-6 h-px bg-gold group-hover:w-10 transition-all" />
                    →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
