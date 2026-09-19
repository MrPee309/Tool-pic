import Image from "next/image";
import type { Tool } from "@/data/types";
import { getCategoryForTool } from "@/lib/tools";
import { Icon } from "./Icon";

const sizes = {
  md: { box: "h-12 w-12", icon: "h-6 w-6", px: 48 },
  lg: { box: "h-16 w-16", icon: "h-8 w-8", px: 64 },
} as const;

/** Shows the tool logo if one is set, otherwise a placeholder tile with the category icon. */
export default function ToolLogo({ tool, size = "md" }: { tool: Tool; size?: keyof typeof sizes }) {
  const s = sizes[size];
  if (tool.logo) {
    return (
      <Image
        src={tool.logo}
        alt={`${tool.name} logo`}
        width={s.px}
        height={s.px}
        className={`${s.box} shrink-0 rounded-xl border border-line bg-white object-contain p-1.5`}
      />
    );
  }
  const category = getCategoryForTool(tool);
  return (
    <span
      className={`${s.box} inline-flex shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand ring-1 ring-inset ring-brand-100`}
      aria-hidden="true"
    >
      <Icon name={category.icon} className={s.icon} />
    </span>
  );
}
