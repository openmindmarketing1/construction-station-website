import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { POSTS, formatDate, type BlogPost } from "@/lib/blog";
import { fetchOmmPosts, type OmmBlogPost } from "@/lib/omm-blog";

export const metadata: Metadata = {
  // `absolute` bypasses the root layout's "%s | Construction Station" template
  // so the brand isn't appended twice.
  title: {
    absolute:
      "Home Remodeling Tips & Ideas | Yucaipa CA Contractor Blog | Construction Station",
  },
  description:
    "Expert home remodeling tips, ADU guides, kitchen and bathroom renovation ideas from Construction Station — Yucaipa CA's trusted licensed contractor.",
  alternates: { canonical: "/blog" },
};

// Combined card type so the static + OMM lists render through the same
// markup. `image` may be null for OMM posts (Unsplash fallback can fail or
// fetched assets may be missing), so the index renders a gold accent block
// instead of an Image.
interface UnifiedCard {
  source: "static" | "omm";
  slug: string;
  title: string;
  excerpt: string | null;
  date: string;
  category: string | null;
  image: string | null;
  imageAlt: string;
}

function staticToCard(p: BlogPost): UnifiedCard {
  return {
    source: "static",
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    date: p.date,
    category: p.category,
    image: p.image,
    imageAlt: p.imageAlt,
  };
}

function ommToCard(p: OmmBlogPost): UnifiedCard {
  return {
    source: "omm",
    slug: p.slug ?? p.id,
    title: p.title,
    excerpt: p.meta_description,
    date: p.published_at ?? p.generated_at ?? new Date().toISOString(),
    category: null,
    image: p.featured_image_url,
    imageAlt: p.title,
  };
}

export default async function BlogIndexPage() {
  const ommPosts = await fetchOmmPosts();
  const cards: UnifiedCard[] = [
    ...POSTS.map(staticToCard),
    ...ommPosts.map(ommToCard),
  ].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
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
            {cards.map((post, i) => (
              <article key={`${post.source}-${post.slug}`} className="group flex flex-col bg-white border border-navy/10 overflow-hidden hover:border-gold transition-colors">
                <Link href={`/blog/${post.slug}`} className="relative block aspect-[16/10] overflow-hidden">
                  {post.image ? (
                    post.source === "static" ? (
                      <Image
                        src={post.image}
                        alt={post.imageAlt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        priority={i < 3}
                      />
                    ) : (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={post.image}
                        alt={post.imageAlt}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    )
                  ) : (
                    <div className="absolute inset-0 bg-navy/5 flex items-center justify-center">
                      <span className="w-12 h-px bg-gold" />
                    </div>
                  )}
                  {post.category && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-gold text-navy text-[10px] uppercase tracking-[0.3em] px-3 py-1 font-body font-semibold">
                        {post.category}
                      </span>
                    </div>
                  )}
                </Link>
                <div className="p-6 flex flex-col flex-1">
                  <div className="text-navy/40 text-xs mb-2">
                    {formatDate(post.date)}
                  </div>
                  <h2 className="font-display text-navy text-xl lg:text-2xl leading-tight mb-3 group-hover:text-gold transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  {post.excerpt && (
                    <p className="text-navy/70 text-sm leading-relaxed mb-5 flex-1">
                      {post.excerpt}
                    </p>
                  )}
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
