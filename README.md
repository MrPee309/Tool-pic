# Tool-Pic

A small Next.js (App Router) + Tailwind CSS site. No database, no auth, no API routes. The only thing the site sells is the Adult Wellness product catalog in `data/adult-products.ts`.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # serve the production build
npm run typecheck
```

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` if you are not on tool-pic.com.

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. In Vercel: Add New > Project > import the repo. Framework preset is detected as Next.js; no build settings needed.
3. Add the environment variable `NEXT_PUBLIC_SITE_URL` = `https://tool-pic.com`.
4. Deploy, then add `tool-pic.com` under Project > Settings > Domains.

## Where things live

| What | Where |
| --- | --- |
| Adult Wellness products (the site's whole catalog) | `data/adult-products.ts` |
| Click tracking | `lib/analytics.ts` |
| Site name, URL, contact email | `lib/site.ts` |

## Adult Wellness products

`data/adult-products.ts` holds the catalog: name, price, neutral description, affiliate URL, and an optional `image`. Every product always has a real affiliate URL with its tracking parameter — don't strip or re-encode the `?tracking=...` query string when editing. Each card is one clickable link covering the whole card (image, text and button); clicking anywhere on it opens that product's exact ADUTOYS URL in a new tab.

Before publishing, double-check each product's title, price and description against ADUTOYS' own product pages — the title for the "Mini Silicone Sex Doll / Male Masturbator" entry in particular could not be confirmed and is flagged in a code comment in `data/adult-products.ts`.

### Product images

All 5 products now have an `image`: the ADUTOYS catalog image URL you supplied, hotlinked directly (not downloaded). Claude did not fetch, open or view these images — they were matched to each product by comparing the image filename to that product's own `affiliateUrl` slug, a plain text match, and the result was spot-checked (all 5 filenames correspond 1:1, no two products share an image). Since this wasn't viewed, there's no way to confirm what each image actually shows beyond that filename match — check them yourself once the site is live.

Hotlinking means the site depends on ADUTOYS continuing to serve images at these exact `image/cache/catalog/...` paths; if ADUTOYS reorganizes its catalog or that cache expires, the image breaks. For a copy Tool-Pic doesn't depend on:

1. Download each image file yourself (save-as from your browser, or from ADUTOYS' affiliate asset dashboard if it has one).
2. Drop the file into `/public`, e.g. `/public/products/strap-on-beginners.jpg`.
3. In `data/adult-products.ts`, change that product's `image` from the `https://...` URL to the local path, e.g. `image: "/products/strap-on-beginners.jpg"`.

No component changes are needed either way — `AdultProductCard` renders whatever string is in `image`, local path or full URL.

### Discounts

A "-X%" badge appears automatically on a card only when both `price` and `previousPrice` are set and `previousPrice` is actually higher — it's computed from the two stored values, never typed in by hand, so it can't drift out of sync with the prices shown.

## No other affiliate programs

The earlier technology-tool catalog (Wix, Webflow, Framer, Durable, Semrush, Jasper, Envato Market) and its pages, categories and comparisons have been removed. The site is not affiliated with any of those programs. Adult Wellness / ADUTOYS is the only affiliate relationship on the site.
