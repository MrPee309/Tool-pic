import Link from "next/link";
import type { Tool } from "@/data/types";
import { getCategoryForTool } from "@/lib/tools";
import AffiliateButton from "./AffiliateButton";
import { DemoBadge, PricingBadge } from "./Badges";
import { Icon } from "./Icon";
import ToolLogo from "./ToolLogo";

export default function ToolCard({ tool, location = "tool-card" }: { tool: Tool; location?: string }) {
  const category = getCategoryForTool(tool);

  return (
    <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-5 sm:p-6">
      <div className="flex items-start gap-4">
        <ToolLogo tool={tool} />
        <div className="min-w-0">
          <h3 className="break-words text-lg font-semibold leading-snug text-navy-900">
            <Link href={`/tools/${tool.slug}`} className="rounded hover:text-brand">
              {tool.name}
            </Link>
          </h3>
          <p className="mt-0.5 text-sm text-muted">{category.name}</p>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <PricingBadge pricing={tool.pricing} />
        <DemoBadge demo={tool.demo} />
      </div>

      <p className="mt-4 text-sm leading-6 text-navy-700">{tool.shortDescription}</p>

      <p className="mt-3 text-sm text-navy-700">
        <span className="font-semibold text-navy-900">Best for:</span> {tool.bestFor}
      </p>

      <ul className="mt-4 space-y-1.5 text-sm text-navy-700">
        {tool.features.slice(0, 3).map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
            <span className="min-w-0 break-words">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex gap-2 pt-5">
        <AffiliateButton tool={tool} location={location} className="flex-1" />
        <Link href={`/tools/${tool.slug}`} className="btn btn-secondary">
          Details
          <span className="sr-only"> for {tool.name}</span>
        </Link>
      </div>
    </article>
  );
}
