import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ModePhoneMockup } from '@/components/ui/ModePhoneMockup'
import Link from 'next/link'

const mode = {
  slug: 'grandparents',
  chip: 'For every generation',
  name: 'Grandparents Mode',
  headline: 'Built so no one gets left behind.',
  subhead: "Grandma gets the question in extra-large text with a single big button to record her voice. The grandkids hear it played back in her actual voice. The stories she's never told — her childhood, her wedding day, her biggest adventure — finally get asked.",
  steps: [
    { num: '01', title: 'Extra-large text, simplified interface', body: "Grandparents Mode strips back every non-essential element. One question, very large. Two buttons: record or type. Nothing to figure out." },
    { num: '02', title: 'Voice-first answers', body: "One tap starts recording. They speak their answer in their own voice, at their own pace. No typing, no autocorrect, no frustration." },
    { num: '03', title: 'The family hears them', body: "Voice answers play back in their actual voice — not transcribed text, not a summary. The grandkids hear Grandma's laugh when she tells the story about her first job." },
    { num: '04', title: 'Stories that were almost lost, saved forever', body: "The questions Kinely asks are the ones no one thought to ask before. Her childhood home. The year everything changed. The person who shaped her most." },
  ],
}

export default function GrandparentsModePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          className="grid md:grid-cols-2"
          style={{ borderBottom: '1px solid rgba(44,36,22,0.07)', minHeight: 600 }}
        >
          {/* Left */}
          <div
            className="flex flex-col justify-center px-14 py-20 order-last md:order-first"
            style={{ background: '#F7F2EA', borderRight: '1px solid rgba(44,36,22,0.07)' }}
          >
            <Link
              href="/#modes"
              className="inline-flex items-center gap-2 font-dm-sans font-medium text-[11px] text-charcoal-lt hover:text-charcoal transition-colors mb-10 self-start"
            >
              ← All modes
            </Link>

            <div className="flex items-center gap-3 mb-6 text-ember">
              <div className="w-[18px] h-px bg-ember" />
              <span className="font-dm-sans font-medium text-[11px] uppercase tracking-[0.1em]">{mode.chip}</span>
            </div>

            <h1
              className="font-cormorant font-normal text-charcoal mb-6"
              style={{ fontSize: 'clamp(38px, 4vw, 58px)', lineHeight: 1.05, maxWidth: 480 }}
            >
              {mode.headline}
            </h1>

            <p
              className="font-dm-sans font-light text-charcoal-lt mb-10"
              style={{ fontSize: 16, lineHeight: 1.8, maxWidth: 460 }}
            >
              {mode.subhead}
            </p>

            <Link
              href="/pricing"
              className="font-dm-sans font-medium text-[14px] text-warm-white bg-ember hover:bg-ember-light rounded-pill px-8 py-3.5 transition-all duration-200 self-start"
            >
              Start your family&apos;s story →
            </Link>
          </div>

          {/* Right: phone */}
          <div
            className="flex items-center justify-center py-20 px-8 order-first md:order-last"
            style={{
              background: '#2C2416',
              backgroundImage: `radial-gradient(ellipse 70% 60% at 50% 50%, rgba(196,84,26,0.12) 0%, transparent 70%)`,
            }}
          >
            <ModePhoneMockup mode={mode.slug} />
          </div>
        </section>

        {/* How it works */}
        <section style={{ background: '#F7F2EA', padding: '100px 56px' }}>
          <div className="max-w-content mx-auto">
            <div className="flex items-center gap-3 mb-12 text-ember">
              <div className="w-[18px] h-px bg-ember" />
              <span className="font-dm-sans font-medium text-[11px] uppercase tracking-[0.1em]">
                How {mode.name} works
              </span>
            </div>
            <div className="flex flex-col">
              {mode.steps.map(({ num, title, body }) => (
                <div
                  key={num}
                  className="grid md:grid-cols-[100px_1fr] gap-6 md:gap-14"
                  style={{ borderTop: '1px solid rgba(44,36,22,0.08)', paddingTop: 48, paddingBottom: 48 }}
                >
                  <div className="font-cormorant font-normal text-ember" style={{ fontSize: 56, lineHeight: 1, opacity: 0.45 }}>
                    {num}
                  </div>
                  <div>
                    <h2 className="font-cormorant font-medium text-charcoal mb-3" style={{ fontSize: 28 }}>{title}</h2>
                    <p className="font-dm-sans font-light text-charcoal-lt" style={{ fontSize: 15, lineHeight: 1.8 }}>{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="text-center"
          style={{
            background: '#2C2416',
            padding: '80px 56px',
            backgroundImage: 'radial-gradient(ellipse 600px 300px at 50% 50%, rgba(196,84,26,0.10) 0%, transparent 65%)',
          }}
        >
          <p className="font-dm-sans font-light uppercase tracking-[0.08em] mb-6" style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)' }}>
            {mode.name}
          </p>
          <h2 className="font-cormorant font-normal text-white mb-8" style={{ fontSize: 'clamp(36px, 4vw, 54px)', lineHeight: 1.1, maxWidth: 520, margin: '0 auto 32px' }}>
            Ready to try it with your family?
          </h2>
          <div className="flex flex-col items-center gap-4 mt-8">
            <Link
              href="/pricing"
              className="font-dm-sans font-medium text-[14px] text-warm-white bg-ember hover:bg-ember-light rounded-pill px-10 py-4 transition-all duration-200 hover:-translate-y-px"
            >
              Become a Founding Family →
            </Link>
            <Link href="/#modes" className="font-dm-sans font-light text-[13px] transition-colors" style={{ color: 'rgba(255,255,255,0.3)' }}>
              ← Explore all modes
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
