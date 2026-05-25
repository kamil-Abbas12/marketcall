import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, getAllPosts } from "@/lib/blog-data";
import { parseMarkdown, extractHeadings } from "@/lib/markdown";
import TableOfContents from "@/app/component/TableOfContents";
import BlogCard from "@/app/component/BlogCard";
import ShareButtons from "@/app/component/ShareButtons";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  const canonicalUrl = `https://hawksmediallc.com/blog/${post.slug}`;
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: canonicalUrl,
      type: "article",
      siteName: "Hawks Media LLC",
      publishedTime: post.publishedAt,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: { card: "summary_large_image", title: post.metaTitle, description: post.metaDescription },
    alternates: { canonical: canonicalUrl },
    robots: { index: true, follow: true },
  };
}

// Matched to Hero.tsx blue palette
const categoryColors: Record<string, string> = {
  "Pay-Per-Call":          "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  "Affiliate Marketing":   "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Lead Generation":       "bg-sky-500/10 text-sky-400 border-sky-500/20",
  "Performance Marketing": "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
  "Fraud Prevention":      "bg-red-500/10 text-red-400 border-red-500/20",
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const related = allPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3);
  const extra = related.length < 3
    ? allPosts.filter((p) => p.slug !== post.slug && p.category !== post.category).slice(0, 3 - related.length)
    : [];
  const suggestedPosts = [...related, ...extra].slice(0, 3);

  const htmlContent = parseMarkdown(post.content);
  const headings = extractHeadings(post.content);
  const colorClass = categoryColors[post.category] || "bg-blue-500/10 text-blue-400 border-blue-500/20";

  const publishDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric",
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.metaTitle,
    description: post.metaDescription,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: { "@type": "Organization", name: post.author, url: "https://hawksmediallc.com" },
    publisher: {
      "@type": "Organization",
      name: "Hawks Media LLC",
      url: "https://hawksmediallc.com",
      logo: { "@type": "ImageObject", url: "https://hawksmediallc.com/new.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://hawksmediallc.com/blog/${post.slug}` },
    keywords: post.keywords.join(", "),
    articleSection: post.category,
    wordCount: post.content.split(" ").length,
    timeRequired: `PT${post.readingTime}M`,
  };

  return (
    <div className="min-h-screen" style={{ background: "#07090f" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main>

        {/* ── Hero ── */}
        <div className="relative overflow-hidden" style={{ borderBottom: "1px solid rgba(148,163,184,.1)" }}>
          {/* Orb glow — mirrors Hero.tsx */}
          <div className="absolute pointer-events-none" style={{
            top: "-120px", left: "-80px",
            width: "420px", height: "420px", borderRadius: "50%",
            background: "radial-gradient(circle, #1d4ed833 0%, #1e3a8a22 50%, transparent 70%)",
            filter: "blur(72px)",
          }} />
          <div className="absolute pointer-events-none" style={{
            bottom: "-100px", right: "-60px",
            width: "320px", height: "320px", borderRadius: "50%",
            background: "radial-gradient(circle, #0369a133 0%, #0c4a6e22 50%, transparent 70%)",
            filter: "blur(60px)",
          }} />
          {/* Grid overlay */}
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: "linear-gradient(rgba(96,165,250,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(96,165,250,.03) 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }} />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 relative">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs mb-6" style={{ color: "rgba(140,160,185,.5)" }} aria-label="Breadcrumb">
              <Link href="https://hawksmediallc.com" className="hover:text-blue-400 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-blue-400 transition-colors">Blog</Link>
              <span>/</span>
              <Link href={`/blog?category=${encodeURIComponent(post.category)}`} className="hover:text-blue-400 transition-colors">{post.category}</Link>
              <span>/</span>
              <span className="truncate max-w-48" style={{ color: "rgba(200,210,230,.7)" }}>{post.title}</span>
            </nav>

            <div className="flex items-center gap-3 mb-5">
              <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${colorClass}`}>{post.category}</span>
              {post.featured && (
                <span className="text-xs font-semibold px-3 py-1 rounded-full border bg-blue-500/10 text-blue-400 border-blue-500/20">Featured</span>
              )}
            </div>

            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 900, letterSpacing: "-.02em" }}
            >
              {post.title}
            </h1>

            <p className="text-lg leading-relaxed mb-8 max-w-2xl" style={{ color: "rgba(140,160,185,.7)" }}>{post.excerpt}</p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-5 pt-6" style={{ borderTop: "1px solid rgba(148,163,184,.1)" }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0"
                  style={{ background: "linear-gradient(135deg,#1d4ed8,#0ea5e9)", color: "white" }}>
                  HM
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{post.author}</p>
                  <p className="text-xs" style={{ color: "rgba(140,160,185,.5)" }}>{post.authorTitle}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 sm:ml-auto text-xs" style={{ color: "rgba(140,160,185,.5)" }}>
                <span>📅 {publishDate}</span>
                <span>⏱ {post.readingTime} min read</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Content ── */}
        <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex gap-12">
            <article className="flex-1 min-w-0">
<div
  className="
    prose
    prose-invert
    max-w-none
    prose-headings:text-white
    prose-p:text-[rgba(230,240,255,.82)]
    prose-strong:text-white
    prose-a:text-blue-400
    prose-li:text-[rgba(230,240,255,.82)]
    prose-blockquote:text-gray-300
  "
  dangerouslySetInnerHTML={{ __html: htmlContent }}
/>
              {/* Tags */}
              <div className="mt-12 pt-8" style={{ borderTop: "1px solid rgba(148,163,184,.1)" }}>
                <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "rgba(140,160,185,.5)" }}>Tags</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full transition-colors cursor-default"
                      style={{
                        border: "1px solid rgba(96,165,250,.15)",
                        color: "rgba(140,160,185,.6)",
                        background: "rgba(96,165,250,.05)",
                      }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div className="mt-8"><ShareButtons title={post.title} slug={post.slug} /></div>

              {/* Author Bio */}
              <div className="mt-10 p-6 rounded-2xl" style={{ border: "1px solid rgba(96,165,250,.15)", background: "rgba(255,255,255,.03)" }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white shrink-0"
                    style={{ background: "linear-gradient(135deg,#1d4ed8,#0ea5e9)", color: "white" }}>
                    HM
                  </div>
                  <div className="text-white">
                    <p className="font-semibold text-white mb-1">{post.author}</p>
                    <p className="text-xs mb-3" style={{ color: "rgba(140,160,185,.5)" }}>{post.authorTitle}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(140,160,185,.7)" }}>
                      Hawks Media LLC is a leading performance marketing network specializing in pay-per-call advertising, affiliate marketing, and lead generation across insurance, home services, legal, financial, and healthcare verticals.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* ── Sidebar ── */}
            <aside className="hidden lg:block w-72 shrink-0">
              <TableOfContents headings={headings} />

              {/* CTA card */}
              <div className="mt-6 p-5 rounded-xl" style={{ border: "1px solid rgba(96,165,250,.25)", background: "rgba(29,78,216,.08)" }}>
                <p className="text-xs font-semibold uppercase tracking-widest mb-2"
                  style={{ color: "#60a5fa" }}>Hawks Media</p>
                <h3 className="text-lg font-bold text-white mb-2 leading-snug" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  Start Getting Qualified Leads Today
                </h3>
                <p className="text-xs mb-4" style={{ color: "rgba(140,160,185,.6)" }}>Pay only for verified calls and leads from high-intent prospects.</p>
                <a
                  href="https://hawksmediallc.com"
                  className="block w-full text-center px-4 py-2.5 rounded-lg text-sm font-bold transition-all hover:-translate-y-0.5"
                  style={{
                    background: "linear-gradient(135deg,#1d4ed8,#3b82f6)",
                    color: "white",
                    boxShadow: "0 8px 24px rgba(37,99,235,.3)",
                  }}
                >
                  Get Started →
                </a>
              </div>

              {/* Newsletter card */}
              <div className="mt-6 p-5 rounded-xl" style={{ border: "1px solid rgba(148,163,184,.1)", background: "rgba(255,255,255,.03)" }}>
                <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "rgba(140,160,185,.5)" }}>Newsletter</p>
                <h3 className="font-semibold text-white mb-2 text-sm">Get affiliate case studies</h3>
                <p className="text-xs mb-4" style={{ color: "rgba(140,160,185,.5)" }}>Secret methods used by top Hawks Media affiliates.</p>
                <a
                  href="https://hawksmediallc.com/#newsletter"
                  className="block w-full text-center px-4 py-2 rounded-lg text-xs transition-colors hover:text-blue-400"
                  style={{ border: "1px solid rgba(96,165,250,.2)", color: "rgba(140,160,185,.6)" }}
                >
                  Subscribe →
                </a>
              </div>
            </aside>
          </div>
        </div>

        {/* ── Related Posts ── */}
        {suggestedPosts.length > 0 && (
          <section style={{ borderTop: "1px solid rgba(148,163,184,.1)", background: "rgba(255,255,255,.02)" }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
              <div className="flex items-center justify-between text-white mb-8">
                <h2 className="text-2xl font-bold text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>Related Articles</h2>
                <Link href="/blog" className="text-sm text-blue-400 hover:underline">View all →</Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {suggestedPosts.map((p) => (<BlogCard key={p.slug} post={p} />))}
              </div>
            </div>
          </section>
        )}

        {/* ── Bottom CTA ── */}
        <section style={{ borderTop: "1px solid rgba(148,163,184,.1)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
            {/* Gradient text label */}
            <p className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ background: "linear-gradient(135deg,#4cc9f0,#3b82f6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Ready to grow?
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 900 }}>
              Get exclusive pay-per-call leads today
            </h2>
            <p className="max-w-xl mx-auto mb-8 text-sm leading-relaxed" style={{ color: "rgba(140,160,185,.7)" }}>
              Hawks Media connects advertisers with elite affiliates driving high-intent inbound calls across 120+ countries. Pay only for verified results.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://hawksmediallc.com"
                className="px-8 py-3.5 rounded-xl text-sm font-bold transition-all hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg,#1d4ed8,#3b82f6)",
                  color: "white",
                  boxShadow: "0 8px 24px rgba(37,99,235,.3)",
                }}
              >
                Get Started as Advertiser →
              </a>
              <a
                href="https://hawksmediallc.com/services/partner-program"
                className="px-8 py-3.5 rounded-xl text-sm transition-colors hover:text-blue-400"
                style={{ border: "1px solid rgba(96,165,250,.2)", color: "rgba(200,210,230,.7)" }}
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