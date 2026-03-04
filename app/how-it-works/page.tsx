import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import Link from 'next/link'

const steps = [
  {
    num: '01',
    title: 'A question arrives on every phone',
    summary: 'Each morning, one carefully chosen question reaches every member of your family simultaneously.',
    detail: 'Questions come from our curated library of over 1,000 prompts, spanning childhood memories, values, funny moments, hypotheticals, and milestone reflections. Our algorithm personalises your question stream based on family composition, recent answers, and seasonal moments. Family members can also write and schedule questions in advance — setting up a surprise for a birthday, an anniversary, or just because.',
    example: '"What\'s a moment from this year you\'re most proud of?"',
  },
  {
    num: '02',
    title: 'Everyone answers — in their own way',
    summary: 'Text, voice note, or photo. It takes under two minutes. And everyone\'s answer lands in the same place.',
    detail: 'In Gathered Mode, the question fills the screen — readable across a dinner table. Your family answers out loud and someone logs the responses. Kinely then disappears so you can get back to dinner. In Connected Mode, notifications go to every phone at once. Dad answers from his hotel. The kids answer from the couch. Everyone sees answers arrive in real-time. For twenty minutes, you\'re in the same room across 800 miles.',
    example: '"SpongeBob theme song, obviously. We\'re chaos and everyone knows it." — Emma, 14',
  },
  {
    num: '03',
    title: 'Every answer is saved forever',
    summary: 'Your family\'s archive grows every day. Searchable, filterable, permanently yours.',
    detail: 'Every answer is timestamped and stored with the age of each family member when they gave it. Voice notes are transcribed. Photos are preserved at full quality. You can search by keyword ("embarrassing", "proud", "school"), by person, by date range, or by theme. Open the archive in ten years and read what your seven-year-old said her favourite day of the year was. That\'s what Kinely is for.',
    example: '"Jake · was 8 · December 25, 2024 — When dad came home early and we watched movies all day."',
  },
  {
    num: '04',
    title: 'At year\'s end, your book arrives',
    summary: 'Every question, every answer, beautifully typeset and printed. Delivered in January.',
    detail: 'In the first week of January, Kinely compiles your family\'s entire year into a hardcover Annual Book. Every question is printed with every answer, in full. Family members are identified by name and age at time of writing. The book is professionally typeset, printed on premium paper, and shipped to your door. It is not a photo album. It is not a scrapbook. It is a complete written record of who your family was this year.',
    example: 'The Johnson Family · 2025 · 164 pages · Hardcover with gold foil',
  },
]

const faqs = [
  { q: 'What if a family member doesn\'t want to participate?', a: 'That\'s okay. Kinely works with whoever wants to take part. Even one parent and one child answering together creates something worth keeping. You can always add more family members later.' },
  { q: 'How long does it take each day?', a: 'Most families spend 2–5 minutes. The question arrives, you answer, and Kinely disappears. We designed it specifically to fit into real life — not to demand it.' },
  { q: 'What types of questions does Kinely ask?', a: 'We have 1,000+ questions across categories: childhood memories, values and beliefs, funny and hypothetical, milestone reflections, current events in your family, and seasonal prompts. We never ask anything inappropriate. Every question is thoughtful and family-safe.' },
  { q: 'What if my family is spread across different time zones?', a: 'Connected Mode is built for exactly this. Everyone receives the question simultaneously in their local time, and answers arrive in real-time regardless of where in the world your family is.' },
  { q: 'Can I see past answers from before I joined?', a: 'Your archive begins the day you join. There are no answers before that — but many families find that Kinely prompts them to capture and add old family stories and memories manually.' },
]

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section style={{ background: '#F7F2EA', padding: '120px 56px 80px' }}>
          <div className="max-w-content mx-auto">
            <div className="flex items-center gap-3 mb-8 text-ember">
              <div className="w-[18px] h-px bg-ember" />
              <span className="font-dm-sans font-medium text-[11px] uppercase tracking-[0.1em]">How Kinely works</span>
            </div>
            <h1 className="font-cormorant font-normal text-charcoal mb-6" style={{ fontSize: 'clamp(44px, 5vw, 72px)', lineHeight: 1.05, maxWidth: 640 }}>
              Simple enough to do every day. Meaningful enough to last a lifetime.
            </h1>
            <p className="font-dm-sans font-light text-charcoal-lt" style={{ fontSize: 18, lineHeight: 1.7, maxWidth: 540 }}>
              Kinely is a daily family ritual. Here&apos;s exactly how it works.
            </p>
          </div>
        </section>

        {/* Steps */}
        <section style={{ background: '#F7F2EA', padding: '0 56px 100px' }}>
          <div className="max-w-content mx-auto">
            {steps.map(({ num, title, summary, detail, example }) => (
              <div
                key={num}
                className="grid md:grid-cols-[120px_1fr] gap-8 md:gap-16"
                style={{ borderTop: '1px solid rgba(44,36,22,0.08)', paddingTop: 56, paddingBottom: 56 }}
              >
                <div>
                  <div className="font-cormorant font-normal text-ember" style={{ fontSize: 64, lineHeight: 1, opacity: 0.5 }}>{num}</div>
                </div>
                <div>
                  <h2 className="font-cormorant font-medium text-charcoal mb-3" style={{ fontSize: 32 }}>{title}</h2>
                  <p className="font-dm-sans font-normal text-charcoal-mid mb-5" style={{ fontSize: 16, lineHeight: 1.6 }}>{summary}</p>
                  <p className="font-dm-sans font-light text-charcoal-lt mb-6" style={{ fontSize: 15, lineHeight: 1.8 }}>{detail}</p>
                  <div style={{ background: '#EDE6D6', borderRadius: 14, padding: '16px 20px', borderLeft: '3px solid #C4541A' }}>
                    <p className="font-cormorant italic text-charcoal-mid" style={{ fontSize: 16 }}>{example}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section style={{ background: '#2C2416', padding: '100px 56px' }}>
          <div className="max-w-[800px] mx-auto">
            <div className="flex items-center gap-3 mb-12 text-ember-light">
              <div className="w-[18px] h-px bg-ember-light" />
              <span className="font-dm-sans font-medium text-[11px] uppercase tracking-[0.1em]">Common questions</span>
            </div>
            <div className="flex flex-col">
              {faqs.map(({ q, a }) => (
                <div key={q} style={{ borderTop: '1px solid rgba(255,255,255,0.07)', padding: '28px 0' }}>
                  <h3 className="font-cormorant font-medium text-white mb-3" style={{ fontSize: 22 }}>{q}</h3>
                  <p className="font-dm-sans font-light" style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.8 }}>{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center" style={{ background: '#F7F2EA', padding: '80px 56px', borderTop: '1px solid rgba(44,36,22,0.07)' }}>
          <h2 className="font-cormorant font-normal text-charcoal mb-4" style={{ fontSize: 44 }}>Ready to start?</h2>
          <p className="font-dm-sans font-light text-charcoal-lt mb-8" style={{ fontSize: 16 }}>Join our founding families for $30 — one full year.</p>
          <Link href="/pricing" className="font-dm-sans font-medium text-[14px] text-warm-white bg-ember hover:bg-ember-light rounded-pill px-8 py-3.5 transition-all duration-200">
            See founding family pricing →
          </Link>
        </section>
      </main>
      <Footer />
    </>
  )
}
