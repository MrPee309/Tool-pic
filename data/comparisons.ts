import type { Comparison } from "./types";

export const comparisons: Comparison[] = [
  {
    slug: "ai-website-builders",
    title: "AI Website Builders Compared",
    description:
      "Compare AI website builders side by side: what each is best for, whether there is a free plan, and the main features.",
    intro:
      "AI website builders generate a first draft of a site from a short description, which you then edit. This page compares them on the points that usually decide the choice. Details can change, so confirm pricing and features on each provider's website.",
    toolSlugs: [
      "example-site-builder-ai",
      "example-portfolio-builder-ai",
      "example-page-studio",
    ],
    checklist: [
      "Check what the free plan actually includes, such as page limits or branding.",
      "Find out whether you can connect your own domain, and on which plan.",
      "Look at how easily you can edit the AI-generated draft.",
      "Check whether you can export your site if you switch tools later.",
    ],
  },
  {
    slug: "ai-video-tools",
    title: "AI Video Tools Compared",
    description:
      "Compare video tools side by side: what each is best for, whether there is a free plan, and the main features.",
    intro:
      "Video tools range from full editors to tools that turn long videos into short clips. This page compares them on the points that usually decide the choice. Details can change, so confirm pricing and features on each provider's website.",
    toolSlugs: ["example-video-editor", "example-clip-generator-ai"],
    checklist: [
      "Check export limits, resolution and watermarks on the free plan.",
      "Confirm what rights you have to the videos you create.",
      "Test with a short sample before committing to a paid plan.",
      "Check how the tool handles your source footage and files.",
    ],
  },
];
