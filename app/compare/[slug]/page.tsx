import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AffiliateDisclosureNote from "@/components/AffiliateDisclosureNote";
import CompareTable from "@/components/CompareTable";
import PageHeader from "@/components/PageHeader";
import { getAllComparisons, getComparisonBySlug, getToolsBySlugs } from "@/lib/tools";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllComparisons().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const comparison = getComparisonBySlug(slug);
  if (!comparison) return {};
  return {
    title: comparison.title,
    description: comparison.description,
    alternates: { canonical: `/compare/${comparison.slug}` },
    openGraph: {
      type: "website",
      title: `${comparison.title} | Tool-Pic`,
      description: comparison.description,
      url: `/compare/${comparison.slug}`,
    },
  };
}

export default async function ComparisonPage({ params }: Props) {
  const { slug } = await params;
  const comparison = getComparisonBySlug(slug);
  if (!comparison) notFound();

  const tools = getToolsBySlugs(comparison.toolSlugs);
  const others = getAllComparisons().filter((c) => c.slug !== comparison.slug);

  return (
    <>
      <PageHeader
        title={comparison.title}
        description={comparison.intro}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Compare", href: "/compare" },
          { label: comparison.title },
        ]}
      />

      <div className="container-page py-10 sm:py-12">
        <section aria-labelledby="table-heading">
          <h2 id="table-heading" className="text-2xl font-bold tracking-tight text-navy-900">
            Comparison table
          </h2>
          <div className="mt-5">
            <CompareTable
              tools={tools}
              location={`compare-${comparison.slug}`}
              caption={comparison.title}
            />
          </div>
          <AffiliateDisclosureNote className="mt-4 max-w-2xl" />
        </section>

        <section aria-labelledby="checklist-heading" className="mt-12">
          <h2 id="checklist-heading" className="text-2xl font-bold tracking-tight text-navy-900">
            What to check before you choose
          </h2>
          <ul className="mt-4 max-w-2xl list-disc space-y-2 pl-5 text-base leading-7 text-navy-700">
            {comparison.checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="details-heading" className="mt-12">
          <h2 id="details-heading" className="text-2xl font-bold tracking-tight text-navy-900">
            Tool details
          </h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => (
              <li key={tool.id} className="min-w-0">
                <Link
                  href={`/tools/${tool.slug}`}
                  className="flex min-h-11 items-center rounded-xl border border-line px-4 py-3 text-sm font-medium text-navy-900 hover:border-brand-200 hover:bg-brand-50"
                >
                  <span className="break-words">Read more about {tool.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {others.length > 0 && (
          <section aria-labelledby="more-heading" className="mt-12">
            <h2 id="more-heading" className="text-2xl font-bold tracking-tight text-navy-900">
              More comparisons
            </h2>
            <ul className="mt-4 space-y-2">
              {others.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/compare/${c.slug}`}
                    className="inline-flex min-h-11 items-center font-medium text-brand underline underline-offset-2"
                  >
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </>
  );
}
