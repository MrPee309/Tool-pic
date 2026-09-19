# Tool-Pic

Pick the right tool for the job. A small Next.js (App Router) + Tailwind CSS site for discovering and comparing tools. No database, no auth, no API routes. Everything is statically generated from the files in `data/`.

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
| Tools (all content) | `data/tools.ts` |
| Categories | `data/categories.ts` |
| Comparison pages | `data/comparisons.ts` |
| Affiliate link logic (one place) | `lib/affiliate.ts` |
| Click tracking | `lib/analytics.ts` |
| Site name, URL, demo badge, contact email | `lib/site.ts` |

## Adding a tool

Copy an entry in `data/tools.ts`, give it a unique `id` and `slug`, pick a category slug. Pages, search, filters, sitemap and related tools update automatically. To include it in a comparison page, add its slug to `toolSlugs` in `data/comparisons.ts`.

## Affiliate links

Paste the link into the tool's `affiliateUrl`. If it is empty, "Visit Tool" links to `websiteUrl`. Links with an `affiliateUrl` get `rel="sponsored"`. Nothing else in the codebase contains affiliate URLs.

## Before launch

- All 10 tools are demo entries (`demo: true`, `websiteUrl: https://example.com`). Replace them with verified tools, then set `showDemoBadge: false` in `lib/site.ts`.
- Privacy Policy and Terms are generic starters. Have them reviewed for your situation.
- Set `contactEmail` in `lib/site.ts` if you want it shown on those pages.
- Click tracking only logs in development and forwards to Plausible or GA if their script is added. Connect real analytics when ready.
