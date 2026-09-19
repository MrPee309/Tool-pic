import Link from "next/link";
import type { Category } from "@/data/types";
import { getToolsByCategory } from "@/lib/tools";
import { Icon } from "./Icon";

export default function CategoryCard({ category }: { category: Category }) {
  const count = getToolsByCategory(category.slug).length;

  return (
    <Link
      href={`/categories/${category.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-line bg-white p-5 transition-colors hover:border-brand-200 hover:bg-brand-50 sm:p-6"
    >
      <span
        className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand ring-1 ring-inset ring-brand-100 group-hover:bg-white"
        aria-hidden="true"
      >
        <Icon name={category.icon} className="h-6 w-6" />
      </span>
      <h3 className="mt-4 text-lg font-semibold text-navy-900">{category.name}</h3>
      <p className="mt-1 text-sm leading-6 text-navy-700">{category.description}</p>
      <p className="mt-auto pt-4 text-sm font-medium text-brand">
        {count} {count === 1 ? "tool" : "tools"}
      </p>
    </Link>
  );
}
