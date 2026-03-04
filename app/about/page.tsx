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
