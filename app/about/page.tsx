import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "About Tool-Pic",
  description:
    "Tool-Pic helps people find and compare useful online tools without spending hours searching through hundreds of options.",
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
          <h2 className="!mt-0">Our mission</h2>
          <p>
            Tool-Pic helps people find and compare useful online tools without spending hours
            searching through hundreds of options.
          </p>

          <h2>What you will find here</h2>
          <ul>
            <li>Plain-language summaries of what each tool is best for.</li>
            <li>Side-by-side comparisons of features, pricing type and free plan availability.</li>
            <li>Categories that make it easier to browse by what you want to get done.</li>
          </ul>

          <h2>How we make money</h2>
          <p>
            Some links on Tool-Pic may be affiliate links. If you sign up or buy through one, we may
            earn a commission. Read the full{" "}
            <Link href="/affiliate-disclosure">affiliate disclosure</Link>.
          </p>
        </div>
      </div>
    </>
  );
}
