import { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, getFeaturedPosts, getAllCategories } from "@/lib/blog-data";
import BlogCard from "../component/BlogCard";

export const metadata: Metadata = {
  title: "Blog | Hawks Media — Performance Marketing Insights",
  description:
    "Expert guides on pay-per-call marketing, affiliate programs, lead generation, and performance advertising. Actionable insights from the Hawks Media team.",
  openGraph: {
    title: "Hawks Media Blog — Performance Marketing Insights",
    description:
      "Expert guides on pay-per-call marketing, affiliate programs, lead generation, and performance advertising.",
    type: "website",
  },
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams?: Promise<{ category?: string }>;
}) {
  const resolvedParams = searchParams ? await searchParams : {};
  const allPosts = getAllPosts();
  const featuredPosts = getFeaturedPosts();
  const categories = getAllCategories();

  const activeCategory = resolvedParams.category ?? null;
  const filteredPosts = activeCategory
    ? allPosts.filter((p) => p.category === activeCategory)
    : allPosts;

  return (
    <div className="min-h-screen blog-blue-bg" style={{ fontFamily: "'Outfit', sans-serif" }}>
      {/* Ambient glows */}
      <div
        className="fixed pointer-events-none"
        style={{
          top: "-160px",
          left: "-100px",
          width: "520px",
          height: "520px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(37,99,235,.34) 0%, rgba(30,64,175,.18) 45%, transparent 72%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="fixed pointer-events-none"
        style={{
          bottom: "-140px",
          right: "-80px",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(14,165,233,.26) 0%, rgba(3,105,161,.14) 45%, transparent 72%)",
          filter: "blur(80px)",
        }}
      />

      {/* Grid overlay */}
      <div className="fixed inset-0 pointer-events-none blog-grid-overlay" />

      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Page header */}
        <div className="mb-14 text-center">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5 tracking-widest uppercase"
            style={{
              background: "rgba(37,99,235,.14)",
              border: "1px solid rgba(96,165,250,.22)",
              color: "#93c5fd",
              boxShadow: "0 8px 24px rgba(15,23,42,.18)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full inline-block"
              style={{ background: "#60a5fa" }}
            />
            Performance Marketing Blog
          </div>

          <h1
            className="text-4xl sm:text-5xl font-black mb-4"
            style={{
              background:
                "linear-gradient(135deg,#dbeafe 0%, #93c5fd 26%, #60a5fa 55%, #38bdf8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "-.02em",
            }}
          >
            Insights & Guides
          </h1>

          <p
            className="max-w-xl mx-auto text-sm leading-relaxed"
            style={{ color: "rgba(191,219,254,.76)" }}
          >
            Expert resources on pay-per-call, affiliate marketing, lead
            generation, and performance advertising — from practitioners who
            run the campaigns.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          <Link
            href="/blog"
            className="px-4 py-1.5 rounded-full text-xs font-semibold transition-all"
            style={
              !activeCategory
                ? {
                    background: "linear-gradient(135deg,#2563eb,#3b82f6)",
                    color: "#fff",
                    boxShadow: "0 8px 22px rgba(37,99,235,.32)",
                  }
                : {
                    background: "rgba(15,23,42,.42)",
                    border: "1px solid rgba(96,165,250,.14)",
                    color: "rgba(191,219,254,.76)",
                    backdropFilter: "blur(10px)",
                  }
            }
          >
            All
          </Link>

          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/blog?category=${encodeURIComponent(cat)}`}
              className="px-4 py-1.5 rounded-full text-xs font-semibold transition-all"
              style={
                activeCategory === cat
                  ? {
                      background: "linear-gradient(135deg,#2563eb,#3b82f6)",
                      color: "#fff",
                      boxShadow: "0 8px 22px rgba(37,99,235,.32)",
                    }
                  : {
                      background: "rgba(15,23,42,.42)",
                      border: "1px solid rgba(96,165,250,.14)",
                      color: "rgba(191,219,254,.76)",
                      backdropFilter: "blur(10px)",
                    }
              }
            >
              {cat}
            </Link>
          ))}
        </div>

        {/* Featured section */}
        {!activeCategory && featuredPosts.length > 0 && (
          <section className="mb-14">
            <h2
              className="text-xs font-bold uppercase tracking-widest mb-6"
              style={{ color: "rgba(147,197,253,.72)" }}
            >
              Featured
            </h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {featuredPosts.map((post) => (
                <BlogCard key={post.slug} post={post} featured />
              ))}
            </div>
          </section>
        )}

        {/* All / filtered posts */}
        <section>
          {!activeCategory && (
            <h2
              className="text-xs font-bold uppercase tracking-widest mb-6"
              style={{ color: "rgba(147,197,253,.72)" }}
            >
              All Articles
            </h2>
          )}

          {filteredPosts.length === 0 ? (
            <p
              className="text-center py-20 text-sm"
              style={{ color: "rgba(191,219,254,.58)" }}
            >
              No articles in this category yet.
            </p>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
