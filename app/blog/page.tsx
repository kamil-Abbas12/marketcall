import type { Metadata } from "next";
import { getAllPosts, getAllCategories, getFeaturedPosts } from "@/lib/blog-data";
import Link from "next/link";
import BlogCard from "../component/BlogCard";

export const metadata: Metadata = {
  title: "Blog — Performance Marketing, Pay-Per-Call & Affiliate Marketing Insights",
  description:
    "Expert guides on pay-per-call marketing, affiliate marketing, lead generation, and performance advertising. Actionable insights from the Hawks Media team.",
  keywords: [
    "performance marketing blog",
    "pay per call tips",
    "affiliate marketing guide",
    "lead generation strategies",
    "Hawks Media blog",
  ],
  openGraph: {
    title: "Hawks Media Blog — Performance Marketing Insights",
    description:
      "Expert guides on pay-per-call, affiliate marketing, and lead generation from the Hawks Media team.",
    url: "https://hawksmediallc.com/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hawks Media Blog",
    description:
      "Expert guides on performance marketing, pay-per-call & affiliate marketing.",
  },
  alternates: { canonical: "https://hawksmediallc.com/blog" },
};

type Props = {
  searchParams: Promise<{ category?: string }>;
};

// Same palette as [slug]/page.tsx
const categoryColors: Record<string, string> = {
  "Pay-Per-Call":
    "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  "Affiliate Marketing":
    "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Lead Generation":
    "bg-sky-500/10 text-sky-400 border-sky-500/20",
  "Performance Marketing":
    "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
  "Fraud Prevention":
    "bg-red-500/10 text-red-400 border-red-500/20",
};

export default async function BlogPage({ searchParams }: Props) {
  const { category: activeCategory } = await searchParams;

  const allPosts = getAllPosts();
  const categories = getAllCategories();
  const featuredPosts = getFeaturedPosts();

  const filteredPosts = activeCategory
    ? allPosts.filter((p) => p.category === activeCategory)
    : allPosts;

  return (
    <div className="min-h-screen" style={{ background: "#07090f" }}>
      <main>

        {/* ── Hero ── */}
        <section
          className="relative overflow-hidden"
          style={{
            borderBottom: "1px solid rgba(148,163,184,.1)",
          }}
        >
          {/* Glow Effects */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: "-120px",
              left: "-80px",
              width: "420px",
              height: "420px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, #1d4ed833 0%, #1e3a8a22 50%, transparent 70%)",
              filter: "blur(72px)",
            }}
          />

          <div
            className="absolute pointer-events-none"
            style={{
              bottom: "-100px",
              right: "-60px",
              width: "320px",
              height: "320px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, #0369a133 0%, #0c4a6e22 50%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />

          {/* Grid Overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(96,165,250,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(96,165,250,.03) 1px,transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">

            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
                border: "1px solid rgba(96,165,250,.2)",
                background: "rgba(29,78,216,.08)",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "#60a5fa" }}
              >
                Hawks Media — The Blog
              </span>
            </div>

            {/* Heading */}
            <h1
              className="text-5xl sm:text-6xl font-bold text-white leading-tight max-w-4xl mb-6"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 900,
                letterSpacing: "-.03em",
              }}
            >
              Performance Marketing{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg,#4cc9f0,#3b82f6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Insights
              </span>
            </h1>

            {/* Description */}
            <p
              className="text-lg max-w-2xl leading-relaxed"
              style={{ color: "rgba(140,160,185,.7)" }}
            >
              Expert guides on pay-per-call advertising, affiliate marketing,
              lead generation, and performance campaigns — written by the Hawks
              Media team.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-10 mt-12">
              {[
                { value: "6+", label: "Articles" },
                { value: "5", label: "Topics Covered" },
                { value: "Weekly", label: "New Content" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p
                    className="text-3xl font-bold text-white"
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 900,
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-xs uppercase tracking-widest mt-1"
                    style={{ color: "rgba(140,160,185,.5)" }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Featured Posts ── */}
        {!activeCategory && featuredPosts.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="flex items-center justify-between mb-8">
              <h2
                className="text-2xl font-bold text-white"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Featured Articles
              </h2>

              <span
                className="text-xs uppercase tracking-widest"
                style={{ color: "rgba(140,160,185,.5)" }}
              >
                Editor&apos;s Picks
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredPosts.map((post) => (
                <BlogCard key={post.slug} post={post} featured />
              ))}
            </div>
          </section>
        )}

        {/* ── Filter Section ── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">

          {/* Category Filters */}
          <div
            className="flex items-center gap-3 flex-wrap mb-10 pb-6"
            style={{
              borderBottom: "1px solid rgba(148,163,184,.1)",
            }}
          >
            <Link
              href="/blog"
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                !activeCategory
                  ? "bg-blue-600 text-white border-blue-500"
                  : "text-gray-400 hover:text-blue-400"
              }`}
              style={
                !activeCategory
                  ? {
                      boxShadow:
                        "0 8px 24px rgba(37,99,235,.25)",
                    }
                  : {
                      borderColor: "rgba(96,165,250,.15)",
                    }
              }
            >
              All Posts
            </Link>

            {categories.map((cat) => {
              const active = activeCategory === cat;

              return (
                <Link
                  key={cat}
                  href={`/blog?category=${encodeURIComponent(cat)}`}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                    active
                      ? categoryColors[cat] ||
                        "bg-blue-500/10 text-blue-400 border-blue-500/20"
                      : "text-gray-400 hover:text-blue-400"
                  }`}
                  style={
                    !active
                      ? {
                          borderColor: "rgba(96,165,250,.15)",
                        }
                      : {}
                  }
                >
                  {cat}
                </Link>
              );
            })}
          </div>

          {/* Heading */}
          <div className="flex items-center justify-between mb-8">
            <h2
              className="text-2xl font-bold text-white"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              {activeCategory
                ? `${activeCategory} Articles`
                : "All Articles"}
            </h2>

            <span
              className="text-sm"
              style={{ color: "rgba(140,160,185,.5)" }}
            >
              {filteredPosts.length} articles
            </span>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <div
              className="text-center py-20 rounded-2xl mt-10"
              style={{
                border: "1px solid rgba(148,163,184,.1)",
                background: "rgba(255,255,255,.02)",
              }}
            >
              <p className="text-5xl mb-4">📭</p>

              <p
                className="mb-3"
                style={{ color: "rgba(140,160,185,.7)" }}
              >
                No articles in this category yet.
              </p>

              <Link
                href="/blog"
                className="text-sm text-blue-400 hover:underline"
              >
                View all articles →
              </Link>
            </div>
          )}
        </section>

        {/* ── Bottom CTA ── */}
        <section
          style={{
            borderTop: "1px solid rgba(148,163,184,.1)",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">

            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{
                background:
                  "linear-gradient(135deg,#4cc9f0,#3b82f6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Ready to grow?
            </p>

            <h2
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 900,
              }}
            >
              Get exclusive pay-per-call leads today
            </h2>

            <p
              className="max-w-xl mx-auto mb-8 text-sm leading-relaxed"
              style={{ color: "rgba(140,160,185,.7)" }}
            >
              Hawks Media connects advertisers with elite affiliates driving
              high-intent inbound calls across 120+ countries. Pay only for
              verified results.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://hawksmediallc.com"
                className="px-8 py-3.5 rounded-xl text-sm font-bold transition-all hover:-translate-y-0.5"
                style={{
                  background:
                    "linear-gradient(135deg,#1d4ed8,#3b82f6)",
                  color: "white",
                  boxShadow:
                    "0 8px 24px rgba(37,99,235,.3)",
                }}
              >
                Get Started as Advertiser →
              </a>

              <a
                href="https://hawksmediallc.com/services/partner-program"
                className="px-8 py-3.5 rounded-xl text-sm transition-colors hover:text-blue-400"
                style={{
                  border: "1px solid rgba(96,165,250,.2)",
                  color: "rgba(200,210,230,.7)",
                }}
              >
                Become an Affiliate Partner
              </a>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}