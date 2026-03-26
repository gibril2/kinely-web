'use client'

import { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

const PRICES = {
  founding: {
    id: process.env.NEXT_PUBLIC_PRICE_FOUNDING!,
    name: 'Founding Family',
    price: '$59',
    period: 'year',
    description: 'Locked in for life at this price',
    highlight: true,
    badge: 'Best Value',
  },
  annual: {
    id: process.env.NEXT_PUBLIC_PRICE_ANNUAL!,
    name: 'Annual',
    price: '$79',
    period: 'year',
    description: 'Full access, billed annually',
    highlight: false,
    badge: null,
  },
}

function MissingFamilyFallback() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-5 py-10 font-dm-sans"
      style={{ backgroundColor: '#0D0D0D' }}>

      <div className="mb-12 text-center">
        <h1 className="font-cormorant text-[32px] font-semibold tracking-tight"
          style={{ color: '#F5F0E8' }}>
          Kinely
        </h1>
        <p className="text-[15px] mt-2" style={{ color: 'rgba(245,240,232,0.4)' }}>
          Your family story, told together
        </p>
      </div>

      <div className="text-center max-w-[360px]">
        <h2 className="text-[24px] font-semibold mb-3" style={{ color: '#F5F0E8' }}>
          Start in the app first
        </h2>
        <p className="text-[15px] leading-relaxed mb-8" style={{ color: 'rgba(245,240,232,0.5)' }}>
          Download Kinely and create your family circle, then you&apos;ll be
          brought here to choose a plan.
        </p>

        <a
          href="kinely://subscribe"
          className="inline-block w-full rounded-[10px] py-3.5 text-[15px] font-semibold text-center transition-opacity"
          style={{ backgroundColor: '#C4541A', color: '#F5F0E8' }}
        >
          Open Kinely app
        </a>

        <a
          href="/"
          className="inline-block mt-4 text-[14px] font-medium"
          style={{ color: '#C4541A' }}
        >
          Learn more
        </a>
      </div>
    </main>
  )
}

function SubscribeContent() {
  const searchParams = useSearchParams()
  const familyId = searchParams.get('family_id') ?? ''
  const email = searchParams.get('email') ?? ''

  const [loading, setLoading] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  if (!familyId) {
    return <MissingFamilyFallback />
  }

  const handleCheckout = async (priceKey: keyof typeof PRICES) => {
    const price = PRICES[priceKey]
    setLoading(priceKey)
    setError(null)

    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          priceId: price.id,
          familyId,
          email,
        }),
      })

      const data = await res.json()

      if (data.error) {
        setError(data.error)
        return
      }

      window.location.href = data.url
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(null)
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-5 py-10 font-dm-sans"
      style={{ backgroundColor: '#0D0D0D' }}>

      {/* Logo */}
      <div className="mb-12 text-center">
        <h1 className="font-cormorant text-[32px] font-semibold tracking-tight"
          style={{ color: '#F5F0E8' }}>
          Kinely
        </h1>
        <p className="text-[15px] mt-2" style={{ color: 'rgba(245,240,232,0.4)' }}>
          Your family story, told together
        </p>
      </div>

      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-[24px] font-semibold mb-2" style={{ color: '#F5F0E8' }}>
          Choose your plan
        </h2>
        <p className="text-[15px]" style={{ color: 'rgba(245,240,232,0.5)' }}>
          One subscription covers your entire family circle
        </p>
      </div>

      {/* Plan cards */}
      <div className="flex flex-col gap-4 w-full max-w-[400px]">
        {Object.entries(PRICES).map(([key, plan]) => (
          <div
            key={key}
            className="rounded-2xl p-6"
            style={{
              backgroundColor: plan.highlight ? 'rgba(196,84,26,0.08)' : '#1A1A1A',
              border: `1px solid ${plan.highlight ? 'rgba(196,84,26,0.4)' : 'rgba(255,255,255,0.08)'}`,
            }}
          >
            {plan.badge && (
              <div className="inline-block text-[11px] font-semibold px-2.5 py-0.5 rounded-full mb-3"
                style={{
                  backgroundColor: '#C4541A',
                  color: 'white',
                  letterSpacing: '0.5px',
                }}>
                {plan.badge}
              </div>
            )}

            <div className="flex justify-between items-start mb-2">
              <div>
                <div className="text-[17px] font-semibold" style={{ color: '#F5F0E8' }}>
                  {plan.name}
                </div>
                <div className="text-[13px] mt-0.5" style={{ color: 'rgba(245,240,232,0.45)' }}>
                  {plan.description}
                </div>
              </div>
              <div className="text-right">
                <span className="text-[28px] font-bold" style={{ color: '#F5F0E8' }}>
                  {plan.price}
                </span>
                <span className="text-[13px]" style={{ color: 'rgba(245,240,232,0.4)' }}>
                  /{plan.period}
                </span>
              </div>
            </div>

            <button
              onClick={() => handleCheckout(key as keyof typeof PRICES)}
              disabled={loading !== null}
              className="w-full rounded-[10px] py-3.5 text-[15px] font-semibold mt-4 transition-opacity"
              style={{
                backgroundColor: plan.highlight ? '#C4541A' : 'rgba(255,255,255,0.08)',
                color: '#F5F0E8',
                border: 'none',
                cursor: loading !== null ? 'not-allowed' : 'pointer',
                opacity: loading !== null ? 0.6 : 1,
              }}
            >
              {loading === key ? 'Loading...' : `Get started \u2014 ${plan.price}/${plan.period}`}
            </button>
          </div>
        ))}
      </div>

      {error && (
        <p className="text-[14px] mt-4 text-center" style={{ color: '#ff6b6b' }}>
          {error}
        </p>
      )}

      {/* Trust signals */}
      <div className="mt-8 text-center text-[13px]" style={{ color: 'rgba(245,240,232,0.3)' }}>
        <p className="mb-1">30-day money-back guarantee</p>
        <p>Secured by Stripe &middot; Cancel anytime</p>
      </div>
    </main>
  )
}

export default function SubscribePage() {
  return (
    <Suspense>
      <SubscribeContent />
    </Suspense>
  )
}
