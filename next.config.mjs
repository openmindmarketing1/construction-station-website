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

    const aduInfoRedirects = ["costs", "basics", "financing", "investment"].map(
      (slug) => ({
        source: `/adu/${slug}`,
        destination: `/services/adu/${slug}`,
        permanent: true,
      })
    );

    return [
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
      { source: "/adu", destination: "/services/adu", permanent: true },
      { source: "/home-builders", destination: "/services/room-additions", permanent: true },
      { source: "/kitchen-bath-remodel", destination: "/services/kitchen-remodeling", permanent: true },
      { source: "/flooring", destination: "https://www.carpet-station.com", permanent: true },
    ];
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
