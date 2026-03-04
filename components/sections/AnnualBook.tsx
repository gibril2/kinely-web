import Image from 'next/image'
import { SectionKicker } from '../ui/SectionKicker'

const specs = [
  { label: 'Cover', value: 'Hardcover, full-bleed family photo, gold foil name + year' },
  { label: 'Content', value: 'Every question + every answer in full' },
  { label: 'Pages', value: '120–200 depending on family engagement' },
  { label: 'Delivery', value: 'January of the following year' },
  { label: 'Price', value: '$49 standard · $69 premium hardcover' },
]

export function AnnualBook() {
  return (
    <section className="grid md:grid-cols-2" style={{ minHeight: 600 }}>
      {/* Left */}
      <div
        style={{
          background: '#EDE6D6',
          padding: '80px 64px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <SectionKicker label="The Annual Book" />

        <h2
          className="font-cormorant font-normal text-charcoal mb-8"
          style={{ fontSize: 'clamp(40px, 4.5vw, 64px)', lineHeight: 1.0 }}
        >
          Your year.
          <br />
          Printed.
          <br />
          <em className="italic text-ember">Permanent.</em>
        </h2>

        <p
          className="font-dm-sans font-light text-charcoal-lt mb-3"
          style={{ fontSize: 16, lineHeight: 1.75 }}
        >
          At the end of every year, Kinely compiles every question you answered,
          every memory you shared, every milestone you marked into a hardcover
          book — delivered to your door in January.
        </p>
        <p
          className="font-dm-sans font-light text-charcoal-lt mb-10"
          style={{ fontSize: 16, lineHeight: 1.75 }}
        >
          Not a photo album. Not a scrapbook. Something that has never existed
          before: a complete record of who your family was this year, in your own
          words.
        </p>

        {/* Specs */}
        <div className="flex flex-col gap-3">
          {specs.map(({ label, value }) => (
            <div
              key={label}
              className="flex gap-4"
              style={{ borderTop: '1px solid rgba(44,36,22,0.08)', paddingTop: 12 }}
            >
              <span
                className="font-dm-sans font-medium text-charcoal-lt flex-shrink-0"
                style={{ fontSize: 12, letterSpacing: '0.04em', width: 72 }}
              >
                {label}
              </span>
              <span
                className="font-dm-sans font-light text-charcoal-mid"
                style={{ fontSize: 13, lineHeight: 1.5 }}
              >
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right: photo */}
      <div className="relative min-h-[400px] md:min-h-0">
        <Image
          src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=900&q=80"
          alt="An open hardcover book with premium paper in warm light"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Caption overlay */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 60%, rgba(44,36,22,0.6) 100%)' }} />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p
            className="font-dm-sans font-light text-warm-white/80"
            style={{ fontSize: 13 }}
          >
            Your 2025 family book is 47% complete.
          </p>
        </div>
      </div>
    </section>
  )
}
