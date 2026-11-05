import { build as esbuild } from "esbuild";
import { build as viteBuild } from "vite";
import { rm, readFile, readdir } from "fs/promises";
import path from "path";

// server deps to bundle to reduce openat(2) syscalls
// which helps cold start times
const allowlist = [
  "@google/generative-ai",
  "axios",
  "connect-pg-simple",
  "cors",
  "date-fns",
  "drizzle-orm",
  "drizzle-zod",
  "express",
  "express-rate-limit",
  "express-session",
  "jsonwebtoken",
  "memorystore",
  "multer",
  "nanoid",
  "nodemailer",
  "openai",
  "passport",
  "passport-local",
  "pg",
  "stripe",
  "uuid",
  "ws",
  "xlsx",
  "zod",
  "zod-validation-error",
];

async function buildAll() {
  await rm("dist", { recursive: true, force: true });

  console.log("building client...");
  await viteBuild();
  await checkFonts("dist/public");

  console.log("building server...");
  const pkg = JSON.parse(await readFile("package.json", "utf-8"));
  const allDeps = [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.devDependencies || {}),
  ];
  const externals = allDeps.filter((dep) => !allowlist.includes(dep));

  await esbuild({
    entryPoints: ["server/index.ts"],
    platform: "node",
    bundle: true,
    format: "cjs",
    outfile: "dist/index.cjs",
    define: {
      "process.env.NODE_ENV": '"production"',
    },
    minify: true,
    external: externals,
    logLevel: "info",
  });
}

// Space Grotesk only (Abdul, 5 Nov 2026). The build fails if the built site names any other face — in CSS
// (font-family, font shorthand), JS (fontFamily, font stacks held in constants), SVG text or index.html — or
// stops loading Space Grotesk. Allowed: Space Grotesk, Font Awesome (its icon font), generic fallbacks after it.
const GENERIC = new Set(["serif", "sans-serif", "monospace", "cursive", "fantasy", "system-ui", "ui-sans-serif", "ui-serif", "ui-monospace", "ui-rounded", "emoji", "math", "fangsong"]);
const KEYWORD = /^(inherit|initial|unset|revert|revert-layer)$/;
const OTHER_FACE = /["'`](?:Helvetica|Arial|Georgia|Montserrat|Inter|Roboto|Menlo|Monaco|Consolas|Courier New|Segoe UI|Times New Roman|Playfair Display|Lucida|Tahoma|Verdana|Syne|-apple-system|BlinkMacSystemFont)\b/;

export function badStack(stack: string): boolean {
  const value = stack.trim().replace(/\s*!important$/, "");
  if (KEYWORD.test(value)) return false;
  const [first, ...rest] = value.split(",").map((f) => f.trim().replace(/^["']|["']$/g, ""));
  return !(first === "Space Grotesk" || /^Font Awesome/.test(first)) || rest.some((f) => !GENERIC.has(f));
}

async function checkFonts(dir: string) {
  const bad: string[] = [];
  const files = (await readdir(dir, { recursive: true })).filter((f) => /\.(css|js|html|svg)$/.test(f));
  for (const file of files) {
    const src = await readFile(path.join(dir, file), "utf-8");
    const flag = (what: string) => bad.push(`${file}: ${what.slice(0, 120)}`);
    for (const m of src.matchAll(/font-family\s*[:=]\s*("[^"]*"|'[^']*'|[^;}"'<>\n]+)/g)) {
      const v = m[1].replace(/^"(.*)"$/, "$1");
      if (badStack(v)) flag(m[0]);
    }
    // font shorthand: [style] [weight] size[/line-height] families — a CSS declaration, or a quoted value in JS
    const shorthand = file.endsWith(".css") ? /(?<![-\w])font:\s*()([^;}"\n]+)/g : /(?<![-\w])font\s*:\s*(["'`])((?:(?!\1).)*)\1/g;
    for (const m of src.matchAll(shorthand)) {
      const v = m[2].trim();
      if (!KEYWORD.test(v) && badStack(v.replace(/^.*\d[\w.%]*(?:\/[\w.%-]+)?\s+/, ""))) flag(m[0]);
    }
    for (const m of src.matchAll(/fontFamily\s*:\s*("[^"]*"|'[^']*'|`[^`]*`)/g)) if (badStack(m[1].slice(1, -1))) flag(m[0]);
    // a font stack kept in a constant ("X, Y, serif") and any well-known face named in a string
    for (const m of src.matchAll(/(["'`])((?:(?!\1)[^\n]){0,120}?,\s*(?:sans-serif|serif|monospace|system-ui)\s*)\1/g)) if (badStack(m[2])) flag(m[0]);
    const other = src.match(OTHER_FACE);
    if (other) flag(src.slice(other.index!, other.index! + 60));
  }
  const html = await readFile(path.join(dir, "index.html"), "utf-8");
  const families = [...html.matchAll(/fonts\.googleapis\.com\/css2?\?[^"']*/g)].flatMap((m) => [...m[0].matchAll(/family=([^:&]+)/g)].map((f) => f[1]));
  if (!families.includes("Space+Grotesk")) bad.push("index.html: doesn't load Space Grotesk from Google Fonts");
  for (const f of families.filter((f) => f !== "Space+Grotesk")) bad.push(`index.html: loads ${f}`);
  if (bad.length) throw new Error(`Space Grotesk only — another font is named in the build:\n  ${bad.join("\n  ")}`);
  console.log(`fonts: Space Grotesk only (${files.length} files checked)`);
}

buildAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
