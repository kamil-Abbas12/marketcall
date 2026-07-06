"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Phone, Mail, ArrowUpRight } from "lucide-react";

const scrollSections = ["Services", "Results", "Contact"];

const serviceLinks = [
  { label: "Pay-Per-Call Marketing", href: "/services/pay-per-call" },
  { label: "Affiliate Marketing", href: "/services/affiliate-marketing" },
  { label: "Lead Generation", href: "/services/lead-generation" },
  { label: "Performance Advertising", href: "/services/performance-advertising" },
  { label: "Fraud Prevention", href: "/services/fraud-prevention" },
  { label: "Partner Program", href: "/services/partner-program" },
];

const GMAIL_COMPOSE_URL = "https://mail.google.com/mail/?view=cm&fs=1&to=info@hawksmediallc.com";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        .footer-root { font-family: 'Outfit', sans-serif; position: relative; overflow: hidden; background: #060a12; }
        .footer-bg { position: absolute; inset: 0; background:
          radial-gradient(ellipse 70% 50% at 15% 100%, #1d4ed822 0%, transparent 60%),
          radial-gradient(ellipse 50% 60% at 85% 80%, #0369a122 0%, transparent 55%),
          linear-gradient(180deg, #07090f 0%, #060a12 100%);
        }
        .footer-grid { position: absolute; inset: 0; background-image:
          linear-gradient(rgba(96,165,250,0.035) 1px, transparent 1px),
          linear-gradient(90deg, rgba(96,165,250,0.035) 1px, transparent 1px);
          background-size: 48px 48px;
        }
        .footer-noise { position: absolute; inset: 0; opacity: 0.025; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E"); pointer-events: none; }
        .footer-fade-top { position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent 0%, rgba(96,165,250,0.45) 30%, rgba(147,197,253,0.7) 50%, rgba(96,165,250,0.45) 70%, transparent 100%); }

        .footer-cta-band { position: relative; margin: 0 0 56px; padding: 44px 48px; border-radius: 24px; background: rgba(29,78,216,0.1); border: 1px solid rgba(96,165,250,0.2); backdrop-filter: blur(12px); display: flex; align-items: center; justify-content: space-between; gap: 24px; flex-wrap: wrap; overflow: hidden; }
        .footer-cta-band::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse 60% 80% at 0% 50%, rgba(29,78,216,0.15) 0%, transparent 60%); pointer-events: none; }
        .footer-cta-band::after { content: ''; position: absolute; top: 0; left: 10%; right: 10%; height: 1px; background: linear-gradient(90deg, transparent, rgba(96,165,250,0.5), transparent); }
        .cta-band-title { font-size: clamp(1.3rem, 2.5vw, 1.75rem); font-weight: 800; color: white; letter-spacing: -0.02em; line-height: 1.2; }
        .cta-band-sub { font-size: 15px; color: rgba(147,197,253,0.65); margin-top: 6px; font-weight: 400; }
        .footer-cta-btn { position: relative; overflow: hidden; background: linear-gradient(135deg, #1d4ed8 0%, #2563eb 50%, #3b82f6 100%); border: none; color: white; padding: 13px 28px; border-radius: 100px; font-weight: 700; font-size: 15px; cursor: pointer; font-family: 'Outfit', sans-serif; display: flex; align-items: center; gap: 8px; white-space: nowrap; flex-shrink: 0; transition: transform 0.25s ease, box-shadow 0.25s ease; box-shadow: 0 4px 20px rgba(37,99,235,0.5), inset 0 1px 0 rgba(255,255,255,0.18); text-decoration: none; }
        .footer-cta-btn::before { content: ''; position: absolute; inset: 0; background: linear-gradient(135deg, #2563eb, #3b82f6); opacity: 0; transition: opacity 0.25s; }
        .footer-cta-btn:hover::before { opacity: 1; }
        .footer-cta-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(59,130,246,0.65), inset 0 1px 0 rgba(255,255,255,0.18); }
        .footer-cta-btn span { position: relative; z-index: 1; }

        .footer-divider { height: 1px; background: linear-gradient(90deg, transparent, rgba(96,165,250,0.18), rgba(96,165,250,0.18), transparent); margin-bottom: 52px; }
        .footer-desc { font-size: 14.5px; color: rgba(147,197,253,0.55); line-height: 1.75; font-weight: 400; max-width: 300px; }
        .footer-contact-link { display: flex; align-items: center; gap: 10px; font-size: 14px; color: rgba(147,197,253,0.65); text-decoration: none; transition: color 0.2s ease; font-weight: 400; }
        .footer-contact-link:hover { color: rgba(186,230,253,1); }
        .footer-contact-icon { width: 30px; height: 30px; border-radius: 8px; background: rgba(29,78,216,0.15); border: 1px solid rgba(96,165,250,0.15); display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: background 0.2s, border-color 0.2s; }
        .footer-contact-link:hover .footer-contact-icon { background: rgba(29,78,216,0.3); border-color: rgba(96,165,250,0.35); }

        .footer-col-head { font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(96,165,250,0.7); margin-bottom: 20px; }
        .footer-nav-link { background: none; border: none; cursor: pointer; font-family: 'Outfit', sans-serif; font-size: 14.5px; font-weight: 500; color: rgba(147,197,253,0.6); text-align: left; padding: 0; display: flex; align-items: center; gap: 6px; transition: color 0.2s ease, gap 0.2s ease; }
        .footer-nav-link .link-arrow { opacity: 0; transform: translateX(-4px); transition: opacity 0.2s, transform 0.2s; }
        .footer-nav-link:hover { color: rgba(186,230,253,1); gap: 8px; }
        .footer-nav-link:hover .link-arrow { opacity: 1; transform: translateX(0); }

        .footer-service-link { font-size: 14px; font-weight: 500; color: rgba(147,197,253,0.6); text-decoration: none; display: flex; align-items: center; gap: 6px; transition: color 0.2s ease, gap 0.2s ease; cursor: pointer; }
        .footer-service-link .link-arrow { opacity: 0; transform: translateX(-4px); transition: opacity 0.2s, transform 0.2s; }
        .footer-service-link:hover { color: rgba(186,230,253,1); gap: 8px; }
        .footer-service-link:hover .link-arrow { opacity: 1; transform: translateX(0); }

        .footer-social { width: 40px; height: 40px; border-radius: 12px; background: rgba(255,255,255,0.05); border: 1px solid rgba(96,165,250,0.15); display: flex; align-items: center; justify-content: center; color: rgba(147,197,253,0.7); text-decoration: none; transition: all 0.25s ease; cursor: pointer; }
        .footer-social:hover { transform: translateY(-3px); }
        .footer-social.fb:hover { background: rgba(59,130,246,0.25); border-color: rgba(59,130,246,0.4); color: #93c5fd; box-shadow: 0 4px 16px rgba(59,130,246,0.25); }
        .footer-social.ig:hover { background: rgba(236,72,153,0.25); border-color: rgba(236,72,153,0.4); color: #f9a8d4; box-shadow: 0 4px 16px rgba(236,72,153,0.25); }
        .footer-social.lin:hover { background: rgba(14,165,233,0.25); border-color: rgba(14,165,233,0.4); color: #7dd3fc; box-shadow: 0 4px 16px rgba(14,165,233,0.25); }

        .footer-bottom { padding-top: 28px; border-top: 1px solid rgba(96,165,250,0.1); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; }
        .footer-bottom-text { font-size: 13px; color: rgba(96,165,250,0.4); font-weight: 400; }
        .footer-bottom-badge { display: flex; align-items: center; gap: 6px; font-size: 12px; color: rgba(96,165,250,0.4); padding: 4px 12px; border-radius: 100px; border: 1px solid rgba(96,165,250,0.1); background: rgba(29,78,216,0.06); }
        .badge-dot-sm { width: 6px; height: 6px; background: #3b82f6; border-radius: 50%; box-shadow: 0 0 6px #3b82f6; animation: pulseSmall 2.5s ease-in-out infinite; }
        @keyframes pulseSmall { 0%, 100% { opacity: 0.7; transform: scale(1); } 50% { opacity: 1; transform: scale(1.3); } }

        @media (max-width: 1024px) {
          .footer-cta-band { padding: 32px 24px; }
          .footer-main-grid { grid-template-columns: 1fr 1fr !important; gap: 40px !important; }
        }
        @media (max-width: 768px) {
          .footer-cta-band { flex-direction: column; align-items: flex-start; gap: 16px; padding: 24px 18px; }
          .footer-cta-btn { width: 100%; justify-content: center; }
          .footer-main-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .footer-desc { max-width: 100%; }
          .footer-bottom { flex-direction: column; align-items: flex-start; gap: 10px; }
        }
      `}</style>

      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Hawks Media LLC",
            url: "https://hawksmediallc.com",
            logo: "https://hawksmediallc.com/new.png",
            telephone: "+17864850671",
            email: "info@hawksmediallc.com",
            sameAs: ["https://www.instagram.com/_hawksmedia_/", "https://www.linkedin.com/company/hawks-media-llc/"],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Performance Marketing Services",
              itemListElement: serviceLinks.map((s) => ({
                "@type": "Offer",
                itemOffered: { "@type": "Service", name: s.label, url: `https://hawksmediallc.com${s.href}` },
              })),
            },
          }),
        }}
      />

      <footer className="footer-root">
        <div className="footer-bg" aria-hidden="true" />
        <div className="footer-grid" aria-hidden="true" />
        <div className="footer-noise" aria-hidden="true" />
        <div className="footer-fade-top" aria-hidden="true" />

        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "72px 40px 48px", position: "relative", zIndex: 10 }}>

          {/* CTA Band */}
          <div className="footer-cta-band">
            <div>
              <div className="cta-band-title">Ready to grow your marketing business?</div>
              <div className="cta-band-sub">Get exclusive pay-per-call leads delivered to you today.</div>
            </div>
            <a
              href={GMAIL_COMPOSE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-cta-btn"
              aria-label="Get started with Hawks Media"
            >
              <span>Get started</span>
              <ArrowUpRight size={16} style={{ position: "relative", zIndex: 1 }} aria-hidden="true" />
            </a>
          </div>

          {/* Divider */}
          <div className="footer-divider" aria-hidden="true" />

          {/* Main columns */}
          <div
            className="footer-main-grid"
            style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr auto", gap: "56px", alignItems: "start" }}
          >
            {/* Brand col */}
            <div style={{ minWidth: 120 }}>
              <Image
                src="/logo.png"
                alt="Hawks Media LLC"
                width={120}
                height={70}
                style={{ objectFit: "cover", borderRadius: "8px", marginBottom: "20px" }}
              />
              <p className="footer-desc">
                Hawks Media LLC helps businesses grow faster with exclusive
                pay-per-call leads — connecting you with high-intent prospects actively
                searching for your services across 120+ countries.
              </p>
              <address style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 24, fontStyle: "normal" }}>
                <a href="mailto:info@hawksmediallc.com" className="footer-contact-link">
                  <span className="footer-contact-icon" aria-hidden="true"><Mail size={14} /></span>
                  info@hawksmediallc.com
                </a>
                <a href="mailto:Billing@hawksmediallc.com" className="footer-contact-link">
                  <span className="footer-contact-icon" aria-hidden="true"><Mail size={14} /></span>
                  Billing@hawksmediallc.com
                </a>
                <a href="mailto:hr@hawksmediallc.com" className="footer-contact-link">
                  <span className="footer-contact-icon" aria-hidden="true"><Mail size={14} /></span>
                  hr@hawksmediallc.com
                </a>
                <a href="tel:+17864850671" className="footer-contact-link">
                  <span className="footer-contact-icon" aria-hidden="true"><Phone size={14} /></span>
                  +1 786 485 0671
                </a>
              </address>
            </div>

            {/* Services — SEO internal links */}
            <nav aria-label="Footer services links">
              <div className="footer-col-head">Our Services</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {serviceLinks.map((s) => (
                  <Link key={s.href} href={s.href} className="footer-service-link">
                    {s.label}
                    <ArrowUpRight size={11} className="link-arrow" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </nav>

            {/* Quick Links */}
            <nav aria-label="Footer quick links">
              <div className="footer-col-head">Quick Links</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {scrollSections.map((sec) => (
                  <button key={sec} className="footer-nav-link" onClick={() => scrollToSection(sec)}>
                    {sec}
                    <ArrowUpRight size={13} className="link-arrow" aria-hidden="true" />
                  </button>
                ))}
                {/* After the scrollSections.map(...) block, alongside Privacy Policy */}
                <Link href="/cellphone" className="footer-service-link">
                  Cellphone
                  <ArrowUpRight size={11} className="link-arrow" aria-hidden="true" />
                </Link>
                <Link href="/privacy-policy" className="footer-service-link">
                  Privacy Policy
                  <ArrowUpRight size={11} className="link-arrow" aria-hidden="true" />
                </Link>
              </div>
            </nav>

            {/* Social */}
            <div>
              <div className="footer-col-head">Follow Us</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }} role="list" aria-label="Social media links">
                {/* <a href="" className="footer-social fb" aria-label="Follow Hawks Media on Facebook" role="listitem">
                  <Facebook size={17} aria-hidden="true" />
                </a> */}
                <a href="https://www.instagram.com/_hawksmedia_/" className="footer-social ig" aria-label="Follow Hawks Media on Instagram" role="listitem" target="_blank" rel="noopener noreferrer">
                  <Instagram size={17} aria-hidden="true" />
                </a>
                <a href="https://www.linkedin.com/company/hawks-media-llc/" className="footer-social lin" aria-label="Follow Hawks Media on LinkedIn" role="listitem" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={17} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="footer-bottom" style={{ marginTop: 52 }}>
            <span className="footer-bottom-text">
              © {new Date().getFullYear()} Hawks Media LLC — All rights reserved.
            </span>
            <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>

              <Link href="/privacy-policy" style={{ fontSize: 13, color: "rgba(96,165,250,0.4)", textDecoration: "none" }}>
                Privacy Policy
              </Link>

              <div className="footer-bottom-badge" aria-label="System status: operational">
                <div className="badge-dot-sm" aria-hidden="true" />
                All systems operational
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
