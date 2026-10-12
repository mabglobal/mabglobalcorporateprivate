import type { Metadata, Viewport } from "next";
import { Figtree } from "next/font/google";
import localFont from "next/font/local";
import { brandColors } from "@/config/brand";
import { seoDefaults } from "@/config/seo";
import { isIndexable, siteConfig } from "@/config/site";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import "./globals.css";

/**
 * Typefaces follow behringeb5.com (client decision, 2026-10-12), which sets
 * headings in Century Gothic and text in Proxima Nova. Both are commercial
 * Adobe fonts, so free equivalents are used:
 *  - TeX Gyre Adventor (GUST Font License), a clone of ITC Avant Garde Gothic,
 *    whose proportions Century Gothic was drawn to match. Self-hosted.
 *  - Figtree (SIL Open Font License), a geometric sans close to Proxima Nova.
 */
const figtree = Figtree({
  subsets: ["latin", "latin-ext"],
  variable: "--font-figtree",
  display: "swap",
});

const adventor = localFont({
  src: [
    { path: "../assets/fonts/TeXGyreAdventor-Regular.woff2", weight: "400", style: "normal" },
    { path: "../assets/fonts/TeXGyreAdventor-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-adventor",
  display: "swap",
  adjustFontFallback: "Arial",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: seoDefaults.defaultTitle,
    template: seoDefaults.titleTemplate,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: { telephone: false, address: false, email: false },
  robots: isIndexable()
    ? { index: true, follow: true }
    : { index: false, follow: false },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
  },
  twitter: { card: seoDefaults.twitterCard },
};

export const viewport: Viewport = {
  themeColor: brandColors.navyDeep,
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${figtree.variable} ${adventor.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#content"
          className="sr-only z-50 rounded-control bg-navy px-4 py-3 text-label text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to Content
        </a>
        <Header />
        <main id="content" tabIndex={-1} className="flex-1 focus:outline-none">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
