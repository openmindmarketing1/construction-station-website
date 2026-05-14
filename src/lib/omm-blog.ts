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
