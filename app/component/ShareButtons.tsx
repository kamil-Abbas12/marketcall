"use client";

interface ShareButtonsProps {
  title: string;
  slug: string;
}

export default function ShareButtons({
  title,
  slug,
}: ShareButtonsProps) {
  const url = `https://hawksmediallc.com/blog/${slug}`;

  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);

  return (
    <div className="flex items-center gap-3 flex-wrap">
      <p
        className="text-xs uppercase tracking-widest"
        style={{ color: "rgba(140,160,185,.5)" }}
      >
        Share
      </p>

      <a
        href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1.5 rounded-lg text-xs transition-colors hover:text-blue-400"
        style={{
          border: "1px solid rgba(96,165,250,.15)",
          color: "rgba(200,210,230,.7)",
        }}
      >
        Twitter
      </a>

      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1.5 rounded-lg text-xs transition-colors hover:text-blue-400"
        style={{
          border: "1px solid rgba(96,165,250,.15)",
          color: "rgba(200,210,230,.7)",
        }}
      >
        LinkedIn
      </a>

      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1.5 rounded-lg text-xs transition-colors hover:text-blue-400"
        style={{
          border: "1px solid rgba(96,165,250,.15)",
          color: "rgba(200,210,230,.7)",
        }}
      >
        Facebook
      </a>
    </div>
  );
}