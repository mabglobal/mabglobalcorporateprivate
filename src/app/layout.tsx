import type { Metadata, Viewport } from "next";
import { Cal_Sans, Geist } from "next/font/google";
import { brandColors } from "@/config/brand";
import { seoDefaults } from "@/config/seo";
import { isIndexable, siteConfig } from "@/config/site";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import "./globals.css";

/**
 * Typefaces verified on popupsmart.com (next/font/google): Cal Sans for
 * headings (--ps-font-display) and Geist for text (--ps-font-body).
 * latin-ext covers Turkish characters.
 */
const geist = Geist({
  subsets: ["latin", "latin-ext"],
  variable: "--font-geist",
  display: "swap",
});

const calSans = Cal_Sans({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  variable: "--font-cal-sans",
  display: "swap",
  // next/font has no metric overrides for Cal Sans; the fallback is declared
  // in globals.css.
  adjustFontFallback: false,
  fallback: ["Cal Sans Fallback", "Arial", "sans-serif"],
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
    <html lang="tr" className={`${geist.variable} ${calSans.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#icerik"
          className="sr-only z-50 rounded-control bg-navy px-4 py-3 text-label text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          İçeriğe geç
        </a>
        <Header />
        <main id="icerik" tabIndex={-1} className="flex-1 focus:outline-none">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
