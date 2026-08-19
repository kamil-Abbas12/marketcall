import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, PHONE, PHONE_DISPLAY } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About Hawks Media LLC | Performance Marketing",
  description:
    "Hawks Media LLC is a performance marketing network connecting advertisers and publishers through fraud-free, pay-per-call leads across 120+ countries.",
  alternates: { canonical: `${SITE_URL}/company` },
 openGraph: {
  title: "About Hawks Media LLC",
  description: "Performance marketing built on one principle: you only pay for real results.",
  url: `${SITE_URL}/company`,
  siteName: "Hawks Media LLC",
  images: [{ url: `${SITE_URL}/logo.png`, width: 1200, height: 630, alt: "Hawks Media LLC" }],
  type: "website",
},
};

const stats = [
  { value: "50M+", label: "Conversions / yr" },
  { value: "5K+", label: "Active Partners" },
  { value: "120+", label: "Countries" },
  { value: "4.9★", label: "Partner Rating" },
];

const values = [
  { icon: "🛡️", title: "Fraud-Free by Default", body: "Real-time call scoring and human quality review eliminate fraudulent conversions before they ever reach an advertiser's invoice." },
  { icon: "🤝", title: "Affiliate-First", body: "Weekly payments, no minimum thresholds, and dedicated managers — we treat publishers as partners, not traffic sources." },
  { icon: "📊", title: "Full Transparency", body: "Every call, lead, and conversion is tracked and auditable. No black boxes, no shaved commissions." },
  { icon: "🌍", title: "Global, Vertical-Deep", body: "120+ countries of reach, paired with deep specialization in insurance, legal, home services, and healthcare." },
];

export default function CompanyPage() {
  return (
    <main className="min-h-screen bg-[#060913] text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>
      <section className="max-w-4xl mx-auto px-5 py-24 text-center">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#3b82f6]/25 bg-[#2563eb]/10 px-4 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#60a5fa]" />
          <span className="text-xs font-semibold uppercase tracking-widest text-[#93c5fd]">About Us</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black mb-5 bg-gradient-to-br from-[#dbeafe] via-[#93c5fd] to-[#38bdf8] bg-clip-text text-transparent">
          Performance Marketing, Built on Results
        </h1>
        <p className="max-w-2xl mx-auto text-[#dbeafe]/75 leading-relaxed">
          Hawks Media LLC connects advertisers with elite affiliates through exclusive pay-per-call leads — built on
          one principle: you only pay when something real happens.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-5 pb-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-[#3b82f6]/15 bg-[#0d1830]/60 p-6 text-center">
              <div className="text-2xl font-black bg-gradient-to-br from-[#dbeafe] to-[#38bdf8] bg-clip-text text-transparent">{s.value}</div>
              <div className="text-xs text-[#93c5fd]/70 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-white text-center mb-10">What We Stand For</h2>
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-[#3b82f6]/15 bg-[#0d1830]/60 p-7">
              <div className="text-2xl mb-3">{v.icon}</div>
              <h3 className="text-base font-bold text-white mb-2">{v.title}</h3>
              <p className="text-sm text-[#dbeafe]/65 leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-[#3b82f6]/20 bg-gradient-to-br from-[#2563eb]/15 to-[#38bdf8]/10 p-10 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Ready to work with us?</h2>
          <p className="text-[#dbeafe]/70 mb-7 max-w-xl mx-auto">
            Whether you&apos;re an advertiser looking for qualified leads or a publisher looking to monetize traffic,
            we&apos;d love to talk.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[#1d4ed8] to-[#3b82f6] px-8 py-3 text-sm font-bold text-white">
              Call {PHONE_DISPLAY}
            </a>
            <Link href="/services" className="inline-flex items-center gap-2 rounded-full border border-[#3b82f6]/30 px-8 py-3 text-sm font-bold text-[#dbeafe]">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}