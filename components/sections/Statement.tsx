export function Statement() {
  return (
    <section
      className="grid md:grid-cols-2 max-w-content mx-auto"
      style={{ gap: 80, padding: '100px 56px', borderTop: '1px solid rgba(44,36,22,0.07)' }}
    >
      {/* Left: problem statement */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-8 text-ember">
          <div className="w-[18px] h-px bg-ember" />
          <span className="font-dm-sans font-medium text-[11px] uppercase tracking-[0.1em]">The problem</span>
        </div>
        <h2 className="font-cormorant font-normal text-charcoal mb-6" style={{ fontSize: 'clamp(30px, 3.5vw, 46px)', lineHeight: 1.15 }}>
          When did you last have a real conversation with your family?
        </h2>
        <p className="font-dm-sans font-light text-charcoal-lt" style={{ fontSize: 16, lineHeight: 1.75 }}>
          Not about schedules. Not about logistics. About who you actually are, what you believe, what you remember, what you dream about.
        </p>
      </div>

      {/* Right: body paragraphs */}
      <div className="flex flex-col justify-center gap-5">
        <p className="font-dm-sans font-light text-charcoal-lt" style={{ fontSize: 16, lineHeight: 1.75 }}>
          Families today are busier and more physically scattered than ever. The conversations that matter — the ones about childhood memories, values, and the small moments that define a family — rarely happen on their own.
        </p>
        <p className="font-dm-sans font-light text-charcoal-lt" style={{ fontSize: 16, lineHeight: 1.75 }}>
          And when they do, they&apos;re forgotten. You&apos;ll never remember what your seven-year-old said was her favourite thing about last summer. Your parents won&apos;t remember telling you about their first home. Those moments disappear.
        </p>
        <p className="font-dm-sans font-normal text-charcoal-mid" style={{ fontSize: 16, lineHeight: 1.75 }}>
          Kinely starts the conversation — every single day — and makes sure nothing is ever lost.
        </p>
        <p className="font-dm-sans font-light text-charcoal-lt" style={{ fontSize: 14, lineHeight: 1.75, marginTop: 4 }}>
          Kinely is designed to be put down. Three minutes a day. Then back to your family.
        </p>
      </div>
    </section>
  )
}
