// /api/og/invite?code=<CODE>: the invite's 1200×630 share image. "Abdul invited you · 250 points waiting" on the dark brand
// ground, with the gold app-icon tile. No code, or no answer about it → the generic "You're invited" card, never an error.
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "@vercel/og";
import type { ReactElement } from "react";
import { lookupInvite, normalCode, type Invite } from "../_invite.js";

// Bundled with the function (vercel.json includeFiles). Space Grotesk only (Abdul, 5 Nov).
const file = (path: string) => readFileSync(join(process.cwd(), path));
const BOLD = file("api/_assets/SpaceGrotesk-Bold.ttf");
const MEDIUM = file("api/_assets/SpaceGrotesk-Medium.ttf");
const TILE = `data:image/png;base64,${file("client/public/icon-512.png").toString("base64")}`; // rounded, transparent corners
const WORDMARK = `data:image/svg+xml;base64,${file("client/src/assets/spidxr-wordmark.svg").toString("base64")}`;

const GOLD = "#D4B47A";
const TEXT_WIDTH = 640;

type El = { type: string; props: Record<string, unknown> };
const div = (style: Record<string, unknown>, ...children: (El | string)[]): El => ({
  type: "div",
  props: { style: { display: "flex", ...style }, children },
});
const img = (src: string, width: number, height: number, style: Record<string, unknown> = {}): El => ({
  type: "img",
  props: { src, width, height, style },
});
/** The largest size (up to `max`) at which `text` fits the text column on one line (bold caps ≈ 0.72 em wide). */
const fit = (text: string, max: number) => Math.min(max, Math.floor(TEXT_WIDTH / (Array.from(text).length * 0.72)));

export function card(invite: Invite | null): El {
  const name = invite?.firstName;
  const headline = name
    ? [
        div({ fontSize: fit(name, 104), color: "#FFFFFF", letterSpacing: -2, lineHeight: 1, wordBreak: "break-all" }, name),
        div({ fontSize: 60, color: "#EDE6DA", letterSpacing: -1, lineHeight: 1.1, marginTop: 6 }, "invited you"),
      ]
    : [div({ fontSize: fit("You're invited", 84), color: "#FFFFFF", letterSpacing: -2, lineHeight: 1 }, "You're invited")];
  return div(
    {
      width: "100%",
      height: "100%",
      alignItems: "center",
      padding: "0 84px",
      fontFamily: "Space Grotesk",
      backgroundColor: "#0A0A0A",
      backgroundImage:
        "radial-gradient(circle at 24% 50%, rgba(212,180,122,0.20) 0%, rgba(212,180,122,0.05) 30%, rgba(10,10,10,0) 58%), linear-gradient(135deg, #16120C 0%, #0A0A0A 55%, #050505 100%)",
    },
    // The faint gold grid of the brand ground.
    div({
      position: "absolute",
      top: 0,
      left: 0,
      width: 1200,
      height: 630,
      backgroundImage:
        "linear-gradient(rgba(212,180,122,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(212,180,122,0.05) 1px, transparent 1px)",
      backgroundSize: "48px 48px",
    }),
    img(TILE, 292, 292, { borderRadius: 65, boxShadow: "0 28px 90px rgba(0,0,0,0.65), 0 0 120px rgba(212,180,122,0.18)" }),
    div(
      { flexDirection: "column", marginLeft: 72, width: TEXT_WIDTH, fontWeight: 700 },
      img(WORDMARK, 168, 20),
      div({ flexDirection: "column", marginTop: 34 }, ...headline),
      ...(invite
        ? [
            div(
              {
                fontSize: 44,
                marginTop: 26,
                color: "transparent",
                backgroundImage: "linear-gradient(90deg, #EAD3A2 0%, #D4B47A 55%, #A88546 100%)",
                backgroundClip: "text",
              },
              `${invite.points} points waiting`
            ),
          ]
        : []),
      div({ width: 56, height: 2, marginTop: 30, backgroundColor: GOLD, opacity: 0.7 }),
      div({ fontSize: 25, fontWeight: 500, marginTop: 20, color: "#A39C90" }, "Your personal concierge")
    )
  );
}

export async function GET(req: Request): Promise<Response> {
  const invite = await lookupInvite(normalCode(new URL(req.url).searchParams.get("code")));
  return new ImageResponse(card(invite) as unknown as ReactElement, {
    width: 1200,
    height: 630,
    fonts: [
      { name: "Space Grotesk", data: BOLD, weight: 700, style: "normal" },
      { name: "Space Grotesk", data: MEDIUM, weight: 500, style: "normal" },
    ],
    // Not @vercel/og's default (a year, immutable): a name can change, and a fallback card must not stick.
    headers: { "cache-control": "public, max-age=300, s-maxage=300, stale-while-revalidate=300" },
  });
}
