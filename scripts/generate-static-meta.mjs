import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { getStaticMetaPages } from "../src/data/pageMeta.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, "../dist");
const indexPath = path.join(distDir, "index.html");

function escapeAttr(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;");
}

function setTitle(html, title) {
  return html.replace(/<title>[^<]*<\/title>/, `<title>${escapeAttr(title)}</title>`);
}

function setNamedMeta(html, name, content) {
  const regex = new RegExp(`<meta\\s+name="${name}"[^>]*>`, "i");
  const tag = `<meta name="${name}" content="${escapeAttr(content)}" />`;
  return regex.test(html) ? html.replace(regex, tag) : html.replace("</head>", `    ${tag}\n  </head>`);
}

function setPropertyMeta(html, property, content) {
  const regex = new RegExp(`<meta\\s+property="${property}"[^>]*>`, "i");
  const tag = `<meta property="${property}" content="${escapeAttr(content)}" />`;
  return regex.test(html) ? html.replace(regex, tag) : html.replace("</head>", `    ${tag}\n  </head>`);
}

function setCanonical(html, url) {
  const regex = /<link\s+rel="canonical"[^>]*>/i;
  const tag = `<link rel="canonical" href="${escapeAttr(url)}" />`;
  return regex.test(html) ? html.replace(regex, tag) : html.replace("</head>", `    ${tag}\n  </head>`);
}

function injectMeta(html, meta) {
  let result = html;
  result = setTitle(result, meta.title);
  result = setNamedMeta(result, "description", meta.description);
  result = setCanonical(result, meta.url);

  result = setPropertyMeta(result, "og:url", meta.url);
  result = setPropertyMeta(result, "og:title", meta.title);
  result = setPropertyMeta(result, "og:description", meta.description);
  result = setPropertyMeta(result, "og:image", meta.image);
  result = setPropertyMeta(result, "og:image:alt", meta.imageAlt);

  result = setNamedMeta(result, "twitter:title", meta.title);
  result = setNamedMeta(result, "twitter:description", meta.description);
  result = setNamedMeta(result, "twitter:image", meta.image);
  result = setNamedMeta(result, "twitter:image:alt", meta.imageAlt);

  return result;
}

if (!fs.existsSync(indexPath)) {
  console.error("dist/index.html not found. Run vite build first.");
  process.exit(1);
}

const baseHtml = fs.readFileSync(indexPath, "utf8");
fs.writeFileSync(path.join(distDir, "404.html"), baseHtml);

for (const page of getStaticMetaPages()) {
  const html = injectMeta(baseHtml, page.meta);
  const outputPath = path.join(distDir, page.file);
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, html);
  console.log(`Generated OG page: ${page.file}`);
}

console.log("Generated dist/404.html for GitHub Pages SPA fallback.");
