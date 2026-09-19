import type { Pricing } from "@/data/types";
import { siteConfig } from "@/lib/site";

const pricingStyles: Record<Pricing, string> = {
  Free: "bg-brand-100 text-brand-dark",
  Freemium: "bg-brand-50 text-brand-dark ring-1 ring-inset ring-brand-200",
  Paid: "bg-surface text-navy-800 ring-1 ring-inset ring-line",
};

export function PricingBadge({ pricing }: { pricing: Pricing }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${pricingStyles[pricing]}`}
    >
      {pricing}
    </span>
  );
}

export function DemoBadge({ demo }: { demo?: boolean }) {
  if (!demo || !siteConfig.showDemoBadge) return null;
  return (
    <span className="inline-flex items-center rounded-full bg-surface px-2.5 py-1 text-xs font-medium text-muted ring-1 ring-inset ring-line">
      Demo listing
    </span>
  );
}
