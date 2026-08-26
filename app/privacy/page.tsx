import type { ReactNode } from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const sections: { title: string; body: ReactNode }[] = [
  {
    title: 'What we collect',
    body: (
      <>
        When you use the Kinely app, we collect: your name and email address;
        the names, roles, and birth years or birthdates of the family members
        you add — including children&apos;s, when a parent or guardian adds
        them; photos (profile photos, family photos, and photos attached to
        answers); voice recordings; written answers and transcriptions of
        voice answers; the push notification token for your device; and your
        subscription and purchase state. On this website, we collect your
        email address if you join the waitlist.
      </>
    ),
  },
  {
    title: 'How we use it',
    body: (
      <>
        Your family&apos;s answers, photos, and recordings exist to be shared
        with your family, and only your family — content is visible only to
        members of your family group. We use your email for account-related
        communication and, if you joined the waitlist, product updates. Push
        tokens are used to send you notifications like the daily question.
        We do not sell your data, and we do not share it with third parties
        for advertising.
      </>
    ),
  },
  {
    title: 'Services that process your data',
    body: (
      <>
        Kinely runs on a small set of service providers, which process data
        on our behalf to provide the app: <strong>Supabase</strong> (hosting,
        authentication, database, and file storage for your photos and
        recordings), <strong>OpenAI</strong> (see below),{' '}
        <strong>Expo</strong> (delivery of push notifications),{' '}
        <strong>Stripe</strong> (payment processing — we never see your card
        number), and <strong>Resend</strong> (waitlist and product emails).
        <br />
        <br />
        Two things we want to be plain about: every photo uploaded to Kinely
        is checked by an automated moderation system before it is saved, and
        voice recordings are transcribed to text so they can be read and
        searched. We also convert text to embeddings to power search within
        your family&apos;s archive. This processing sends the photo,
        recording, or text to OpenAI.
      </>
    ),
  },
  {
    title: "Children's information",
    body: (
      <>
        Kinely is built for families, and that includes children. Children&apos;s
        profiles and content are added by a parent or guardian, and the adults
        in the family control that content — they can edit or delete it at any
        time. Children&apos;s photos and voice notes are processed by the same
        automated moderation and transcription systems described above.
      </>
    ),
  },
  {
    title: 'Data retention and deletion',
    body: (
      <>
        You can delete your account at any time in the app (Settings →
        &ldquo;Delete account and all data&rdquo;). Deletion is immediate: it
        removes your account, your family memberships, and the answers,
        photos, and voice recordings you own. See{' '}
        <a href="/delete-account" className="underline text-charcoal">
          how to delete your account
        </a>{' '}
        for details. Records of subscription payments are retained as required
        for accounting and legal purposes.
      </>
    ),
  },
  {
    title: 'Contact',
    body: (
      <>
        Questions about privacy, or a deletion or export request? Write to us
        at{' '}
        <a href="mailto:privacy@kinely.app" className="underline text-charcoal">
          privacy@kinely.app
        </a>
        . We read every email.
      </>
    ),
  },
]

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main
        className="max-w-[720px] mx-auto px-6"
        style={{ paddingTop: 120, paddingBottom: 100 }}
      >
        <h1
          className="font-cormorant font-normal text-charcoal mb-3"
          style={{ fontSize: 52, lineHeight: 1.05 }}
        >
          Privacy Policy
        </h1>
        <p className="font-dm-sans font-light text-charcoal-lt mb-12" style={{ fontSize: 14 }}>
          Last updated: August 2026
        </p>

        {sections.map(({ title, body }) => (
          <div key={title} className="mb-10" style={{ borderTop: '1px solid rgba(44,36,22,0.08)', paddingTop: 32 }}>
            <h2 className="font-cormorant font-medium text-charcoal mb-4" style={{ fontSize: 26 }}>
              {title}
            </h2>
            <p className="font-dm-sans font-light text-charcoal-lt" style={{ fontSize: 15, lineHeight: 1.75 }}>
              {body}
            </p>
          </div>
        ))}
      </main>
      <Footer />
    </>
  )
}
