import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Lock } from 'lucide-react'

const tiers = [
  {
    id: 'tier1',
    envKey: 'NEXT_PUBLIC_STRIPE_TIER1_LINK',
    name: 'Spark',
    price: '$30',
    billing: 'One full year',
    was: 'Regular price $96/yr',
    desc: 'Everything your family needs to start building your story together.',
    features: [
      '365 daily questions, curated and personalised',
      'Unlimited family archive',
      'Text, voice, and photo answers',
      'Gathered Mode & Connected Mode',
      'Annual Book preview (not included — add $49)',
      'Founding family badge in the app',
      'Help shape the product from day one',
    ],
    cta: 'Become a founding family →',
    bg: '#F7F2EA',
    border: '1px solid rgba(44,36,22,0.1)',
    dark: false,
  },
  {
    id: 'tier2',
    envKey: 'NEXT_PUBLIC_STRIPE_TIER2_LINK',
    name: 'Flame',
    price: '$65',
    billing: 'Includes your Annual Book',
    was: 'Regular price $165',
    desc: 'Your full year of Kinely plus one hardcover Annual Book — your family\'s story, printed and delivered to your door in January.',
    features: [
      'Everything in Spark',
      'One hardcover Annual Book',
      'Premium cover with gold foil',
      'Early access to every new feature',
      "Your family named in the app at launch",
    ],
    cta: 'Become a founding family →',
    bg: '#2C2416',
    border: 'none',
    dark: true,
    featured: true,
  },
  {
    id: 'tier3',
    envKey: 'NEXT_PUBLIC_STRIPE_TIER3_LINK',
    name: 'Ember',
    price: '$150',
    billing: 'Lifetime benefits',
    was: 'Limited to 100 families',
    desc: "For families who don't just want to use Kinely — they want to help build it. Same book, different relationship.",
    features: [
      'Everything in Flame',
      'Lifetime 50% off all future plans',
      'Your name on the Kinely Founding Wall — permanently',
      'Shape the question library directly',
      'Private founder community access',
      'Annual call with the founders',
    ],
    cta: 'Become a founding family →',
    bg: '#F5E6DC',
    border: '1px solid rgba(196,84,26,0.15)',
    dark: false,
  },
]

const faqs = [
  { q: 'When does Kinely launch?', a: "We're targeting launch in 2026. Founding family purchases are pre-orders. If we don't ship, you receive a full refund, no questions asked." },
  { q: 'What happens after the founding year?', a: 'At the end of your founding year, you can renew at standard pricing ($96/year) or cancel. Founding Circle members receive a permanent 50% discount on all future plans.' },
  { q: 'Can I upgrade my tier later?', a: "Yes. You can upgrade to a higher tier at any time and we'll apply a prorated credit. You cannot downgrade your founding tier after the pre-sale closes." },
  { q: 'How many family members can join?', a: 'Kinely is designed for families of any size. There is no per-person charge. Add your whole household, your parents, your grown children who have moved out — all under one membership.' },
  { q: 'Is my data safe?', a: "Your family's answers are stored with end-to-end encryption and are never shared or sold. You can export or delete your data at any time. See our privacy policy for full details." },
  { q: 'What payment methods do you accept?', a: 'We accept all major credit and debit cards through Stripe, our payment provider. Your card is not charged until we are ready to launch.' },
]

export default function PricingPage() {
  const getLink = (envKey: string) => {
    const links: Record<string, string | undefined> = {
      NEXT_PUBLIC_STRIPE_TIER1_LINK: process.env.NEXT_PUBLIC_STRIPE_TIER1_LINK,
      NEXT_PUBLIC_STRIPE_TIER2_LINK: process.env.NEXT_PUBLIC_STRIPE_TIER2_LINK,
      NEXT_PUBLIC_STRIPE_TIER3_LINK: process.env.NEXT_PUBLIC_STRIPE_TIER3_LINK,
    }
    return links[envKey] || '#'
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section style={{ background: '#F2EBE0', padding: '120px 56px 80px', borderBottom: '1px solid rgba(44,36,22,0.07)' }}>
          <div className="max-w-content mx-auto">
            <div className="flex items-center gap-3 mb-8 text-ember">
              <div className="w-[18px] h-px bg-ember" />
              <span className="font-dm-sans font-medium text-[11px] uppercase tracking-[0.1em]">Founding family pricing</span>
            </div>
            <h1 className="font-cormorant font-normal text-charcoal mb-5" style={{ fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: 1.05, maxWidth: 560 }}>
              Become a{' '}<em className="italic text-ember">Founding Family.</em>
            </h1>
            <p className="font-dm-sans font-light text-charcoal-lt" style={{ fontSize: 17, lineHeight: 1.7, maxWidth: 520 }}>
              We&apos;re offering our founding families a deeply discounted first year. In exchange, you help shape the product your family — and millions of families like yours — will use for decades.
            </p>
          </div>
        </section>

        {/* Tiers */}
        <section style={{ background: '#F2EBE0', padding: '0 56px 100px' }}>
          <div className="max-w-content mx-auto">
            <div className="grid md:grid-cols-3 gap-5 mt-10">
              {tiers.map((tier) => (
                <div
                  key={tier.id}
                  className="relative flex flex-col"
                  style={{ background: tier.bg, border: tier.border, borderRadius: 24, padding: '40px 36px' }}
                >
                  {tier.featured && (
                    <div className="absolute top-5 right-5 font-dm-sans font-medium text-warm-white" style={{ background: '#C4541A', borderRadius: 100, padding: '4px 12px', fontSize: 11 }}>
                      Most popular
                    </div>
                  )}

                  <div className={`font-dm-sans font-medium uppercase tracking-[0.08em] mb-4 ${tier.dark ? 'text-white/40' : 'text-charcoal-lt'}`} style={{ fontSize: 11 }}>
                    {tier.name}
                  </div>
                  <div className={`font-cormorant font-normal mb-1 ${tier.dark ? 'text-warm-white' : 'text-charcoal'}`} style={{ fontSize: 60, lineHeight: 1 }}>
                    {tier.price}
                  </div>
                  <div className={`font-dm-sans font-medium mb-1 ${tier.dark ? 'text-white/50' : 'text-charcoal-lt'}`} style={{ fontSize: 13 }}>{tier.billing}</div>
                  <div className={`font-dm-sans font-light mb-6 ${tier.dark ? 'text-white/30' : 'text-charcoal-lt'}`} style={{ fontSize: 12 }}>{tier.was}</div>
                  <p className={`font-dm-sans font-light mb-8 ${tier.dark ? 'text-white/40' : 'text-charcoal-lt'}`} style={{ fontSize: 14, lineHeight: 1.6 }}>{tier.desc}</p>

                  <ul className="flex flex-col gap-3 mb-10 flex-1">
                    {tier.features.map((f) => (
                      <li key={f} className={`flex gap-2.5 font-dm-sans font-light ${tier.dark ? 'text-white/55' : 'text-charcoal-mid'}`} style={{ fontSize: 13, lineHeight: 1.5 }}>
                        <span className="flex-shrink-0 mt-[4px]" style={{ color: '#C4541A', fontSize: 8 }}>◆</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={getLink(tier.envKey)}
                    className={`font-dm-sans font-medium text-[14px] text-center rounded-pill py-3.5 px-6 transition-all duration-200 hover:-translate-y-px ${tier.dark ? 'bg-ember text-warm-white hover:bg-ember-light' : 'bg-ember text-warm-white hover:bg-ember-light'}`}
                  >
                    {tier.cta}
                  </a>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 mt-8">
              <Lock size={13} className="text-charcoal-lt flex-shrink-0" />
              <p className="font-dm-sans font-light text-charcoal-lt" style={{ fontSize: 12 }}>
                Secure payments via Stripe · No charge until launch · Full refund if we don&apos;t ship
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ background: '#F7F2EA', padding: '100px 56px', borderTop: '1px solid rgba(44,36,22,0.07)' }}>
          <div className="max-w-[800px] mx-auto">
            <div className="flex items-center gap-3 mb-12 text-ember">
              <div className="w-[18px] h-px bg-ember" />
              <span className="font-dm-sans font-medium text-[11px] uppercase tracking-[0.1em]">Frequently asked questions</span>
            </div>
            <div className="flex flex-col">
              {faqs.map(({ q, a }) => (
                <div key={q} style={{ borderTop: '1px solid rgba(44,36,22,0.08)', padding: '28px 0' }}>
                  <h3 className="font-cormorant font-medium text-charcoal mb-3" style={{ fontSize: 22 }}>{q}</h3>
                  <p className="font-dm-sans font-light text-charcoal-lt" style={{ fontSize: 14, lineHeight: 1.8 }}>{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
