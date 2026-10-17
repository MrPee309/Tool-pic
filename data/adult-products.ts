/**
 * ADULT WELLNESS PRODUCT DATA — the site's whole catalog.
 * ---------------------------------------------------------------------------
 * SOURCE OF TRUTH: names, prices and affiliate URLs were supplied by the site
 * owner. Prices are observed values, not a live feed — confirm on ADUTOYS.
 *
 * AFFILIATE URLS: copied verbatim, tracking parameter included. Do not
 * shorten, re-encode or strip the `?tracking=...` query string.
 *
 * IMAGES: `image` is either a local path under /public (preferred, e.g.
 * "/products/womens-vibrator.jpg") or a full https:// URL. The five below
 * currently point at the official ADUTOYS catalog image URLs supplied by the
 * site owner (hotlinked). If an image fails to load, the card shows a neutral
 * "Image unavailable" placeholder — never a substitute product photo.
 * To switch a product to a local copy: save the file in public/products/,
 * commit it, and change `image` to "/products/<file-name>".
 */

export type AdultCategory = "vibrators" | "male" | "strap-on";

/** Labels shown on the filter chips. Derived from each product's own name. */
export const adultCategories: { id: AdultCategory; label: string }[] = [
  { id: "vibrators", label: "Vibrators" },
  { id: "male", label: "For men" },
  { id: "strap-on", label: "Strap-ons" },
];

export interface AdultProduct {
  id: string;
  name: string;
  slug: string;
  category: AdultCategory;
  /** One neutral, factual sentence. No explicit detail. */
  description: string;
  price: string;
  /** Only set when a discount is actually shown by the merchant. */
  previousPrice?: string;
  affiliateUrl: string;
  /** Local /public path (preferred) or full https:// URL. Optional. */
  image?: string;
  /** True if the exact product title could not be confirmed against the merchant's page. */
  titleUnverified?: boolean;
}

export const adultProducts: AdultProduct[] = [
  {
    id: "adutoys-strap-on-beginners",
    name: "1 Inch Small Strap-On Dildo for Beginners",
    slug: "strap-on-dildo-beginners",
    category: "strap-on",
    description:
      "A compact strap-on harness set sized for people trying strap-on play for the first time.",
    price: "$39.00",
    previousPrice: "$79.00",
    affiliateUrl:
      "https://www.adutoys.com/1-inch-dildo-small-strap-on-beginners?tracking=2fDD6gQeKVPnRCwRvzIuK1ZiZoxslZXO91hsh3yyCCbtQM8CefKjUwM7SZvMIBhY",
    image:
      "https://www.adutoys.com/image/cache/catalog/images/toys/1-inch-dildo_feature-550x550.jpg",
  },
  {
    id: "adutoys-mini-male-masturbator",
    name: "Mini Silicone Sex Doll / Male Masturbator",
    slug: "mini-silicone-male-masturbator",
    category: "male",
    description: "A compact silicone masturbator for men.",
    price: "$184.98",
    affiliateUrl:
      "https://www.adutoys.com/copy-of-sex-doll-male-masturbator?tracking=2fDD6gQeKVPnRCwRvzIuK1ZiZoxslZXO91hsh3yyCCbtQM8CefKjUwM7SZvMIBhY",
    image:
      "https://www.adutoys.com/image/cache/catalog/images/toys/copy-of-sex-doll-male-masturbator_feature-550x550.jpg",
    // The URL slug ("copy-of-sex-doll-male-masturbator") suggests the listing
    // was duplicated from another product, so the title above may not match
    // what the merchant currently shows — verify before publishing.
    titleUnverified: true,
  },
  {
    id: "adutoys-torso-masturbator",
    name: "Half-Body Silicone Torso for Men",
    slug: "half-body-silicone-torso",
    category: "male",
    description: "A silicone torso-style masturbator for men.",
    price: "$188.49",
    affiliateUrl:
      "https://www.adutoys.com/1.9lb-half-body-silicone-sex-toy-torso-for-men-masturbator-fleshlight?tracking=2fDD6gQeKVPnRCwRvzIuK1ZiZoxslZXO91hsh3yyCCbtQM8CefKjUwM7SZvMIBhY",
    image:
      "https://www.adutoys.com/image/cache/catalog/images/toys/19lbhalfbodytprsextoytorsoformenmasturbator_feature-550x550.jpg",
  },
  {
    id: "adutoys-usb-vibrator-quiet",
    name: "Quiet USB-Charging Vibrator — 10 Frequencies",
    slug: "quiet-usb-vibrator-10-frequencies",
    category: "vibrators",
    description: "A rechargeable vibrator with 10 vibration frequencies and a quiet motor.",
    price: "$33.14",
    previousPrice: "$38.99",
    affiliateUrl:
      "https://www.adutoys.com/10-frequencies-vibrating-quiet-usb-charging-vibrator?tracking=2fDD6gQeKVPnRCwRvzIuK1ZiZoxslZXO91hsh3yyCCbtQM8CefKjUwM7SZvMIBhY",
    image:
      "https://www.adutoys.com/image/cache/catalog/images/toys/10frequenciesvibratingquietusbchargingvibrator_feature-550x550.jpg",
  },
  {
    id: "adutoys-womens-vibrator",
    name: "Women's Vibrator — 10 Vibration Modes",
    slug: "womens-vibrator-10-modes",
    category: "vibrators",
    description: "A vibrator for women with 10 vibration modes.",
    price: "$115.69",
    affiliateUrl:
      "https://www.adutoys.com/10-frequencies-vibration-vibrator-for-women-masturbation?tracking=2fDD6gQeKVPnRCwRvzIuK1ZiZoxslZXO91hsh3yyCCbtQM8CefKjUwM7SZvMIBhY",
    image:
      "https://www.adutoys.com/image/cache/catalog/images/toys/10frequenciesvibrationvibratorforwomenmasturbation_feature-550x550.jpg",
  },
];
