import { SectionKicker } from '../ui/SectionKicker'
import { Lock } from 'lucide-react'

interface Tier {
  id: string
  name: string
  price: string
  was: string
  desc: string
  features: string[]
  cta: string
  featured?: boolean
  envKey: keyof typeof tierLinks
  style: {
    bg: string
    border?: string
    nameColor: string
    priceColor: string
    wasColor: string
    descColor: string
    featureColor: string
    ctaVariant: 'primary' | 'secondary' | 'ember'
  }
}

const tierLinks = {
  tier1: process.env.NEXT_PUBLIC_STRIPE_TIER1_LINK || '#pricing',
  tier2: process.env.NEXT_PUBLIC_STRIPE_TIER2_LINK || '#pricing',
  tier3: process.env.NEXT_PUBLIC_STRIPE_TIER3_LINK || '#pricing',
}

const tiers: Tier[] = [
  {
    id: 'tier1',
    envKey: 'tier1',
    name: 'Spark',
    price: '$30',
    was: 'One full year · Was $96',
    desc: 'Everything your family needs to start building your story together, at a price that makes it an easy yes.',
    features: [
      '365 daily questions',
      'Unlimited archive',
      'Voice answers',
      'All 5 family modes',
      'Annual Book preview',
      'Founding family badge',
    ],
    cta: 'Become a founding family →',
    style: {
      bg: '#F7F2EA',
      border: '1px solid rgba(44,36,22,0.08)',
      nameColor: 'text-charcoal-lt',
      priceColor: 'text-charcoal',
      wasColor: 'text-charcoal-lt',
      descColor: 'text-charcoal-lt',
      featureColor: 'text-charcoal-mid',
      ctaVariant: 'secondary',
    },
  },
  {
    id: 'tier2',
    envKey: 'tier2',
    name: 'Flame',
    price: '$65',
    was: 'Includes Annual Book · Was $165',
    desc: "Your full year of Kinely plus one hardcover Annual Book — your family's story, printed and delivered to your door in January.",
    features: [
      'Everything in Spark',
      'One hardcover Annual Book',
      'Premium cover with gold foil',
      'Early access to new features',
      'Your family named in the app at launch',
    ],
    cta: 'Become a founding family →',
    featured: true,
    style: {
      bg: '#2C2416',
      nameColor: 'text-white/40',
      priceColor: 'text-warm-white',
      wasColor: 'text-white/35',
      descColor: 'text-white/40',
      featureColor: 'text-white/55',
      ctaVariant: 'ember',
    },
  },
  {
    id: 'tier3',
    envKey: 'tier3',
    name: 'Ember',
    price: '$150',
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
    style: {
      bg: '#F5E6DC',
      border: '1px solid rgba(196,84,26,0.12)',
      nameColor: 'text-ember',
      priceColor: 'text-charcoal',
      wasColor: 'text-ember',
      descColor: 'text-charcoal-lt',
      featureColor: 'text-charcoal-mid',
      ctaVariant: 'ember',
    },
  },
]

function DiamondMarker() {
  return (
    <span
      className="inline-block flex-shrink-0 mt-[5px]"
      style={{ color: '#C4541A', fontSize: 8 }}
    >
      ◆
    </span>
  )
}

export function Pricing() {
  return (
    <section
      id="pricing"
      style={{
        background: '#F2EBE0',
        padding: '100px 56px',
        borderTop: '1px solid rgba(44,36,22,0.07)',
      }}
    >
      <div className="max-w-content mx-auto">
        <SectionKicker label="Founding family pricing" />

        <div className="mb-14">
          <h2
            className="font-cormorant font-normal text-charcoal mb-3"
            style={{ fontSize: 'clamp(36px, 4vw, 52px)' }}
          >
            Become a{' '}
            <em className="italic text-ember">Founding Family.</em>
          </h2>
          <p
            className="font-dm-sans font-light text-charcoal-lt"
            style={{ fontSize: 16, maxWidth: 500 }}
          >
            We&apos;re offering our founding families a deeply discounted first year.
            In exchange, you help shape the product your family — and millions of
            families like yours — will use for decades.
          </p>
        </div>

        {/* Tier grid */}
        <div className="grid md:grid-cols-3 gap-4 max-w-[960px]">
          {tiers.map((tier) => {
            const href = tierLinks[tier.envKey]
            return (
              <div
                key={tier.id}
                className="relative flex flex-col"
                style={{
                  background: tier.style.bg,
                  border: tier.style.border,
                  borderRadius: 24,
                  padding: '40px 36px',
                }}
              >
                {/* Featured badge */}
                {tier.featured && (
                  <div
                    className="absolute top-5 right-5 font-dm-sans font-medium text-warm-white"
                    style={{
                      background: '#C4541A',
                      borderRadius: 100,
                      padding: '4px 12px',
                      fontSize: 11,
                    }}
                  >
                    Most popular
                  </div>
                )}

                <div
                  className={`font-dm-sans font-medium uppercase tracking-[0.08em] mb-4 ${tier.style.nameColor}`}
                  style={{ fontSize: 11 }}
                >
                  {tier.name}
                </div>

                <div
                  className={`font-cormorant font-normal mb-1 ${tier.style.priceColor}`}
                  style={{ fontSize: 60, lineHeight: 1 }}
                >
                  {tier.price}
                </div>

                <div className={`font-dm-sans font-light mb-5 ${tier.style.wasColor}`} style={{ fontSize: 12 }}>
                  {tier.was}
                </div>

                <p className={`font-dm-sans font-light mb-8 ${tier.style.descColor}`} style={{ fontSize: 14, lineHeight: 1.6 }}>
                  {tier.desc}
                </p>

                <ul className="flex flex-col gap-3 mb-10 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className={`flex gap-2.5 font-dm-sans font-light ${tier.style.featureColor}`} style={{ fontSize: 13, lineHeight: 1.5 }}>
                      <DiamondMarker />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={href}
                  className={`font-dm-sans font-medium text-[14px] text-center rounded-pill py-3.5 px-6 transition-all duration-200 ${
                    tier.style.ctaVariant === 'secondary'
                      ? 'bg-cream-dark text-charcoal hover:bg-ember-pale hover:text-ember'
                      : 'bg-ember text-warm-white hover:bg-ember-light hover:-translate-y-px'
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            )
          })}
        </div>

        {/* Security note */}
        <div className="flex items-center gap-2 mt-7">
          <Lock size={13} className="text-charcoal-lt" />
          <p className="font-dm-sans font-light text-charcoal-lt" style={{ fontSize: 12 }}>
            Secure payments via Stripe · No charge until launch · Full refund if we don&apos;t ship
          </p>
        </div>
      </div>
    </section>
  )
}
