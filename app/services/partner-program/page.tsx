// app/services/partner-program/page.tsx
import { Metadata } from "next";
import { SERVICE_SEO } from "@/lib/seo";
import ServicePageLayout from "@/app/component/ServicePageLayout";
const seo = SERVICE_SEO["partner-program"];
export const metadata: Metadata = {
  title: seo.metaTitle, description: seo.metaDescription, keywords: seo.keywords,
  alternates: { canonical: seo.canonical },
  openGraph: { title: seo.metaTitle, description: seo.metaDescription, url: seo.canonical, siteName: "Hawks Media LLC", images: [{ url: seo.ogImage, width: 1200, height: 630 }], type: "website" },
  twitter: { card: "summary_large_image", title: seo.metaTitle, description: seo.metaDescription, images: [seo.ogImage] },
};
export default function PartnerProgramPage() {
  return (
    <ServicePageLayout
      badge="PARTNER PROGRAM"
      h1={seo.h1}
      intro="Whether you're a publisher, website owner, influencer, email marketer, or app developer — Hawks Media's partner program is built to maximize what your traffic is worth. Curated offers, weekly payments, and a team that's invested in your growth."
      heroStats={[
        { value: "5K+", label: "Active Partners" },
        { value: "Weekly", label: "Payment Cycle" },
        { value: "120+", label: "Countries" },
        { value: "Free", label: "To Join" },
      ]}
      benefits={[
        { icon: "🎁", title: "Curated High-Value Offers", desc: "We handpick the best-converting, highest-paying offers in the market and make them exclusively available to our partner network." },
        { icon: "💳", title: "Weekly Payouts, Multiple Methods", desc: "Get paid every 7 days via wire, ACH, PayPal, or crypto. No waiting 30, 60, or 90 days to see your earnings." },
        { icon: "🛠️", title: "Free Promo Tools & Creatives", desc: "Access landing pages, banner creatives, tracking links, and conversion-optimized assets — all provided free of charge." },
        { icon: "📊", title: "Transparent Real-Time Dashboard", desc: "See your clicks, conversions, and earnings update in real-time. Full transparency, no delayed or hidden reporting." },
        { icon: "👤", title: "Dedicated Partner Manager", desc: "A personal account manager helps you pick the right offers, optimize your campaigns, and scale your income." },
        { icon: "🔒", title: "Reliable, On-Time Payments", desc: "5,000+ partners trust us for consistent, on-time payments. We've maintained a 98% payment satisfaction rate since founding." },
      ]}
      steps={[
        { num: "1", title: "Apply Free", desc: "Fill out a simple application telling us about your traffic sources and marketing experience." },
        { num: "2", title: "Get Approved (24hr)", desc: "We personally review every application and respond within 24 hours. No automated rejections." },
        { num: "3", title: "Pick Your Offers", desc: "Browse our exclusive catalog and select offers that match your audience for the highest conversions." },
        { num: "4", title: "Drive, Convert & Get Paid", desc: "Promote, convert, and collect weekly payments. Scale as fast as your traffic allows." },
      ]}
      faqs={[
        { q: "Who can join the Hawks Media partner program?", a: "We welcome publishers, website owners, bloggers, influencers, email marketers, app developers, and media buyers. If you have traffic and an audience, we have offers that will convert. Apply regardless of your current volume — we work with beginners and seasoned pros alike." },
        { q: "What traffic sources are accepted?", a: "We accept SEO, paid search, social media, email, display, native, and influencer traffic. All traffic must be compliant with our guidelines. We do not accept incentivized, bot, or misleading traffic." },
        { q: "How quickly are applications reviewed?", a: "We review all applications within 24 hours and respond with an approval or feedback on what's needed. We personally review every application rather than using automated filters." },
        { q: "What is the minimum payout threshold?", a: "The minimum payout threshold is $100. Payments are processed weekly on a net-7 basis. Available methods include wire transfer, ACH, PayPal, and cryptocurrency (BTC, USDT)." },
        { q: "Can I promote offers globally?", a: "Yes — our partner program spans 120+ countries. Many of our top offers have global availability, and we have geo-specific offers for major markets including the US, UK, Canada, Australia, Germany, and LATAM." },
      ]}
      related={[
        { label: "Affiliate Marketing", href: "/services/affiliate-marketing", desc: "Elite network, top offers", icon: "🤝" },
        { label: "Pay-Per-Call", href: "/services/pay-per-call", desc: "Only pay when the phone rings", icon: "📞" },
        { label: "Lead Generation", href: "/services/lead-generation", desc: "Exclusive verified leads", icon: "🎯" },
        { label: "Performance Advertising", href: "/services/performance-advertising", desc: "Pay for results only", icon: "📈" },
        { label: "Fraud Prevention", href: "/services/fraud-prevention", desc: "99.8% clean traffic", icon: "🛡️" },
      ]}
      slug={seo.slug} schema={seo.schema} keywords={seo.keywords}
      ctaHeading="Join 5,000+ Partners Earning Weekly"
      ctaSubtext="Free to join. Curated offers. Weekly payouts. A dedicated team invested in your growth. Apply in minutes."
    />
  );
}