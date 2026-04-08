// app/services/performance-advertising/page.tsx
import { Metadata } from "next";
import { SERVICE_SEO } from "@/lib/seo";
import ServicePageLayout from "@/app/component/ServicePageLayout";
const seo = SERVICE_SEO["performance-advertising"];
export const metadata: Metadata = {
  title: seo.metaTitle, description: seo.metaDescription, keywords: seo.keywords,
  alternates: { canonical: seo.canonical },
  openGraph: { title: seo.metaTitle, description: seo.metaDescription, url: seo.canonical, siteName: "Hawks Media LLC", images: [{ url: seo.ogImage, width: 1200, height: 630 }], type: "website" },
  twitter: { card: "summary_large_image", title: seo.metaTitle, description: seo.metaDescription, images: [seo.ogImage] },
};
export default function PerformanceAdvertisingPage() {
  return (
    <ServicePageLayout
      badge="PERFORMANCE ADVERTISING"
      h1={seo.h1}
      intro="Traditional advertising charges you to show up. Performance advertising charges you when something actually happens. Hawks Media runs end-to-end CPA, CPL, and pay-per-call campaigns where your budget only moves when results do."
      heroStats={[
        { value: "50M+", label: "Conversions Tracked" },
        { value: "$0", label: "Wasted on Non-Results" },
        { value: "120+", label: "Countries Active" },
        { value: "4.9★", label: "Advertiser Rating" },
      ]}
      benefits={[
        { icon: "📈", title: "CPA, CPL & Pay-Per-Call Models", desc: "Choose the performance model that fits your business — cost-per-acquisition, cost-per-lead, or pay-per-call. All results-based." },
        { icon: "🧠", title: "AI-Powered Campaign Optimization", desc: "Machine learning algorithms continuously optimize your campaigns in real-time — maximizing conversions and minimizing cost." },
        { icon: "🌐", title: "Multi-Channel Distribution", desc: "Your campaigns run across search, social, native, display, and email — wherever your audience converts best." },
        { icon: "🔍", title: "Full-Funnel Tracking", desc: "Track every touchpoint from first click to closed sale. Understand exactly which channels, creatives, and audiences drive ROI." },
        { icon: "🛡️", title: "Built-In Fraud Protection", desc: "Every campaign is protected by our proprietary fraud detection system. Only real, human-generated conversions are billed." },
        { icon: "📋", title: "Transparent Reporting", desc: "Daily performance reports, real-time dashboards, and monthly strategy reviews. No black-box surprises." },
      ]}
      steps={[
        { num: "1", title: "Set Your KPIs", desc: "Define what a conversion means to you — a call, a lead form, a sale, or an app install. We optimize toward it." },
        { num: "2", title: "Campaign Build & Launch", desc: "Our team builds creatives, sets up tracking, and activates campaigns across our publisher network." },
        { num: "3", title: "Optimize in Real-Time", desc: "AI and human experts monitor and optimize campaigns daily to improve conversion rates and lower CPA." },
        { num: "4", title: "Scale What Works", desc: "Double down on winning campaigns and cut what doesn't. Scale profitably with full data backing every decision." },
      ]}
      faqs={[
        { q: "What is performance advertising?", a: "Performance advertising is a model where advertisers only pay when a specific action occurs — a call, a lead, or a sale. Unlike traditional advertising where you pay for impressions or clicks regardless of outcome, performance advertising aligns cost directly with business results." },
        { q: "What performance models does Hawks Media support?", a: "We support CPA (cost-per-acquisition), CPL (cost-per-lead), CPC (cost-per-click), and pay-per-call models. We'll recommend the model that best fits your business type and sales cycle." },
        { q: "How do you prevent fraudulent conversions?", a: "Our fraud prevention system runs in real-time, detecting bot traffic, duplicate submissions, invalid phone numbers, and fraudulent conversion signals before they're billed. We maintain a 99.8%+ clean traffic rate." },
        { q: "What budget do I need to get started?", a: "We work with advertisers at all budget levels. Entry-level performance campaigns typically start at $2,000/month. For maximum optimization and scale, we recommend a $5,000+ monthly budget. Contact us to discuss your specific goals." },
        { q: "How long before I see results?", a: "Most campaigns show measurable results within the first 2 weeks. Significant optimization and scaling typically occurs in weeks 4–8 as our AI accumulates conversion data. We provide weekly performance updates throughout." },
      ]}
      related={[
        { label: "Pay-Per-Call", href: "/services/pay-per-call", desc: "Only pay when the phone rings", icon: "📞" },
        { label: "Lead Generation", href: "/services/lead-generation", desc: "Exclusive verified leads", icon: "🎯" },
        { label: "Fraud Prevention", href: "/services/fraud-prevention", desc: "99.8% clean traffic", icon: "🛡️" },
        { label: "Affiliate Marketing", href: "/services/affiliate-marketing", desc: "Elite network, top offers", icon: "🤝" },
        { label: "Partner Program", href: "/services/partner-program", desc: "Monetize your traffic", icon: "💰" },
      ]}
      slug={seo.slug} schema={seo.schema} keywords={seo.keywords}
      ctaHeading="Stop Paying for Ads That Don't Convert"
      ctaSubtext="Launch performance-based campaigns where every dollar spent is tied to a real business result."
    />
  );
}