import type { Metadata, Viewport } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import {
  AnalyticsScripts,
  GtmNoScript,
} from "@/components/analytics/AnalyticsScripts";
import { ConsentBanner } from "@/components/analytics/ConsentBanner";
import { getSiteUrl, images, siteConfig } from "@/lib/site";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.author}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.author,
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: siteUrl,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: images.profile.src,
        width: images.profile.width,
        height: images.profile.height,
        alt: images.profile.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [images.profile.src],
  },
  other: {
    "geo.region": "RO-IS",
    "geo.placename": siteConfig.address.locality,
    "geo.position": `${siteConfig.geo.latitude};${siteConfig.geo.longitude}`,
    ICBM: `${siteConfig.geo.latitude}, ${siteConfig.geo.longitude}`,
  },
};

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ro" className={`${dmSans.variable} ${fraunces.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white font-sans text-slate-800 antialiased">
        <GtmNoScript />
        {children}
        <ConsentBanner />
        <AnalyticsScripts />
      </body>
    </html>
  );
}
