"use client";

import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const pageLinks = [
  { label: "Cellphone", href: "/cellphone" },
  { label: "Help Center", href: "/help-center" },
  { label: "Industries", href: "/industries" },
  { label: "Company", href: "/company" },
];
const serviceLinks = [
  {
    label: "Pay-Per-Call",
    href: "/services/pay-per-call",
    desc: "Only pay when the phone rings",
    icon: "📞",
  },
  {
    label: "Affiliate Marketing",
    href: "/services/affiliate-marketing",
    desc: "Elite network, top offers",
    icon: "🤝",
  },
  {
    label: "Lead Generation",
    href: "/services/lead-generation",
    desc: "Exclusive verified leads",
    icon: "🎯",
  },
  {
    label: "Performance Advertising",
    href: "/services/performance-advertising",
    desc: "Pay for results only",
    icon: "📈",
  },
  {
    label: "Fraud Prevention",
    href: "/services/fraud-prevention",
    desc: "99.8% clean traffic",
    icon: "🛡️",
  },
  {
    label: "Partner Program",
    href: "/services/partner-program",
    desc: "Monetize your traffic",
    icon: "💰",
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Desktop dropdowns
  const [servicesOpen, setServicesOpen] = useState(false);

  // Mobile dropdowns
  const [mobileServicesOpen, setMobileServicesOpen] =
    useState(false);

  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      setServicesOpen(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(e.target as Node)
      ) {
        setServicesOpen(false);
      }
    };

    window.addEventListener("mousedown", onDown);

    return () =>
      window.removeEventListener("mousedown", onDown);
  }, []);

  return (
    <>
      <style>{`
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
          background: rgba(10, 4, 28, 0.55);
          backdrop-filter: blur(20px) saturate(160%);
          -webkit-backdrop-filter: blur(20px) saturate(160%);
          border: 1px solid rgba(37, 99, 235, 0.18);
          border-radius: 20px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.4),
            inset 0 1px 0 rgba(255,255,255,0.06);
          position: relative;
        }

        .nav-wrapper.scrolled .nav-bar {
          border-radius: 0;
          border-left: none;
          border-right: none;
          border-top: none;
          max-width: 100%;
          background: rgba(8, 4, 21, 0.92);
        }

        .nav-link {
          position: relative;
          font-size: 15px;
          font-weight: 500;
          color: rgba(96, 165, 250, 0.85);
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px 0;
          transition: color 0.2s ease;
          display: flex;
          align-items: center;
          gap: 4px;
          text-decoration: none;
        }

        .nav-link:hover {
          color: #93c5fd;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1.5px;
          background: linear-gradient(90deg, #2563eb, #60a5fa);
          transition: width 0.25s ease;
        }

        .nav-link:hover::after,
        .nav-link.services-active::after {
          width: 100%;
        }

        .nav-link.services-active {
          color: #93c5fd;
        }

        .services-dropdown {
          position: absolute;
          top: calc(100% + 12px);
          left: 0;
          width: 520px;
          border-radius: 20px;
          background: rgba(8, 4, 21, 0.97);
          backdrop-filter: blur(28px);
          border: 1px solid rgba(37, 99, 235, 0.22);
          overflow: hidden;
          z-index: 100;
        }

        .dropdown-header {
          padding: 14px 16px 10px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(96,165,250,0.5);
          border-bottom: 1px solid rgba(37,99,235,0.1);
        }

        .dropdown-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2px;
          padding: 8px;
        }

        .dropdown-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 10px 12px;
          border-radius: 12px;
          text-decoration: none;
          transition: background 0.18s ease;
        }

        .dropdown-item:hover {
          background: rgba(37,99,235,0.12);
        }

        .dropdown-label {
          font-size: 13.5px;
          font-weight: 600;
          color: rgba(186,230,253,0.9);
        }

        .dropdown-desc {
          font-size: 11.5px;
          color: rgba(96,165,250,0.45);
          display: block;
          margin-top: 2px;
        }

        .mobile-menu {
          background: rgba(8, 4, 21, 0.97);
          backdrop-filter: blur(24px);
          border-top: 1px solid rgba(37,99,235,0.12);
          border-radius: 0 0 20px 20px;
          overflow: hidden;
        }

        .mobile-link {
          font-size: 17px;
          font-weight: 500;
          color: rgba(96, 165, 250, 0.85);
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px 0;
          text-align: center;
          text-decoration: none;
        }

        .mobile-link:hover {
          color: #93c5fd;
        }

        .mobile-services-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          font-size: 17px;
          font-weight: 500;
          color: rgba(96, 165, 250, 0.85);
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px 0;
        }

        .mobile-services-btn:hover {
          color: #93c5fd;
        }

        .mobile-service-link {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 10px 12px;
          border-radius: 10px;
          text-decoration: none;
          font-size: 14.5px;
          font-weight: 500;
          color: rgba(147,197,253,0.7);
          transition: background 0.18s;
          width: 100%;
        }

        .mobile-service-link:hover {
          background: rgba(37,99,235,0.1);
          color: #93c5fd;
        }

        .mobile-divider {
          width: 100%;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(37,99,235,0.2),
            transparent
          );
          margin: 4px 0;
        }

        .nav-hamburger {
          background: none;
          border: none;
          cursor: pointer;
          color: rgba(96, 165, 250, 0.8);
        }
      `}</style>

      <div className={`nav-wrapper ${scrolled ? "scrolled" : ""}`}>
        <nav className="nav-bar">

          {/* LOGO */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              flexShrink: 0,
            }}
          >
            <Image
              src="/logo.png"
              width={130}
              height={28}
              alt="logo"
              priority
            />
          </Link>

          {/* DESKTOP */}
          <div className="hidden lg:flex items-center gap-7">

            {/* SERVICES */}
            <div
              style={{ position: "relative" }}
              ref={servicesRef}
            >
              <button
                className={`nav-link ${
                  servicesOpen ? "services-active" : ""
                }`}
                onClick={() =>
                  setServicesOpen(!servicesOpen)
                }
                onMouseEnter={() =>
                  setServicesOpen(true)
                }
              >
                Services

                <ChevronDown
                  size={14}
                  style={{
                    transition: "0.2s",
                    transform: servicesOpen
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                  }}
                />
              </button>

              {servicesOpen && (
                <div
                  className="services-dropdown"
                  onMouseLeave={() =>
                    setServicesOpen(false)
                  }
                >
                  <div className="dropdown-header">
                    Our Services
                  </div>

                  <div className="dropdown-grid">
                    {serviceLinks.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="dropdown-item"
                      >
                        <span>{s.icon}</span>

                        <span>
                          <span className="dropdown-label">
                            {s.label}
                          </span>

                          <span className="dropdown-desc">
                            {s.desc}
                          </span>
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* BLOG - direct link, no dropdown */}
            <Link href="/blog" className="nav-link">
              Blog
            </Link>

            {/* PAGES */}
            {pageLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="nav-hamburger lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="mobile-menu lg:hidden">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                padding: "24px 20px 28px",
              }}
            >

              {/* BLOG - direct link, no dropdown */}
              <Link
                href="/blog"
                className="mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                Blog
              </Link>

              {/* SERVICES */}
              <div style={{ textAlign: "center" }}>
                <button
                  className="mobile-services-btn"
                  onClick={() =>
                    setMobileServicesOpen(
                      !mobileServicesOpen
                    )
                  }
                >
                  <span>Services</span>

                  <ChevronDown
                    size={16}
                    style={{
                      transition: "0.2s",
                      transform: mobileServicesOpen
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                    }}
                  />
                </button>

                {mobileServicesOpen && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 4,
                      marginTop: 8,
                    }}
                  >
                    {serviceLinks.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="mobile-service-link"
                        onClick={() => {
                          setMenuOpen(false);
                          setMobileServicesOpen(false);
                        }}
                      >
                        <span>{s.icon}</span>
                        <span>{s.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* PAGES */}
              {pageLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="mobile-link"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <div className="mobile-divider" />

              <a
                href="tel:+17864850671"
                style={{
                  textAlign: "center",
                  color: "#93c5fd",
                  textDecoration: "none",
                }}
              >
                Call Now
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;