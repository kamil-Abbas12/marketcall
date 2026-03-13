"use client";
import { motion, Variants } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";

type HeroProps = {
  label?: string;
  title?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  customersCount?: string;
  customersLabel?: string;
  avatarUrls?: string[];
//   years?: string;
//   yearsLabel?: string;
  rightImageSrc?: string;
};

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function Choose({
  title = "Why choose Marketcall?",
  description = `Marketcall is the best performance marketing solution. We help match advertisers with suitable affiliates, pairing them for long term success in maximizing profits. Our goal is to help you achieve continuous scalable growth.

Our client-first approach drives us to deliver only the highest quality product for our customers.

We have monthly releases of new features to give our advertisers and partners additional tools and functionality.`,
  ctaText = "See our video",
  ctaHref = "#",
 
  avatarUrls = [],
  
  rightImageSrc = "/call.jpg",
}: HeroProps) {
  const titleLines = title.split("\n");

  return (
   <section className="relative isolate overflow-hidden py-20 bg-white">
  {/* Background blobs */}
  

  {/* Content */}
  <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2 xl:gap-20">
    {/* LEFT SIDE */}
    <motion.div variants={container} initial="hidden" animate="show" className="text-gray-900 text-center xl:text-left">
      <motion.h1 variants={fadeUp} className="mt-4 text-4xl font-extrabold leading-tight tracking-tight md:text-4xl">
        {titleLines.map((line, idx) => (
          <span key={idx}>
            {line}
            {idx !== titleLines.length - 1 && <br />}
          </span>
        ))}
      </motion.h1>

   

      <motion.p variants={fadeUp} className="mt-10 max-w-xl whitespace-pre-line text-sm md:text-base leading-relaxed
       text-gray-800">
        {description}
      </motion.p>
       <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-5 sm:flex-row items-center">
  <a
    href={ctaHref}
    className="flex items-center gap-3 text-sm font-semibold text-indigo-600"
  >
    {/* Play button */}
    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-500 text-white">
      <Play size={20} />
    </span>

    {/* CTA text */}
    {ctaText}
  </a>

  <div className="flex items-center gap-4">
    <div className="flex -space-x-2">
      {/* Other elements if needed */}
    </div>
  </div>
</motion.div>
    </motion.div>

    {/* RIGHT SIDE IMAGE */}
    <div className="relative">
      <motion.div
        className="relative overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/10"
        animate={{ x: ["0%", "5%", "-5%", "0%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative aspect-[4/3] w-full transition transform duration-100 hover:scale-110">
          <Image src={rightImageSrc} alt="Hero image" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-black/5" />
        </div>

      </motion.div>

      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
    </div>
  </div>

  <style>{`
    @keyframes blob {
      0% { transform: translate(0,0) scale(1); }
      33% { transform: translate(18px,-22px) scale(1.05); }
      66% { transform: translate(-16px,14px) scale(0.98); }
      100% { transform: translate(0,0) scale(1); }
    }
    .animate-blob { animation: blob 9s ease-in-out infinite; }
  `}</style>
</section>
  );
}