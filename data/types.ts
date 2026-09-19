export type CategorySlug =
  | "website-builders"
  | "seo-marketing"
  | "ai-writing"
  | "website-assets";

export type Pricing = "Free" | "Freemium" | "Paid";

export type IconName =
  | "sparkles"
  | "layout"
  | "palette"
  | "video"
  | "pen"
  | "search"
  | "menu"
  | "close"
  | "check";

export type SortOption = "featured" | "name-asc" | "name-desc" | "pricing";

export interface Category {
  slug: CategorySlug;
  name: string;
  /** Short label used in filter chips. */
  filterLabel: string;
  description: string;
  intro: string;
  icon: IconName;
}

export interface Tool {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  category: CategorySlug;
  bestFor: string;
  pricing: Pricing;
  /** true = free plan exists, false = no free plan, null = not verified yet. */
  freePlan: boolean | null;
  features: string[];
  pros: string[];
  considerations: string[];
  websiteUrl: string;
  /** Add your real affiliate URL here. Leave empty to link to websiteUrl. */
  affiliateUrl?: string;
  /** Optional path to a local image in /public, e.g. "/logos/example.svg". */
  logo?: string;
  featured: boolean;
  tags: string[];
  /** Marks placeholder content. Remove (or set false) once verified. */
  demo?: boolean;
}

export interface Comparison {
  slug: string;
  title: string;
  description: string;
  intro: string;
  toolSlugs: string[];
  checklist: string[];
}
