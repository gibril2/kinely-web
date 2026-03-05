import Link from 'next/link'
import { BookClickable } from '../ui/BookClickable'

const specs = [
  { label: 'Cover', value: 'Hardcover, full-bleed family photo, gold foil name + year' },
  { label: 'Content', value: 'Best 100–200 prompts from your year — curated by Kinely, with every answer in full' },
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
