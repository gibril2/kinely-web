import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export default function TermsPage() {
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
          Terms of Service
        </h1>
        <p className="font-dm-sans font-light text-charcoal-lt mb-12" style={{ fontSize: 14 }}>
          Last updated: January 2025
        </p>

        {[
          {
            title: 'The pre-sale',
            body: "By purchasing a founding family tier, you are pre-ordering access to Kinely when it launches. We estimate launch in mid-2025. If we do not ship the product by December 31, 2025, you are entitled to a full refund, no questions asked.",
          },
          {
            title: 'What you get',
            body: "Each tier grants you access to the features described on the pricing page for one year from the date of launch. Annual Book tiers include the production and delivery of one or two physical books, depending on tier.",
          },
          {
            title: 'Family data',
            body: "You own your family's data. We are the custodians. We will never use your family's answers, stories, or moments for any purpose other than providing you with the Kinely service and your Annual Book.",
          },
          {
            title: 'Acceptable use',
            body: "Kinely is for families. It is not to be used to harass, harm, or distress any person. Accounts found to be in violation of this basic standard will be suspended.",
          },
          {
            title: 'Changes to these terms',
            body: "We will notify you by email before making any material changes to these terms. Your continued use of the service after notification constitutes acceptance.",
          },
          {
            title: 'Contact',
            body: "Questions? Email us at hello@kinely.com.",
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
