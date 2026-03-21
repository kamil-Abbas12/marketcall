"use client";

import {
  Settings,
  Shield,
  Cpu,
  Users,
  DollarSign,
  Headphones,
  Check,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

export default function Product() {
  return (
    <section
      className="relative w-full py-24 overflow-hidden"
      style={{ background: "#07090f" }}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 20% -10%, #0d2a5533 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 110%, #0a243d33 0%, transparent 55%), radial-gradient(ellipse 50% 70% at 50% 50%, #091520cc 0%, transparent 80%), linear-gradient(160deg, #07090f 0%, #080e1a 40%, #090d18 100%)",
          animation: "bgPulse 8s ease-in-out infinite alternate",
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(96,165,250,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Orbs */}
      <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full opacity-25" style={{ background: "radial-gradient(circle, #1d4ed8, transparent 70%)", filter: "blur(70px)" }} />
      <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full opacity-20" style={{ background: "radial-gradient(circle, #0369a1, transparent 70%)", filter: "blur(70px)" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10" style={{ background: "radial-gradient(circle, #1e3a8a, transparent 70%)", filter: "blur(90px)" }} />

      <style>{`
        @keyframes bgPulse {
          0%   { filter: brightness(1); }
          100% { filter: brightness(1.12); }
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* TITLE */}
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{
              color: "rgba(200,210,230,.75)",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.12)",
              letterSpacing: ".07em",
              textTransform: "uppercase",
              fontSize: "12px",
            }}
          >
            ✦ Product
          </span>
          <h2
            className="text-white text-3xl md:text-5xl font-extrabold mb-4 leading-tight"
            style={{ letterSpacing: "-.02em" }}
          >
            Amplify your online growth{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #4cc9f0 0%, #4ea8de 35%, #3b82f6 65%, #2563eb 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              with Hawks Media
            </span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base">
            One powerful hub to accelerate your marketing strategy
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* ADVERTISERS — frosted white (matching Partners) */}
          <div
            className="group relative rounded-2xl p-8 pb-40 overflow-hidden transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
              border: "1px solid rgba(255,255,255,0.18)",
              boxShadow: "0 0 0 rgba(255,255,255,0)",
            }}
            onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 0 40px rgba(255,255,255,0.1)")}
            onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 0 0 rgba(255,255,255,0)")}
          >
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.9), transparent)" }} />

            <div
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
              style={{ color: "#e2e8f0", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.22)" }}
            >
              For Advertisers
            </div>

            <h3 className="text-2xl text-white font-bold mb-4">Advertisers</h3>

            <p className="text-gray-400 mb-6 leading-relaxed">
              I'm an advertiser, app developer, service provider, or agency ready to connect with the right audience and maximize ROI.
            </p>

            <ul className="space-y-3 mb-8">
              {["Partner with elite affiliates", "Simple, intuitive platform", "Work from anywhere",
                "Pay only for verified calls", "In-depth reporting and insights"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <span
                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(34,197,94,0.2)", border: "1px solid rgba(34,197,94,0.4)" }}
                  >
                    <Check size={11} className="text-green-400" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <button
              className="group/btn flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-200 hover:gap-3"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.07))",
                border: "1px solid rgba(255,255,255,0.28)",
                boxShadow: "0 4px 20px rgba(255,255,255,0.08)",
                backdropFilter: "blur(12px)",
              }}
            >
              See all features <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
            </button>

            <Image
              src="/boy.png" width={220} height={200} alt="advertiser"
              className="hidden sm:block absolute bottom-0 right-[-20px] opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:right-0"
            />
          </div>

          {/* PARTNERS — frosted white */}
          <div
            className="group relative rounded-2xl p-8 pb-40 overflow-hidden transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
              border: "1px solid rgba(255,255,255,0.18)",
              boxShadow: "0 0 0 rgba(255,255,255,0)",
            }}
            onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 0 40px rgba(255,255,255,0.1)")}
            onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 0 0 rgba(255,255,255,0)")}
          >
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.9), transparent)" }} />

            <div
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
              style={{ color: "#e2e8f0", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.22)" }}
            >
              For Partners
            </div>

            <h3 className="text-2xl text-white font-bold mb-4">Partners</h3>

            <p className="text-gray-400 mb-6 leading-relaxed">
              I'm a publisher, website owner, influencer, email marketer, or app developer eager to promote top brands and maximize my revenue potential.
            </p>

            <ul className="space-y-3 mb-8">
              {["Curated high-value offers", "Consistent weekly payments", "Free, ready-to-use promo tools",
                "Access to exclusive categories", "Strong conversion rates"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <span
                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(34,197,94,0.2)", border: "1px solid rgba(34,197,94,0.4)" }}
                  >
                    <Check size={11} className="text-green-400" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <button
              className="group/btn flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-200 hover:gap-3"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.07))",
                border: "1px solid rgba(255,255,255,0.28)",
                boxShadow: "0 4px 20px rgba(255,255,255,0.08)",
                backdropFilter: "blur(12px)",
              }}
            >
              Become a partner <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
            </button>

            <Image
              src="/man.png" width={220} height={120} alt="partner"
              className="hidden sm:block absolute bottom-0 right-[-20px] opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:right-0"
            />
          </div>

        </div>

        {/* FEATURES */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-16">
          {[
            { icon: Settings,   text: "Marketing tools",   color: "#e2e8f0", rgb: "226,232,240" },
            { icon: Shield,     text: "Fraud prevention",  color: "#cbd5e1", rgb: "203,213,225" },
            { icon: Cpu,        text: "Automation",        color: "#e2e8f0", rgb: "226,232,240" },
            { icon: Users,      text: "Lead generation",   color: "#cbd5e1", rgb: "203,213,225" },
            { icon: DollarSign, text: "Payouts",           color: "#e2e8f0", rgb: "226,232,240" },
            { icon: Headphones, text: "Dedicated Support", color: "#cbd5e1", rgb: "203,213,225" },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group flex flex-col items-center justify-center rounded-xl py-6 px-3 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.border = "1px solid rgba(255,255,255,0.25)";
                  e.currentTarget.style.boxShadow = "0 0 24px rgba(255,255,255,0.08)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                  e.currentTarget.style.border = "1px solid rgba(255,255,255,0.08)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  className="p-3 rounded-xl mb-3"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.15)",
                  }}
                >
                  <Icon size={22} style={{ color: item.color }} />
                </div>
                <span className="text-xs text-gray-400 text-center font-medium group-hover:text-white transition-colors duration-200">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}