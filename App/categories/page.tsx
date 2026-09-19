import type { Metadata } from "next";
import CategoryCard from "@/components/CategoryCard";
import PageHeader from "@/components/PageHeader";
import { getAllCategories } from "@/lib/tools";

export const metadata: Metadata = {
  title: "Tool Categories",
  description: "Browse tools by category: AI, website builders, design, video and writing.",
  alternates: { canonical: "/categories" },
  openGraph: { title: "Tool Categories | Tool-Pic", url: "/categories" },
};

export default function CategoriesPage() {
  return (
    <>
      <PageHeader
        title="Categories"
        description="Browse tools by what you want to get done."
        crumbs={[{ label: "Home", href: "/" }, { label: "Categories" }]}
      />
      <div className="container-page py-10 sm:py-12">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {getAllCategories().map((category) => (
            <li key={category.slug} className="min-w-0">
              <CategoryCard category={category} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
