import type { Metadata } from "next";
import Link from "next/link";
import AdultProductCard from "@/components/AdultProductCard";
import { adultProducts } from "@/data/adult-products";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Tool-Pic — Pick the Right Tool for the Job" },
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      {/* Compact hero so the products show up on the first screen, even on a phone. */}
      <section className="border-b border-line bg-brand-50/60">
        <div className="container-page flex flex-col gap-5 py-8 sm:py-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-navy-900 sm:text-4xl lg:text-5xl">
              Shop Adult Wellness
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-navy-700">
              {adultProducts.length} adult wellness and intimacy products from ADUTOYS, for
              visitors aged 18 and over. Tap a product to see it on the ADUTOYS website.
            </p>
          </div>
          <Link href="/adult-wellness" className="btn btn-secondary self-start lg:self-auto">
            Search and filter products
          </Link>
        </div>
      </section>

      <section aria-labelledby="featured-heading" className="container-page py-8 sm:py-10">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <h2 id="featured-heading" className="text-2xl font-bold tracking-tight text-navy-900">
            Featured Products
          </h2>
          <Link
            href="/adult-wellness"
            className="inline-flex min-h-11 items-center text-sm font-semibold text-brand underline underline-offset-2"
          >
            View All Products
          </Link>
        </div>

        <ul className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {adultProducts.map((product) => (
            <li key={product.id} className="min-w-0">
              <AdultProductCard product={product} />
            </li>
          ))}
        </ul>

        <div className="mt-8 flex justify-center">
          <Link href="/adult-wellness" className="btn btn-primary h-12 w-full px-8 text-base sm:w-auto">
            View All Products
          </Link>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-5 text-muted">
          For adults aged 18 and over. Products are sold and shipped by ADUTOYS, an independent
          merchant. Product links are affiliate links; Tool-Pic may earn a commission from
          qualifying purchases.{" "}
          <Link href="/affiliate-disclosure" className="font-medium text-brand underline underline-offset-2">
            Affiliate disclosure
          </Link>
          .
        </p>
      </section>
    </>
  );
}
