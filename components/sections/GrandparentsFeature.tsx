export function GrandparentsFeature() {
  return (
    <section style={{ background: '#2C2416', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-content mx-auto" style={{ padding: '100px 56px' }}>
        <div className="grid md:grid-cols-2" style={{ gap: 80, alignItems: 'center' }}>

          {/* Left: copy */}
          <div>
            <div className="flex items-center gap-3 mb-4" style={{ color: '#C4962A' }}>
              <div className="w-[18px] h-px" style={{ background: '#C4962A' }} />
              <span className="font-dm-sans font-medium text-[11px] uppercase tracking-[0.1em]">Grandparents Mode</span>
            </div>

            {/* Option A: plain-English explainer before the emotion */}
            <p className="font-dm-sans font-light mb-8" style={{ fontSize: 14, lineHeight: 1.65, color: 'rgba(253,250,245,0.45)' }}>
              A simplified experience so grandparents can answer as easily as everyone else.
            </p>

            <h2
              className="font-cormorant font-normal mb-6"
              style={{ fontSize: 'clamp(36px, 4vw, 58px)', lineHeight: 1.1, color: '#FDFAF5' }}
            >
              The stories you<br />
              <em className="italic" style={{ color: '#C4962A' }}>haven&apos;t asked yet.</em>
            </h2>

            <p className="font-dm-sans font-light mb-6" style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(253,250,245,0.65)' }}>
              The questions your grandmother carries — her hardest year, what shaped her, what she&apos;d tell her younger self — disappear when she does. Unless someone asks.
            </p>

            <p className="font-dm-sans font-light mb-12" style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(253,250,245,0.65)' }}>
              Kinely asks. Her answers play back in her grandchildren&apos;s app, in her actual voice.
            </p>

            <p className="font-cormorant font-normal italic" style={{ fontSize: 'clamp(22px, 2.5vw, 32px)', lineHeight: 1.3, color: '#FDFAF5' }}>
              &ldquo;Her voice. Her laugh. Her story. Saved forever.&rdquo;
            </p>
          </div>

          {/* Right: interface mockup with annotations (Option C) */}
          <div className="relative">
            <div
              className="rounded-card flex flex-col"
              style={{ background: 'rgba(253,250,245,0.05)', border: '1px solid rgba(253,250,245,0.08)', padding: '40px 36px', gap: 32 }}
            >
              {/* Question */}
              <div className="relative">
                {/* Annotation: large text */}
                <div
                  className="absolute font-dm-sans font-medium"
                  style={{ top: 4, right: -24, transform: 'translateX(100%)', fontSize: 11, color: '#C4962A', whiteSpace: 'nowrap', letterSpacing: '0.03em' }}
                >
                  Extra-large text
                  <span className="absolute" style={{ left: -16, top: '50%', transform: 'translateY(-50%)', width: 12, height: 1, background: '#C4962A', display: 'block' }} />
                </div>
                <div className="font-dm-sans font-medium uppercase tracking-widest mb-4" style={{ fontSize: 10, color: 'rgba(253,250,245,0.35)' }}>
                  Today&apos;s question
                </div>
                <p className="font-cormorant font-normal" style={{ fontSize: 'clamp(24px, 3vw, 38px)', lineHeight: 1.2, color: '#FDFAF5' }}>
                  What was the hardest year of your life — and what got you through it?
                </p>
              </div>

              {/* Divider */}
              <div style={{ height: 1, background: 'rgba(253,250,245,0.08)' }} />

              {/* Voice record button */}
              <div className="relative flex flex-col items-center gap-4" style={{ paddingTop: 8, paddingBottom: 8 }}>
                {/* Annotation: one button */}
                <div
                  className="absolute font-dm-sans font-medium"
                  style={{ top: '50%', right: -24, transform: 'translateX(100%) translateY(-50%)', fontSize: 11, color: '#C4962A', whiteSpace: 'nowrap', letterSpacing: '0.03em' }}
                >
                  One button to record
                  <span className="absolute" style={{ left: -16, top: '50%', transform: 'translateY(-50%)', width: 12, height: 1, background: '#C4962A', display: 'block' }} />
                </div>
                <div
                  className="rounded-full flex items-center justify-center"
                  style={{ width: 72, height: 72, background: '#C4541A' }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FDFAF5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a3 3 0 0 1 3 3v7a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3z"/>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                    <line x1="12" y1="19" x2="12" y2="22"/>
                    <line x1="8" y1="22" x2="16" y2="22"/>
                  </svg>
                </div>
                <span className="font-dm-sans font-light" style={{ fontSize: 13, color: 'rgba(253,250,245,0.5)', letterSpacing: '0.03em' }}>
                  Tap to record your answer
                </span>
              </div>

              {/* Or type */}
              <div className="relative" style={{ borderTop: '1px solid rgba(253,250,245,0.06)', paddingTop: 20 }}>
                {/* Annotation: no complexity */}
                <div
                  className="absolute font-dm-sans font-medium"
                  style={{ top: 28, right: -24, transform: 'translateX(100%)', fontSize: 11, color: '#C4962A', whiteSpace: 'nowrap', letterSpacing: '0.03em' }}
                >
                  Nothing else
                  <span className="absolute" style={{ left: -16, top: '50%', transform: 'translateY(-50%)', width: 12, height: 1, background: '#C4962A', display: 'block' }} />
                </div>
                <div
                  className="rounded-card font-dm-sans font-light"
                  style={{ background: 'rgba(253,250,245,0.04)', border: '1px solid rgba(253,250,245,0.06)', padding: '14px 18px', fontSize: 15, color: 'rgba(253,250,245,0.3)', lineHeight: 1.6 }}
                >
                  Or type your answer here…
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
