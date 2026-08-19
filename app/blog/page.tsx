import { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, getFeaturedPosts, getAllCategories } from "@/lib/blog-data";
import BlogCard from "../component/BlogCard";

const POSTS_PER_PAGE = 6;
const BASE_URL = "https://hawksmediallc.com";

export async function generateMetadata({
  searchParams,
}: {
  searchParams?: Promise<{ category?: string; page?: string }>;
}): Promise<Metadata> {
  const resolvedParams = searchParams ? await searchParams : {};
  const activeCategory = resolvedParams.category ?? null;
  const currentPage = Math.max(1, parseInt(resolvedParams.page ?? "1", 10) || 1);

  // Category filter views: duplicate content of /blog — canonicalize back AND noindex.
  if (activeCategory) {
    return {
      title: { absolute: `${activeCategory} Articles | Hawks Media Blog` },
      description:
        "Expert guides on pay-per-call marketing, affiliate programs, lead generation, and performance advertising. Actionable insights from the Hawks Media team.",
      alternates: { canonical: `${BASE_URL}/blog` },
      robots: { index: false, follow: true },
    };
  }

  // Pagination on the unfiltered list: unique content per page — self-canonical, indexable.
  const canonicalUrl =
    currentPage > 1 ? `${BASE_URL}/blog?page=${currentPage}` : `${BASE_URL}/blog`;

  return {
    title:
      currentPage > 1
        ? { absolute: `Blog | Page ${currentPage} | Hawks Media - Performance Marketing Insights` }
        : { absolute: "Blog | Hawks Media - Performance Marketing Insights" },
    description:
      "Expert guides on pay-per-call marketing, affiliate programs, lead generation, and performance advertising. Actionable insights from the Hawks Media team.",
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: "Hawks Media Blog — Performance Marketing Insights",
      description:
        "Expert guides on pay-per-call marketing, affiliate programs, lead generation, and performance advertising.",
      type: "website",
    },
  };
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams?: Promise<{ category?: string; page?: string }>;
}) {
  const resolvedParams = searchParams ? await searchParams : {};
  const allPosts = getAllPosts();
  const featuredPosts = getFeaturedPosts();
  const categories = getAllCategories();

  const activeCategory = resolvedParams.category ?? null;
  const currentPage = Math.max(1, parseInt(resolvedParams.page ?? "1", 10) || 1);

  const allFilteredPosts = activeCategory
    ? allPosts.filter((p) => p.category === activeCategory)
    : allPosts.filter((p) => !p.featured);

  const totalPages = Math.max(1, Math.ceil(allFilteredPosts.length / POSTS_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);
  const startIndex = (safePage - 1) * POSTS_PER_PAGE;
  const filteredPosts = allFilteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const isLastPage = safePage === totalPages;

  

  const buildPageHref = (page: number) => {
    const params = new URLSearchParams();
    if (activeCategory) params.set("category", activeCategory);
    if (page > 1) params.set("page", String(page));
    const qs = params.toString();
    return qs ? `/blog?${qs}` : "/blog";
  };

  return (
    <div
      className="min-h-screen"
      style={{
        fontFamily: "'Outfit', sans-serif",
        background: "linear-gradient(180deg, #060913 0%, #08101d 48%, #060a12 100%)",
      }}
    >
      <div
        className="fixed pointer-events-none"
        aria-hidden="true"
        style={{
          top: "-160px",
          left: "-100px",
          width: "520px",
          height: "520px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(37,99,235,.4) 0%, rgba(30,64,175,.2) 45%, transparent 72%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="fixed pointer-events-none"
        aria-hidden="true"
        style={{
          bottom: "-140px",
          right: "-80px",
          width: "440px",
          height: "440px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(14,165,233,.3) 0%, rgba(3,105,161,.16) 45%, transparent 72%)",
          filter: "blur(80px)",
        }}
      />
      <div className="fixed inset-0 pointer-events-none blog-grid-overlay" aria-hidden="true" />

      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
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
            <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: "#60a5fa" }} />
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

          <p className="max-w-xl mx-auto text-sm leading-relaxed" style={{ color: "rgba(191,219,254,.76)" }}>
            Expert resources on pay-per-call, affiliate marketing, lead
            generation, and performance advertising — from practitioners who
            run the campaigns.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-12">
          <Link
            href="/blog"
            className="px-4 py-1.5 rounded-full text-xs font-semibold transition-all"
            style={
              !activeCategory
                ? { background: "linear-gradient(135deg,#2563eb,#3b82f6)", color: "#fff", boxShadow: "0 8px 22px rgba(37,99,235,.32)" }
                : { background: "rgba(15,23,42,.42)", border: "1px solid rgba(96,165,250,.14)", color: "rgba(191,219,254,.76)" }
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
                  ? { background: "linear-gradient(135deg,#2563eb,#3b82f6)", color: "#fff", boxShadow: "0 8px 22px rgba(37,99,235,.32)" }
                  : { background: "rgba(15,23,42,.42)", border: "1px solid rgba(96,165,250,.14)", color: "rgba(191,219,254,.76)" }
              }
            >
              {cat}
            </Link>
          ))}
        </div>

        <section>
          {!activeCategory && (
            <h2 className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: "rgba(147,197,253,.72)" }}>
              All Articles
            </h2>
          )}

          {filteredPosts.length === 0 ? (
            <p className="text-center py-20 text-sm" style={{ color: "rgba(191,219,254,.58)" }}>
              No articles in this category yet.
            </p>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <BlogCard key={`all-${post.slug}`} post={post} />
              ))}
            </div>
          )}
        </section>

        {totalPages > 1 && (
          <nav aria-label="Blog pagination" className="flex items-center justify-center gap-2 mt-10">
            {safePage > 1 ? (
              <Link
                href={buildPageHref(safePage - 1)}
                className="px-4 py-1.5 rounded-full text-xs font-semibold transition-all"
                style={{ background: "rgba(15,23,42,.42)", border: "1px solid rgba(96,165,250,.14)", color: "rgba(191,219,254,.76)" }}
              >
                ← Previous
              </Link>
            ) : (
              <span
                aria-disabled="true"
                className="px-4 py-1.5 rounded-full text-xs font-semibold opacity-40 cursor-not-allowed"
                style={{ background: "rgba(15,23,42,.42)", border: "1px solid rgba(96,165,250,.14)", color: "rgba(191,219,254,.76)" }}
              >
                ← Previous
              </span>
            )}

            <div className="flex items-center gap-1.5 mx-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Link
                  key={page}
                  href={buildPageHref(page)}
                  className="w-8 h-8 flex items-center justify-center rounded-full text-xs font-semibold transition-all"
                  style={
                    page === safePage
                      ? { background: "linear-gradient(135deg,#2563eb,#3b82f6)", color: "#fff", boxShadow: "0 8px 22px rgba(37,99,235,.32)" }
                      : { background: "rgba(15,23,42,.42)", border: "1px solid rgba(96,165,250,.14)", color: "rgba(191,219,254,.76)" }
                  }
                >
                  {page}
                </Link>
              ))}
            </div>

            {safePage < totalPages ? (
              <Link
                href={buildPageHref(safePage + 1)}
                className="px-4 py-1.5 rounded-full text-xs font-semibold transition-all"
                style={{ background: "rgba(15,23,42,.42)", border: "1px solid rgba(96,165,250,.14)", color: "rgba(191,219,254,.76)" }}
              >
                Next →
              </Link>
            ) : (
              <span
                aria-disabled="true"
                className="px-4 py-1.5 rounded-full text-xs font-semibold opacity-40 cursor-not-allowed"
                style={{ background: "rgba(15,23,42,.42)", border: "1px solid rgba(96,165,250,.14)", color: "rgba(191,219,254,.76)" }}
              >
                Next →
              </span>
            )}
          </nav>
        )}

        {/* Featured section — now shown on the LAST page instead of page 1 */}
{!activeCategory && isLastPage && featuredPosts.length > 0 && (
  <section className="my-14">
    <h2
      className="text-xs font-bold uppercase tracking-widest mb-6"
      style={{ color: "rgba(147,197,253,.72)" }}
    >
      Featured
    </h2>
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {featuredPosts.map((post) => (
        <BlogCard key={`featured-${post.slug}`} post={post} featured />
      ))}
    </div>
  </section>
)}
      </main>
    </div>
  );
}