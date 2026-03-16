"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Mail, BookOpen } from "lucide-react";

type GetProps = {
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
  privacyPolicyHref?: string;
  onSubscribe?: (email: string) => Promise<void> | void;
};

export default function Get({
  title = "Get Private Affiliate Case Studies",
  subtitle = "And learn all secret methods used by Marketcall affiliates",
  buttonLabel = "Subscribe",
  privacyPolicyHref = "/privacy-policy",
  onSubscribe,
}: GetProps) {
  const [email, setEmail] = React.useState("");
  const [agreed, setAgreed] = React.useState(false);
  const [state, setState] = React.useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = React.useState<string>("");

  const emailOk = /^\S+@\S+\.\S+$/.test(email.trim());

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage("");

    if (!emailOk) {
      setState("error");
      setMessage("Please enter a valid email address.");
      return;
    }
    if (!agreed) {
      setState("error");
      setMessage("Please agree to the Privacy Policy.");
      return;
    }

    try {
      setState("loading");
      await onSubscribe?.(email.trim());
      setState("success");
      setMessage("Subscribed! Please check your inbox.");
      setEmail("");
      setAgreed(false);
    } catch {
      setState("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <section
      className="relative w-full overflow-hidden py-24"
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

      <div className="mx-auto max-w-5xl px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative rounded-3xl overflow-hidden p-10 sm:p-14 text-center"
          style={{
            background: "rgba(255,255,255,0.8)",
            border: "1px solid rgba(124,58,237,0.15)",
            boxShadow: "0 20px 60px rgba(124,58,237,0.08), 0 4px 20px rgba(0,0,0,0.04)",
            backdropFilter: "blur(12px)",
          }}
        >
          {/* Top glow line */}
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.6), transparent)" }}
          />

          {/* Inner bg gradient */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.03) 0%, rgba(192,38,211,0.03) 100%)" }}
          />

          <div className="relative z-10 mx-auto max-w-2xl">

            {/* Icon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mb-6 w-16 h-16 rounded-2xl flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, rgba(124,58,237,0.12), rgba(192,38,211,0.12))",
                border: "1px solid rgba(124,58,237,0.2)",
              }}
            >
              <BookOpen size={28} className="text-violet-600" />
            </motion.div>

            {/* Badge */}
            <span
              className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-5 text-violet-600"
              style={{ background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.25)" }}
            >
              Free Resources
            </span>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 mb-3">
              {title.includes("Affiliate") ? (
                <>
                  Get Private{" "}
                  <span
                    style={{
                      background: "linear-gradient(90deg, #7C3AED, #C026D3)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Affiliate Case Studies
                  </span>
                </>
              ) : (
                title
              )}
            </h2>

            {/* Subtitle */}
            <p className="text-gray-500 text-sm sm:text-base mb-10">
              {subtitle}
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit}>
             <div
className="flex flex-col sm:flex-row w-full gap-3 items-stretch overflow-hidden rounded-xl 
md:border md:border-violet-300/40 md:shadow-[0_4px_20px_rgba(124,58,237,0.08)]"
>
                {/* Input */}
                <div className="relative flex flex-col md:flex-1">
                  <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-violet-400">
                    <Mail size={18} />
                  </div>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    placeholder="Enter your email"
                    className="h-14 w-full rounded-md  bg-white pl-11 pr-4 text-gray-900 placeholder:text-gray-400
                     focus:outline-none focus:ring-2 focus:ring-violet-200 text-sm"
                    aria-label="Email"
                  />
                </div>

                {/* Button */}
                <button
                  type="submit"
className="h-14 w-full sm:w-auto min-w-[140px] rounded-md px-7 text-sm font-semibold
 text-white transition-all duration-200 hover:opacity-90 cursor-pointer"                  style={{
                    background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.15)",
                  }}
                >
                  {state === "loading" ? "Submitting..." : buttonLabel}
                </button>
              </div>

              {/* Privacy checkbox */}
              <div className="mt-4 flex flex-col md:flex-row items-start justify-start gap-2 text-left">
                <input
                  id="privacy"
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-0.5 h-4 w-4 rounded border-gray-300 accent-violet-600 focus:ring-violet-200"
                />
               <label htmlFor="privacy" className="text-xs text-gray-800">
  I agree to the{" "}
  <a
    href={privacyPolicyHref}
    className="text-violet-500 underline underline-offset-4 hover:text-violet-700 transition-colors"
  >
    Privacy Policy
  </a>
</label>
              </div>

              {/* Status message */}
              {message && (
                <motion.p
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={[
                    "mt-3 text-left text-sm font-medium",
                    state === "success" ? "text-emerald-600" : "text-rose-500",
                  ].join(" ")}
                  role={state === "error" ? "alert" : "status"}
                >
                  {state === "success" ? "✓ " : "⚠ "}
                  {message}
                </motion.p>
              )}
            </form>

            {/* Trust indicators */}
            <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6 flex-wrap">
              {["No spam, ever", "Unsubscribe anytime", "5,000+ subscribers"].map((item, i) => (
                <span key={i} className="flex items-center gap-1.5 text-xs text-gray-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400 inline-block" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}