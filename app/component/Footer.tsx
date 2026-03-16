"use client";

import React from "react";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Phone, Mail, ArrowUpRight } from "lucide-react";

const sections = ["Services", "Results", "Contact"];

export default function Footer() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap');

        .footer-root {
          font-family: 'Outfit', sans-serif;
          position: relative;
          overflow: hidden;
          background: #060312;
        }

        /* ── Background layers ── */
        .footer-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 70% 50% at 15% 100%, #7c1fff22 0%, transparent 60%),
            radial-gradient(ellipse 50% 60% at 85% 80%, #c026d322 0%, transparent 55%),
            linear-gradient(180deg, #080415 0%, #060312 100%);
        }
        .footer-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(167,139,250,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(167,139,250,0.035) 1px, transparent 1px);
          background-size: 48px 48px;
        }
        .footer-noise {
          position: absolute;
          inset: 0;
          opacity: 0.025;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          pointer-events: none;
        }
        /* Top fade from hero/page bg */
        .footer-fade-top {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, rgba(192,132,252,0.45) 30%, rgba(232,121,249,0.7) 50%, rgba(192,132,252,0.45) 70%, transparent 100%);
        }

        /* ── CTA band ── */
        .footer-cta-band {
          position: relative;
          margin: 0 0 56px;
          padding: 44px 48px;
          border-radius: 24px;
          background: rgba(124, 58, 237, 0.1);
          border: 1px solid rgba(167,139,250,0.2);
          backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
          overflow: hidden;
        }
        .footer-cta-band::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 60% 80% at 0% 50%, rgba(124,58,237,0.15) 0%, transparent 60%);
          pointer-events: none;
        }
        .footer-cta-band::after {
          content: '';
          position: absolute;
          top: 0; left: 10%; right: 10%; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(192,132,252,0.5), transparent);
        }
        .cta-band-title {
          font-size: clamp(1.3rem, 2.5vw, 1.75rem);
          font-weight: 800;
          color: white;
          letter-spacing: -0.02em;
          line-height: 1.2;
        }
        .cta-band-sub {
          font-size: 15px;
          color: rgba(200,185,255,0.65);
          margin-top: 6px;
          font-weight: 400;
        }
        .footer-cta-btn {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #c026d3 100%);
          border: none;
          color: white;
          padding: 13px 28px;
          border-radius: 100px;
          font-weight: 700;
          font-size: 15px;
          cursor: pointer;
          font-family: 'Outfit', sans-serif;
          display: flex;
          align-items: center;
          gap: 8px;
          white-space: nowrap;
          flex-shrink: 0;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          box-shadow: 0 4px 20px rgba(124,58,237,0.5), inset 0 1px 0 rgba(255,255,255,0.18);
        }
        .footer-cta-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #9333ea, #c026d3);
          opacity: 0;
          transition: opacity 0.25s;
        }
        .footer-cta-btn:hover::before { opacity: 1; }
        .footer-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(168,85,247,0.65), inset 0 1px 0 rgba(255,255,255,0.18);
        }
        .footer-cta-btn span { position: relative; z-index: 1; }

        /* ── Divider ── */
        .footer-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(167,139,250,0.18), rgba(167,139,250,0.18), transparent);
          margin-bottom: 52px;
        }

        /* ── Logo desc ── */
        .footer-desc {
          font-size: 14.5px;
          color: rgba(200,185,255,0.55);
          line-height: 1.75;
          font-weight: 400;
          max-width: 340px;
        }

        /* ── Contact links ── */
        .footer-contact-link {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          color: rgba(200,185,255,0.65);
          text-decoration: none;
          transition: color 0.2s ease;
          font-weight: 400;
        }
        .footer-contact-link:hover { color: rgba(240,171,252,1); }
        .footer-contact-icon {
          width: 30px; height: 30px;
          border-radius: 8px;
          background: rgba(124,58,237,0.15);
          border: 1px solid rgba(167,139,250,0.15);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          transition: background 0.2s, border-color 0.2s;
        }
        .footer-contact-link:hover .footer-contact-icon {
          background: rgba(124,58,237,0.3);
          border-color: rgba(167,139,250,0.35);
        }

        /* ── Column headings ── */
        .footer-col-head {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(167,139,250,0.7);
          margin-bottom: 20px;
        }

        /* ── Nav links ── */
        .footer-nav-link {
          background: none;
          border: none;
          cursor: pointer;
          font-family: 'Outfit', sans-serif;
          font-size: 14.5px;
          font-weight: 500;
          color: rgba(200,185,255,0.6);
          text-align: left;
          padding: 0;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: color 0.2s ease, gap 0.2s ease;
        }
        .footer-nav-link .link-arrow {
          opacity: 0;
          transform: translateX(-4px);
          transition: opacity 0.2s, transform 0.2s;
        }
        .footer-nav-link:hover {
          color: rgba(240,171,252,1);
          gap: 8px;
        }
        .footer-nav-link:hover .link-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        /* ── Social icons ── */
        .footer-social {
          width: 40px; height: 40px;
          border-radius: 12px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(167,139,250,0.15);
          display: flex; align-items: center; justify-content: center;
          color: rgba(200,185,255,0.7);
          text-decoration: none;
          transition: all 0.25s ease;
        }
        .footer-social:hover {
          transform: translateY(-3px);
        }
        .footer-social.fb:hover  { background: rgba(59,130,246,0.25);  border-color: rgba(59,130,246,0.4);  color: #93c5fd; box-shadow: 0 4px 16px rgba(59,130,246,0.25); }
        .footer-social.ig:hover  { background: rgba(236,72,153,0.25);  border-color: rgba(236,72,153,0.4);  color: #f9a8d4; box-shadow: 0 4px 16px rgba(236,72,153,0.25); }
        .footer-social.lin:hover { background: rgba(14,165,233,0.25);  border-color: rgba(14,165,233,0.4);  color: #7dd3fc; box-shadow: 0 4px 16px rgba(14,165,233,0.25); }

        /* ── Bottom bar ── */
        .footer-bottom {
          padding-top: 28px;
          border-top: 1px solid rgba(167,139,250,0.1);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }
        .footer-bottom-text {
          font-size: 13px;
          color: rgba(167,139,250,0.4);
          font-weight: 400;
        }
        .footer-bottom-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          color: rgba(167,139,250,0.4);
          padding: 4px 12px;
          border-radius: 100px;
          border: 1px solid rgba(167,139,250,0.1);
          background: rgba(124,58,237,0.06);
        }
        .badge-dot-sm {
          width: 6px; height: 6px;
          background: #a855f7;
          border-radius: 50%;
          box-shadow: 0 0 6px #a855f7;
          animation: pulseSmall 2.5s ease-in-out infinite;
        }
        @keyframes pulseSmall {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }
      `}</style>

      <footer className="footer-root">
        <div className="footer-bg" />
        <div className="footer-grid" />
        <div className="footer-noise" />
        <div className="footer-fade-top" />

        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "72px 40px 48px", position: "relative", zIndex: 10 }}>

          {/* CTA Band */}
          <div className="footer-cta-band">
            <div>
              <div className="cta-band-title">Ready to grow your roofing business?</div>
              <div className="cta-band-sub">Get exclusive pay-per-call leads delivered to you today.</div>
            </div>
            <button className="footer-cta-btn">
              <span>Get started</span>
              <ArrowUpRight size={16} style={{ position: "relative", zIndex: 1 }} />
            </button>
          </div>

          {/* Divider */}
          <div className="footer-divider" />

          {/* Main columns */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto auto", gap: "64px", alignItems: "start" }}
               className="flex-wrap">

            {/* Brand col */}
            <div style={{ minWidth: 120 }}>
   <Image
  src="/image.jpg"
  alt="Hawks Media LLC"
  width={120}   // controls intrinsic size
  height={70}
  style={{ objectFit: 'cover', borderRadius: '8px', marginBottom: '20px' }} // removed width/height here
/>
              <p className="footer-desc">
                Hawks Media LLC helps local roofers grow faster with exclusive
                pay-per-call leads — connecting you with homeowners actively
                searching for roofing services in your area.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 24 }}>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=info@hawksmediallc.com"
                  className="footer-contact-link"
                >
                  <span className="footer-contact-icon">
                    <Mail size={14} />
                  </span>
                  info@hawksmediallc.com
                </a>
                <a href="tel:+16784628013" className="footer-contact-link">
                  <span className="footer-contact-icon">
                    <Phone size={14} />
                  </span>
                  +1 678 462 8013
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <div className="footer-col-head">Quick Links</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {sections.map((sec) => (
                  <button key={sec} className="footer-nav-link" onClick={() => scrollToSection(sec)}>
                    {sec}
                    <ArrowUpRight size={13} className="link-arrow" />
                  </button>
                ))}
              </div>
            </div>

            {/* Social */}
            <div>
              <div className="footer-col-head">Follow Us</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <a href="#" className="footer-social fb" aria-label="Facebook">
                  <Facebook size={17} />
                </a>
                <a href="#" className="footer-social ig" aria-label="Instagram">
                  <Instagram size={17} />
                </a>
                <a href="#" className="footer-social lin" aria-label="LinkedIn">
                  <Linkedin size={17} />
                </a>
              </div>
            </div>

          </div>

          {/* Bottom bar */}
          <div className="footer-bottom" style={{ marginTop: 52 }}>
            <span className="footer-bottom-text">
              © {new Date().getFullYear()} Hawks Media LLC — All rights reserved.
            </span>
            <div className="footer-bottom-badge">
              <div className="badge-dot-sm" />
              All systems operational
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}