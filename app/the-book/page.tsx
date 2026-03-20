'use client'

import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function TheBookContent() {
  const searchParams = useSearchParams()
  const fromTransition = searchParams.get('t') === '1'

  // When arriving via book transition the overlay covers the page,
  // so we skip entrance animations and render everything at final state.
  const fade = (delay: number) =>
    fromTransition
      ? { initial: false as const, animate: {}, transition: {} }
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, ease: 'easeOut', delay },
        }

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section style={{ background: '#EDE6D6', padding: '120px 56px 80px', borderBottom: '1px solid rgba(44,36,22,0.07)' }}>
          <div className="max-w-content mx-auto grid md:grid-cols-2 items-center" style={{ gap: 80 }}>
            <motion.div {...fade(0.3)}>
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
            </motion.div>

            {/* Book photo */}
            <div className="flex items-center justify-center py-4">
              <motion.div {...fade(0.2)}>
                <Image
                  src="/images/book-open.png"
                  alt="Kinely Annual Book — open book spread"
                  width={560}
                  height={440}
                  style={{ objectFit: 'contain', maxHeight: 480, width: 'auto', filter: 'drop-shadow(0 12px 40px rgba(44,36,22,0.15))' }}
                  priority
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* What's in the book */}
        <motion.section
          {...fade(0.4)}
          style={{ background: '#F7F2EA', padding: '100px 56px' }}
        >
          <div className="max-w-content mx-auto">
            <div className="flex items-center gap-3 mb-12 text-ember">
              <div className="w-[18px] h-px bg-ember" />
              <span className="font-dm-sans font-medium text-[11px] uppercase tracking-[0.1em]">What&apos;s inside</span>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'The best questions', body: 'The best 100–200 prompts from your year — curated by Kinely to capture the moments that mattered most. Seasonal, milestone, and the ones that surprised you.' },
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
        </motion.section>

        {/* Inside the book — spreads */}
        <motion.section
          {...fade(0.5)}
          style={{ background: '#EDE6D6', padding: '80px 56px' }}
        >
          <div className="max-w-content mx-auto">
            <div className="flex items-center gap-3 mb-10 text-ember">
              <div className="w-[18px] h-px bg-ember" />
              <span className="font-dm-sans font-medium text-[11px] uppercase tracking-[0.1em]">Inside the book</span>
            </div>
            <div className="flex flex-col gap-8">
              <Image
                src="/images/book-spread-1.png"
                alt="Kinely Annual Book open spread — daily question with family answers"
                width={1200}
                height={800}
                className="w-full"
                style={{ objectFit: 'contain', filter: 'drop-shadow(0 8px 32px rgba(44,36,22,0.12))' }}
              />
            </div>
          </div>
        </motion.section>

        {/* Book specs */}
        <motion.section
          {...fade(0.6)}
          style={{ background: '#2C2416', padding: '80px 56px' }}
        >
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
        </motion.section>

        {/* CTA */}
        <motion.section
          {...fade(0.7)}
          className="text-center"
          style={{ background: '#F7F2EA', padding: '80px 56px' }}
        >
          <h2 className="font-cormorant font-normal text-charcoal mb-4" style={{ fontSize: 44 }}>Get the book with your membership.</h2>
          <p className="font-dm-sans font-light text-charcoal-lt mb-8" style={{ fontSize: 16, maxWidth: 440, margin: '0 auto 32px' }}>The Family + Book tier includes your first Annual Book. The Founding Circle includes two.</p>
          <Link href="/pricing" className="inline-flex font-dm-sans font-medium text-[14px] text-warm-white bg-ember hover:bg-ember-light rounded-pill px-8 py-3.5 transition-all duration-200">
            See pricing →
          </Link>
        </motion.section>
      </main>
      <Footer />
    </>
  )
}

export default function TheBookPage() {
  return (
    <Suspense>
      <TheBookContent />
    </Suspense>
  )
}
