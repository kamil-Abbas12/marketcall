// components/ServicePageLayout.tsx
// Shared layout for all Hawks Media service pages
// Dark theme matching hawksmediallc.com aesthetic

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import { PHONE, PHONE_DISPLAY, SITE_URL } from "@/lib/seo";

interface Benefit { icon: string; title: string; desc: string; }
interface Step { num: string; title: string; desc: string; }
interface FAQ { q: string; a: string; }
interface RelatedService { label: string; href: string; desc: string; icon: string; }

interface ServicePageLayoutProps {
  badge: string;
  h1: string;
  intro: string;
  heroStats: { value: string; label: string }[];
  benefits: Benefit[];
  steps: Step[];
  faqs: FAQ[];
  related: RelatedService[];
  slug: string;
  schema: object;
  ctaHeading: string;
  ctaSubtext: string;
  keywords: string[];
}

export default function ServicePageLayout({
  badge, h1, intro, heroStats, benefits, steps, faqs, related, slug, schema, ctaHeading, ctaSubtext,
}: ServicePageLayoutProps) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
          { "@type": "ListItem", position: 3, name: badge, item: `${SITE_URL}/services/${slug}` },
        ],
      }) }} />

      <style>{`
        .sp-root { font-family: 'Outfit', sans-serif; background: #060a12; color: white; min-height: 100vh; }

        /* BG layers */
        .sp-bg-grad { position: fixed; inset: 0; pointer-events: none; z-index: 0;
          background:
            radial-gradient(ellipse 80% 60% at 10% 0%, rgba(37,99,235,0.12) 0%, transparent 55%),
            radial-gradient(ellipse 60% 50% at 90% 20%, rgba(3,105,161,0.1) 0%, transparent 50%),
            linear-gradient(180deg, #07090f 0%, #060a12 100%);
        }
        .sp-grid-bg { position: fixed; inset: 0; pointer-events: none; z-index: 0;
          background-image:
            linear-gradient(rgba(96,165,250,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(96,165,250,0.03) 1px, transparent 1px);
          background-size: 48px 48px;
        }

        .sp-content { position: relative; z-index: 1; }

        /* Breadcrumb */
        .sp-breadcrumb { display: flex; align-items: center; gap: 8px; font-size: 13px; color: rgba(96,165,250,0.5); flex-wrap: wrap; }
        .sp-breadcrumb a { color: rgba(96,165,250,0.5); text-decoration: none; transition: color 0.2s; cursor: pointer; }
        .sp-breadcrumb a:hover { color: #93c5fd; }
        .sp-breadcrumb .bc-current { color: rgba(96,165,250,0.85); }

        /* Hero */
        .sp-badge { display: inline-block; font-size: 10px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase;
          color: rgba(96,165,250,0.9); background: rgba(37,99,235,0.12); border: 1px solid rgba(37,99,235,0.25);
          padding: 5px 14px; border-radius: 100px; margin-bottom: 22px;
        }
        .sp-h1 { font-size: clamp(2rem, 4.5vw, 3.2rem); font-weight: 900; letter-spacing: -0.03em; line-height: 1.1;
          color: white; margin-bottom: 20px;
          background: linear-gradient(135deg, #fff 40%, rgba(147,197,253,0.85) 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .sp-intro { font-size: 17px; color: rgba(147,197,253,0.65); line-height: 1.7; max-width: 560px; margin-bottom: 32px; font-weight: 400; }

        .sp-cta-primary { position: relative; overflow: hidden;
          background: linear-gradient(135deg, #1d4ed8 0%, #2563eb 50%, #3b82f6 100%);
          border: none; color: white; padding: 13px 28px; border-radius: 100px;
          font-weight: 700; font-size: 15px; cursor: pointer; font-family: 'Outfit', sans-serif;
          display: inline-flex; align-items: center; gap: 8px; text-decoration: none;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          box-shadow: 0 4px 20px rgba(37,99,235,0.5), inset 0 1px 0 rgba(255,255,255,0.18);
        }
        .sp-cta-primary::before { content: ''; position: absolute; inset: 0; background: linear-gradient(135deg, #2563eb, #3b82f6); opacity: 0; transition: opacity 0.25s; }
        .sp-cta-primary:hover::before { opacity: 1; }
        .sp-cta-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(59,130,246,0.6); }
        .sp-cta-primary span { position: relative; z-index: 1; }

        .sp-cta-outline { display: inline-flex; align-items: center; gap: 8px; text-decoration: none;
          border: 1px solid rgba(37,99,235,0.35); color: rgba(96,165,250,0.85);
          padding: 13px 28px; border-radius: 100px; font-weight: 600; font-size: 15px;
          transition: all 0.25s ease; cursor: pointer; font-family: 'Outfit', sans-serif;
          background: rgba(37,99,235,0.06);
        }
        .sp-cta-outline:hover { background: rgba(37,99,235,0.15); border-color: rgba(96,165,250,0.5); color: #93c5fd; transform: translateY(-1px); }

        /* Stat cards */
        .sp-stat-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(96,165,250,0.12); border-radius: 16px; padding: 24px; text-align: center; backdrop-filter: blur(8px); }
        .sp-stat-val { font-size: 2rem; font-weight: 900; letter-spacing: -0.03em;
          background: linear-gradient(135deg, #fff, #93c5fd); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .sp-stat-label { font-size: 12.5px; color: rgba(96,165,250,0.5); margin-top: 4px; font-weight: 400; }

        /* Section headers */
        .sp-section-label { font-size: 10px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: rgba(96,165,250,0.6); margin-bottom: 10px; }
        .sp-section-h2 { font-size: clamp(1.6rem, 3vw, 2.2rem); font-weight: 800; letter-spacing: -0.02em; color: white; margin-bottom: 12px; }
        .sp-section-sub { font-size: 16px; color: rgba(147,197,253,0.55); max-width: 560px; margin: 0 auto; line-height: 1.6; }

        /* Benefit cards */
        .sp-benefit-card { background: rgba(255,255,255,0.025); border: 1px solid rgba(96,165,250,0.1); border-radius: 20px; padding: 28px; transition: all 0.25s ease; }
        .sp-benefit-card:hover { background: rgba(37,99,235,0.08); border-color: rgba(96,165,250,0.22); transform: translateY(-2px); }
        .sp-benefit-icon { font-size: 28px; margin-bottom: 14px; }
        .sp-benefit-title { font-size: 16px; font-weight: 700; color: white; margin-bottom: 8px; }
        .sp-benefit-desc { font-size: 13.5px; color: rgba(147,197,253,0.55); line-height: 1.65; }

        /* Process steps */
        .sp-step { background: rgba(255,255,255,0.025); border: 1px solid rgba(96,165,250,0.1); border-radius: 20px; padding: 28px; text-align: center; position: relative; }
        .sp-step-num { width: 48px; height: 48px; border-radius: 50%; background: linear-gradient(135deg, #1d4ed8, #3b82f6); color: white; font-weight: 900; font-size: 18px; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; box-shadow: 0 4px 16px rgba(37,99,235,0.4); }
        .sp-step-title { font-size: 15px; font-weight: 700; color: white; margin-bottom: 8px; }
        .sp-step-desc { font-size: 13px; color: rgba(147,197,253,0.5); line-height: 1.6; }

        /* FAQ */
        .sp-faq details { background: rgba(255,255,255,0.025); border: 1px solid rgba(96,165,250,0.1); border-radius: 16px; overflow: hidden; transition: border-color 0.2s; }
        .sp-faq details:hover { border-color: rgba(96,165,250,0.22); }
        .sp-faq details[open] { border-color: rgba(37,99,235,0.35); background: rgba(37,99,235,0.06); }
        .sp-faq summary { display: flex; align-items: center; justify-content: space-between; padding: 20px 24px; font-size: 15px; font-weight: 600; color: rgba(186,230,253,0.9); cursor: pointer; list-style: none; gap: 16px; }
        .sp-faq summary::-webkit-details-marker { display: none; }
        .sp-faq summary .faq-toggle { color: rgba(96,165,250,0.6); font-size: 22px; line-height: 1; flex-shrink: 0; transition: transform 0.2s; }
        .sp-faq details[open] summary .faq-toggle { transform: rotate(45deg); }
        .sp-faq .faq-body { padding: 0 24px 20px; font-size: 14px; color: rgba(147,197,253,0.6); line-height: 1.7; border-top: 1px solid rgba(37,99,235,0.12); padding-top: 16px; }

        /* CTA band */
        .sp-cta-band { position: relative; border-radius: 24px; background: rgba(29,78,216,0.1); border: 1px solid rgba(96,165,250,0.18); overflow: hidden; padding: 64px 48px; text-align: center; }
        .sp-cta-band::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse 70% 80% at 50% 50%, rgba(29,78,216,0.18) 0%, transparent 65%); pointer-events: none; }
        .sp-cta-band::after { content: ''; position: absolute; top: 0; left: 10%; right: 10%; height: 1px; background: linear-gradient(90deg, transparent, rgba(96,165,250,0.5), transparent); }
        .sp-cta-band-h2 { font-size: clamp(1.5rem, 3vw, 2.2rem); font-weight: 900; letter-spacing: -0.02em; color: white; margin-bottom: 12px; position: relative; z-index: 1; }
        .sp-cta-band-sub { font-size: 16px; color: rgba(147,197,253,0.6); margin-bottom: 32px; position: relative; z-index: 1; max-width: 480px; margin-left: auto; margin-right: auto; }

        /* Related services */
        .sp-related-link { display: flex; align-items: center; justify-content: space-between; gap: 12px; background: rgba(255,255,255,0.025); border: 1px solid rgba(96,165,250,0.1); border-radius: 16px; padding: 16px 20px; text-decoration: none; transition: all 0.25s ease; cursor: pointer; }
        .sp-related-link:hover { background: rgba(37,99,235,0.1); border-color: rgba(96,165,250,0.25); transform: translateY(-1px); }
        .sp-related-label { font-size: 14px; font-weight: 600; color: rgba(186,230,253,0.85); display: flex; align-items: center; gap: 8px; }
        .sp-related-desc { font-size: 12px; color: rgba(96,165,250,0.45); margin-top: 2px; }

        @media (max-width: 1024px) {
          .sp-hero-grid { grid-template-columns: 1fr !important; }
          .sp-stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .sp-benefits-grid { grid-template-columns: 1fr !important; }
          .sp-steps-grid { grid-template-columns: 1fr !important; }
          .sp-related-grid { grid-template-columns: 1fr !important; }
          .sp-cta-band { padding: 40px 24px; }
        }
      `}</style>

      <main className="sp-root" id="main-content">
        <div className="sp-bg-grad" aria-hidden="true" />
        <div className="sp-grid-bg" aria-hidden="true" />

        <div className="sp-content">
          {/* ── BREADCRUMB ─────────────────────── */}
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "100px 40px 0" }}>
            <nav className="sp-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">›</span>
              <Link href="/services">Services</Link>
              <span aria-hidden="true">›</span>
              <span className="bc-current">{badge}</span>
            </nav>
          </div>

          {/* ── HERO ───────────────────────────── */}
          <section style={{ maxWidth: 1280, margin: "0 auto", padding: "40px 40px 80px" }} aria-labelledby="service-h1">
            <div className="sp-hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
              <div>
                <span className="sp-badge">{badge}</span>
                <h1 id="service-h1" className="sp-h1">{h1}</h1>
                <p className="sp-intro">{intro}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                  <a href={`tel:${PHONE}`} className="sp-cta-primary" aria-label={`Call Hawks Media at ${PHONE_DISPLAY}`}>
                    <span>Call {PHONE_DISPLAY}</span>
                    <Phone size={16} style={{ position: "relative", zIndex: 1 }} aria-hidden="true" />
                  </a>
                  <Link href="/#Contact" className="sp-cta-outline">
                    Get a Quote
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </div>

              <div className="sp-stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
                {heroStats.map((s) => (
                  <div key={s.label} className="sp-stat-card">
                    <div className="sp-stat-val">{s.value}</div>
                    <div className="sp-stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── BENEFITS ───────────────────────── */}
          <section style={{ background: "rgba(255,255,255,0.015)", borderTop: "1px solid rgba(96,165,250,0.08)", borderBottom: "1px solid rgba(96,165,250,0.08)", padding: "80px 0" }} aria-labelledby="benefits-h2">
            <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
              <div style={{ textAlign: "center", marginBottom: 52 }}>
                <div className="sp-section-label">Why Hawks Media</div>
                <h2 id="benefits-h2" className="sp-section-h2">Built for Performance, Designed for Scale</h2>
                <p className="sp-section-sub">Everything you need to grow — verified leads, elite tech, and a team that's obsessed with your results.</p>
              </div>
              <div className="sp-benefits-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
                {benefits.map((b) => (
                  <div key={b.title} className="sp-benefit-card">
                    <div className="sp-benefit-icon">{b.icon}</div>
                    <div className="sp-benefit-title">{b.title}</div>
                    <div className="sp-benefit-desc">{b.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── PROCESS ────────────────────────── */}
          <section style={{ padding: "80px 0" }} aria-labelledby="process-h2">
            <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
              <div style={{ textAlign: "center", marginBottom: 52 }}>
                <div className="sp-section-label">How It Works</div>
                <h2 id="process-h2" className="sp-section-h2">Simple, Fast, Effective</h2>
                <p className="sp-section-sub">From signup to results — our process is designed to get you moving fast.</p>
              </div>
              <div className="sp-steps-grid" style={{ display: "grid", gridTemplateColumns: `repeat(${steps.length}, 1fr)`, gap: 16 }}>
                {steps.map((step) => (
                  <div key={step.num} className="sp-step">
                    <div className="sp-step-num">{step.num}</div>
                    <div className="sp-step-title">{step.title}</div>
                    <div className="sp-step-desc">{step.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── FAQ ────────────────────────────── */}
          <section style={{ background: "rgba(255,255,255,0.015)", borderTop: "1px solid rgba(96,165,250,0.08)", borderBottom: "1px solid rgba(96,165,250,0.08)", padding: "80px 0" }} aria-labelledby="faq-h2">
            <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 40px" }}>
              <div style={{ textAlign: "center", marginBottom: 48 }}>
                <div className="sp-section-label">FAQ</div>
                <h2 id="faq-h2" className="sp-section-h2">Common Questions</h2>
              </div>
              <div className="sp-faq" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {faqs.map((f, i) => (
                  <details key={i}>
                    <summary>
                      {f.q}
                      <span className="faq-toggle" aria-hidden="true">+</span>
                    </summary>
                    <div className="faq-body">{f.a}</div>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* ── CTA BAND ───────────────────────── */}
          <section style={{ padding: "80px 40px" }}>
            <div style={{ maxWidth: 1280, margin: "0 auto" }}>
              <div className="sp-cta-band">
                <h2 className="sp-cta-band-h2">{ctaHeading}</h2>
                <p className="sp-cta-band-sub">{ctaSubtext}</p>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 14, position: "relative", zIndex: 1 }}>
                  <a href={`tel:${PHONE}`} className="sp-cta-primary" aria-label={`Call Hawks Media at ${PHONE_DISPLAY}`}>
                    <span>Call {PHONE_DISPLAY}</span>
                    <Phone size={16} style={{ position: "relative", zIndex: 1 }} aria-hidden="true" />
                  </a>
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@hawksmediallc.com" className="sp-cta-outline" aria-label="Get a quote via email">
                    Get a Quote
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* ── RELATED SERVICES ───────────────── */}
          <section style={{ padding: "0 40px 80px" }} aria-labelledby="related-h2">
            <div style={{ maxWidth: 1280, margin: "0 auto" }}>
              <h2 id="related-h2" style={{ fontSize: "1.35rem", fontWeight: 700, color: "white", marginBottom: 20 }}>Explore More Services</h2>
              <div className="sp-related-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
                {related.map((r) => (
                  <Link key={r.href} href={r.href} className="sp-related-link">
                    <div>
                      <div className="sp-related-label">
                        <span>{r.icon}</span>
                        {r.label}
                      </div>
                      <div className="sp-related-desc">{r.desc}</div>
                    </div>
                    <ArrowUpRight size={14} style={{ color: "rgba(96,165,250,0.4)", flexShrink: 0 }} aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}