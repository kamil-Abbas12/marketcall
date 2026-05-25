import Link from "next/link";
import { BlogPost } from "@/types/blog";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

// Matched to Hero.tsx blue palette
const categoryColors: Record<string, string> = {
  "Pay-Per-Call":          "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  "Affiliate Marketing":   "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Lead Generation":       "bg-sky-500/10 text-sky-400 border-sky-500/20",
  "Performance Marketing": "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
  "Fraud Prevention":      "bg-red-500/10 text-red-400 border-red-500/20",
};

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  const colorClass =
    categoryColors[post.category] ||
    "bg-blue-500/10 text-blue-400 border-blue-500/20";

  const date = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  if (featured) {
    return (
      <Link href={`/blog/${post.slug}`} className="group block">
        <article
          className="relative border border-white/[0.08] rounded-2xl overflow-hidden h-full transition-all duration-300 hover:-translate-y-1"
          style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(12px)" }}
        >
          {/* Blue gradient accent bar — matches hero gradient */}
          <div className="absolute top-0 left-0 right-0 h-[2px]"
            style={{ background: "linear-gradient(135deg, #4cc9f0 0%, #4ea8de 35%, #3b82f6 65%, #2563eb 100%)" }} />

          <div className="p-7 flex flex-col h-full">
            <div className="flex items-center gap-3 mb-4">
              <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${colorClass}`}>
                {post.category}
              </span>
              {post.featured && (
                <span className="text-xs font-semibold px-3 py-1 rounded-full border bg-blue-500/10 text-blue-400 border-blue-500/20">
                  Featured
                </span>
              )}
            </div>

            <h2
              className="font-display text-2xl font-bold text-white mb-3 leading-tight transition-colors duration-200"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <span className="group-hover:text-transparent group-hover:bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg,#4cc9f0,#3b82f6)", WebkitBackgroundClip: "text" }}>
                {post.title}
              </span>
            </h2>

            <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: "rgba(140,160,185,.7)" }}>
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{ background: "linear-gradient(135deg,#1d4ed8,#0ea5e9)", color: "white" }}>
                  H
                </div>
                <div>
                  <p className="text-xs text-white font-medium">{post.author}</p>
                  <p className="text-xs" style={{ color: "rgba(140,160,185,.5)" }}>{date}</p>
                </div>
              </div>
              <span className="text-xs" style={{ color: "rgba(140,160,185,.5)" }}>{post.readingTime} min read</span>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article
        className="border border-white/[0.07] rounded-xl overflow-hidden h-full transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30"
        style={{ background: "rgba(255,255,255,0.03)" }}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex items-center gap-2 mb-3">
            <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${colorClass}`}>
              {post.category}
            </span>
            <span className="text-xs" style={{ color: "rgba(140,160,185,.5)" }}>{post.readingTime} min read</span>
          </div>

          <h3
            className="text-lg font-bold text-white mb-2 leading-snug transition-colors duration-200"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            <span className="group-hover:text-transparent group-hover:bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg,#4cc9f0,#3b82f6)", WebkitBackgroundClip: "text" }}>
              {post.title}
            </span>
          </h3>

          <p className="text-sm leading-relaxed mb-4 flex-1 line-clamp-3" style={{ color: "rgba(140,160,185,.7)" }}>
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between pt-3 border-t border-white/[0.06] mt-auto">
            <span className="text-xs" style={{ color: "rgba(140,160,185,.5)" }}>{date}</span>
            <span
              className="text-xs font-medium group-hover:underline"
              style={{ color: "#60a5fa" }}
            >
              Read more →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}