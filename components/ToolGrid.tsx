import type { Tool } from "@/data/types";
import ToolCard from "./ToolCard";

export default function ToolGrid({ tools, location }: { tools: Tool[]; location?: string }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
      {tools.map((tool) => (
        <li key={tool.id} className="min-w-0">
          <ToolCard tool={tool} location={location} />
        </li>
      ))}
    </ul>
  );
}
