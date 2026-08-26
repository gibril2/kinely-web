import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Delete your Kinely account',
  description: 'How to delete your Kinely account and all associated data.',
}

const sections: { title: string; body: ReactNode }[] = [
  {
    title: 'Delete in the app',
    body: (
      <>
        The fastest way is inside the app: open Kinely, go to{' '}
        <strong>Settings</strong>, and tap{' '}
        <strong>&ldquo;Delete account and all data&rdquo;</strong>. You will
        be asked to confirm twice. Deletion is immediate and permanent — it
        removes your account, your family memberships, and the answers,
        photos, and voice recordings you own.
      </>
    ),
  },
  {
    title: 'If you no longer have the app',
    body: (
      <>
        You can reinstall Kinely, sign in, and delete your account in the app
        as above. Or email a deletion request to{' '}
        <a href="mailto:privacy@kinely.app" className="underline text-charcoal">
          privacy@kinely.app
        </a>{' '}
        from the email address on your account, and we will delete it for you.
      </>
    ),
  },
  {
    title: 'What is deleted',
    body: (
      <>
        Your account, your family memberships, and all the content you own —
        answers, photos, and voice recordings. Records of subscription
        payments are retained as required for accounting and legal purposes.
        For more, see our{' '}
        <a href="/privacy" className="underline text-charcoal">
          Privacy Policy
        </a>
        .
      </>
    ),
  },
]

export default function DeleteAccountPage() {
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
          Delete your Kinely account
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
