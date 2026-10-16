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

No product images were fetched from ADUTOYS — product photography wasn't retrieved directly from the merchant, so every card currently shows a plain placeholder icon. To add a real photo for a product:

1. Get an image you have the right to use (your own photo of the item, or an asset ADUTOYS provides through its affiliate program — check your affiliate dashboard for a media/assets section).
2. Drop the file into `/public`, e.g. `/public/products/strap-on-beginners.jpg`.
3. In `data/adult-products.ts`, set that product's `image` to the matching path, e.g. `image: "/products/strap-on-beginners.jpg"`.

The card picks it up automatically; no component changes needed. Products with no `image` set keep the placeholder.

### Discounts

A "-X%" badge appears automatically on a card only when both `price` and `previousPrice` are set and `previousPrice` is actually higher — it's computed from the two stored values, never typed in by hand, so it can't drift out of sync with the prices shown.

## No other affiliate programs

The earlier technology-tool catalog (Wix, Webflow, Framer, Durable, Semrush, Jasper, Envato Market) and its pages, categories and comparisons have been removed. The site is not affiliated with any of those programs. Adult Wellness / ADUTOYS is the only affiliate relationship on the site.
