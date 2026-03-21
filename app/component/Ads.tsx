"use client";

import { motion, useInView } from "framer-motion";
import { Rocket, DollarSign, PhoneCall } from "lucide-react";
import React, { useRef } from "react";
import CountUp from "react-countup";

const stats = [
  {
    number: 339112,
    label: "Successful ad campaigns",
    icon: <Rocket size={28} />,
    suffix: "+",
    prefix: "",
  },
  {
    number: 231328477,
    label: "Earned by our affiliates",
    icon: <DollarSign size={28} />,
    suffix: "+",
    prefix: "$",
  },
  {
    number: 15166097,
    label: "Calls attracted",
    icon: <PhoneCall size={28} />,
    suffix: "+",
    prefix: "",
  },
];

const Ads = () => {
  return (
    <section
      className="relative w-full py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #eff6ff 0%, #f8fafc 50%, #eef2ff 100%)",
      }}
    >
      {/* Background glow */}
      <div
        className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full opacity-30 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #93c5fd, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full opacity-30 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #60a5fa, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{
              color: "#1d4ed8",
              background: "rgba(37,99,235,0.08)",
              border: "1px solid rgba(37,99,235,0.25)",
            }}
          >
            Our Impact
          </span>

          <h2
            className="text-3xl md:text-4xl font-extrabold mb-3"
            style={{ color: "#1e293b" }}
          >
            Metrics that{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #2563eb, #3b82f6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              prove success
            </span>
          </h2>

          <p
            style={{ color: "#6b7280" }}
            className="w-full mx-auto text-md md:text-base"
          >
            Real impact from real campaigns. Discover how Hawks Media empowers
            advertisers and affiliates worldwide with measurable success.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {stats.map((stat, index) => {
            const ref = useRef(null);
            const inView = useInView(ref, { once: true });

            return (
              <motion.div
                key={index}
                ref={ref}
                className="group relative flex flex-col justify-center items-center text-center
                  p-10 rounded-2xl cursor-pointer overflow-hidden transition-transform
                  duration-300 hover:scale-[1.03]"
                style={{
                  background: "rgba(255,255,255,0.75)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(37,99,235,0.14)",
                  boxShadow:
                    "0 4px 24px rgba(37,99,235,0.08), 0 1px 4px rgba(0,0,0,0.04)",
                }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.7, ease: "easeOut" },
                  },
                }}
              >
                {/* Top shimmer line */}
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(37,99,235,0.5), transparent)",
                  }}
                />

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6
                    transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(37,99,235,0.1), rgba(59,130,246,0.1))",
                    border: "1px solid rgba(37,99,235,0.2)",
                    color: "#2563eb",
                  }}
                >
                  {stat.icon}
                </div>

                {/* Number */}
                <div
                  className="text-2xl md:text-3xl xl:text-5xl font-extrabold mb-2"
                  style={{
                    background: "linear-gradient(90deg, #2563eb, #3b82f6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {inView && (
                    <CountUp
                      start={0}
                      end={stat.number}
                      duration={2.5}
                      separator=","
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  )}
                </div>

                {/* Label */}
                <p
                  className="text-sm md:text-base font-medium"
                  style={{ color: "#475569" }}
                >
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Ads;