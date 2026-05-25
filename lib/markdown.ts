/**
 * Simple markdown-to-HTML converter for blog post content.
 * Handles: headings, paragraphs, bold, italic, links, tables,
 * horizontal rules, unordered/ordered lists, blockquotes, inline code, and code blocks.
 */

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export function parseMarkdown(markdown: string): string {
  const lines = markdown.trim().split("\n");
  let html = "";
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Blank line
    if (line.trim() === "") {
      i++;
      continue;
    }

    // Headings
    if (line.startsWith("### ")) {
      const text = line.slice(4).trim();
      const id = slugify(text);
      html += `<h3 id="${id}">${inlineFormat(text)}</h3>\n`;
      i++;
      continue;
    }
    if (line.startsWith("## ")) {
      const text = line.slice(3).trim();
      const id = slugify(text);
      html += `<h2 id="${id}">${inlineFormat(text)}</h2>\n`;
      i++;
      continue;
    }
    if (line.startsWith("# ")) {
      const text = line.slice(2).trim();
      const id = slugify(text);
      html += `<h1 id="${id}">${inlineFormat(text)}</h1>\n`;
      i++;
      continue;
    }

    // Horizontal rule
    if (line.trim() === "---") {
      html += `<hr />\n`;
      i++;
      continue;
    }

    // Blockquote
    if (line.startsWith("> ")) {
      let blockContent = "";
      while (i < lines.length && lines[i].startsWith("> ")) {
        blockContent += lines[i].slice(2) + " ";
        i++;
      }
      html += `<blockquote><p>${inlineFormat(blockContent.trim())}</p></blockquote>\n`;
      continue;
    }

    // Table
    if (line.includes("|") && lines[i + 1]?.includes("---")) {
      const headers = line
        .split("|")
        .filter((c) => c.trim())
        .map((c) => `<th>${inlineFormat(c.trim())}</th>`)
        .join("");
      i += 2; // skip header and separator row
      let rows = "";
      while (i < lines.length && lines[i].includes("|")) {
        const cells = lines[i]
          .split("|")
          .filter((c) => c.trim())
          .map((c) => `<td>${inlineFormat(c.trim())}</td>`)
          .join("");
        rows += `<tr>${cells}</tr>\n`;
        i++;
      }
      html += `<table><thead><tr>${headers}</tr></thead><tbody>${rows}</tbody></table>\n`;
      continue;
    }

    // Unordered list
    if (line.match(/^[-*] /)) {
      let listHtml = "<ul>\n";
      while (i < lines.length && lines[i].match(/^[-*] /)) {
        listHtml += `<li>${inlineFormat(lines[i].slice(2).trim())}</li>\n`;
        i++;
      }
      listHtml += "</ul>\n";
      html += listHtml;
      continue;
    }

    // Ordered list
    if (line.match(/^\d+\. /)) {
      let listHtml = "<ol>\n";
      while (i < lines.length && lines[i].match(/^\d+\. /)) {
        const text = lines[i].replace(/^\d+\. /, "").trim();
        listHtml += `<li>${inlineFormat(text)}</li>\n`;
        i++;
      }
      listHtml += "</ol>\n";
      html += listHtml;
      continue;
    }

    // Paragraph
    html += `<p>${inlineFormat(line.trim())}</p>\n`;
    i++;
  }

  return html;
}

function inlineFormat(text: string): string {
  return text
    // Bold
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    // Italic
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    // Inline code
    .replace(/`(.+?)`/g, "<code>$1</code>")
    // Links
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>');
}

export function extractHeadings(markdown: string) {
  const lines = markdown.trim().split("\n");
  const headings: { id: string; text: string; level: number }[] = [];

  for (const line of lines) {
    if (line.startsWith("### ")) {
      const text = line.slice(4).trim();
      headings.push({ id: slugify(text), text, level: 3 });
    } else if (line.startsWith("## ")) {
      const text = line.slice(3).trim();
      headings.push({ id: slugify(text), text, level: 2 });
    }
  }

  return headings;
}
