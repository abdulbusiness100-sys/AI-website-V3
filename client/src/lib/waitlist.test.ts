// Run: npx tsx client/src/lib/waitlist.test.ts
import assert from "node:assert/strict";
import { cleanEmail, cleanMobile, cleanSource } from "./waitlist";

assert.equal(cleanMobile("07700 900123"), "+447700900123");
assert.equal(cleanMobile("+44 7700 900123"), "+447700900123");
assert.equal(cleanMobile("+44 (0)7700 900123"), "+447700900123");
assert.equal(cleanMobile("0044 7700 900123"), "+447700900123");
assert.equal(cleanMobile("020 7946 0018"), undefined); // landline
assert.equal(cleanMobile("0770090012"), undefined); // one digit short
assert.equal(cleanMobile("+1 415 555 0100"), undefined);

assert.equal(cleanEmail("  Ana@Example.CO.UK "), "ana@example.co.uk");
assert.equal(cleanEmail("ana@example"), undefined);
assert.equal(cleanEmail("ana example@x.com"), undefined);

assert.equal(cleanSource("qr-lobby-colliers"), "qr-lobby-colliers");
assert.equal(cleanSource(" QR-Lobby "), "qr-lobby");
assert.equal(cleanSource("qr--lobby"), "direct");
assert.equal(cleanSource("<script>"), "direct");
assert.equal(cleanSource("a".repeat(41)), "direct");
assert.equal(cleanSource(null), "direct");

console.log("waitlist checks pass");
