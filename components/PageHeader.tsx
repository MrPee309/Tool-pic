import Link from "next/link";

export interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted">
        {crumbs.map((crumb, i) => {
          const last = i === crumbs.length - 1;
          return (
            <li key={crumb.label} className="flex items-center gap-2">
              {crumb.href && !last ? (
                <Link href={crumb.href} className="rounded hover:text-brand hover:underline">
                  {crumb.label}
                </Link>
              ) : (
                <span aria-current={last ? "page" : undefined}>{crumb.label}</span>
              )}
              {!last && <span aria-hidden="true">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default function PageHeader({
  title,
  description,
  crumbs,
}: {
  title: string;
  description?: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="border-b border-line bg-surface">
      <div className="container-page py-10 sm:py-14">
        {crumbs && <Breadcrumbs crumbs={crumbs} />}
        <h1 className="max-w-3xl break-words text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-3 max-w-2xl text-base leading-7 text-navy-700 sm:text-lg">{description}</p>
        )}
      </div>
    </section>
  );
}
