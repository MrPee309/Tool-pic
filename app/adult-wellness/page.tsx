import type { Metadata } from "next";
import Link from "next/link";
import AdultCatalog from "@/components/AdultCatalog";
import { adultProducts } from "@/data/adult-products";

export const metadata: Metadata = {
  title: "Adult Wellness",
  description:
    "Browse adult wellness and intimacy products from ADUTOYS, for visitors aged 18 and over. Tool-Pic does not sell or ship these products directly.",
  alternates: { canonical: "/adult-wellness" },
  openGraph: { title: "Adult Wellness | Tool-Pic", url: "/adult-wellness" },
};

export default function AdultWellnessPage() {
  return (
    <>
      <section className="border-b border-line bg-surface">
        <div className="container-page py-10 sm:py-14">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-muted">
              <li className="flex items-center gap-2">
                <Link href="/" className="rounded hover:text-brand hover:underline">
                  Home
                </Link>
                <span aria-hidden="true">/</span>
              </li>
              <li>
                <span aria-current="page">Adult Wellness</span>
              </li>
            </ol>
          </nav>
          <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            Adult Wellness
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-7 text-navy-700 sm:text-lg">
            Browse {adultProducts.length} adult wellness and intimacy products from ADUTOYS. Each
            product opens on the ADUTOYS website, where you can check details and buy. No account
            needed to browse.
          </p>
        </div>
      </section>

      <div className="container-page py-8 sm:py-10">
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-2xl border border-line bg-white p-4 text-sm leading-6 text-navy-700 sm:p-5">
            <p className="font-semibold text-navy-900">For adults aged 18 and over</p>
            <p className="mt-1">
              This page is intended for visitors who are 18 or older. Products are sold and shipped
              by ADUTOYS, an independent merchant. Tool-Pic does not sell or ship these products.
            </p>
          </div>
          <div className="rounded-2xl border border-line bg-white p-4 text-sm leading-6 text-navy-700 sm:p-5">
            <p className="font-semibold text-navy-900">Affiliate disclosure</p>
            <p className="mt-1">
              Product links are affiliate links. Tool-Pic may earn a commission from qualifying
              purchases, at no extra cost to you.{" "}
              <Link
                href="/affiliate-disclosure"
                className="font-medium text-brand underline underline-offset-2"
              >
                Read our affiliate disclosure
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="mt-8">
          <AdultCatalog products={adultProducts} />
        </div>
      </div>
    </>
  );
}
