import Link from 'next/link'

export function Hero() {
  return (
    <section className="grid md:grid-cols-2" style={{ height: 'calc(100vh - 64px)', marginTop: 64, minHeight: 600 }}>
      {/* Left: text */}
      <div
        className="flex items-center justify-center order-last md:order-first py-16 px-8 md:px-14"
        style={{ background: '#F7F2EA', borderRight: '1px solid rgba(44,36,22,0.07)' }}
      >
        <div style={{ maxWidth: 480 }}>
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-7">
            <div className="rounded-full flex-shrink-0" style={{ width: 6, height: 6, background: '#C4541A' }} />
            <span className="font-dm-sans font-medium text-[11px] uppercase tracking-[0.1em] text-ember">Now accepting founding families</span>
          </div>

          {/* H1 */}
          <h1 className="font-cormorant font-normal text-charcoal mb-5" style={{ fontSize: 'clamp(44px, 4.5vw, 66px)', lineHeight: 1.05 }}>
            One question.<br />
            Every day.<br />
            <em className="italic text-ember">Everyone answers. At year&apos;s end, it becomes a book.</em>
          </h1>

          {/* Subhead */}
          <p className="font-dm-sans font-light text-charcoal-lt mb-10" style={{ fontSize: 16, lineHeight: 1.75 }}>
            Each family member answers independently — you can&apos;t see anyone else&apos;s answer until you submit your own. Every answer is saved forever. At year&apos;s end, every voice becomes a hardcover book delivered to your door.
          </p>

          {/* CTA + price */}
          <div className="flex flex-wrap items-center gap-4 mb-3">
            <Link href="/pricing" className="font-dm-sans font-medium text-[14px] text-warm-white bg-ember hover:bg-ember-light rounded-pill px-8 py-3.5 transition-all duration-200 hover:-translate-y-px">
              Become a Founding Family
            </Link>
            <span className="font-dm-sans text-[13px] text-charcoal-lt">$59 / year &middot; Limited founding spots</span>
          </div>

          {/* Progress bar — founding spots */}
          <div className="mb-12">
            <div className="rounded-full overflow-hidden" style={{ height: 6, background: 'rgba(44,36,22,0.08)', maxWidth: 280 }}>
              <div className="rounded-full" style={{ height: '100%', width: '13.4%', background: '#C4541A' }} />
            </div>
            <span className="font-dm-sans text-charcoal-lt block mt-2" style={{ fontSize: 12 }}>67 of 500 founding spots claimed</span>
          </div>

          {/* Divider */}
          <div className="mb-8" style={{ height: 1, background: 'rgba(44,36,22,0.08)' }} />

          {/* Stats */}
          <div className="flex gap-10">
            {[
              { num: '365', label: 'Questions\nper year' },
              { num: '1', label: 'Hardcover book\nevery year' },
              { num: '\u221E', label: 'Memories\nkept forever' },
            ].map(({ num, label }) => (
              <div key={num}>
                <div className="font-cormorant font-normal text-charcoal" style={{ fontSize: 36, lineHeight: 1 }}>{num}</div>
                <div className="font-dm-sans text-charcoal-lt mt-1.5 whitespace-pre-line" style={{ fontSize: 11, letterSpacing: '0.04em' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right: app mockup */}
      <div
        className="relative order-first md:order-last flex items-center justify-center"
        style={{ minHeight: 500, overflow: 'hidden', background: '#F7F2EA' }}
      >
        {/* Notification card — floats top-right of phone */}
        <div style={{
          position: 'absolute',
          top: '12%',
          right: '8%',
          zIndex: 20,
          background: '#FFFFFF',
          borderRadius: 16,
          padding: '14px 18px',
          boxShadow: '0 8px 32px rgba(44,36,22,0.12), 0 2px 8px rgba(44,36,22,0.06)',
          maxWidth: 280,
          transform: 'rotate(-1deg)',
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
            {/* Flame icon */}
            <div style={{
              width: 32,
              height: 32,
              borderRadius: 8,
              background: 'linear-gradient(135deg, #C4541A 0%, #E8784A 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              fontSize: 16,
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 23c-4.97 0-8-3.03-8-7 0-2.5 1.5-5 3-6.5.5-.5 1.5-.5 1.5.5 0 1.5.5 3 2 4 0-4 2-7 5-9 .5-.33 1.17.17 1 .83-.5 2-.5 4 1 6 1.5 2 2 3.5 2 5.17C19.5 20 16.97 23 12 23z" fill="#FFFFFF"/>
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <div className="font-dm-sans" style={{ fontSize: 13, fontWeight: 600, color: '#2C2416', marginBottom: 2 }}>
                Gabriel answered today&apos;s question
              </div>
              <div className="font-dm-sans" style={{ fontSize: 12, color: '#7A6E5E', fontStyle: 'italic', marginBottom: 4 }}>
                &ldquo;What made you smile this week?&rdquo;
              </div>
              <div className="font-dm-sans" style={{ fontSize: 11, color: '#C4541A', fontWeight: 500 }}>
                Tap to see everyone&apos;s answers &rarr;
              </div>
            </div>
          </div>
        </div>

        {/* Phone frame */}
        <div style={{
          width: 260,
          height: 540,
          borderRadius: 36,
          background: '#1A1A1A',
          border: '3px solid #333',
          overflow: 'hidden',
          position: 'relative',
          transform: 'rotate(2deg)',
          boxShadow: '0 24px 64px rgba(0,0,0,0.2), 0 8px 24px rgba(0,0,0,0.1)',
        }}>
          {/* Notch */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 100,
            height: 24,
            borderRadius: '0 0 16px 16px',
            background: '#1A1A1A',
            zIndex: 10,
          }} />

          {/* Screen content */}
          <div style={{ padding: '40px 20px 20px', height: '100%', background: '#0D0D0D' }}>
            {/* Today's question label */}
            <div className="font-dm-sans" style={{
              fontSize: 9,
              fontWeight: 600,
              letterSpacing: '0.12em',
              color: '#C4541A',
              textTransform: 'uppercase',
              marginBottom: 12,
            }}>
              TODAY&apos;S QUESTION
            </div>

            {/* Question text */}
            <div className="font-cormorant" style={{
              fontSize: 20,
              fontWeight: 300,
              color: '#F5EDE0',
              lineHeight: 1.35,
              marginBottom: 24,
            }}>
              What is something you are working toward right now?
            </div>

            {/* Answered indicator */}
            <div className="font-dm-sans" style={{
              fontSize: 10,
              color: '#C4541A',
              fontWeight: 500,
              marginBottom: 20,
              textAlign: 'right',
            }}>
              2 of 2 answered
            </div>

            {/* Answer card 1 — Gabriel */}
            <div style={{
              background: '#1A1A1A',
              borderRadius: 14,
              padding: '12px 14px',
              marginBottom: 10,
              border: '1px solid rgba(255,255,255,0.08)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                <div style={{
                  width: 28,
                  height: 28,
                  borderRadius: 14,
                  background: '#B5622A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 12,
                  fontWeight: 700,
                  color: '#fff',
                }}>G</div>
                <span className="font-dm-sans" style={{ fontSize: 12, fontWeight: 600, color: '#FFFFFF' }}>Gabriel</span>
              </div>
              <div className="font-dm-sans" style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', fontStyle: 'italic', lineHeight: 1.5 }}>
                &ldquo;Trying to be more present with the people I love, instead of always planning the next thing...&rdquo;
              </div>
            </div>

            {/* Answer card 2 — Elora (voice) */}
            <div style={{
              background: '#1A1A1A',
              borderRadius: 14,
              padding: '12px 14px',
              border: '1px solid rgba(255,255,255,0.08)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                <div style={{
                  width: 28,
                  height: 28,
                  borderRadius: 14,
                  background: '#4A8B9F',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 12,
                  fontWeight: 700,
                  color: '#fff',
                }}>E</div>
                <span className="font-dm-sans" style={{ fontSize: 12, fontWeight: 600, color: '#FFFFFF' }}>Elora</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                {/* Play button */}
                <div style={{
                  width: 24,
                  height: 24,
                  borderRadius: 12,
                  background: 'rgba(181,98,42,0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="#B5622A">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                {/* Waveform bars */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1 }}>
                  {[3,6,10,8,12,6,9,14,7,10,5,8,12,6,4,8,11,7,9,5].map((h, i) => (
                    <div key={i} style={{
                      width: 2.5,
                      height: h,
                      borderRadius: 1.5,
                      background: i < 8 ? '#B5622A' : 'rgba(255,255,255,0.15)',
                    }} />
                  ))}
                </div>
                <span className="font-dm-sans" style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', fontVariantNumeric: 'tabular-nums' }}>0:24</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
