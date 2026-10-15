import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "About Tool-Pic",
  description: "Tool-Pic features adult wellness and intimacy products for visitors aged 18 and over.",
  alternates: { canonical: "/about" },
  openGraph: { title: "About Tool-Pic", url: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Tool-Pic"
        description="Pick the right tool for the job."
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />
      <div className="container-page py-10 sm:py-12">
        <div className="prose-page">
          <h2 className="!mt-0">What you will find here</h2>
          <p>
            Tool-Pic features a small, curated selection of adult wellness and intimacy products, for
            visitors aged 18 and over.
          </p>

          <h2>How we make money</h2>
          <p>
            Some links on Tool-Pic are affiliate links. If you buy through one, we may earn a
            commission. Read the full <Link href="/affiliate-disclosure">affiliate disclosure</Link>.
          </p>
        </div>
      </div>
    </>
  );
}
