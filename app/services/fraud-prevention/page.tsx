// app/services/fraud-prevention/page.tsx
import { Metadata } from "next";
import { SERVICE_SEO } from "@/lib/seo";
import ServicePageLayout from "@/app/component/ServicePageLayout";
const seo = SERVICE_SEO["fraud-prevention"];
export const metadata: Metadata = {
  title: { absolute: seo.metaTitle },
  description: seo.metaDescription, keywords: seo.keywords,
  alternates: { canonical: seo.canonical },
  openGraph: { title: seo.metaTitle, description: seo.metaDescription, url: seo.canonical, siteName: "Hawks Media LLC", images: [{ url: seo.ogImage, width: 1200, height: 630 }], type: "website" },
  twitter: { card: "summary_large_image", title: seo.metaTitle, description: seo.metaDescription, images: [seo.ogImage] },
};
export default function FraudPreventionPage() {
  return (
    <ServicePageLayout
      badge="FRAUD PREVENTION"
      h1={seo.h1}
      intro="Ad fraud costs the industry $100B+ annually. Hawks Media's proprietary fraud detection system runs in real-time, blocking bots, invalid calls, and fraudulent conversions before they ever reach your budget. 99.8% clean traffic guaranteed."
      heroStats={[
        { value: "99.8%", label: "Clean Traffic Rate" },
        { value: "Real-Time", label: "Detection Speed" },
        { value: "50M+", label: "Events Screened / yr" },
        { value: "0", label: "Fraudulent Charges" },
      ]}
      benefits={[
        { icon: "🤖", title: "Bot Traffic Detection", desc: "Advanced AI identifies and blocks non-human traffic patterns including datacenter IPs, headless browsers, and bot farms in real-time." },
        { icon: "📞", title: "Call Fraud Validation", desc: "Multi-layer call verification screens for call farming, robocalls, and invalid call patterns before they're billed to your account." },
        { icon: "🔍", title: "Duplicate Conversion Filtering", desc: "Sophisticated deduplication logic eliminates duplicate leads, calls, and conversions across all traffic sources and campaigns." },
        { icon: "📍", title: "Geographic Verification", desc: "IP and device-level geographic validation ensures traffic is coming from your target markets — not proxied or spoofed locations." },
        { icon: "⚡", title: "Real-Time Blocking", desc: "Fraud is blocked before it reaches your campaigns — not discovered after billing. Sub-second response times protect every event." },
        { icon: "📋", title: "Fraud Audit Reports", desc: "Full transparency with monthly fraud audit reports showing blocked events, patterns detected, and estimated budget saved." },
      ]}
      steps={[
        { num: "1", title: "Integration Setup", desc: "Connect our fraud prevention layer to your campaigns via API, pixel, or direct platform integration." },
        { num: "2", title: "Baseline Analysis", desc: "We analyze your existing traffic for fraud patterns, benchmarking clean vs. invalid event rates." },
        { num: "3", title: "Real-Time Protection Active", desc: "Our system begins screening every event in real-time — blocking fraud before it impacts your billing." },
        { num: "4", title: "Monthly Reports & Tuning", desc: "Receive detailed fraud audit reports and work with our team to fine-tune detection rules for your traffic." },
      ]}
      faqs={[
        { q: "How much ad fraud is there in performance marketing?", a: "Industry estimates suggest 20–40% of digital ad traffic can be fraudulent depending on the vertical and traffic source. Pay-per-call campaigns are particularly targeted by call farming operations. Our system blocks an average of 18% of events as fraudulent across our network." },
        { q: "What types of fraud does your system detect?", a: "We detect bot traffic, click farms, call farming, robocalls, duplicate submissions, geographic spoofing, device fingerprint manipulation, proxy/VPN abuse, and conversion fraud. Our detection library is updated continuously as new fraud patterns emerge." },
        { q: "Does fraud prevention slow down legitimate conversions?", a: "No — our system adds sub-millisecond latency to event processing. Legitimate conversions flow through instantly while fraudulent signals are blocked in parallel. You won't notice any performance impact on clean traffic." },
        { q: "Can I see which traffic sources are generating fraud?", a: "Yes. Your fraud dashboard shows fraud rates by traffic source, publisher, geographic region, and device type. This gives you the intelligence to optimize publisher relationships and media buying decisions beyond just blocking fraud." },
        { q: "Is Hawks Media's fraud prevention available as a standalone service?", a: "Yes — fraud prevention is available as a standalone product for advertisers running campaigns outside of the Hawks Media network. Contact us to discuss integration options for your existing campaign infrastructure." },
      ]}
      related={[
        { label: "Pay-Per-Call", href: "/services/pay-per-call", desc: "Only pay when the phone rings", icon: "📞" },
        { label: "Lead Generation", href: "/services/lead-generation", desc: "Exclusive verified leads", icon: "🎯" },
        { label: "Performance Advertising", href: "/services/performance-advertising", desc: "Pay for results only", icon: "📈" },
        { label: "Affiliate Marketing", href: "/services/affiliate-marketing", desc: "Elite network, top offers", icon: "🤝" },
        { label: "Partner Program", href: "/services/partner-program", desc: "Monetize your traffic", icon: "💰" },
      ]}
      slug={seo.slug} schema={seo.schema} keywords={seo.keywords}
      ctaHeading="Stop Losing Budget to Fraud"
      ctaSubtext="99.8% clean traffic. Real-time detection. Zero fraudulent charges. Protect every dollar of your ad spend."
    />
  );
}