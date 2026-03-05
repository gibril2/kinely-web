export function Statement() {
  return (
    <section
      style={{ borderTop: '1px solid rgba(44,36,22,0.07)' }}
    >
      <div className="max-w-content mx-auto grid md:grid-cols-2" style={{ gap: 64, padding: '100px 56px' }}>
        {/* Left: kicker + headline */}
        <div>
          <div className="flex items-center gap-3 mb-6 text-ember">
            <div className="w-[18px] h-px bg-ember" />
            <span className="font-dm-sans font-medium text-[11px] uppercase tracking-[0.1em]">What makes Kinely different</span>
          </div>

          <h2 className="font-cormorant font-normal text-charcoal" style={{ fontSize: 'clamp(30px, 3.5vw, 46px)', lineHeight: 1.15 }}>
            Most family apps are one person<br />documenting everyone else.
          </h2>
        </div>

        {/* Right: body */}
        <div className="flex flex-col justify-center gap-5">
          <p className="font-dm-sans font-light text-charcoal-lt" style={{ fontSize: 16, lineHeight: 1.75 }}>
            Kinely is different. One question. Everyone gets it. Everyone answers.
          </p>
          <p className="font-dm-sans font-normal text-charcoal-mid" style={{ fontSize: 16, lineHeight: 1.75 }}>
            That&apos;s not a diary. That&apos;s a conversation that never ends.
          </p>
        </div>
      </div>
    </section>
  )
}
