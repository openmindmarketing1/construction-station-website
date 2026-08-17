import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/constants";
import { POSTS } from "@/lib/blog";
import { ADU_CITIES } from "@/lib/adu-cities";
import {
  SERVICE_CITY_SERVICES,
  SERVICE_CITY_SLUGS,
} from "@/lib/service-city-pages";
import { fetchOmmPosts } from "@/lib/omm-blog";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://constructionstation.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/reviews`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/financing`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    // Added 2026-08-18 (SEO audit): live pages the sitemap never listed —
    // five of the six read "URL is unknown to Google" in URL Inspection, and
    // the Yucaipa kitchen lander earns ~1,780 impressions/90d.
    { url: `${SITE_URL}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/projects`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/kitchen-remodeler-yucaipa-ca`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/services/flooring-installation-yucaipa-ca`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/projects/redlands-jr-adu`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/resources/adu-guide`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
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

  // /areas/[city] pages were consolidated into /services/adu/[city] (Aug
  // 2026); only the /areas hub survives in the sitemap.
  const areasHubRoute: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/areas`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const aduCityRoutes: MetadataRoute.Sitemap = ADU_CITIES.map((c) => ({
    url: `${SITE_URL}/services/adu/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const serviceCityRoutes: MetadataRoute.Sitemap =
    SERVICE_CITY_SERVICES.flatMap((s) =>
      SERVICE_CITY_SLUGS.map((slug) => ({
        url: `${SITE_URL}/services/${s.routeSegment}/${slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.8,
      }))
    );

  // Keep this list in sync with the info pages under src/app/services/adu/ —
  // garage-conversion-cost and -permits were added as routes after the
  // original five and never joined the sitemap (2026-08-18 audit).
  const aduInfoRoutes: MetadataRoute.Sitemap = [
    "floor-plans",
    "costs",
    "basics",
    "financing",
    "investment",
    "garage-conversion-cost",
    "garage-conversion-permits",
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
    ...areasHubRoute,
    ...aduCityRoutes,
    ...serviceCityRoutes,
    ...aduInfoRoutes,
  ];
}
