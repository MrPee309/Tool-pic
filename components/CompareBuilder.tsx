"use client";

import { useState } from "react";
import type { CategorySlug, Tool } from "@/data/types";
import { getAllCategories } from "@/lib/tools";
import CompareTable from "./CompareTable";

const MAX = 4;

export default function CompareBuilder({
  tools,
  initialSlugs = [],
}: {
  tools: Tool[];
  initialSlugs?: string[];
}) {
  const categories = getAllCategories();
  const [selected, setSelected] = useState<string[]>(initialSlugs);
  const [category, setCategory] = useState<CategorySlug | "all">("all");

  const visible = category === "all" ? tools : tools.filter((t) => t.category === category);
  const selectedTools = selected
    .map((slug) => tools.find((t) => t.slug === slug))
    .filter((t): t is Tool => Boolean(t));

  const toggle = (slug: string) => {
    setSelected((prev) => {
      if (prev.includes(slug)) return prev.filter((s) => s !== slug);
      if (prev.length >= MAX) return prev;
      return [...prev, slug];
    });
  };

  return (
    <div>
      <div className="max-w-xs">
        <label htmlFor="compare-category" className="mb-1 block text-sm font-medium text-navy-800">
          Show tools in
        </label>
        <select
          id="compare-category"
          value={category}
          onChange={(e) => setCategory(e.target.value as CategorySlug | "all")}
          className="h-11 w-full rounded-xl border border-line bg-white px-3 text-sm text-navy-900"
        >
          <option value="all">All categories</option>
          {categories.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      <fieldset className="mt-6">
        <legend className="text-sm font-medium text-navy-800">
          Choose 2 to {MAX} tools ({selected.length} selected)
        </legend>
        <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((tool) => {
            const checked = selected.includes(tool.slug);
            const disabled = !checked && selected.length >= MAX;
            return (
              <label
                key={tool.id}
                className={`flex min-h-11 items-center gap-3 rounded-xl border px-3 py-2 text-sm ${
                  checked ? "border-brand bg-brand-50" : "border-line bg-white"
                } ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer hover:bg-brand-50"}`}
              >
                <input
                  type="checkbox"
                  checked={checked}
                  disabled={disabled}
                  onChange={() => toggle(tool.slug)}
                  className="h-5 w-5 shrink-0 accent-brand"
                />
                <span className="min-w-0 break-words font-medium text-navy-900">{tool.name}</span>
              </label>
            );
          })}
        </div>
        {selected.length > 0 && (
          <button
            type="button"
            onClick={() => setSelected([])}
            className="mt-3 min-h-11 rounded-lg px-2 text-sm font-medium text-brand underline underline-offset-2"
          >
            Clear selection
          </button>
        )}
      </fieldset>

      <div className="mt-8" aria-live="polite">
        {selectedTools.length >= 2 ? (
          <CompareTable
            tools={selectedTools}
            location="compare-builder"
            showPricingColumn
            caption="Comparison of selected tools"
          />
        ) : (
          <p className="rounded-2xl border border-dashed border-line bg-surface px-6 py-10 text-center text-sm text-muted">
            Select at least two tools to see them side by side.
          </p>
        )}
      </div>
    </div>
  );
}
