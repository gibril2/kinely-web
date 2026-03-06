import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section style={{ background: '#F7F2EA', padding: '120px 56px 80px', borderBottom: '1px solid rgba(44,36,22,0.07)' }}>
          <div className="max-w-[720px] mx-auto">
            <div className="flex items-center gap-3 mb-8 text-ember">
              <div className="w-[18px] h-px bg-ember" />
              <span className="font-dm-sans font-medium text-[11px] uppercase tracking-[0.1em]">Why we built this</span>
            </div>
            <h1 className="font-cormorant font-normal text-charcoal mb-6" style={{ fontSize: 'clamp(44px, 5vw, 68px)', lineHeight: 1.05 }}>
              We built Kinely because we kept forgetting.
            </h1>
            <p className="font-dm-sans font-light text-charcoal-lt" style={{ fontSize: 18, lineHeight: 1.75 }}>
              The stories. The answers. The version of your family that existed right now, at this exact moment in time.
            </p>
          </div>
        </section>

        {/* Word origin */}
        <section style={{ background: '#2C2416' }}>
          <div className="max-w-content mx-auto" style={{ padding: '100px 56px' }}>

            {/* Kicker */}
            <div className="flex items-center gap-3 mb-16" style={{ color: 'rgba(253,250,245,0.3)' }}>
              <div className="w-[18px] h-px" style={{ background: 'rgba(253,250,245,0.2)' }} />
              <span className="font-dm-sans font-medium text-[11px] uppercase tracking-[0.1em]">The name</span>
            </div>

            {/* KINELY — large centered header */}
            <div className="text-center mb-6">
              <h2
                className="font-cormorant font-normal"
                style={{ fontSize: 'clamp(80px, 13vw, 180px)', color: '#FDFAF5', lineHeight: 0.9, letterSpacing: '-0.02em' }}
              >
                Kinely
              </h2>
            </div>

            {/* Phonetic + tagline */}
            <div className="flex flex-col items-center gap-3 mb-20">
              <span className="font-dm-sans font-light" style={{ fontSize: 12, color: 'rgba(253,250,245,0.2)', letterSpacing: '0.14em' }}>
                / ˈkɪn · li /
              </span>
              <span className="font-cormorant italic" style={{ fontSize: 22, color: 'rgba(253,250,245,0.35)' }}>
                In the manner of kin.
              </span>
            </div>

            {/* Divider with ember center mark */}
            <div className="relative flex items-center mb-20">
              <div className="flex-1" style={{ height: 1, background: 'rgba(253,250,245,0.07)' }} />
              <div className="mx-6 rounded-full flex-shrink-0" style={{ width: 8, height: 8, background: '#C4541A' }} />
              <div className="flex-1" style={{ height: 1, background: 'rgba(253,250,245,0.07)' }} />
            </div>

            {/* KIN + FAMILY — two panels */}
            <div className="grid md:grid-cols-2" style={{ gap: 2 }}>

              {/* KIN panel */}
              <div
                className="rounded-l-card"
                style={{ background: 'rgba(253,250,245,0.04)', border: '1px solid rgba(253,250,245,0.07)', borderRight: 'none', padding: '56px 52px' }}
              >
                {/* Label */}
                <div className="font-dm-sans font-medium uppercase tracking-widest mb-8" style={{ fontSize: 9, color: '#C4541A', letterSpacing: '0.2em' }}>
                  Kin
                </div>

                {/* Big word */}
                <div
                  className="font-cormorant font-normal mb-2"
                  style={{ fontSize: 'clamp(56px, 7vw, 96px)', color: '#FDFAF5', lineHeight: 0.9, letterSpacing: '-0.02em' }}
                >
                  Next
                </div>
                <div
                  className="font-cormorant font-normal italic mb-10"
                  style={{ fontSize: 'clamp(56px, 7vw, 96px)', color: 'rgba(253,250,245,0.25)', lineHeight: 0.9, letterSpacing: '-0.02em' }}
                >
                  of kin.
                </div>

                {/* Rule */}
                <div style={{ width: 32, height: 1, background: 'rgba(253,250,245,0.2)', marginBottom: 28 }} />

                {/* Definition */}
                <p className="font-dm-sans font-light mb-4" style={{ fontSize: 14, color: 'rgba(253,250,245,0.5)', lineHeight: 1.8 }}>
                  The person listed on the form. The one called when it matters. The relationship the world recognises as closest — before sentiment, before preference. By blood or bond.
                </p>
                <p className="font-cormorant italic" style={{ fontSize: 18, color: 'rgba(253,250,245,0.3)', lineHeight: 1.5 }}>
                  Your people, officially.
                </p>
              </div>

              {/* FAMILY panel */}
              <div
                className="rounded-r-card"
                style={{ background: 'rgba(196,84,26,0.08)', border: '1px solid rgba(196,84,26,0.2)', padding: '56px 52px' }}
              >
                {/* Label */}
                <div className="font-dm-sans font-medium uppercase tracking-widest mb-8" style={{ fontSize: 9, color: '#C4962A', letterSpacing: '0.2em' }}>
                  Family
                </div>

                {/* Big word */}
                <div
                  className="font-cormorant font-normal mb-2"
                  style={{ fontSize: 'clamp(56px, 7vw, 96px)', color: '#FDFAF5', lineHeight: 0.9, letterSpacing: '-0.02em' }}
                >
                  Together
                </div>
                <div
                  className="font-cormorant font-normal italic mb-10"
                  style={{ fontSize: 'clamp(56px, 7vw, 96px)', color: 'rgba(196,84,26,0.5)', lineHeight: 0.9, letterSpacing: '-0.02em' }}
                >
                  every day.
                </div>

                {/* Rule */}
                <div style={{ width: 32, height: 1, background: 'rgba(196,150,42,0.4)', marginBottom: 28 }} />

                {/* Definition */}
                <p className="font-dm-sans font-light mb-4" style={{ fontSize: 14, color: 'rgba(253,250,245,0.5)', lineHeight: 1.8 }}>
                  The table. The voices. The version of your daughter that exists right now, at this exact age, saying exactly these things. Family is not a static fact — it is something you build daily, in small answers to small questions.
                </p>
                <p className="font-cormorant italic" style={{ fontSize: 18, color: 'rgba(196,150,42,0.5)', lineHeight: 1.5 }}>
                  Your people, in practice.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* Story */}
        <section style={{ background: '#F7F2EA', padding: '80px 56px 100px' }}>
          <div className="max-w-[720px] mx-auto">
            {[
              {
                heading: 'The moment that started it',
                body: "A few years ago, one of our founders was sorting through his parents' home after they moved out. He found a box of letters his father had written to his own parents in the 1970s. Reading them, he realised he had never known that version of his father — the young man, the dreamer, the person before parenthood. That person was gone. The letters were the only record.\n\nHe thought: what if every family had a record like that? Not just photos — words. Actual answers to the questions you wish you'd asked.",
              },
              {
                heading: 'What we tried first',
                body: "We tried journaling apps. Too much friction — nobody writes three paragraphs a day. We tried family group chats. Too much noise — the conversations about dinner drown out the real ones. We tried photo apps. Photos are precious, but a photo of a birthday doesn't tell you what your nine-year-old thought the best part of the year was.\n\nWe needed something that started the conversation for you, took less than two minutes, and made sure nothing was ever lost.",
              },
              {
                heading: 'The one-question idea',
                body: "The breakthrough was simple: one question. Just one. Sent to everyone at the same time. Short enough to answer anywhere. Meaningful enough to matter.\n\nWe tested it with our own families first. Within a week, we were learning things we'd never known. Within a month, we couldn't imagine stopping. The archive was already something we wanted to protect.",
              },
              {
                heading: 'The Annual Book',
                body: "The book was the final piece. Digital archives can be lost, corrupted, or forgotten. A physical book sitting on your shelf — with your family's name embossed on the cover in gold — cannot. We wanted Kinely to produce something you'd keep forever. Something you'd hand to your children.\n\nThat's what the Annual Book is. Not a product. A reason to answer today's question.",
              },
              {
                heading: 'Who we are',
                body: "Kinely is a small team of people who care deeply about families and the stories they leave behind. We are parents, children, and siblings. We have seen what families forget, and we've decided to do something about it.\n\nWe are building Kinely with the founding families who believe in this with us. We read every piece of feedback. We respond to every email. This product matters to us personally, and we intend to build it with care.",
              },
            ].map(({ heading, body }) => (
              <div key={heading} style={{ borderTop: '1px solid rgba(44,36,22,0.08)', paddingTop: 48, paddingBottom: 40 }}>
                <h2 className="font-cormorant font-medium text-charcoal mb-5" style={{ fontSize: 28 }}>{heading}</h2>
                {body.split('\n\n').map((para, i) => (
                  <p key={i} className="font-dm-sans font-light text-charcoal-lt mb-4" style={{ fontSize: 16, lineHeight: 1.8 }}>{para}</p>
                ))}
              </div>
            ))}

            <div className="mt-8 pt-10" style={{ borderTop: '1px solid rgba(44,36,22,0.08)' }}>
              <p className="font-cormorant italic text-charcoal-mid mb-6" style={{ fontSize: 20 }}>
                If this resonates with you, we&apos;d love for your family to be one of the founding ones.
              </p>
              <Link href="/pricing" className="inline-flex font-dm-sans font-medium text-[14px] text-warm-white bg-ember hover:bg-ember-light rounded-pill px-8 py-3.5 transition-all duration-200">
                See founding family pricing →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
