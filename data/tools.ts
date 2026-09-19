import type { Tool } from "./types";

/**
 * TOOL DATA
 * ---------------------------------------------------------------------------
 * Every entry is a real product. Facts were taken from each provider's own
 * website or help center. Only broad pricing types are stored (no exact prices),
 * because plans and prices change. `freePlan` is:
 *   true  = a free plan is currently listed by the provider
 *   false = no free plan is currently listed (a trial may still exist)
 *   null  = unclear / not verified
 *
 * AFFILIATE LINKS
 * `affiliateUrl` is intentionally empty for every tool. Paste a link there only
 * after the matching affiliate account has been approved. While it is empty,
 * "Visit Tool" links to `websiteUrl` (see lib/affiliate.ts).
 *
 * To add a tool: copy an entry, use a unique id/slug, pick a category slug from
 * data/categories.ts. No component changes are needed.
 */
export const tools: Tool[] = [
  {
    id: "wix",
    name: "Wix",
    slug: "wix",
    shortDescription:
      "A website builder with templates, a drag-and-drop editor and an AI website builder.",
    description:
      "Wix is a website builder that combines templates, a drag-and-drop editor and an AI website builder. According to Wix, you can start for free without a credit card, and built-in business tools cover areas such as eCommerce, scheduling and SEO. A free Wix site uses a Wix domain; connecting a custom domain, removing ads and unlocking advanced business features requires a Premium plan.",
    category: "website-builders",
    bestFor: "Business sites, online stores, blogs and portfolios",
    pricing: "Freemium",
    freePlan: true,
    features: [
      "2,000+ templates",
      "AI website builder and drag-and-drop editor",
      "Built-in business tools such as eCommerce, scheduling and CRM",
      "SEO tools and an SEO assistant",
    ],
    pros: [
      "You can start for free, with no credit card required",
      "Templates for many types of sites, from portfolios to online stores",
      "Hosting is included with Wix sites",
    ],
    considerations: [
      "A custom domain and ad removal require a Premium plan",
      "Selling through an online store requires upgrading to a Premium plan",
      "Check current plan details and pricing on Wix's website",
    ],
    websiteUrl: "https://www.wix.com/",
    affiliateUrl: "", // TODO: add only after the Wix affiliate account is approved
    featured: true,
    tags: ["wix", "website builder", "ai website builder", "templates", "ecommerce", "no-code"],
    demo: false,
  },
  {
    id: "webflow",
    name: "Webflow",
    slug: "webflow",
    shortDescription: "A visual website builder with a built-in CMS and hosting.",
    description:
      "Webflow is a website builder, CMS and hosting platform. It lets you design responsive sites visually without writing code and manage content through its CMS. Every account starts on a free Starter site plan, which publishes to a webflow.io subdomain; a paid Site plan is needed to host a site and unlock additional features.",
    category: "website-builders",
    bestFor: "Designers and teams building CMS-driven websites",
    pricing: "Freemium",
    freePlan: true,
    features: [
      "Visual site builder",
      "Built-in CMS for structured content",
      "Hosting and publishing on the platform",
      "AI-assisted features (availability varies by plan)",
    ],
    pros: [
      "A free Starter site plan lets you try the platform",
      "Design in a visual canvas without writing code",
      "The CMS is integrated into the visual builder",
    ],
    considerations: [
      "The free Starter plan has limits on pages, CMS items and monthly visits",
      "Site plans and Workspace plans are separate, so total cost depends on both",
      "Check current pricing on Webflow's pricing page",
    ],
    websiteUrl: "https://webflow.com/",
    affiliateUrl: "", // TODO: add only after the Webflow affiliate account is approved
    featured: true,
    tags: ["webflow", "website builder", "cms", "no-code", "hosting"],
    demo: false,
  },
  {
    id: "framer",
    name: "Framer",
    slug: "framer",
    shortDescription: "A no-code website builder with a design canvas, CMS and built-in publishing.",
    description:
      "Framer is a no-code website builder built around a design canvas. It includes a built-in CMS, SEO and performance features, hosting, and AI features such as Wireframer for generating page layouts. The free plan publishes to a free Framer domain and shows a \u201cMade in Framer\u201d banner.",
    category: "website-builders",
    bestFor: "Designers and marketers building custom company websites",
    pricing: "Freemium",
    freePlan: true,
    features: [
      "Design canvas with responsive layouts and animations",
      "Built-in CMS",
      "AI features such as Wireframer for page layouts",
      "Templates from the Framer marketplace",
    ],
    pros: [
      "A free plan is available for building and previewing",
      "Built-in CMS, SEO tools and analytics",
      "Real-time collaboration and one-click publishing",
    ],
    considerations: [
      "The free plan uses a Framer domain and shows a \u201cMade in Framer\u201d banner",
      "Paid plans are added per site, and AI features use credits",
      "Check current plan limits on Framer's pricing page",
    ],
    websiteUrl: "https://www.framer.com/",
    affiliateUrl: "", // TODO: add only after the Framer affiliate account is approved
    featured: true,
    tags: ["framer", "website builder", "no-code", "cms", "ai", "design"],
    demo: false,
  },
  {
    id: "durable",
    name: "Durable",
    slug: "durable",
    shortDescription: "An AI website builder that generates a site from a few questions about your business.",
    description:
      "Durable is an AI website builder. You answer a few questions about your business and it generates a site with content, images and design that you can then customize. Durable also lists business tools such as a CRM, bookings and email campaigns. The free plan lets you build and share a private preview on a durable.site subdomain.",
    category: "website-builders",
    bestFor: "Small businesses wanting a quick, AI-generated site",
    pricing: "Freemium",
    freePlan: true,
    features: [
      "AI-generated site from a few questions",
      "Customizable colors, fonts, layouts, images and text",
      "Built-in SEO features and mobile-responsive sites",
      "Business tools such as CRM, bookings and email campaigns",
    ],
    pros: [
      "Durable says it generates a site in around 30 seconds",
      "A free plan lets you build and preview a site",
      "Custom domains are included with every paid subscription",
    ],
    considerations: [
      "The free plan is a preview on a durable.site subdomain",
      "Review and edit the generated content before publishing",
      "Check current plans on Durable's pricing page",
    ],
    websiteUrl: "https://durable.com/",
    affiliateUrl: "", // TODO: add only after the Durable affiliate account is approved
    featured: true,
    tags: ["durable", "website builder", "ai website builder", "small business", "no-code"],
    demo: false,
  },
  {
    id: "semrush",
    name: "Semrush",
    slug: "semrush",
    shortDescription:
      "An online marketing platform with tools for keyword research, competitor research and rank tracking.",
    description:
      "Semrush offers toolkits for SEO and online marketing, including competitor research, keyword research and ranking tracking, and tools to identify issues holding your site back. Its AI Visibility Toolkit shows how AI platforms such as ChatGPT, Google AI and Gemini feature your brand and competitors. A limited free plan is available, and Semrush lists a 7-day free trial for paid plans.",
    category: "seo-marketing",
    bestFor: "Marketers and site owners researching keywords and competitors",
    pricing: "Freemium",
    freePlan: true,
    features: [
      "Keyword research",
      "Competitor research",
      "Rank tracking",
      "AI Visibility Toolkit for brand mentions on AI platforms",
    ],
    pros: [
      "A limited free plan lets you try it without paying",
      "One platform for SEO research and ranking tracking",
      "Paid plans can be tried free for seven days",
    ],
    considerations: [
      "The free plan is limited (Semrush lists 1 demo project and 10 reports per day)",
      "Data exports are disabled during the free trial",
      "Toolkits, limits and pricing vary by plan, so check Semrush's pricing page",
    ],
    websiteUrl: "https://www.semrush.com/",
    affiliateUrl: "", // TODO: add only after the Semrush affiliate account is approved
    featured: true,
    tags: ["semrush", "seo", "marketing", "keyword research", "competitor research", "rank tracking"],
    demo: false,
  },
  {
    id: "jasper",
    name: "Jasper",
    slug: "jasper",
    shortDescription: "An AI platform for marketing teams to create on-brand written and visual content.",
    description:
      "Jasper describes itself as a generative AI platform built for marketing. It helps marketers create on-brand written and visual content, with features such as Brand Voice, Knowledge assets, Agents for marketing workflows and a browser extension. Jasper offers a 7-day free trial of its Pro plan; its pricing page lists Pro and Business plans and no free plan.",
    category: "ai-writing",
    bestFor: "Marketing teams creating on-brand content",
    pricing: "Paid",
    freePlan: false,
    features: [
      "Canvas editor and Chat for creating content",
      "Brand Voice, Knowledge and Audiences settings",
      "Agents for marketing workflows",
      "Image generation and editing",
    ],
    pros: [
      "A 7-day free trial of the Pro plan",
      "Brand Voice settings to help keep content on-brand",
      "Browser extension for Chrome and Edge",
    ],
    considerations: [
      "No free plan is listed; the free option is a 7-day trial of Pro",
      "Pro includes one seat, and more users means contacting sales about the Business plan",
      "Review AI-generated content before you publish it",
    ],
    websiteUrl: "https://www.jasper.ai/",
    affiliateUrl: "", // TODO: add only after the Jasper affiliate account is approved
    featured: true,
    tags: ["jasper", "ai", "writing", "marketing", "content", "brand voice"],
    demo: false,
  },
  {
    id: "envato-market",
    name: "Envato Market",
    slug: "envato-market",
    shortDescription:
      "A group of seven marketplaces for website themes, templates, plugins and other digital assets.",
    description:
      "Envato Market is a group of seven marketplaces where you can buy digital assets, from website themes and video templates to royalty-free stock photos and audio. Products are created and sold by independent authors, and one Envato account works across all seven sites. Buying an item means purchasing a non-exclusive license to use it, not ownership of it.",
    category: "website-assets",
    bestFor: "Buying website themes, templates and plugins",
    pricing: "Paid",
    freePlan: null,
    features: [
      "Website themes and templates (ThemeForest)",
      "Scripts and plugins (CodeCanyon)",
      "Video, audio, graphics, photos and 3D assets",
      "One Envato account across all seven sites",
    ],
    pros: [
      "A wide range of item types from independent authors",
      "Buy individual items at checkout with PayPal or a credit card",
      "Supported items come with author support for a support period",
    ],
    considerations: [
      "You buy a license, so check whether you need a Regular or Extended license",
      "Each item is sold by an independent author, so check the item page and support terms",
      "Envato Elements is a separate subscription service, not part of Envato Market",
    ],
    websiteUrl: "https://themeforest.net/",
    affiliateUrl: "", // TODO: add only after the Envato Market affiliate account is approved
    featured: false,
    tags: ["envato", "themes", "templates", "plugins", "website", "marketplace", "themeforest"],
    demo: false,
  },
];
