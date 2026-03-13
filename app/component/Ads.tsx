"use client";

import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  { number: 339112, label: "Successful ad campaigns" },
  { number: 231328477, label: "Earned so far by our affiliates", prefix: "$" },
  { number: 15166097, label: "Calls attracted" },
];

const Ads = () => {
  return (
    <section className="w-full py-10 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="flex flex-col justify-center items-center space-y-2 p-4 rounded-lg shadow-md bg-gray-50"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
              }}
            >
              <h1 className="text-xl md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900">
                <CountUp
                  start={0}
                  end={stat.number}
                  duration={2.5}
                  separator=","
                  prefix={stat.prefix || ""}
                />
              </h1>
              <h3 className="text-gray-600 text-md md:text-lg text-center">{stat.label}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Ads;