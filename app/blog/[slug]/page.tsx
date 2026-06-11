import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/lib/blog-data";

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
// Tiny markdown renderer
// ---------------------------------------------------------------------------
function renderMarkdown(markdown: string): string {
  const lines = markdown.split("\n");
  const html: string[] = [];
  let i = 0;

  const inline = (text: string): string =>
    text
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g, "<em>$1</em>")
      .replace(/`(.+?)`/g, "<code style='background:rgba(15,23,42,.7);padding:.15rem .4rem;border-radius:6px;color:#bfdbfe;border:1px solid rgba(96,165,250,.14);'>$1</code>")
      .replace(
        /\[([^\]]+)\]\(([^)]+)\)/g,
        '<a href="$2" style="color:#93c5fd;text-decoration:underline;text-underline-offset:3px;">$1</a>'
      );

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (!trimmed) {
      i++;
      continue;
    }

    const h2 = trimmed.match(/^##\s+(.*)/);
    const h3 = trimmed.match(/^###\s+(.*)/);
    const h4 = trimmed.match(/^####\s+(.*)/);

    if (h2) {
      html.push(
        `<h2 style="font-size:1.5rem;font-weight:800;color:#eff6ff;margin:2.5rem 0 1rem;letter-spacing:-.01em;font-family:'Outfit',sans-serif;">${inline(h2[1])}</h2>`
      );
      i++;
      continue;
    }

    if (h3) {
      html.push(
        `<h3 style="font-size:1.1rem;font-weight:700;color:#dbeafe;margin:2rem 0 .75rem;font-family:'Outfit',sans-serif;">${inline(h3[1])}</h3>`
      );
      i++;
      continue;
    }

    if (h4) {
      html.push(
        `<h4 style="font-size:.95rem;font-weight:700;color:#93c5fd;margin:1.5rem 0 .5rem;font-family:'Outfit',sans-serif;">${inline(h4[1])}</h4>`
      );
      i++;
      continue;
    }

    if (/^---+$/.test(trimmed)) {
      html.push(
        '<hr style="border:none;border-top:1px solid rgba(96,165,250,.12);margin:2rem 0;" />'
      );
      i++;
      continue;
    }

    if (trimmed.startsWith("|")) {
      const tableRows: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        tableRows.push(lines[i].trim());
        i++;
      }

      const dataRows = tableRows.filter((r) => !/^\|[-| :]+\|$/.test(r));

      const parseRow = (row: string): string[] =>
        row
          .replace(/^\||\|$/g, "")
          .split("|")
          .map((cell) => cell.trim());

      const [headerRow, ...bodyRows] = dataRows;
      const headers = parseRow(headerRow ?? "");

      html.push(
        `<div style="overflow-x:auto;margin:1.5rem 0;border-radius:14px;border:1px solid rgba(96,165,250,.12);background:rgba(10,18,35,.55);backdrop-filter:blur(8px);">` +
          `<table style="width:100%;border-collapse:collapse;font-size:.875rem;">` +
          `<thead><tr style="background:rgba(37,99,235,.14);">` +
          headers
            .map(
              (h) =>
                `<th style="padding:.85rem 1rem;text-align:left;font-weight:700;color:#bfdbfe;font-family:'Outfit',sans-serif;white-space:nowrap;border-bottom:1px solid rgba(96,165,250,.12);">${inline(h)}</th>`
            )
            .join("") +
          `</tr></thead><tbody>` +
          bodyRows
            .map((row, ri) => {
              const cells = parseRow(row);
              return (
                `<tr style="background:${ri % 2 === 0 ? "rgba(255,255,255,.02)" : "rgba(59,130,246,.015)"};">` +
                cells
                  .map(
                    (c) =>
                      `<td style="padding:.75rem 1rem;color:rgba(219,234,254,.82);border-bottom:1px solid rgba(96,165,250,.08);">${inline(c)}</td>`
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
                `<li style="color:rgba(219,234,254,.8);font-size:.95rem;line-height:1.7;list-style:none;padding-left:1.25rem;position:relative;">` +
                `<span style="position:absolute;left:0;top:.55em;width:6px;height:6px;border-radius:50%;background:#60a5fa;display:inline-block;"></span>` +
                inline(item) +
                `</li>`
            )
            .join("") +
          `</ul>`
      );
      continue;
    }

    if (/^\d+\.\s/.test(trimmed)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+\.\s/, ""));
        i++;
      }

      html.push(
        `<ol style="margin:1rem 0 1rem 1.5rem;display:flex;flex-direction:column;gap:.5rem;counter-reset:list-counter;">` +
          items
            .map(
              (item, idx) =>
                `<li style="color:rgba(219,234,254,.8);font-size:.95rem;line-height:1.7;list-style:none;padding-left:2rem;position:relative;counter-increment:list-counter;">` +
                `<span style="position:absolute;left:0;top:.1em;width:1.45rem;height:1.45rem;border-radius:50%;background:rgba(37,99,235,.22);border:1px solid rgba(96,165,250,.22);display:flex;align-items:center;justify-content:center;font-size:.72rem;font-weight:700;color:#bfdbfe;">${idx + 1}</span>` +
                inline(item) +
                `</li>`
            )
            .join("") +
          `</ol>`
      );
      continue;
    }

    html.push(
      `<p style="color:rgba(219,234,254,.82);font-size:.97rem;line-height:1.82;margin:.8rem 0;">${inline(trimmed)}</p>`
    );
    i++;
  }

  return html.join("\n");
}

// ---------------------------------------------------------------------------
// Category badge colours
// ---------------------------------------------------------------------------
const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  "Pay-Per-Call": { bg: "rgba(37,99,235,.14)", text: "#93c5fd", border: "rgba(37,99,235,.24)" },
  "Affiliate Marketing": { bg: "rgba(16,185,129,.14)", text: "#6ee7b7", border: "rgba(16,185,129,.24)" },
  "Lead Generation": { bg: "rgba(245,158,11,.14)", text: "#fcd34d", border: "rgba(245,158,11,.24)" },
  "Performance Marketing": { bg: "rgba(139,92,246,.14)", text: "#c4b5fd", border: "rgba(139,92,246,.24)" },
  "Fraud Prevention": { bg: "rgba(239,68,68,.14)", text: "#fca5a5", border: "rgba(239,68,68,.24)" },
};

const defaultColor = {
  bg: "rgba(96,165,250,.14)",
  text: "#bfdbfe",
  border: "rgba(96,165,250,.22)",
};

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
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const color = categoryColors[post.category] ?? defaultColor;
  const renderedContent = renderMarkdown(post.content);

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
<div className="min-h-screen" style={{ fontFamily: "'Outfit', sans-serif", background: "linear-gradient(180deg, #060913 0%, #08101d 48%, #060a12 100%)" }}>
  <div className="fixed pointer-events-none" style={{ top: "-180px", left: "-120px", width: "560px", height: "560px", borderRadius: "50%", background: "radial-gradient(circle, rgba(37,99,235,.46) 0%, rgba(30,64,175,.24) 42%, transparent 72%)", filter: "blur(90px)" }} />
  <div className="fixed pointer-events-none" style={{ bottom: "-160px", right: "-90px", width: "460px", height: "460px", borderRadius: "50%", background: "radial-gradient(circle, rgba(14,165,233,.34) 0%, rgba(3,105,161,.18) 45%, transparent 72%)", filter: "blur(90px)" }} />
  <div className="fixed pointer-events-none" style={{ top: "20%", left: "50%", transform: "translateX(-50%)", width: "320px", height: "320px", borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,.16) 0%, transparent 72%)", filter: "blur(80px)" }} />
  <div className="fixed inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(96,165,250,.09) 1px,transparent 1px),linear-gradient(90deg,rgba(96,165,250,.09) 1px,transparent 1px),linear-gradient(rgba(96,165,250,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(96,165,250,.03) 1px,transparent 1px)", backgroundSize: "56px 56px,56px 56px,14px 14px,14px 14px", WebkitMaskImage: "radial-gradient(circle at center,black 72%,transparent 100%)", maskImage: "radial-gradient(circle at center,black 72%,transparent 100%)" }} />      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
      <div className="fixed inset-0 pointer-events-none blog-grid-overlay" />

      <main className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 py-20">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs font-semibold mb-10 transition-colors hover:text-blue-300"
          style={{ color: "rgba(147,197,253,.72)" }}
        >
          <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
            <path
              d="M9.5 6h-7M5.5 9 2.5 6l3-3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to Blog
        </Link>

        {/* Article header */}
        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span
              className="px-2.5 py-1 rounded-md text-xs font-bold tracking-wide uppercase"
              style={{
                background: color.bg,
                color: color.text,
                border: `1px solid ${color.border}`,
              }}
            >
              {post.category}
            </span>

            <span className="text-xs" style={{ color: "rgba(191,219,254,.58)" }}>
              {post.readingTime} min read
            </span>

            <span className="text-xs" style={{ color: "rgba(191,219,254,.58)" }}>
              {formatDate(post.publishedAt)}
            </span>
          </div>

          <h1
            className="text-3xl sm:text-4xl font-black leading-tight mb-5"
            style={{
              color: "#f8fbff",
              letterSpacing: "-.02em",
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 900,
            }}
          >
            {post.title}
          </h1>

          <p
            className="text-base leading-relaxed mb-6"
            style={{ color: "rgba(191,219,254,.72)" }}
          >
            {post.excerpt}
          </p>

          {/* Author row */}
          <div
            className="flex items-center gap-3 pt-5"
            style={{ borderTop: "1px solid rgba(96,165,250,.1)" }}
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
              style={{
                background: "linear-gradient(135deg,#2563eb,#38bdf8)",
                color: "#fff",
                boxShadow: "0 10px 24px rgba(37,99,235,.22)",
              }}
            >
              H
            </div>
            <div>
              <p className="text-sm font-semibold" style={{ color: "#dbeafe" }}>
                {post.author}
              </p>
              <p className="text-xs" style={{ color: "rgba(191,219,254,.55)" }}>
                {post.authorTitle}
              </p>
            </div>
          </div>
        </header>

        {/* Divider */}
        <div
          className="h-px w-full mb-10"
          style={{
            background: "linear-gradient(90deg,#38bdf8,#2563eb,transparent)",
          }}
        />

        {/* Cover image hero */}
        {post.coverImage && (
          <div
            className="relative w-full rounded-2xl overflow-hidden mb-10"
            style={{
              height: "340px",
              boxShadow: "0 18px 50px rgba(2,8,23,.42)",
              border: "1px solid rgba(96,165,250,.1)",
            }}
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
                background:
                  "linear-gradient(to bottom, rgba(8,16,29,.06) 20%, rgba(8,16,29,.64) 100%)",
              }}
            />
          </div>
        )}

        {/* Article body */}
        <article
          className="prose-hawks rounded-3xl p-6 sm:p-8"
          style={{
            background: "linear-gradient(180deg, rgba(13,24,45,.68) 0%, rgba(8,16,29,.78) 100%)",
            border: "1px solid rgba(96,165,250,.1)",
            backdropFilter: "blur(14px)",
            boxShadow: "0 20px 60px rgba(2,8,23,.22)",
          }}
          dangerouslySetInnerHTML={{ __html: renderedContent }}
        />

        {/* Tags */}
        {post.tags.length > 0 && (
          <div
            className="mt-14 pt-8"
            style={{ borderTop: "1px solid rgba(96,165,250,.1)" }}
          >
            <p
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: "rgba(147,197,253,.7)" }}
            >
              Tags
            </p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs"
                  style={{
                    background: "rgba(15,23,42,.48)",
                    border: "1px solid rgba(96,165,250,.12)",
                    color: "rgba(191,219,254,.72)",
                    backdropFilter: "blur(8px)",
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
              "linear-gradient(135deg, rgba(37,99,235,.18) 0%, rgba(56,189,248,.1) 100%)",
            border: "1px solid rgba(96,165,250,.16)",
            boxShadow: "0 18px 50px rgba(2,8,23,.2)",
            backdropFilter: "blur(14px)",
          }}
        >
          <p
            className="text-lg font-black mb-2"
            style={{ color: "#f1f5f9", fontFamily: "'Outfit',sans-serif" }}
          >
            Ready to scale with performance marketing?
          </p>

          <p className="text-sm mb-6" style={{ color: "rgba(191,219,254,.7)" }}>
            Hawks Media connects advertisers and publishers to high-quality
            inbound calls across insurance, legal, home services, and more.
          </p>

          <Link
            href="/"
            className="inline-block px-8 py-3 rounded-xl text-sm font-bold text-white transition-all hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg,#2563eb,#38bdf8)",
              boxShadow: "0 12px 28px rgba(37,99,235,.34)",
            }}
          >
            Get Started with Hawks Media
          </Link>
        </div>
      </main>
    </div>
  );
}
