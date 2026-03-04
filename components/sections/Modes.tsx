import { SectionKicker } from '../ui/SectionKicker'
import { Flame, Plane } from 'lucide-react'

const modes = [
  {
    icon: <Flame size={28} className="text-ember" />,
    iconBg: <Flame size={80} className="text-ember opacity-[0.04] absolute top-4 right-4" />,
    title: 'Gathered Mode',
    body: "Open Kinely at dinner. The question fills the screen — big enough to read across the table. Your family answers out loud, you log them. Three minutes. Then you put the phone down and get back to dinner. Kinely knows when to disappear.",
    chip: 'For dinner together',
  },
  {
    icon: <Plane size={28} className="text-charcoal-mid" />,
    iconBg: <Plane size={80} className="text-charcoal opacity-[0.04] absolute top-4 right-4" />,
    title: 'Connected Mode',
    body: "The question arrives on every phone at exactly the same moment. Dad answers from his hotel. The kids answer from the couch. Everyone sees each other's answers trickle in. For twenty minutes, you're in the same room across 800 miles.",
    chip: 'For families apart',
  },
]

export function Modes() {
  return (
    <section style={{ background: '#EDE6D6', padding: '100px 56px' }}>
      <div className="max-w-content mx-auto">
        <SectionKicker label="Two ways to be together" />

        <h2
          className="font-cormorant font-normal text-charcoal mb-14"
          style={{
            fontSize: 'clamp(36px, 4vw, 54px)',
            lineHeight: 1.1,
            maxWidth: 560,
          }}
        >
          At the table.
          <br />
          <em className="italic text-ember">Or across the world.</em>
        </h2>

        <div className="grid md:grid-cols-2 gap-5">
          {modes.map(({ icon, iconBg, title, body, chip }) => (
            <div
              key={title}
              className="relative overflow-hidden"
              style={{
                background: '#F7F2EA',
                borderRadius: 24,
                padding: '48px 44px',
                boxShadow: '0 2px 20px rgba(44,36,22,0.06)',
              }}
            >
              {iconBg}
              <div className="mb-5">{icon}</div>
              <h3
                className="font-cormorant font-medium text-charcoal mb-4"
                style={{ fontSize: 30 }}
              >
                {title}
              </h3>
              <p
                className="font-dm-sans font-light text-charcoal-lt mb-6"
                style={{ fontSize: 15, lineHeight: 1.75 }}
              >
                {body}
              </p>
              <span
                className="inline-block font-dm-sans font-medium text-ember text-[12px] uppercase tracking-[0.06em] px-4 py-2 rounded-chip"
                style={{ background: '#F5E6DC' }}
              >
                {chip}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
