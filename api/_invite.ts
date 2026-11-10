// Personal invite link previews (Abdul, 9 Nov 2026: "Yes, make it personal"). Shared by api/invite.ts (the /r/<CODE> page's
// preview tags) and api/og/invite.ts (its share image). The app's Convex route GET /referral/preview?code=<CODE> answers
// { firstName, points } for a friend's code, else 404 (SPIDXRAPP convex/referrals.ts). Anything but a good answer → the
// generic "You're invited to SPIDXR" card, never an error.

/** The same rule as the app (convex/paymentConfig.ts REFERRAL_ALPHABET, REFERRAL_CODE_LENGTH). */
const CODE_RE = /^[23456789ABCDEFGHJKMNPQRSTUVWXYZ]{7}$/;
/** Production by default; a *.convex.site origin is public. Set SPIDXR_CONVEX_SITE_URL to point a preview at another deployment. */
const CONVEX_SITE_URL = process.env.SPIDXR_CONVEX_SITE_URL || "https://valuable-condor-597.eu-west-1.convex.site";

export type Invite = { firstName: string | null; points: number };

export function normalCode(raw: string | null): string | null {
  const code = (raw ?? "").trim().toUpperCase();
  return CODE_RE.test(code) ? code : null;
}

/** The invite behind a code, or null: unknown, malformed, rate limited, slow (2.5 s) or down. */
export async function lookupInvite(code: string | null): Promise<Invite | null> {
  if (!code) return null;
  try {
    const res = await fetch(`${CONVEX_SITE_URL}/referral/preview?code=${code}`, { signal: AbortSignal.timeout(2500) });
    if (!res.ok) return null;
    const body = (await res.json()) as { firstName?: unknown; points?: unknown };
    if (typeof body.points !== "number" || !Number.isInteger(body.points) || body.points <= 0) return null;
    const name = typeof body.firstName === "string" ? Array.from(body.firstName.trim()).slice(0, 20).join("") : "";
    return { firstName: name || null, points: body.points };
  } catch {
    return null;
  }
}

export function inviteCopy(invite: Invite | null) {
  return {
    title: invite?.firstName ? `${invite.firstName} invited you to SPIDXR` : "You're invited to SPIDXR",
    description: invite
      ? `Your personal concierge. ${invite.points} points waiting after your first task.` // points only, no £ (Abdul, 10 Nov)
      : "Your personal concierge.",
  };
}
