import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, PHONE, PHONE_DISPLAY } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Industries We Serve | Insurance, Legal, Home Services & More | Hawks Media",
  description:
    "Hawks Media delivers high-converting pay-per-call leads and affiliate campaigns across insurance, home services, legal, financial services, and healthcare verticals.",
  alternates: { canonical: `${SITE_URL}/industries` },
 openGraph: {
  title: "Industries We Serve | Hawks Media",
  description: "High-intent pay-per-call leads across insurance, home services, legal, financial services, and healthcare.",
  url: `${SITE_URL}/industries`,
  siteName: "Hawks Media LLC",
  images: [{ url: `${SITE_URL}/logo.png`, width: 1200, height: 630, alt: "Hawks Media LLC" }],
  type: "website",
},
};

const industries = [
  { name: "Insurance", icon: "🛡️", desc: "Auto, home, health, and Medicare/ACA enrollment campaigns delivering verified, high-intent inbound calls." },
  { name: "Home Services", icon: "🏠", desc: "Roofing, HVAC, plumbing, pest control, and solar — local service leads with fast speed-to-call." },
  { name: "Legal", icon: "⚖️", desc: "Personal injury, mass torts, and criminal defense — high-LTV leads for firms ready to scale intake." },
  { name: "Financial Services", icon: "💳", desc: "Mortgage refinance, debt consolidation, and tax relief campaigns built for qualified, compliant volume." },
  { name: "Healthcare & Senior Care", icon: "🏥", desc: "Medical alert devices, addiction treatment, and senior living — trust-driven, high-conversion verticals." },
];

export default function IndustriesPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Hawks Media Industries Served",
    url: `${SITE_URL}/industries`,
    itemListElement: industries.map((ind, i) => ({ "@type": "ListItem", position: i + 1, name: ind.name })),
  };

  return (
    <main className="min-h-screen bg-[#060913] text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <section className="max-w-5xl mx-auto px-5 py-24 text-center">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#3b82f6]/25 bg-[#2563eb]/10 px-4 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#60a5fa]" />
          <span className="text-xs font-semibold uppercase tracking-widest text-[#93c5fd]">Industries</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black mb-5 bg-gradient-to-br from-[#dbeafe] via-[#93c5fd] to-[#38bdf8] bg-clip-text text-transparent">
          Industries We Serve
        </h1>
        <p className="max-w-2xl mx-auto text-[#dbeafe]/75 leading-relaxed mb-16">
          Hawks Media specializes in high-value, high-intent verticals where a phone call converts at 10–30x the
          rate of a click. Here&rsquo;s where our pay-per-call and affiliate network performs best.
        </p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 text-left">
          {industries.map((ind) => (
            <div key={ind.name} className="rounded-2xl border border-[#3b82f6]/15 bg-[#0d1830]/60 p-7">
              <div className="text-3xl mb-4">{ind.icon}</div>
              <h2 className="text-lg font-bold text-white mb-2">{ind.name}</h2>
              <p className="text-sm text-[#dbeafe]/65 leading-relaxed">{ind.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-[#3b82f6]/20 bg-gradient-to-br from-[#2563eb]/15 to-[#38bdf8]/10 p-10">
          <h2 className="text-2xl font-bold text-white mb-3">Don&rsquo;t see your industry?</h2>
          <p className="text-[#dbeafe]/70 mb-7 max-w-xl mx-auto">
            We onboard new verticals regularly. Reach out and we&rsquo;ll tell you honestly whether pay-per-call is
            the right fit for your business.
          </p>
          <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[#1d4ed8] to-[#3b82f6] px-8 py-3 text-sm font-bold text-white">
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </section>
    </main>
  );
}