import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

const outfit = Outfit({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  // ── CHANGED: title is now an object with a template ──
  title: {
    default: "Hawks Media LLC — Performance Marketing & Pay-Per-Call Leads",
    template: "%s | Hawks Media LLC",
  },
  description:
    "Hawks Media LLC connects advertisers with elite affiliates through exclusive pay-per-call leads. Grow your marketing business with fraud-free, high-converting campaigns",

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

  // ── NEW ──
  alternates: { canonical: "https://hawksmediallc.com" },

  openGraph: {
    title: "Hawks Media LLC - Performance Marketing & Pay-Per-Call Leads",
    description:
      "Connect with elite affiliates and grow your revenue with Hawks Media's pay-per-call platform.",
    url: "https://hawksmediallc.com",
    siteName: "Hawks Media LLC",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Hawks Media LLC - Performance Marketing",
    description:
      "Exclusive pay-per-call leads. Grow your marketing business with Hawks Media.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

// ── NEW: schema object, declared outside the component ──
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Hawks Media LLC",
  url: "https://hawksmediallc.com",
  description:
    "Hawks Media LLC connects advertisers with elite affiliates through exclusive pay-per-call leads and performance marketing campaigns.",
  sameAs: [
    "https://www.instagram.com/_hawksmedia_/",
    "https://www.linkedin.com/company/hawks-media-llc/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
       <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* <CursorGlow /> */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}