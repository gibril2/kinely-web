import type { ReactNode } from 'react'
import { SectionKicker } from '@/components/ui/SectionKicker'

function WaveformBars() {
  const heights = [3, 6, 9, 12, 8, 14, 10, 6, 11, 8, 5, 9, 13, 7, 4]
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      {heights.map((h, i) => (
        <div
          key={i}
          style={{
            width: 2,
            height: h,
            borderRadius: 1,
            background: 'rgba(92,122,95,0.7)',
          }}
        />
      ))}
    </div>
  )
}

function MemberRow({
  initial,
  name,
  color,
  content,
  pending = false,
}: {
  initial: string
  name: string
  color: string
  content?: ReactNode
  pending?: boolean
}) {
  return (
    <div
      style={{
        display: 'flex',
        gap: 10,
        alignItems: 'flex-start',
        opacity: pending ? 0.4 : 1,
      }}
    >
      <div
        style={{
          width: 28,
          height: 28,
          borderRadius: '50%',
          background: pending ? 'rgba(255,255,255,0.15)' : color,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 11,
          color: '#FDFAF5',
          fontFamily: 'var(--font-dm-sans)',
          fontWeight: 500,
          flexShrink: 0,
        }}
      >
        {initial}
      </div>
      <div style={{ flex: 1, paddingTop: 2 }}>
        <div
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: 11,
            fontWeight: 600,
            color: pending ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.5)',
            marginBottom: 4,
          }}
        >
          {name}
        </div>
        {content}
      </div>
    </div>
  )
}

function Badge({ label }: { label: string }) {
  return (
    <span
      style={{
        fontFamily: 'var(--font-dm-sans)',
        fontSize: 9,
        color: 'rgba(255,255,255,0.45)',
        background: 'rgba(255,255,255,0.08)',
        borderRadius: 4,
        padding: '2px 5px',
      }}
    >
      {label}
    </span>
  )
}

function EntryCard() {
  return (
    <div
      style={{
        background: '#2C2416',
        borderRadius: 20,
        overflow: 'hidden',
        maxWidth: 440,
        boxShadow: '0 32px 64px rgba(44,36,22,0.35)',
      }}
    >
      {/* Card header */}
      <div style={{ padding: '20px 24px 0' }}>
        <div
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: 10,
            color: 'rgba(255,255,255,0.35)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: 12,
          }}
        >
          Tuesday, March 4
        </div>
        <div
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 22,
            fontStyle: 'italic',
            color: '#FDFAF5',
            lineHeight: 1.3,
            marginBottom: 20,
          }}
        >
          &ldquo;If our family had a theme song, what would it be?&rdquo;
        </div>
        <div style={{ height: 1, background: 'rgba(255,255,255,0.08)', marginBottom: 20 }} />
      </div>

      {/* Responses */}
      <div style={{ padding: '0 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
        {/* Mom */}
        <MemberRow
          initial="M"
          name="Mom"
          color="#7B5230"
          content={
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 12, color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>
                Don&apos;t Stop Believin&apos; — we never give up
              </span>
              <Badge label="📷 1" />
            </div>
          }
        />

        {/* Dad */}
        <MemberRow
          initial="D"
          name="Dad · Chicago ✈"
          color="#5C7A5F"
          content={
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <WaveformBars />
              <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 11, color: 'rgba(255,255,255,0.45)' }}>0:43</span>
            </div>
          }
        />

        {/* Emma */}
        <MemberRow
          initial="E"
          name="Emma, 14"
          color="#C4541A"
          content={
            <div>
              <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 12, color: 'rgba(255,255,255,0.7)', lineHeight: 1.5, marginBottom: 8 }}>
                SpongeBob theme, we&apos;re chaos 😅
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ width: 44, height: 32, borderRadius: 6, background: 'rgba(196,150,42,0.22)' }} />
                <div style={{ width: 44, height: 32, borderRadius: 6, background: 'rgba(196,84,26,0.18)' }} />
                <Badge label="📷 2" />
              </div>
            </div>
          }
        />

        {/* Jake — pending */}
        <MemberRow
          initial="J"
          name="Jake — hasn't answered yet"
          color="#C4962A"
          pending
        />
      </div>

      {/* Input bar */}
      <div
        style={{
          margin: '20px 16px 16px',
          background: 'rgba(255,255,255,0.06)',
          borderRadius: 12,
          padding: '10px 14px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', gap: 14 }}>
          {['Aa', '🎤', '📷'].map((icon) => (
            <span
              key={icon}
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: 13,
                color: 'rgba(255,255,255,0.4)',
              }}
            >
              {icon}
            </span>
          ))}
        </div>
        <span
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: 9,
            color: 'rgba(255,255,255,0.2)',
            letterSpacing: '0.03em',
          }}
        >
          3 photos · 60s voice per person
        </span>
      </div>
    </div>
  )
}

export function DailyEntry() {
  return (
    <section style={{ background: '#F7F2EA', padding: '100px 56px' }}>
      <div className="max-w-content mx-auto">
        <div
          className="grid md:grid-cols-2 gap-16"
          style={{ alignItems: 'center' }}
        >
          {/* Left — entry card mockup */}
          <div className="flex justify-center md:justify-start">
            <EntryCard />
          </div>

          {/* Right — copy */}
          <div>
            <SectionKicker label="The daily entry" />

            <h2
              className="font-cormorant font-normal mt-4 mb-6"
              style={{
                fontSize: 'clamp(30px, 3vw, 44px)',
                lineHeight: 1.1,
                color: '#2C2416',
                maxWidth: 480,
              }}
            >
              One question. One entry.{' '}
              <em className="italic" style={{ color: '#C4541A' }}>
                Everyone&apos;s answer — saved forever.
              </em>
            </h2>

            <p
              className="font-dm-sans font-light mb-8"
              style={{ fontSize: 16, color: '#5A4E3C', lineHeight: 1.75, maxWidth: 460 }}
            >
              Each morning&apos;s question creates a daily entry card — a permanent record anchored
              to that date. Every family member adds their response throughout the day: a few
              words, a voice note recorded on the commute, photos from the moment. At midnight,
              the entry locks and becomes part of your family archive — and eventually, your
              Annual Book.
            </p>

            {/* Spec callout */}
            <div
              style={{
                background: '#FDFAF5',
                border: '1px solid rgba(44,36,22,0.1)',
                borderRadius: 14,
                padding: '16px 20px',
                display: 'inline-flex',
                flexDirection: 'column',
                gap: 10,
              }}
            >
              <div
                className="font-dm-sans"
                style={{ fontSize: 10, color: '#7A6E5E', textTransform: 'uppercase', letterSpacing: '0.1em' }}
              >
                Per person, per day
              </div>
              <div style={{ display: 'flex', gap: 20 }}>
                {[
                  { icon: '📝', label: 'Text', sub: 'Unlimited' },
                  { icon: '🎤', label: 'Voice note', sub: '60 seconds' },
                  { icon: '📷', label: 'Photos', sub: 'Up to 3' },
                ].map(({ icon, label, sub }) => (
                  <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <span style={{ fontSize: 16 }}>{icon}</span>
                    <span className="font-dm-sans" style={{ fontSize: 12, fontWeight: 500, color: '#2C2416' }}>{label}</span>
                    <span className="font-dm-sans" style={{ fontSize: 11, color: '#7A6E5E' }}>{sub}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
