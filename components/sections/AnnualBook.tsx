import Link from 'next/link'
import { BookClickable } from '../ui/BookClickable'

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
          This year happened.<br /><em className="italic text-ember">This is proof.</em>
        </h2>

        <p className="font-dm-sans font-light text-charcoal-lt mb-6" style={{ fontSize: 16, lineHeight: 1.75 }}>
          Every question your family answered. Every voice note. Every photo. Compiled, designed, and printed — delivered to your door every January.
        </p>

        <p className="font-dm-sans font-normal text-charcoal-mid mb-10" style={{ fontSize: 16, lineHeight: 1.75 }}>
          Not a scrapbook. Not a photo album. A complete record of who your family was this year, in your own words.
        </p>

        <Link href="/the-book" className="font-dm-sans font-medium text-[14px] text-ember hover:text-ember-light transition-colors self-start">
          Learn more about the Annual Book →
        </Link>
      </div>

      {/* Right: book cover photo */}
      <div
        className="relative flex items-center justify-center min-h-[400px]"
        style={{
          background: '#F0E8D8',
        }}
      >
        <BookClickable />
      </div>
    </section>
  )
}
