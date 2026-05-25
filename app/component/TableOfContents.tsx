"use client";

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings: Heading[];
  title?: string;
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  if (headings.length === 0) return null;

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="border border-brand-border rounded-xl bg-brand-card p-5 sticky top-24">
      <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
        Table of Contents
      </h3>
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li key={heading.id}>
            <button
              onClick={() => handleClick(heading.id)}
              className={`text-left w-full text-sm transition-colors hover:text-brand-orange ${
                heading.level === 3
                  ? "pl-4 text-gray-500 text-xs"
                  : "text-gray-300"
              }`}
            >
              {heading.text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
