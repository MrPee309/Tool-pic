import type { Tool } from "@/data/types";

/** True when a non-empty affiliate URL has been set for the tool. */
export function hasAffiliateUrl(tool: Pick<Tool, "affiliateUrl">): boolean {
  return Boolean(tool.affiliateUrl && tool.affiliateUrl.trim());
}

/** The single place that decides where a "Visit Tool" button points. */
export function getToolUrl(tool: Pick<Tool, "affiliateUrl" | "websiteUrl">): string {
  return hasAffiliateUrl(tool) ? (tool.affiliateUrl as string).trim() : tool.websiteUrl;
}
