/**
 * ADULT WELLNESS PRODUCT DATA
 * ---------------------------------------------------------------------------
 * This is the site's full catalog: physical consumer products with prices.
 *
 * SOURCE OF TRUTH FOR PRICES: the person who requested this page, not a
 * verified provider page (see note on product 2 below). Treat displayed
 * prices as observed values that can change — not a live quote.
 *
 * AFFILIATE URLS: copied verbatim, tracking parameter included. Do not
 * shorten, re-encode or strip the `?tracking=...` query string.
 */
export interface AdultProduct {
  id: string;
  name: string;
  slug: string;
  /** One or two neutral, factual sentences. No explicit detail. */
  description: string;
  price: string;
  /** Only set when a discount is actually shown by the merchant. */
  previousPrice?: string;
  affiliateUrl: string;
  /** True if the exact product title could not be confirmed against the merchant's page. */
  titleUnverified?: boolean;
  /**
   * Optional path to a locally-stored image under /public, e.g. "/products/strap-on.jpg".
   * Left unset for every product below: no image was fetched from ADUTOYS (see README).
   * Add a real image only if you have the right to use it (your own photo, or an asset
   * ADUTOYS provides through its affiliate program) and drop the file into /public.
   */
  image?: string;
}

export const adultProducts: AdultProduct[] = [
  {
    id: "adutoys-strap-on-beginners",
    name: "1 Inch Small Strap-On Dildo for Beginners",
    slug: "strap-on-dildo-beginners",
    description:
      "A compact strap-on harness set sized for people trying strap-on play for the first time.",
    price: "$39.00",
    previousPrice: "$79.00",
    affiliateUrl:
      "https://www.adutoys.com/1-inch-dildo-small-strap-on-beginners?tracking=2fDD6gQeKVPnRCwRvzIuK1ZiZoxslZXO91hsh3yyCCbtQM8CefKjUwM7SZvMIBhY",
  },
  {
    id: "adutoys-mini-male-masturbator",
    name: "Mini Silicone Sex Doll / Male Masturbator",
    slug: "mini-silicone-male-masturbator",
    description: "A compact silicone masturbator for men.",
    price: "$184.98",
    affiliateUrl:
      "https://www.adutoys.com/copy-of-sex-doll-male-masturbator?tracking=2fDD6gQeKVPnRCwRvzIuK1ZiZoxslZXO91hsh3yyCCbtQM8CefKjUwM7SZvMIBhY",
    // The URL slug ("copy-of-sex-doll-male-masturbator") suggests the listing
    // was duplicated from another product, so the title above may not match
    // what the merchant currently shows. Could not confirm against the live
    // product page — verify before publishing.
    titleUnverified: true,
  },
  {
    id: "adutoys-torso-masturbator",
    name: "Half-Body Silicone Torso for Men",
    slug: "half-body-silicone-torso",
    description: "A silicone torso-style masturbator for men.",
    price: "$188.49",
    affiliateUrl:
      "https://www.adutoys.com/1.9lb-half-body-silicone-sex-toy-torso-for-men-masturbator-fleshlight?tracking=2fDD6gQeKVPnRCwRvzIuK1ZiZoxslZXO91hsh3yyCCbtQM8CefKjUwM7SZvMIBhY",
  },
  {
    id: "adutoys-usb-vibrator-quiet",
    name: "Quiet USB-Charging Vibrator — 10 Frequencies",
    slug: "quiet-usb-vibrator-10-frequencies",
    description: "A rechargeable vibrator with 10 vibration frequencies and a quiet motor.",
    price: "$33.14",
    previousPrice: "$38.99",
    affiliateUrl:
      "https://www.adutoys.com/10-frequencies-vibrating-quiet-usb-charging-vibrator?tracking=2fDD6gQeKVPnRCwRvzIuK1ZiZoxslZXO91hsh3yyCCbtQM8CefKjUwM7SZvMIBhY",
  },
  {
    id: "adutoys-womens-vibrator",
    name: "Women's Vibrator — 10 Vibration Modes",
    slug: "womens-vibrator-10-modes",
    description: "A vibrator for women with 10 vibration modes.",
    price: "$115.69",
    affiliateUrl:
      "https://www.adutoys.com/10-frequencies-vibration-vibrator-for-women-masturbation?tracking=2fDD6gQeKVPnRCwRvzIuK1ZiZoxslZXO91hsh3yyCCbtQM8CefKjUwM7SZvMIBhY",
  },
];
