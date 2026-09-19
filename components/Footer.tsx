import Link from "next/link";
import BrandLogo from "./BrandLogo";
import { siteConfig } from "@/lib/site";

const explore = [
  { href: "/tools", label: "Tools" },
  { href: "/categories", label: "Categories" },
  { href: "/compare", label: "Compare" },
];

const company = [
  { href: "/about", label: "About" },
  { href: "/affiliate-disclosure", label: "Affiliate Disclosure" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
];

function LinkList({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <p className="text-sm font-semibold text-navy-900">{title}</p>
      <ul className="mt-3 space-y-1">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="inline-flex min-h-11 items-center rounded text-sm text-navy-700 hover:text-brand hover:underline"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="container-page py-10 sm:py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]">
          <div>
            <BrandLogo />
            <p className="mt-2 text-sm text-navy-700">{siteConfig.tagline}</p>
            <p className="mt-4 max-w-sm text-xs leading-5 text-muted">
              Disclosure: Tool-Pic may earn a commission from qualifying purchases made through some links.
              Affiliate relationships are disclosed on relevant pages.{" "}
              <Link href="/affiliate-disclosure" className="font-medium text-brand underline underline-offset-2">
                Read our affiliate disclosure
              </Link>
              .
            </p>
          </div>
          <nav aria-label="Footer: explore">
            <LinkList title="Explore" links={explore} />
          </nav>
          <nav aria-label="Footer: company and legal">
            <LinkList title="Company" links={company} />
          </nav>
        </div>
        <p className="mt-8 border-t border-line pt-6 text-sm text-muted">© 2026 Tool-Pic</p>
      </div>
    </footer>
  );
}
