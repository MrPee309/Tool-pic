# Tool-Pic

A small Next.js (App Router) + Tailwind CSS site. No database, no auth, no API routes. The only thing the site sells is the Adult Wellness product catalog in `data/adult-products.ts`, shown at `/adult-wellness`.

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

1. Push this folder to a GitHub repo, committing directly to `main`.
2. In Vercel: Add New > Project > import the repo. Framework preset is detected as Next.js; no build settings needed.
3. Add the environment variable `NEXT_PUBLIC_SITE_URL` = `https://tool-pic.com`.
4. Deploy, then add `tool-pic.com` under Project > Settings > Domains.

## Where things live

| What | Where |
| --- | --- |
| Product data (the site's whole catalog) | `data/adult-products.ts` |
| Catalog page | `app/adult-wellness/page.tsx` |
| Search + category filter | `components/AdultCatalog.tsx` |
| Product card | `components/AdultProductCard.tsx` |
| Image fallback | `components/ProductImagePlaceholder.tsx` |
| Local product images | `public/products/` |
| Click tracking | `lib/analytics.ts` |
| Site name, URL, contact email | `lib/site.ts` |

## Adult Wellness catalog

`data/adult-products.ts` holds each product's name, category, price, neutral description, affiliate URL and optional `image`. Every product always has a real affiliate URL with its tracking parameter — don't strip or re-encode the `?tracking=...` query string when editing.

Each card is one clickable link covering the whole card (image, text and button). Clicking anywhere on it opens that product's exact ADUTOYS URL in a new tab. There are no nested links or buttons.

Categories (`Vibrators`, `For men`, `Strap-ons`) are defined at the top of `data/adult-products.ts` and were assigned from each product's own name. Add a new category there if you add a product that doesn't fit.

Before publishing, double-check each product's title, price and description against ADUTOYS' own product pages — the title for the "Mini Silicone Sex Doll / Male Masturbator" entry in particular could not be confirmed and is flagged in a code comment.

### Product images

Right now each product's `image` is the official ADUTOYS catalog image URL that was supplied for it (hotlinked). These URLs have not been tested from the build environment. If one fails to load in the visitor's browser, the card shows a neutral "Image unavailable" panel instead of a broken-image icon or a substitute photo.

Local copies are more reliable, because the site then no longer depends on ADUTOYS' server. To switch a product to a local image:

1. Save the image file into `public/products/`, using a simple lowercase name with no spaces, e.g. `public/products/womens-vibrator.jpg`.
2. In `data/adult-products.ts`, change that product's `image` to the path without `public`, e.g. `image: "/products/womens-vibrator.jpg"`.
3. Commit both the image file and the data file to `main`. File names are case-sensitive on Vercel: `Womens-Vibrator.JPG` and `womens-vibrator.jpg` are different files.

No component changes are needed either way.

### Discounts

A "-X%" badge appears on a card only when both `price` and `previousPrice` are set and `previousPrice` is higher. It is computed from the two stored values, never typed by hand.

## No other affiliate programs

The earlier technology-tool catalog (Wix, Webflow, Framer, Durable, Semrush, Jasper, Envato Market) and its pages, categories and comparisons have been removed. Adult Wellness / ADUTOYS is the only affiliate relationship on the site.
