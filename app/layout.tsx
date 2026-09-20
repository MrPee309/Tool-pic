import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const homeTitle = "Tool-Pic — Pick the Right Tool for the Job";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: homeTitle, template: "%s | Tool-Pic" },
  description: siteConfig.description,
  applicationName: siteConfig.name,

  verification: {
    other: {
      "impact-site-verification":
        "aa343f1c-6929-41c2-bba3-b2293efd2ff8",
    },
  },

  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: homeTitle,
    description: siteConfig.description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: siteConfig.description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={sans.variable}>
      <body className="flex min-h-screen flex-col font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-brand focus:px-4 focus:py-3 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
