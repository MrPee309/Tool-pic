import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = ["", "/adult-wellness", "/about", "/affiliate-disclosure", "/privacy", "/terms"];
  return paths.map((path) => ({ url: `${siteConfig.url}${path}`, lastModified: now }));
}
