"use client";

import { useMemo, useState } from "react";
import { adultCategories, type AdultCategory, type AdultProduct } from "@/data/adult-products";
import AdultProductCard from "./AdultProductCard";

type CategoryFilter = AdultCategory | "all";

function matches(product: AdultProduct, query: string): boolean {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  if (terms.length === 0) return true;
  const label = adultCategories.find((c) => c.id === product.category)?.label ?? "";
  const text = `${product.name} ${product.description} ${label}`.toLowerCase();
  return terms.every((term) => text.includes(term));
}

export default function AdultCatalog({ products }: { products: AdultProduct[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryFilter>("all");

  const results = useMemo(
    () =>
      products.filter(
        (p) => (category === "all" || p.category === category) && matches(p, query),
      ),
    [products, query, category],
  );

  const chips: { id: CategoryFilter; label: string; count: number }[] = [
    { id: "all", label: "All", count: products.length },
    ...adultCategories
      .map((c) => ({ ...c, count: products.filter((p) => p.category === c.id).length }))
      .filter((c) => c.count > 0),
  ];

  const filtered = query !== "" || category !== "all";
  const reset = () => {
    setQuery("");
    setCategory("all");
  };

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
          {chips.map((chip) => {
            const active = category === chip.id;
            return (
              <button
                key={chip.id}
                type="button"
                aria-pressed={active}
                onClick={() => setCategory(chip.id)}
                className={`inline-flex min-h-11 items-center gap-1.5 rounded-full border px-4 text-sm font-medium transition-colors ${
                  active
                    ? "border-brand bg-brand text-white"
                    : "border-line bg-white text-navy-800 hover:bg-brand-50"
                }`}
              >
                {chip.label}
                <span className={active ? "text-white/80" : "text-muted"}>{chip.count}</span>
              </button>
            );
          })}
        </div>

        <div className="w-full lg:max-w-xs">
          <label htmlFor="product-search" className="sr-only">
            Search products
          </label>
          <input
            id="product-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoComplete="off"
            enterKeyHint="search"
            placeholder="Search products"
            className="h-12 w-full rounded-xl border border-line bg-white px-4 text-base text-navy-900 placeholder:text-muted"
          />
        </div>
      </div>

      <div className="mb-4 mt-6 flex min-h-11 items-center justify-between gap-4">
        <p role="status" aria-live="polite" className="text-sm text-muted">
          {results.length === products.length
            ? `${products.length} products`
            : `${results.length} of ${products.length} products`}
        </p>
        {filtered && (
          <button
            type="button"
            onClick={reset}
            className="min-h-11 rounded-lg px-2 text-sm font-medium text-brand underline underline-offset-2"
          >
            Show all products
          </button>
        )}
      </div>

      {results.length > 0 ? (
        <ul className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {results.map((product) => (
            <li key={product.id} className="min-w-0">
              <AdultProductCard product={product} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="rounded-2xl border border-dashed border-line bg-surface px-6 py-12 text-center">
          <p className="text-lg font-semibold text-navy-900">No products match your search</p>
          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-muted">
            Try a shorter word, or pick another category.
          </p>
          <button type="button" onClick={reset} className="btn btn-secondary mt-6">
            Show all products
          </button>
        </div>
      )}
    </div>
  );
}
