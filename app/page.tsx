import type { Metadata } from "next";
import Link from "next/link";
import { adultProducts } from "@/data/adult-products";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Tool-Pic — Pick the Right Tool for the Job" },
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <section className="border-b border-line bg-brand-50/60">
      <div className="container-page py-14 sm:py-20 lg:py-24">
        <p className="text-sm font-bold tracking-widest text-brand">TOOL-PIC</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-navy-900 sm:text-5xl lg:text-6xl">
          Pick the right tool for the job.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-navy-700 sm:text-lg">
          Adult wellness and intimacy products, for visitors aged 18 and over.
        </p>
        <div className="mt-8">
          <Link href="/adult-wellness" className="btn btn-primary h-14 px-8 text-base">
            Browse Adult Wellness ({adultProducts.length} products)
          </Link>
        </div>
      </div>
    </section>
  );
}
