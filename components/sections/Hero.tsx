import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="grid md:grid-cols-2" style={{ height: 'calc(100vh - 64px)', marginTop: 64, minHeight: 600 }}>
      {/* Left: text — properly vertically centered */}
      <div
        className="flex items-center justify-center order-last md:order-first py-16 px-8 md:px-14"
        style={{ background: '#F7F2EA', borderRight: '1px solid rgba(44,36,22,0.07)' }}
      >
        <div style={{ maxWidth: 480 }}>
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-7">
            <div className="rounded-full flex-shrink-0" style={{ width: 6, height: 6, background: '#C4541A' }} />
            <span className="font-dm-sans font-medium text-[11px] uppercase tracking-[0.1em] text-ember">Now accepting founding families</span>
          </div>

          {/* H1 — crystal clear value prop */}
          <h1 className="font-cormorant font-normal text-charcoal mb-5" style={{ fontSize: 'clamp(44px, 4.5vw, 66px)', lineHeight: 1.05 }}>
            One question.<br />
            Every day.<br />
            <em className="italic text-ember">Your whole family.</em>
          </h1>

          {/* Product explanation — first mention of what it actually IS */}
          <p className="font-dm-sans font-normal text-charcoal-mid mb-3" style={{ fontSize: 16, lineHeight: 1.65 }}>
            Kinely is a family app that sends one thoughtful question to every family member&apos;s phone each day.
          </p>
          <p className="font-dm-sans font-light text-charcoal-lt mb-10" style={{ fontSize: 15, lineHeight: 1.75 }}>
            Everyone answers in seconds. Every answer is saved forever. At year&apos;s end, it all becomes a hardcover book delivered to your door.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <Link href="/pricing" className="font-dm-sans font-medium text-[14px] text-warm-white bg-ember hover:bg-ember-light rounded-pill px-8 py-3.5 transition-all duration-200 hover:-translate-y-px">
              Become a Founding Family
            </Link>
            <span className="font-dm-sans text-[13px] text-charcoal-lt">$30 · One full year · Limited spots</span>
          </div>

          {/* Divider */}
          <div className="mb-8" style={{ height: 1, background: 'rgba(44,36,22,0.08)' }} />

          {/* Stats */}
          <div className="flex gap-10">
            {[
              { num: '365', label: 'Questions\nper year' },
              { num: '$30', label: 'Founding\nprice' },
              { num: '∞', label: 'Memories\nkept forever' },
            ].map(({ num, label }) => (
              <div key={num}>
                <div className="font-cormorant font-normal text-charcoal" style={{ fontSize: 36, lineHeight: 1 }}>{num}</div>
                <div className="font-dm-sans text-charcoal-lt mt-1.5 whitespace-pre-line" style={{ fontSize: 11, letterSpacing: '0.04em' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right: provided family photo — full bleed */}
      <div className="relative order-first md:order-last min-h-[300px]">
        <Image
          src="/images/hero-family.png"
          alt="A mother and daughter looking at a phone together — Daddy responded to today's question"
          fill
          className="object-cover object-center"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </section>
  )
}
