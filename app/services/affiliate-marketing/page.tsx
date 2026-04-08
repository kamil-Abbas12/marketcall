// app/services/affiliate-marketing/page.tsx
import { Metadata } from "next";
import { SERVICE_SEO } from "@/lib/seo";
import ServicePageLayout from "@/app/component/ServicePageLayout";

const seo = SERVICE_SEO["affiliate-marketing"];

export const metadata: Metadata = {
  title: seo.metaTitle, description: seo.metaDescription, keywords: seo.keywords,
  alternates: { canonical: seo.canonical },
  openGraph: { title: seo.metaTitle, description: seo.metaDescription, url: seo.canonical, siteName: "Hawks Media LLC", images: [{ url: seo.ogImage, width: 1200, height: 630 }], type: "website" },
  twitter: { card: "summary_large_image", title: seo.metaTitle, description: seo.metaDescription, images: [seo.ogImage] },
};

export default function AffiliateMarketingPage() {
  return (
    <ServicePageLayout
      badge="AFFILIATE MARKETING"
      h1={seo.h1}
      intro="Join one of the fastest-growing performance affiliate networks in the industry. Access exclusive high-converting offers across 120+ countries, earn industry-leading commissions, and get paid every week — consistently."
      heroStats={[
        { value: "5K+", label: "Active Partners" },
        { value: "120+", label: "Countries" },
        { value: "Weekly", label: "Payouts" },
        { value: "4.9★", label: "Partner Rating" },
      ]}
      benefits={[
        { icon: "🏆", title: "Exclusive High-Converting Offers", desc: "Access curated offers you won't find on other networks — vetted for conversion rate, payout quality, and advertiser reliability." },
        { icon: "💸", title: "Consistent Weekly Payouts", desc: "Get paid every week without delays. Multiple payout methods available including wire, ACH, PayPal, and crypto." },
        { icon: "🛠️", title: "Free Promo Tools", desc: "Landing pages, creatives, tracking links, and conversion tools — all provided free to help you maximize earnings from day one." },
        { icon: "📊", title: "Real-Time Performance Reporting", desc: "Track every click, conversion, and commission in your dashboard. Full transparency, no hidden metrics." },
        { icon: "🌍", title: "Global Reach — 120+ Countries", desc: "Promote offers to audiences across North America, Europe, LATAM, Asia, and beyond with localized campaigns." },
        { icon: "🎯", title: "Dedicated Affiliate Manager", desc: "Every partner gets a dedicated AM who helps you choose the right offers, optimize campaigns, and grow revenue." },
      ]}
      steps={[
        { num: "1", title: "Apply Free", desc: "Submit your application. We review every partner personally to ensure quality on both sides." },
        { num: "2", title: "Get Approved", desc: "Fast approval process. Most applications are reviewed within 24 hours." },
        { num: "3", title: "Choose Your Offers", desc: "Browse our exclusive offer catalog and pick the best fit for your audience and traffic source." },
        { num: "4", title: "Promote & Earn", desc: "Drive traffic, generate conversions, and watch your weekly commissions grow." },
      ]}
      faqs={[
        { q: "How do I become a Hawks Media affiliate partner?", a: "Simply apply on our partner page. We review all applications personally and typically respond within 24 hours. There's no cost to join — it's completely free." },
        { q: "What types of traffic are accepted?", a: "We accept SEO/organic, paid search, social media, email marketing, display, native ads, and influencer traffic. All traffic must comply with our quality guidelines. Incentivized and fraudulent traffic is strictly prohibited." },
        { q: "How much can I earn as an affiliate?", a: "Earnings depend on your traffic quality, volume, and the offers you promote. Top partners earn $50,000+ per month. We provide full transparency on EPC (earnings per click) and conversion rates so you can optimize effectively." },
        { q: "When and how do I get paid?", a: "We pay weekly with a net-7 schedule. Available payout methods include wire transfer, ACH, PayPal, and cryptocurrency. Minimum payout threshold is $100." },
        { q: "What verticals do you cover?", a: "Our strongest verticals are insurance, home services, legal, financial services, healthcare, and auto. We also have strong offers in education, travel, and e-commerce across our 120+ country network." },
      ]}
      related={[
        { label: "Pay-Per-Call", href: "/services/pay-per-call", desc: "Only pay when the phone rings", icon: "📞" },
        { label: "Partner Program", href: "/services/partner-program", desc: "Monetize your traffic", icon: "💰" },
        { label: "Lead Generation", href: "/services/lead-generation", desc: "Exclusive verified leads", icon: "🎯" },
        { label: "Performance Advertising", href: "/services/performance-advertising", desc: "Pay for results only", icon: "📈" },
        { label: "Fraud Prevention", href: "/services/fraud-prevention", desc: "99.8% clean traffic", icon: "🛡️" },
      ]}
      slug={seo.slug} schema={seo.schema} keywords={seo.keywords}
      ctaHeading="Ready to Monetize Your Traffic?"
      ctaSubtext="Join 5,000+ active partners earning weekly with Hawks Media's elite affiliate network. Apply free in minutes."
    />
  );
}