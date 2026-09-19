import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CategoryCard from "@/components/CategoryCard";
import PageHeader from "@/components/PageHeader";
import ToolExplorer from "@/components/ToolExplorer";
import { getAllCategories, getCategoryBySlug, getToolsByCategory } from "@/lib/tools";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllCategories().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};
  const title = `${category.name}: Discover and Compare`;
  return {
    title,
    description: category.intro,
    alternates: { canonical: `/categories/${category.slug}` },
    openGraph: {
      type: "website",
      title: `${title} | Tool-Pic`,
      description: category.intro,
      url: `/categories/${category.slug}`,
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const tools = getToolsByCategory(category.slug);
  const otherCategories = getAllCategories().filter((c) => c.slug !== category.slug);

  return (
    <>
      <PageHeader
        title={category.name}
        description={category.intro}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Categories", href: "/categories" },
          { label: category.name },
        ]}
      />
      <section aria-labelledby="tools-heading" className="container-page py-10 sm:py-12">
        <h2 id="tools-heading" className="sr-only">
          {category.name} listed on Tool-Pic
        </h2>
        <ToolExplorer tools={tools} showCategoryFilter={false} location={`category-${category.slug}`} />
      </section>

      <section aria-labelledby="related-cats-heading" className="border-t border-line bg-surface">
        <div className="container-page py-10 sm:py-14">
          <h2 id="related-cats-heading" className="text-2xl font-bold tracking-tight text-navy-900">
            Related categories
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {otherCategories.map((c) => (
              <li key={c.slug} className="min-w-0">
                <CategoryCard category={c} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
