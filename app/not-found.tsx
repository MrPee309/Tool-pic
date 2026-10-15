import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-page py-20 text-center sm:py-28">
      <h1 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">Page not found</h1>
      <p className="mx-auto mt-3 max-w-md text-base leading-7 text-navy-700">
        We couldn&apos;t find that page.
      </p>
      <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
        <Link href="/" className="btn btn-primary">
          Go home
        </Link>
        <Link href="/adult-wellness" className="btn btn-secondary">
          Browse Adult Wellness
        </Link>
      </div>
    </div>
  );
}
