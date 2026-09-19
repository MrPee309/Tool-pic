import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AffiliateButton from "@/components/AffiliateButton";
import AffiliateDisclosureNote from "@/components/AffiliateDisclosureNote";
import { DemoBadge, PricingBadge } from "@/components/Badges";
import { Icon } from "@/components/Icon";
import { Breadcrumbs } from "@/components/PageHeader";
import ToolGrid from "@/components/ToolGrid";
import ToolLogo from "@/components/ToolLogo";
import {
  freePlanLabel,
  getAllTools,
  getCategoryForTool,
  getRelatedTools,
  getToolBySlug,
} from "@/lib/tools";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllTools().map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return {};
  const category = getCategoryForTool(tool);
  const title = `${tool.name}: ${category.name}`;
  return {
    title,
    description: tool.shortDescription,
    alternates: { canonical: `/tools/${tool.slug}` },
    openGraph: {
      type: "website",
      title: `${title} | Tool-Pic`,
      description: tool.shortDescription,
      url: `/tools/${tool.slug}`,
    },
  };
}

export default async function ToolPage({ params }: Props) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) notFound();

  const category = getCategoryForTool(tool);
  const related = getRelatedTools(tool, 3);

  return (
    <>
      <section className="border-b border-line bg-surface">
        <div className="container-page py-10 sm:py-14">
          <Breadcrumbs
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Tools", href: "/tools" },
              { label: tool.name },
            ]}
          />
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            <ToolLogo tool={tool} size="lg" />
            <div className="min-w-0 flex-1">
              <h1 className="break-words text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
                {tool.name}
              </h1>
              <p className="mt-3 max-w-2xl text-base leading-7 text-navy-700 sm:text-lg">
                {tool.shortDescription}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <Link
                  href={`/categories/${category.slug}`}
                  className="inline-flex items-center rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-navy-800 ring-1 ring-inset ring-line hover:bg-brand-50"
                >
                  {category.name}
                </Link>
                <PricingBadge pricing={tool.pricing} />
                <DemoBadge demo={tool.demo} />
              </div>
              <div className="mt-6 max-w-md">
                <AffiliateButton
                  tool={tool}
                  location="tool-detail-header"
                  label={`Visit ${tool.name}`}
                  className="w-full sm:w-auto"
                />
                <AffiliateDisclosureNote className="mt-3" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-page grid gap-10 py-10 sm:py-12 lg:grid-cols-[1fr_20rem] lg:gap-12">
        <div className="min-w-0 space-y-10">
          <section aria-labelledby="about-heading">
            <h2 id="about-heading" className="text-xl font-semibold text-navy-900">
              About {tool.name}
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-navy-700">{tool.description}</p>
          </section>

          <section aria-labelledby="features-heading">
            <h2 id="features-heading" className="text-xl font-semibold text-navy-900">
              Key features
            </h2>
            <ul className="mt-3 space-y-2 text-base text-navy-700">
              {tool.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <Icon name="check" className="mt-1 h-5 w-5 shrink-0 text-brand" />
                  <span className="min-w-0 break-words">{f}</span>
                </li>
              ))}
            </ul>
          </section>

          <div className="grid gap-6 md:grid-cols-2">
            <section aria-labelledby="pros-heading" className="rounded-2xl border border-line p-5">
              <h2 id="pros-heading" className="text-lg font-semibold text-navy-900">
                Pros
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-navy-700">
                {tool.pros.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </section>
            <section aria-labelledby="consider-heading" className="rounded-2xl border border-line p-5">
              <h2 id="consider-heading" className="text-lg font-semibold text-navy-900">
                Things to consider
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-navy-700">
                {tool.considerations.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        <aside aria-labelledby="glance-heading" className="min-w-0">
          <div className="rounded-2xl border border-line bg-white p-5 lg:sticky lg:top-24">
            <h2 id="glance-heading" className="text-lg font-semibold text-navy-900">
              At a glance
            </h2>
            <dl className="mt-4 space-y-4 text-sm">
              <div>
                <dt className="font-medium text-muted">Category</dt>
                <dd className="mt-0.5 text-navy-900">{category.name}</dd>
              </div>
              <div>
                <dt className="font-medium text-muted">Best for</dt>
                <dd className="mt-0.5 text-navy-900">{tool.bestFor}</dd>
              </div>
              <div>
                <dt className="font-medium text-muted">Pricing</dt>
                <dd className="mt-0.5 text-navy-900">{tool.pricing}</dd>
              </div>
              <div>
                <dt className="font-medium text-muted">Free plan</dt>
                <dd className="mt-0.5 text-navy-900">{freePlanLabel(tool)}</dd>
              </div>
            </dl>
            <p className="mt-4 text-xs leading-5 text-muted">
              Pricing and plans can change. Check the provider&apos;s website for current details.
            </p>
            <AffiliateButton
              tool={tool}
              location="tool-detail-sidebar"
              label={`Visit ${tool.name}`}
              className="mt-5 w-full"
            />
            <AffiliateDisclosureNote className="mt-3" />
          </div>
        </aside>
      </div>

      {related.length > 0 && (
        <section aria-labelledby="related-heading" className="border-t border-line bg-surface">
          <div className="container-page py-10 sm:py-14">
            <h2 id="related-heading" className="text-2xl font-bold tracking-tight text-navy-900">
              Related tools
            </h2>
            <div className="mt-6">
              <ToolGrid tools={related} location="tool-detail-related" />
            </div>
          </div>
        </section>
      )}
    </>
  );
}
