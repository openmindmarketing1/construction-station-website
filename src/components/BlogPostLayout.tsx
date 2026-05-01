import Image from "next/image";
import Link from "next/link";
import { type BlogPost, formatDate } from "@/lib/blog";
import { CS } from "@/lib/constants";

interface Props {
  post: BlogPost;
  related: BlogPost[];
  children: React.ReactNode;
}

export default function BlogPostLayout({ post, related, children }: Props) {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy texture-navy text-white pt-36 pb-0 lg:pt-44 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 80% 30%, rgba(201,162,39,0.3) 0%, transparent 55%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-5 lg:px-10 pb-10">
          <nav
            aria-label="Breadcrumb"
            className="text-xs text-white/50 mb-5 flex items-center gap-2 flex-wrap"
          >
            <Link href="/" className="hover:text-gold transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-gold transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-white/70">{post.title}</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-px bg-gold" />
            <span className="text-gold text-xs uppercase tracking-[0.4em]">
              {post.category}
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] max-w-4xl mb-5">
            {post.title}
          </h1>
          <div className="text-white/50 text-sm">{formatDate(post.date)}</div>
        </div>
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="relative w-full aspect-[21/9] overflow-hidden">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* Article */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-5 lg:px-10">
          <div className="blog-prose">{children}</div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-navy texture-navy text-white py-16">
        <div className="max-w-4xl mx-auto px-5 lg:px-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-px bg-gold" />
            <span className="text-gold text-xs uppercase tracking-[0.4em]">
              Ready to Start?
            </span>
            <span className="w-10 h-px bg-gold" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl mb-4">
            Ready to start your project?
          </h2>
          <p className="text-white/75 text-lg mb-8 max-w-xl mx-auto">
            Call {CS.phone} for a free in-home estimate. No obligation, no
            high pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={CS.phoneHref}
              className="bg-gold text-navy font-body font-semibold px-8 py-4 uppercase tracking-[0.2em] text-sm hover:bg-gold-light transition-colors"
            >
              Call {CS.phone}
            </a>
            <Link
              href="/contact"
              className="border border-gold text-gold px-8 py-4 uppercase tracking-[0.2em] text-sm hover:bg-gold hover:text-navy transition-colors"
            >
              Get Free Estimate
            </Link>
          </div>
        </div>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="bg-cream py-16">
          <div className="max-w-7xl mx-auto px-5 lg:px-10">
            <div className="text-gold text-xs tracking-[0.4em] uppercase mb-3 text-center">
              Keep Reading
            </div>
            <h2 className="font-display text-navy text-3xl text-center mb-10">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group bg-white border border-navy/10 overflow-hidden hover:border-gold transition-colors"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.imageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <div className="text-gold text-xs uppercase tracking-wider mb-1">
                      {p.category}
                    </div>
                    <h3 className="font-display text-navy text-lg group-hover:text-gold transition-colors leading-tight">
                      {p.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
