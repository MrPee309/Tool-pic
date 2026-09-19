import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-page py-20 text-center sm:py-28">
      <h1 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">Page not found</h1>
      <p className="mx-auto mt-3 max-w-md text-base leading-7 text-navy-700">
        We couldn&apos;t find that page. Try searching for a tool or browse the categories.
      </p>
      <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
        <Link href="/tools" className="btn btn-primary">
          Explore tools
        </Link>
        <Link href="/categories" className="btn btn-secondary">
          Browse categories
        </Link>
      </div>
    </div>
  );
}
