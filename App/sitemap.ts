import type { MetadataRoute } from "next";
import { getAllCategories, getAllComparisons, getAllTools } from "@/lib/tools";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPaths = [
    "",
    "/tools",
    "/categories",
    "/compare",
    "/about",
    "/affiliate-disclosure",
    "/privacy",
    "/terms",
  ];

  const paths = [
    ...staticPaths,
    ...getAllTools().map((t) => `/tools/${t.slug}`),
    ...getAllCategories().map((c) => `/categories/${c.slug}`),
    ...getAllComparisons().map((c) => `/compare/${c.slug}`),
  ];

  return paths.map((path) => ({ url: `${siteConfig.url}${path}`, lastModified: now }));
}
