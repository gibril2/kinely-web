const objections = [
  {
    q: '"My family won\'t actually do this."',
    a: "You don't need everyone on board from day one. One person starts. Others get a notification. Most families find that the question itself does the convincing — because it's specific, unexpected, and takes 90 seconds to answer.",
  },
  {
    q: '"We\'ll start and then forget."',
    a: "Kinely is designed for real life. Miss a day — or a week — and your archive is still there. The question still comes the next day. There's no streak to break and no guilt. Just the next question, waiting when you're ready.",
  },
  {
    q: '"Is this just another app fighting for our attention?"',
    a: "It's three minutes a day. We designed it to put the phone down, not pick it up more. The whole point is the conversation it starts — not the screen time it adds.",
  },
]

export function Objections() {
  return (
    <section style={{ borderTop: '1px solid rgba(44,36,22,0.07)' }}>
      <div className="max-w-content mx-auto" style={{ padding: '100px 56px' }}>
        <div className="flex items-center gap-3 mb-12 text-ember">
          <div className="w-[18px] h-px bg-ember" />
          <span className="font-dm-sans font-medium text-[11px] uppercase tracking-[0.1em]">Common questions</span>
        </div>

        <div className="flex flex-col" style={{ gap: 0 }}>
          {objections.map(({ q, a }, i) => (
            <div
              key={i}
              className="grid md:grid-cols-2"
              style={{
                gap: 48,
                padding: '44px 0',
                borderTop: i === 0 ? '1px solid rgba(44,36,22,0.07)' : '1px solid rgba(44,36,22,0.07)',
                borderBottom: i === objections.length - 1 ? '1px solid rgba(44,36,22,0.07)' : undefined,
              }}
            >
              <p className="font-cormorant font-normal text-charcoal" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.25 }}>
                {q}
              </p>
              <p className="font-dm-sans font-light text-charcoal-lt" style={{ fontSize: 16, lineHeight: 1.8 }}>
                {a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
