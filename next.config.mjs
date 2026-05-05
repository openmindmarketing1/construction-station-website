/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
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
    ];
  },
};

export default nextConfig;
