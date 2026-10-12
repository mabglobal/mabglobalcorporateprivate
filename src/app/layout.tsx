import type { Metadata, Viewport } from "next";
import { Google_Sans_Flex } from "next/font/google";
import { brandColors } from "@/config/brand";
import { seoDefaults } from "@/config/seo";
import { isIndexable, siteConfig } from "@/config/site";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import "./globals.css";

/**
 * Google Sans Flex is the typeface verified on brandunder.com
 * (next/font/google, --font-gsf). latin-ext covers Turkish characters.
 */
const googleSansFlex = Google_Sans_Flex({
  subsets: ["latin", "latin-ext"],
  variable: "--font-gsf",
  display: "swap",
  // next/font has no metric overrides for this family, so a metric-matched
  // Arial fallback is declared in globals.css to limit layout shift.
  adjustFontFallback: false,
  fallback: ["Google Sans Flex Fallback", "Arial", "sans-serif"],
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
    <html lang="en" className={`${googleSansFlex.variable} antialiased`}>
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
