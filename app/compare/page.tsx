import type { Metadata } from "next";
import Link from "next/link";
import CompareBuilder from "@/components/CompareBuilder";
import PageHeader from "@/components/PageHeader";
import { getAllComparisons, getAllTools } from "@/lib/tools";

export const metadata: Metadata = {
  title: "Compare Tools",
  description:
    "Compare tools side by side by category, best use, pricing type, main features and free plan availability.",
  alternates: { canonical: "/compare" },
  openGraph: { title: "Compare Tools | Tool-Pic", url: "/compare" },
};

export default function ComparePage() {
  const comparisons = getAllComparisons();
  const tools = getAllTools();

  return (
    <>
      <PageHeader
        title="Compare Tools"
        description="See tools side by side: what each is best for, pricing type, main features and whether there is a free plan."
        crumbs={[{ label: "Home", href: "/" }, { label: "Compare" }]}
      />

      <section aria-labelledby="curated-heading" className="container-page py-10 sm:py-12">
        <h2 id="curated-heading" className="text-2xl font-bold tracking-tight text-navy-900">
          Ready-made comparisons
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

      <section aria-labelledby="builder-heading" className="border-t border-line bg-surface">
        <div className="container-page py-10 sm:py-12">
          <h2 id="builder-heading" className="text-2xl font-bold tracking-tight text-navy-900">
            Build your own comparison
          </h2>
          <p className="mt-2 max-w-2xl text-base leading-7 text-navy-700">
            Pick two to four tools to see them in one table.
          </p>
          <div className="mt-6">
            <CompareBuilder tools={tools} initialSlugs={comparisons[0]?.toolSlugs.slice(0, 2) ?? []} />
          </div>
        </div>
      </section>
    </>
  );
}
