/** @type {import('next').NextConfig} */
const ADU_CITY_SLUGS = [
  "yucaipa",
  "redlands",
  "loma-linda",
  "san-bernardino",
  "highland",
  "beaumont",
  "banning",
  "colton",
  "rialto",
  "fontana",
  "rancho-cucamonga",
  "ontario",
  "upland",
  "chino",
  "chino-hills",
  "victorville",
  "hesperia",
  "apple-valley",
  "murrieta",
  "lake-elsinore",
  "menifee",
  "temecula",
  "palm-springs",
  "palm-desert",
  "cathedral-city",
  "indio",
  "la-quinta",
  "anaheim-hills",
  "yorba-linda",
];

// City-page consolidation (Aug 2026): the thin /areas/[city] pages are merged
// into the ranking /services/adu/[city] guides. Every removed URL 301s in a
// single hop — either to its ADU counterpart, or (for the three cities with
// no ADU guide) to the /areas service-area hub.
const AREAS_TO_ADU_SLUGS = [
  "redlands",
  "yucaipa",
  "loma-linda",
  "san-bernardino",
  "riverside",
  "fontana",
  "rancho-cucamonga",
  "ontario",
  "upland",
  "chino",
  "chino-hills",
  "victorville",
  "hesperia",
  "apple-valley",
  "highland",
  "colton",
  "moreno-valley",
  "beaumont",
  "calimesa",
  "banning",
  "norco",
  "eastvale",
  "perris",
  "palm-springs",
  "cathedral-city",
  "palm-desert",
];

const AREAS_TO_HUB_SLUGS = ["claremont", "pomona", "corona"];

const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // Supabase public storage host — serves the ADU 3D renderings/plan images.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ihvgrybmtngekmfjpxnz.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
      {
        protocol: "https",
        hostname: "www.openmindmarketing.ai",
        pathname: "/**",
      },
    ],
  },

  async redirects() {
    const aduCityRedirects = ADU_CITY_SLUGS.map((slug) => ({
      source: `/adu/${slug}`,
      destination: `/services/adu/${slug}`,
      permanent: true,
    }));

    const areasCityRedirects = [
      ...AREAS_TO_ADU_SLUGS.map((slug) => ({
        source: `/areas/${slug}`,
        destination: `/services/adu/${slug}`,
        permanent: true,
      })),
      ...AREAS_TO_HUB_SLUGS.map((slug) => ({
        source: `/areas/${slug}`,
        destination: "/areas",
        permanent: true,
      })),
    ];

    const aduInfoRedirects = ["costs", "basics", "financing", "investment"].map(
      (slug) => ({
        source: `/adu/${slug}`,
        destination: `/services/adu/${slug}`,
        permanent: true,
      })
    );

    const staticRedirects = [
      {
        // Host canonicalization (OMM SEO remediation): www.constructionstation.com → constructionstation.com
        source: "/:path*",
        has: [{ type: "host", value: "www.constructionstation.com" }],
        destination: "https://constructionstation.com/:path*",
        permanent: true,
      },
      {
        // Short link given to customers post-project: constructionstation.com/review
        source: "/review",
        destination: "https://g.page/r/CYbRtpDrKtNzEAE/review",
        permanent: false,
      },
      { source: "/home-improvement-blog/:slug*", destination: "/blog/:slug*", permanent: true },
      { source: "/residential-services/kitchen-remodeler-yucaipa-ca", destination: "/services/kitchen-remodeling", permanent: true },
      { source: "/residential-services/bathroom-remodeling-in-yucaipa-ca", destination: "/services/bathroom-remodeling", permanent: true },
      { source: "/residential-services", destination: "/services/kitchen-remodeling", permanent: true },
      { source: "/commercial-services", destination: "/services/commercial", permanent: true },
      { source: "/outdoor-living", destination: "/services/outdoor-living", permanent: true },
      { source: "/room-additions", destination: "/services/room-additions", permanent: true },
      ...aduInfoRedirects,
      ...aduCityRedirects,
      ...areasCityRedirects,
      { source: "/adu", destination: "/services/adu", permanent: true },
      { source: "/home-builders", destination: "/services/room-additions", permanent: true },
      { source: "/kitchen-bath-remodel", destination: "/services/kitchen-remodeling", permanent: true },
      { source: "/flooring", destination: "https://www.carpet-station.com", permanent: true },
    ];

    // UUID → slug: fetched at build time so old Google-indexed /blog/<uuid>
    // links get a proper 301 at the edge rather than a runtime server-side
    // redirect. The build still succeeds if the feed is unreachable, but
    // every failure path logs loudly — a silent miss here means the UUID
    // redirects quietly don't exist in the deployed build.
    let uuidRedirects = [];
    try {
      const base = process.env.NEXT_PUBLIC_OMM_API_URL?.trim();
      const bizId = process.env.NEXT_PUBLIC_OMM_BUSINESS_ID?.trim();
      if (!base || !bizId) {
        console.error(
          "[redirects] BLOG UUID REDIRECTS SKIPPED: NEXT_PUBLIC_OMM_API_URL and/or " +
            "NEXT_PUBLIC_OMM_BUSINESS_ID is unset — old /blog/<uuid> links will NOT 301."
        );
      } else {
        const res = await fetch(
          `${base}/api/public/blogs?business_id=${encodeURIComponent(bizId)}`
        );
        if (!res.ok) {
          console.error(
            `[redirects] BLOG UUID REDIRECTS MISSING: OMM blog feed returned HTTP ${res.status} — ` +
              "old /blog/<uuid> links will NOT 301 in this build."
          );
        } else {
          const json = await res.json();
          uuidRedirects = (json.posts ?? [])
            .filter((p) => p.id && p.slug)
            .map((p) => ({
              source: `/blog/${p.id}`,
              destination: `/blog/${p.slug}`,
              permanent: true,
            }));
          if (uuidRedirects.length === 0) {
            console.error(
              "[redirects] BLOG UUID REDIRECTS EMPTY: OMM blog feed returned OK but yielded " +
                "0 id→slug pairs — old /blog/<uuid> links will NOT 301 in this build."
            );
          } else {
            console.log(
              `[redirects] Generated ${uuidRedirects.length} /blog/<uuid> → /blog/<slug> redirects.`
            );
          }
        }
      }
    } catch (err) {
      console.error(
        "[redirects] BLOG UUID REDIRECTS FAILED: could not fetch OMM blog feed — " +
          "old /blog/<uuid> links will NOT 301 in this build.",
        err
      );
    }

    return [...staticRedirects, ...uuidRedirects];
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      {
        // Public folder static assets — images, fonts, icons, og.jpg, etc.
        // Vercel handles /_next/static automatically; this covers /public.
        source: "/:path((?!_next).*\\.(?:jpg|jpeg|png|webp|avif|gif|svg|ico|woff|woff2|ttf|otf)$)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
