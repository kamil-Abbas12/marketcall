"use client";

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
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;800;900&display=swap');

        .hero-section {
          font-family: 'Outfit', sans-serif;
          position: relative;
          overflow: hidden;
          isolation: isolate;
          min-height: 620px;
          background: linear-gradient(180deg, #060913 0%, #08101d 48%, #060a12 100%);
        }

        .hero-bg-base {
          position: absolute;
          inset: 0;
          z-index: 0;
          background:
            radial-gradient(circle at 50% 20%, rgba(59,130,246,0.10) 0%, transparent 38%),
            linear-gradient(180deg, #060913 0%, #08101d 48%, #060a12 100%);
        }

        .hero-grid-overlay {
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
          mask-image: radial-gradient(circle at center, black 72%, transparent 100%);
          -webkit-mask-image: radial-gradient(circle at center, black 72%, transparent 100%);
        }

        .ambient-glow {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          transition: transform .6s cubic-bezier(.25,.46,.45,.94);
          z-index: 0;
        }

        .ambient-glow-1 {
          width: 560px;
          height: 560px;
          top: -180px;
          left: -120px;
          background:
            radial-gradient(circle, rgba(37,99,235,.46) 0%, rgba(30,64,175,.24) 42%, transparent 72%);
          filter: blur(90px);
        }

        .ambient-glow-2 {
          width: 460px;
          height: 460px;
          bottom: -160px;
          right: -90px;
          background:
            radial-gradient(circle, rgba(14,165,233,.34) 0%, rgba(3,105,161,.18) 45%, transparent 72%);
          filter: blur(90px);
        }

        .ambient-glow-3 {
          width: 320px;
          height: 320px;
          top: 50%;
          left: 52%;
          transform: translate(-50%, -50%);
          background:
            radial-gradient(circle, rgba(59,130,246,.16) 0%, transparent 72%);
          filter: blur(80px);
        }

        .hero-content {
          position: relative;
          z-index: 2;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 18px;
          border-radius: 100px;
          background: rgba(37,99,235,.14);
          border: 1px solid rgba(96,165,250,.24);
          box-shadow: 0 8px 24px rgba(15,23,42,.18);
          backdrop-filter: blur(12px);
          font-size: 13px;
          letter-spacing: .08em;
          color: #93c5fd;
          font-weight: 700;
          text-transform: uppercase;
        }

        .hero-badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 999px;
          background: #60a5fa;
          display: inline-block;
        }

        .hero-title {
          font-weight: 900;
          color: white;
          line-height: 1.08;
          letter-spacing: -.02em;
        }

        .hero-gradient-text {
          background: linear-gradient(135deg, #dbeafe 0%, #93c5fd 26%, #60a5fa 55%, #38bdf8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-desc {
          color: rgba(191,219,254,.78);
          font-weight: 400;
          line-height: 1.65;
        }

        .btn-primary {
          background: linear-gradient(135deg, #1d4ed8 0%, #2563eb 50%, #3b82f6 100%);
          border: none;
          color: white;
          padding: 16px 40px;
          border-radius: 100px;
          font-weight: 700;
          font-size: 16px;
          cursor: pointer;
          font-family: 'Outfit', sans-serif;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: .3s;
          box-shadow: 0 12px 28px rgba(37,99,235,.28);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 34px rgba(37,99,235,.45);
        }

        .btn-outline {
          background: rgba(15,23,42,.46);
          border: 1px solid rgba(96,165,250,.24);
          color: #dbeafe;
          padding: 16px 36px;
          border-radius: 100px;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          font-family: 'Outfit', sans-serif;
          transition: .3s;
          backdrop-filter: blur(12px);
        }

        .btn-outline:hover {
          background: rgba(96,165,250,.12);
          border-color: rgba(96,165,250,.34);
        }

        .hero-stats-wrap {
          display: flex;
          align-items: center;
          gap: 28px;
          margin-top: 12px;
          padding: 18px 32px;
          background: rgba(15,23,42,.52);
          border: 1px solid rgba(96,165,250,.18);
          border-radius: 20px;
          backdrop-filter: blur(16px);
          box-shadow: 0 10px 30px rgba(2,6,23,.24);
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .stat-value {
          font-size: 26px;
          font-weight: 800;
          background: linear-gradient(135deg, #dbeafe, #60a5fa, #22d3ee);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .stat-label {
          font-size: 13px;
          color: rgba(191,219,254,.60);
        }

        .stat-divider {
          width: 1px;
          height: 36px;
          background: rgba(148,163,184,.22);
        }

        @media (max-width: 640px) {
          .hero-stats-wrap {
            flex-wrap: wrap;
            justify-content: center;
            gap: 18px;
            padding: 18px 20px;
          }

          .stat-divider {
            display: none;
          }
        }
      `}</style>

      <section className="hero-section">
        <div className="hero-bg-base" />
        <div className="ambient-glow ambient-glow-1" ref={orbRef1} />
        <div className="ambient-glow ambient-glow-2" ref={orbRef2} />
        <div className="ambient-glow ambient-glow-3" />
        <div className="hero-grid-overlay" />

        <div className="hero-content flex flex-col items-center justify-center text-center px-6 md:px-16 pt-36 pb-28 gap-7">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            #1 Performance Network
          </div>

          <h1
            className="hero-title"
            style={{ fontSize: "clamp(2.8rem,5.5vw,5.2rem)", maxWidth: "900px" }}
          >
            Elevating success in{" "}
            <span className="hero-gradient-text">performance marketing</span>
          </h1>

          <p
            className="hero-desc"
            style={{ fontSize: "clamp(16px,1.3vw,19px)", maxWidth: "600px" }}
          >
            Your gateway to new clients. Hawks Media powers millions of trusted
            conversions every year.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-1">
            <button className="btn-primary">
              <span>Get clients</span> →
            </button>
            <button className="btn-outline">Monetize your traffic →</button>
          </div>

          <div className="hero-stats-wrap">
            <div className="stat-item">
              <span className="stat-value">50M+</span>
              <span className="stat-label">Conversions/yr</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-value">120+</span>
              <span className="stat-label">Countries</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-value">4.9★</span>
              <span className="stat-label">Partner rating</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
