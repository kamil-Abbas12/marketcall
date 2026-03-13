"use client";

import * as React from "react";

type GetProps = {
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
  privacyPolicyHref?: string;

  /**
   * Optional hook for your integration (Mailchimp/ConvertKit/custom API).
   * If omitted, the component will just show a success message.
   */
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
    } catch (err) {
      setState("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <section className="w-full bg-[#f5f7fb]">
      <div className="mx-auto max-w-5xl px-4 py-14 sm:py-20">
        <div className="rounded-2xl bg-transparent">
          <div className="mx-auto max-w-3xl text-center">
            {/* Icon */}
            <div className="mx-auto mb-5 grid h-12 w-12 place-items-center">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-9 w-9 text-slate-800"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* simple graduation cap */}
                <path d="M22 10L12 5 2 10l10 5 10-5Z" />
                <path d="M6 12v5c0 .6.3 1.1.8 1.4 1.6 1 3.7 1.6 5.2 1.6s3.6-.6 5.2-1.6c.5-.3.8-.8.8-1.4v-5" />
              </svg>
            </div>

            {/* Title + subtitle */}
            <h1 className="text-balance text-3xl font700 font-semibold tracking-tight text-slate-900 sm:text-4xl">
              {title}
            </h1>
            <p className="mt-2 text-pretty text-sm text-slate-600 sm:text-base">
              {subtitle}
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-10">
              {/* Single bar (input + button) */}
              <div className="mx-auto flex w-full max-w-3xl items-stretch overflow-hidden rounded-md bg-white shadow-[0_8px_30px_rgba(15,23,42,0.06)] ring-1 ring-slate-200">
                {/* Left: input with icon */}
                <div className="relative flex-1">
                  <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-slate-400">
                    {/* mail icon */}
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.8}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 6h16v12H4z" />
                      <path d="m4 7 8 6 8-6" />
                    </svg>
                  </div>

                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    placeholder="E-mail"
                    className={[
                      "h-14 w-full bg-white pl-12 pr-4 text-slate-900 placeholder:text-slate-400",
                      "focus:outline-none focus:ring-4 focus:ring-indigo-100",
                    ].join(" ")}
                    aria-label="Email"
                  />
                </div>

                {/* Right: button (always visible) */}
                <button
                  type="submit"
                  className={[
                    "h-14 min-w-[150px] px-7 text-sm font-semibold text-white sm:text-base",
                    "bg-indigo-600 hover:bg-indigo-700",
                    "shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]",
                    "focus:outline-none focus:ring-4 focus:ring-indigo-200",
                    "transition-colors",
                    state === "loading" ? "cursor-wait opacity-95" : "",
                  ].join(" ")}
                >
                  {state === "loading" ? "Submitting..." : buttonLabel}
                </button>
              </div>

              {/* Privacy row */}
              <div className="mx-auto mt-3 flex max-w-3xl items-start justify-start gap-2 text-left">
                <input
                  id="privacy"
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-0.5 h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-200"
                />
                <label htmlFor="privacy" className="text-xs text-slate-500">
                  I agree to{" "}
                  <a
                    href={privacyPolicyHref}
                    className="text-slate-600 underline underline-offset-4 hover:text-indigo-700"
                  >
                    Privacy Policy
                  </a>
                </label>
              </div>

              {/* Message */}
              {message ? (
                <p
                  className={[
                    "mx-auto mt-3 max-w-3xl text-left text-sm",
                    state === "success" ? "text-emerald-700" : "text-rose-700",
                  ].join(" ")}
                  role={state === "error" ? "alert" : "status"}
                >
                  {message}
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
