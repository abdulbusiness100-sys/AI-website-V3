// Waitlist field checks: the same rules as the server (app repo convex/waitlist.ts + convex/phone.ts, SPIDXRAPP#133).
// Change both together. Check: npx tsx client/src/lib/waitlist.test.ts

export const EMAIL_ERROR = "Enter a valid email address.";
export const MOBILE_ERROR = "Enter a UK mobile number, like 07700 900123.";
export const PHONE_ERROR = "Enter a valid mobile number.";

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

/**
 * The mobile field + its country code → E.164 ("+447700900123"), or undefined.
 * - A number typed with "+" or "00" is taken as complete, whatever the country picker says (autofill gives "+44 …").
 * - UK (+44): a UK mobile only, as the server requires ("07…", "7…", "+44 (0)7…" all work).
 * - Elsewhere: spaces, dashes, brackets and dots removed, one leading 0 (trunk prefix) dropped, then 8–15 digits.
 *   Italy (+39) keeps its 0: there it is part of the number.
 */
export function toE164(dial: string, raw: string): string | undefined {
  const typed = raw.trim().replace(/\(0\)/g, "");
  if (typed.length > 32 || !/^(\+|00)?[\d\s\-().]+$/.test(typed)) return undefined;
  let digits = typed.replace(/\D/g, "");
  if (/^(\+|00)/.test(typed)) {
    if (typed.startsWith("00")) digits = digits.slice(2);
  } else {
    if (dial === "44") return cleanMobile(digits);
    if (dial !== "39") digits = digits.replace(/^0/, "");
    digits = dial + digits;
  }
  if (digits.startsWith("44")) return cleanMobile(digits.slice(2));
  return /^[1-9]\d{7,14}$/.test(digits) ? `+${digits}` : undefined;
}

/** The message for a number toE164 refused: the UK wording when it's a UK number (by picker or by "+44"). */
export function phoneError(dial: string, raw: string): string {
  const typed = raw.trim();
  const international = /^(\+|00)/.test(typed);
  return (international ? /^(\+|00)\s*44/.test(typed) : dial === "44") ? MOBILE_ERROR : PHONE_ERROR;
}

/** The ?s= channel code: lowercase words joined by single hyphens, at most 40 characters; else "direct". */
export function cleanSource(raw: string | null): string {
  const source = (raw ?? "").trim().toLowerCase();
  return source.length <= 40 && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(source) ? source : "direct";
}
