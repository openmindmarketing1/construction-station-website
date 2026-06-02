import Image from "next/image";
import Link from "next/link";
import { POSTS, formatDate, type BlogPost } from "@/lib/blog";
import { fetchOmmPosts, type OmmBlogPost } from "@/lib/omm-blog";

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

export default async function RecentPosts() {
  const ommPosts = await fetchOmmPosts();

  const recent: UnifiedCard[] = [
    ...POSTS.map(staticToCard),
    ...ommPosts.map(ommToCard),
  ]
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))
    .slice(0, 3);

  return (
    <section className="bg-cream py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-px bg-gold" />
              <span className="text-gold text-xs uppercase tracking-[0.4em]">
                From The Blog
              </span>
            </div>
            <h2 className="font-display text-navy text-4xl md:text-5xl leading-[1]">
              Recent <span className="italic">Articles</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="flex items-center gap-2 text-gold text-xs uppercase tracking-[0.3em] hover:gap-4 transition-all shrink-0"
          >
            View all posts
            <span className="w-6 h-px bg-gold" />
            →
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recent.map((post, i) => (
            <article
              key={`${post.source}-${post.slug}`}
              className="group flex flex-col bg-white border border-navy/10 overflow-hidden hover:border-gold transition-colors"
            >
              <Link
                href={`/blog/${post.slug}`}
                className="relative block aspect-[16/10] overflow-hidden"
              >
                {post.image ? (
                  post.source === "static" ? (
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={i === 0}
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
                <h3 className="font-display text-navy text-xl lg:text-2xl leading-tight mb-3 group-hover:text-gold transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
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
  );
}
