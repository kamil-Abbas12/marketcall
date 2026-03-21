"use client";

import { motion, Variants } from "framer-motion";
import { Play, ArrowRight, Users, Shield, Zap } from "lucide-react";
import Image from "next/image";

type HeroProps = {
  ctaText?: string;
  ctaHref?: string;
  rightImageSrc?: string;
};

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const points = [
  {
    icon: Users,
    title: "Performance-First Partnerships",
    body: "We connect advertisers with elite affiliates, building long-term partnerships that maximize profits and fuel sustainable growth.",
  },
  {
    icon: Shield,
    title: "Client-First Excellence",
    body: "Our client-first mindset ensures we deliver only the highest-quality solutions designed to empower your success at every stage.",
  },
  {
    icon: Zap,
    title: "Continuous Innovation",
    body: "With monthly feature releases, we equip advertisers and partners with fresh tools and advanced functionality to stay ahead.",
  },
];

const stats = [
  { value: "10M+", label: "Conversions/year" },
  { value: "5K+",  label: "Active partners"  },
  { value: "98%",  label: "Satisfaction rate" },
];

export default function Choose({

  rightImageSrc = "/pic.png",
}: HeroProps) {
  return (
    <section
      className="relative isolate overflow-hidden py-24"
      style={{ background: "#07090f" }}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 20% -10%, #0d2a5533 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 110%, #0a243d33 0%, transparent 55%), radial-gradient(ellipse 50% 70% at 50% 50%, #091520cc 0%, transparent 80%), linear-gradient(160deg, #07090f 0%, #080e1a 40%, #090d18 100%)",
          animation: "bgPulse 8s ease-in-out infinite alternate",
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(96,165,250,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Orbs */}
      <div
        className="absolute top-[-120px] right-[-120px] w-[450px] h-[450px] rounded-full opacity-25 pointer-events-none"
        style={{ background: "radial-gradient(circle, #1d4ed8, transparent 70%)", filter: "blur(70px)" }}
      />
      <div
        className="absolute bottom-[-120px] left-[-120px] w-[400px] h-[400px] rounded-full opacity-18 pointer-events-none"
        style={{ background: "radial-gradient(circle, #0369a1, transparent 70%)", filter: "blur(70px)" }}
      />

      <style>{`
        @keyframes bgPulse {
          0%   { filter: brightness(1); }
          100% { filter: brightness(1.12); }
        }
      `}</style>

      <div className="relative z-10 mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 gap-16 xl:gap-20 items-center">

        {/* LEFT */}
        <motion.div variants={container} initial="hidden" animate="show">

          <motion.div variants={fadeUp}>
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-6 uppercase tracking-widest"
              style={{
                color: "rgba(200,215,235,.7)",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              ✦ Why Us
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-black leading-tight text-white mb-8"
            style={{ letterSpacing: "-.025em" }}
          >
            Why Hawks Media{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #4cc9f0 0%, #4ea8de 35%, #3b82f6 65%, #2563eb 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              stands out?
            </span>
          </motion.h2>

          {/* Feature points */}
          <motion.div variants={fadeUp} className="space-y-0 mb-10">
            {points.map((pt, i) => {
              const Icon = pt.icon;
              return (
                <div
                  key={i}
                  className="flex items-start gap-4 py-5"
                  style={{ borderBottom: i < points.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none" }}
                >
                  <div
                    className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center mt-0.5"
                    style={{ background: "rgba(59,130,246,0.12)", border: "1px solid rgba(59,130,246,0.22)" }}
                  >
                    <Icon size={16} style={{ color: "#60a5fa" }} />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">{pt.title}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(148,163,184,.75)" }}>{pt.body}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* CTA */}
          <motion.div variants={fadeUp} className="mb-10">
          
          </motion.div>

          {/* Stats */}
          <motion.div variants={fadeUp} className="flex rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex-1 px-6 py-5"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
                }}
              >
                <div
                  className="text-2xl font-extrabold leading-none mb-1"
                  style={{
                    background: "linear-gradient(135deg, #4cc9f0, #3b82f6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-xs font-medium" style={{ color: "rgba(148,163,184,.55)", letterSpacing: ".03em" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

        </motion.div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          {/* Glow */}
          <div
            className="absolute inset-0 rounded-3xl opacity-40 blur-3xl"
            style={{ background: "linear-gradient(135deg, #1d4ed8, #0369a1)" }}
          />

          <motion.div
            className="relative rounded-3xl overflow-hidden"
            style={{
              border: "1px solid rgba(255,255,255,0.14)",
              boxShadow: "0 0 60px rgba(29,78,216,0.2), inset 0 1px 0 rgba(255,255,255,0.08)",
            }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Top shimmer */}
            <div
              className="absolute top-0 left-0 right-0 h-px z-10"
              style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.75), transparent)" }}
            />

            <div className="relative w-full overflow-hidden group" style={{ aspectRatio: "4/3" }}>
              <Image
                src={rightImageSrc}
                alt="Why choose Hawks Media"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to bottom right, rgba(15,23,42,0.2), transparent, rgba(15,23,42,0.15))" }}
              />
            </div>

            {/* Bottom badge */}
            <div
              className="absolute bottom-4 left-4 flex items-center gap-3 px-4 py-2.5 rounded-2xl backdrop-blur-xl"
              style={{ background: "rgba(7,9,15,0.75)", border: "1px solid rgba(255,255,255,0.16)" }}
            >
              <div
                className="w-2 h-2 rounded-full"
                style={{ background: "#22c55e", boxShadow: "0 0 8px #22c55e" }}
              />
              <div>
                <p className="text-white text-xs font-semibold leading-none mb-0.5">Trusted Network</p>
                <p className="text-xs" style={{ color: "rgba(148,163,184,.65)" }}>5,000+ active partners</p>
              </div>
            </div>

            {/* Top right stat */}
            <div
              className="absolute top-4 right-4 px-4 py-2.5 rounded-2xl backdrop-blur-xl text-center"
              style={{ background: "rgba(7,9,15,0.75)", border: "1px solid rgba(255,255,255,0.15)" }}
            >
              <p className="text-xl font-extrabold text-blue-400 leading-none">98%</p>
              <p className="text-xs mt-0.5" style={{ color: "rgba(148,163,184,.6)" }}>Retention rate</p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}