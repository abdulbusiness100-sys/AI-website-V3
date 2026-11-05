import { useEffect } from "react";
import { Link } from "wouter";
import iconLight from "@/assets/app-icon-light.webp";
import iconDark from "@/assets/app-icon-dark.webp";
import "./InterimHomePage.css";

// Interim "/" while the app launches: wordmark, icon, one line. No offer, no form.
// Space Grotesk isn't loaded site-wide yet, so this page loads it itself (skipped if already present).
const FONT_HREF = "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500&display=swap";

export default function InterimHomePage() {
  useEffect(() => {
    if (document.querySelector('link[href*="Space+Grotesk"]')) return;
    document.head.appendChild(Object.assign(document.createElement("link"), { rel: "stylesheet", href: FONT_HREF }));
  }, []);

  return (
    <div className="ih-root">
      <div className="ih-glow" aria-hidden="true" />
      <div className="ih-grain" aria-hidden="true" />

      <main className="ih-stage">
        <div className="ih-plate ih-in">
          <picture>
            <source srcSet={iconDark} media="(prefers-color-scheme: dark)" />
            <img className="ih-icon" src={iconLight} alt="" width={384} height={384} decoding="async" />
          </picture>
        </div>
        <h1 className="ih-wordmark ih-in">
          <span className="sr-only">SPIDXR</span>
        </h1>
        <p className="ih-line ih-in">Your personal concierge.</p>
      </main>

      <footer className="ih-foot ih-in">
        <p>SPIDXR is a trading name of SPIDXR Vitality Innovations Ltd (16118329)</p>
        <nav aria-label="Legal">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </nav>
      </footer>
    </div>
  );
}
