/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        // Short link given to customers post-project: constructionstation.com/review
        // Opens CS Google Business Profile where customers can write a review.
        // To link directly to the review form, replace destination with:
        // https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID
        // (Get Place ID from Google Business Profile → Get more reviews → Share review form)
        source: "/review",
        destination: "https://g.page/r/CYbRtpDrKtNzEAE/review",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
