import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/types/blog";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  "Pay-Per-Call":         { bg: "rgba(37,99,235,.12)",  text: "#60a5fa", border: "rgba(37,99,235,.25)" },
  "Affiliate Marketing":  { bg: "rgba(16,185,129,.12)", text: "#34d399", border: "rgba(16,185,129,.25)" },
  "Lead Generation":      { bg: "rgba(245,158,11,.12)", text: "#fbbf24", border: "rgba(245,158,11,.25)" },
  "Performance Marketing":{ bg: "rgba(139,92,246,.12)", text: "#a78bfa", border: "rgba(139,92,246,.25)" },
  "Fraud Prevention":     { bg: "rgba(239,68,68,.12)",  text: "#f87171", border: "rgba(239,68,68,.25)"  },
};

const defaultColor = { bg: "rgba(96,165,250,.12)", text: "#93c5fd", border: "rgba(96,165,250,.25)" };

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

// Fallback gradient placeholder when no coverImage is set
function CategoryPlaceholder({ category, color }: { category: string; color: { bg: string; text: string } }) {
  return (
    <div
      className="w-full h-full flex items-center justify-center"
      style={{ background: `linear-gradient(135deg, ${color.bg.replace(".12", ".18")}, rgba(7,9,15,1))` }}
    >
      <span
        className="text-xs font-bold uppercase tracking-widest opacity-30"
        style={{ color: color.text }}
      >
        {category}
      </span>
    </div>
  );
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  const color = categoryColors[post.category] ?? defaultColor;
  const imgSrc = post.coverImage ?? null;

  if (featured) {
    return (
      <Link href={`/blog/${post.slug}`} className="group block h-full">
        <article
          className="relative h-full rounded-2xl overflow-hidden transition-all duration-300 group-hover:-translate-y-1 flex flex-col"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,.04) 0%, rgba(255,255,255,.02) 100%)",
            border: "1px solid rgba(255,255,255,.08)",
            boxShadow: "0 4px 24px rgba(0,0,0,.3)",
          }}
        >
          {/* Cover image / placeholder */}
          <div className="relative w-full overflow-hidden flex-shrink-0" style={{ height: "180px" }}>
            {imgSrc ? (
              <Image
                src={imgSrc}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <CategoryPlaceholder category={post.category} color={color} />
            )}
            {/* Gradient fade into card body */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to bottom, transparent 40%, rgba(7,9,15,.85) 100%)",
              }}
            />
            {/* Category badge overlaid on image */}
            <div className="absolute bottom-3 left-4 flex items-center gap-2">
              <span
                className="px-2.5 py-1 rounded-md text-xs font-semibold tracking-wide uppercase backdrop-blur-sm"
                style={{ background: color.bg, color: color.text, border: `1px solid ${color.border}` }}
              >
                {post.category}
              </span>
              <span
                className="text-xs backdrop-blur-sm px-2 py-0.5 rounded"
                style={{ color: "rgba(203,213,225,.7)", background: "rgba(0,0,0,.3)" }}
              >
                {post.readingTime} min read
              </span>
            </div>
          </div>

          {/* Card body */}
          <div className="p-6 flex flex-col flex-1">
            <h2
              className="text-lg font-bold mb-3 leading-snug transition-colors group-hover:text-blue-400"
              style={{ color: "#e2e8f0", fontFamily: "'Outfit', sans-serif", fontWeight: 800 }}
            >
              {post.title}
            </h2>

            <p
              className="text-sm leading-relaxed mb-5 flex-1 line-clamp-3"
              style={{ color: "rgba(140,160,185,.7)" }}
            >
              {post.excerpt}
            </p>

            <div
              className="flex items-center justify-between mt-auto pt-4"
              style={{ borderTop: "1px solid rgba(255,255,255,.06)" }}
            >
              <span className="text-xs" style={{ color: "rgba(140,160,185,.5)" }}>
                {formatDate(post.publishedAt)}
              </span>
              <span
                className="text-xs font-semibold flex items-center gap-1 transition-colors group-hover:text-blue-400"
                style={{ color: "rgba(96,165,250,.8)" }}
              >
                Read article
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform group-hover:translate-x-0.5">
                  <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  // Standard (non-featured) card
  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <article
        className="relative h-full rounded-xl overflow-hidden transition-all duration-300 group-hover:-translate-y-0.5 flex flex-col"
        style={{
          background: "rgba(255,255,255,.025)",
          border: "1px solid rgba(255,255,255,.07)",
          boxShadow: "0 2px 12px rgba(0,0,0,.2)",
        }}
      >
        {/* Cover image (compact) */}
        {imgSrc && (
          <div className="relative w-full flex-shrink-0 overflow-hidden" style={{ height: "140px" }}>
            <Image
              src={imgSrc}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to bottom, transparent 30%, rgba(7,9,15,.75) 100%)" }}
            />
          </div>
        )}

        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-center gap-2.5 mb-3">
            <span
              className="px-2 py-0.5 rounded text-xs font-semibold tracking-wide uppercase"
              style={{ background: color.bg, color: color.text, border: `1px solid ${color.border}` }}
            >
              {post.category}
            </span>
            <span className="text-xs" style={{ color: "rgba(140,160,185,.45)" }}>
              {post.readingTime} min
            </span>
          </div>

          <h2
            className="text-base font-bold mb-2 leading-snug transition-colors group-hover:text-blue-400"
            style={{ color: "#cbd5e1", fontFamily: "'Outfit', sans-serif", fontWeight: 700 }}
          >
            {post.title}
          </h2>

          <p
            className="text-xs leading-relaxed mb-4 flex-1 line-clamp-3"
            style={{ color: "rgba(140,160,185,.6)" }}
          >
            {post.excerpt}
          </p>

          <div
            className="flex items-center justify-between mt-auto pt-3"
            style={{ borderTop: "1px solid rgba(255,255,255,.05)" }}
          >
            <span className="text-xs" style={{ color: "rgba(140,160,185,.4)" }}>
              {formatDate(post.publishedAt)}
            </span>
            <span
              className="text-xs font-medium flex items-center gap-1 group-hover:text-blue-400 transition-colors"
              style={{ color: "rgba(96,165,250,.65)" }}
            >
              Read
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}