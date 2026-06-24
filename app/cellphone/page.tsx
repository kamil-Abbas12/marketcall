"use client";

import React from "react";
import { Smartphone, Wifi, Shield, Clock, Star, ChevronRight, CheckCircle } from "lucide-react";
import Navbar from "../component/Navbar";

const features = [
  {
    icon: "📡",
    title: "Nationwide Coverage",
    desc: "Stay connected everywhere with Total Wireless's extensive network reaching 99% of the US population.",
  },
  {
    icon: "💸",
    title: "No Contracts",
    desc: "Flexible, no-commitment plans that fit your budget — pay only for what you need, cancel anytime.",
  },
  {
    icon: "📶",
    title: "4G LTE & 5G Ready",
    desc: "Experience lightning-fast speeds whether you're streaming, browsing, or video calling on the go.",
  },
  {
    icon: "🔒",
    title: "Secure & Reliable",
    desc: "Your data stays protected with enterprise-grade security and 99.9% network uptime guarantee.",
  },
  {
    icon: "🤝",
    title: "Dedicated Support",
    desc: "Our expert team is available 24/7 to help you choose the right plan and resolve any issues.",
  },
  {
    icon: "⚡",
    title: "Instant Activation",
    desc: "Get your service up and running in minutes — no paperwork, no waiting, no hassle.",
  },
];

const plans = [
  {
    name: "Starter",
    price: "$25",
    period: "/mo",
    highlight: false,
    perks: ["5GB Data", "Unlimited Talk & Text", "Wi-Fi Calling", "Mobile Hotspot", "4G LTE"],
  },
  {
    name: "Essential",
    price: "$40",
    period: "/mo",
    highlight: true,
    badge: "Most Popular",
    perks: [
      "Unlimited Data",
      "Unlimited Talk & Text",
      "Wi-Fi Calling",
      "15GB Hotspot",
      "5G Access",
      "International Texting",
    ],
  },
  {
    name: "Premium",
    price: "$55",
    period: "/mo",
    highlight: false,
    perks: [
      "Unlimited Premium Data",
      "Unlimited Talk & Text",
      "Wi-Fi Calling",
      "50GB Hotspot",
      "5G Ultra Access",
      "International Calls",
      "Device Protection",
    ],
  },
];

const stats = [
  { value: "99%", label: "Network Coverage" },
  { value: "5G", label: "Ultra-Fast Speeds" },
  { value: "24/7", label: "Customer Support" },
  { value: "0", label: "Contracts Required" },
];

export default function CellphonePage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .cp-root {
          font-family: 'Outfit', sans-serif;
          background: #060a12;
          color: white;
          overflow-x: hidden;
          min-height: 100vh;
        }

        /* ── HERO ── */
        .cp-hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 140px 24px 100px;
          overflow: hidden;
        }

        .cp-hero-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 80% 60% at 50% 0%, rgba(29,78,216,0.28) 0%, transparent 65%),
            radial-gradient(ellipse 60% 50% at 20% 80%, rgba(14,165,233,0.14) 0%, transparent 55%),
            radial-gradient(ellipse 50% 60% at 85% 60%, rgba(37,99,235,0.12) 0%, transparent 55%),
            linear-gradient(180deg, #07090f 0%, #060a12 100%);
          pointer-events: none;
        }

        .cp-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(96,165,250,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(96,165,250,0.04) 1px, transparent 1px);
          background-size: 52px 52px;
          pointer-events: none;
        }

        /* floating orbs */
        .cp-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(70px);
          pointer-events: none;
          animation: orbFloat 8s ease-in-out infinite;
        }
        .cp-orb-1 { width: 420px; height: 420px; background: rgba(29,78,216,0.18); top: -80px; left: -100px; animation-delay: 0s; }
        .cp-orb-2 { width: 320px; height: 320px; background: rgba(14,165,233,0.13); bottom: 60px; right: -60px; animation-delay: -3s; }
        @keyframes orbFloat {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-30px) scale(1.05); }
        }

        .cp-hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(96,165,250,0.8);
          background: rgba(29,78,216,0.12);
          border: 1px solid rgba(96,165,250,0.2);
          padding: 6px 16px;
          border-radius: 100px;
          margin-bottom: 28px;
        }

        .cp-hero-title {
          font-size: clamp(2.6rem, 6vw, 5rem);
          font-weight: 900;
          line-height: 1.08;
          letter-spacing: -0.03em;
          margin-bottom: 24px;
          background: linear-gradient(135deg, #ffffff 0%, #bfdbfe 45%, #60a5fa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cp-hero-sub {
          font-size: clamp(1rem, 2vw, 1.2rem);
          color: rgba(147,197,253,0.7);
          max-width: 580px;
          margin: 0 auto 40px;
          line-height: 1.7;
          font-weight: 400;
        }

        .cp-hero-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .cp-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #1d4ed8 0%, #2563eb 50%, #3b82f6 100%);
          color: white;
          font-family: 'Outfit', sans-serif;
          font-size: 15px;
          font-weight: 700;
          padding: 14px 30px;
          border-radius: 100px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          box-shadow: 0 4px 24px rgba(37,99,235,0.5), inset 0 1px 0 rgba(255,255,255,0.15);
        }
        .cp-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 32px rgba(59,130,246,0.65), inset 0 1px 0 rgba(255,255,255,0.15);
        }

        .cp-btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.05);
          color: rgba(147,197,253,0.85);
          font-family: 'Outfit', sans-serif;
          font-size: 15px;
          font-weight: 600;
          padding: 14px 30px;
          border-radius: 100px;
          border: 1px solid rgba(96,165,250,0.2);
          cursor: pointer;
          text-decoration: none;
          transition: all 0.25s ease;
          backdrop-filter: blur(12px);
        }
        .cp-btn-ghost:hover {
          background: rgba(29,78,216,0.15);
          border-color: rgba(96,165,250,0.4);
          color: #bfdbfe;
        }

        /* ── STATS STRIP ── */
        .cp-stats {
          position: relative;
          z-index: 10;
          margin: 0 auto;
          max-width: 900px;
          padding: 0 24px;
          transform: translateY(-36px);
        }

        .cp-stats-inner {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          background: rgba(10,4,28,0.7);
          backdrop-filter: blur(24px);
          border: 1px solid rgba(37,99,235,0.2);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(0,0,0,0.4);
        }

        .cp-stat-item {
          padding: 28px 16px;
          text-align: center;
          border-right: 1px solid rgba(37,99,235,0.12);
          position: relative;
        }
        .cp-stat-item:last-child { border-right: none; }

        .cp-stat-val {
          font-size: clamp(1.6rem, 3vw, 2.4rem);
          font-weight: 900;
          letter-spacing: -0.04em;
          background: linear-gradient(135deg, #ffffff 0%, #93c5fd 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
          margin-bottom: 6px;
        }

        .cp-stat-label {
          font-size: 12px;
          font-weight: 500;
          color: rgba(96,165,250,0.55);
          letter-spacing: 0.04em;
        }

        /* ── SECTION SHARED ── */
        .cp-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 24px;
        }

        .cp-section-eyebrow {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(96,165,250,0.6);
          margin-bottom: 14px;
        }

        .cp-section-title {
          font-size: clamp(1.8rem, 4vw, 3rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1.1;
          color: #fff;
          margin-bottom: 16px;
        }

        .cp-section-sub {
          font-size: 16px;
          color: rgba(147,197,253,0.6);
          line-height: 1.7;
          max-width: 520px;
          font-weight: 400;
        }

        /* ── INTRO SPLIT ── */
        .cp-intro-wrap {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 72px;
          align-items: center;
        }

        .cp-phone-visual {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cp-phone-card {
          width: 220px;
          height: 420px;
          background: rgba(10,4,28,0.9);
          border: 1.5px solid rgba(37,99,235,0.35);
          border-radius: 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 16px;
          box-shadow:
            0 0 60px rgba(37,99,235,0.25),
            0 0 120px rgba(37,99,235,0.1),
            inset 0 1px 0 rgba(255,255,255,0.06);
          position: relative;
          overflow: hidden;
        }

        .cp-phone-card::before {
          content: '';
          position: absolute;
          top: 0; left: 30%; right: 30%;
          height: 3px;
          background: rgba(37,99,235,0.6);
          border-radius: 0 0 4px 4px;
        }

        .cp-phone-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 80% 60% at 50% 20%, rgba(29,78,216,0.18) 0%, transparent 60%);
          pointer-events: none;
        }

        .cp-phone-icon-wrap {
          width: 72px;
          height: 72px;
          border-radius: 20px;
          background: linear-gradient(135deg, rgba(29,78,216,0.4), rgba(37,99,235,0.2));
          border: 1px solid rgba(96,165,250,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 1;
        }

        .cp-phone-label {
          font-size: 18px;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: white;
          position: relative;
          z-index: 1;
        }

        .cp-phone-sub-label {
          font-size: 12px;
          color: rgba(147,197,253,0.55);
          position: relative;
          z-index: 1;
        }

        .cp-signal-bars {
          display: flex;
          align-items: flex-end;
          gap: 3px;
          position: relative;
          z-index: 1;
        }
        .cp-signal-bar {
          width: 6px;
          background: linear-gradient(180deg, #3b82f6, #1d4ed8);
          border-radius: 2px;
          opacity: 0.9;
        }

        .cp-glow-ring {
          position: absolute;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          border: 1px solid rgba(37,99,235,0.15);
          animation: ringPulse 3s ease-in-out infinite;
        }
        .cp-glow-ring-2 {
          width: 440px;
          height: 440px;
          animation-delay: -1.5s;
          border-color: rgba(37,99,235,0.08);
        }
        @keyframes ringPulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.04); opacity: 1; }
        }

        /* ── FEATURES GRID ── */
        .cp-features-bg {
          background: radial-gradient(ellipse 70% 60% at 50% 50%, rgba(29,78,216,0.08) 0%, transparent 60%);
          padding: 8px 0 80px;
        }

        .cp-features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 56px;
        }

        .cp-feature-card {
          background: rgba(10,4,28,0.6);
          border: 1px solid rgba(37,99,235,0.16);
          border-radius: 20px;
          padding: 28px;
          transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
          backdrop-filter: blur(12px);
        }
        .cp-feature-card:hover {
          border-color: rgba(96,165,250,0.35);
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(29,78,216,0.2);
        }

        .cp-feature-icon {
          font-size: 30px;
          margin-bottom: 16px;
          display: block;
        }

        .cp-feature-title {
          font-size: 16px;
          font-weight: 700;
          color: rgba(186,230,253,0.95);
          margin-bottom: 8px;
        }

        .cp-feature-desc {
          font-size: 14px;
          color: rgba(147,197,253,0.55);
          line-height: 1.65;
          font-weight: 400;
        }

        /* ── PLANS ── */
        .cp-plans-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 56px;
          align-items: start;
        }

        .cp-plan-card {
          background: rgba(10,4,28,0.7);
          border: 1px solid rgba(37,99,235,0.18);
          border-radius: 24px;
          padding: 32px 28px;
          position: relative;
          transition: border-color 0.25s ease, transform 0.25s ease;
          backdrop-filter: blur(16px);
        }

        .cp-plan-card.highlighted {
          border-color: rgba(96,165,250,0.45);
          background: rgba(29,78,216,0.12);
          box-shadow: 0 0 40px rgba(37,99,235,0.2), inset 0 1px 0 rgba(255,255,255,0.06);
          transform: scale(1.02);
        }

        .cp-plan-badge {
          position: absolute;
          top: -13px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #1d4ed8, #3b82f6);
          color: white;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 4px 16px;
          border-radius: 100px;
          white-space: nowrap;
          box-shadow: 0 4px 16px rgba(37,99,235,0.45);
        }

        .cp-plan-name {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(96,165,250,0.7);
          margin-bottom: 12px;
        }

        .cp-plan-price {
          font-size: 3rem;
          font-weight: 900;
          letter-spacing: -0.04em;
          color: white;
          line-height: 1;
        }

        .cp-plan-period {
          font-size: 16px;
          font-weight: 400;
          color: rgba(96,165,250,0.5);
        }

        .cp-plan-divider {
          height: 1px;
          background: rgba(37,99,235,0.15);
          margin: 24px 0;
        }

        .cp-plan-perk {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          color: rgba(147,197,253,0.75);
          padding: 6px 0;
          font-weight: 500;
        }

        .cp-plan-perk svg { color: #3b82f6; flex-shrink: 0; }

        .cp-plan-btn {
          width: 100%;
          margin-top: 28px;
          padding: 13px;
          border-radius: 12px;
          font-family: 'Outfit', sans-serif;
          font-size: 14.5px;
          font-weight: 700;
          cursor: pointer;
          border: none;
          transition: all 0.25s ease;
          text-decoration: none;
          display: block;
          text-align: center;
        }

        .cp-plan-btn.primary {
          background: linear-gradient(135deg, #1d4ed8, #3b82f6);
          color: white;
          box-shadow: 0 4px 16px rgba(37,99,235,0.4);
        }
        .cp-plan-btn.primary:hover { box-shadow: 0 8px 24px rgba(59,130,246,0.6); transform: translateY(-1px); }

        .cp-plan-btn.ghost {
          background: rgba(29,78,216,0.1);
          color: rgba(147,197,253,0.85);
          border: 1px solid rgba(96,165,250,0.2);
        }
        .cp-plan-btn.ghost:hover { background: rgba(29,78,216,0.2); border-color: rgba(96,165,250,0.35); }

        /* ── CTA BAND ── */
        .cp-cta-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px 100px;
        }

        .cp-cta-band {
          position: relative;
          padding: 56px 48px;
          border-radius: 28px;
          background: rgba(29,78,216,0.1);
          border: 1px solid rgba(96,165,250,0.22);
          backdrop-filter: blur(12px);
          overflow: hidden;
          text-align: center;
        }

        .cp-cta-band::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(29,78,216,0.2) 0%, transparent 60%);
          pointer-events: none;
        }
        .cp-cta-band::after {
          content: '';
          position: absolute;
          top: 0; left: 10%; right: 10%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(96,165,250,0.6), transparent);
        }

        .cp-cta-title {
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          font-weight: 900;
          letter-spacing: -0.03em;
          color: white;
          margin-bottom: 14px;
          position: relative;
          z-index: 1;
        }

        .cp-cta-sub {
          font-size: 16px;
          color: rgba(147,197,253,0.65);
          margin-bottom: 36px;
          font-weight: 400;
          position: relative;
          z-index: 1;
        }

        .cp-cta-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
          position: relative;
          z-index: 1;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .cp-features-grid { grid-template-columns: repeat(2, 1fr); }
          .cp-plans-grid { grid-template-columns: 1fr; max-width: 420px; margin-left: auto; margin-right: auto; }
          .cp-plan-card.highlighted { transform: scale(1); }
          .cp-intro-wrap { grid-template-columns: 1fr; gap: 48px; }
          .cp-phone-visual { order: -1; }
          .cp-stats-inner { grid-template-columns: repeat(2, 1fr); }
          .cp-stat-item:nth-child(2) { border-right: none; }
          .cp-stat-item:nth-child(1),
          .cp-stat-item:nth-child(2) { border-bottom: 1px solid rgba(37,99,235,0.12); }
        }
        @media (max-width: 640px) {
          .cp-features-grid { grid-template-columns: 1fr; }
          .cp-stats-inner { grid-template-columns: repeat(2, 1fr); }
          .cp-cta-band { padding: 36px 24px; }
          .cp-section { padding: 60px 20px; }
        }
      `}</style>

      <div className="cp-root">

        {/* ── HERO ── */}
        <section className="cp-hero">
          <div className="cp-hero-bg" aria-hidden="true" />
          <div className="cp-grid" aria-hidden="true" />
          <div className="cp-orb cp-orb-1" aria-hidden="true" />
          <div className="cp-orb cp-orb-2" aria-hidden="true" />

          <div style={{ position: "relative", zIndex: 10, maxWidth: 720, width: "100%" }}>
            <div className="cp-hero-eyebrow">
              <Smartphone size={12} aria-hidden="true" />
              New Service — Cellphone
            </div>

            <h1 className="cp-hero-title">
              Hawks Media Now Offers<br />Cellphone Services
            </h1>

            <p className="cp-hero-sub">
              Providing Total Wireless Services to our customers — stay connected with
              flexible plans, nationwide coverage, and the reliability you expect from Hawks Media.
            </p>

            <div className="cp-hero-actions">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@hawksmediallc.com"
                className="cp-btn-primary"
                aria-label="Get started with Hawks Media cellphone services"
              >
                Get Started Today
                <ChevronRight size={16} aria-hidden="true" />
              </a>
              <a href="tel:+17864850671" className="cp-btn-ghost" aria-label="Call Hawks Media">
                Call Us Now
              </a>
            </div>
          </div>
        </section>

        {/* ── STATS STRIP ── */}
        <div className="cp-stats">
          <div className="cp-stats-inner">
            {stats.map((s) => (
              <div key={s.label} className="cp-stat-item">
                <div className="cp-stat-val">{s.value}</div>
                <div className="cp-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── INTRO SPLIT ── */}
        <section className="cp-section" style={{ paddingTop: 20 }}>
          <div className="cp-intro-wrap">
            <div>
              <div className="cp-section-eyebrow">✦ Total Wireless Partner</div>
              <h2 className="cp-section-title">
                Seamless connectivity,<br />powered by Total Wireless
              </h2>
              <p className="cp-section-sub">
                Hawks Media has expanded its portfolio to include cellphone services through
                Total Wireless — bringing the same performance-first mindset we apply to marketing
                directly to your mobile experience.
              </p>
              <p className="cp-section-sub" style={{ marginTop: 16 }}>
                Whether you're a business looking for a reliable mobile plan for your team
                or an individual seeking affordable coverage, we've got you covered with
                no-contract, high-speed plans built for the way you live and work.
              </p>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@hawksmediallc.com"
                className="cp-btn-primary"
                style={{ display: "inline-flex", marginTop: 32 }}
              >
                Explore Plans
                <ChevronRight size={16} aria-hidden="true" />
              </a>
            </div>

            {/* Phone visual */}
            <div className="cp-phone-visual">
              <div className="cp-glow-ring" aria-hidden="true" />
              <div className="cp-glow-ring cp-glow-ring-2" aria-hidden="true" />
              <div className="cp-phone-card" aria-hidden="true">
                <div className="cp-phone-icon-wrap">
                  <Smartphone size={32} color="#60a5fa" />
                </div>
                <div className="cp-phone-label">Total Wireless</div>
                <div className="cp-phone-sub-label">Powered by Hawks Media</div>
                <div className="cp-signal-bars">
                  {[12, 18, 24, 30, 36].map((h, i) => (
                    <div key={i} className="cp-signal-bar" style={{ height: h }} />
                  ))}
                </div>
                <div style={{ fontSize: 11, color: "rgba(96,165,250,0.5)", marginTop: 4 }}>
                  5G · Full Signal
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <div className="cp-features-bg">
          <div className="cp-section" style={{ paddingTop: 0 }}>
            <div style={{ textAlign: "center" }}>
              <div className="cp-section-eyebrow">✦ Why Choose Us</div>
              <h2 className="cp-section-title">Everything you need in a wireless plan</h2>
              <p className="cp-section-sub" style={{ margin: "0 auto" }}>
                Hawks Media brings the same commitment to quality and performance from
                our marketing services to your mobile connectivity.
              </p>
            </div>

            <div className="cp-features-grid" role="list">
              {features.map((f) => (
                <div key={f.title} className="cp-feature-card" role="listitem">
                  <span className="cp-feature-icon" aria-hidden="true">{f.icon}</span>
                  <div className="cp-feature-title">{f.title}</div>
                  <div className="cp-feature-desc">{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── PLANS ── */}
        <section className="cp-section">
          <div style={{ textAlign: "center" }}>
            <div className="cp-section-eyebrow">✦ Simple Pricing</div>
            <h2 className="cp-section-title">Plans for every need</h2>
            <p className="cp-section-sub" style={{ margin: "0 auto" }}>
              No hidden fees, no surprises. Choose the plan that fits you and switch
              anytime — we make it easy.
            </p>
          </div>

          <div className="cp-plans-grid" role="list">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`cp-plan-card ${plan.highlight ? "highlighted" : ""}`}
                role="listitem"
              >
                {plan.badge && (
                  <div className="cp-plan-badge" aria-label="Most popular plan">
                    {plan.badge}
                  </div>
                )}
                <div className="cp-plan-name">{plan.name}</div>
                <div>
                  <span className="cp-plan-price">{plan.price}</span>
                  <span className="cp-plan-period">{plan.period}</span>
                </div>
                <div className="cp-plan-divider" aria-hidden="true" />
                <div role="list" aria-label={`${plan.name} plan features`}>
                  {plan.perks.map((perk) => (
                    <div key={perk} className="cp-plan-perk" role="listitem">
                      <CheckCircle size={15} aria-hidden="true" />
                      {perk}
                    </div>
                  ))}
                </div>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=info@hawksmediallc.com"
                  className={`cp-plan-btn ${plan.highlight ? "primary" : "ghost"}`}
                  aria-label={`Get started with the ${plan.name} plan`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA BAND ── */}
        <section className="cp-cta-section" aria-labelledby="cta-title">
          <div className="cp-cta-band">
            <h2 className="cp-cta-title" id="cta-title">
              Ready to switch to Total Wireless?
            </h2>
            <p className="cp-cta-sub">
              Contact us today and our team will help you find the perfect plan for your needs.
            </p>
            <div className="cp-cta-actions">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@hawksmediallc.com"
                className="cp-btn-primary"
                aria-label="Contact Hawks Media about cellphone services"
              >
                Contact Us Today
                <ChevronRight size={16} aria-hidden="true" />
              </a>
              <a href="tel:+17864850671" className="cp-btn-ghost">
                +1 786 485 0671
              </a>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}