"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";

const Hero = () => {
  const orbRef1 = useRef<HTMLDivElement>(null);
  const orbRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (clientX - cx) / cx;
      const dy = (clientY - cy) / cy;

      if (orbRef1.current) {
        orbRef1.current.style.transform = `translate(${dx * 24}px, ${dy * 24}px)`;
      }
      if (orbRef2.current) {
        orbRef2.current.style.transform = `translate(${-dx * 18}px, ${-dy * 18}px)`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;800;900&family=Lora:ital@0;1&display=swap');

        .hero-section {
          font-family: 'Outfit', sans-serif;
          position: relative;
          overflow: hidden;
          min-height: 620px;
          background: #080415;
        }

        /* ── Animated gradient mesh background ── */
        .hero-bg-gradient {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 80% 60% at 20% -10%, #7c1fff55 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 80% 110%, #c026d355 0%, transparent 55%),
            radial-gradient(ellipse 50% 70% at 50% 50%, #3b0764cc 0%, transparent 80%),
            linear-gradient(160deg, #0f0520 0%, #1a0535 40%, #200a3a 100%);
          animation: bgPulse 8s ease-in-out infinite alternate;
        }
        @keyframes bgPulse {
          0%   { filter: hue-rotate(0deg) brightness(1); }
          100% { filter: hue-rotate(15deg) brightness(1.1); }
        }

        /* ── Glowing orbs ── */
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          pointer-events: none;
        }
        .orb-1 {
          width: 520px; height: 520px;
          top: -160px; left: -100px;
          background: radial-gradient(circle, #9333ea88 0%, #7c3aed44 50%, transparent 70%);
          animation: orbFloat1 10s ease-in-out infinite;
        }
        .orb-2 {
          width: 420px; height: 420px;
          bottom: -140px; right: -80px;
          background: radial-gradient(circle, #c026d377 0%, #a855f744 50%, transparent 70%);
          animation: orbFloat2 12s ease-in-out infinite;
        }
        .orb-3 {
          width: 260px; height: 260px;
          top: 50%; left: 55%;
          background: radial-gradient(circle, #e879f933 0%, transparent 70%);
          animation: orbFloat3 14s ease-in-out infinite;
        }
        @keyframes orbFloat1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, 20px) scale(1.08); }
        }
        @keyframes orbFloat2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-20px, -30px) scale(1.06); }
        }
        @keyframes orbFloat3 {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.15); }
        }

        /* ── Animated grid overlay ── */
        .grid-overlay {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(167, 139, 250, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(167, 139, 250, 0.04) 1px, transparent 1px);
          background-size: 48px 48px;
          animation: gridShift 20s linear infinite;
        }
        @keyframes gridShift {
          0% { background-position: 0 0; }
          100% { background-position: 48px 48px; }
        }

        /* ── Floating geometric shapes ── */
        .geo {
          position: absolute;
          border-radius: 10px;
          pointer-events: none;
          animation: geoFloat linear infinite;
        }
        @keyframes geoFloat {
          0%   { transform: translateY(0px) rotate(0deg); opacity: var(--start-op); }
          50%  { transform: translateY(-18px) rotate(5deg); opacity: calc(var(--start-op) * 1.4); }
          100% { transform: translateY(0px) rotate(0deg); opacity: var(--start-op); }
        }

        /* ── Shimmer line ── */
        .shimmer-line {
          position: absolute;
          left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, rgba(167,139,250,0.5) 30%, rgba(232,121,249,0.8) 50%, rgba(167,139,250,0.5) 70%, transparent 100%);
          animation: shimmerScan 6s ease-in-out infinite;
          top: 0;
        }
        @keyframes shimmerScan {
          0%   { opacity: 0; transform: scaleX(0.3) translateX(-60%); }
          30%  { opacity: 1; }
          70%  { opacity: 1; }
          100% { opacity: 0; transform: scaleX(0.3) translateX(60%); }
        }

        /* ── Noise texture ── */
        .noise {
          position: absolute;
          inset: 0;
          opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          pointer-events: none;
        }

        /* ── Content animations ── */
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px 6px 8px;
          border-radius: 100px;
          background: rgba(124, 58, 237, 0.2);
          border: 1px solid rgba(167, 139, 250, 0.3);
          backdrop-filter: blur(12px);
          animation: fadeSlideDown 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s both;
        }
        .badge-dot {
          width: 8px; height: 8px;
          background: #a855f7;
          border-radius: 50%;
          box-shadow: 0 0 10px #a855f7, 0 0 20px #a855f7;
          animation: dotPulse 2s ease-in-out infinite;
        }
        @keyframes dotPulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 8px #a855f7; }
          50% { transform: scale(1.3); box-shadow: 0 0 16px #c084fc, 0 0 32px #a855f7; }
        }

        .hero-title {
          animation: fadeSlideUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.25s both;
        }
        .hero-gradient-text {
          background: linear-gradient(135deg, #e879f9 0%, #c084fc 40%, #a78bfa 70%, #818cf8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
          display: inline-block;
          animation: textShimmer 4s ease-in-out infinite;
          background-size: 200% 100%;
        }
        @keyframes textShimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .hero-desc {
          animation: fadeSlideUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s both;
        }
        .hero-btns {
          animation: fadeSlideUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.55s both;
        }
        .hero-stats {
          animation: fadeSlideUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.7s both;
        }

        @keyframes fadeSlideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Buttons ── */
        .btn-primary {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #c026d3 100%);
          border: none;
          color: white;
          padding: 15px 36px;
          border-radius: 100px;
          font-weight: 700;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 24px rgba(124, 58, 237, 0.5), inset 0 1px 0 rgba(255,255,255,0.2);
          font-family: 'Outfit', sans-serif;
          display: flex;
          align-items: center;
          gap: 8px;
          white-space: nowrap;
        }
        .btn-primary::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #9333ea 0%, #c026d3 50%, #7c3aed 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .btn-primary:hover::before { opacity: 1; }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(124, 58, 237, 0.7), inset 0 1px 0 rgba(255,255,255,0.2);
        }
        .btn-primary:active { transform: translateY(0); }
        .btn-primary span { position: relative; z-index: 1; }
        .btn-primary .arrow { 
          position: relative; z-index: 1;
          transition: transform 0.3s ease; 
        }
        .btn-primary:hover .arrow { transform: translateX(4px); }

        .btn-outline {
          position: relative;
          overflow: hidden;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(167, 139, 250, 0.4);
          color: rgba(255,255,255,0.9);
          padding: 15px 36px;
          border-radius: 100px;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(12px);
          font-family: 'Outfit', sans-serif;
          display: flex;
          align-items: center;
          gap: 8px;
          white-space: nowrap;
        }
        .btn-outline:hover {
          background: rgba(167, 139, 250, 0.15);
          border-color: rgba(167, 139, 250, 0.7);
          transform: translateY(-2px);
          box-shadow: 0 4px 20px rgba(167, 139, 250, 0.2);
          color: white;
        }
        .btn-outline .arrow { transition: transform 0.3s ease; }
        .btn-outline:hover .arrow { transform: translateX(4px); }

        /* ── Stats ── */
        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
        }
        .stat-value {
          font-size: 26px;
          font-weight: 800;
          background: linear-gradient(135deg, #f0abfc, #c084fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.2;
        }
        .stat-label {
          font-size: 13px;
          color: rgba(255,255,255,0.5);
          font-weight: 400;
          letter-spacing: 0.5px;
        }
        .stat-divider {
          width: 1px;
          height: 36px;
          background: linear-gradient(to bottom, transparent, rgba(167,139,250,0.3), transparent);
          align-self: center;
        }

        /* ── Particle sparks ── */
        .spark {
          position: absolute;
          width: 3px; height: 3px;
          background: #c084fc;
          border-radius: 50%;
          pointer-events: none;
          animation: sparkFly linear infinite;
          box-shadow: 0 0 6px #c084fc;
        }
        @keyframes sparkFly {
          0%   { transform: translate(0, 0) scale(1); opacity: 0.8; }
          100% { transform: translate(var(--tx), var(--ty)) scale(0); opacity: 0; }
        }
      `}</style>

      <section className="hero-section">
        {/* Background layers */}
        <div className="hero-bg-gradient" />
        <div className="noise" />
        <div className="grid-overlay" />
        <div className="shimmer-line" />

        {/* Glowing orbs */}
        <div className="orb orb-1" ref={orbRef1} />
        <div className="orb orb-2" ref={orbRef2} />
        <div className="orb orb-3" />

        {/* Animated geometric shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[
            { top: "6%",  left: "5%",  w: 88, h: 88, border: "2px solid rgba(167,139,250,0.18)", bg: "transparent",         dur: "7s",  del: "0s",   op: "0.5" },
            { top: "18%", left: "14%", w: 52, h: 52, border: "none",                              bg: "rgba(124,58,237,0.12)", dur: "9s",  del: "1s",   op: "0.4" },
            { top: "4%",  left: "28%", w: 36, h: 36, border: "1px solid rgba(232,121,249,0.12)", bg: "transparent",         dur: "11s", del: "2s",   op: "0.3" },
            { top: "8%",  right: "22%",w: 72, h: 72, border: "2px solid rgba(167,139,250,0.15)", bg: "transparent",         dur: "8s",  del: "0.5s", op: "0.45" },
            { top: "20%", right: "7%", w: 96, h: 96, border: "none",                              bg: "rgba(192,38,211,0.08)", dur: "13s", del: "3s",   op: "0.35" },
            { top: "3%",  right: "40%",w: 28, h: 28, border: "none",                              bg: "rgba(167,139,250,0.12)", dur: "6s",  del: "1.5s", op: "0.3" },
            { bottom: "10%", left: "8%",  w: 56, h: 56, border: "1px solid rgba(167,139,250,0.12)", bg: "transparent", dur: "10s", del: "2.5s", op: "0.3" },
            { bottom: "6%",  right: "12%",w: 44, h: 44, border: "none", bg: "rgba(124,58,237,0.1)", dur: "8.5s", del: "0.8s", op: "0.25" },
            { bottom: "18%", left: "30%", w: 32, h: 32, border: "1px solid rgba(232,121,249,0.1)", bg: "transparent", dur: "12s", del: "4s", op: "0.2" },
          ].map((s, i) => (
            <div
              key={i}
              className="geo"
              style={{
                top: s.top, left: s.left, right: s.right, bottom: s.bottom,
                width: s.w, height: s.h,
                border: s.border,
                background: s.bg,
                animationDuration: s.dur,
                animationDelay: s.del,
                "--start-op": s.op,
              } as React.CSSProperties}
            />
          ))}
        </div>

        {/* Spark particles */}
        {[
          { top: "15%", left: "10%",  tx: "40px",  ty: "-60px",  dur: "4s",  del: "0s" },
          { top: "30%", right: "15%", tx: "-30px", ty: "-80px",  dur: "5s",  del: "1.2s" },
          { top: "10%", left: "50%",  tx: "50px",  ty: "50px",   dur: "3.5s",del: "2s" },
          { bottom: "25%", left: "20%", tx: "-50px", ty: "-40px", dur: "4.5s", del: "0.7s" },
          { bottom: "20%", right: "25%",tx: "30px",  ty: "-70px", dur: "6s",   del: "1.5s" },
        ].map((p, i) => (
          <div
            key={i}
            className="spark"
            style={{
              top: p.top, bottom: p.bottom, left: p.left, right: p.right,
              "--tx": p.tx, "--ty": p.ty,
              animationDuration: p.dur,
              animationDelay: p.del,
            } as React.CSSProperties}
          />
        ))}

        {/* Main content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 md:px-16 pt-36 pb-28 gap-7">

          {/* Badge */}
          <div className="hero-badge">
            <div className="badge-dot" />
            <span style={{ fontSize: 15, color: "rgba(216,180,254,0.9)", fontWeight: 600, letterSpacing: "0.5px" }}>
              #1 Performance Network
            </span>
          </div>

          {/* Headline */}
          <h1
            className="hero-title"
            style={{
              fontSize: "clamp(3rem, 5.5vw, 5.5rem)",
              fontWeight: 900,
              lineHeight: 1.1,
              color: "white",
              maxWidth: "960px",
              letterSpacing: "-0.03em",
            }}
          >
            New standard in{" "}
            <span className="hero-gradient-text">performance marketing</span>
          </h1>

          {/* Description */}
          <p
            className="hero-desc"
            style={{
              color: "rgba(200,185,255,0.7)",
              fontSize: "clamp(17px, 1.4vw, 20px)",
              maxWidth: "640px",
              lineHeight: 1.7,
              fontWeight: 400,
            }}
          >
            Marketcall is the best affiliate network to get new clients.
            We generate millions of high-quality conversions every year
            for businesses worldwide.
          </p>

          {/* Buttons */}
          <div className="hero-btns flex flex-col sm:flex-row gap-4 pt-1">
            <button className="btn-primary">
              <span>Get clients</span>
              <span className="arrow">→</span>
            </button>
            <button className="btn-outline">
              Monetize your traffic
              <span className="arrow">→</span>
            </button>
          </div>

          {/* Stats */}
          <div
            className="hero-stats"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "28px",
              marginTop: "12px",
              padding: "18px 32px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(167,139,250,0.15)",
              borderRadius: "20px",
              backdropFilter: "blur(16px)",
            }}
          >
            {[
              { value: "50M+",  label: "Conversions/yr" },
              null,
              { value: "120+",  label: "Countries" },
              null,
              { value: "4.9★",  label: "Partner rating" },
            ].map((item, i) =>
              item === null ? (
                <div key={i} className="stat-divider" />
              ) : (
                <div key={i} className="stat-item">
                  <span className="stat-value">{item.value}</span>
                  <span className="stat-label">{item.label}</span>
                </div>
              )
            )}
          </div>

        </div>
      </section>
    </>
  );
};

export default Hero;