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
  subtitle = "And learn all secret methods used by Hawks Media affiliates",
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
      style={{
        background:
          "linear-gradient(160deg, #dbeafe 0%, #eff6ff 40%, #e0f2fe 80%, #dbeafe 100%)",
      }}
    >
      {/* Background glow */}
      <div
        className="absolute top-[-100px] right-[-100px] w-[450px] h-[450px] rounded-full opacity-40 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #93c5fd, transparent 70%)",
          filter: "blur(70px)",
        }}
      />
      <div
        className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full opacity-35 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #7dd3fc, transparent 70%)",
          filter: "blur(65px)",
        }}
      />

      <div className="mx-auto max-w-5xl px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden p-10 sm:p-14 text-center"
          style={{
            background: "rgba(239,246,255,0.75)",
            border: "1px solid rgba(147,197,253,0.45)",
            boxShadow:
              "0 20px 60px rgba(37,99,235,0.1), 0 4px 20px rgba(37,99,235,0.06)",
            backdropFilter: "blur(16px)",
          }}
        >
          {/* Icon */}
          <div className="mx-auto mb-6 w-16 h-16 rounded-2xl flex items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, rgba(59,130,246,0.18), rgba(14,165,233,0.14))",
              border: "1px solid rgba(59,130,246,0.3)",
            }}
          >
            <BookOpen size={28} style={{ color: "#1d4ed8" }} />
          </div>

          {/* Title */}
          <h2
            className="text-3xl sm:text-4xl font-extrabold mb-3"
            style={{ color: "#0f172a" }}
          >
            Get Private{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #1d4ed8 0%, #2563eb 50%, #3b82f6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Affiliate Case Studies
            </span>
          </h2>

          <p className="text-sm sm:text-base mb-10" style={{ color: "#475569" }}>
            {subtitle}
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row w-full gap-3 overflow-hidden rounded-xl md:border"
              style={{
                borderColor: "rgba(147,197,253,0.5)",
              }}
            >
              <div className="relative flex flex-col md:flex-1">
                <div className="absolute inset-y-0 left-4 flex items-center text-blue-500">
                  <Mail size={18} />
                </div>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Enter your email"
                  className="h-14 w-full rounded-md pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>

              <button
                type="submit"
                className="h-14 w-full sm:w-auto min-w-[140px] rounded-md px-7 text-sm font-semibold text-white"
                style={{
                  background:
                    "linear-gradient(135deg, #1d4ed8, #2563eb, #3b82f6)",
                }}
              >
                {state === "loading" ? "Submitting..." : buttonLabel}
              </button>
            </div>

            {/* ✅ FIXED CHECKBOX */}
            <div className="mt-4 flex gap-2 text-sm items-center justify-center">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="accent-blue-600"
              />
              <label style={{ color: "#334155" }}>
                I agree to the{" "}
                <a
                  href={privacyPolicyHref}
                  className="underline hover:opacity-80"
                  style={{ color: "#2563eb" }}
                >
                  Privacy Policy
                </a>
              </label>
            </div>

            {message && (
              <p
                className={`mt-3 text-sm ${
                  state === "success" ? "text-green-600" : "text-red-500"
                }`}
              >
                {message}
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}