import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/lib/blog-data";
import { BlogPost } from "@/types/blog";

// ---------------------------------------------------------------------------
// Static params
// ---------------------------------------------------------------------------
export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Not Found" };

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
    },
    alternates: post.canonicalUrl ? { canonical: post.canonicalUrl } : undefined,
  };
}

// ---------------------------------------------------------------------------
// Tiny markdown renderer (headings, bold, hr, lists, tables, paragraphs)
// ---------------------------------------------------------------------------
function renderMarkdown(markdown: string): string {
  const lines = markdown.split("\n");
  const html: string[] = [];
  let i = 0;

  // Inline formatting
  const inline = (text: string): string =>
    text
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g, "<em>$1</em>")
      .replace(/`(.+?)`/g, "<code>$1</code>")
      .replace(
        /\[([^\]]+)\]\(([^)]+)\)/g,
        '<a href="$2" style="color:#60a5fa;text-decoration:underline;text-underline-offset:3px;">$1</a>'
      );

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    // Blank line
    if (!trimmed) { i++; continue; }

    // Headings
    const h2 = trimmed.match(/^##\s+(.*)/);
    const h3 = trimmed.match(/^###\s+(.*)/);
    const h4 = trimmed.match(/^####\s+(.*)/);

    if (h2) {
      html.push(
        `<h2 style="font-size:1.45rem;font-weight:800;color:#e2e8f0;margin:2.5rem 0 1rem;letter-spacing:-.01em;font-family:'Outfit',sans-serif;">${inline(h2[1])}</h2>`
      );
      i++; continue;
    }
    if (h3) {
      html.push(
        `<h3 style="font-size:1.1rem;font-weight:700;color:#cbd5e1;margin:2rem 0 .75rem;font-family:'Outfit',sans-serif;">${inline(h3[1])}</h3>`
      );
      i++; continue;
    }
    if (h4) {
      html.push(
        `<h4 style="font-size:.95rem;font-weight:700;color:#94a3b8;margin:1.5rem 0 .5rem;font-family:'Outfit',sans-serif;">${inline(h4[1])}</h4>`
      );
      i++; continue;
    }

    // Horizontal rule
    if (/^---+$/.test(trimmed)) {
      html.push('<hr style="border:none;border-top:1px solid rgba(255,255,255,.08);margin:2rem 0;" />');
      i++; continue;
    }

    // Table — detect by pipe at start and collect rows
    if (trimmed.startsWith("|")) {
      const tableRows: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        tableRows.push(lines[i].trim());
        i++;
      }
      // Filter out separator rows (---|---)
      const dataRows = tableRows.filter((r) => !/^\|[-| :]+\|$/.test(r));

      const parseRow = (row: string): string[] =>
        row
          .replace(/^\||\|$/g, "")
          .split("|")
          .map((cell) => cell.trim());

      const [headerRow, ...bodyRows] = dataRows;
      const headers = parseRow(headerRow ?? "");

      html.push(
        `<div style="overflow-x:auto;margin:1.5rem 0;border-radius:10px;border:1px solid rgba(255,255,255,.08);">` +
        `<table style="width:100%;border-collapse:collapse;font-size:.875rem;">` +
        `<thead><tr style="background:rgba(37,99,235,.12);">` +
        headers
          .map(
            (h) =>
              `<th style="padding:.75rem 1rem;text-align:left;font-weight:700;color:#93c5fd;font-family:'Outfit',sans-serif;white-space:nowrap;border-bottom:1px solid rgba(255,255,255,.08);">${inline(h)}</th>`
          )
          .join("") +
        `</tr></thead><tbody>` +
        bodyRows
          .map((row, ri) => {
            const cells = parseRow(row);
            return (
              `<tr style="background:${ri % 2 === 0 ? "rgba(255,255,255,.02)" : "transparent"};">` +
              cells
                .map(
                  (c) =>
                    `<td style="padding:.7rem 1rem;color:rgba(203,213,225,.8);border-bottom:1px solid rgba(255,255,255,.05);">${inline(c)}</td>`
                )
                .join("") +
              `</tr>`
            );
          })
          .join("") +
        `</tbody></table></div>`
      );
      continue;
    }

    // Unordered list
    if (/^[-*]\s/.test(trimmed)) {
      const items: string[] = [];
      while (i < lines.length && /^[-*]\s/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^[-*]\s/, ""));
        i++;
      }
      html.push(
        `<ul style="margin:1rem 0 1rem 1.5rem;display:flex;flex-direction:column;gap:.5rem;">` +
        items
          .map(
            (item) =>
              `<li style="color:rgba(203,213,225,.75);font-size:.9375rem;line-height:1.65;list-style:none;padding-left:1.25rem;position:relative;">` +
              `<span style="position:absolute;left:0;top:.55em;width:5px;height:5px;border-radius:50%;background:#3b82f6;display:inline-block;"></span>` +
              inline(item) +
              `</li>`
          )
          .join("") +
        `</ul>`
      );
      continue;
    }

    // Ordered list
    if (/^\d+\.\s/.test(trimmed)) {
      const items: string[] = [];
      let num = 1;
      while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+\.\s/, ""));
        i++;
      }
      html.push(
        `<ol style="margin:1rem 0 1rem 1.5rem;display:flex;flex-direction:column;gap:.5rem;counter-reset:list-counter;">` +
        items
          .map(
            (item, idx) =>
              `<li style="color:rgba(203,213,225,.75);font-size:.9375rem;line-height:1.65;list-style:none;padding-left:2rem;position:relative;counter-increment:list-counter;">` +
              `<span style="position:absolute;left:0;top:.1em;width:1.4rem;height:1.4rem;border-radius:50%;background:rgba(37,99,235,.2);border:1px solid rgba(60,130,246,.3);display:flex;align-items:center;justify-content:center;font-size:.7rem;font-weight:700;color:#60a5fa;">${idx + 1}</span>` +
              inline(item) +
              `</li>`
          )
          .join("") +
        `</ol>`
      );
      continue;
    }

    // Paragraph
    html.push(
      `<p style="color:rgba(203,213,225,.75);font-size:.9375rem;line-height:1.75;margin:.75rem 0;">${inline(trimmed)}</p>`
    );
    i++;
  }

  return html.join("\n");
}

// ---------------------------------------------------------------------------
// Category badge colours
// ---------------------------------------------------------------------------
const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  "Pay-Per-Call":         { bg: "rgba(37,99,235,.12)",  text: "#60a5fa", border: "rgba(37,99,235,.25)" },
  "Affiliate Marketing":  { bg: "rgba(16,185,129,.12)", text: "#34d399", border: "rgba(16,185,129,.25)" },
  "Lead Generation":      { bg: "rgba(245,158,11,.12)", text: "#fbbf24", border: "rgba(245,158,11,.25)" },
  "Performance Marketing":{ bg: "rgba(139,92,246,.12)", text: "#a78bfa", border: "rgba(139,92,246,.25)" },
  "Fraud Prevention":     { bg: "rgba(239,68,68,.12)",  text: "#f87171", border: "rgba(239,68,68,.25)"  },
};
const defaultColor = { bg: "rgba(96,165,250,.12)", text: "#93c5fd", border: "rgba(96,165,250,.25)" };

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const color = categoryColors[post.category] ?? defaultColor;
  const renderedContent = renderMarkdown(post.content);

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    author: { "@type": "Organization", name: post.author },
    datePublished: post.publishedAt,
    keywords: post.keywords.join(", "),
    publisher: {
      "@type": "Organization",
      name: "Hawks Media",
      url: "https://hawksmediallc.com",
    },
  };

  return (
    <div
      className="min-h-screen"
      style={{ background: "#07090f", fontFamily: "'Outfit', sans-serif" }}
    >
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Ambient glows */}
      <div
        className="fixed pointer-events-none"
        style={{
          top: "-160px", left: "-100px",
          width: "520px", height: "520px", borderRadius: "50%",
          background: "radial-gradient(circle,#1d4ed833 0%,#1e3a8a22 50%,transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="fixed pointer-events-none"
        style={{
          bottom: "-140px", right: "-80px",
          width: "420px", height: "420px", borderRadius: "50%",
          background: "radial-gradient(circle,#0369a133 0%,#0c4a6e22 50%,transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(96,165,250,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(96,165,250,.04) 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <main className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 py-20">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs font-semibold mb-10 transition-colors hover:text-blue-400"
          style={{ color: "rgba(96,165,250,.6)" }}
        >
          <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
            <path d="M9.5 6h-7M5.5 9 2.5 6l3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to Blog
        </Link>

        {/* Article header */}
        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span
              className="px-2.5 py-1 rounded-md text-xs font-bold tracking-wide uppercase"
              style={{ background: color.bg, color: color.text, border: `1px solid ${color.border}` }}
            >
              {post.category}
            </span>
            <span className="text-xs" style={{ color: "rgba(140,160,185,.5)" }}>
              {post.readingTime} min read
            </span>
            <span className="text-xs" style={{ color: "rgba(140,160,185,.5)" }}>
              {formatDate(post.publishedAt)}
            </span>
          </div>

          <h1
            className="text-3xl sm:text-4xl font-black leading-tight mb-5"
            style={{
              color: "#e2e8f0",
              letterSpacing: "-.02em",
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 900,
            }}
          >
            {post.title}
          </h1>

          <p
            className="text-base leading-relaxed mb-6"
            style={{ color: "rgba(140,160,185,.7)" }}
          >
            {post.excerpt}
          </p>

          {/* Author row */}
          <div
            className="flex items-center gap-3 pt-5"
            style={{ borderTop: "1px solid rgba(255,255,255,.07)" }}
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
              style={{
                background: "linear-gradient(135deg,#1d4ed8,#3b82f6)",
                color: "#fff",
              }}
            >
              H
            </div>
            <div>
              <p className="text-sm font-semibold" style={{ color: "#cbd5e1" }}>
                {post.author}
              </p>
              <p className="text-xs" style={{ color: "rgba(140,160,185,.5)" }}>
                {post.authorTitle}
              </p>
            </div>
          </div>
        </header>

        {/* Divider */}
        <div
          className="h-px w-full mb-10"
          style={{ background: "linear-gradient(90deg,#1d4ed8,#3b82f6,transparent)" }}
        />

        {/* Cover image hero */}
        {post.coverImage && (
          <div
            className="relative w-full rounded-2xl overflow-hidden mb-10"
            style={{ height: "340px", boxShadow: "0 8px 40px rgba(0,0,0,.5)" }}
          >
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to bottom, transparent 55%, rgba(7,9,15,.6) 100%)",
              }}
            />
          </div>
        )}

        {/* Article body */}
        <article
          className="prose-hawks"
          dangerouslySetInnerHTML={{ __html: renderedContent }}
        />

        {/* Tags */}
        {post.tags.length > 0 && (
          <div
            className="mt-14 pt-8"
            style={{ borderTop: "1px solid rgba(255,255,255,.07)" }}
          >
            <p
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: "rgba(96,165,250,.5)" }}
            >
              Tags
            </p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs"
                  style={{
                    background: "rgba(255,255,255,.04)",
                    border: "1px solid rgba(255,255,255,.08)",
                    color: "rgba(140,160,185,.6)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div
          className="mt-14 rounded-2xl p-8 text-center"
          style={{
            background:
              "linear-gradient(135deg,rgba(29,78,216,.15) 0%,rgba(59,130,246,.08) 100%)",
            border: "1px solid rgba(37,99,235,.25)",
          }}
        >
          <p
            className="text-lg font-black mb-2"
            style={{ color: "#e2e8f0", fontFamily: "'Outfit',sans-serif" }}
          >
            Ready to scale with performance marketing?
          </p>
          <p className="text-sm mb-6" style={{ color: "rgba(140,160,185,.65)" }}>
            Hawks Media connects advertisers and publishers to high-quality
            inbound calls across insurance, legal, home services, and more.
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-3 rounded-xl text-sm font-bold text-white transition-all hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg,#1d4ed8,#3b82f6)",
              boxShadow: "0 8px 24px rgba(37,99,235,.35)",
            }}
          >
            Get Started with Hawks Media
          </Link>
        </div>
      </main>
    </div>
  );
}