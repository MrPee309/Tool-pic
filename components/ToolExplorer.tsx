"use client";

import { useEffect, useId, useMemo, useState } from "react";
import type { CategorySlug, Pricing, SortOption, Tool } from "@/data/types";
import { getAllCategories, filterTools, pricingOptions, sortTools } from "@/lib/tools";
import EmptyState from "./EmptyState";
import { Icon } from "./Icon";
import ToolGrid from "./ToolGrid";

type CategoryFilter = CategorySlug | "all";
type PricingFilter = Pricing | "all";

const sortLabels: Record<SortOption, string> = {
  featured: "Featured first",
  "name-asc": "Name A–Z",
  "name-desc": "Name Z–A",
  pricing: "Pricing: free first",
};

const selectClass =
  "h-11 w-full rounded-xl border border-line bg-white px-3 text-sm text-navy-900";

interface Props {
  tools: Tool[];
  /** Hide the category chips, e.g. on a category page. */
  showCategoryFilter?: boolean;
  location?: string;
}

export default function ToolExplorer({ tools, showCategoryFilter = true, location }: Props) {
  const categories = getAllCategories();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryFilter>("all");
  const [pricing, setPricing] = useState<PricingFilter>("all");
  const [sort, setSort] = useState<SortOption>("featured");
  const pricingId = useId();
  const sortId = useId();

  // Apply ?q=, ?category= and ?pricing= from the URL (e.g. from the header search).
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const q = params.get("q");
    if (q) setQuery(q);
    const c = params.get("category");
    if (showCategoryFilter && c && categories.some((x) => x.slug === c)) {
      setCategory(c as CategorySlug);
    }
    const p = params.get("pricing");
    if (p && pricingOptions.includes(p as Pricing)) setPricing(p as Pricing);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const results = useMemo(
    () => sortTools(filterTools(tools, { query, category, pricing }), sort),
    [tools, query, category, pricing, sort],
  );

  const hasFilters = query !== "" || category !== "all" || pricing !== "all" || sort !== "featured";
  const reset = () => {
    setQuery("");
    setCategory("all");
    setPricing("all");
    setSort("featured");
  };

  const chips: { slug: CategoryFilter; label: string }[] = [
    { slug: "all", label: "All" },
    ...categories.map((c) => ({ slug: c.slug, label: c.filterLabel })),
  ];

  return (
    <div>
      <div className="space-y-4">
        <div>
          <label htmlFor="tool-search" className="sr-only">
            Search tools
          </label>
          <div className="relative scroll-mt-24">
            <Icon
              name="search"
              className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted"
            />
            <input
              id="tool-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoComplete="off"
              placeholder="Search for a tool…"
              className="h-12 w-full rounded-xl border border-line bg-white pl-12 pr-4 text-base text-navy-900 placeholder:text-muted"
            />
          </div>
        </div>

        {showCategoryFilter && (
          <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
            {chips.map((chip) => {
              const active = category === chip.slug;
              return (
                <button
                  key={chip.slug}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setCategory(chip.slug)}
                  className={`inline-flex min-h-11 items-center rounded-full border px-4 text-sm font-medium transition-colors ${
                    active
                      ? "border-brand bg-brand text-white"
                      : "border-line bg-white text-navy-800 hover:bg-brand-50"
                  }`}
                >
                  {chip.label}
                </button>
              );
            })}
          </div>
        )}

        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label htmlFor={pricingId} className="mb-1 block text-sm font-medium text-navy-800">
              Pricing
            </label>
            <select
              id={pricingId}
              value={pricing}
              onChange={(e) => setPricing(e.target.value as PricingFilter)}
              className={selectClass}
            >
              <option value="all">Any pricing</option>
              {pricingOptions.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor={sortId} className="mb-1 block text-sm font-medium text-navy-800">
              Sort by
            </label>
            <select
              id={sortId}
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
              className={selectClass}
            >
              {(Object.keys(sortLabels) as SortOption[]).map((key) => (
                <option key={key} value={key}>
                  {sortLabels[key]}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="mb-4 mt-8 flex items-center justify-between gap-4">
        <p role="status" aria-live="polite" className="text-sm text-muted">
          {results.length} {results.length === 1 ? "tool" : "tools"}
        </p>
        {hasFilters && (
          <button
            type="button"
            onClick={reset}
            className="min-h-11 rounded-lg px-2 text-sm font-medium text-brand underline underline-offset-2"
          >
            Clear all
          </button>
        )}
      </div>

      {results.length > 0 ? (
        <ToolGrid tools={results} location={location} />
      ) : (
        <EmptyState onReset={hasFilters ? reset : undefined} />
      )}
    </div>
  );
}
