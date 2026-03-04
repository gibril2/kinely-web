import { KinelyPhoneMockup } from '../ui/KinelyPhoneMockup'
import { Button } from '../ui/Button'

export function Hero() {
  return (
    <section
      className="grid md:grid-cols-2 min-h-screen"
      style={{ paddingTop: 64 }}
    >
      {/* Right column — phone (appears first on mobile via order) */}
      <div
        className="order-first md:order-last relative flex items-center justify-center"
        style={{
          background: '#F2EBE0',
          backgroundImage: `
            radial-gradient(ellipse 60% 60% at 70% 30%, rgba(196,84,26,0.07) 0%, transparent 70%),
            radial-gradient(ellipse 40% 40% at 20% 80%, rgba(92,122,95,0.06) 0%, transparent 60%)
          `,
          padding: '80px 48px',
          minHeight: '100%',
        }}
      >
        <KinelyPhoneMockup />
      </div>

      {/* Left column */}
      <div
        className="order-last md:order-first flex items-center"
        style={{
          background: '#F7F2EA',
          padding: '80px 64px 80px 56px',
          borderRight: '1px solid rgba(44,36,22,0.07)',
        }}
      >
        <div className="max-w-[520px]">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-7">
            <div
              className="rounded-full flex-shrink-0"
              style={{ width: 5, height: 5, background: '#C4541A' }}
            />
            <span className="font-dm-sans font-medium text-[11px] uppercase tracking-[0.1em] text-ember">
              Now accepting founding families
            </span>
          </div>

          {/* H1 */}
          <h1
            className="font-cormorant font-normal text-charcoal mb-7"
            style={{ fontSize: 'clamp(52px, 5.5vw, 80px)', lineHeight: 1.02 }}
          >
            Your family&apos;s
            <br />
            story deserves
            <br />
            to be{' '}
            <em className="italic text-ember">kept.</em>
          </h1>

          {/* Subhead */}
          <p
            className="font-dm-sans font-light text-charcoal-lt mb-11"
            style={{ fontSize: 17, lineHeight: 1.7, maxWidth: 420 }}
          >
            One question. Every day. Every answer saved forever.
            Whether you&apos;re at the dinner table or a thousand miles away —
            Kinely keeps your family in the same moment.
          </p>

          {/* CTA row */}
          <div className="flex flex-wrap items-center gap-4 mb-14">
            <Button href="#pricing" variant="primary">
              Become a Founding Family
            </Button>
            <span className="font-dm-sans text-[13px] text-charcoal-lt">
              $30 · One full year · Limited spots
            </span>
          </div>

          {/* Divider */}
          <div
            className="mb-9"
            style={{ height: 1, background: 'rgba(44,36,22,0.08)' }}
          />

          {/* Stats */}
          <div className="flex gap-11">
            {[
              { num: '365', label: 'Questions\na year' },
              { num: '$30', label: 'Founding\nprice' },
              { num: '∞', label: 'Memories\nkept' },
            ].map(({ num, label }) => (
              <div key={num}>
                <div
                  className="font-cormorant font-normal text-charcoal"
                  style={{ fontSize: 38, lineHeight: 1 }}
                >
                  {num}
                </div>
                <div
                  className="font-dm-sans text-charcoal-lt mt-1 whitespace-pre-line"
                  style={{ fontSize: 11, letterSpacing: '0.04em' }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
