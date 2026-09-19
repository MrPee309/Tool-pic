import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Tool-Pic handles information when you use the site.",
  alternates: { canonical: "/privacy" },
  openGraph: { title: "Privacy Policy | Tool-Pic", url: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        crumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
      />
      <div className="container-page py-10 sm:py-12">
        <div className="prose-page">
          <h2 className="!mt-0">Overview</h2>
          <p>
            Tool-Pic does not offer user accounts and does not ask you for personal information to
            browse the site.
          </p>

          <h2>Information collected automatically</h2>
          <p>
            Our hosting provider may process technical data such as your IP address and browser
            details in server logs. We may also measure which pages are viewed and which tool links
            are clicked, including the page, the tool and the site that referred you, to understand
            how the site is used.
          </p>

          <h2>Cookies</h2>
          <p>
            This site does not currently set its own cookies. If we add analytics or other services
            that use cookies, we will update this page.
          </p>

          <h2>Links to other websites</h2>
          <p>
            Tool-Pic links to third-party websites. Those sites have their own privacy practices,
            and we are not responsible for them. Some links are affiliate links, which may allow the
            provider to recognise that you arrived from Tool-Pic.
          </p>

          <h2>Changes to this policy</h2>
          <p>We may update this policy as the site changes. The latest version will always be on this page.</p>

          {siteConfig.contactEmail && (
            <>
              <h2>Contact</h2>
              <p>
                Questions about this policy? Email{" "}
                <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>.
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
}
