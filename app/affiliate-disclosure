import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description:
    "How Tool-Pic may earn compensation from some links, and how that relates to the tools we describe.",
  alternates: { canonical: "/affiliate-disclosure" },
  openGraph: { title: "Affiliate Disclosure | Tool-Pic", url: "/affiliate-disclosure" },
};

export default function AffiliateDisclosurePage() {
  return (
    <>
      <PageHeader
        title="Affiliate Disclosure"
        description="A plain-language explanation of how links on Tool-Pic may work."
        crumbs={[{ label: "Home", href: "/" }, { label: "Affiliate Disclosure" }]}
      />
      <div className="container-page py-10 sm:py-12">
        <div className="prose-page">
          <h2 className="!mt-0">Some links may be affiliate links</h2>
          <p>
            Tool-Pic is a tool discovery and comparison website. Tool-Pic may earn a commission from
            qualifying purchases made through some links. Affiliate relationships are disclosed on
            relevant pages.
          </p>

          <h2>How we may be compensated</h2>
          <p>
            If you click an affiliate link and then purchase or sign up, Tool-Pic may receive a
            commission from the provider. This only applies to qualifying purchases, as defined by
            each provider, and it does not increase the price you pay.
          </p>

          <h2>What this does not change</h2>
          <p>
            Affiliate relationships do not automatically determine how tools are described or which
            tools are listed. A brand being listed on Tool-Pic does not mean the brand has approved
            or endorsed Tool-Pic. Where a tool has no affiliate link, the button goes straight to the
            provider&apos;s official website. Brand names belong to their respective owners.
          </p>

          <h2>Check details with the provider</h2>
          <p>
            Pricing, plans and features can change. Always verify current details on the
            provider&apos;s own website before you buy or sign up.
          </p>
        </div>
      </div>
    </>
  );
}
