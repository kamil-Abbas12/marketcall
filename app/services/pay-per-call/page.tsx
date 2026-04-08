// app/services/pay-per-call/page.tsx
import { Metadata } from "next";
import { SERVICE_SEO } from "@/lib/seo";
import ServicePageLayout from "@/app/component/ServicePageLayout";

const seo = SERVICE_SEO["pay-per-call"];

export const metadata: Metadata = {
  title: seo.metaTitle,
  description: seo.metaDescription,
  keywords: seo.keywords,
  alternates: { canonical: seo.canonical },
  openGraph: { title: seo.metaTitle, description: seo.metaDescription, url: seo.canonical, siteName: "Hawks Media LLC", images: [{ url: seo.ogImage, width: 1200, height: 630 }], type: "website" },
  twitter: { card: "summary_large_image", title: seo.metaTitle, description: seo.metaDescription, images: [seo.ogImage] },
};

export default function PayPerCallPage() {
  return (
    <ServicePageLayout
      badge="PAY-PER-CALL"
      h1={seo.h1}
      intro="Forget burning budget on clicks that never convert. Hawks Media delivers verified, high-intent inbound calls from prospects who are ready to buy — and you only pay when the phone rings. Zero wasted spend."
      heroStats={[
        { value: "50M+", label: "Conversions / yr" },
        { value: "120+", label: "Countries" },
        { value: "4.9★", label: "Partner Rating" },
        { value: "98%", label: "Call Verification Rate" },
      ]}
      benefits={[
        { icon: "📞", title: "Verified Inbound Calls Only", desc: "Every call is screened and verified before it reaches you. No bots, no invalid traffic — real prospects, real conversations." },
        { icon: "💰", title: "Zero Wasted Budget", desc: "Pay only for calls that meet your quality criteria. Set your own duration thresholds and only pay for what converts." },
        { icon: "🎯", title: "Advanced Targeting", desc: "Target by geography, keyword intent, time of day, and device type to reach the exact audience that converts for your business." },
        { icon: "📊", title: "Real-Time Analytics Dashboard", desc: "Track every call, conversion, and dollar in your live dashboard. Full transparency on campaign performance 24/7." },
        { icon: "⚡", title: "Instant Campaign Launch", desc: "Get your pay-per-call campaign live within hours. No lengthy setup, no tech headaches — we handle everything." },
        { icon: "🤝", title: "Dedicated Account Manager", desc: "Every advertiser gets a dedicated manager focused on optimizing your campaigns and maximizing your ROI." },
      ]}
      steps={[
        { num: "1", title: "Define Your Ideal Caller", desc: "Tell us your target audience, geography, and budget. We build a custom campaign around your goals." },
        { num: "2", title: "We Launch & Optimize", desc: "Our team activates campaigns across our elite publisher network and optimizes in real-time." },
        { num: "3", title: "Calls Come In", desc: "Verified, high-intent callers connect directly with your sales team — ready to buy." },
        { num: "4", title: "Pay Per Result", desc: "Only pay for calls that meet your duration and quality thresholds. Full invoice transparency." },
      ]}
      faqs={[
        { q: "What is pay-per-call marketing?", a: "Pay-per-call is a performance marketing model where advertisers pay only when a qualified prospect calls their business. Unlike CPC or CPM, you only pay for real human interactions — making it one of the highest ROI marketing channels available." },
        { q: "What industries does pay-per-call work best for?", a: "Pay-per-call works exceptionally well for insurance, home services, legal, financial services, healthcare, auto, and any industry where phone conversations are central to the sales process. If your customers call before they buy, pay-per-call is for you." },
        { q: "How are calls verified and validated?", a: "Our platform uses multi-layer verification: real-time fraud detection, call duration thresholds, geographic validation, and duplicate call filtering. You only get billed for calls that meet your predefined quality criteria." },
        { q: "How quickly can I start receiving calls?", a: "Most campaigns go live within 24–48 hours of onboarding. Our team handles all the technical setup, tracking, and publisher matching so you can start receiving calls as fast as possible." },
        { q: "Can I set a budget cap?", a: "Yes — you have full control over daily, weekly, and monthly budget caps. You can also set call duration minimums, geographic restrictions, and hourly scheduling to maximize your budget efficiency." },
      ]}
      related={[
        { label: "Lead Generation", href: "/services/lead-generation", desc: "Exclusive verified leads", icon: "🎯" },
        { label: "Performance Advertising", href: "/services/performance-advertising", desc: "Pay for results only", icon: "📈" },
        { label: "Fraud Prevention", href: "/services/fraud-prevention", desc: "99.8% clean traffic", icon: "🛡️" },
        { label: "Affiliate Marketing", href: "/services/affiliate-marketing", desc: "Elite network, top offers", icon: "🤝" },
        { label: "Partner Program", href: "/services/partner-program", desc: "Monetize your traffic", icon: "💰" },
      ]}
      slug={seo.slug}
      schema={seo.schema}
      keywords={seo.keywords}
      ctaHeading="Ready to Only Pay for Real Results?"
      ctaSubtext="Launch your pay-per-call campaign today. Verified calls, zero wasted budget, full transparency."
    />
  );
}