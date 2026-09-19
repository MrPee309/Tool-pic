import Link from "next/link";
import type { Tool } from "@/data/types";
import { freePlanLabel, getCategoryForTool } from "@/lib/tools";
import AffiliateButton from "./AffiliateButton";
import { DemoBadge, PricingBadge } from "./Badges";

interface Props {
  tools: Tool[];
  /** Sent with click tracking, e.g. "compare-ai-website-builders". */
  location: string;
  /** Adds a dedicated Pricing column (the default table shows pricing under the tool name). */
  showPricingColumn?: boolean;
  caption: string;
}

const th = "whitespace-nowrap px-4 py-3 text-left text-xs font-semibold text-muted";
const td = "px-4 py-4 align-top text-sm text-navy-700";

export default function CompareTable({ tools, location, showPricingColumn = false, caption }: Props) {
  return (
    <div
      role="region"
      aria-label={caption}
      tabIndex={0}
      className="max-w-full overflow-x-auto rounded-2xl border border-line bg-white"
    >
      <table className="w-full min-w-[44rem] border-collapse">
        <caption className="sr-only">{caption}</caption>
        <thead className="border-b border-line bg-surface">
          <tr>
            <th scope="col" className={th}>Tool</th>
            <th scope="col" className={th}>Best for</th>
            {showPricingColumn && (
              <th scope="col" className={th}>Pricing</th>
            )}
            <th scope="col" className={th}>Free plan</th>
            <th scope="col" className={th}>Main features</th>
            <th scope="col" className={th}>Visit</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-line">
          {tools.map((tool) => (
            <tr key={tool.id}>
              <th scope="row" className={`${td} min-w-[11rem] text-left font-normal`}>
                <Link href={`/tools/${tool.slug}`} className="font-semibold text-navy-900 hover:text-brand">
                  {tool.name}
                </Link>
                <span className="mt-1 block text-xs font-normal text-muted">
                  {getCategoryForTool(tool).name}
                </span>
                {!showPricingColumn && (
                  <span className="mt-2 flex flex-wrap gap-1.5">
                    <PricingBadge pricing={tool.pricing} />
                    <DemoBadge demo={tool.demo} />
                  </span>
                )}
                {showPricingColumn && <DemoBadge demo={tool.demo} />}
              </th>
              <td className={`${td} min-w-[9rem]`}>{tool.bestFor}</td>
              {showPricingColumn && (
                <td className={td}>
                  <PricingBadge pricing={tool.pricing} />
                </td>
              )}
              <td className={`${td} whitespace-nowrap`}>{freePlanLabel(tool)}</td>
              <td className={`${td} min-w-[12rem]`}>
                <ul className="list-disc space-y-1 pl-4">
                  {tool.features.slice(0, 4).map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </td>
              <td className={td}>
                <AffiliateButton tool={tool} location={location} className="whitespace-nowrap" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
