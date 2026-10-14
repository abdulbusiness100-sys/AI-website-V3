import { useEffect, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { GOLD, GRAIN, SANS, SERIF } from "@/pages/LegalPages";

// Refer a friend (Points v2, 12 Oct 2026). A friend's invite QR encodes https://www.spidxr.co.uk/r/<CODE>.
// This page opens the app on the same code (spidxrexpo://r/<CODE>), where it is kept until the account
// exists and then claimed. Codes: 7 characters, no look-alikes — the same rule as the app
// (convex/paymentConfig.ts REFERRAL_ALPHABET).
const CODE_RE = /^[23456789ABCDEFGHJKMNPQRSTUVWXYZ]{7}$/;
const FRIEND_POINTS = 250;
// The App Store listing — null while SPIDXR is TestFlight-only. Set it at launch; nothing else changes.
const APP_STORE_URL: string | null = null;

// Invite through the install (14 Oct): "Get the app" copies the invite link, and the app reads it ONCE
// on its first launch (iOS asks "Allow Paste" first; lib/inviteHandoff.ts). text/uri-list makes it a URL
// on the iPhone's clipboard — the app only looks when a URL is there, so nobody else gets a prompt.
async function copyInvite(url: string): Promise<boolean> {
  try {
    if (typeof ClipboardItem !== "undefined" && navigator.clipboard?.write) {
      await navigator.clipboard.write([
        new ClipboardItem({
          "text/uri-list": new Blob([url], { type: "text/uri-list" }),
          "text/plain": new Blob([url], { type: "text/plain" }),
        }),
      ]);
      return true;
    }
  } catch {
    // a browser without text/uri-list: plain text below
  }
  try {
    await navigator.clipboard.writeText(url);
    return true;
  } catch {
    return false;
  }
}

export default function ReferralPage({ params }: { params: { code?: string } }) {
  const raw = (params.code ?? "").trim().toUpperCase();
  const code = CODE_RE.test(raw) ? raw : null;
  const [copied, setCopied] = useState<boolean | null>(null);

  const getTheApp = async () => {
    if (!code) return;
    const ok = await copyInvite(`https://www.spidxr.co.uk/r/${code}`);
    setCopied(ok);
    if (APP_STORE_URL) window.location.href = APP_STORE_URL;
  };

  useEffect(() => {
    document.title = "Join SPIDXR | SPIDXR";
    window.scrollTo(0, 0);
  }, []);

  const rise = (delay: number) => ({
    initial: { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: "easeOut" as const },
  });

  return (
    <div className="relative min-h-screen overflow-x-hidden" style={{ background: "#080808", fontFamily: SANS }}>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0"
        style={{ background: "radial-gradient(ellipse 80% 55% at 50% 0%, rgba(201,169,110,0.18), transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0"
        style={{ backgroundImage: GRAIN, backgroundSize: "200px 200px", opacity: 0.045, mixBlendMode: "screen" }}
      />

      <div className="relative mx-auto flex min-h-screen max-w-xl flex-col px-5 pb-12 pt-8 sm:px-8">
        <header>
          <Link href="/" aria-label="SPIDXR home">
            <img src="/images/spidxr-logo.png" alt="SPIDXR" className="h-8 w-auto" style={{ mixBlendMode: "screen" }} />
          </Link>
        </header>

        <main className="flex flex-1 flex-col justify-center py-14">
          <motion.p {...rise(0)} className="text-xs font-medium uppercase tracking-[0.26em]" style={{ color: "rgba(201,169,110,0.88)" }}>
            You&apos;re invited
          </motion.p>
          <motion.h1
            {...rise(0.08)}
            className="mt-3 text-white"
            style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "clamp(40px, 9vw, 64px)", lineHeight: 1.05, letterSpacing: "-0.015em" }}
          >
            Join SPIDXR
          </motion.h1>
          <motion.div {...rise(0.14)} className="mt-6 h-px w-24" style={{ background: `linear-gradient(90deg, ${GOLD}, transparent)` }} />

          {code ? (
            <>
              <motion.p {...rise(0.2)} className="mt-6 text-[17px] leading-relaxed text-white/75">
                A friend has invited you to SPIDXR, the concierge for your building. Finish your first task and you get{" "}
                <strong className="text-white">{FRIEND_POINTS} points</strong>.
              </motion.p>

              <motion.div
                {...rise(0.28)}
                className="mt-9 rounded-3xl px-6 py-6"
                style={{ background: "rgba(255,255,255,0.045)", boxShadow: "0 24px 60px -24px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.05)" }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">Invite code</p>
                <p className="mt-2 text-[34px] font-bold text-white" style={{ letterSpacing: "0.22em" }} aria-label={`Invite code ${code.split("").join(" ")}`}>
                  {code}
                </p>
              </motion.div>

              <motion.div {...rise(0.36)} className="mt-8 flex flex-col gap-3">
                <a
                  href={`spidxrexpo://r/${code}`}
                  className="group inline-flex h-14 items-center justify-center rounded-full text-[17px] font-semibold text-black transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
                  style={{ background: "linear-gradient(120deg, #EAD9A8, #C9A96E 45%, #9C7A3C)", boxShadow: "0 14px 34px -12px rgba(201,169,110,0.55)" }}
                >
                  Open in SPIDXR
                  <span aria-hidden className="ml-2 transition-transform duration-200 group-hover:translate-x-1">→</span>
                </a>
                <button
                  type="button"
                  onClick={getTheApp}
                  className="inline-flex h-14 items-center justify-center rounded-full text-[16px] font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                >
                  {APP_STORE_URL ? "Get the app" : "Not installed yet? Keep my invite"}
                </button>
              </motion.div>

              <p aria-live="polite" className="mt-4 min-h-[1.25rem] text-sm leading-relaxed" style={{ color: copied === false ? "rgba(255,255,255,0.6)" : GOLD }}>
                {copied === true
                  ? "Invite saved to this phone. Install SPIDXR and open it — it asks once to paste your invite. Tap Allow."
                  : copied === false
                    ? "Couldn’t save the invite on this browser. After installing, scan your friend’s QR code from the app’s welcome screen."
                    : null}
              </p>

              <motion.p {...rise(0.44)} className="mt-4 text-sm leading-relaxed text-white/45">
                {APP_STORE_URL
                  ? "Get the app copies your invite link to this phone’s clipboard, so it’s still there after the install. SPIDXR reads it once, when you first open the app, and only if you allow it."
                  : "SPIDXR is in beta on TestFlight. Tap the button above to keep your invite on this phone, install SPIDXR from your friend’s TestFlight invite, then open it — it asks once to paste the invite. Already installed? Tap Open in SPIDXR."}{" "}
                You can also scan your friend&apos;s QR code from the app&apos;s welcome screen.
              </motion.p>
            </>
          ) : (
            <motion.p {...rise(0.2)} className="mt-6 text-[17px] leading-relaxed text-white/75">
              This invite link isn&apos;t complete. Ask your friend to share it again from the SPIDXR app (Account → Invite a
              friend).
            </motion.p>
          )}
        </main>

        <footer className="flex flex-col gap-3 pt-8 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} SPIDXR Vitality Innovations Ltd</p>
          <div className="flex gap-5">
            <Link href="/terms" className="hover:text-[#C9A96E]">Terms</Link>
            <Link href="/privacy" className="hover:text-[#C9A96E]">Privacy</Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
