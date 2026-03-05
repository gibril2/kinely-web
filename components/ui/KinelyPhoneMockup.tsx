import { VoiceWaveform } from './VoiceWaveform'
import { FloatingPill } from './FloatingPill'

const avatarColors: Record<string, string> = {
  M: '#7B5230',
  D: '#5C7A5F',
  E: '#C4541A',
  J: '#C4962A',
}

function Avatar({
  initial,
  size = 22,
  answered = false,
}: {
  initial: string
  size?: number
  answered?: boolean
}) {
  return (
    <div className="relative inline-flex">
      <div
        style={{
          width: size,
          height: size,
          background: avatarColors[initial],
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: size * 0.45,
          color: '#FDFAF5',
          fontFamily: 'var(--font-dm-sans)',
          fontWeight: 500,
          flexShrink: 0,
        }}
      >
        {initial}
      </div>
      {answered && (
        <div
          style={{
            position: 'absolute',
            bottom: -1,
            right: -1,
            width: 8,
            height: 8,
            background: '#5C7A5F',
            borderRadius: '50%',
            border: '1.5px solid #F7F2EA',
          }}
        />
      )}
    </div>
  )
}

export function KinelyPhoneMockup() {
  return (
    <div className="relative" style={{ width: 280 }}>
      {/* Floating pills */}
      <FloatingPill
        position="top-right"
        icon="flame"
        main="12 day streak"
        sub="Keep it going"
      />
      <FloatingPill
        position="bottom-left"
        icon="book"
        main="Book 47% built"
        sub="Your 2025 story"
      />

      {/* Phone shell */}
      <div
        style={{
          background: '#1A140E',
          borderRadius: 44,
          padding: 10,
          boxShadow: '0 48px 96px rgba(44,36,22,0.35)',
          width: 280,
          height: 590,
        }}
      >
        {/* Screen */}
        <div
          style={{
            background: '#F7F2EA',
            borderRadius: 36,
            height: '100%',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Dynamic Island */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              paddingTop: 12,
              paddingBottom: 4,
            }}
          >
            <div
              style={{
                width: 80,
                height: 24,
                background: '#1A140E',
                borderRadius: 12,
              }}
            />
          </div>

          {/* Top bar */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '8px 16px 10px',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 16,
                fontWeight: 500,
                color: '#2C2416',
                letterSpacing: '0.02em',
              }}
            >
              kin<span style={{ color: '#C4541A' }}>e</span>ly
            </span>
            <span
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: 9,
                color: '#7A6E5E',
                letterSpacing: '0.04em',
              }}
            >
              Tuesday · Mar 4
            </span>
          </div>

          {/* Question card */}
          <div style={{ padding: '0 10px', flex: 1, overflow: 'hidden' }}>
            <div
              style={{
                background: '#2C2416',
                borderRadius: 18,
                padding: '14px 13px',
                marginBottom: 10,
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: 8,
                  color: 'rgba(255,255,255,0.35)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: 7,
                }}
              >
                Today&apos;s Question
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 14,
                  fontStyle: 'italic',
                  color: '#FDFAF5',
                  lineHeight: 1.35,
                  marginBottom: 10,
                }}
              >
                &ldquo;If our family had a theme song, what would it be?&rdquo;
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                }}
              >
                {['M', 'D', 'E'].map((i) => (
                  <Avatar key={i} initial={i} size={20} answered />
                ))}
                <Avatar initial="J" size={20} />
                <span
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: 8,
                    color: 'rgba(255,255,255,0.4)',
                    marginLeft: 4,
                  }}
                >
                  3 of 4 answered
                </span>
              </div>
            </div>

            {/* Answers label */}
            <div
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: 8,
                color: '#7A6E5E',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: 6,
                paddingLeft: 2,
              }}
            >
              Answers
            </div>

            {/* Answer cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              {/* Mom */}
              <div
                style={{
                  background: '#FDFAF5',
                  borderRadius: 10,
                  padding: '8px 10px',
                  display: 'flex',
                  gap: 7,
                  alignItems: 'flex-start',
                }}
              >
                <Avatar initial="M" size={20} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: 9,
                      fontWeight: 500,
                      color: '#2C2416',
                      marginBottom: 2,
                    }}
                  >
                    Mom
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: 10,
                      color: '#4A3F2F',
                      lineHeight: 1.4,
                    }}
                  >
                    Don&apos;t Stop Believin&apos; — we never give up
                  </div>
                </div>
              </div>

              {/* Dad - voice */}
              <div
                style={{
                  background: '#FDFAF5',
                  borderRadius: 10,
                  padding: '8px 10px',
                  display: 'flex',
                  gap: 7,
                  alignItems: 'center',
                }}
              >
                <Avatar initial="D" size={20} />
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: 9,
                      fontWeight: 500,
                      color: '#2C2416',
                      marginBottom: 4,
                    }}
                  >
                    Dad · Chicago ✈
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <VoiceWaveform />
                    <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 9, color: '#7A6E5E', flexShrink: 0 }}>0:43</span>
                  </div>
                </div>
              </div>

              {/* Emma */}
              <div
                style={{
                  background: '#FDFAF5',
                  borderRadius: 10,
                  padding: '8px 10px',
                  display: 'flex',
                  gap: 7,
                  alignItems: 'flex-start',
                }}
              >
                <Avatar initial="E" size={20} />
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: 9,
                      fontWeight: 500,
                      color: '#2C2416',
                      marginBottom: 2,
                    }}
                  >
                    Emma, 14
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: 10,
                      color: '#4A3F2F',
                      lineHeight: 1.4,
                      marginBottom: 6,
                    }}
                  >
                    SpongeBob theme, we&apos;re chaos 😅
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <div style={{ width: 32, height: 24, borderRadius: 4, background: 'rgba(196,150,42,0.2)' }} />
                    <div style={{ width: 32, height: 24, borderRadius: 4, background: 'rgba(196,84,26,0.15)' }} />
                    <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 8, color: '#7A6E5E', marginLeft: 2 }}>📷 2</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom nav */}
          <div
            style={{
              borderTop: '1px solid rgba(44,36,22,0.06)',
              display: 'flex',
              justifyContent: 'space-around',
              padding: '8px 0 10px',
              marginTop: 8,
            }}
          >
            {[
              { icon: '●', label: 'Today', active: true },
              { icon: '📚', label: 'Story' },
              { icon: '✨', label: 'Moments' },
              { icon: '📕', label: 'Book' },
            ].map(({ icon, label, active }) => (
              <div
                key={label}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 2,
                  fontSize: 9,
                  color: active ? '#C4541A' : '#7A6E5E',
                  fontFamily: 'var(--font-dm-sans)',
                  fontWeight: active ? 500 : 400,
                }}
              >
                <span style={{ fontSize: active ? 6 : 11 }}>{icon}</span>
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
