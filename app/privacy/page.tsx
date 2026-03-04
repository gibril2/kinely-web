import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

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
          Last updated: January 2025
        </p>

        {[
          {
            title: 'What we collect',
            body: "We collect the email address you provide when you join the waitlist or make a purchase. When the app launches, we will collect the family stories and answers you choose to share within your family group. We do not collect data beyond what is necessary to provide the service.",
          },
          {
            title: 'How we use it',
            body: "Your email is used to send you product updates and, when the app launches, account-related communications. Your family's answers and stories are stored securely and are accessible only to members of your family group. We do not sell or share your data with third parties for advertising.",
          },
          {
            title: 'Your Annual Book',
            body: "When you order an Annual Book, your name and shipping address are shared with our print fulfillment partner solely for the purpose of delivering your book. This data is not retained by the fulfillment partner after delivery.",
          },
          {
            title: 'Data retention',
            body: "Your family's archive is kept for as long as you maintain an active subscription. If you cancel, your data is retained for 90 days before permanent deletion, giving you time to export it.",
          },
          {
            title: 'Your rights',
            body: "You can request a full export of your family's data at any time. You can also request permanent deletion of your account and all associated data. To exercise either right, email us at privacy@kinely.com.",
          },
          {
            title: 'Contact',
            body: "Questions about privacy? Write to us at privacy@kinely.com. We read every email.",
          },
        ].map(({ title, body }) => (
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
