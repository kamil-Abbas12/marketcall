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
    <section className="relative w-full py-24 overflow-hidden" style={{ background: "linear-gradient(160deg, #0f0c29 0%, #1a1040 40%, #24243e 100%)" }}>

      {/* Background glow orbs */}
      <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full opacity-20" style={{ background: "radial-gradient(circle, #7C3AED, transparent 70%)", filter: "blur(60px)" }}></div>
      <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full opacity-20" style={{ background: "radial-gradient(circle, #C026D3, transparent 70%)", filter: "blur(60px)" }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10" style={{ background: "radial-gradient(circle, #6366F1, transparent 70%)", filter: "blur(80px)" }}></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* TITLE */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 text-purple-300" style={{ background: "rgba(124,58,237,0.2)", border: "1px solid rgba(124,58,237,0.4)" }}>
            ✦ Product
          </span>
          <h2 className="text-white text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
            Amplify your online growth {" "}
            <span style={{ background: "linear-gradient(90deg, #A78BFA, #EC4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              with Marketcall
            </span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base">
One powerful hub to accelerate your marketing strategy          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* ADVERTISERS */}
          <div
            className="group relative rounded-2xl p-8 pb-40 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
            style={{
              background: "linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(124,58,237,0.1) 100%)",
              border: "1px solid rgba(99,102,241,0.3)",
              boxShadow: "0 0 0 rgba(99,102,241,0)",
            }}
            onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 0 40px rgba(99,102,241,0.3)")}
            onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 0 0 rgba(99,102,241,0)")}
          >
            {/* Card glow top */}
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.8), transparent)" }}></div>

            <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-indigo-300 mb-4" style={{ background: "rgba(99,102,241,0.2)", border: "1px solid rgba(99,102,241,0.3)" }}>
              For Advertisers
            </div>

            <h3 className="text-2xl text-white font-bold mb-4">Advertisers</h3>

            <p className="text-gray-400 mb-6 leading-relaxed">
             I’m an advertiser, app developer, service provider, or agency ready to connect with the right audience and maximize ROI.
            </p>

            <ul className="space-y-3 mb-8">
              {["Partner with elite affiliates", "Simple, intuitive platform", "Work from anywhere", 
              "Pay only for verified calls", "In-depth reporting and insights"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center" style={{ background: "rgba(34,197,94,0.2)", border: "1px solid rgba(34,197,94,0.4)" }}>
                    <Check size={11} className="text-green-400" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <button className="group/btn flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-200 hover:gap-3"
              style={{ background: "linear-gradient(135deg, #6366F1, #8B5CF6)", boxShadow: "0 4px 20px rgba(99,102,241,0.4)" }}>
              See all features <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
            </button>

            <Image src="/boy.png" width={220} height={200} alt="advertiser"
              className="hidden sm:block absolute bottom-0 right-[-20px] opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:right-0" />
          </div>

          {/* PARTNERS */}
          <div
            className="group relative rounded-2xl p-8 pb-40 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
            style={{
              background: "linear-gradient(135deg, rgba(192,38,211,0.15) 0%, rgba(236,72,153,0.1) 100%)",
              border: "1px solid rgba(192,38,211,0.3)",
              boxShadow: "0 0 0 rgba(192,38,211,0)",
            }}
            onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 0 40px rgba(192,38,211,0.3)")}
            onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 0 0 rgba(192,38,211,0)")}
          >
            {/* Card glow top */}
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(192,38,211,0.8), transparent)" }}></div>

            <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-pink-300 mb-4" style={{ background: "rgba(192,38,211,0.2)", border: "1px solid rgba(192,38,211,0.3)" }}>
              For Partners
            </div>

            <h3 className="text-2xl text-white font-bold mb-4">Partners</h3>

            <p className="text-gray-400 mb-6 leading-relaxed">
              I’m a publisher, website owner, influencer, email marketer, or app developer eager to promote top brands and maximize my revenue potential.
            </p>

            <ul className="space-y-3 mb-8">
              {["Curated high-value offers", "Consistent weekly payments", "Free, ready-to-use promo tools", 
              "Access to exclusive categories", "Strong conversion rates"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center" style={{ background: "rgba(34,197,94,0.2)", border: "1px solid rgba(34,197,94,0.4)" }}>
                    <Check size={11} className="text-green-400" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <button className="group/btn flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-200 hover:gap-3"
              style={{ background: "linear-gradient(135deg, #C026D3, #EC4899)", boxShadow: "0 4px 20px rgba(192,38,211,0.4)" }}>
              Become a partner <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
            </button>

            <Image src="/man.png" width={220} height={120} alt="partner"
              className="hidden sm:block absolute bottom-0 right-[-20px] opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:right-0" />
          </div>
        </div>

        {/* FEATURES */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-16">
          {[
            { icon: Settings, text: "Marketing tools", color: "#6366F1" },
            { icon: Shield, text: "Fraud prevention", color: "#8B5CF6" },
            { icon: Cpu, text: "Automation", color: "#A855F7" },
            { icon: Users, text: "Lead generation", color: "#C026D3" },
            { icon: DollarSign, text: "Payouts", color: "#EC4899" },
            { icon: Headphones, text: "Dedicated Support", color: "#6366F1" },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group flex flex-col items-center justify-center rounded-xl py-6 px-3 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = `rgba(${item.color === "#6366F1" ? "99,102,241" : item.color === "#8B5CF6" ? "139,92,246" : item.color === "#A855F7" ? "168,85,247" : item.color === "#C026D3" ? "192,38,211" : "236,72,153"},0.15)`;
                  e.currentTarget.style.border = `1px solid ${item.color}44`;
                  e.currentTarget.style.boxShadow = `0 0 24px ${item.color}33`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                  e.currentTarget.style.border = "1px solid rgba(255,255,255,0.08)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div className="p-3 rounded-xl mb-3 transition-all duration-300" style={{ background: `${item.color}22`, border: `1px solid ${item.color}44` }}>
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