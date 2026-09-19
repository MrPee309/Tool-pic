import { tools } from "@/data/tools";
import { categories } from "@/data/categories";
import { comparisons } from "@/data/comparisons";
import type { Category, CategorySlug, Comparison, Pricing, SortOption, Tool } from "@/data/types";

export const pricingOptions: Pricing[] = ["Free", "Freemium", "Paid"];

const pricingRank: Record<Pricing, number> = { Free: 0, Freemium: 1, Paid: 2 };

export function getAllTools(): Tool[] {
  return tools;
}

export function getAllCategories(): Category[] {
  return categories;
}

export function getAllComparisons(): Comparison[] {
  return comparisons;
}

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug);
}

export function getToolsBySlugs(slugs: string[]): Tool[] {
  return slugs
    .map((slug) => getToolBySlug(slug))
    .filter((t): t is Tool => Boolean(t));
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getCategoryForTool(tool: Pick<Tool, "category">): Category {
  const category = categories.find((c) => c.slug === tool.category);
  if (!category) {
    throw new Error(`Unknown category "${tool.category}". Add it to data/categories.ts.`);
  }
  return category;
}

export function getComparisonBySlug(slug: string): Comparison | undefined {
  return comparisons.find((c) => c.slug === slug);
}

export function getToolsByCategory(slug: CategorySlug): Tool[] {
  return tools.filter((t) => t.category === slug);
}

export function getFeaturedTools(limit = 6): Tool[] {
  return tools.filter((t) => t.featured).slice(0, limit);
}

/** Same-category tools first, then tools sharing tags. */
export function getRelatedTools(tool: Tool, limit = 3): Tool[] {
  const others = tools.filter((t) => t.id !== tool.id);
  const score = (t: Tool) =>
    (t.category === tool.category ? 10 : 0) + t.tags.filter((tag) => tool.tags.includes(tag)).length;
  return others
    .map((t) => ({ t, s: score(t) }))
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s || a.t.name.localeCompare(b.t.name))
    .slice(0, limit)
    .map((x) => x.t);
}

export function freePlanLabel(tool: Pick<Tool, "freePlan">): string {
  if (tool.freePlan === true) return "Yes";
  if (tool.freePlan === false) return "No";
  return "Not verified";
}

function haystack(tool: Tool): string {
  const category = categories.find((c) => c.slug === tool.category);
  return [
    tool.name,
    category?.name ?? "",
    category?.filterLabel ?? "",
    tool.description,
    tool.shortDescription,
    tool.bestFor,
    tool.tags.join(" "),
  ]
    .join(" ")
    .toLowerCase();
}

/** Every word in the query must match somewhere in the searchable text. */
export function matchesQuery(tool: Tool, query: string): boolean {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  if (terms.length === 0) return true;
  const text = haystack(tool);
  return terms.every((term) => text.includes(term));
}

export interface ToolFilters {
  query?: string;
  category?: CategorySlug | "all";
  pricing?: Pricing | "all";
}

export function filterTools(list: Tool[], filters: ToolFilters): Tool[] {
  const { query = "", category = "all", pricing = "all" } = filters;
  return list.filter(
    (t) =>
      (category === "all" || t.category === category) &&
      (pricing === "all" || t.pricing === pricing) &&
      matchesQuery(t, query),
  );
}

export function sortTools(list: Tool[], sort: SortOption): Tool[] {
  const copy = [...list];
  switch (sort) {
    case "name-asc":
      return copy.sort((a, b) => a.name.localeCompare(b.name));
    case "name-desc":
      return copy.sort((a, b) => b.name.localeCompare(a.name));
    case "pricing":
      return copy.sort((a, b) => pricingRank[a.pricing] - pricingRank[b.pricing] || a.name.localeCompare(b.name));
    case "featured":
    default:
      return copy.sort((a, b) => Number(b.featured) - Number(a.featured));
  }
}
