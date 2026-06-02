import type { MetadataRoute } from "next";
import { CITIES } from "@/config/cities";
import { SERVICES } from "@/lib/constants";
import { POSTS } from "@/lib/blog";
import { ADU_CITIES } from "@/lib/adu-cities";
import { fetchOmmPosts } from "@/lib/omm-blog";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://constructionstation.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/reviews`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/financing`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = SERVICES.filter(
    (s) => s.hasPage
  ).map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const blogRoutes: MetadataRoute.Sitemap = POSTS.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const ommPosts = await fetchOmmPosts();
  const staticSlugs = new Set(POSTS.map((p) => p.slug));
  const ommBlogRoutes: MetadataRoute.Sitemap = ommPosts
    .filter((p) => p.slug && !staticSlugs.has(p.slug))
    .map((p) => ({
      url: `${SITE_URL}/blog/${p.slug}`,
      lastModified: p.published_at ? new Date(p.published_at) : now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  const cityRoutes: MetadataRoute.Sitemap = CITIES.map((c) => ({
    url: `${SITE_URL}/areas/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const aduCityRoutes: MetadataRoute.Sitemap = ADU_CITIES.map((c) => ({
    url: `${SITE_URL}/services/adu/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const aduInfoRoutes: MetadataRoute.Sitemap = [
    "floor-plans",
    "costs",
    "basics",
    "financing",
    "investment",
  ].map((slug) => ({
    url: `${SITE_URL}/services/adu/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...blogRoutes,
    ...ommBlogRoutes,
    ...cityRoutes,
    ...aduCityRoutes,
    ...aduInfoRoutes,
  ];
}
