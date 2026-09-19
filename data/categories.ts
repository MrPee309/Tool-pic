import type { Category } from "./types";

export const categories: Category[] = [
  {
    slug: "ai-tools",
    name: "AI Tools",
    filterLabel: "AI",
    description: "Discover AI tools for work, creativity and business.",
    intro:
      "Browse AI tools for everyday work, research and creative projects. Compare what each one is best for and how it is priced.",
    icon: "sparkles",
  },
  {
    slug: "website-builders",
    name: "Website Builders",
    filterLabel: "Website",
    description: "Build and launch websites without writing code.",
    intro:
      "Browse website builders for portfolios, small businesses and landing pages. Compare features and see which have a free plan.",
    icon: "layout",
  },
  {
    slug: "design-tools",
    name: "Design Tools",
    filterLabel: "Design",
    description: "Create graphics, layouts and presentations.",
    intro:
      "Browse design tools for social posts, presentations and brand graphics. Compare what each one is best for.",
    icon: "palette",
  },
  {
    slug: "video-tools",
    name: "Video Tools",
    filterLabel: "Video",
    description: "Edit, repurpose and produce video content.",
    intro:
      "Browse video tools for editing and repurposing footage. Compare features, pricing types and free plan availability.",
    icon: "video",
  },
  {
    slug: "writing-tools",
    name: "Writing Tools",
    filterLabel: "Writing",
    description: "Write, edit and proofread with less effort.",
    intro:
      "Browse writing tools for drafting, editing and proofreading. Compare what each one is best for and how it is priced.",
    icon: "pen",
  },
];
