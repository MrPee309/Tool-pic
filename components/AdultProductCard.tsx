"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import type { AdultProduct } from "@/data/adult-products";
import { trackProductClick } from "@/lib/analytics";
import ProductImagePlaceholder from "./ProductImagePlaceholder";

/** Parses "$39.00" into 39.00, or null if it isn't a plain "$<number>" string. */
function parseUsd(value?: string): number | null {
  if (!value) return null;
  const match = /^\$(\d+(?:\.\d{1,2})?)$/.exec(value.trim());
  return match ? Number(match[1]) : null;
}

/** Whole-number discount computed from the two stored prices, or null. */
function discountPercent(price: string, previous?: string): number | null {
  const now = parseUsd(price);
  const before = parseUsd(previous);
  if (now === null || before === null || before <= now) return null;
  return Math.round(((before - now) / before) * 100);
}

const IMAGE_BOX = "aspect-square w-full";

export default function AdultProductCard({ product }: { product: AdultProduct }) {
  const [imageFailed, setImageFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // An image that fails before React hydrates never fires onError on the client,
  // so check its state once on mount as well.
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setImageFailed(true);
  }, []);

  const discount = discountPercent(product.price, product.previousPrice);
  const track = () => trackProductClick(product, "adult-wellness-card");
  const trackMiddleClick = (e: MouseEvent) => {
    if (e.button === 1) track();
  };
  const priceSummary = product.previousPrice
    ? `${product.price}, was ${product.previousPrice}`
    : product.price;
  const showImage = Boolean(product.image) && !imageFailed;

  return (
    // The whole card is ONE link: no nested <a> or <button>, one tab stop,
    // one clear announcement for screen readers.
    <a
      href={product.affiliateUrl}
      target="_blank"
      rel="sponsored noopener noreferrer"
      onClick={track}
      onAuxClick={trackMiddleClick}
      aria-label={`${product.name}, ${priceSummary}. View product on ADUTOYS (opens in a new tab).`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-colors hover:border-brand-200"
    >
      <div aria-hidden="true" className="flex h-full flex-col">
        <div className="relative bg-surface">
          {showImage ? (
            // Plain <img>: works for local /public paths and remote URLs alike,
            // with no next.config image settings. no-referrer avoids
            // Referer-based hotlink blocking on the merchant's server.
            // eslint-disable-next-line @next/next/no-img-element
            <img
              ref={imgRef}
              src={product.image}
              alt=""
              width={550}
              height={550}
              // Eager on purpose: with loading="lazy", a deferred image reports
              // complete=true / naturalWidth=0 and would be mistaken for a failure.
              // Only five images, so eager loading costs little.
              loading="eager"
              decoding="async"
              referrerPolicy="no-referrer"
              onError={() => setImageFailed(true)}
              className={`${IMAGE_BOX} object-contain`}
            />
          ) : (
            <ProductImagePlaceholder className={IMAGE_BOX} />
          )}
          {discount !== null && (
            <span className="absolute left-3 top-3 rounded-full bg-brand px-2.5 py-1 text-xs font-semibold text-white">
              -{discount}%
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col p-4 sm:p-5">
          <h3 className="break-words text-base font-semibold leading-snug text-navy-900 sm:text-lg">
            {product.name}
          </h3>

          <p className="mt-2 text-sm leading-6 text-navy-700">{product.description}</p>

          <div className="mt-auto pt-4">
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-navy-900">{product.price}</span>
              {product.previousPrice && (
                <span className="text-sm text-muted line-through">{product.previousPrice}</span>
              )}
            </div>
            <p className="mt-1 text-xs text-muted">USD. Price as observed; confirm on ADUTOYS.</p>

            <span className="btn btn-primary mt-4 w-full group-hover:bg-brand-dark">
              View Product
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}
