// app/services/lead-generation/page.tsx
import { Metadata } from "next";
import { SERVICE_SEO } from "@/lib/seo";
import ServicePageLayout from "@/app/component/ServicePageLayout";
const seo = SERVICE_SEO["lead-generation"];
export const metadata: Metadata = {
  title: seo.metaTitle, description: seo.metaDescription, keywords: seo.keywords,
  alternates: { canonical: seo.canonical },
  openGraph: { title: seo.metaTitle, description: seo.metaDescription, url: seo.canonical, siteName: "Hawks Media LLC", images: [{ url: seo.ogImage, width: 1200, height: 630 }], type: "website" },
  twitter: { card: "summary_large_image", title: seo.metaTitle, description: seo.metaDescription, images: [seo.ogImage] },
};
export default function LeadGenerationPage() {
  return (
    <ServicePageLayout
      badge="LEAD GENERATION"
      h1={seo.h1}
      intro="Stop chasing cold leads. Hawks Media delivers exclusive, verified leads in real-time — prospects who are actively searching for your services and ready to engage. Advanced targeting, full compliance, zero shared leads."
      heroStats={[
        { value: "10M+", label: "Leads Generated" },
        { value: "Real-Time", label: "Delivery Speed" },
        { value: "100%", label: "Exclusive Leads" },
        { value: "98%", label: "Verification Rate" },
      ]}
      benefits={[
        { icon: "⚡", title: "Real-Time Delivery", desc: "Leads are delivered to your CRM or platform in real-time — the moment a prospect expresses intent, you're the first to know." },
        { icon: "🎯", title: "100% Exclusive Leads", desc: "Every lead is sold once, to you only. No recycled, shared, or resold leads — ever." },
        { icon: "✅", title: "Multi-Layer Verification", desc: "Phone, email, and data verification filters out invalid submissions before they reach you. You only pay for quality." },
        { icon: "📋", title: "Custom Lead Criteria", desc: "Define your exact lead criteria — geography, intent signals, demographics, and more. We build to your spec." },
        { icon: "🔗", title: "Seamless CRM Integration", desc: "Connect directly to Salesforce, HubSpot, Zoho, or any CRM via API. Zero manual data entry." },
        { icon: "📈", title: "Volume Scalability", desc: "Start with 50 leads a day or 5,000. Our network scales to match your capacity as you grow." },
      ]}
      steps={[
        { num: "1", title: "Define Your Lead Profile", desc: "Tell us exactly who you want. We configure targeting, filters, and delivery specs to your requirements." },
        { num: "2", title: "Campaign Activation", desc: "We launch targeted campaigns across our publisher network to attract high-intent prospects matching your criteria." },
        { num: "3", title: "Verification & Delivery", desc: "Every lead passes our multi-layer verification before being delivered to your CRM in real-time." },
        { num: "4", title: "Optimize & Scale", desc: "Review performance data, refine criteria, and scale volume as you identify winning lead profiles." },
      ]}
      faqs={[
        { q: "What makes Hawks Media leads exclusive?", a: "Every lead we generate is sold once — to a single buyer. We do not recycle, resell, or share leads across multiple advertisers. You receive the lead the moment it's verified, with no competition." },
        { q: "What verticals do you generate leads for?", a: "Our strongest lead generation verticals are insurance, home services, legal, financial services, solar, auto, and healthcare. We can build custom programs for most B2C industries with sufficient search volume." },
        { q: "How are leads verified?", a: "All leads go through real-time validation: phone number verification, email validation, duplicate detection, geographic verification, and intent signal scoring. Invalid or low-quality submissions are filtered automatically." },
        { q: "What is the minimum lead volume I can purchase?", a: "We work with businesses of all sizes. Minimum engagements start at 50 leads per month. Enterprise clients can scale to 50,000+ leads per month with dedicated infrastructure." },
        { q: "Can I return leads that don't meet quality standards?", a: "Yes. We have a clear lead return policy. Leads that fail verification or don't meet agreed-upon criteria are credited to your account. Our quality SLA ensures you're never paying for bad data." },
      ]}
      related={[
        { label: "Pay-Per-Call", href: "/services/pay-per-call", desc: "Only pay when the phone rings", icon: "📞" },
        { label: "Performance Advertising", href: "/services/performance-advertising", desc: "Pay for results only", icon: "📈" },
        { label: "Fraud Prevention", href: "/services/fraud-prevention", desc: "99.8% clean traffic", icon: "🛡️" },
        { label: "Affiliate Marketing", href: "/services/affiliate-marketing", desc: "Elite network, top offers", icon: "🤝" },
        { label: "Partner Program", href: "/services/partner-program", desc: "Monetize your traffic", icon: "💰" },
      ]}
      slug={seo.slug} schema={seo.schema} keywords={seo.keywords}
      ctaHeading="Get Exclusive, Verified Leads Starting Today"
      ctaSubtext="Real-time delivery. 100% exclusive. Multi-layer verified. Built around your exact lead criteria."
    />
  );
}