import { redirect } from "next/navigation";

// Short link handed to customers after project completion: constructionstation.com/review
// This redirects directly to the Google review form.
// To get the exact write-review URL: Google Business Profile dashboard → Get more reviews → "Share review form"
// Replace the URL below with: https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID
export default function ReviewRedirect() {
  redirect("https://www.google.com/maps?cid=8346061725681242502");
}
