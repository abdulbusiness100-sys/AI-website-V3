import { useEffect, type ReactNode } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";

// Shown on both pages. Update on every change to either document.
const LAST_UPDATED = "10 October 2026";
const CONTACT = "support@spidxr.co.uk";

// Privacy Policy, section 7 — mirrors RETENTION in the app backend (convex/retention.ts, 30 Sep 2026).
// Change a period there and here together.
const RETENTION: [string, string][] = [
  ["Account profile (name, contact details, building and flat)", "Until you delete your account"],
  ["Request history and task details", "6 years from the end of the financial year the task took place in (HMRC and contract-claim time limits). If you delete your account, completed tasks are kept in anonymised form"],
  ["Payment and transaction records", "6 years from the end of the financial year the task took place in (HMRC). Card payment records are also held by Stripe under its own policy"],
  ["Collection codes for parcel pickups", "Deleted within a day of the task being delivered, completed or cancelled"],
  ["AI chat transcripts", "Not stored by SPIDXR. Your conversation is sent to our AI providers to answer you and is kept on your device only for the current session"],
  ["AI preference profile", "Until you delete your account, or sooner if you ask us to delete it"],
  ["Messages between you and your runner", "90 days after the task ends"],
  ["Proof-of-delivery and task photos", "180 days after the task ends"],
  ["In-app notifications", "90 days after they are sent"],
  ["Runner location during a task", "48 hours after the task ends"],
  ["Marketing consent record", "Until you delete your account"],
  ["Operational audit log (who did what to a task, with no contact details)", "6 years"],
];

const GOLD = "#C9A96E";
const SANS = "'Space Grotesk', sans-serif";
const SERIF = "Georgia, 'Playfair Display', 'Times New Roman', serif";
const GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='280' height='280'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.78' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='280' height='280' filter='url(%23n)'/%3E%3C/svg%3E")`;

const Mail = () => <a href={`mailto:${CONTACT}`}>{CONTACT}</a>;

// Real table from sm up; below that each row stacks into a card so nothing scrolls sideways on a phone.
function Table({ head, rows }: { head: string[]; rows: ReactNode[][] }) {
  return (
    <div className="not-prose my-6 rounded-2xl border border-white/10 bg-white/[0.03]">
      <table className="block w-full text-left text-sm leading-relaxed sm:table">
        <thead className="hidden sm:table-header-group">
          <tr className="border-b border-white/10">
            {head.map((h) => (
              <th key={h} className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em]" style={{ color: GOLD }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="block sm:table-row-group">
          {rows.map((r, i) => (
            <tr key={i} className="block border-b border-white/5 px-4 py-3 last:border-0 sm:table-row sm:px-0 sm:py-0 sm:align-top">
              {r.map((c, j) => (
                <td key={j} className={`block sm:table-cell sm:px-4 sm:py-3 ${j === 0 ? "font-medium text-white" : "mt-1 text-white/70 sm:mt-0"}`}>
                  {j > 0 && head.length > 2 && (
                    <span className="text-xs uppercase tracking-[0.12em] sm:hidden" style={{ color: GOLD }}>{head[j]}: </span>
                  )}
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function LegalShell({ title, active, children }: { title: string; active: "privacy" | "terms"; children: ReactNode }) {
  useEffect(() => {
    document.title = `${title} | SPIDXR`;
    window.scrollTo(0, 0);
  }, [title]);

  const tab = (href: string, label: string, on: boolean) => (
    <Link
      href={href}
      className="rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] transition-colors hover:text-white"
      style={{ borderColor: on ? GOLD : "rgba(255,255,255,0.12)", color: on ? GOLD : "rgba(255,255,255,0.55)" }}
    >
      {label}
    </Link>
  );

  return (
    <div className="relative min-h-screen overflow-x-hidden" style={{ background: "#080808", fontFamily: SANS }}>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0"
        style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(201,169,110,0.14), transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0"
        style={{ backgroundImage: GRAIN, backgroundSize: "200px 200px", opacity: 0.045, mixBlendMode: "screen" }}
      />

      <div className="relative mx-auto max-w-3xl px-5 pb-16 pt-8 sm:px-8">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <Link href="/" aria-label="SPIDXR home">
            <img src="/images/spidxr-logo.png" alt="SPIDXR" className="h-8 w-auto" style={{ mixBlendMode: "screen" }} />
          </Link>
          <nav className="flex gap-2">
            {tab("/privacy", "Privacy", active === "privacy")}
            {tab("/terms", "Terms", active === "terms")}
          </nav>
        </header>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-14"
        >
          <p className="text-xs font-medium uppercase tracking-[0.26em]" style={{ color: "rgba(201,169,110,0.88)" }}>
            Legal
          </p>
          <h1
            className="mt-3 text-white"
            style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "clamp(34px, 7vw, 54px)", lineHeight: 1.1, letterSpacing: "-0.015em" }}
          >
            {title}
          </h1>
          <div className="mt-6 h-px w-24" style={{ background: `linear-gradient(90deg, ${GOLD}, transparent)` }} />
          <p className="mt-5 text-sm text-white/50">Last updated: {LAST_UPDATED}</p>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="prose prose-invert mt-10 max-w-none text-[15px] leading-relaxed text-white/75 sm:text-base
            prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-white
            prose-h2:mt-12 prose-h2:border-t prose-h2:border-white/10 prose-h2:pt-8 prose-h2:text-xl
            prose-a:text-[#C9A96E] prose-a:underline-offset-4 prose-strong:text-white prose-li:my-1 prose-li:marker:text-[#C9A96E]"
        >
          {children}
        </motion.article>

        <footer className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} SPIDXR Vitality Innovations Ltd &middot; Company no. 16118329</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-[#C9A96E]">Privacy</Link>
            <Link href="/terms" className="hover:text-[#C9A96E]">Terms</Link>
            <a href={`mailto:${CONTACT}`} className="hover:text-[#C9A96E]">Contact</a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export function PrivacyPage() {
  return (
    <LegalShell title="Privacy Policy" active="privacy">
      <p>
        This policy explains how SPIDXR collects and uses your personal data when you use the SPIDXR app and service,
        and the rights you have over it.
      </p>

      <h2>1. Who we are</h2>
      <p>
        SPIDXR ("SPIDXR", "we", "us") is the trading name of <strong>SPIDXR Vitality Innovations Ltd</strong>, which
        operates the SPIDXR app: an AI-assisted concierge and errands service for residents of participating buildings.
        We are the <strong>data controller</strong> for the personal data described in this policy.
      </p>
      <ul>
        <li>Company: SPIDXR Vitality Innovations Ltd, company number 16118329</li>
        <li>Registered office: 128 City Road, London, EC1V 2NX</li>
        <li>Contact for privacy matters: <Mail /></li>
        <li>
          Data protection officer: we have not appointed a statutory Data Protection Officer. Under Article 37 UK GDPR one
          is required only for public authorities, or where an organisation's core activities involve large-scale
          systematic monitoring or large-scale processing of special-category data, which does not apply to us at our
          current scale. You can raise any privacy question with us at <Mail />.
        </li>
      </ul>

      <h2>2. The personal data we collect</h2>
      <Table
        head={["Data", "Why we hold it"]}
        rows={[
          ["Name, email address and phone number", "To create and manage your account and contact you about your requests"],
          ["Your confirmation that you are 18 or over, and your marketing choice", "To record your age confirmation and whether you agreed to receive marketing"],
          ["Home building name and flat or unit number", "So a runner can reach you"],
          ["Pickup and drop-off locations for a task", "To fulfil and route your request"],
          ["Collection codes you give us for a parcel pickup", "So the runner assigned to your task can collect your parcel. Only that runner can see the code, at pickup."],
          ["The content of your requests, including AI chat and voice messages", "To understand and fulfil what you ask for"],
          ["An AI-generated summary of your preferences", "To personalise the service (see section 3)"],
          ["Messages between you and your runner", "To coordinate the task"],
          ["Photos taken by the runner at pickup and delivery", "Delivery evidence and dispute resolution"],
          ["Payment information", "We use Stripe to take payments. Your card details are handled by Stripe and never stored on our systems. During the current pilot, requests are confirmed without charge and Stripe runs in test mode."],
          ["Device push token", "To send you updates about your requests"],
        ]}
      />
      <p>
        <strong>Health information.</strong> None of the services offered in the current beta need any information about
        your health, and we do not ask for it. Please don't include health details in your messages. If we introduce a
        service where health information is unavoidable (for example, collecting a named prescription for you), we will
        ask for your explicit consent before processing it, under Article 9(2)(a) UK GDPR, and update this policy. You
        will be able to decline, and to withdraw that consent at any time.
      </p>

      <h2>3. Using an AI assistant: what you should know</h2>
      <ul>
        <li>When you chat or send a voice message in the app, you are interacting with an <strong>AI assistant</strong>, not a human.</li>
        <li>
          Your chat messages are sent to <strong>Anthropic</strong> (Claude) to generate replies. Your voice messages are
          sent to <strong>OpenAI</strong> to be transcribed, and when the assistant speaks a reply, the text of that
          reply is sent to OpenAI to generate the audio. Both providers are in the <strong>United States</strong>.
        </li>
        <li>Your inputs are not used to train these providers' AI models by default.</li>
        <li>
          The assistant keeps a short profile of your preferences (such as preferred stores, usual services, building
          access notes and timing preferences) to personalise the service. It is designed not to store door codes, PINs
          or card numbers. This profile is not used to make any decision that has a legal or similarly significant effect
          on you. You can ask us to show you or delete it at any time, and it is deleted when you delete your account.
        </li>
        <li>The assistant helps you set up a request, but prices are always calculated by our system, not by the AI.</li>
      </ul>

      <h2>4. Why we use your data and our lawful basis</h2>
      <Table
        head={["Purpose", "Lawful basis (UK GDPR)"]}
        rows={[
          ["Creating your account and providing the service", "Performance of a contract, Art 6(1)(b)"],
          ["Fulfilling and routing your requests, including locations", "Performance of a contract, Art 6(1)(b)"],
          ["Proof-of-delivery photos, safety and quality logging, dispute resolution", "Legitimate interests, Art 6(1)(f)"],
          ["Personalising the service (AI preference profile)", "Legitimate interests, Art 6(1)(f)"],
          ["Health information, only if a future service unavoidably needs it", "Explicit consent, Art 9(2)(a)"],
          ["Keeping payment and transaction records", "Contract, Art 6(1)(b), and legal obligation, Art 6(1)(c)"],
          ["Sending you optional marketing (deals and updates)", "Consent, Art 6(1)(a), and PECR"],
        ]}
      />
      <p>
        Where we rely on legitimate interests, you have the right to object (see section 8). Where we rely on consent, you
        can withdraw it at any time, for example by turning off marketing emails in the app's settings.
      </p>

      <h2>5. Who we share your data with</h2>
      <p>We use trusted service providers who act on our instructions under a data processing agreement:</p>
      <ul>
        <li><strong>Supabase</strong>: sign-in and photo storage (UK, London)</li>
        <li><strong>Convex</strong>: our app database (EU)</li>
        <li><strong>Anthropic</strong>: AI chat (US)</li>
        <li><strong>OpenAI</strong>: voice transcription and spoken replies (US)</li>
        <li><strong>Stripe</strong>: payment processing (US and global); test mode during the pilot</li>
        <li><strong>Expo</strong>: push notifications (US)</li>
        <li><strong>Apple</strong>: push notification delivery to your iPhone, and map display and place look-ups in the iPhone app (US)</li>
        <li><strong>Vercel</strong>: website and operations portal hosting (US)</li>
        <li><strong>Sentry</strong>: crash and error reporting (US)</li>
      </ul>
      <p>We do not sell your personal data. We may disclose data where required by law or to protect safety.</p>

      <h2>6. Sending data outside the UK</h2>
      <p>
        Our sign-in and photo storage (Supabase) is hosted in the UK, and our database (Convex) is hosted in the EU,
        which the UK recognises as providing adequate protection, so neither needs additional safeguards. Some of our
        other providers are in the United States. Where we transfer your data to the US, we protect it with an
        appropriate safeguard: either the UK International Data Transfer Agreement or UK Addendum to the EU Standard
        Contractual Clauses, or the provider's certification under the EU-US Data Privacy Framework (UK Extension),
        together with a transfer risk assessment. You can ask us for details of the safeguard used.
      </p>

      <h2>7. Data retention: how long we keep your data</h2>
      <Table head={["Data", "How long we keep it"]} rows={RETENTION} />
      <p>
        If a task has an open problem report or a refund is still owed, we keep its messages and photos until that is
        resolved, so the evidence is available. Deletion runs automatically every day.
      </p>

      <h2>8. Your rights</h2>
      <p>
        Under UK GDPR you have the right to: <strong>access</strong> a copy of your data; <strong>rectify</strong>{" "}
        inaccurate data; <strong>erase</strong> your data; <strong>restrict</strong> or <strong>object to</strong>{" "}
        processing; <strong>data portability</strong>; and to <strong>withdraw consent</strong> at any time where we rely
        on it.
      </p>
      <ul>
        <li>
          You can <strong>delete your account</strong> yourself in the app's account settings, once any task in progress
          has finished. This deletes your profile, AI preference profile, messages, request history and stored photos,
          and your customer record with Stripe. Where a runner has completed a task for you, that task record and its
          delivery photos are kept in anonymised form, with your details removed, as a record of the runner's work.
        </li>
        <li>For any other request, contact <Mail />. We will respond within one month.</li>
        <li>
          You have the right to complain to the <strong>Information Commissioner's Office (ICO)</strong> at{" "}
          <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a> or on 0303 123 1113. We
          ask that you contact us first so we can try to resolve it.
        </li>
      </ul>

      <h2>9. Age of users</h2>
      <p>
        SPIDXR is only for people aged <strong>18 or over</strong>. You must confirm you are 18 or over when you sign up.
        We do not knowingly collect data from under-18s.
      </p>

      <h2>10. Changes to this policy</h2>
      <p>
        We will update this policy when our processing changes and post the new version here with a revised "last
        updated" date.
      </p>
    </LegalShell>
  );
}

export function TermsPage() {
  return (
    <LegalShell title="Terms of Service" active="terms">
      <h2>1. About us and these terms</h2>
      <p>
        These Terms of Service ("Terms") govern your use of the SPIDXR app and services. SPIDXR is operated by{" "}
        <strong>SPIDXR Vitality Innovations Ltd</strong>, company number 16118329, registered office 128 City Road,
        London, EC1V 2NX. You can contact us at <Mail />. By creating an account or using the service you agree to these
        Terms and to our <Link href="/privacy">Privacy Policy</Link>.
      </p>

      <h2>2. Who can use SPIDXR</h2>
      <p>
        You must be <strong>18 or over</strong> and live in a participating building in our current service area (the M3
        7 postcode area of Manchester) to use SPIDXR. By signing up you confirm you are at least 18.
      </p>

      <h2>3. The service</h2>
      <p>
        SPIDXR is a concierge and errands service. You make a request through our AI assistant, and a SPIDXR runner
        fulfils it. The AI assistant is <strong>an automated system, not a human</strong>. Prices mentioned by the AI are
        indicative; the <strong>final price is calculated by our system</strong> and shown to you before you confirm.
      </p>
      <p>These services are available during the beta:</p>
      <Table
        head={["Service", "What we do", "Price"]}
        rows={[
          ["Parcel Return", "Collect a parcel you're sending back from your door and drop it off for return", "£8.99"],
          ["Parcel Collection", "Collect a parcel waiting for you at a locker, post office or collection point and bring it to your door", "£7.99"],
          ["Local Item Drop", "Bring an order you've already placed (for example a takeaway or courier delivery) from your building's lobby to your door", "£9.99"],
          ["Garbage Collection", "Take your rubbish from your door to your building's disposal point", "£6.99"],
        ]}
      />
      <p>
        We only accept requests for services that are currently active. Other services mentioned in the app or on our
        website are not available during the beta. Runner capacity is limited during the beta, so a request may wait in the
        queue until a runner is available to accept it.
      </p>

      <h2>4. Placing a request and pricing</h2>
      <ul>
        <li>
          Each request has a fixed price (see section 3). Some tasks carry a fixed surcharge, for example £2 for
          collecting a parcel from an approved collection point outside your building. Any surcharge is itemised before
          you confirm.
        </li>
        <li>
          During the current pilot, requests are confirmed <strong>without charge</strong> (shown at checkout as "Pilot:
          no charge"). When card payments begin, payment will be taken through <strong>Stripe</strong> when you confirm a
          request. Card details are handled by Stripe and never stored by SPIDXR.
        </li>
      </ul>

      <h2>5. Buying goods</h2>
      <p>
        In the current beta, SPIDXR does not buy goods on your behalf. Our services move items you already have or have
        already ordered. We will update these Terms before we offer any service that involves buying goods for you.
      </p>

      <h2>6. Prohibited and age-restricted items</h2>
      <p>
        We cannot handle items that are unlawful, dangerous, or that we cannot carry safely. If an order you have already
        placed contains age-restricted items (for example alcohol), our runner may ask for proof of age at handover and
        may refuse to hand it over if that cannot be done lawfully. We may refuse or cancel any request that cannot be
        fulfilled lawfully or safely.
      </p>

      <h2>7. Your right to cancel (Consumer Contracts Regulations 2013)</h2>
      <p>
        You normally have a <strong>14-day cancellation right</strong> for services bought at a distance. Because you are
        asking us to start fulfilling your request straight away,{" "}
        <strong>
          by confirming a request you expressly ask us to begin the service immediately and acknowledge that you lose the
          right to cancel once the service has been fully performed.
        </strong>
      </p>
      <p>
        If you cancel after confirming, you pay a share of the request price that reflects how far your SPIDXR runner had
        progressed with the task. This is our proportionate cancellation ladder:
      </p>
      <Table
        head={["Stage", "When you cancel", "You pay"]}
        rows={[
          ["C0", "A runner has accepted but not yet started", "0%"],
          ["C1", "The runner is on their way to collect", "25%"],
          ["C2", "Collection or custody of your item has begun", "50%"],
          ["C3", "Your item is in transit", "75%"],
          ["C4", "The item has been delivered", "100% (a completed service cannot be cancelled)"],
        ]}
      />
      <p>
        Where <strong>SPIDXR is at fault</strong> (for example, we cannot fulfil the request), you are not charged under
        this ladder and you receive a full refund of anything you have paid. While the pilot is free, no cancellation
        charge is taken.
      </p>

      <h2>8. Our service standard (Consumer Rights Act 2015)</h2>
      <p>
        We will perform the service with <strong>reasonable care and skill</strong>. Nothing in these Terms removes or
        limits your statutory rights as a consumer.
      </p>

      <h2>9. SPIDXR Points</h2>
      <p>
        You earn <strong>2.5 points per £1</strong> of the request price when a task is completed.{" "}
        <strong>250 points</strong> can be converted into one free service credit, which can only be used on a service of
        £30 or more. None of the current beta services qualify, so credits cannot be used during the beta. We may change
        the points rules on reasonable notice.
      </p>

      <h2>10. Payment, refunds and complaints</h2>
      <ul>
        <li>Once card payments begin, the price of a request is payable when you confirm it.</li>
        <li>Refunds are handled under sections 7 and 8.</li>
        <li>To complain, contact <Mail />.</li>
      </ul>

      <h2>11. Acceptable use</h2>
      <p>
        You agree not to misuse the service, submit unlawful or abusive requests, attempt to manipulate the AI assistant,
        or use SPIDXR for anything other than its intended purpose. We may suspend or close accounts that breach these
        Terms.
      </p>

      <h2>12. Our liability</h2>
      <p>
        Nothing in these Terms limits our liability for death or personal injury caused by our negligence, for fraud, or
        for anything else that cannot be limited by law. We are not liable for losses that were not foreseeable.
      </p>

      <h2>13. Intellectual property</h2>
      <p>
        The SPIDXR app, brand and content are owned by SPIDXR Vitality Innovations Ltd. You may use the app only as
        permitted by these Terms.
      </p>

      <h2>14. Privacy</h2>
      <p>
        How we handle your data is explained in our <Link href="/privacy">Privacy Policy</Link>. Using the AI assistant
        means some of your messages and voice are processed by third-party AI providers, as described there.
      </p>

      <h2>15. Changes and termination</h2>
      <p>
        We may update these Terms on reasonable notice. You may close your account at any time in the app, once any task
        in progress has finished. We may suspend or end your access if you breach these Terms.
      </p>

      <h2>16. Governing law</h2>
      <p>
        These Terms are governed by the law of <strong>England and Wales</strong>, and disputes are subject to the courts
        of England and Wales.
      </p>
    </LegalShell>
  );
}
