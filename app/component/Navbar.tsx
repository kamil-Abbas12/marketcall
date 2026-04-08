"use client";

import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const scrollSections = ["Product", "Help Center", "Industries", "Company", "Blog"];

const serviceLinks = [
  { label: "Pay-Per-Call", href: "/services/pay-per-call", desc: "Only pay when the phone rings", icon: "📞" },
  { label: "Affiliate Marketing", href: "/services/affiliate-marketing", desc: "Elite network, top offers", icon: "🤝" },
  { label: "Lead Generation", href: "/services/lead-generation", desc: "Exclusive verified leads", icon: "🎯" },
  { label: "Performance Advertising", href: "/services/performance-advertising", desc: "Pay for results only", icon: "📈" },
  { label: "Fraud Prevention", href: "/services/fraud-prevention", desc: "99.8% clean traffic", icon: "🛡️" },
  { label: "Partner Program", href: "/services/partner-program", desc: "Monetize your traffic", icon: "💰" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isServicePage = pathname?.startsWith("/services");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
      setServicesOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) setServicesOpen(false);
    };
    window.addEventListener("mousedown", onDown);
    return () => window.removeEventListener("mousedown", onDown);
  }, []);

  const scrollToSection = (id: string) => {
    if (isServicePage) { window.location.href = `/#${id}`; return; }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        .nav-wrapper {
          position: fixed; top: 0; width: 100%; z-index: 50;
          font-family: 'Outfit', sans-serif;
          transition: padding 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          padding: 18px 24px 0;
        }
        .nav-wrapper.scrolled { padding: 0; }

        .nav-bar {
          max-width: 1400px; margin: 0 auto; height: 68px;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 24px 0 28px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          background: rgba(10, 4, 28, 0.55);
          backdrop-filter: blur(20px) saturate(160%);
          -webkit-backdrop-filter: blur(20px) saturate(160%);
          border: 1px solid rgba(37, 99, 235, 0.18);
          border-radius: 20px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06);
          animation: navDrop 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) both;
          position: relative;
        }
        .nav-wrapper.scrolled .nav-bar {
          border-radius: 0; border-left: none; border-right: none; border-top: none;
          max-width: 100%;
          background: rgba(8, 4, 21, 0.92);
          box-shadow: 0 1px 0 rgba(37,99,235,0.12), 0 8px 32px rgba(0,0,0,0.5);
        }
        @keyframes navDrop {
          from { opacity: 0; transform: translateY(-20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .nav-bar::before {
          content: ''; position: absolute; top: 0; left: 10%; right: 10%; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(37,99,235,0.6), rgba(59,130,246,0.8), rgba(37,99,235,0.6), transparent);
          opacity: 0; transition: opacity 0.4s ease; border-radius: 1px;
        }
        .nav-wrapper.scrolled .nav-bar::before { opacity: 1; }

        .nav-link {
          position: relative; font-size: 15px; font-weight: 500;
          color: rgba(96, 165, 250, 0.85); background: none; border: none;
          cursor: pointer; padding: 4px 0; transition: color 0.2s ease; letter-spacing: 0.01em;
          display: flex; align-items: center; gap: 4px;
        }
        .nav-link::after {
          content: ''; position: absolute; bottom: -2px; left: 0;
          width: 0; height: 1.5px;
          background: linear-gradient(90deg, #2563eb, #60a5fa);
          border-radius: 2px; transition: width 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .nav-link:hover { color: #93c5fd; }
        .nav-link:hover::after { width: 100%; }
        .nav-link.services-active { color: #93c5fd; }
        .nav-link.services-active::after { width: 100%; }

        .services-dropdown {
          position: absolute; top: calc(100% + 12px); left: 0;
          width: 520px; border-radius: 20px;
          background: rgba(8, 4, 21, 0.97);
          backdrop-filter: blur(28px) saturate(160%);
          -webkit-backdrop-filter: blur(28px) saturate(160%);
          border: 1px solid rgba(37, 99, 235, 0.22);
          box-shadow: 0 24px 64px rgba(0,0,0,0.7), 0 0 0 1px rgba(37,99,235,0.08), inset 0 1px 0 rgba(255,255,255,0.05);
          overflow: hidden;
          animation: dropIn 0.2s cubic-bezier(0.4, 0, 0.2, 1) both;
          z-index: 100;
        }
        @keyframes dropIn {
          from { opacity: 0; transform: translateY(-8px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .dropdown-header {
          padding: 14px 16px 10px;
          font-size: 10px; font-weight: 700; letter-spacing: 0.14em;
          text-transform: uppercase; color: rgba(96,165,250,0.5);
          border-bottom: 1px solid rgba(37,99,235,0.1);
        }
        .dropdown-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 2px; padding: 8px;
        }
        .dropdown-item {
          display: flex; align-items: flex-start; gap: 10px;
          padding: 10px 12px; border-radius: 12px;
          text-decoration: none; transition: background 0.18s ease;
          cursor: pointer;
        }
        .dropdown-item:hover { background: rgba(37,99,235,0.12); }
        .dropdown-icon {
          font-size: 18px; line-height: 1; flex-shrink: 0; margin-top: 1px;
        }
        .dropdown-label {
          font-size: 13.5px; font-weight: 600; color: rgba(186,230,253,0.9);
          line-height: 1.3; display: block;
          transition: color 0.18s ease;
        }
        .dropdown-item:hover .dropdown-label { color: #93c5fd; }
        .dropdown-desc {
          font-size: 11.5px; color: rgba(96,165,250,0.45);
          display: block; margin-top: 2px; line-height: 1.3;
          transition: color 0.18s ease;
        }
        .dropdown-item:hover .dropdown-desc { color: rgba(96,165,250,0.65); }
        .dropdown-footer {
          border-top: 1px solid rgba(37,99,235,0.1);
          padding: 10px 16px;
          display: flex; align-items: center; justify-content: space-between;
        }
        .dropdown-footer-link {
          font-size: 12px; font-weight: 600; color: rgba(96,165,250,0.6);
          text-decoration: none; transition: color 0.2s;
          cursor: pointer;
        }
        .dropdown-footer-link:hover { color: #93c5fd; }

        .nav-login {
          font-size: 15px; font-weight: 500; color: rgba(37,99,235,0.9);
          background: none; border: none; cursor: pointer;
          transition: color 0.2s ease; letter-spacing: 0.01em;
          text-decoration: none;
        }
        .nav-login:hover { color: #3b82f6; }

        .nav-cta {
          position: relative; overflow: hidden;
          background: linear-gradient(135deg, #2563eb 0%, #3b82f6 50%, #60a5fa 100%);
          border: none; color: white; padding: 10px 22px;
          border-radius: 100px; font-weight: 600; font-size: 15px;
          cursor: pointer; font-family: 'Outfit', sans-serif;
          display: flex; align-items: center; gap: 6px;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          box-shadow: 0 3px 16px rgba(37,99,235,0.5), inset 0 1px 0 rgba(255,255,255,0.18);
          white-space: nowrap; letter-spacing: 0.01em; text-decoration: none;
        }
        .nav-cta::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%);
          opacity: 0; transition: opacity 0.25s ease;
        }
        .nav-cta:hover::before { opacity: 1; }
        .nav-cta:hover { transform: translateY(-1px); box-shadow: 0 6px 24px rgba(59,130,246,0.65), inset 0 1px 0 rgba(255,255,255,0.18); }
        .nav-cta:active { transform: translateY(0); }
        .nav-cta span, .nav-cta .cta-arrow { position: relative; z-index: 1; }
        .nav-cta .cta-arrow { transition: transform 0.25s ease; display: inline-block; }
        .nav-cta:hover .cta-arrow { transform: translateX(3px); }

        .nav-hamburger {
          background: none; border: none; cursor: pointer;
          color: rgba(96, 165, 250, 0.8);
          display: flex; align-items: center; justify-content: center;
          padding: 6px; border-radius: 8px;
          transition: color 0.2s ease, background 0.2s ease;
        }
        .nav-hamburger:hover { color: #93c5fd; background: rgba(37,99,235,0.1); }

        .mobile-menu {
          background: rgba(8, 4, 21, 0.97);
          backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px);
          border-top: 1px solid rgba(37,99,235,0.12);
          border-radius: 0 0 20px 20px; overflow: hidden;
          animation: mobileSlide 0.3s cubic-bezier(0.4, 0, 0.2, 1) both;
        }
        .nav-wrapper.scrolled .mobile-menu { border-radius: 0; }
        @keyframes mobileSlide {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .mobile-link {
          font-size: 17px; font-weight: 500;
          color: rgba(96, 165, 250, 0.85);
          background: none; border: none; cursor: pointer;
          transition: color 0.2s ease; font-family: 'Outfit', sans-serif;
          padding: 6px 0;
        }
        .mobile-link:hover { color: #93c5fd; }
        .mobile-services-btn {
          width: 100%; display: flex; align-items: center; justify-content: space-between;
          font-size: 17px; font-weight: 500;
          color: rgba(96, 165, 250, 0.85);
          background: none; border: none; cursor: pointer;
          font-family: 'Outfit', sans-serif; padding: 6px 0;
          transition: color 0.2s;
        }
        .mobile-services-btn:hover { color: #93c5fd; }
        .mobile-service-link {
          display: flex; align-items: center; gap: 10px;
          padding: 9px 12px; border-radius: 10px;
          text-decoration: none;
          font-size: 14.5px; font-weight: 500;
          color: rgba(147,197,253,0.7);
          transition: background 0.18s, color 0.18s; cursor: pointer;
        }
        .mobile-service-link:hover { background: rgba(37,99,235,0.1); color: #93c5fd; }
        .mobile-divider {
          width: 100%; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(37,99,235,0.2), transparent);
          margin: 4px 0;
        }
      `}</style>

      <div className={`nav-wrapper ${scrolled ? "scrolled" : ""}`}>
        <nav className="nav-bar" aria-label="Main navigation">

          {/* LOGO */}
          <Link href="/" style={{ display: "flex", alignItems: "center", flexShrink: 0 }} aria-label="Hawks Media LLC — Home">
            <Image src="/new.png" width={130} height={28} alt="Hawks Media LLC logo" priority style={{ marginTop: 2 }} />
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden lg:flex items-center gap-7">

            {/* SERVICES DROPDOWN */}
            <div style={{ position: "relative" }} ref={servicesRef}>
              <button
                className={`nav-link ${servicesOpen ? "services-active" : ""}`}
                onClick={() => setServicesOpen(!servicesOpen)}
                onMouseEnter={() => setServicesOpen(true)}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                aria-label="Services — open submenu"
              >
                Services
                <ChevronDown
                  size={14}
                  aria-hidden="true"
                  style={{ transition: "transform 0.2s", transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                />
              </button>

              {servicesOpen && (
                <div className="services-dropdown" onMouseLeave={() => setServicesOpen(false)} role="menu" aria-label="Services submenu">
                  <div className="dropdown-header">Our Services</div>
                  <div className="dropdown-grid">
                    {serviceLinks.map((s) => (
                      <Link key={s.href} href={s.href} className="dropdown-item" role="menuitem" onClick={() => setServicesOpen(false)}>
                        <span className="dropdown-icon">{s.icon}</span>
                        <span>
                          <span className="dropdown-label">{s.label}</span>
                          <span className="dropdown-desc">{s.desc}</span>
                        </span>
                      </Link>
                    ))}
                  </div>
                  <div className="dropdown-footer">
                    <Link href="/services" className="dropdown-footer-link" onClick={() => setServicesOpen(false)}>
                      View all services →
                    </Link>
                    <span style={{ fontSize: 11, color: "rgba(96,165,250,0.3)" }}>6 services available</span>
                  </div>
                </div>
              )}
            </div>

            {/* SCROLL SECTIONS */}
            {scrollSections.map((sec) => (
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
              aria-label="Get a quote — opens email composer"
            >
              <span>Get a quote</span>
              <span className="cta-arrow" aria-hidden="true">→</span>
            </a>
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            className="nav-hamburger lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-menu"
          >
            {menuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </nav>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="mobile-menu lg:hidden" id="mobile-nav-menu" role="navigation" aria-label="Mobile navigation">
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "24px 20px 28px" }}>

              {/* Mobile Services Accordion */}
              <div>
                <button
                  className="mobile-services-btn"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  aria-expanded={mobileServicesOpen}
                >
                  Services
                  <ChevronDown
                    size={16}
                    aria-hidden="true"
                    style={{ transition: "transform 0.2s", transform: mobileServicesOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                  />
                </button>
                {mobileServicesOpen && (
                  <div style={{ display: "flex", flexDirection: "column", gap: 2, marginTop: 6, paddingLeft: 4 }}>
                    {serviceLinks.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="mobile-service-link"
                        onClick={() => { setMenuOpen(false); setMobileServicesOpen(false); }}
                      >
                        <span>{s.icon}</span>
                        <span>{s.label}</span>
                      </Link>
                    ))}
                    <Link
                      href="/services"
                      className="mobile-service-link"
                      style={{ color: "rgba(96,165,250,0.5)", fontSize: 13 }}
                      onClick={() => { setMenuOpen(false); setMobileServicesOpen(false); }}
                    >
                      <span>→</span>
                      <span>View all services</span>
                    </Link>
                  </div>
                )}
              </div>

              {scrollSections.map((sec) => (
                <button
                  key={sec}
                  className="mobile-link"
                  onClick={() => { scrollToSection(sec); setMenuOpen(false); }}
                >
                  {sec}
                </button>
              ))}

              <div className="mobile-divider" aria-hidden="true" />
              <a href="tel:+17864850671" className="nav-login" style={{ fontSize: 16, textAlign: "center" }}>Call Now</a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@hawksmediallc.com"
                className="nav-cta"
                style={{ width: "100%", justifyContent: "center", padding: "13px 24px", fontSize: 16 }}
                aria-label="Get a quote — opens email composer"
              >
                <span>Get a quote</span>
                <span className="cta-arrow" aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;