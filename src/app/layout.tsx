import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cost-effective Alternative to Paid Ads | Adbounti",
  description: `Adbounti is a cost-effective paid ads alternative catering primarily to startups and small businesses.`,
  applicationName: "Adbounti",
  keywords: [
    "Adbounti",
    "Ad Bounti",
    "Adbounty",
    "Ad Bounty",
    "Cheap Paid Ads",
    "Cheap Ads",
    "Paid Ads Alternative",
    "Cheap Paid Ads Alternative",
    "TikTok Ads",
    "Paid Ads for Startups",
    "Startup",
    "Paid Ads for Small Business",
    "Small Business",
    "Organic Marketing",
    "Organic Traffic",
    "Content Creator Rewards",
    "Creator Rewards",
  ],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Cost-effective Alternative to Paid Ads | Adbounti",
    description: `Adbounti is a cost-effective paid ads alternative catering primarily to startups and small businesses.`,
    url: "https://adbounti.com",
    siteName: "Adbounti",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "none",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
