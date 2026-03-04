import { SectionKicker } from '../ui/SectionKicker'

const steps = [
  {
    num: '01',
    title: 'A question arrives',
    body: 'Every day at the right moment for your family — a single thoughtful question reaches every phone simultaneously. From our curated library, AI-personalized for you, or written by a family member earlier that week.',
  },
  {
    num: '02',
    title: 'Everyone answers',
    body: 'Text, voice, or photo — thirty seconds. At the dinner table in Gathered Mode or from a hotel room in Connected Mode. Every voice lands in the same place. Every answer seen by the whole family.',
  },
  {
    num: '03',
    title: 'Your story builds',
    body: 'Every answer, memory, and milestone saved and searchable forever. At year\'s end, it becomes a hardcover Annual Book delivered in January. Your family\'s year, printed and permanent.',
  },
]

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      style={{ background: '#2C2416', padding: '100px 56px' }}
    >
      <div className="max-w-content mx-auto">
        <SectionKicker label="How Kinely works" light />

        <div
          className="grid md:grid-cols-3 rounded-[20px] overflow-hidden"
          style={{ border: '1px solid rgba(255,255,255,0.06)' }}
        >
          {steps.map(({ num, title, body }, i) => (
            <div
              key={num}
              style={{
                padding: '48px 40px',
                borderRight:
                  i < steps.length - 1
                    ? '1px solid rgba(255,255,255,0.06)'
                    : 'none',
              }}
            >
              <div
                className="font-cormorant font-normal mb-5 select-none"
                style={{
                  fontSize: 56,
                  color: 'rgba(196,84,26,0.18)',
                  lineHeight: 1,
                }}
              >
                {num}
              </div>
              <h3
                className="font-cormorant font-medium text-white mb-4"
                style={{ fontSize: 26 }}
              >
                {title}
              </h3>
              <p
                className="font-dm-sans font-light"
                style={{
                  fontSize: 14,
                  color: 'rgba(255,255,255,0.4)',
                  lineHeight: 1.75,
                }}
              >
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
