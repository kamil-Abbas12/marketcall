// app/services/page.tsx — Hawks Media Services Index
import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import { SITE_URL, PHONE, PHONE_DISPLAY } from "@/lib/seo";

export const metadata: Metadata = {
title: { absolute: "Performance Marketing Services | Hawks Media" },
  description:
   "Explore Hawks Media's performance marketing services: pay-per-call, lead gen, affiliate programs, and fraud prevention. Only pay for real results.",
  keywords: [
    "performance marketing services",
    "pay per call",
    "lead generation",
    "affiliate marketing",
    "fraud prevention",
    "partner program",
  ],
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
  title: "Performance Marketing Services | Hawks Media",
  description: "Only pay for real results. 50M+ conversions. 120+ countries. 5,000+ partners.",
  url: `${SITE_URL}/services`,
  siteName: "Hawks Media LLC",
  images: [{ url: `${SITE_URL}/logo.png`, width: 1200, height: 630, alt: "Hawks Media LLC" }],
  type: "website",
},
};

const services = [
  {
    slug: "pay-per-call",
    label: "Pay-Per-Call Marketing",
    desc: "Stop wasting budget on clicks. Only pay when a verified, high-intent prospect calls your business.",
    icon: "📞",
    tags: ["Verified Calls", "Zero Wasted Spend", "Real-Time"],
  },
  {
    slug: "affiliate-marketing",
    label: "Affiliate Marketing",
    desc: "Join our elite network. Access exclusive high-converting offers, earn industry-leading commissions weekly.",
    icon: "🤝",
    tags: ["5K+ Partners", "Weekly Payouts", "120+ Countries"],
  },
  {
    slug: "lead-generation",
    label: "Lead Generation",
    desc: "Exclusive, verified B2B and B2C leads delivered in real-time. 100% exclusive — never shared or recycled.",
    icon: "🎯",
    tags: ["100% Exclusive", "Real-Time Delivery", "Multi-Verified"],
  },
  {
    slug: "performance-advertising",
    label: "Performance Advertising",
    desc: "CPA, CPL and pay-per-call campaigns where your budget only moves when real results happen.",
    icon: "📈",
    tags: ["CPA/CPL/CPC", "AI Optimization", "Full-Funnel"],
  },
  {
    slug: "fraud-prevention",
    label: "Fraud Prevention",
    desc: "99.8% clean traffic guaranteed. Real-time bot detection, call validation, and conversion fraud protection.",
    icon: "🛡️",
    tags: ["99.8% Clean", "Real-Time", "Bot Detection"],
  },
  {
    slug: "partner-program",
    label: "Partner Program",
    desc: "Monetize your traffic with curated high-value offers, weekly payouts, and a dedicated partner manager.",
    icon: "💰",
    tags: ["Free to Join", "Weekly Pay", "Global Offers"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Hawks Media Services",
            url: `${SITE_URL}/services`,
            itemListElement: services.map((s, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: s.label,
              url: `${SITE_URL}/services/${s.slug}`,
            })),
          }),
        }}
      />

      <style>{`
        .svc-root {
          font-family: 'Outfit', sans-serif;
          background: linear-gradient(180deg, #060913 0%, #08101d 48%, #060a12 100%);
          color: white;
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          isolation: isolate;
        }

        .svc-bg-base {
          position: absolute;
          inset: 0;
          z-index: 0;
          background:
            radial-gradient(circle at 50% 12%, rgba(59,130,246,0.09) 0%, transparent 34%),
            linear-gradient(180deg, #060913 0%, #08101d 48%, #060a12 100%);
        }

        .svc-ambient-1,
        .svc-ambient-2 {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
        }

        .svc-ambient-1 {
          top: -180px;
          left: -120px;
          width: 560px;
          height: 560px;
          background:
            radial-gradient(circle, rgba(37,99,235,.46) 0%, rgba(30,64,175,.24) 42%, transparent 72%);
          filter: blur(90px);
        }

        .svc-ambient-2 {
          bottom: -160px;
          right: -90px;
          width: 460px;
          height: 460px;
          background:
            radial-gradient(circle, rgba(14,165,233,.34) 0%, rgba(3,105,161,.18) 45%, transparent 72%);
          filter: blur(90px);
        }

        .svc-grid-bg {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(96,165,250,.09) 1px, transparent 1px),
            linear-gradient(90deg, rgba(96,165,250,.09) 1px, transparent 1px),
            linear-gradient(rgba(96,165,250,.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(96,165,250,.03) 1px, transparent 1px);
          background-size: 56px 56px, 56px 56px, 14px 14px, 14px 14px;
        }

        .svc-content {
          position: relative;
          z-index: 2;
        }

        .svc-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #93c5fd;
          background: rgba(37,99,235,.14);
          border: 1px solid rgba(96,165,250,.24);
          padding: 6px 14px;
          border-radius: 100px;
          margin-bottom: 22px;
          box-shadow: 0 8px 24px rgba(15,23,42,.18);
          backdrop-filter: blur(12px);
        }

        .svc-badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 999px;
          background: #60a5fa;
          display: inline-block;
        }

        .svc-h1 {
          font-size: clamp(2.2rem, 5vw, 3.8rem);
          font-weight: 900;
          letter-spacing: -0.03em;
          line-height: 1.1;
          background: linear-gradient(135deg, #dbeafe 0%, #93c5fd 26%, #60a5fa 55%, #38bdf8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 20px;
        }

        .svc-intro {
          font-size: 18px;
          color: rgba(191,219,254,.78);
          line-height: 1.7;
          max-width: 600px;
          margin: 0 auto 36px;
          font-weight: 400;
        }

        .svc-card {
          background: rgba(15,23,42,.52);
          border: 1px solid rgba(96,165,250,.18);
          border-radius: 20px;
          padding: 28px;
          transition: all 0.25s ease;
          text-decoration: none;
          display: block;
          backdrop-filter: blur(12px);
          box-shadow: 0 10px 30px rgba(2,6,23,.16);
        }

        .svc-card:hover {
          background: rgba(37,99,235,.10);
          border-color: rgba(96,165,250,.28);
          transform: translateY(-3px);
          box-shadow: 0 12px 40px rgba(37,99,235,.18);
        }

        .svc-card-icon {
          font-size: 32px;
          margin-bottom: 14px;
        }

        .svc-card-label {
          font-size: 17px;
          font-weight: 700;
          color: white;
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .svc-card-desc {
          font-size: 14px;
          color: rgba(191,219,254,.64);
          line-height: 1.6;
          margin-bottom: 16px;
        }

        .svc-card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .svc-tag {
          font-size: 11px;
          font-weight: 600;
          color: #93c5fd;
          background: rgba(37,99,235,.12);
          border: 1px solid rgba(96,165,250,.20);
          padding: 3px 10px;
          border-radius: 100px;
        }

        .svc-cta-primary {
          background: linear-gradient(135deg, #1d4ed8 0%, #2563eb 50%, #3b82f6 100%);
          border: none;
          color: white;
          padding: 13px 28px;
          border-radius: 100px;
          font-weight: 700;
          font-size: 16px;
          cursor: pointer;
          font-family: 'Outfit', sans-serif;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          box-shadow: 0 4px 20px rgba(37,99,235,0.5);
        }

        .svc-cta-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(59,130,246,0.6);
        }

        .svc-outline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          border: 1px solid rgba(96,165,250,.24);
          color: #dbeafe;
          padding: 13px 28px;
          border-radius: 100px;
          font-weight: 600;
          font-size: 16px;
          transition: all 0.25s ease;
          background: rgba(15,23,42,.46);
          backdrop-filter: blur(12px);
        }

        .svc-outline:hover {
          background: rgba(37,99,235,.15);
          border-color: rgba(96,165,250,.5);
          color: #93c5fd;
          transform: translateY(-1px);
        }

        .stat-card {
          background: rgba(15,23,42,.52);
          border: 1px solid rgba(96,165,250,.18);
          border-radius: 16px;
          padding: 24px;
          text-align: center;
          backdrop-filter: blur(12px);
          box-shadow: 0 10px 30px rgba(2,6,23,.16);
        }

        .stat-val {
          font-size: 2.2rem;
          font-weight: 900;
          letter-spacing: -0.03em;
          background: linear-gradient(135deg, #dbeafe, #93c5fd, #38bdf8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .stat-label {
          font-size: 13px;
          color: rgba(191,219,254,.60);
          margin-top: 4px;
        }

        @media (max-width: 768px) {
          .svc-grid {
            grid-template-columns: 1fr !important;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>

      <main className="svc-root" id="main-content">
        <div className="svc-bg-base" aria-hidden="true" />
        <div className="svc-ambient-1" aria-hidden="true" />
        <div className="svc-ambient-2" aria-hidden="true" />
        <div className="svc-grid-bg" aria-hidden="true" />

        <div className="svc-content">
          <section
            style={{
              maxWidth: 1280,
              margin: "0 auto",
              padding: "120px 40px 60px",
              textAlign: "center",
            }}
          >
            <span className="svc-badge">
              <span className="svc-badge-dot" />
              OUR SERVICES
            </span>

            <h1 className="svc-h1">
              Performance Marketing
              <br />
              That Pays for Results
            </h1>

            <p className="svc-intro">
              From verified inbound calls to exclusive leads and elite affiliate
              offers — every Hawks Media service is built on one principle: you
              only pay when something real happens.
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: 14,
                marginBottom: 56,
              }}
            >
              <a
                href={`tel:${PHONE}`}
                className="svc-cta-primary"
                aria-label={`Call Hawks Media at ${PHONE_DISPLAY}`}
              >
                Call {PHONE_DISPLAY} <Phone size={16} aria-hidden="true" />
              </a>

              <Link href="/#Contact" className="svc-outline">
                Get a Quote <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </div>

            <div
              className="stats-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 16,
                maxWidth: 800,
                margin: "0 auto",
              }}
            >
              {[
                { value: "50M+", label: "Conversions / yr" },
                { value: "5K+", label: "Active Partners" },
                { value: "120+", label: "Countries" },
                { value: "4.9★", label: "Partner Rating" },
              ].map((s) => (
                <div key={s.label} className="stat-card">
                  <div className="stat-val">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </section>

          <section
            style={{
              maxWidth: 1280,
              margin: "0 auto",
              padding: "0 40px 80px",
            }}
          >
            <div
              className="svc-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 16,
              }}
            >
              {services.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="svc-card">
                  <div className="svc-card-icon">{s.icon}</div>

                  <div className="svc-card-label">
                    {s.label}
                    <ArrowUpRight
                      size={16}
                      style={{ color: "rgba(96,165,250,0.45)", flexShrink: 0 }}
                      aria-hidden="true"
                    />
                  </div>

                  <div className="svc-card-desc">{s.desc}</div>

                  <div className="svc-card-tags">
                    {s.tags.map((t) => (
                      <span key={t} className="svc-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
