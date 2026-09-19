import Link from "next/link";

export default function EmptyState({ onReset }: { onReset?: () => void }) {
  return (
    <div className="rounded-2xl border border-dashed border-line bg-surface px-6 py-12 text-center">
      <h3 className="text-lg font-semibold text-navy-900">No tools found</h3>
      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-muted">
        Try another search or browse our categories.
      </p>
      <div className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
        {onReset && (
          <button type="button" onClick={onReset} className="btn btn-secondary">
            Clear search and filters
          </button>
        )}
        <Link href="/categories" className="btn btn-primary">
          Browse categories
        </Link>
      </div>
    </div>
  );
}
