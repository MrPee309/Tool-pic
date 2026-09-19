export const siteConfig = {
  name: "Tool-Pic",
  tagline: "Pick the right tool for the job.",
  description:
    "Discover and compare useful AI, business, design, video, writing, and website tools.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://tool-pic.com").replace(/\/$/, ""),
  /** Shows a small "Demo listing" badge on tools flagged demo: true. Set to false once real data is in. */
  showDemoBadge: true,
  /** Optional. If set, it is shown on the Privacy Policy and Terms pages. */
  contactEmail: "",
};

export const disclosureShort =
  "Disclosure: Tool-Pic may earn a commission if you purchase through some links. This does not affect our recommendations.";
