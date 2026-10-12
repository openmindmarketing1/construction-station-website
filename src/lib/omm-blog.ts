// Fetches published blog posts from the OMM (Open Mind Marketing) platform
// via its public feed. The OMM admin publishes posts and triggers this site's
// Vercel deploy hook; this module is what each rebuild pulls.
//
// Config (.env.local on production / Vercel):
//   NEXT_PUBLIC_OMM_API_URL       e.g. https://openmindmarketing.ai
//   NEXT_PUBLIC_OMM_BUSINESS_ID   the OMM auth.users.id for this business
//
// Posts published in OMM appear here on the next rebuild. Drafts and
// "approved-but-not-published" never surface.

export interface OmmBlogPost {
  id: string;
  slug: string | null;
  title: string;
  meta_description: string | null;
  featured_image_url: string | null;
  infographic_url: string | null;
  html_content: string;
  published_at: string | null;
  generated_at: string | null;
}

interface OmmBlogResponse {
  posts?: OmmBlogPost[];
}

function getConfig(): { url: string; businessId: string } | null {
  // Trim defensively. Vercel env vars pasted with a trailing newline produce
  // %0A in the encoded URL, which OMM rejects as an invalid UUID (400). This
  // silently dropped the first ADU/Kitchen posts.
  const base = process.env.NEXT_PUBLIC_OMM_API_URL?.trim();
  const businessId = process.env.NEXT_PUBLIC_OMM_BUSINESS_ID?.trim();
  if (!base || !businessId) {
    // Fail loudly during build so a missing env var doesn't silently drop
    // every OMM-published post from the live site. Build logs surface this;
    // runtime never reaches here because Next.js bakes NEXT_PUBLIC_* at
    // build time.
    console.warn(
      `[omm-blog] OMM config missing — posts will not be fetched. base=${
        base ? "set" : "MISSING"
      } businessId=${businessId ? "set" : "MISSING"}`
    );
    return null;
  }
  return { url: base.replace(/\/+$/, ""), businessId };
}

export async function fetchOmmPosts(): Promise<OmmBlogPost[]> {
  const cfg = getConfig();
  if (!cfg) return [];
  const endpoint = `${cfg.url}/api/public/blogs?business_id=${encodeURIComponent(
    cfg.businessId
  )}`;
  try {
    const res = await fetch(endpoint, {
      // ISR-friendly: each rebuild gets fresh content. We don't want stale
      // posts hanging around across builds; the deploy hook is the freshness
      // boundary.
      next: { revalidate: 300 },
    });
    if (!res.ok) {
      console.warn(
        `[omm-blog] fetch returned ${res.status} from ${endpoint}`
      );
      return [];
    }
    const json = (await res.json()) as OmmBlogResponse;
    return Array.isArray(json.posts) ? json.posts : [];
  } catch (err) {
    console.warn("[omm-blog] fetch threw:", err);
    return [];
  }
}

export async function fetchOmmPostBySlug(
  slug: string
): Promise<OmmBlogPost | null> {
  if (!slug) return null;
  const posts = await fetchOmmPosts();
  return posts.find((p) => p.slug === slug) ?? null;
}

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

/**
 * Fetch a post by slug (preferred) or by UUID (legacy fallback for links
 * published before slug backfill). Returns the post plus a canonical slug
 * to redirect to when the param was a UUID and the post now has a proper slug.
 */
export async function fetchOmmPostByIdOrSlug(param: string): Promise<{
  post: OmmBlogPost;
  redirectToSlug: string | null;
} | null> {
  if (!param) return null;
  const posts = await fetchOmmPosts();

  // Primary: slug match.
  const bySlug = posts.find((p) => p.slug === param);
  if (bySlug) return { post: bySlug, redirectToSlug: null };

  // Fallback: UUID match — old links before slug backfill.
  if (UUID_RE.test(param)) {
    const byId = posts.find((p) => p.id === param);
    if (byId) {
      return {
        post: byId,
        // Redirect to canonical slug URL if one now exists.
        redirectToSlug: byId.slug ?? null,
      };
    }
  }

  return null;
}

/**
 * Repair leftovers in OMM-generated post HTML until OMM's blog writer stops
 * producing them (omm-seo, fix/blog-writer-clean-html):
 *  - `<p>!<a href="…">Summary Infographic</a></p>`: a markdown image that was
 *    converted as a link, to an expiring signed URL. Always dropped — the page
 *    renders the post's infographic_url itself.
 *  - `<p># Heading</p>`: a markdown heading left as text. Dropped when it
 *    repeats the post title (the page's H1); otherwise made an H2.
 *  - An embedded JSON-LD Article whose author/publisher is a second, unlinked
 *    business entity. Dropped (the page emits its own BlogPosting that points
 *    at the one business @id); FAQPage and anything else in the block stays.
 */
export function cleanOmmPostHtml(html: string, title: string): string {
  const norm = (s: string) => s.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim().toLowerCase();
  return html
    .replace(/<p>\s*!\s*<a [^>]*href="[^"]+"[^>]*>[^<]*<\/a>\s*<\/p>/g, "")
    .replace(/<p>\s*#{1,6}\s+([\s\S]*?)<\/p>/g, (_m, text: string) =>
      norm(text) === norm(title) ? "" : `<h2>${text.trim()}</h2>`
    )
    .replace(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g, (whole, json: string) => {
      let data: unknown;
      try {
        data = JSON.parse(json);
      } catch {
        return whole;
      }
      const isArticle = (n: unknown) =>
        !!n && typeof n === "object" && ["Article", "BlogPosting"].includes(String((n as { "@type"?: unknown })["@type"]));
      const kept = Array.isArray(data) ? data.filter((n) => !isArticle(n)) : isArticle(data) ? [] : [data];
      if (kept.length === 0) return "";
      const out = JSON.stringify(kept.length === 1 ? kept[0] : kept).replace(/</g, "\\u003c");
      return `<script type="application/ld+json">${out}</script>`;
    });
}
