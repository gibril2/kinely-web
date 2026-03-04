import Link from 'next/link'

const steps = [
  {
    num: '01',
    title: 'A question arrives',
    body: 'Every morning, a single thoughtful question lands on every family member\'s phone at the same time. Questions come from our curated library of 1,000+, AI-personalised to your family, or written by a family member in advance.',
  },
  {
    num: '02',
    title: 'Everyone answers',
    body: 'Text, voice note, or photo — answering takes under two minutes. Whether you\'re at the dinner table in Gathered Mode or your dad is answering from a business trip in Connected Mode, every voice lands in the same place.',
  },
  {
    num: '03',
    title: 'Your story builds',
    body: 'Every answer is saved permanently — searchable, filterable, and beautifully organised. At year\'s end, every question and every answer is compiled into a hardcover Annual Book, delivered to your door in January.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" style={{ background: '#2C2416', padding: '100px 56px' }}>
      <div className="max-w-content mx-auto">
        {/* Kicker */}
        <div className="flex items-center gap-3 mb-4 text-ember-light">
          <div className="w-[18px] h-px bg-ember-light" />
          <span className="font-dm-sans font-medium text-[11px] uppercase tracking-[0.1em]">How Kinely works</span>
        </div>

        <h2 className="font-cormorant font-normal text-white mb-14" style={{ fontSize: 'clamp(32px, 3.5vw, 48px)', lineHeight: 1.1, maxWidth: 560 }}>
          Three steps. Two minutes.<br /><em className="italic text-ember-light">A lifetime of memories.</em>
        </h2>

        <div
          className="grid md:grid-cols-3 rounded-[20px] overflow-hidden"
          style={{ border: '1px solid rgba(255,255,255,0.1)' }}
        >
          {steps.map(({ num, title, body }, i) => (
            <div
              key={num}
              style={{
                padding: '48px 40px',
                borderRight: i < steps.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
              }}
            >
              {/* Number — much more visible now */}
              <div className="font-cormorant font-normal mb-5 select-none" style={{ fontSize: 56, color: 'rgba(196,84,26,0.5)', lineHeight: 1 }}>
                {num}
              </div>
              <h3 className="font-cormorant font-medium text-white mb-4" style={{ fontSize: 26 }}>{title}</h3>
              {/* Body text — much more readable now */}
              <p className="font-dm-sans font-light" style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8 }}>
                {body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/how-it-works" className="font-dm-sans font-medium text-[13px] text-ember-light hover:text-ember transition-colors">
            See a full walkthrough →
          </Link>
        </div>
      </div>
    </section>
  )
}
