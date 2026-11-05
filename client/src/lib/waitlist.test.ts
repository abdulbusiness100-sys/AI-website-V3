// Run: npx tsx client/src/lib/waitlist.test.ts
import assert from "node:assert/strict";
import { cleanEmail, cleanMobile, cleanSource, MOBILE_ERROR, PHONE_ERROR, phoneError, toE164 } from "./waitlist";
import { OTHER_COUNTRIES, TOP_COUNTRIES, countryByIso } from "./countries";

assert.equal(cleanMobile("07700 900123"), "+447700900123");
assert.equal(cleanMobile("+44 7700 900123"), "+447700900123");
assert.equal(cleanMobile("020 7946 0018"), undefined); // landline

// UK picker (the default): every way a UK mobile is typed still works.
for (const typed of ["07700 900123", "7700900123", "+44 7700 900123", "+44 (0)7700 900123", "0044 7700 900123", "44 7700 900123", "07700-900-123"])
  assert.equal(toE164("44", typed), "+447700900123", typed);
assert.equal(toE164("44", "020 7946 0018"), undefined); // UK landline
assert.equal(toE164("44", "0770090012"), undefined); // one digit short

// Other countries: separators and one leading 0 removed, 8–15 digits.
assert.equal(toE164("353", "087 123 4567"), "+353871234567"); // Ireland
assert.equal(toE164("234", "0803 123 4567"), "+2348031234567"); // Nigeria
assert.equal(toE164("91", "98765 43210"), "+919876543210"); // India
assert.equal(toE164("1", "(415) 555-0100"), "+14155550100"); // USA
assert.equal(toE164("39", "06 1234 5678"), "+390612345678"); // Italy keeps its 0
assert.equal(toE164("33", "06 12 34 56 78"), "+33612345678"); // France
assert.equal(toE164("33", "12"), undefined); // too short
assert.equal(toE164("33", "1234567890123456"), undefined); // too long
assert.equal(toE164("33", "06 12 ab 56 78"), undefined); // letters

// A complete "+…" number wins over the picker.
assert.equal(toE164("44", "+353 87 123 4567"), "+353871234567");
assert.equal(toE164("353", "+44 7700 900123"), "+447700900123");
assert.equal(toE164("353", "+44 20 7946 0018"), undefined); // UK landline via +44

assert.equal(phoneError("44", "020 7946 0018"), MOBILE_ERROR);
assert.equal(phoneError("353", "+44 20 7946 0018"), MOBILE_ERROR);
assert.equal(phoneError("33", "12"), PHONE_ERROR);
assert.equal(phoneError("44", "+33 12"), PHONE_ERROR);

// Country list: UK first and the default, no duplicates, the rest A–Z.
assert.equal(TOP_COUNTRIES[0].iso, "GB");
assert.equal(TOP_COUNTRIES.length, 23);
const all = [...TOP_COUNTRIES, ...OTHER_COUNTRIES];
assert.equal(new Set(all.map((c) => c.iso)).size, all.length);
assert.ok(all.length >= 240);
assert.ok(all.every((c) => /^[A-Z]{2}$/.test(c.iso) && /^[1-9]\d{0,2}$/.test(c.dial)));
assert.equal(countryByIso("NG").dial, "234");
assert.equal(countryByIso("??").iso, "GB");
const names = OTHER_COUNTRIES.map((c) => c.name);
assert.deepEqual(names, [...names].sort((a, b) => a.localeCompare(b, "en-GB")));

assert.equal(cleanEmail("  Ana@Example.CO.UK "), "ana@example.co.uk");
assert.equal(cleanEmail("ana@example"), undefined);
assert.equal(cleanSource("qr-lobby-colliers"), "qr-lobby-colliers");
assert.equal(cleanSource("<script>"), "direct");
assert.equal(cleanSource(null), "direct");

console.log(`waitlist checks pass (${all.length} countries)`);
