import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ToolExplorer from "@/components/ToolExplorer";
import { getAllTools } from "@/lib/tools";

export const metadata: Metadata = {
  title: "Explore Tools",
  description:
    "Search and filter AI, website, design, video and writing tools by category and pricing type.",
  alternates: { canonical: "/tools" },
  openGraph: { title: "Explore Tools | Tool-Pic", url: "/tools" },
};

export default function ToolsPage() {
  return (
    <>
      <PageHeader
        title="Explore Tools"
        description="Search, filter and sort tools by category and pricing type."
        crumbs={[{ label: "Home", href: "/" }, { label: "Tools" }]}
      />
      <div className="container-page py-10 sm:py-12">
        <ToolExplorer tools={getAllTools()} location="tools-page" />
      </div>
    </>
  );
}
