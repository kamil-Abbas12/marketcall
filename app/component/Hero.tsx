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
      if (orbRef1.current) orbRef1.current.style.transform = `translate(${dx * 24}px, ${dy * 24}px)`;
      if (orbRef2.current) orbRef2.current.style.transform = `translate(${-dx * 18}px, ${-dy * 18}px)`;
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
  min-height: 620px;
  background: #07090f;
}

.hero-bg-gradient {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 80% 60% at 20% -10%, #0d2a5533 0%, transparent 60%),
    radial-gradient(ellipse 60% 50% at 80% 110%, #0a243d33 0%, transparent 55%),
    radial-gradient(ellipse 50% 70% at 50% 50%, #091520cc 0%, transparent 80%),
    linear-gradient(160deg, #07090f 0%, #080e1a 40%, #090d18 100%);
  animation: bgPulse 8s ease-in-out infinite alternate;
}

@keyframes bgPulse {
  0%   { filter: brightness(1); }
  100% { filter: brightness(1.12); }
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  transition: transform .6s cubic-bezier(.25,.46,.45,.94);
  pointer-events: none;
}
.orb-1 {
  width: 520px; height: 520px;
  top: -160px; left: -100px;
  background: radial-gradient(circle, #1d4ed855 0%, #1e3a8a33 50%, transparent 70%);
}
.orb-2 {
  width: 420px; height: 420px;
  bottom: -140px; right: -80px;
  background: radial-gradient(circle, #0369a144 0%, #0c4a6e33 50%, transparent 70%);
}
.orb-3 {
  width: 260px; height: 260px;
  top: 50%; left: 55%;
  background: radial-gradient(circle, #0ea5e922 0%, transparent 70%);
}

.grid-overlay {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(96,165,250,.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(96,165,250,.04) 1px, transparent 1px);
  background-size: 48px 48px;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  padding: 6px 18px;
  border-radius: 100px;
  background: rgba(255,255,255,.05);
  border: 1px solid rgba(255,255,255,.12);
  backdrop-filter: blur(12px);
  font-size: 13px;
  letter-spacing: .08em;
  color: rgba(200,210,230,.7);
  font-weight: 600;
  text-transform: uppercase;
}

.hero-title {
  font-weight: 900;
  color: white;
  line-height: 1.08;
  letter-spacing: -.02em;
}

.hero-gradient-text {
  background: linear-gradient(135deg, #4cc9f0 0%, #4ea8de 35%, #3b82f6 65%, #2563eb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-desc {
  color: rgba(140,160,185,.7);
  font-weight: 400;
  line-height: 1.65;
}

.btn-primary {
  background: linear-gradient(135deg, #1d4ed8 0%, #2563eb 50%, #3b82f6 100%);
  border: none; color: white;
  padding: 16px 40px; border-radius: 100px;
  font-weight: 700; font-size: 16px; cursor: pointer;
  font-family: 'Outfit', sans-serif;
  display: flex; align-items: center; gap: 8px;
  transition: .3s;
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(37,99,235,.45);
}

.btn-outline {
  background: rgba(255,255,255,.05);
  border: 1px solid rgba(96,165,250,.3);
  color: white; padding: 16px 36px; border-radius: 100px;
  font-weight: 600; font-size: 16px; cursor: pointer;
  font-family: 'Outfit', sans-serif;
  transition: .3s;
}
.btn-outline:hover { background: rgba(96,165,250,.12); }

.stat-item { display: flex; flex-direction: column; align-items: center; }
.stat-value {
  font-size: 26px; font-weight: 800;
  background: linear-gradient(135deg, #60a5fa, #22d3ee);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
}
.stat-label { font-size: 13px; color: rgba(255,255,255,.5); }
.stat-divider { width: 1px; height: 36px; background: rgba(148,163,184,.2); }
      `}</style>

      <section className="hero-section">
        <div className="hero-bg-gradient" />
        <div className="grid-overlay" />
        <div className="orb orb-1" ref={orbRef1} />
        <div className="orb orb-2" ref={orbRef2} />
        <div className="orb orb-3" />

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 md:px-16 pt-36 pb-28 gap-7">

          <div className="hero-badge">#1 Performance Network</div>

          <h1 className="hero-title" style={{ fontSize: "clamp(2.8rem,5.5vw,5.2rem)", maxWidth: "900px" }}>
            Elevating success in{" "}
            <span className="hero-gradient-text">performance marketing</span>
          </h1>

          <p className="hero-desc" style={{ fontSize: "clamp(16px,1.3vw,19px)", maxWidth: "600px" }}>
            Your gateway to new clients.Hawks Media  powers millions of trusted conversions every year.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-1">
            <button className="btn-primary"><span>Get clients</span> →</button>
            <button className="btn-outline">Monetize your traffic →</button>
          </div>

          <div style={{ display:"flex", alignItems:"center", gap:"28px", marginTop:"12px", padding:"18px 32px", background:"rgba(255,255,255,0.04)", border:"1px solid rgba(148,163,184,.12)", borderRadius:"20px", backdropFilter:"blur(16px)" }}>
            <div className="stat-item"><span className="stat-value">50M+</span><span className="stat-label">Conversions/yr</span></div>
            <div className="stat-divider" />
            <div className="stat-item"><span className="stat-value">120+</span><span className="stat-label">Countries</span></div>
            <div className="stat-divider" />
            <div className="stat-item"><span className="stat-value">4.9★</span><span className="stat-label">Partner rating</span></div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Hero;