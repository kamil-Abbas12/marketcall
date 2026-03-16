"use client";

import { motion, Variants } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import Image from "next/image";

type HeroProps = {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  avatarUrls?: string[];
  rightImageSrc?: string;
};

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Choose({
  title = "Why choose Marketcall?",
  description = `Marketcall is the best performance marketing solution. We help match advertisers with suitable affiliates, pairing them for long term success in maximizing profits. Our goal is to help you achieve continuous scalable growth.

Our client-first approach drives us to deliver only the highest quality product for our customers.

We have monthly releases of new features to give our advertisers and partners additional tools and functionality.`,
  ctaText = "See our video",
  ctaHref = "#",
  rightImageSrc = "/pic.png",
}: HeroProps) {
  return (
    <section
      className="relative isolate overflow-hidden py-24"
      style={{
        background:
          "linear-gradient(160deg, #0f0c29 0%, #1a1040 40%, #24243e 100%)",
      }}
    >
      {/* Background glow orbs */}
      <div
        className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #7C3AED, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #C026D3, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #6366F1, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 xl:gap-20 z-10">
        {/* LEFT SIDE */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="text-center xl:text-left"
        >
          {/* Badge */}
          <motion.div variants={fadeUp}>
            <span
              className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6 text-purple-300"
              style={{
                background: "rgba(124,58,237,0.2)",
                border: "1px solid rgba(124,58,237,0.4)",
              }}
            >
              Why Us
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-white"
          >
            Why choose{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #A78BFA, #EC4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Marketcall?
            </span>
          </motion.h2>

          {/* Description */}
          <motion.div variants={fadeUp} className="mt-8 space-y-4">
            {description.split("\n\n").map((para, i) => (
              <p key={i} className="text-gray-400 text-sm md:text-base leading-relaxed">
                {para}
              </p>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col gap-5 sm:flex-row items-center xl:justify-start justify-center"
          >
            <a
              href={ctaHref}
              className="group flex items-center gap-3 text-sm font-semibold text-white transition-all duration-200"
            >
              <span
                className="flex items-center justify-center w-12 h-12 rounded-full text-white shadow-lg transition-all duration-200 group-hover:scale-110"
                style={{
                  background: "linear-gradient(135deg, #6366F1, #8B5CF6)",
                  boxShadow: "0 4px 20px rgba(99,102,241,0.5)",
                }}
              >
                <Play size={18} fill="white" />
              </span>
              <span className="group-hover:text-purple-300 transition-colors duration-200">
                {ctaText}
              </span>
              <ArrowRight
                size={14}
                className="text-purple-400 group-hover:translate-x-1 transition-transform duration-200"
              />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            className="mt-12 flex gap-8 xl:justify-start justify-center"
          >
            {[
              { value: "10M+", label: "Conversions/year" },
              { value: "5K+", label: "Active partners" },
              { value: "98%", label: "Satisfaction rate" },
            ].map((stat, i) => (
              <div key={i} className="text-center xl:text-left">
                <div
                  className="text-2xl font-extrabold"
                  style={{
                    background: "linear-gradient(90deg, #A78BFA, #EC4899)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <div className="relative">
          {/* Glow behind image */}
          <div
            className="absolute inset-0 rounded-3xl opacity-30 blur-2xl"
            style={{ background: "linear-gradient(135deg, #7C3AED, #C026D3)" }}
          />

          <motion.div
            className="relative overflow-hidden rounded-3xl"
            style={{
              border: "1px solid rgba(139,92,246,0.3)",
              boxShadow: "0 0 60px rgba(124,58,237,0.3)",
            }}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Top glow line */}
            <div
              className="absolute top-0 left-0 right-0 h-px z-10"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(139,92,246,0.8), transparent)",
              }}
            />

            <div className="relative aspect-[4/3] w-full group overflow-hidden">
              <Image
                src={rightImageSrc}
                alt="Why choose Marketcall"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/30 via-transparent to-pink-900/20" />
            </div>

            {/* Floating badge */}
            <div
              className="absolute bottom-4 left-4 px-4 py-2 rounded-xl text-sm font-semibold text-white backdrop-blur-md"
              style={{
                background: "rgba(124,58,237,0.6)",
                border: "1px solid rgba(139,92,246,0.4)",
              }}
            >
              Trusted by 5,000+ partners
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}