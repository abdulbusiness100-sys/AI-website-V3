// Waitlist field checks: the same rules as the server (app repo convex/waitlist.ts + convex/phone.ts, SPIDXRAPP#133).
// Change both together. Check: npx tsx client/src/lib/waitlist.test.ts

export const EMAIL_ERROR = "Enter a valid email address.";
export const MOBILE_ERROR = "Enter a UK mobile number, like 07700 900123.";

/** Trimmed, lowercased, a plain ASCII domain with a 2+ letter ending; else undefined. */
export function cleanEmail(raw: string): string | undefined {
  const email = raw.trim().toLowerCase();
  return email.length <= 254 && /^[^\s@<>",;]{1,64}@[a-z0-9-]+(?:\.[a-z0-9-]+)*\.[a-z]{2,}$/.test(email) ? email : undefined;
}

/** "07…", "+44 7…", "0044 7…" → "+447…"; a landline or anything else → undefined. */
export function cleanMobile(raw: string): string | undefined {
  if (raw.length > 32) return undefined;
  let d = raw.replace(/\D/g, "");
  if (d.startsWith("0044")) d = d.slice(4);
  else if (d.startsWith("44") && d.length >= 11) d = d.slice(2);
  if (d.startsWith("0")) d = d.slice(1);
  return /^7\d{9}$/.test(d) ? `+44${d}` : undefined;
}

/** The ?s= channel code: lowercase words joined by single hyphens, at most 40 characters; else "direct". */
export function cleanSource(raw: string | null): string {
  const source = (raw ?? "").trim().toLowerCase();
  return source.length <= 40 && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(source) ? source : "direct";
}
