'use client'

import { useState } from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Lock } from 'lucide-react'

const FOUNDING_FEATURES = [
  'One question, every day, for your whole family',
  'Every answer saved forever — searchable archive',
  'Text, voice notes, and up to 3 photos per person',
  'Gather Mode for family dinners',
  'Annual Book available at year end (add $89)',
  'Founding family badge in the app',
]

const faqs = [
  {
    q: 'When does Kinely launch?',
    a: 'Kinely is available now. Download the app and start answering today\u2019s question with your family.',
  },
  {
    q: 'What happens after the founding year?',
    a: 'Your price is locked forever at $59/year \u2014 it never increases for founding families. Standard pricing is $79/year for everyone else.',
  },
  {
    q: 'What about the Annual Book?',
    a: 'The Annual Book ($89) ships every January and is purchased separately at year end \u2014 it\u2019s not included in the subscription. You\u2019ll see a preview of yours after 30 days.',
  },
  {
    q: 'How many family members can join?',
    a: 'Kinely is designed for families of any size. There is no per-person charge. Add your whole household, your parents, your grown children who have moved out \u2014 all under one membership.',
  },
  {
    q: 'Is my data safe?',
    a: 'Your family\u2019s answers are stored with end-to-end encryption and are never shared or sold. You can export or delete your data at any time. See our privacy policy for full details.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept all major credit and debit cards through Stripe, our payment provider.',
  },
]

export default function PricingPage() {
  const [billing, setBilling] = useState<'annual' | 'monthly'>('annual')

  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section style={{ background: '#F2EBE0', padding: '120px 24px 80px', borderBottom: '1px solid rgba(44,36,22,0.07)' }}>
          <div className="max-w-content mx-auto flex flex-col items-center text-center">
            <div className="flex items-center gap-3 mb-8 text-ember">
              <div className="w-[18px] h-px bg-ember" />
              <span className="font-dm-sans font-medium text-[11px] uppercase tracking-[0.1em]">Founding family pricing</span>
              <div className="w-[18px] h-px bg-ember" />
            </div>
            <h1 className="font-cormorant font-normal text-charcoal mb-5" style={{ fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: 1.05 }}>
              Become a{' '}<em className="italic text-ember">Founding Family.</em>
            </h1>
            <p className="font-dm-sans font-light text-charcoal-lt" style={{ fontSize: 17, lineHeight: 1.7, maxWidth: 520 }}>
              Join the first 500 families building Kinely together.
              Your founding price is locked forever.
            </p>

            {/* Founding spots counter */}
            <div className="flex items-center gap-3 mt-8" style={{ fontSize: 14, color: 'rgba(26,18,8,0.5)' }}>
              <div style={{ width: 200, height: 4, backgroundColor: '#E8E0D5', borderRadius: 100, overflow: 'hidden' }}>
                <div style={{ width: '13.4%', height: '100%', backgroundColor: '#C4541A', borderRadius: 100 }} />
              </div>
              <span className="font-dm-sans">67 of 500 founding spots claimed</span>
            </div>
          </div>
        </section>

        {/* Toggle + Cards */}
        <section style={{ background: '#F2EBE0', padding: '0 24px 100px' }}>
          <div className="max-w-[860px] mx-auto flex flex-col items-center">
            {/* Billing toggle */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#F0EBE3',
              borderRadius: 100,
              padding: 4,
              marginBottom: 48,
              marginTop: 40,
            }}>
              <button
                onClick={() => setBilling('annual')}
                className="font-dm-sans"
                style={{
                  backgroundColor: billing === 'annual' ? '#1A1208' : 'transparent',
                  color: billing === 'annual' ? '#FAF7F2' : 'rgba(26,18,8,0.5)',
                  border: 'none',
                  borderRadius: 100,
                  padding: '8px 20px',
                  fontSize: 14,
                  fontWeight: billing === 'annual' ? 600 : 400,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  transition: 'all 0.2s',
                }}
              >
                Annual
                {billing === 'annual' && (
                  <span style={{
                    backgroundColor: '#C4541A',
                    color: 'white',
                    fontSize: 10,
                    fontWeight: 700,
                    padding: '2px 7px',
                    borderRadius: 100,
                    letterSpacing: '0.3px',
                  }}>
                    BEST PRICE
                  </span>
                )}
              </button>
              <button
                onClick={() => setBilling('monthly')}
                className="font-dm-sans"
                style={{
                  backgroundColor: billing === 'monthly' ? '#1A1208' : 'transparent',
                  color: billing === 'monthly' ? '#FAF7F2' : 'rgba(26,18,8,0.5)',
                  border: 'none',
                  borderRadius: 100,
                  padding: '8px 20px',
                  fontSize: 14,
                  fontWeight: billing === 'monthly' ? 600 : 400,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                Monthly
              </button>
            </div>

            {/* Cards */}
            {billing === 'annual' ? (
              <div className="grid md:grid-cols-2 gap-5 w-full">
                {/* Founding Family — highlighted */}
                <div
                  className="relative flex flex-col"
                  style={{
                    background: '#2C2416',
                    borderRadius: 24,
                    padding: '40px 36px',
                  }}
                >
                  <div className="absolute top-5 right-5 font-dm-sans font-medium text-warm-white" style={{ background: '#C4541A', borderRadius: 100, padding: '4px 12px', fontSize: 11 }}>
                    Limited spots
                  </div>

                  <div className="font-dm-sans font-medium uppercase tracking-[0.08em] text-white/40 mb-4" style={{ fontSize: 11 }}>
                    Founding Family
                  </div>
                  <div className="font-dm-sans font-light text-white/30 mb-1" style={{ fontSize: 12 }}>
                    Limited to 500 families
                  </div>
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="font-cormorant font-normal text-warm-white" style={{ fontSize: 60, lineHeight: 1 }}>$59</span>
                    <span className="font-dm-sans font-light text-white/50" style={{ fontSize: 15 }}>/ year</span>
                    <span className="font-dm-sans font-light text-white/25 line-through" style={{ fontSize: 14 }}>$79</span>
                  </div>
                  <p className="font-dm-sans font-light text-white/45 mb-8" style={{ fontSize: 13, lineHeight: 1.6 }}>
                    Locked in forever at this price.
                  </p>

                  <ul className="flex flex-col gap-3 mb-10 flex-1">
                    {FOUNDING_FEATURES.map((f) => (
                      <li key={f} className="flex gap-2.5 font-dm-sans font-light text-white/55" style={{ fontSize: 13, lineHeight: 1.5 }}>
                        <span className="flex-shrink-0 mt-[4px]" style={{ color: '#C4541A', fontSize: 8 }}>&#9830;</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/subscribe?plan=founding"
                    className="font-dm-sans font-medium text-[14px] text-center rounded-pill py-3.5 px-6 transition-all duration-200 hover:-translate-y-px bg-ember text-warm-white hover:bg-ember-light"
                  >
                    Become a founding family &rarr;
                  </a>
                </div>

                {/* Standard — muted secondary */}
                <div
                  className="flex flex-col"
                  style={{
                    background: '#F7F2EA',
                    border: '1px solid rgba(44,36,22,0.1)',
                    borderRadius: 24,
                    padding: '40px 36px',
                  }}
                >
                  <div className="font-dm-sans font-medium uppercase tracking-[0.08em] text-charcoal-lt mb-4" style={{ fontSize: 11 }}>
                    Standard
                  </div>
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="font-cormorant font-normal text-charcoal" style={{ fontSize: 60, lineHeight: 1 }}>$79</span>
                    <span className="font-dm-sans font-light text-charcoal-lt" style={{ fontSize: 15 }}>/ year</span>
                  </div>
                  <div className="font-dm-sans font-light text-charcoal-lt mb-6" style={{ fontSize: 13 }}>
                    After founding spots are claimed
                  </div>
                  <p className="font-dm-sans font-light text-charcoal-lt mb-8" style={{ fontSize: 14, lineHeight: 1.6 }}>
                    Full annual access at standard pricing.
                    Available once the 500 founding spots are filled.
                  </p>

                  <ul className="flex flex-col gap-3 mb-10 flex-1">
                    {FOUNDING_FEATURES.slice(0, 4).map((f) => (
                      <li key={f} className="flex gap-2.5 font-dm-sans font-light text-charcoal-mid" style={{ fontSize: 13, lineHeight: 1.5 }}>
                        <span className="flex-shrink-0 mt-[4px]" style={{ color: '#C4541A', fontSize: 8 }}>&#9830;</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#waitlist"
                    className="font-dm-sans font-medium text-[14px] text-center rounded-pill py-3.5 px-6 transition-all duration-200 hover:-translate-y-px"
                    style={{ backgroundColor: 'rgba(44,36,22,0.08)', color: '#2C2416' }}
                  >
                    Join the waitlist &rarr;
                  </a>
                </div>
              </div>
            ) : (
              /* Monthly — single card */
              <div className="w-full max-w-[420px]">
                <div
                  className="flex flex-col"
                  style={{
                    background: '#2C2416',
                    borderRadius: 24,
                    padding: '40px 36px',
                  }}
                >
                  <div className="font-dm-sans font-medium uppercase tracking-[0.08em] text-white/40 mb-4" style={{ fontSize: 11 }}>
                    Monthly
                  </div>
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="font-cormorant font-normal text-warm-white" style={{ fontSize: 60, lineHeight: 1 }}>$9.99</span>
                    <span className="font-dm-sans font-light text-white/50" style={{ fontSize: 15 }}>/ month</span>
                  </div>
                  <p className="font-dm-sans font-light text-white/45 mb-2" style={{ fontSize: 14, lineHeight: 1.6 }}>
                    Full access, billed monthly.
                  </p>
                  <p className="font-dm-sans font-light text-ember mb-8" style={{ fontSize: 13 }}>
                    Switch to annual and save 38%.
                  </p>

                  <ul className="flex flex-col gap-3 mb-10 flex-1">
                    {[...FOUNDING_FEATURES.slice(0, 4), 'Cancel anytime'].map((f) => (
                      <li key={f} className="flex gap-2.5 font-dm-sans font-light text-white/55" style={{ fontSize: 13, lineHeight: 1.5 }}>
                        <span className="flex-shrink-0 mt-[4px]" style={{ color: '#C4541A', fontSize: 8 }}>&#9830;</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/subscribe?plan=monthly"
                    className="font-dm-sans font-medium text-[14px] text-center rounded-pill py-3.5 px-6 transition-all duration-200 hover:-translate-y-px bg-ember text-warm-white hover:bg-ember-light"
                  >
                    Get started monthly &rarr;
                  </a>
                </div>
              </div>
            )}

            {/* Trust line */}
            <div className="flex items-center gap-2 mt-8">
              <Lock size={13} className="text-charcoal-lt flex-shrink-0" />
              <p className="font-dm-sans font-light text-charcoal-lt" style={{ fontSize: 12 }}>
                30-day money-back guarantee &middot; Secured by Stripe &middot; Cancel anytime
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ background: '#F7F2EA', padding: '100px 24px', borderTop: '1px solid rgba(44,36,22,0.07)' }}>
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
