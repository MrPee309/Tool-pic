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

`data/adult-products.ts` holds the catalog: name, price, neutral description, affiliate URL. Every product always has a real affiliate URL with its tracking parameter — don't strip or re-encode the `?tracking=...` query string when editing.

Before publishing, double-check each product's title, price and description against ADUTOYS' own product pages — the title for the "Mini Silicone Sex Doll / Male Masturbator" entry in particular could not be confirmed and is flagged in a code comment in `data/adult-products.ts`.

## No other affiliate programs

The earlier technology-tool catalog (Wix, Webflow, Framer, Durable, Semrush, Jasper, Envato Market) and its pages, categories and comparisons have been removed. The site is not affiliated with any of those programs. Adult Wellness / ADUTOYS is the only affiliate relationship on the site.
