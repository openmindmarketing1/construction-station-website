# CS site audit: H1s and flooring 404 (2026-10-02)

Derived from scratch: live crawl of constructionstation.com plus the repo at `d80d770` (master). No hq notes existed. **Nothing has been changed.** This report covers items 1 and 2 only.

## Method
- URL set: all 133 URLs in the live `/sitemap.xml`, plus routes in `src/app` that the sitemap omits (`/remodeling`, `/review`) and probes (`/services/flooring`, `/services/flooring/`, `/services/flooring/yucaipa`, `/services/general-contractor`, `/services/kitchen-remodeling/yucaipa`). 139 URLs fetched in total.
- H1 = every `<h1>` in the served HTML, tags stripped. Link check = every `href` and every raw string occurrence of `/services/flooring` in the HTML of all 134 live pages, plus a grep of `src/`.

## 1. H1 audit

| Result | Count |
|---|---|
| Live pages (HTTP 200) | 134 |
| Distinct H1 values across them | 134 |
| Pages with exactly one H1 | 134 |
| Pages with zero or multiple H1s | 0 |
| Duplicate H1s | **0** |

Redirects (`/review` 307 to Google review page, `/services/flooring/` 308 to `/services/flooring`) and the four 404s were excluded; the 404s render a "Page not found." H1 and are not real pages.

**I could not reproduce a duplicate-H1 problem on flooring or anywhere else.** Flooring H1s are all distinct:
- `/services/flooring-installation-yucaipa-ca`: "Flooring Installation in Yucaipa CA"
- `/services/flooring/{norco,eastvale,perris,palm-springs,cathedral-city,palm-desert}`: "Flooring Installation in <City>, CA"
- 7 flooring blog posts, each with its own H1.

Possible explanations for the flag, none confirmed: (a) the homepage H1 was rewritten today (`d80d770`, "Kitchen, Bath & ADU Remodeling Across the Inland Empire"), so an older crawl may have seen something different; (b) the audit tool compared titles or H1-vs-title rather than H1s; (c) it was about the 404 (below). Ask for the original audit's URL pair if you want this chased further.

Adjacent findings from the same crawl (not asked, but relevant to item 3):
- **Duplicate `<title>`s: none.** But the two kitchen pages have swapped intent:
  - `/kitchen-remodeler-yucaipa-ca`: H1 "Kitchen Remodel Yucaipa CA", title "Kitchen & Bathroom Remodel Yucaipa CA | Affordable"
  - `/services/kitchen-remodeling`: H1 "Kitchen Remodeling in the Inland Empire", title "Kitchen Remodeler Yucaipa CA | Free Estimates | ..."
  The regional page carries the Yucaipa title and the Yucaipa page carries a generic title. Likely cannibalization; worth folding into the kitchen plan.
- `/remodeling` is the only 200 page with no canonical tag.
- `/services/general-contractor` and `/services/kitchen-remodeling/yucaipa` also 404 (only city children exist), same pattern as flooring.

## 2. Flooring 404

**Confirmed:** `/services/flooring` returns 404 (`src/app/services/flooring/` has only `[city]/page.tsx`, no `page.tsx`). `/services/flooring/` 308s to it.

**The real flooring service page is `/services/flooring-installation-yucaipa-ca`** (`src/app/services/flooring-installation-yucaipa-ca/page.tsx`, created in a266efb). It is the `mainHref` for flooring in `src/lib/service-city-pages.ts:156`, so every city page points its parent link there.

**Internal links pointing at the 404: none.**
- Live HTML, all 134 pages: 0 `href`s and 0 raw string occurrences of bare `/services/flooring`. The only `/services/flooring...` links are the six city pages (`/services/flooring/<city>`), each linked from 6 pages.
- `src/`: 0 references to bare `/services/flooring`.

**Sitemap entries pointing at the 404: none.** The sitemap has `/services/flooring-installation-yucaipa-ca` plus the six `/services/flooring/<city>` URLs; `src/app/sitemap.ts:30` is the only flooring entry in the static list.

So the 404 is only reachable by typing or guessing the URL, or from external links and old index entries. It is not a crawl-visible broken link.

**Related redirects already in `next.config.mjs`:**
- `/flooring` 301 to `https://www.carpet-station.com`
- `/residential-services/carpet-and-flooring` 301 to `https://www.carpet-station.com`
- `/residential-services/flooring-installation` 301 to `/services/flooring-installation-yucaipa-ca`
- **No Palm Desert flooring redirect exists today.** `/services/flooring/palm-desert` is a live 200 page with its own H1.

### Proposal (pick one)

**A. Redirect (recommended).** Add `{ source: "/services/flooring", destination: "/services/flooring-installation-yucaipa-ca", permanent: true }` to `next.config.mjs`.
- One line, matches how `/residential-services/flooring-installation` already resolves, no new content to maintain, and fixes the 404 for any external or stale links.
- This also sets the destination for the Palm Desert flooring redirect: `/services/flooring-installation-yucaipa-ca`. Caveat: that page is Yucaipa-specific, so a Palm Desert visitor lands on a Yucaipa page. If the Palm Desert page is being retired, the cleaner destination is the region-wide page in option B.

**B. Restore a regional page** at `/services/flooring/page.tsx`, "Flooring Installation in the Inland Empire", matching `/services/kitchen-remodeling` and `/services/bathroom-remodeling`, which are regional hubs. Better long-term structure (the other services have hubs, and the Yucaipa slug is a legacy exception), and it gives Palm Desert and the other city redirects a sensible target. Costs a new page with unique copy, a sitemap entry, and a decision on whether the Yucaipa page 301s into it.

Decisions needed from you before I change anything:
1. A or B for `/services/flooring`.
2. Palm Desert flooring redirect: confirm it should exist (its page is live today) and which destination.
3. Whether the `/services/general-contractor` and `/services/kitchen-remodeling/yucaipa` 404s get the same treatment.
