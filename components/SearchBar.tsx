import { Icon } from "./Icon";

/**
 * Plain GET form: works without JavaScript and sends people to /tools?q=...
 * where the client-side explorer applies the query.
 */
export default function SearchBar({ id = "hero-search" }: { id?: string }) {
  return (
    <form action="/tools" method="get" role="search" className="w-full">
      <label htmlFor={id} className="sr-only">
        Search for a tool
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Icon
            name="search"
            className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted"
          />
          <input
            id={id}
            name="q"
            type="search"
            autoComplete="off"
            placeholder="Search for a tool…"
            className="h-14 w-full rounded-xl border border-line bg-white pl-12 pr-4 text-base text-navy-900 placeholder:text-muted"
          />
        </div>
        <button type="submit" className="btn btn-primary h-14 px-8 text-base">
          Search
        </button>
      </div>
    </form>
  );
}
