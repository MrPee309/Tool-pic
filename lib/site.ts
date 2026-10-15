export const siteConfig = {
  name: "Tool-Pic",
  tagline: "Pick the right tool for the job.",
  description: "Adult wellness and intimacy products, for visitors aged 18 and over.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://tool-pic.com").replace(/\/$/, ""),
  /** Optional. If set, it is shown on the Privacy Policy and Terms pages. */
  contactEmail: "",
};

export const disclosureShort =
  "Disclosure: Tool-Pic may earn a commission from qualifying purchases made through some links. Affiliate relationships are disclosed on relevant pages.";
