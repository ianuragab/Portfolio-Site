export type TocItem = {
  id: string;
  text: string;
  level: 2 | 3;
};

export const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

export const getTableOfContents = (markdown: string): TocItem[] =>
  markdown
    .split("\n")
    .filter((line) => /^#{2,3}\s/.test(line))
    .map((line) => {
      const level = line.startsWith("###") ? 3 : 2;
      const text = line.replace(/^#{2,3}\s/, "").trim();
      return { id: slugify(text), text, level };
    });

export const renderMarkdown = (markdown: string) => {
  const lines = markdown.split("\n");
  const html: string[] = [];
  let inCodeBlock = false;
  let codeLanguage = "";
  let paragraph: string[] = [];

  const flushParagraph = () => {
    if (!paragraph.length) return;
    html.push(`<p>${paragraph.map(escapeHtml).join(" ")}</p>`);
    paragraph = [];
  };

  lines.forEach((line) => {
    if (line.startsWith("```")) {
      flushParagraph();
      if (inCodeBlock) {
        html.push("</code></pre>");
        inCodeBlock = false;
        codeLanguage = "";
      } else {
        codeLanguage = line.replace("```", "").trim();
        html.push(
          `<pre><code${codeLanguage ? ` class="language-${codeLanguage}"` : ""}>`,
        );
        inCodeBlock = true;
      }
      return;
    }

    if (inCodeBlock) {
      html.push(escapeHtml(line));
      return;
    }

    if (!line.trim()) {
      flushParagraph();
      return;
    }

    if (line.startsWith("### ")) {
      flushParagraph();
      const text = line.replace("### ", "").trim();
      html.push(`<h3 id="${slugify(text)}">${escapeHtml(text)}</h3>`);
      return;
    }

    if (line.startsWith("## ")) {
      flushParagraph();
      const text = line.replace("## ", "").trim();
      html.push(`<h2 id="${slugify(text)}">${escapeHtml(text)}</h2>`);
      return;
    }

    paragraph.push(line.trim());
  });

  flushParagraph();
  return html.join("\n");
};
