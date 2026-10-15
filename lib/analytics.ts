export interface ProductClickEvent {
  product_id: string;
  product_name: string;
  product_slug: string;
  page: string;
  location: string;
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
 * Records an outbound click on an Adult Wellness product.
 * Logs in development, forwards to gtag/Plausible if present.
 */
export function trackProductClick(
  product: { id: string; name: string; slug: string },
  location = "unknown",
): void {
  if (typeof window === "undefined") return;

  const event: ProductClickEvent = {
    product_id: product.id,
    product_name: product.name,
    product_slug: product.slug,
    page: window.location.pathname,
    location,
    referrer: referrerHost(),
  };

  try {
    if (typeof window.plausible === "function") {
      window.plausible("Product Click", { props: { ...event } });
    }
    if (typeof window.gtag === "function") {
      window.gtag("event", "product_click", event);
    }
    if (process.env.NODE_ENV !== "production") {
      console.info("[Tool-Pic] product_click", event);
    }
  } catch {
    // Analytics must never break navigation.
  }
}
