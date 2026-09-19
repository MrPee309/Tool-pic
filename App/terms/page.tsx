import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms",
  description: "The terms for using the Tool-Pic website.",
  alternates: { canonical: "/terms" },
  openGraph: { title: "Terms | Tool-Pic", url: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <PageHeader title="Terms" crumbs={[{ label: "Home", href: "/" }, { label: "Terms" }]} />
      <div className="container-page py-10 sm:py-12">
        <div className="prose-page">
          <h2 className="!mt-0">Using Tool-Pic</h2>
          <p>
            By using this website you agree to these terms. If you do not agree, please do not use
            the site.
          </p>

          <h2>Information only</h2>
          <p>
            Tool-Pic provides general information about online tools. It is not professional,
            legal or financial advice. Pricing, plans and features change, so verify details on the
            provider&apos;s website before you buy or sign up.
          </p>

          <h2>Third-party links and affiliate links</h2>
          <p>
            The site links to third-party websites that we do not control. Some links may be
            affiliate links. See our <Link href="/affiliate-disclosure">affiliate disclosure</Link>.
            Any purchase or agreement you make is between you and the provider.
          </p>

          <h2>No warranty</h2>
          <p>
            The site and its content are provided &quot;as is&quot;, without warranties of any kind. We
            work to keep information accurate but cannot guarantee it is complete or current. To the
            extent the law allows, Tool-Pic is not liable for losses arising from use of the site or
            from third-party tools and services.
          </p>

          <h2>Changes</h2>
          <p>We may update these terms as the site changes. The latest version will always be on this page.</p>

          {siteConfig.contactEmail && (
            <>
              <h2>Contact</h2>
              <p>
                Questions about these terms? Email{" "}
                <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>.
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
}
