import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import Link from 'next/link'

export default function TheBookPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section style={{ background: '#EDE6D6', padding: '120px 56px 80px', borderBottom: '1px solid rgba(44,36,22,0.07)' }}>
          <div className="max-w-content mx-auto grid md:grid-cols-2 items-center" style={{ gap: 80 }}>
            <div>
              <div className="flex items-center gap-3 mb-8 text-ember">
                <div className="w-[18px] h-px bg-ember" />
                <span className="font-dm-sans font-medium text-[11px] uppercase tracking-[0.1em]">The Annual Book</span>
              </div>
              <h1 className="font-cormorant font-normal text-charcoal mb-6" style={{ fontSize: 'clamp(44px, 5vw, 68px)', lineHeight: 1.05 }}>
                Your family&apos;s year.<br />In your own words.<br /><em className="italic text-ember">In your hands.</em>
              </h1>
              <p className="font-dm-sans font-light text-charcoal-lt mb-8" style={{ fontSize: 17, lineHeight: 1.75, maxWidth: 460 }}>
                At the end of every year, every question you answered and every memory you shared is compiled into a hardcover book — delivered to your door in January.
              </p>
              <Link href="/pricing" className="inline-flex font-dm-sans font-medium text-[14px] text-warm-white bg-ember hover:bg-ember-light rounded-pill px-8 py-3.5 transition-all duration-200">
                Get a book with your founding membership →
              </Link>
            </div>

            {/* Book illustration */}
            <div className="flex items-center justify-center py-8">
              <div className="relative">
                <div className="rounded-[8px]" style={{ width: 220, height: 290, background: 'linear-gradient(135deg, #C4962A 0%, #E8B84B 40%, #C4962A 100%)', boxShadow: '12px 12px 48px rgba(44,36,22,0.3), -4px 0 0 rgba(44,36,22,0.15)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10, padding: 28, position: 'relative' }}>
                  <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 16, background: 'rgba(0,0,0,0.15)', borderRadius: '8px 0 0 8px' }} />
                  <div className="font-cormorant italic text-center" style={{ fontSize: 15, color: 'rgba(44,36,22,0.65)', lineHeight: 1.4 }}>The Johnson Family</div>
                  <div style={{ width: 48, height: 1, background: 'rgba(44,36,22,0.25)' }} />
                  <div className="font-cormorant font-medium text-center" style={{ fontSize: 36, color: 'rgba(44,36,22,0.75)', lineHeight: 1 }}>2025</div>
                  <div style={{ width: 48, height: 1, background: 'rgba(44,36,22,0.25)' }} />
                  <div className="font-dm-sans text-center" style={{ fontSize: 10, color: 'rgba(44,36,22,0.45)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Our Year in Full</div>
                </div>
                <div style={{ position: 'absolute', bottom: -12, left: '50%', transform: 'translateX(-50%)', width: 190, height: 20, background: 'rgba(44,36,22,0.15)', borderRadius: '50%', filter: 'blur(10px)' }} />
              </div>
            </div>
          </div>
        </section>

        {/* What's in the book */}
        <section style={{ background: '#F7F2EA', padding: '100px 56px' }}>
          <div className="max-w-content mx-auto">
            <div className="flex items-center gap-3 mb-12 text-ember">
              <div className="w-[18px] h-px bg-ember" />
              <span className="font-dm-sans font-medium text-[11px] uppercase tracking-[0.1em]">What&apos;s inside</span>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Every question', body: 'All 365 questions from your year, printed in full — seasonal prompts, milestone questions, and the funny ones your kids submitted.' },
                { title: 'Every answer', body: 'Every family member\'s answer, in their own words, attributed by name and age at time of writing. Voice answers are transcribed verbatim.' },
                { title: 'Your family at this moment', body: 'A family portrait section at the front — ages, names, and a family summary page automatically generated from your year of answers.' },
              ].map(({ title, body }) => (
                <div key={title} style={{ borderTop: '2px solid rgba(196,84,26,0.2)', paddingTop: 28 }}>
                  <h3 className="font-cormorant font-medium text-charcoal mb-3" style={{ fontSize: 24 }}>{title}</h3>
                  <p className="font-dm-sans font-light text-charcoal-lt" style={{ fontSize: 14, lineHeight: 1.8 }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Book specs */}
        <section style={{ background: '#2C2416', padding: '80px 56px' }}>
          <div className="max-w-[800px] mx-auto">
            <div className="flex items-center gap-3 mb-12 text-ember-light">
              <div className="w-[18px] h-px bg-ember-light" />
              <span className="font-dm-sans font-medium text-[11px] uppercase tracking-[0.1em]">Book specifications</span>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { label: 'Format', value: 'Hardcover, perfect bound' },
                { label: 'Size', value: '8.5 × 11 inches (letter size)' },
                { label: 'Pages', value: '120–200 pages depending on family engagement' },
                { label: 'Paper', value: 'Premium 100gsm matte interior' },
                { label: 'Cover', value: 'Full-bleed family photo with gold foil name and year' },
                { label: 'Delivery', value: 'January of the following year, shipped worldwide' },
                { label: 'Standard price', value: '$49 (included in Family + Book and Founding Circle tiers)' },
                { label: 'Premium upgrade', value: '$69 — linen cover, ribbon bookmark, archival quality' },
              ].map(({ label, value }) => (
                <div key={label} className="flex gap-4" style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 16 }}>
                  <span className="font-dm-sans font-medium flex-shrink-0" style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.04em', width: 100 }}>{label}</span>
                  <span className="font-dm-sans font-light" style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', lineHeight: 1.5 }}>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center" style={{ background: '#F7F2EA', padding: '80px 56px' }}>
          <h2 className="font-cormorant font-normal text-charcoal mb-4" style={{ fontSize: 44 }}>Get the book with your membership.</h2>
          <p className="font-dm-sans font-light text-charcoal-lt mb-8" style={{ fontSize: 16, maxWidth: 440, margin: '0 auto 32px' }}>The Family + Book tier includes your first Annual Book. The Founding Circle includes two.</p>
          <Link href="/pricing" className="inline-flex font-dm-sans font-medium text-[14px] text-warm-white bg-ember hover:bg-ember-light rounded-pill px-8 py-3.5 transition-all duration-200">
            See pricing →
          </Link>
        </section>
      </main>
      <Footer />
    </>
  )
}
