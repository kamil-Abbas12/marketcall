import { Metadata } from "next";
import { SITE_URL, PHONE, PHONE_DISPLAY } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Help Center | FAQs for Advertisers & Publishers | Hawks Media",
  description:
    "Find answers to common questions about getting started with Hawks Media — pay-per-call campaigns, affiliate payouts, fraud prevention, and partner onboarding.",
  alternates: { canonical: `${SITE_URL}/help-center` },
};

const advertiserFaqs = [
  { q: "How do I start a pay-per-call campaign with Hawks Media?", a: "Reach out via our contact form or call us directly. We'll discuss your target geography, call duration threshold, and budget, then onboard you with a dedicated account manager within days." },
  { q: "How is a call billed?", a: "You're billed only for calls that meet your pre-agreed criteria — duration, geography, and source. Every call is recorded and auditable, so you can verify quality before you pay." },
  { q: "What industries do you support?", a: "We specialize in insurance, home services, legal, financial services, and healthcare — see our Industries page for details." },
];

const publisherFaqs = [
  { q: "How often do affiliates get paid?", a: "Weekly payments with no minimum payout threshold." },
  { q: "What traffic sources are allowed?", a: "SEO, paid search, social, display, and native advertising are generally accepted. Specific allowed sources vary by offer — your affiliate manager will confirm before you launch." },
  { q: "How does Hawks Media prevent fraud from affecting my account?", a: "We run real-time call scoring and human quality review on every conversion before it's billed to an advertiser, which protects legitimate publishers from being penalized for traffic they didn't generate." },
];

const generalFaqs = [
  { q: "Is Hawks Media an advertiser or a network?", a: "Hawks Media is a performance marketing network — we connect advertisers seeking qualified leads with publishers and affiliates who drive that traffic." },
  { q: "How do I contact support?", a: "Call us at +1 786 485 0671 or email info@hawksmediallc.com. Billing questions can go to Billing@hawksmediallc.com." },
];

const allFaqs = [...advertiserFaqs, ...publisherFaqs, ...generalFaqs];

export default function HelpCenterPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <main className="min-h-screen bg-[#060913] text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="max-w-3xl mx-auto px-5 py-24">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#3b82f6]/25 bg-[#2563eb]/10 px-4 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#60a5fa]" />
          <span className="text-xs font-semibold uppercase tracking-widest text-[#93c5fd]">Help Center</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black mb-4 bg-gradient-to-br from-[#dbeafe] via-[#93c5fd] to-[#38bdf8] bg-clip-text text-transparent">
          How can we help?
        </h1>
        <p className="text-[#dbeafe]/75 mb-14">Answers for advertisers, publishers, and anyone evaluating Hawks Media.</p>

        <h2 className="text-xl font-bold text-white mb-5">For Advertisers</h2>
        <div className="space-y-4 mb-12">
          {advertiserFaqs.map((f) => (
            <div key={f.q} className="rounded-2xl border border-[#3b82f6]/15 bg-[#0d1830]/60 p-6">
              <h3 className="text-base font-semibold text-white mb-2">{f.q}</h3>
              <p className="text-sm text-[#dbeafe]/65 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-bold text-white mb-5">For Publishers</h2>
        <div className="space-y-4 mb-12">
          {publisherFaqs.map((f) => (
            <div key={f.q} className="rounded-2xl border border-[#3b82f6]/15 bg-[#0d1830]/60 p-6">
              <h3 className="text-base font-semibold text-white mb-2">{f.q}</h3>
              <p className="text-sm text-[#dbeafe]/65 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-bold text-white mb-5">General</h2>
        <div className="space-y-4">
          {generalFaqs.map((f) => (
            <div key={f.q} className="rounded-2xl border border-[#3b82f6]/15 bg-[#0d1830]/60 p-6">
              <h3 className="text-base font-semibold text-white mb-2">{f.q}</h3>
              <p className="text-sm text-[#dbeafe]/65 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-[#3b82f6]/20 bg-gradient-to-br from-[#2563eb]/15 to-[#38bdf8]/10 p-8 text-center">
          <p className="text-white font-bold mb-2">Still have questions?</p>
          <a href={`tel:${PHONE}`} className="inline-block mt-3 rounded-full bg-gradient-to-br from-[#1d4ed8] to-[#3b82f6] px-8 py-3 text-sm font-bold text-white">
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </section>
    </main>
  );
}