import { useEffect, type ReactNode } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";

// Shown on both pages. Update on every change to either document.
const LAST_UPDATED = "19 November 2026";
const CONTACT = "support@spidxr.co.uk";

// Privacy Policy, section 7 — mirrors RETENTION in the app backend (convex/retention.ts, 30 Sep 2026).
// Change a period there and here together. The two chat rows are Abdul and Kevin's 17–18 Nov decision (90 days, or the
// account's deletion if sooner); retention.ts needs the same period when the AI chat is stored on the server.
const RETENTION: [string, string][] = [
  ["Account profile (name, date of birth, contact details, building and flat)", "Until you delete your account"],
  ["Request history and task details", "6 years from the end of the financial year the task took place in (HMRC and contract-claim time limits). If you delete your account, completed tasks are kept in anonymised form"],
  ["Payment and transaction records", "6 years from the end of the financial year the task took place in (HMRC). Card payment records are also held by Stripe under its own policy"],
  ["Collection codes for parcel pickups", "Deleted within a day of the task being delivered, completed or cancelled"],
  ["AI chats, and chats with the SPIDXR team", "90 days, or until you delete your account if that is sooner"],
  ["AI memory (details the assistant remembers from past chats)", "Until you delete your account, or sooner if you ask us to delete it. If you ask the assistant to forget something, we delete it within one month"],
  ["Messages between you and your SPIDXR runner or skilled worker", "90 days after the task ends, or until you delete your account if that is sooner"],
  ["Proof-of-delivery and task photos", "180 days after the task ends"],
  ["In-app notifications", "90 days after they are sent"],
  ["Runner location during a task", "48 hours after the task ends"],
  ["Marketing consent record", "Until you delete your account"],
  ["Operational audit log (who did what to a task, with no contact details)", "6 years"],
];

export const GOLD = "#C9A96E";
export const SANS = "'Space Grotesk', sans-serif";
export const SERIF = "Georgia, 'Playfair Display', 'Times New Roman', serif";
export const GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='280' height='280'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.78' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='280' height='280' filter='url(%23n)'/%3E%3C/svg%3E")`;

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

function LegalShell({ title, active, children }: { title: string; active: "privacy" | "terms" | "offer"; children: ReactNode }) {
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
        operates the SPIDXR app: an AI-assisted concierge and errands service, offered in and around Greengate,
        Salford (M3 7). We are the <strong>data controller</strong> for the personal data described in this policy.
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
          ["Your date of birth, which you give when you sign up", "To check you are 13 or over, and that you are 18 or over before you can ask for alcohol, nicotine or vapes (see below)"],
          ["Your marketing choice", "To record whether you agreed to receive marketing"],
          ["Home building name and flat or unit number", "So your SPIDXR runner or skilled worker can reach you"],
          ["Your phone's location, only if you allow it", "To show you what's nearby and check whether you are inside our service area. It is optional: you can type an address instead"],
          ["Pickup and drop-off locations for a task", "To fulfil and route your request"],
          ["The name, door number and building of someone you book a task for or send something to", "So the runner or skilled worker can find and hand over to the right person"],
          ["Collection codes you give us for a parcel pickup", "So the runner assigned to your task can collect your parcel. Only that runner can see the code, at pickup."],
          ["The content of your requests, including AI chat and voice messages", "To understand and fulfil what you ask for, and so our team can help you"],
          ["Details the AI assistant remembers from your past chats", "To personalise the service (see section 3)"],
          ["Messages between you and your SPIDXR runner or skilled worker, and between you and the SPIDXR team", "To coordinate the task and help you"],
          ["Photos taken by the runner at pickup and delivery", "Delivery evidence and dispute resolution"],
          ["Payment information", "We use Stripe to take payments. Your card details are handled by Stripe and never stored on our systems."],
          ["Device push token", "To send you updates about your requests"],
        ]}
      />
      <p>
        <strong>Age checks at the door.</strong> If you ask for alcohol, nicotine or vapes, the runner checks the name and
        date of birth on the ID of the person receiving them. The runner does not photograph the ID or keep a copy.
      </p>
      <p>
        <strong>Health information.</strong> Some services can involve information about your health, for example
        collecting a prescription for you, or a health home visit by a skilled worker. We use it only to carry out that
        task, and the AI assistant does not remember health details from one chat to the next. Please don't share more
        health detail than the task needs. We ask for your explicit consent before we process health information, under
        Article 9(2)(a) UK GDPR. You can decline, and you can withdraw that consent at any time.
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
          <strong>Your consent.</strong> Before your first chat, the app asks you to agree to your messages and voice
          being processed by these AI providers, and our <Link href="/terms">Terms of Service</Link> say the same. You can
          turn this off at any time in the app&apos;s Settings.
        </li>
        <li>
          <strong>Who can see your chats.</strong> SPIDXR&apos;s admin team (currently two people) can see your
          conversations in the app: your chats with the AI assistant, with the SPIDXR team, and with your SPIDXR runner or
          skilled worker. They use them only to run the service: to help you, to step in when the assistant can&apos;t
          sort something out, and to handle complaints. Chats are kept for 90 days, or until you delete your account if
          that is sooner (see section 7).
        </li>
        <li>
          <strong>Help improve SPIDXR</strong> is off unless you switch it on in the app&apos;s Settings. If you switch it on,
          we may use your conversations, with names, flat numbers and codes removed, to improve how SPIDXR understands
          and helps residents. You can switch it off at any time, and we then stop using your new conversations.
        </li>
        <li>
          <strong>What the assistant remembers.</strong> The assistant remembers details from your past chats (such as
          preferred stores, usual services, building access notes and timing preferences) to personalise the service.
          It does not remember health details, and it is designed not to store door codes, PINs or card numbers. You can
          ask the assistant to forget something, and we do it within one month. This memory is not used to make any
          decision that has a legal or similarly significant effect on you. You can ask us to show you or delete it at
          any time, and it is deleted when you delete your account.
        </li>
        <li>
          The assistant helps you set up a request, but prices are always calculated by our system, not by the AI.
          Partner requests are priced by our concierge partner.
        </li>
      </ul>

      <h2>4. Why we use your data and our lawful basis</h2>
      <Table
        head={["Purpose", "Lawful basis (UK GDPR)"]}
        rows={[
          ["Creating your account and providing the service", "Performance of a contract, Art 6(1)(b)"],
          ["Fulfilling and routing your requests, including locations", "Performance of a contract, Art 6(1)(b)"],
          ["Sending your chat and voice messages to our AI providers", "Consent, Art 6(1)(a), which you give in the app before your first chat"],
          ["Using your phone's location to show what's nearby and check our service area", "Consent, Art 6(1)(a): only if you allow it on your phone"],
          ["Checking your date of birth, and ID at the door for age-restricted items", "Performance of a contract, Art 6(1)(b), and legal obligation, Art 6(1)(c)"],
          ["Our team reading chats to help you and handle complaints", "Legitimate interests, Art 6(1)(f)"],
          ["Proof-of-delivery photos, safety and quality logging, dispute resolution", "Legitimate interests, Art 6(1)(f)"],
          ["Personalising the service (AI memory)", "Legitimate interests, Art 6(1)(f)"],
          ["Health information, only where a task needs it", "Explicit consent, Art 9(2)(a)"],
          ["Keeping payment and transaction records", "Contract, Art 6(1)(b), and legal obligation, Art 6(1)(c)"],
          ["Sending you optional marketing (deals and updates)", "Consent, Art 6(1)(a), and PECR"],
        ]}
      />
      <p>
        Where we rely on legitimate interests, you have the right to object (see section 8). Where we rely on consent, you
        can withdraw it at any time, for example by turning off marketing emails in the app's settings.
      </p>

      <h2>5. Who we share your data with</h2>
      <p>
        When you book a <strong>Skilled</strong> service, the skilled worker who takes the job sees what they need to do
        it: your name, the address, the task details and your messages with them. When you make a{" "}
        <strong>Partner</strong> request, our team passes your request and contact details to our concierge partner so
        it can price the request and invoice you.
      </p>
      <p>We use trusted service providers who act on our instructions under a data processing agreement:</p>
      <ul>
        <li><strong>Supabase</strong>: sign-in and photo storage (UK, London)</li>
        <li><strong>Convex</strong>: our app database (EU)</li>
        <li><strong>Anthropic</strong>: AI chat (US)</li>
        <li><strong>OpenAI</strong>: voice transcription and spoken replies (US)</li>
        <li><strong>Stripe</strong>: payment processing, and paying skilled workers through their own Stripe accounts (US and global)</li>
        <li><strong>Expo</strong>: push notifications (US)</li>
        <li><strong>Apple</strong>: push notification delivery to your iPhone, and map display and place look-ups (Apple Maps) in the iPhone app (US)</li>
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
          has finished. This deletes your profile, AI memory, chats, messages, request history and stored photos,
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
        SPIDXR is for people aged <strong>13 or over</strong>. You give your date of birth when you sign up, and you
        can&apos;t sign up if you are under 13. We do not knowingly collect data from children under 13. If you are 13 to
        17, you can use SPIDXR, but you can&apos;t ask for alcohol, nicotine or vapes: we use your date of birth to stop
        those requests, and the runner checks ID at the door.
      </p>

      <h2>10. The website waitlist</h2>
      <p>If you join the waitlist on our website:</p>
      <ul>
        <li>
          <strong>What we collect:</strong> your email address and mobile number, whether you ticked the box to hear when
          SPIDXR opens, which of our links or QR codes you came from, and when you joined. Your internet (IP) address is
          used only to limit repeated sign-ups.
        </li>
        <li>
          <strong>Why:</strong> to tell you when SPIDXR opens, and to add your starter pack if you already have an app
          account with the same email address.
        </li>
        <li>
          <strong>Lawful basis:</strong> consent, Art 6(1)(a), and PECR for launch messages by email or text: we send them
          only if you ticked the box. Legitimate interests, Art 6(1)(f), for running the list, matching your starter pack
          and preventing spam.
        </li>
        <li><strong>Where it is kept:</strong> in our database, Convex, hosted in the EU.</li>
        <li><strong>Who sends our messages:</strong> our email and text provider, [PROVIDER — to be confirmed].</li>
        <li>
          <strong>How long:</strong> if you never join the app, we delete your waitlist details 12 months after you joined
          the list.
        </li>
        <li>
          <strong>Unsubscribe any time</strong> using the link in any message we send, or by emailing <Mail />. We then
          keep only a scrambled (hashed) copy of your email and number, so we never message you again.
        </li>
      </ul>

      <h2>11. Changes to this policy</h2>
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

      <h2>2. Who can use SPIDXR, and where</h2>
      <p>
        You must be <strong>13 or over</strong> to use SPIDXR. You give your date of birth when you sign up, and you
        can&apos;t sign up if you are under 13. If you are 13 to 17, you can use SPIDXR but can&apos;t ask for
        age-restricted items (see section 6).
      </p>
      <p>
        Anyone can sign up, wherever they live. Our services are offered within a radius of about{" "}
        <strong>607 metres around Greengate, Salford (M3 7)</strong>. Outside that area, General services aren&apos;t
        available yet, Partner requests still work, and Skilled services are available only where a skilled worker
        covers your area.
      </p>
      <p>
        Sharing your phone&apos;s location is optional. We use it to show you what&apos;s nearby and to check whether you
        are inside our service area. You can type an address instead.
      </p>

      <h2>3. The service</h2>
      <p>
        SPIDXR is a concierge and errands service. The <strong>A&ndash;Z Marketplace</strong> in the app lists every
        service we offer. Each service is carried out in one of three ways:
      </p>
      <ul>
        <li>
          <strong>General</strong>: done by SPIDXR&apos;s own runners.
        </li>
        <li>
          <strong>Skilled</strong>: done by independent skilled workers who sign up on SPIDXR. Before a skilled worker can
          take jobs, they must pass the checks the law requires for that service and be approved by SPIDXR. They are paid
          through their own Stripe account.
        </li>
        <li>
          <strong>Partner</strong>: luxury requests, which a member of the SPIDXR team passes to our concierge partner.
          The partner prices the request and invoices you for it.
        </li>
      </ul>
      <p>
        Health, childcare and vet home visits are Skilled services. You can book them once a qualified skilled worker
        covers your area; until then, the assistant will tell you that nobody in your area can provide that task.
      </p>
      <p>
        We don&apos;t offer: digital services; building maintenance (such as electrics, gas, plumbing, heating or
        roofing); elderly or respite care; or house-and-garden work.
      </p>

      <h2>4. Booking a task and pricing</h2>
      <ul>
        <li>
          Every request goes through the SPIDXR AI assistant in the app. The assistant is{" "}
          <strong>an automated system, not a human</strong>. It asks what you need, who it is for, where and when, then
          shows you a summary and a <strong>confirmation card</strong> with the price and the estimated time.
        </li>
        <li>
          If the assistant still can&apos;t work out what you need after up to 10 questions, a member of the SPIDXR team
          joins the same chat to help.
        </li>
        <li>
          The assistant handles one request at a time. You can book up to <strong>7 days ahead</strong>, and SPIDXR runs
          24 hours a day, 7 days a week.
        </li>
        <li>
          You can book a task for someone else, such as a partner, flatmate, relative or friend. The same checks apply. We
          can deliver to another address inside our service area if you give the recipient&apos;s name, door number and
          building.
        </li>
        <li>
          Prices are calculated by our system, not by the AI.{" "}
          <strong>The price on the confirmation card is fixed:</strong> you pay nothing extra if the task takes longer
          than estimated, and you get nothing back if it is quicker.
        </li>
        <li>
          For Skilled services, the price is the skilled worker&apos;s own price plus SPIDXR&apos;s fee, shown as one total.
        </li>
        <li>No VAT is charged on our prices.</li>
        <li>
          You pay when you confirm, through <strong>Stripe</strong>. Card details are handled by Stripe and never stored
          by SPIDXR. For Skilled services, you pay before a skilled worker accepts the job. A skilled worker has no time
          limit to accept, and if one declines, the job waits for the next.
        </li>
        <li>
          Partner requests are priced and invoiced by our concierge partner, not through a confirmation card.
        </li>
      </ul>

      <h2>5. Buying goods</h2>
      <p>
        Some tasks involve your SPIDXR runner buying things for you, such as food, groceries or over-the-counter medicine.
        The goods are not part of our fixed service price: you pay for them as well.
      </p>
      <p>
        Pharmacy collection is collection only. The prescription must already be paid for, or free.
      </p>

      <h2>6. What we won&apos;t carry, age checks, and tasks that need your permission</h2>
      <p>
        We always refuse illicit drugs and weapons. We cannot handle anything else that is unlawful, dangerous, or that we
        cannot carry safely, and we may refuse or cancel any request that cannot be fulfilled lawfully or safely.
      </p>
      <p>
        <strong>Alcohol, nicotine and vapes</strong> are age-restricted. We take requests for them only where our age
        checks are in place: your date of birth from sign-up, and an ID check at the door, where the runner checks the
        name and date of birth on the ID of the person receiving them (the runner does not photograph the ID).
        If you are under 18, you can&apos;t request them, and the runner may refuse to hand them over if that cannot be
        done lawfully.
      </p>
      <p>Some tasks happen only with your clear permission:</p>
      <ul>
        <li>
          <strong>Going into your home while you are out</strong>: only with your clear permission, which the assistant
          asks you for.
        </li>
        <li>
          <strong>Handing over keys</strong> and <strong>driving your car</strong>: only with your consent.
        </li>
      </ul>

      <h2>7. Your right to cancel (Consumer Contracts Regulations 2013)</h2>
      <p>
        You normally have a <strong>14-day cancellation right</strong> for services bought at a distance. Because you are
        asking us to carry out your request straight away or at the time you book (up to 7 days ahead),{" "}
        <strong>
          by confirming a request you expressly ask us to begin the service within the cancellation period and
          acknowledge that you lose the right to cancel once the service has been fully performed.
        </strong>
      </p>
      <p>
        You cancel a task on its screen in the app. What you pay depends on two things: the stage the task has reached
        (the ladder below) and the time already worked on it. SPIDXR keeps whichever of the two is higher and refunds the
        rest.
      </p>
      <Table
        head={["Stage", "When you cancel", "Stage share"]}
        rows={[
          ["C0", "Nobody has started yet (including while your request waits for a runner or skilled worker to accept it)", "0%"],
          ["C1", "The runner is on their way to collect", "25%"],
          ["C2", "Collection or custody of your item has begun", "50%"],
          ["C3", "Your item is in transit", "75%"],
          ["C4", "The item has been delivered", "100% (a completed service cannot be cancelled)"],
        ]}
      />
      <p>
        Where <strong>SPIDXR is at fault</strong> (for example, we cannot fulfil the request), you are not charged and
        you receive a full refund of anything you have paid.
      </p>

      <h2>8. Our service standard (Consumer Rights Act 2015)</h2>
      <p>
        We will perform the service with <strong>reasonable care and skill</strong>. Nothing in these Terms removes or
        limits your statutory rights as a consumer.
      </p>

      <h2>9. SPIDXR Points</h2>
      <p>
        You earn <strong>5 points for every £1 you pay</strong>, rounded down, when a task is completed. When your
        SPIDXR runner buys goods for you (for example on a grocery run), the goods you pay for count as well as our fee.
        At checkout <strong>100 points take £1 off</strong> (one point is worth 1p): you can use{" "}
        <strong>some or all of your points</strong> and pay the rest by card. Points are earned only on the part you do
        not pay with points or SPIDXR credit, so a task paid entirely with points, SPIDXR credit or a free service credit
        does not earn points.
      </p>
      <p>
        If you cancel a task you paid for partly or wholly with points, the points come back to your balance in the same
        proportion as any card refund under the cancellation ladder in section 7.
      </p>
      <p>
        <strong>Rate your runner.</strong> Rating your SPIDXR runner after a completed task earns 10 points, once per
        task.
      </p>
      <p>
        <strong>Refer a friend.</strong> Every account has a personal invite code and QR code. When a friend who joined
        with your code completes their first task, you get <strong>500 points</strong> and they get{" "}
        <strong>250 points</strong>. You can earn referral points for up to 5 friends in each calendar month; friends
        beyond that still get their 250. An account can be referred only once, only before its first completed task, and
        never with its own code.
      </p>
      <p>
        Points no longer convert into free service credits. A free service credit or free task can be used on any task.
        We may change the points rules on reasonable notice.
      </p>
      <p>
        <strong>SPIDXR credit.</strong> Every new SPIDXR account gets a starter pack once: <strong>£15 of SPIDXR credit</strong>{" "}
        and <strong>250 points</strong>. SPIDXR credit pays our service fee only, never shopping or other goods a runner
        buys for you. At checkout it is used first, before points and card, unless you choose not to use it, and it can be
        spent across several tasks until it runs out (a £6 fee uses £6 and leaves £9). It doesn&apos;t expire. It is a gift
        from us: it has no cash value, can&apos;t be exchanged for cash or transferred, and goes if you delete your account.
        If you cancel before your SPIDXR runner has set off, or SPIDXR is at fault, the credit used on that task comes back
        to you; if you cancel later, it doesn&apos;t.
      </p>

      <h2>10. Payment, refunds, help and complaints</h2>
      <ul>
        <li>The price of a request is payable when you confirm it (see section 4).</li>
        <li>Refunds are handled under sections 7 and 8.</li>
        <li>
          For help or to complain, tell the AI assistant in the app. It tries to sort it out first. If it can&apos;t, a
          member of the SPIDXR team joins the same chat. You can also email <Mail />.
        </li>
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
        How we handle your data is explained in our <Link href="/privacy">Privacy Policy</Link>.
      </p>
      <p>
        Every request goes through the AI assistant, so using SPIDXR means your messages and voice are processed by our
        AI providers, <strong>Anthropic</strong> (Claude) and <strong>OpenAI</strong>, as described in the Privacy Policy.
        By accepting these Terms you agree to that, and the app also asks you before your first chat. You can turn it off
        at any time in the app&apos;s Settings. SPIDXR&apos;s admin team can see your chats in the app to run the
        service, and chats are kept for 90 days, or until you delete your account if that is sooner.
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

// The waitlist offer: the starter pack (Abdul 12 Nov; it replaced the 5 Nov gift of 100 points + 1 free task). DRAFT: needs Abdul +
// #compliance review. The list closes 30 Nov 2026; nothing in the pack expires. The app's server: SPIDXRAPP convex/credit.ts.
export function OfferTermsPage() {
  return (
    <LegalShell title="Waitlist Offer Terms" active="offer">
      <p>
        These terms explain the starter pack for people who join the SPIDXR waitlist. They sit alongside our{" "}
        <Link href="/terms">Terms of Service</Link> and <Link href="/privacy">Privacy Policy</Link>.
      </p>

      <h2>1. The starter pack</h2>
      <ul>
        <li>
          <strong>£15 of SPIDXR credit</strong>, added to your SPIDXR app account. It pays our service fee only, never
          shopping or other goods a runner buys for you, and it can be spent across several tasks until it runs out.
          SPIDXR credit works as described in section 9 of our <Link href="/terms">Terms of Service</Link>.
        </li>
        <li>
          <strong>250 SPIDXR Points</strong>, which work as described in the same section.
        </li>
      </ul>

      <h2>2. How to get it</h2>
      <p>
        Every new SPIDXR app account gets the starter pack once. If you <strong>already have an account</strong>, join the
        waitlist with the <strong>same email address</strong> as that account and the starter pack is added when you join,
        if you haven&apos;t had a starter pack or a waitlist welcome gift before.
      </p>

      <h2>3. The rules</h2>
      <ul>
        <li>One starter pack per person, however many times you join the list or open an account.</li>
        <li>
          The starter pack has no cash value, can&apos;t be exchanged for cash and can&apos;t be transferred to anyone
          else.
        </li>
        <li>
          The waitlist closes at the end of <strong>30 November 2026</strong>. Your starter pack doesn&apos;t expire: it
          stays in your account until you use it.
        </li>
        <li>
          If you were given the earlier welcome gift of points and a free task, you keep it, and it still doesn&apos;t
          expire.
        </li>
      </ul>

      <h2>4. Changes to this offer</h2>
      <p>
        We may end or change this offer with reasonable notice. That doesn&apos;t affect credit, points or a free task
        already added to your account.
      </p>

      <h2>5. Who we are</h2>
      <p>
        SPIDXR is a trading name of <strong>SPIDXR Vitality Innovations Ltd</strong> (16118329), registered office 128 City
        Road, London, EC1V 2NX. Questions: <Mail />.
      </p>
    </LegalShell>
  );
}
