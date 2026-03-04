import Link from 'next/link'

const specs = [
  { label: 'Cover', value: 'Hardcover, full-bleed family photo, gold foil name + year' },
  { label: 'Content', value: 'Every question + every answer, in full' },
  { label: 'Pages', value: '120–200 depending on family engagement' },
  { label: 'Delivery', value: 'January of the following year' },
  { label: 'Price', value: '$49 standard · $69 premium hardcover' },
]

export function AnnualBook() {
  return (
    <section className="grid md:grid-cols-2" style={{ minHeight: 560, borderTop: '1px solid rgba(44,36,22,0.07)' }}>
      {/* Left */}
      <div style={{ background: '#EDE6D6', padding: '80px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div className="flex items-center gap-3 mb-8 text-ember">
          <div className="w-[18px] h-px bg-ember" />
          <span className="font-dm-sans font-medium text-[11px] uppercase tracking-[0.1em]">The Annual Book</span>
        </div>

        <h2 className="font-cormorant font-normal text-charcoal mb-8" style={{ fontSize: 'clamp(40px, 4.5vw, 64px)', lineHeight: 1.0 }}>
          Your year.<br />Printed.<br /><em className="italic text-ember">Permanent.</em>
        </h2>

        <p className="font-dm-sans font-light text-charcoal-lt mb-3" style={{ fontSize: 16, lineHeight: 1.75 }}>
          At the end of every year, Kinely compiles every question you answered, every memory you shared, every milestone you marked into a hardcover book — delivered to your door in January.
        </p>
        <p className="font-dm-sans font-light text-charcoal-lt mb-10" style={{ fontSize: 16, lineHeight: 1.75 }}>
          Not a photo album. Not a scrapbook. Something that has never existed before: a complete record of who your family was this year, in your own words.
        </p>

        <div className="flex flex-col gap-3 mb-10">
          {specs.map(({ label, value }) => (
            <div key={label} className="flex gap-4" style={{ borderTop: '1px solid rgba(44,36,22,0.08)', paddingTop: 12 }}>
              <span className="font-dm-sans font-medium text-charcoal-lt flex-shrink-0" style={{ fontSize: 12, letterSpacing: '0.04em', width: 72 }}>{label}</span>
              <span className="font-dm-sans font-light text-charcoal-mid" style={{ fontSize: 13, lineHeight: 1.5 }}>{value}</span>
            </div>
          ))}
        </div>

        <Link href="/the-book" className="font-dm-sans font-medium text-[14px] text-ember hover:text-ember-light transition-colors self-start">
          Learn more about the Annual Book →
        </Link>
      </div>

      {/* Right: warm CSS treatment instead of broken external image */}
      <div
        className="relative flex flex-col items-center justify-center px-16 py-20 min-h-[400px]"
        style={{
          background: '#2C2416',
          backgroundImage: `radial-gradient(ellipse 70% 50% at 50% 40%, rgba(196,84,26,0.12) 0%, transparent 70%)`,
        }}
      >
        {/* Book illustration (CSS) */}
        <div className="relative mb-10">
          <div
            className="rounded-[6px]"
            style={{
              width: 180,
              height: 240,
              background: 'linear-gradient(135deg, #C4962A 0%, #E8B84B 40%, #C4962A 100%)',
              boxShadow: '8px 8px 32px rgba(0,0,0,0.4), -2px 0 0 rgba(0,0,0,0.2)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              padding: 24,
              position: 'relative',
            }}
          >
            {/* Spine shadow */}
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 12, background: 'rgba(0,0,0,0.2)', borderRadius: '6px 0 0 6px' }} />
            <div className="font-cormorant italic text-center" style={{ fontSize: 13, color: 'rgba(44,36,22,0.7)', lineHeight: 1.3 }}>The Johnson Family</div>
            <div style={{ width: 40, height: 1, background: 'rgba(44,36,22,0.3)' }} />
            <div className="font-cormorant font-medium text-center" style={{ fontSize: 28, color: 'rgba(44,36,22,0.8)', lineHeight: 1 }}>2025</div>
            <div style={{ width: 40, height: 1, background: 'rgba(44,36,22,0.3)' }} />
            <div className="font-dm-sans text-center" style={{ fontSize: 9, color: 'rgba(44,36,22,0.5)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Our Year in Full</div>
          </div>
          {/* Shadow */}
          <div style={{ position: 'absolute', bottom: -8, left: '50%', transform: 'translateX(-50%)', width: 160, height: 16, background: 'rgba(0,0,0,0.3)', borderRadius: '50%', filter: 'blur(8px)' }} />
        </div>

        <p className="font-dm-sans font-light text-center" style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', maxWidth: 240, lineHeight: 1.6 }}>
          &ldquo;Your 2025 family book is 47% complete.&rdquo;
        </p>
      </div>
    </section>
  )
}
