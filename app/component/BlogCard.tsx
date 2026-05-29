import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/types/blog";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

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

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function CategoryPlaceholder({
  category,
  color,
}: {
  category: string;
  color: { bg: string; text: string };
}) {
  return (
    <div
      className="w-full h-full flex items-center justify-center"
      style={{
        background: `linear-gradient(135deg, ${color.bg.replace(".14", ".22")}, rgba(10,18,35,1))`,
      }}
    >
      <span
        className="text-xs font-bold uppercase tracking-widest opacity-40"
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
            background:
              "linear-gradient(180deg, rgba(15,23,42,.78) 0%, rgba(10,18,35,.92) 100%)",
            border: "1px solid rgba(96,165,250,.12)",
            boxShadow: "0 18px 40px rgba(2,8,23,.22)",
            backdropFilter: "blur(12px)",
          }}
        >
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

            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(8,16,29,.05) 35%, rgba(8,16,29,.88) 100%)",
              }}
            />

            <div className="absolute bottom-3 left-4 flex items-center gap-2">
              <span
                className="px-2.5 py-1 rounded-md text-xs font-semibold tracking-wide uppercase backdrop-blur-sm"
                style={{
                  background: color.bg,
                  color: color.text,
                  border: `1px solid ${color.border}`,
                }}
              >
                {post.category}
              </span>

              <span
                className="text-xs backdrop-blur-sm px-2 py-0.5 rounded"
                style={{
                  color: "rgba(219,234,254,.84)",
                  background: "rgba(8,16,29,.45)",
                  border: "1px solid rgba(96,165,250,.1)",
                }}
              >
                {post.readingTime} min read
              </span>
            </div>
          </div>

          <div className="p-6 flex flex-col flex-1">
            <h2
              className="text-lg font-bold mb-3 leading-snug transition-colors group-hover:text-blue-300"
              style={{
                color: "#f1f5f9",
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 800,
              }}
            >
              {post.title}
            </h2>

            <p
              className="text-sm leading-relaxed mb-5 flex-1 line-clamp-3"
              style={{ color: "rgba(191,219,254,.72)" }}
            >
              {post.excerpt}
            </p>

            <div
              className="flex items-center justify-between mt-auto pt-4"
              style={{ borderTop: "1px solid rgba(96,165,250,.08)" }}
            >
              <span className="text-xs" style={{ color: "rgba(191,219,254,.55)" }}>
                {formatDate(post.publishedAt)}
              </span>

              <span
                className="text-xs font-semibold flex items-center gap-1 transition-colors group-hover:text-blue-300"
                style={{ color: "rgba(147,197,253,.9)" }}
              >
                Read article
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="transition-transform group-hover:translate-x-0.5"
                >
                  <path
                    d="M2.5 6h7M6.5 3l3 3-3 3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <article
        className="relative h-full rounded-xl overflow-hidden transition-all duration-300 group-hover:-translate-y-0.5 flex flex-col"
        style={{
          background: "linear-gradient(180deg, rgba(15,23,42,.72) 0%, rgba(10,18,35,.9) 100%)",
          border: "1px solid rgba(96,165,250,.1)",
          boxShadow: "0 10px 28px rgba(2,8,23,.18)",
          backdropFilter: "blur(10px)",
        }}
      >
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
              style={{
                background:
                  "linear-gradient(to bottom, rgba(8,16,29,.04) 30%, rgba(8,16,29,.8) 100%)",
              }}
            />
          </div>
        )}

        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-center gap-2.5 mb-3">
            <span
              className="px-2 py-0.5 rounded text-xs font-semibold tracking-wide uppercase"
              style={{
                background: color.bg,
                color: color.text,
                border: `1px solid ${color.border}`,
              }}
            >
              {post.category}
            </span>

            <span className="text-xs" style={{ color: "rgba(191,219,254,.5)" }}>
              {post.readingTime} min
            </span>
          </div>

          <h2
            className="text-base font-bold mb-2 leading-snug transition-colors group-hover:text-blue-300"
            style={{
              color: "#dbeafe",
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700,
            }}
          >
            {post.title}
          </h2>

          <p
            className="text-xs leading-relaxed mb-4 flex-1 line-clamp-3"
            style={{ color: "rgba(191,219,254,.64)" }}
          >
            {post.excerpt}
          </p>

          <div
            className="flex items-center justify-between mt-auto pt-3"
            style={{ borderTop: "1px solid rgba(96,165,250,.07)" }}
          >
            <span className="text-xs" style={{ color: "rgba(191,219,254,.45)" }}>
              {formatDate(post.publishedAt)}
            </span>

            <span
              className="text-xs font-medium flex items-center gap-1 group-hover:text-blue-300 transition-colors"
              style={{ color: "rgba(147,197,253,.82)" }}
            >
              Read
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2.5 6h7M6.5 3l3 3-3 3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
