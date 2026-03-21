"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const sections = ["Product", "Help Center", "Industries", "Company", "Blog"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap');

        .nav-wrapper {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 50;
          font-family: 'Outfit', sans-serif;
          transition: padding 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          padding: 18px 24px 0;
        }
        .nav-wrapper.scrolled {
          padding: 0;
        }

        .nav-bar {
          max-width: 1400px;
          margin: 0 auto;
          height: 68px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 24px 0 28px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

          /* floating pill */
          background: rgba(10, 4, 28, 0.55);
          backdrop-filter: blur(20px) saturate(160%);
          -webkit-backdrop-filter: blur(20px) saturate(160%);
          border: 1px solid rgba(37, 99, 235, 0.18); /* blue border */
          border-radius: 20px;
          box-shadow:
            0 4px 24px rgba(0,0,0,0.4),
            inset 0 1px 0 rgba(255,255,255,0.06);
          animation: navDrop 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) both;
        }
        .nav-wrapper.scrolled .nav-bar {
          border-radius: 0;
          border-left: none;
          border-right: none;
          border-top: none;
          max-width: 100%;
          background: rgba(8, 4, 21, 0.82);
          box-shadow: 0 1px 0 rgba(37,99,235,0.12), 0 8px 32px rgba(0,0,0,0.5);
        }

        @keyframes navDrop {
          from { opacity: 0; transform: translateY(-20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Top shimmer border on scroll ── */
        .nav-bar::before {
          content: '';
          position: absolute;
          top: 0; left: 10%; right: 10%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(37,99,235,0.6), rgba(59,130,246,0.8), rgba(37,99,235,0.6), transparent);
          opacity: 0;
          transition: opacity 0.4s ease;
          border-radius: 1px;
        }
        .nav-wrapper.scrolled .nav-bar::before {
          opacity: 1;
        }

        /* ── Nav links ── */
        .nav-link {
          position: relative;
          font-size: 15px;
          font-weight: 500;
          color: rgba(210, 195, 255, 0.75);
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px 0;
          transition: color 0.2s ease;
          letter-spacing: 0.01em;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0;
          width: 0; height: 1.5px;
          background: linear-gradient(90deg, #2563eb, #3b82f6); /* blue underline */
          border-radius: 2px;
          transition: width 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .nav-link:hover {
          color: rgba(240, 230, 255, 1);
        }
        .nav-link:hover::after {
          width: 100%;
        }

        /* ── Call Now link ── */
        .nav-login {
          font-size: 15px;
          font-weight: 500;
          color: rgba(37,99,235,0.9); /* blue */
          background: none;
          border: none;
          cursor: pointer;
          transition: color 0.2s ease;
          letter-spacing: 0.01em;
        }
        .nav-login:hover {
          color: #3b82f6;
        }

        /* ── CTA button ── */
        .nav-cta {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #2563eb 0%, #3b82f6 50%, #60a5fa 100%);
          border: none;
          color: white;
          padding: 10px 22px;
          border-radius: 100px;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          font-family: 'Outfit', sans-serif;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          box-shadow: 0 3px 16px rgba(37,99,235,0.5), inset 0 1px 0 rgba(255,255,255,0.18);
          white-space: nowrap;
          letter-spacing: 0.01em;
        }
        .nav-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%);
          opacity: 0;
          transition: opacity 0.25s ease;
        }
        .nav-cta:hover::before { opacity: 1; }
        .nav-cta:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 24px rgba(59,130,246,0.65), inset 0 1px 0 rgba(255,255,255,0.18);
        }
        .nav-cta:active { transform: translateY(0); }
        .nav-cta span,
        .nav-cta .cta-arrow { position: relative; z-index: 1; }
        .nav-cta .cta-arrow {
          transition: transform 0.25s ease;
          display: inline-block;
        }
        .nav-cta:hover .cta-arrow { transform: translateX(3px); }

        /* ── Hamburger ── */
        .nav-hamburger {
          background: none;
          border: none;
          cursor: pointer;
          color: rgba(210, 195, 255, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6px;
          border-radius: 8px;
          transition: color 0.2s ease, background 0.2s ease;
        }
        .nav-hamburger:hover {
          color: white;
          background: rgba(37,99,235,0.1);
        }

        /* ── Mobile drawer ── */
        .mobile-menu {
          background: rgba(8, 4, 21, 0.97);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-top: 1px solid rgba(37,99,235,0.12);
          border-radius: 0 0 20px 20px;
          overflow: hidden;
          animation: mobileSlide 0.3s cubic-bezier(0.4, 0, 0.2, 1) both;
        }
        .nav-wrapper.scrolled .mobile-menu {
          border-radius: 0;
        }
        @keyframes mobileSlide {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .mobile-link {
          font-size: 17px;
          font-weight: 500;
          color: rgba(210, 195, 255, 0.8);
          background: none;
          border: none;
          cursor: pointer;
          transition: color 0.2s ease;
          font-family: 'Outfit', sans-serif;
          padding: 6px 0;
        }
        .mobile-link:hover { color: white; }

        /* ── Divider in mobile ── */
        .mobile-divider {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(37,99,235,0.2), transparent);
          margin: 4px 0;
        }
      `}</style>

      <div className={`nav-wrapper ${scrolled ? "scrolled" : ""}`}>
        <nav className="nav-bar" style={{ position: "relative" }}>

          {/* LOGO */}
          <Link href="/" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
            <Image src="/new.png" width={130} height={28} alt="logo" style={{ marginTop: 2 }} />
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden lg:flex items-center gap-8">
            {sections.map((sec) => (
              <button key={sec} className="nav-link" onClick={() => scrollToSection(sec)}>
                {sec}
              </button>
            ))}
          </div>

          {/* DESKTOP ACTIONS */}
          <div className="hidden lg:flex items-center gap-5">
            <a href="tel:+17864850671" className="nav-login">Call Now</a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=info@hawksmediallc.com"
              className="nav-cta"
            >
              <span>Get a quote</span>
              <span className="cta-arrow">→</span>
            </a>
          </div>

          {/* MOBILE HAMBURGER */}
          <button className="nav-hamburger lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="mobile-menu lg:hidden">
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "18px", padding: "28px 24px 32px" }}>
              {sections.map((sec) => (
                <button
                  key={sec}
                  className="mobile-link"
                  onClick={() => { scrollToSection(sec); setMenuOpen(false); }}
                >
                  {sec}
                </button>
              ))}
              <div className="mobile-divider" />
              <a href="tel:+17864850671" className="nav-login" style={{ fontSize: 16 }}>Call Now</a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@hawksmediallc.com"
                className="nav-cta" style={{ width: "100%", justifyContent: "center", padding: "13px 24px", fontSize: 16 }}
              >
                <span>Get a quote</span>
                <span className="cta-arrow">→</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;