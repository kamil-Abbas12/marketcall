import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Privacy Policy | Hawks Media LLC",
  description:
    "Learn how Hawks Media LLC collects, uses, shares, and protects information from advertisers, publishers, and website visitors on our performance marketing platform.",
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
  robots: { index: true, follow: true },
};

const sections = [
  {
    id: "information-we-collect",
    title: "1. Information We Collect",
    body: [
      "We may collect the following categories of information depending on how you interact with our site:",
      "• Contact information — name, email address, phone number, and company name when you submit an inquiry, request a quote, or apply to our partner program.",
      "• Business information — website URLs, traffic sources, marketing verticals, and volume estimates submitted by prospective advertisers or publishers.",
      "• Usage data — IP address, browser type, device information, pages visited, and referral source, collected automatically through cookies and similar tracking technologies.",
      "• Call and conversion data — for pay-per-call campaigns, we may process call duration, timestamp, and caller area code through our tracking platform to validate qualifying conversions.",
    ],
  },
  {
    id: "how-we-use",
    title: "2. How We Use Your Information",
    body: [
      "We use the information we collect to:",
      "• Respond to inquiries and connect advertisers and publishers with relevant campaigns and offers.",
      "• Operate, maintain, and improve our website and services.",
      "• Validate conversions, detect fraud, and protect the integrity of our performance marketing platform.",
      "• Process payments and commissions owed to publisher partners.",
      "• Send service-related communications and, where you've agreed, marketing communications.",
      "• Comply with applicable laws and enforce our agreements.",
    ],
  },
  {
    id: "sharing",
    title: "3. Sharing of Information",
    body: [
      "We do not sell personal information to unrelated third parties.",
      "We may share information with advertiser and publisher partners solely as needed to facilitate a campaign, offer, or commission payout you've opted into; with service providers supporting hosting, analytics, payment processing, and fraud prevention under confidentiality obligations; and with regulators or legal authorities where required by law.",
      "Because Hawks Media operates across 120+ countries, information may be processed or stored in countries other than your own. We take reasonable steps to protect information consistent with this policy regardless of where it is processed.",
    ],
  },
  {
    id: "cookies",
    title: "4. Cookies & Tracking Technologies",
    body: [
      "Our website and tracking platform use cookies, pixels, and similar technologies to operate core features, measure traffic, and validate conversions for performance marketing campaigns.",
      "You can disable cookies through your browser settings, though doing so may affect site functionality and our ability to accurately track and pay out qualifying conversions.",
    ],
  },
  {
    id: "security",
    title: "5. Data Security",
    body: [
      "We implement administrative, technical, and physical safeguards designed to protect information from unauthorized access, disclosure, alteration, or destruction. No method of transmission over the internet is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    id: "retention",
    title: "6. Data Retention",
    body: [
      "We retain information for as long as necessary to fulfill the purposes described in this policy, including maintaining accurate records of campaigns, conversions, and commission payouts, and complying with legal and accounting obligations.",
    ],
  },
  {
    id: "rights",
    title: "7. Your Rights & Choices",
    body: [
      "Depending on your location, you may have the right to access, correct, or request deletion of your personal information, and to opt out of marketing communications at any time by contacting us using the details below.",
    ],
  },
  {
    id: "children",
    title: "8. Children's Privacy",
    body: [
      "Our services are intended for businesses and individuals 18 years of age or older. We do not knowingly collect information from children.",
    ],
  },
  {
    id: "changes",
    title: "9. Changes to This Policy",
    body: ["We may update this Privacy Policy from time to time. Changes will be posted on this page with a revised effective date."],
  },
  {
    id: "contact",
    title: "10. Contact Us",
    body: [
      "If you have questions about this Privacy Policy or how we handle your information, contact us:",
      "Hawks Media LLC",
      "Email: info@hawksmediallc.com",
      "Phone: +1 786 485 0671",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#060913] text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>
      <section className="max-w-3xl mx-auto px-5 py-24">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#3b82f6]/25 bg-[#2563eb]/10 px-4 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#60a5fa]" />
          <span className="text-xs font-semibold uppercase tracking-widest text-[#93c5fd]">Legal</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black mb-4 text-[#f8fbff]">Privacy Policy</h1>
        <p className="text-sm text-[#93c5fd]/70 mb-12">Last updated: June 19, 2026</p>

        <p className="text-[#dbeafe]/80 leading-relaxed mb-10 border-l-4 border-[#3b82f6] pl-5">
          Hawks Media LLC (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) respects your privacy. This
          Privacy Policy explains how we collect, use, share, and protect information when you visit{" "}
          <strong>hawksmediallc.com</strong> or use our performance marketing services as an advertiser, publisher,
          or visitor.
        </p>

        <nav aria-label="Privacy policy sections" className="mb-12 rounded-2xl border border-[#3b82f6]/15 bg-[#0d1830]/60 p-6">
          <h2 className="text-sm font-bold text-white mb-3">Table of Contents</h2>
          <ol className="space-y-1.5">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="text-sm text-[#93c5fd] hover:underline">
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="space-y-12">
          {sections.map((s) => (
            <div key={s.id} id={s.id}>
              <h2 className="text-xl font-bold text-white mb-4">{s.title}</h2>
              <div className="space-y-3">
                {s.body.map((p, i) => (
                  <p key={i} className="text-[#dbeafe]/75 leading-relaxed text-sm">{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-[#3b82f6]/15">
          <Link href="/" className="text-sm text-[#93c5fd] hover:underline font-medium">
            ← Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}