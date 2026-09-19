import type { Tool } from "@/data/types";

export interface ToolClickEvent {
  tool_id: string;
  tool_name: string;
  tool_slug: string;
  category: string;
  /** Path of the page where the click happened. */
  page: string;
  /** Which UI element was clicked, e.g. "tool-card" or "compare-table". */
  location: string;
  /** Hostname of the referring site, if any (e.g. www.reddit.com). */
  referrer: string;
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    plausible?: (event: string, options?: { props?: Record<string, string> }) => void;
  }
}

function referrerHost(): string {
  try {
    return document.referrer ? new URL(document.referrer).hostname : "";
  } catch {
    return "";
  }
}

/**
 * Records an outbound tool click.
 * For now this only logs in development and forwards to gtag/Plausible if a
 * script for either has been added to the page. Connect real analytics later.
 */
export function trackToolClick(
  tool: Pick<Tool, "id" | "name" | "slug" | "category">,
  location = "unknown",
): void {
  if (typeof window === "undefined") return;

  const event: ToolClickEvent = {
    tool_id: tool.id,
    tool_name: tool.name,
    tool_slug: tool.slug,
    category: tool.category,
    page: window.location.pathname,
    location,
    referrer: referrerHost(),
  };

  try {
    if (typeof window.plausible === "function") {
      window.plausible("Tool Click", { props: { ...event } });
    }
    if (typeof window.gtag === "function") {
      window.gtag("event", "tool_click", event);
    }
    if (process.env.NODE_ENV !== "production") {
      console.info("[Tool-Pic] tool_click", event);
    }
  } catch {
    // Analytics must never break navigation.
  }
}
