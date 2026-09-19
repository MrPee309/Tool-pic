import type { Tool } from "./types";

/**
 * TOOL DATA
 * ---------------------------------------------------------------------------
 * Every entry below is DEMO DATA (demo: true). The names are deliberately
 * generic and websiteUrl points to example.com, so nothing here makes claims
 * about a real product. Replace each entry with a verified tool before launch.
 *
 * To add a tool: copy an entry, give it a unique id/slug, pick a category slug
 * from data/categories.ts. No component changes are needed.
 *
 * Affiliate links: paste your real link into `affiliateUrl`. If it is empty,
 * the "Visit Tool" button links to `websiteUrl` instead.
 */
export const tools: Tool[] = [
  {
    id: "demo-chat-assistant",
    name: "Example Chat Assistant",
    slug: "example-chat-assistant",
    shortDescription: "A general-purpose AI assistant for drafting, brainstorming and questions.",
    description:
      "A general-purpose AI assistant you talk to in plain language. People typically use this kind of tool to draft text, brainstorm ideas and get quick answers.",
    category: "ai-tools",
    bestFor: "Drafting and brainstorming",
    pricing: "Freemium",
    freePlan: true,
    features: ["Conversational interface", "Text drafting and editing", "Idea generation"],
    pros: ["Flexible across many everyday tasks", "Quick to start with"],
    considerations: [
      "Outputs should be reviewed before you use them",
      "Check usage limits on the free plan with the provider",
    ],
    websiteUrl: "https://example.com",
    affiliateUrl: "", // TODO: paste verified affiliate URL
    featured: true,
    tags: ["ai", "assistant", "chatbot", "productivity", "writing"],
    demo: true,
  },
  {
    id: "demo-image-generator",
    name: "Example Image Generator",
    slug: "example-image-generator",
    shortDescription: "Create images from text descriptions.",
    description:
      "An AI tool that creates images from a written description. Useful for concept art, social graphics and quick visual ideas.",
    category: "ai-tools",
    bestFor: "Concept art and social graphics",
    pricing: "Freemium",
    freePlan: true,
    features: ["Text-to-image generation", "Style options", "Image download"],
    pros: ["Fast way to explore visual ideas", "No design skills needed"],
    considerations: [
      "Check the provider's terms on commercial use",
      "Results can vary between prompts",
    ],
    websiteUrl: "https://example.com",
    affiliateUrl: "", // TODO: paste verified affiliate URL
    featured: false,
    tags: ["ai", "images", "generator", "creative"],
    demo: true,
  },
  {
    id: "demo-site-builder-ai",
    name: "Example Site Builder AI",
    slug: "example-site-builder-ai",
    shortDescription: "Describe your site and get a first draft to edit.",
    description:
      "An AI-assisted website builder that creates a starting draft from a short description. You then adjust the layout, text and images in a visual editor.",
    category: "website-builders",
    bestFor: "Small business and personal sites",
    pricing: "Freemium",
    freePlan: true,
    features: ["AI-generated first draft", "Drag-and-drop editing", "Template library"],
    pros: ["Gets you from blank page to draft quickly", "Visual editing, no code required"],
    considerations: [
      "Check what the free plan includes before you build",
      "Confirm domain and export options on the provider's site",
    ],
    websiteUrl: "https://example.com",
    affiliateUrl: "", // TODO: paste verified affiliate URL
    featured: true,
    tags: ["ai", "website builder", "website", "no-code"],
    demo: true,
  },
  {
    id: "demo-portfolio-builder-ai",
    name: "Example Portfolio Builder AI",
    slug: "example-portfolio-builder-ai",
    shortDescription: "AI-assisted portfolio sites for creatives and freelancers.",
    description:
      "A website builder focused on portfolios. It uses AI to suggest a structure and wording, which you can then refine.",
    category: "website-builders",
    bestFor: "Portfolios and freelancers",
    pricing: "Freemium",
    freePlan: true,
    features: ["AI layout suggestions", "Portfolio-focused templates", "Image galleries"],
    pros: ["Templates built around showing work", "Simple to update"],
    considerations: [
      "Less suited to complex, multi-page business sites",
      "Verify plan limits with the provider",
    ],
    websiteUrl: "https://example.com",
    affiliateUrl: "", // TODO: paste verified affiliate URL
    featured: false,
    tags: ["ai", "website builder", "portfolio", "website"],
    demo: true,
  },
  {
    id: "demo-page-studio",
    name: "Example Page Studio",
    slug: "example-page-studio",
    shortDescription: "A visual builder for landing pages with AI copy suggestions.",
    description:
      "A visual page builder aimed at landing pages. It includes AI suggestions for headings and body copy that you can accept or rewrite.",
    category: "website-builders",
    bestFor: "Landing pages and campaigns",
    pricing: "Paid",
    freePlan: false,
    features: ["Visual page editor", "Reusable sections", "AI copy suggestions"],
    pros: ["Focused on single-page conversions", "Reusable sections speed up new pages"],
    considerations: [
      "No free plan, so check for a trial before paying",
      "Confirm current pricing on the provider's site",
    ],
    websiteUrl: "https://example.com",
    affiliateUrl: "", // TODO: paste verified affiliate URL
    featured: false,
    tags: ["ai", "website builder", "landing page", "no-code"],
    demo: true,
  },
  {
    id: "demo-design-canvas",
    name: "Example Design Canvas",
    slug: "example-design-canvas",
    shortDescription: "A browser-based design tool for social posts and presentations.",
    description:
      "A browser-based design tool with ready-made templates for social posts, presentations and simple brand graphics.",
    category: "design-tools",
    bestFor: "Social posts and presentations",
    pricing: "Freemium",
    freePlan: true,
    features: ["Template library", "Drag-and-drop editor", "Export to common formats"],
    pros: ["Easy for non-designers", "Works in the browser"],
    considerations: [
      "Some templates or assets may need a paid plan",
      "Check export options for your use case",
    ],
    websiteUrl: "https://example.com",
    affiliateUrl: "", // TODO: paste verified affiliate URL
    featured: true,
    tags: ["design", "graphics", "templates", "presentations"],
    demo: true,
  },
  {
    id: "demo-video-editor",
    name: "Example Video Editor",
    slug: "example-video-editor",
    shortDescription: "A browser-based video editor for short clips.",
    description:
      "A browser-based video editor for trimming, arranging and exporting short clips without installing software.",
    category: "video-tools",
    bestFor: "Short-form video editing",
    pricing: "Freemium",
    freePlan: true,
    features: ["Timeline editing", "Captions", "Export options"],
    pros: ["No installation needed", "Approachable for beginners"],
    considerations: [
      "Check resolution and watermark rules on the free plan",
      "Large projects may need a faster connection",
    ],
    websiteUrl: "https://example.com",
    affiliateUrl: "", // TODO: paste verified affiliate URL
    featured: true,
    tags: ["video", "editing", "captions"],
    demo: true,
  },
  {
    id: "demo-clip-generator-ai",
    name: "Example Clip Generator AI",
    slug: "example-clip-generator-ai",
    shortDescription: "Turn long videos into short clips with AI.",
    description:
      "An AI tool that finds moments in a long video and turns them into short clips for social platforms.",
    category: "video-tools",
    bestFor: "Repurposing long videos",
    pricing: "Paid",
    freePlan: false,
    features: ["Automatic clip suggestions", "Caption generation", "Vertical formats"],
    pros: ["Saves time on repurposing", "Designed around short-form output"],
    considerations: [
      "Review every clip before publishing",
      "No free plan, so check for a trial",
    ],
    websiteUrl: "https://example.com",
    affiliateUrl: "", // TODO: paste verified affiliate URL
    featured: true,
    tags: ["ai", "video", "clips", "social"],
    demo: true,
  },
  {
    id: "demo-writing-assistant",
    name: "Example Writing Assistant",
    slug: "example-writing-assistant",
    shortDescription: "Suggestions to improve clarity, tone and structure.",
    description:
      "A writing assistant that suggests edits for clarity, tone and structure as you write.",
    category: "writing-tools",
    bestFor: "Polishing emails and documents",
    pricing: "Freemium",
    freePlan: true,
    features: ["Clarity and tone suggestions", "Rewrite options", "Browser and app support"],
    pros: ["Useful for everyday writing", "Quick suggestions while you type"],
    considerations: [
      "Suggestions are not always right, so review them",
      "Some features may require a paid plan",
    ],
    websiteUrl: "https://example.com",
    affiliateUrl: "", // TODO: paste verified affiliate URL
    featured: true,
    tags: ["ai", "writing", "editing"],
    demo: true,
  },
  {
    id: "demo-grammar-checker",
    name: "Example Grammar Checker",
    slug: "example-grammar-checker",
    shortDescription: "Spelling and grammar checks for everyday writing.",
    description:
      "A simple spelling and grammar checker for emails, documents and web forms.",
    category: "writing-tools",
    bestFor: "Proofreading",
    pricing: "Free",
    freePlan: true,
    features: ["Spelling checks", "Grammar checks", "Works across websites"],
    pros: ["Free to use", "Simple and unobtrusive"],
    considerations: [
      "Fewer advanced features than full writing assistants",
      "Confirm what data it processes in its privacy policy",
    ],
    websiteUrl: "https://example.com",
    affiliateUrl: "", // TODO: paste verified affiliate URL
    featured: false,
    tags: ["writing", "grammar", "proofreading"],
    demo: true,
  },
];
