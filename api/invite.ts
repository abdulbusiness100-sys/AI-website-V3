// /r/<CODE> (vercel.json rewrites it here): the normal SPA page, with the invite's own link-preview tags, so iMessage and
// WhatsApp show "Abdul invited you to SPIDXR" and a personal card. Everyone gets the same page; the SPA runs as before.
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { inviteCopy, lookupInvite, normalCode } from "./_invite.js";

// The built page (vite → dist/public; vercel.json includes it in this function). Read once per instance.
const SPA = readFileSync(join(process.cwd(), "dist/public/index.html"), "utf8");
// index.html's own title, description, og:* and twitter:* tags; the invite's replace them.
const PREVIEW_TAGS = /\s*<(?:title>[^<]*<\/title|meta (?:name|property)="(?:description|og:[^"]+|twitter:[^"]+)"[^>]*)>/g;

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
const meta = (attr: "name" | "property", key: string, value: string) => `<meta ${attr}="${key}" content="${esc(value)}" />`;

export async function GET(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const code = normalCode(url.searchParams.get("code"));
  const invite = await lookupInvite(code);
  const { title, description } = inviteCopy(invite);
  const image = `${url.origin}/api/og/invite${invite ? `?code=${code}` : ""}`;
  const tags = [
    `<title>${esc(title)}</title>`,
    meta("name", "description", description),
    meta("property", "og:type", "website"),
    meta("property", "og:site_name", "SPIDXR"),
    ...(code ? [meta("property", "og:url", `${url.origin}/r/${code}`)] : []),
    meta("property", "og:title", title),
    meta("property", "og:description", description),
    meta("property", "og:image", image),
    meta("property", "og:image:type", "image/png"),
    meta("property", "og:image:width", "1200"),
    meta("property", "og:image:height", "630"),
    meta("property", "og:image:alt", title),
    meta("name", "twitter:card", "summary_large_image"),
    meta("name", "twitter:title", title),
    meta("name", "twitter:description", description),
    meta("name", "twitter:image", image),
  ];
  const html = SPA.replace(PREVIEW_TAGS, "").replace(/\s*<\/head>/, `\n    ${tags.join("\n    ")}\n  </head>`);
  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      // 5 minutes at Vercel's edge, so a shared link asks the app's server about once per 5 minutes per region.
      "cache-control": "public, max-age=0, s-maxage=300, stale-while-revalidate=300",
      // A personal invite page is for the person it was sent to, not for search results.
      "x-robots-tag": "noindex",
    },
  });
}
