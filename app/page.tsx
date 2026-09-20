import type { Metadata } from "next";
import Link from "next/link";
import CategoryCard from "@/components/CategoryCard";
import SearchBar from "@/components/SearchBar";
import ToolGrid from "@/components/ToolGrid";
import { getAllCategories, getAllComparisons, getFeaturedTools } from "@/lib/tools";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Tool-Pic — Pick the Right Tool for the Job" },
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const categories = getAllCategories();
  const featured = getFeaturedTools(6);
  const comparisons = getAllComparisons();

  return (
    <>
      <section className="border-b border-line bg-brand-50/60">
        <div className="container-page py-14 sm:py-20 lg:py-24">
          <p className="text-sm font-bold tracking-widest text-brand">TOOL-PIC</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-navy-900 sm:text-5xl lg:text-6xl">
            Pick the right tool for the job.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-navy-700 sm:text-lg">
            Discover useful tools for work, business, websites, and digital projects without wasting
            hours searching.
          </p>
          <div className="mt-8 max-w-2xl">
            <SearchBar />
          </div>
        </div>
      </section>

      <section aria-labelledby="categories-heading" className="container-page py-12 sm:py-16">
        <h2 id="categories-heading" className="text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl">
          What are you looking for?
        </h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {categories.map((category) => (
            <li key={category.slug} className="min-w-0">
              <CategoryCard category={category} />
            </li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="featured-heading"
        className="border-y border-line bg-surface"
      >
        <div className="container-page py-12 sm:py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 id="featured-heading" className="text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl">
              Featured Tools
            </h2>
            <Link href="/tools" className="btn btn-secondary">
              Browse all tools
            </Link>
          </div>
          <div className="mt-6">
            <ToolGrid tools={featured} location="home-featured" />
          </div>
        </div>
      </section>

      <section aria-labelledby="compare-heading" className="container-page py-12 sm:py-16">
        <h2 id="compare-heading" className="text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl">
          Side-by-side comparisons
        </h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:gap-6">
          {comparisons.map((c) => (
            <li key={c.slug} className="min-w-0">
              <Link
                href={`/compare/${c.slug}`}
                className="block h-full rounded-2xl border border-line bg-white p-5 transition-colors hover:border-brand-200 hover:bg-brand-50 sm:p-6"
              >
                <h3 className="text-lg font-semibold text-navy-900">{c.title}</h3>
                <p className="mt-1 text-sm leading-6 text-navy-700">{c.description}</p>
                <p className="mt-4 text-sm font-medium text-brand">
                  Compare {c.toolSlugs.length} tools
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
