import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
// import CursorGlow from "./CursorGlow";

// Single consolidated Outfit import — covers ALL weights used site-wide.
// Replaces the 3 separate @import calls that were scattered across
// Navbar.tsx, Footer.tsx, and other component <style> blocks.
// next/font/google handles preconnect + preload automatically,
// eliminating the render-blocking Google Fonts requests flagged by Lighthouse.
const outfit = Outfit({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Hawks Media LLC — Performance Marketing & Pay-Per-Call Leads",
  description:
    "Hawks Media LLC connects advertisers with elite affiliates through exclusive pay-per-call leads. Grow your marketing business with fraud-free, high-converting campaigns",

  icons: {
    icon: "/favicon_optimized.ico",        // main favicon
    shortcut: "/favicon_32.png",           // browser tab
    apple: "/favicon_180.png",             // iPhone/iPad
  },

  keywords: [
    "pay per call",
    "performance marketing",
    "affiliate marketing",
    "lead generation",
    "Hawks Media",
  ],
  authors: [{ name: "Hawks Media LLC" }],
  creator: "Hawks Media LLC",
  metadataBase: new URL("https://hawksmediallc.com"),

  openGraph: {
    title: "Hawks Media LLC — Performance Marketing & Pay-Per-Call Leads",
    description:
      "Connect with elite affiliates and grow your revenue with Hawks Media's pay-per-call platform.",
    url: "https://hawksmediallc.com",
    siteName: "Hawks Media LLC",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Hawks Media LLC — Performance Marketing",
    description:
      "Exclusive pay-per-call leads. Grow your marketing business with Hawks Media.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        {/* <CursorGlow /> */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}