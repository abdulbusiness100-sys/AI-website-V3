import { useEffect, useRef, useState, type FormEvent } from "react";
import { Link } from "wouter";
import appIconUrl from "@/assets/spidxr-app-icon.svg";
import { cleanEmail, cleanMobile, cleanSource, EMAIL_ERROR, MOBILE_ERROR } from "@/lib/waitlist";
import "./WaitlistPage.css";

// The app's Convex HTTP route (SPIDXRAPP#133). A *.convex.site origin is public, so production is the default.
const WAITLIST_URL: string =
  import.meta.env.VITE_WAITLIST_URL || "https://valuable-condor-597.eu-west-1.convex.site/waitlist/join";
// Space Grotesk isn't loaded site-wide yet, so this page loads it itself (skipped if already present).
const FONT_HREF = "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500&display=swap";
const GENERIC_ERROR = "Something went wrong, please try again.";
// Portrait screens get the phone crop. Keep in step with the same query in WaitlistPage.css.
const PHONE_PHOTO = "(max-aspect-ratio: 3/4)";
// The desktop photo is 16:9 and covers the screen, so on taller screens it is drawn wider than the viewport.
const DESKTOP_SIZES = "(max-aspect-ratio: 16/9) 177.78vh, 100vw";
// The waitlist closes at the end of 30 Nov 2026, UK time (GMT then, so midnight UTC). The server also answers 410.
const WAITLIST_CLOSES_AT = Date.UTC(2026, 11, 1);
const CLOSED_MESSAGE = "The waitlist has closed.";

type Field = "email" | "phone";
type Errors = Partial<Record<Field | "form", string>>;

export default function WaitlistPage() {
  const startedAt = useRef(Date.now());
  const refs = { email: useRef<HTMLInputElement>(null), phone: useRef<HTMLInputElement>(null) };
  const doneRef = useRef<HTMLHeadingElement>(null);
  const submitted = useRef(false);
  const [values, setValues] = useState({ email: "", phone: "" });
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "closed">(() =>
    Date.now() >= WAITLIST_CLOSES_AT ? "closed" : "idle"
  );

  useEffect(() => {
    if (document.querySelector('link[href*="Space+Grotesk"]')) return;
    document.head.appendChild(Object.assign(document.createElement("link"), { rel: "stylesheet", href: FONT_HREF }));
  }, []);

  useEffect(() => {
    // After a submit, move focus to the outcome so screen readers announce it (not on first load).
    if (submitted.current && (status === "done" || status === "closed")) doneRef.current?.focus();
  }, [status]);

  const fail = (found: Errors) => {
    setErrors(found);
    const first = (["email", "phone"] as const).find((f) => found[f]);
    if (first) refs[first].current?.focus();
  };

  async function submit(e: FormEvent) {
    e.preventDefault();
    if (status === "sending") return;
    const found: Errors = {
      email: cleanEmail(values.email) ? undefined : EMAIL_ERROR,
      phone: cleanMobile(values.phone) ? undefined : MOBILE_ERROR,
    };
    if (found.email || found.phone) return fail(found);

    setErrors({});
    submitted.current = true;
    setStatus("sending");
    try {
      const res = await fetch(WAITLIST_URL, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          email: values.email.trim(),
          phone: values.phone.trim(),
          consentLaunchMessages: consent,
          source: cleanSource(new URLSearchParams(window.location.search).get("s")),
          website: honeypot,
          elapsedMs: Date.now() - startedAt.current,
        }),
      });
      const body: { ok?: unknown; error?: unknown; field?: unknown; closed?: unknown } = await res.json().catch(() => ({}));
      if (res.ok && body.ok === true) {
        setStatus("done");
        return;
      }
      if (res.status === 410 || body.closed === true) {
        setStatus("closed");
        return;
      }
      // 400 (a field, or "check your details") and 429 (busy) carry a message for people; anything else doesn't.
      const message = (res.status === 400 || res.status === 429) && typeof body.error === "string" ? body.error : GENERIC_ERROR;
      fail(body.field === "email" || body.field === "phone" ? { [body.field]: message } : { form: message });
    } catch {
      fail({ form: GENERIC_ERROR });
    }
    setStatus("idle");
  }

  const input = (field: Field) => ({
    ref: refs[field],
    id: `wl-${field}`,
    name: field,
    value: values[field],
    onChange: (e: { target: { value: string } }) => {
      setValues((v) => ({ ...v, [field]: e.target.value }));
      if (errors[field] || errors.form) setErrors((x) => ({ ...x, [field]: undefined, form: undefined }));
    },
    "aria-invalid": Boolean(errors[field]),
    "aria-describedby": errors[field] ? `wl-${field}-error` : undefined,
  });

  const error = (field: Field) =>
    errors[field] && (
      <p id={`wl-${field}-error`} className="wl-error">
        {errors[field]}
      </p>
    );

  return (
    <div className="wl-root">
      {/* Deansgate skyline, Mylo Kaye: Unsplash NXtGjC7osPs (desktop), Pexels 29801941 (phone). Licences in the PR.
          To change the photo, replace these three files under the same names; framing is object-position in the CSS. */}
      <picture className="wl-photo" aria-hidden="true">
        <source media={PHONE_PHOTO} srcSet="/images/cover/skyline-p2057.webp" width={2057} height={4452} />
        <img
          src="/images/cover/skyline-d1920.webp"
          srcSet="/images/cover/skyline-d1920.webp 1920w, /images/cover/skyline-d3840.webp 3840w"
          sizes={DESKTOP_SIZES}
          width={1920}
          height={1080}
          alt=""
          decoding="async"
          {...{ fetchpriority: "high" }}
        />
      </picture>
      <div className="wl-scrim" aria-hidden="true" />
      <div className="wl-grain" aria-hidden="true" />

      <main className="wl-stage">
        <div className="wl-hero">
          {/* Lock-up: the app icon (its own black tile, vector) beside the wordmark, one row. */}
          <div className="wl-lockup wl-in" role="img" aria-label="SPIDXR">
            <img className="wl-icon" src={appIconUrl} alt="" width={48} height={48} />
            <span className="wl-wordmark" />
          </div>
          <h1 className="wl-title wl-in">Your personal concierge.</h1>
          <p className="wl-sub wl-in">Be first in when we open.</p>
        </div>

        <section className="wl-card wl-in" aria-label="Join the waitlist">
          {status === "done" ? (
            <div className="wl-done">
              <span className="wl-check" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
              </span>
              <h2 ref={doneRef} tabIndex={-1}>You&rsquo;re in.</h2>
              <p>When we open, you&rsquo;ll get the app before anyone else.</p>
              <p>
                Your welcome gift: <strong>100 points and 1 free task</strong>, waiting when you join with the same email or
                number.
              </p>
            </div>
          ) : status === "closed" ? (
            <div className="wl-done">
              <h2 ref={doneRef} tabIndex={-1}>
                {CLOSED_MESSAGE}
              </h2>
            </div>
          ) : (
            <form noValidate onSubmit={submit}>
              <div className="wl-field">
                <label htmlFor="wl-email">Email</label>
                <input {...input("email")} type="email" inputMode="email" autoComplete="email" autoCapitalize="none" spellCheck={false} />
                {error("email")}
              </div>
              <div className="wl-field">
                <label htmlFor="wl-phone">Mobile number</label>
                <input {...input("phone")} type="tel" inputMode="tel" autoComplete="tel" placeholder="07700 900123" />
                {error("phone")}
              </div>

              {/* Honeypot: hidden from people and screen readers; a bot that fills it gets a quiet "ok" and nothing is saved. */}
              <div className="wl-hp" aria-hidden="true">
                <label htmlFor="wl-hp">Leave this field empty</label>
                <input id="wl-hp" name="hp_field" type="text" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
              </div>

              <label className="wl-consent">
                <input type="checkbox" name="consent" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
                <span>Tell me by email or text when SPIDXR opens.</span>
              </label>

              {errors.form && (
                <p className="wl-form-error" role="alert">
                  {errors.form}
                </p>
              )}

              <button type="submit" className="wl-button" disabled={status === "sending"} aria-busy={status === "sending"}>
                {status === "sending" ? "Joining…" : "Join the waitlist"}
              </button>

              <p className="wl-legal">
                By joining you agree to our <Link href="/privacy">Privacy Notice</Link> and{" "}
                <Link href="/offer-terms">Offer terms</Link>.
              </p>
              <p className="wl-legal">
                We use your email and number only to add your welcome gift and, if you tick the box, to tell you when SPIDXR
                opens.
              </p>
            </form>
          )}
        </section>
      </main>

      <footer className="wl-foot wl-in">
        <p className="wl-fine">SPIDXR is a trading name of SPIDXR Vitality Innovations Ltd (16118329).</p>
        <nav aria-label="Legal">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/offer-terms">Offer terms</Link>
        </nav>
      </footer>
    </div>
  );
}
