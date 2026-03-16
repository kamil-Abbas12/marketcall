"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Rocket, DollarSign, PhoneCall } from "lucide-react";
import React, { useEffect, useState } from "react";
// Dynamically import CountUp for client-side only
const CountUp = dynamic(() => import("react-countup"), { ssr: false });

const stats = [
  { number: 339112, label: "Successful ad campaigns", icon: <Rocket size={28} />, suffix: "+" },
  { number: 231328477, label: "Earned by our affiliates", icon: <DollarSign size={28} />, prefix: "$", suffix: "+" },
  { number: 15166097, label: "Calls attracted", icon: <PhoneCall size={28} />, suffix: "+" },
];

const Ads = () => {
  const [mounted, setMounted] = useState(false);
 useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <section
      className="relative w-full py-24 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #f5f3ff 0%, #fdf4ff 50%, #eff6ff 100%)" }}
    >
      {/* Background glow orbs */}
      <div
        className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(circle, #c4b5fd, transparent 70%)", filter: "blur(60px)" }}
      />
      <div
        className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(circle, #f0abfc, transparent 70%)", filter: "blur(60px)" }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 text-violet-600"
            style={{ background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.25)" }}
          >
            Our Impact
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Metrics that {" "}
            <span style={{ background: "linear-gradient(90deg, #7C3AED, #C026D3)",
               WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
prove success
            </span>
          </h2>
          <p className="text-gray-500 w-full mx-auto text-md md:text-base">
            Real impact from real campaigns.  
Discover how Marketcall empowers advertisers and affiliates worldwide with measurable success.
 
          </p>
        </motion.div>

        {/* Stats cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="group relative flex flex-col justify-center items-center text-center 
              p-10 rounded-2xl bg-white cursor-pointer overflow-hidden transition-transform 
              duration-300 hover:scale-[1.03]"
              style={{ border: "1px solid rgba(124,58,237,0.12)", boxShadow: "0 4px 24px rgba(124,58,237,0.06), 0 1px 4px rgba(0,0,0,0.04)" }}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl flex
               items-center justify-center text-2xl mb-6 transition-transform duration-300 group-hover:scale-110"
                style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.1), rgba(192,38,211,0.1))",
                   border: "1px solid rgba(124,58,237,0.15)" }}
              >
                {stat.icon}
              </div>

              {/* Number */}
            <div
  className="text-2xl md:text-3xl  xl:text-5xl font-extrabold mb-2"
  style={{
    background: "linear-gradient(90deg, #7C3AED, #C026D3)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  }}
>
{mounted && (
  <CountUp
    start={0}
    end={stat.number}
    duration={2.5}
    separator=","
    prefix={stat.prefix || ""}
    suffix={stat.suffix || ""}
  >
    {({ countUpRef }) => <span ref={countUpRef} />}
  </CountUp>
)}
</div>

              {/* Label */}
              <p className="text-gray-500 text-sm md:text-base font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Ads;