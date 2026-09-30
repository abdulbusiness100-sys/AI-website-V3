import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Waitlist Modal ───────────────────────────────────────────────────────────
function WaitlistModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 16px",
    borderRadius: 12,
    border: "1px solid rgba(201,169,110,0.35)",
    background: "rgba(255,255,255,0.06)",
    color: "#fff",
    fontSize: 15,
    fontFamily: "'Space Grotesk', sans-serif",
    outline: "none",
    backdropFilter: "blur(4px)",
    boxSizing: "border-box" as const,
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim()) {
      setErrorMsg("Please fill in all fields.");
      return;
    }
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), phone: phone.trim() }),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          style={{
            position: "fixed", inset: 0, zIndex: 100,
            display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem",
            background: "rgba(0,0,0,0.82)",
            backdropFilter: "blur(16px)",
          }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.93, opacity: 0, y: 24 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.93, opacity: 0, y: 24 }}
            transition={{ type: "spring", damping: 28, stiffness: 340 }}
            style={{
              position: "relative", width: "100%", maxWidth: 420,
              background: "rgba(8,8,8,0.97)",
              borderRadius: 24, overflow: "hidden",
              border: "1px solid rgba(201,169,110,0.25)",
              boxShadow: "0 40px 100px rgba(0,0,0,0.8)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Gold top bar */}
            <div style={{ height: 3, background: "linear-gradient(90deg, #6B4C1E, #C9A96E, #EDD9A3, #C9A96E, #6B4C1E)" }} />

            {/* Close */}
            <button
              onClick={onClose}
              style={{ position: "absolute", top: 16, right: 16, background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.4)", padding: 4, lineHeight: 1 }}
              aria-label="Close"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 3l12 12M15 3L3 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>

            <div style={{ padding: "28px 28px 32px" }}>
              {status === "success" ? (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: "center", padding: "20px 0" }}>
                  <div style={{
                    width: 60, height: 60, borderRadius: "50%",
                    background: "rgba(201,169,110,0.12)",
                    border: "1px solid rgba(201,169,110,0.4)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 18px",
                  }}>
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                      <path d="M4 13l6 6L22 7" stroke="#C9A96E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 style={{ fontSize: 21, fontWeight: 700, color: "#fff", margin: "0 0 10px", fontFamily: "'Space Grotesk', sans-serif" }}>
                    You're on the list.
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, lineHeight: 1.65, fontFamily: "'Space Grotesk', sans-serif", margin: 0 }}>
                    We'll reach you before launch with your{" "}
                    <span style={{ color: "#C9A96E", fontWeight: 600 }}>50% lifetime discount</span>.
                  </p>
                </motion.div>
              ) : (
                <>
                  <div style={{ textAlign: "center", marginBottom: 22 }}>
                    <div style={{
                      display: "inline-flex", alignItems: "center", gap: 7,
                      padding: "5px 14px",
                      background: "rgba(201,169,110,0.1)",
                      border: "1px solid rgba(201,169,110,0.3)",
                      borderRadius: 100, marginBottom: 14,
                    }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M6 0.5l1.3 3.1L10.8 4l-2.4 2.2.7 3.3L6 8l-3.1 1.5.7-3.3L1.2 4l3.5-.4L6 .5z" fill="#C9A96E" />
                      </svg>
                      <span style={{ color: "#C9A96E", fontSize: 12, fontWeight: 700, letterSpacing: 1, fontFamily: "'Space Grotesk', sans-serif" }}>
                        50% LIFETIME DISCOUNT
                      </span>
                    </div>
                    <h3 style={{ fontSize: 21, fontWeight: 700, color: "#fff", margin: "0 0 8px", fontFamily: "'Space Grotesk', sans-serif" }}>
                      Join the Waitlist
                    </h3>
                    <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 13, lineHeight: 1.6, fontFamily: "'Space Grotesk', sans-serif", margin: 0 }}>
                      Be first in Manchester. Lock in 50% off, forever.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    <div>
                      <label style={{ display: "block", marginBottom: 5, fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.4)", fontFamily: "'Space Grotesk', sans-serif", letterSpacing: 1.2 }}>FULL NAME</label>
                      <input type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} autoComplete="name" />
                    </div>
                    <div>
                      <label style={{ display: "block", marginBottom: 5, fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.4)", fontFamily: "'Space Grotesk', sans-serif", letterSpacing: 1.2 }}>EMAIL ADDRESS</label>
                      <input type="email" placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} autoComplete="email" />
                    </div>
                    <div>
                      <label style={{ display: "block", marginBottom: 5, fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.4)", fontFamily: "'Space Grotesk', sans-serif", letterSpacing: 1.2 }}>PHONE NUMBER</label>
                      <input type="tel" placeholder="+44 7700 000000" value={phone} onChange={(e) => setPhone(e.target.value)} style={inputStyle} autoComplete="tel" />
                    </div>

                    {errorMsg && (
                      <p style={{ color: "#f87171", fontSize: 13, fontFamily: "'Space Grotesk', sans-serif", margin: 0 }}>{errorMsg}</p>
                    )}

                    <motion.button
                      type="submit"
                      disabled={status === "loading"}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      style={{
                        marginTop: 4, width: "100%", padding: "15px",
                        borderRadius: 14, border: "none",
                        background: "linear-gradient(135deg, #C9A96E, #A8813A)",
                        color: "#080808", fontSize: 14, fontWeight: 700,
                        fontFamily: "'Space Grotesk', sans-serif",
                        letterSpacing: 0.8, cursor: status === "loading" ? "wait" : "pointer",
                        opacity: status === "loading" ? 0.7 : 1,
                      }}
                    >
                      {status === "loading" ? "Securing your spot…" : "Secure My 50% Discount →"}
                    </motion.button>

                    <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 11, textAlign: "center", fontFamily: "'Space Grotesk', sans-serif", margin: 0 }}>
                      No spam. Your data stays private.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function ComingSoonPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div
        style={{
          position: "fixed",
          inset: 0,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // Shift content slightly above true centre for visual balance
          justifyContent: "center",
          paddingTop: "6vh",
        }}
      >
        {/* ── Manchester skyline background ──────────────────────────── */}
        <div
          style={{
            position: "absolute", inset: 0,
            backgroundImage: "url('/images/manchester-skyline.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center 55%",
            backgroundRepeat: "no-repeat",
            zIndex: 0,
          }}
        />

        {/* ── Gradient overlay — heavier at bottom so skyline shows at top ── */}
        <div
          style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.65) 38%, rgba(0,0,0,0.3) 65%, rgba(0,0,0,0.18) 100%)",
            zIndex: 1,
          }}
        />

        {/* ── Grain ────────────────────────────────────────────────── */}
        <div
          style={{
            position: "absolute", inset: 0, pointerEvents: "none", zIndex: 2,
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='280' height='280'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.78' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='280' height='280' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat", backgroundSize: "200px 200px",
            opacity: 0.045, mixBlendMode: "screen",
          }}
        />

        {/* ── Content ──────────────────────────────────────────────── */}
        <div
          style={{
            position: "relative", zIndex: 3,
            display: "flex", flexDirection: "column",
            alignItems: "center", textAlign: "center",
            padding: "0 32px",
            width: "100%", maxWidth: 780,
          }}
        >
          {/* Logo row: wordmark | gold rule | emblem */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 36,
              width: "100%",
            }}
          >
            {/* SPIDXR wordmark */}
            <img
              src="/images/spidxr-logo.png"
              alt="SPIDXR"
              style={{
                width: "clamp(260px, 46vw, 560px)",
                height: "auto",
                objectFit: "contain",
                mixBlendMode: "screen",
                filter: "drop-shadow(0 0 32px rgba(201,169,110,0.5)) brightness(1.25)",
              }}
            />
          </motion.div>

          {/* Gold divider rule */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.28, ease: "easeOut" }}
            style={{
              width: "clamp(60px, 12vw, 110px)",
              height: 1,
              background: "linear-gradient(90deg, transparent, #C9A96E 30%, #C9A96E 70%, transparent)",
              marginBottom: 30,
              transformOrigin: "center",
            }}
          />

          {/* Slogan */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            style={{
              fontSize: "clamp(11px, 1.9vw, 16px)",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 500,
              letterSpacing: "0.26em",
              textTransform: "uppercase",
              color: "rgba(201,169,110,0.88)",
              margin: "0 0 18px",
              lineHeight: 1.5,
            }}
          >
            Simplify Life&nbsp;&nbsp;·&nbsp;&nbsp;Amplify Time
          </motion.p>

          {/* Coming soon heading */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            style={{
              fontSize: "clamp(28px, 5.5vw, 58px)",
              fontFamily: "Georgia, 'Playfair Display', 'Times New Roman', serif",
              fontWeight: 700,
              fontStyle: "italic",
              color: "#FFFFFF",
              margin: "0 0 48px",
              lineHeight: 1.2,
              letterSpacing: "-0.015em",
              textShadow: "0 4px 40px rgba(0,0,0,0.5)",
            }}
          >
            Coming Soon to Manchester
          </motion.h1>

          {/* CTA */}
          <motion.button
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.65 }}
            whileHover={{ scale: 1.04, boxShadow: "0 0 56px rgba(201,169,110,0.45)" }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setModalOpen(true)}
            style={{
              padding: "16px 52px",
              borderRadius: 100,
              background: "linear-gradient(135deg, #C9A96E 0%, #A8813A 100%)",
              color: "#080808",
              border: "none",
              fontSize: 13,
              fontWeight: 700,
              fontFamily: "'Space Grotesk', sans-serif",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              cursor: "pointer",
              boxShadow: "0 8px 40px rgba(201,169,110,0.32)",
            }}
          >
            Join the Waitlist · 50% Off for Life
          </motion.button>
        </div>

        {/* ── Legal links ──────────────────────────────────────────── */}
        <nav
          style={{
            position: "absolute", bottom: 20, left: 0, right: 0, zIndex: 3,
            display: "flex", justifyContent: "center", gap: 20,
            fontSize: 12, fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "0.08em",
          }}
        >
          <a href="/privacy" style={{ color: "rgba(201,169,110,0.7)", textDecoration: "none" }}>Privacy</a>
          <a href="/terms" style={{ color: "rgba(201,169,110,0.7)", textDecoration: "none" }}>Terms</a>
        </nav>
      </div>

      <WaitlistModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
