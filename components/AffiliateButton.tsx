"use client";

import type { MouseEvent } from "react";
import type { Tool } from "@/data/types";
import { getToolUrl, hasAffiliateUrl } from "@/lib/affiliate";
import { trackToolClick } from "@/lib/analytics";

interface Props {
  tool: Tool;
  /** Where the button lives, e.g. "tool-card". Sent with the click event. */
  location: string;
  label?: string;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function AffiliateButton({
  tool,
  location,
  label = "Visit Tool",
  variant = "primary",
  className = "",
}: Props) {
  const isAffiliate = hasAffiliateUrl(tool);
  const track = () => trackToolClick(tool, location);
  const trackMiddleClick = (e: MouseEvent) => {
    if (e.button === 1) track();
  };

  return (
    <a
      href={getToolUrl(tool)}
      target="_blank"
      rel={isAffiliate ? "sponsored noopener noreferrer" : "noopener noreferrer"}
      onClick={track}
      onAuxClick={trackMiddleClick}
      className={`btn ${variant === "primary" ? "btn-primary" : "btn-secondary"} ${className}`}
    >
      <span>{label}</span>
      <span aria-hidden="true">→</span>
      <span className="sr-only">: {tool.name} (opens in a new tab)</span>
    </a>
  );
}
