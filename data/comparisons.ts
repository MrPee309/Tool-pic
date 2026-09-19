import type { Comparison } from "./types";

/**
 * Comparisons only use tools that exist in data/tools.ts. Comparisons for
 * SEO and AI writing are not included yet: each of those categories has a
 * single verified tool, and a comparison needs at least two.
 */
export const comparisons: Comparison[] = [
  {
    slug: "website-builders",
    title: "Wix vs Webflow vs Framer vs Durable",
    description:
      "Compare Wix, Webflow, Framer and Durable side by side: how each builds sites, whether there is a free plan, and what each is best for.",
    intro:
      "These four website builders take different approaches. Wix offers templates, a drag-and-drop editor and an AI website builder. Webflow is a visual builder with a built-in CMS and hosting. Framer is a no-code builder with a design canvas. Durable generates a site from a few questions about your business. Confirm current plans, limits and pricing on each provider's website.",
    toolSlugs: ["wix", "webflow", "framer", "durable"],
    checklist: [
      "Ease of use: each of the four has a free way to start (a free plan or a free preview), so you can try the editor before you pay.",
      "Building approach: Durable generates a first version for you, Wix combines templates with an AI builder, and Webflow and Framer are visual builders where you place and style elements yourself.",
      "Customization and design: Webflow lets you start from a blank canvas or a template, Framer is built around a design canvas, and Wix lists 2,000+ templates.",
      "AI-assisted features: Wix has an AI website builder, Framer lists Wireframer, Durable generates its sites with AI, and Webflow lists AI features on its pricing page (some need a paid Workspace plan on a Starter site).",
      "Free options: Wix's free site uses a Wix domain, Webflow's free Starter plan publishes to webflow.io, Framer's free plan shows a \u201cMade in Framer\u201d banner, and Durable's free plan is a preview on durable.site.",
      "Pricing model: Wix uses Premium plans, Webflow and Framer let you upgrade individual sites to paid plans, and Durable is a subscription with custom domains included.",
    ],
  },
  {
    slug: "website-builders-for-small-business",
    title: "Website Builders for Small Business Compared",
    description:
      "Compare Wix, Webflow, Framer and Durable for small-business websites: setup approach, built-in business tools, domains and free-plan details.",
    intro:
      "This page looks at the same four builders from a small-business point of view: how a first version of the site gets made, which built-in business tools each lists, and what a free start includes. Confirm current plans and pricing on each provider's website.",
    toolSlugs: ["wix", "webflow", "framer", "durable"],
    checklist: [
      "Getting online: Durable generates a site from a few questions about your business, while Wix, Webflow and Framer give you an editor to build and adjust pages yourself.",
      "Business tools: Wix lists eCommerce, scheduling and CRM, Durable lists a CRM, bookings and email campaigns, Webflow includes a CMS and lists eCommerce, and Framer includes a CMS, SEO tools and analytics.",
      "Domains: connecting a custom domain on Wix requires a Premium plan, Webflow's free Starter plan uses a webflow.io subdomain, Framer's free plan uses a Framer domain, and Durable includes custom domains with every subscription.",
      "Your time: consider how much time you can spend learning an editor compared with how much you would rather have generated for you.",
      "Growth: think about whether you will need a CMS for regular content, an online store, or bookings, and check that the plan you would need includes it.",
    ],
  },
];
