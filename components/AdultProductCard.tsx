"use client";

import type { MouseEvent } from "react";
import type { AdultProduct } from "@/data/adult-products";
import { trackProductClick } from "@/lib/analytics";
import ProductImagePlaceholder from "./ProductImagePlaceholder";

/** Parses "$39.00" into 39.00, or null if it isn't a plain "$<number>" string. */
function parseUsd(value?: string): number | null {
  if (!value) return null;
  const match = /^\$(\d+(?:\.\d{1,2})?)$/.exec(value.trim());
  return match ? Number(match[1]) : null;
}

/** Whole-percent discount, only when both prices parse cleanly and the price actually dropped. */
function discountPercent(price: string, previousPrice?: string): number | null {
  const current = parseUsd(price);
  const previous = parseUsd(previousPrice);
  if (current === null || previous === null || previous <= current) return null;
  return Math.round(((previous - current) / previous) * 100);
}

export default function AdultProductCard({ product }: { product: AdultProduct }) {
  const track = () => trackProductClick(product, "adult-wellness-card");
  const trackMiddleClick = (e: MouseEvent) => {
    if (e.button === 1) track();
  };
  const discount = discountPercent(product.price, product.previousPrice);
  const priceSummary = product.previousPrice
    ? `${product.price}, reduced from ${product.previousPrice}`
    : product.price;

  return (
    // The whole card is one link (a "stretched link" pattern): clicking
    // anywhere on it — not just the "View Product" label — opens the exact
    // same tracked ADUTOYS URL. The visible content is marked aria-hidden
    // and the link carries one clear aria-label, so screen readers get a
    // single, concise announcement instead of the name/price/button text
    // all running together.
    <a
      href={product.affiliateUrl}
      target="_blank"
      rel="sponsored noopener noreferrer"
      onClick={track}
      onAuxClick={trackMiddleClick}
      aria-label={`${product.name}, ${priceSummary}. View product on ADUTOYS (opens in a new tab).`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-colors hover:border-brand-200 hover:bg-brand-50"
    >
      <div aria-hidden="true" className="flex h-full flex-col">
        <div className="relative">
          {product.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={product.image} alt="" className="h-44 w-full object-cover sm:h-48" />
          ) : (
            <ProductImagePlaceholder className="h-44 w-full rounded-none sm:h-48" />
          )}
          {discount !== null && (
            <span className="absolute left-3 top-3 rounded-full bg-brand px-2.5 py-1 text-xs font-semibold text-white">
              -{discount}%
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <h3 className="break-words text-lg font-semibold leading-snug text-navy-900">
            {product.name}
          </h3>

          <p className="mt-2 text-sm leading-6 text-navy-700">{product.description}</p>

          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-xl font-bold text-navy-900">{product.price}</span>
            {product.previousPrice && (
              <span className="text-sm text-muted line-through">{product.previousPrice}</span>
            )}
          </div>
          <p className="mt-1 text-xs text-muted">USD. Price as observed; confirm on the merchant&apos;s site.</p>

          <span className="btn btn-primary mt-5 w-full group-hover:bg-brand-dark">
            <span>View Product</span>
            <span>→</span>
          </span>
        </div>
      </div>
    </a>
  );
}
