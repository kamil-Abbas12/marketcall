import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Hawks Media — Pay Per Call, Lead Generation & Affiliate Marketing Questions",
  description:
    "Answers to common questions about pay per call marketing, affiliate marketing, lead generation, performance advertising, fraud prevention, call quality, publisher monetization, and scaling inbound campaigns.",
  keywords: [
    "pay per call faq",
    "affiliate marketing faq",
    "lead generation faq",
    "performance marketing faq",
    "fraud prevention faq",
    "publisher monetization faq",
    "inbound call marketing questions",
    "how pay per call works",
    "how affiliate lead generation works",
    "how to monetize traffic with calls",
  ],
  openGraph: {
    title: "Hawks Media FAQ",
    description:
      "Common questions and answers about pay per call, affiliate marketing, lead generation, fraud prevention, and performance advertising.",
    type: "website",
  },
  alternates: {
    canonical: "/faq",
  },
};

const faqItems = [
  {
    question: "What is pay-per-call marketing?",
    answer:
      "Pay-per-call marketing is a performance-based advertising model where businesses pay for qualified inbound phone calls instead of paying only for clicks or impressions. It works especially well for high-intent industries where customers prefer to call before buying, such as legal, insurance, home services, healthcare, and financial services.",
  },
  {
    question: "How does pay-per-call differ from traditional lead generation?",
    answer:
      "Traditional lead generation usually captures a form fill, while pay-per-call focuses on real-time inbound phone conversations. Calls often convert faster because the buyer is already engaged, wants information now, and can speak directly to a sales team or intake specialist.",
  },
  {
    question: "What industries benefit most from inbound call campaigns?",
    answer:
      "Industries with urgent or high-value customer intent typically benefit the most. That includes insurance, legal services, home services, solar, medical, debt relief, finance, and local businesses where speed to lead and trust are important in the buying process.",
  },
  {
    question: "What makes a lead or phone call high quality?",
    answer:
      "A high-quality lead or call usually matches the campaign targeting, comes from a relevant geo, includes genuine user intent, and meets buyer-defined filters such as duration, call routing rules, time of day, device type, or service eligibility. Quality matters more than raw volume because better lead quality typically improves close rate and return on ad spend.",
  },
  {
    question: "How does affiliate marketing work with lead generation?",
    answer:
      "Affiliate marketing for lead generation connects publishers and traffic partners with offers that pay for specific actions, such as a phone call, a form submission, or another validated conversion. The key is accurate tracking, quality control, fraud prevention, and matching the right traffic source to the right vertical and offer.",
  },
  {
    question: "What is performance advertising?",
    answer:
      "Performance advertising is a model where ad spend is tied to measurable outcomes such as leads, calls, sales, or approved conversions. Instead of paying mainly for exposure, businesses focus on channels and campaigns that produce accountable results and can be optimized using real conversion data.",
  },
  {
    question: "Why is fraud prevention important in lead generation?",
    answer:
      "Fraud prevention helps protect campaign budgets, maintain lead quality, and reduce invalid traffic. In performance marketing, poor-quality traffic, incentivized leads, duplicate submissions, spoofed calls, or bot activity can damage ROI quickly. Strong fraud controls help buyers scale with more confidence.",
  },
  {
    question: "How can publishers monetize traffic with pay-per-call offers?",
    answer:
      "Publishers can monetize high-intent traffic by sending visitors to offers that convert through inbound calls rather than only web forms. This can be valuable for search, local, content, and comparison traffic where users prefer to speak to a real person before making a decision.",
  },
  {
    question: "How do businesses improve conversion rates on inbound calls?",
    answer:
      "Better conversion rates usually come from stronger targeting, faster call routing, high-intent keywords, better pre-call messaging, trained call handlers, clear scripts, and matching the caller with the right buyer or department. Conversion improves when the user experience is relevant from keyword to landing page to phone conversation.",
  },
  {
    question: "How long does it take to scale a performance marketing campaign?",
    answer:
      "Scaling depends on offer quality, payout structure, compliance, traffic source diversity, funnel conversion rates, and lead quality controls. Some campaigns can scale quickly if the economics are strong, while others require testing, routing adjustments, content improvements, and careful traffic expansion over time.",
  },
  {
    question: "Can a FAQ page help SEO and organic traffic?",
    answer:
      "Yes, a strong FAQ page can help target long-tail search queries, improve topical relevance, and create more opportunities for internal linking. The best results come when the answers are genuinely useful, closely related to the business, supported by service pages and blog content, and marked up with clean structured data.",
  },
  {
    question: "Can a FAQ page guarantee more impressions, clicks, or Google ad earnings?",
    answer:
      "No page can guarantee rankings, impressions, clicks, AdSense approval, or advertising earnings. However, a useful FAQ page can improve content depth, organic keyword coverage, and user engagement, which may contribute to stronger search visibility over time when combined with good technical SEO, quality content, and site trust.",
  },
];

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div
      className="min-h-screen blog-blue-bg"
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Ambient glows */}
      <div
        className="fixed pointer-events-none"
        style={{
          top: "-160px",
          left: "-100px",
          width: "520px",
          height: "520px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(37,99,235,.34) 0%, rgba(30,64,175,.18) 45%, transparent 72%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="fixed pointer-events-none"
        style={{
          bottom: "-140px",
          right: "-80px",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(14,165,233,.26) 0%, rgba(3,105,161,.14) 45%, transparent 72%)",
          filter: "blur(80px)",
        }}
      />
      <div className="fixed inset-0 pointer-events-none blog-grid-overlay" />

      <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-14 text-center">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5 tracking-widest uppercase"
            style={{
              background: "rgba(37,99,235,.14)",
              border: "1px solid rgba(96,165,250,.22)",
              color: "#93c5fd",
              boxShadow: "0 8px 24px rgba(15,23,42,.18)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full inline-block"
              style={{ background: "#60a5fa" }}
            />
            SEO FAQ Hub
          </div>

          <h1
            className="text-4xl sm:text-5xl font-black mb-4"
            style={{
              background:
                "linear-gradient(135deg,#dbeafe 0%, #93c5fd 26%, #60a5fa 55%, #38bdf8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "-.02em",
            }}
          >
            Frequently Asked Questions
          </h1>

          <p
            className="max-w-3xl mx-auto text-sm sm:text-base leading-relaxed"
            style={{ color: "rgba(191,219,254,.78)" }}
          >
            Explore common questions about pay-per-call marketing, affiliate
            marketing, lead generation, performance advertising, fraud
            prevention, publisher monetization, and campaign growth. This page
            is designed to answer real search intent clearly while strengthening
            topical relevance across the site.
          </p>
        </div>

        {/* Quick links */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          <Link
            href="/services/pay-per-call"
            className="px-4 py-2 rounded-full text-xs font-semibold transition-all"
            style={{
              background: "rgba(15,23,42,.42)",
              border: "1px solid rgba(96,165,250,.14)",
              color: "rgba(191,219,254,.8)",
              backdropFilter: "blur(10px)",
            }}
          >
            Pay-Per-Call
          </Link>
          <Link
            href="/services/affiliate-marketing"
            className="px-4 py-2 rounded-full text-xs font-semibold transition-all"
            style={{
              background: "rgba(15,23,42,.42)",
              border: "1px solid rgba(96,165,250,.14)",
              color: "rgba(191,219,254,.8)",
              backdropFilter: "blur(10px)",
            }}
          >
            Affiliate Marketing
          </Link>
          <Link
            href="/services/lead-generation"
            className="px-4 py-2 rounded-full text-xs font-semibold transition-all"
            style={{
              background: "rgba(15,23,42,.42)",
              border: "1px solid rgba(96,165,250,.14)",
              color: "rgba(191,219,254,.8)",
              backdropFilter: "blur(10px)",
            }}
          >
            Lead Generation
          </Link>
          <Link
            href="/services/performance-advertising"
            className="px-4 py-2 rounded-full text-xs font-semibold transition-all"
            style={{
              background: "rgba(15,23,42,.42)",
              border: "1px solid rgba(96,165,250,.14)",
              color: "rgba(191,219,254,.8)",
              backdropFilter: "blur(10px)",
            }}
          >
            Performance Advertising
          </Link>
          <Link
            href="/services/fraud-prevention"
            className="px-4 py-2 rounded-full text-xs font-semibold transition-all"
            style={{
              background: "rgba(15,23,42,.42)",
              border: "1px solid rgba(96,165,250,.14)",
              color: "rgba(191,219,254,.8)",
              backdropFilter: "blur(10px)",
            }}
          >
            Fraud Prevention
          </Link>
          <Link
            href="/blog"
            className="px-4 py-2 rounded-full text-xs font-semibold transition-all"
            style={{
              background: "rgba(15,23,42,.42)",
              border: "1px solid rgba(96,165,250,.14)",
              color: "rgba(191,219,254,.8)",
              backdropFilter: "blur(10px)",
            }}
          >
            Blog
          </Link>
        </div>

        {/* FAQ list */}
        <section className="space-y-5">
          {faqItems.map((item, index) => (
            <article
              key={item.question}
              className="rounded-2xl p-6 sm:p-7"
              style={{
                background: "rgba(8,12,24,.38)",
                border: "1px solid rgba(255,255,255,.06)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 8px 30px rgba(0,0,0,.18)",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg,#1d4ed8,#3b82f6)",
                    color: "#fff",
                  }}
                >
                  {index + 1}
                </div>

                <div className="flex-1">
                  <h2
                    className="text-lg sm:text-xl font-bold mb-3"
                    style={{
                      color: "#e2e8f0",
                      letterSpacing: "-.01em",
                    }}
                  >
                    {item.question}
                  </h2>

                  <p
                    className="text-sm sm:text-[15px] leading-7"
                    style={{ color: "rgba(203,213,225,.82)" }}
                  >
                    {item.answer}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Supporting content block */}
        <section
          className="mt-14 rounded-2xl p-8"
          style={{
            background:
              "linear-gradient(135deg,rgba(29,78,216,.15) 0%,rgba(59,130,246,.08) 100%)",
            border: "1px solid rgba(37,99,235,.25)",
          }}
        >
          <h2
            className="text-2xl font-black mb-3"
            style={{ color: "#e2e8f0", letterSpacing: "-.02em" }}
          >
            Why this FAQ page helps your SEO
          </h2>

          <p
            className="text-sm sm:text-[15px] leading-7 mb-4"
            style={{ color: "rgba(191,219,254,.78)" }}
          >
            A strong FAQ page can capture long-tail searches such as “what is
            pay per call marketing,” “how affiliate lead generation works,” and
            “how to prevent fraud in performance marketing.” It also improves
            internal linking between your services, blog content, and
            conversion-focused pages.
          </p>

          <p
            className="text-sm sm:text-[15px] leading-7"
            style={{ color: "rgba(191,219,254,.78)" }}
          >
            For the best results, keep adding useful blog posts, connect them to
            service pages, strengthen technical SEO, and publish genuinely
            helpful answers that match real buyer and publisher search intent.
          </p>
        </section>
      </main>
    </div>
  );
}
