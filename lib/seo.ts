// lib/seo.ts — Centralized SEO config for all Hawks Media service pages

export const SITE_URL = "https://hawksmediallc.com";
export const SITE_NAME = "Hawks Media LLC";
export const PHONE = "+17864850671";
export const PHONE_DISPLAY = "1-786-485-0671";
export const EMAIL = "info@hawksmediallc.com";

export const SERVICE_SEO: Record<
  string,
  {
    slug: string;
    title: string;
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
    h1: string;
    canonical: string;
    ogImage: string;
    schema: object;
  }
> = {
  "pay-per-call": {
    slug: "pay-per-call",
    title: "Pay-Per-Call Marketing",
    metaTitle: "Pay-Per-Call Marketing Services | Only Pay for Real Calls | Hawks Media",
    metaDescription:
     "Stop wasting ad budget on clicks that never convert. Get verified, high-intent inbound calls — only pay when the phone rings.",
    keywords: ["pay per call marketing", "pay per call leads", "inbound call marketing", "performance marketing calls", "pay per call advertising", "call generation"],
    h1: "Pay-Per-Call Marketing - Only Pay When the Phone Rings",
    canonical: `${SITE_URL}/services/pay-per-call`,
    ogImage: `${SITE_URL}/og-pay-per-call.jpg`,
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Pay-Per-Call Marketing",
      provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
      description: "Performance-based pay-per-call marketing service delivering verified inbound calls from high-intent prospects.",
      url: `${SITE_URL}/services/pay-per-call`,
    },
  },
  "affiliate-marketing": {
    slug: "affiliate-marketing",
    title: "Affiliate Marketing",
    metaTitle: "Affiliate Marketing Network | High Payouts & Top Offers | Hawks Media",
    metaDescription:
      "Join Hawks Media's elite affiliate network. Access exclusive high-converting offers, weekly payouts, and dedicated support. 5,000+ active partners. Apply now!",
    keywords: ["affiliate marketing", "affiliate network", "affiliate program", "high payout affiliate", "performance affiliate marketing", "affiliate offers"],
    h1: "Elite Affiliate Marketing Network - High Payouts, Top Offers",
    canonical: `${SITE_URL}/services/affiliate-marketing`,
    ogImage: `${SITE_URL}/og-affiliate-marketing.jpg`,
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Affiliate Marketing",
      provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
      description: "Elite affiliate marketing network connecting publishers with high-converting offers and industry-leading payouts.",
      url: `${SITE_URL}/services/affiliate-marketing`,
    },
  },
  "lead-generation": {
    slug: "lead-generation",
    title: "Lead Generation",
    metaTitle: "B2B & B2C Lead Generation Services | Verified Leads | Hawks Media",
    metaDescription:
      "Exclusive, verified lead generation for businesses ready to scale. Real-time delivery, advanced targeting, and in-depth reporting. Get qualified leads today!",
    keywords: ["lead generation", "b2b lead generation", "b2c lead generation", "verified leads", "exclusive leads", "lead gen services", "inbound leads"],
    h1: "Lead Generation Services - Exclusive, Verified & Real-Time",
    canonical: `${SITE_URL}/services/lead-generation`,
    ogImage: `${SITE_URL}/og-lead-generation.jpg`,
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Lead Generation",
      provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
      description: "Exclusive B2B and B2C lead generation with real-time delivery, advanced targeting, and full reporting transparency.",
      url: `${SITE_URL}/services/lead-generation`,
    },
  },
  "performance-advertising": {
    slug: "performance-advertising",
    title: "Performance Advertising",
    metaTitle: "Performance Advertising | Pay for Results Only | Hawks Media",
    metaDescription:
      "Run performance-based ad campaigns where you only pay for real results — calls, leads, or conversions. Hawks Media manages everything end-to-end. Get started!",
    keywords: ["performance advertising", "performance marketing", "results based advertising", "CPA advertising", "CPL advertising", "performance based marketing"],
    h1: "Performance Advertising - Pay for Results, Not Promises",
    canonical: `${SITE_URL}/services/performance-advertising`,
    ogImage: `${SITE_URL}/og-performance-advertising.jpg`,
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Performance Advertising",
      provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
      description: "End-to-end performance advertising campaigns where advertisers only pay for verified calls, leads, or conversions.",
      url: `${SITE_URL}/services/performance-advertising`,
    },
  },
  "fraud-prevention": {
    slug: "fraud-prevention",
    title: "Fraud Prevention",
    metaTitle: "Ad Fraud Prevention & Traffic Verification | Hawks Media",
    metaDescription:
     "Protect your ad spend with real-time fraud detection, bot filtering, and call validation. 99.8% clean traffic guaranteed."
    keywords: ["ad fraud prevention", "click fraud protection", "traffic verification", "call fraud detection", "bot traffic detection", "invalid traffic prevention"],
    h1: "Ad Fraud Prevention - Protect Every Dollar of Your Ad Spend",
    canonical: `${SITE_URL}/services/fraud-prevention`,
    ogImage: `${SITE_URL}/og-fraud-prevention.jpg`,
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Fraud Prevention",
      provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
      description: "Advanced real-time fraud prevention protecting advertisers from invalid traffic, bot calls, and fraudulent conversions.",
      url: `${SITE_URL}/services/fraud-prevention`,
    },
  },
  "partner-program": {
    slug: "partner-program",
    title: "Partner Program",
    metaTitle: "Publisher & Partner Program | Weekly Payouts | Hawks Media",
    metaDescription:
      "Monetize your traffic with Hawks Media's partner program. Access 120+ countries, curated offers, free tools, and weekly payments.",
    keywords: ["publisher program", "partner program", "monetize traffic", "affiliate partner", "weekly payouts affiliate", "traffic monetization"],
    h1: "Partner Program - Monetize Your Traffic With Industry-Leading Payouts",
    canonical: `${SITE_URL}/services/partner-program`,
    ogImage: `${SITE_URL}/og-partner-program.jpg`,
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Partner Program",
      provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
      description: "Publisher and affiliate partner program with weekly payouts, exclusive offers, and free promotional tools across 120+ countries.",
      url: `${SITE_URL}/services/partner-program`,
    },
  },
};