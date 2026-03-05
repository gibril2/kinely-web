'use client'

import { VoiceWaveform } from './VoiceWaveform'

const avatarColors: Record<string, string> = {
  M: '#7B5230',
  D: '#5C7A5F',
  E: '#C4541A',
  J: '#C4962A',
  G: '#8B6B9F',
  S: '#4A7FA5',
}

function Avatar({ initial, size = 22 }: { initial: string; size?: number }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        background: avatarColors[initial] ?? '#7A6E5E',
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
  )
}

function PhoneShell({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        background: '#1A140E',
        borderRadius: 44,
        padding: 10,
        boxShadow: '0 48px 96px rgba(44,36,22,0.35)',
        width: 280,
        height: 590,
        flexShrink: 0,
      }}
    >
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
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 12, paddingBottom: 4 }}>
          <div style={{ width: 80, height: 24, background: '#1A140E', borderRadius: 12 }} />
        </div>
        {children}
      </div>
    </div>
  )
}

function TopBar({ right }: { right: string }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 16px 10px' }}>
      <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: 16, fontWeight: 500, color: '#2C2416', letterSpacing: '0.02em' }}>
        kin<span style={{ color: '#C4541A' }}>e</span>ly
      </span>
      <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 9, color: '#7A6E5E', letterSpacing: '0.04em' }}>{right}</span>
    </div>
  )
}

function AnswerCard({ initial, name, children }: { initial: string; name: string; children: React.ReactNode }) {
  return (
    <div style={{ background: '#FDFAF5', borderRadius: 10, padding: '8px 10px', display: 'flex', gap: 7, alignItems: 'flex-start' }}>
      <Avatar initial={initial} size={20} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 9, fontWeight: 500, color: '#2C2416', marginBottom: 2 }}>{name}</div>
        <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 10, color: '#4A3F2F', lineHeight: 1.4 }}>{children}</div>
      </div>
    </div>
  )
}

// ─── GATHERED ───────────────────────────────────────────────────────────────
function GatheredScreen() {
  return (
    <PhoneShell>
      <TopBar right="Gathered Mode" />
      <div style={{ padding: '0 10px', flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {/* Question – large, readable across a table */}
        <div style={{ background: '#2C2416', borderRadius: 18, padding: '18px 16px' }}>
          <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 8, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>
            Tonight&apos;s Question
          </div>
          <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: 20, fontStyle: 'italic', color: '#FDFAF5', lineHeight: 1.3, marginBottom: 14 }}>
            &ldquo;What made you smile today?&rdquo;
          </div>
          <div style={{ background: 'rgba(196,84,26,0.18)', borderRadius: 8, padding: '7px 10px', textAlign: 'center' }}>
            <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 9, color: '#E8A07A', letterSpacing: '0.04em' }}>
              Read aloud · log answers below
            </span>
          </div>
        </div>
        {/* Log answers */}
        <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 8, color: '#7A6E5E', textTransform: 'uppercase', letterSpacing: '0.08em', paddingLeft: 2 }}>
          Log answers
        </div>
        {[
          { i: 'M', name: 'Mom', answer: 'The kids\' drawing on the fridge' },
          { i: 'D', name: 'Dad', answer: 'Dinner together' },
          { i: 'E', name: 'Emma, 14', answer: 'My friend texted back 😊' },
          { i: 'J', name: 'Jake, 9', answer: 'Ice cream after school' },
        ].map(({ i, name, answer }) => (
          <div key={name} style={{ background: '#FDFAF5', borderRadius: 10, padding: '7px 10px', display: 'flex', gap: 7, alignItems: 'center' }}>
            <Avatar initial={i} size={20} />
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 9, fontWeight: 500, color: '#2C2416' }}>{name}</div>
              <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 10, color: '#7A6E5E' }}>{answer}</div>
            </div>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#5C7A5F' }} />
          </div>
        ))}
      </div>
      <BottomNav active="Today" />
    </PhoneShell>
  )
}

// ─── CONNECTED ───────────────────────────────────────────────────────────────
function ConnectedScreen() {
  return (
    <PhoneShell>
      <TopBar right="Tuesday · Mar 4" />
      <div style={{ padding: '0 10px', flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ background: '#2C2416', borderRadius: 18, padding: '14px 13px' }}>
          <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 8, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 7 }}>
            Today&apos;s Question
          </div>
          <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: 14, fontStyle: 'italic', color: '#FDFAF5', lineHeight: 1.35, marginBottom: 10 }}>
            &ldquo;If our family had a theme song, what would it be?&rdquo;
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            {['M', 'D', 'E'].map(i => <Avatar key={i} initial={i} size={18} />)}
            <Avatar initial="J" size={18} />
            <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 8, color: 'rgba(255,255,255,0.4)', marginLeft: 4 }}>3 of 4 answered</span>
          </div>
        </div>
        <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 8, color: '#7A6E5E', textTransform: 'uppercase', letterSpacing: '0.08em', paddingLeft: 2 }}>
          Answers
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
          <AnswerCard initial="M" name="Mom · Home">Don&apos;t Stop Believin&apos; — we never give up</AnswerCard>
          <div style={{ background: '#FDFAF5', borderRadius: 10, padding: '8px 10px', display: 'flex', gap: 7, alignItems: 'center' }}>
            <Avatar initial="D" size={20} />
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 9, fontWeight: 500, color: '#2C2416', marginBottom: 4 }}>Dad · Chicago ✈</div>
              <VoiceWaveform />
            </div>
          </div>
          <AnswerCard initial="E" name="Emma, 14">SpongeBob theme, we&apos;re chaos 😅</AnswerCard>
          <div style={{ background: '#FDFAF5', borderRadius: 10, padding: '8px 10px', display: 'flex', gap: 7, alignItems: 'center', opacity: 0.4 }}>
            <Avatar initial="J" size={20} />
            <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 10, color: '#7A6E5E', fontStyle: 'italic' }}>Jake hasn&apos;t answered yet…</div>
          </div>
        </div>
      </div>
      <BottomNav active="Today" />
    </PhoneShell>
  )
}

// ─── SPOTLIGHT ───────────────────────────────────────────────────────────────
function SpotlightScreen() {
  return (
    <PhoneShell>
      <TopBar right="Sophie's Birthday ★" />
      <div style={{ padding: '0 10px', flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ background: '#2C2416', borderRadius: 18, padding: '14px 13px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
            <div style={{ background: '#C4962A', borderRadius: 6, padding: '2px 7px' }}>
              <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 8, color: '#2C2416', fontWeight: 600, letterSpacing: '0.06em' }}>SPOTLIGHT · SOPHIE</span>
            </div>
          </div>
          <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: 15, fontStyle: 'italic', color: '#FDFAF5', lineHeight: 1.35, marginBottom: 10 }}>
            &ldquo;What&apos;s your favourite memory with Sophie this year?&rdquo;
          </div>
          <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 8, color: 'rgba(255,255,255,0.35)' }}>
            Every question today is about her.
          </div>
        </div>
        <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 8, color: '#7A6E5E', textTransform: 'uppercase', letterSpacing: '0.08em', paddingLeft: 2 }}>
          Answers
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
          <AnswerCard initial="M" name="Mom">Teaching her to ride a bike in April 🚲</AnswerCard>
          <AnswerCard initial="D" name="Dad">Every Sunday morning pancake run</AnswerCard>
          <AnswerCard initial="J" name="Jake, 9">When she let me win at Mario Kart</AnswerCard>
        </div>
        <div style={{ background: '#C4962A', borderRadius: 10, padding: '10px 12px', marginTop: 2 }}>
          <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 9, color: '#2C2416', fontWeight: 500 }}>🎂 Happy Birthday, Sophie!</div>
          <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 8, color: 'rgba(44,36,22,0.6)', marginTop: 2 }}>3 more questions queued for today</div>
        </div>
      </div>
      <BottomNav active="Today" />
    </PhoneShell>
  )
}

// ─── GRANDPARENTS ─────────────────────────────────────────────────────────────
function GrandparentsScreen() {
  return (
    <PhoneShell>
      <TopBar right="Grandparents Mode" />
      <div style={{ padding: '0 10px', flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ background: '#2C2416', borderRadius: 18, padding: '18px 16px' }}>
          <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 8, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>
            Today&apos;s Question
          </div>
          {/* Extra large text */}
          <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: 22, fontStyle: 'italic', color: '#FDFAF5', lineHeight: 1.3 }}>
            &ldquo;What did you dream of being when you were young?&rdquo;
          </div>
        </div>
        {/* Big record button */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ background: '#C4541A', borderRadius: 14, padding: '16px 12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
            <div style={{ width: 28, height: 28, background: 'rgba(255,255,255,0.15)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: 14 }}>🎤</span>
            </div>
            <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 14, fontWeight: 500, color: '#FDFAF5' }}>Record Answer</span>
          </div>
          <div style={{ background: '#FDFAF5', borderRadius: 14, padding: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 12, color: '#7A6E5E' }}>Or type your answer</span>
          </div>
        </div>
        <div style={{ background: '#EDE6D6', borderRadius: 12, padding: '10px 12px' }}>
          <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 8, color: '#7A6E5E', marginBottom: 4 }}>Last answer · Grandma Ruth</div>
          <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: 13, fontStyle: 'italic', color: '#4A3F2F', lineHeight: 1.4 }}>
            &ldquo;I wanted to be a nurse, just like my mother...&rdquo;
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 6 }}>
            <VoiceWaveform />
            <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 8, color: '#C4541A' }}>0:47</span>
          </div>
        </div>
      </div>
      <BottomNav active="Today" />
    </PhoneShell>
  )
}

// ─── BIG EVENTS ───────────────────────────────────────────────────────────────
function BigEventsScreen() {
  return (
    <PhoneShell>
      <TopBar right="Thanksgiving 2025" />
      <div style={{ padding: '0 10px', flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ background: '#2C2416', borderRadius: 18, padding: '14px 13px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
            <div style={{ background: '#C4962A', borderRadius: 6, padding: '2px 7px' }}>
              <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 8, color: '#2C2416', fontWeight: 600, letterSpacing: '0.05em' }}>🍂 BIG EVENT · THANKSGIVING</span>
            </div>
          </div>
          <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: 15, fontStyle: 'italic', color: '#FDFAF5', lineHeight: 1.35, marginBottom: 8 }}>
            &ldquo;What&apos;s one thing our family did this year you&apos;re most grateful for?&rdquo;
          </div>
          <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 8, color: 'rgba(255,255,255,0.35)' }}>
            4 curated questions for today
          </div>
        </div>
        <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 8, color: '#7A6E5E', textTransform: 'uppercase', letterSpacing: '0.08em', paddingLeft: 2 }}>
          Answers
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
          <AnswerCard initial="M" name="Mom">The trip to the lake in August 🌊</AnswerCard>
          <div style={{ background: '#FDFAF5', borderRadius: 10, padding: '8px 10px', display: 'flex', gap: 7, alignItems: 'center' }}>
            <Avatar initial="D" size={20} />
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 9, fontWeight: 500, color: '#2C2416', marginBottom: 4 }}>Dad · Living room</div>
              <VoiceWaveform />
            </div>
          </div>
          <AnswerCard initial="G" name="Grandpa Joe">Watching the kids grow up so fast</AnswerCard>
        </div>
        <div style={{ background: '#F5E6DC', borderRadius: 10, padding: '8px 12px', display: 'flex', gap: 6 }}>
          <span style={{ fontSize: 10 }}>📖</span>
          <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 9, color: '#7B5230' }}>This chapter will be titled <em>&ldquo;Thanksgiving 2025&rdquo;</em> in your Annual Book</span>
        </div>
      </div>
      <BottomNav active="Today" />
    </PhoneShell>
  )
}

// ─── GUEST ────────────────────────────────────────────────────────────────────
function GuestScreen() {
  return (
    <PhoneShell>
      <TopBar right="Guest Mode" />
      <div style={{ padding: '0 10px', flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ background: '#2C2416', borderRadius: 18, padding: '16px 14px', textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 8, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.06em', marginBottom: 8 }}>
            The Johnson family invites you to answer
          </div>
          <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: 16, fontStyle: 'italic', color: '#FDFAF5', lineHeight: 1.3, marginBottom: 10 }}>
            &ldquo;What&apos;s the best meal you&apos;ve ever had?&rdquo;
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5 }}>
            <div style={{ background: 'rgba(196,84,26,0.25)', borderRadius: 20, padding: '3px 10px' }}>
              <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 9, color: '#E8A07A' }}>👤 Guest · Sarah · Thanksgiving</span>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
          <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 8, color: '#7A6E5E', textTransform: 'uppercase', letterSpacing: '0.08em', paddingLeft: 2 }}>
            Family answers so far
          </div>
          <AnswerCard initial="M" name="Mom">Grandma&apos;s lasagna on Christmas Eve, always</AnswerCard>
          <AnswerCard initial="D" name="Dad">That tiny restaurant in Naples, 2019</AnswerCard>
        </div>
        <div style={{ background: '#FDFAF5', borderRadius: 12, padding: '10px 12px', border: '1.5px dashed rgba(44,36,22,0.15)' }}>
          <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 9, color: '#7A6E5E', marginBottom: 6 }}>Sarah · your answer</div>
          <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 10, color: '#C4541A', fontStyle: 'italic' }}>Tap to answer…</div>
        </div>
        <div style={{ background: '#C4541A', borderRadius: 10, padding: '10px 12px', textAlign: 'center' }}>
          <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 12, fontWeight: 500, color: '#FDFAF5' }}>Submit your answer →</span>
        </div>
      </div>
      <BottomNav active="Today" />
    </PhoneShell>
  )
}

// ─── BOTTOM NAV ───────────────────────────────────────────────────────────────
function BottomNav({ active }: { active: string }) {
  return (
    <div style={{ borderTop: '1px solid rgba(44,36,22,0.06)', display: 'flex', justifyContent: 'space-around', padding: '8px 0 10px', marginTop: 'auto' }}>
      {[
        { icon: '●', label: 'Today' },
        { icon: '📚', label: 'Story' },
        { icon: '✨', label: 'Moments' },
        { icon: '📕', label: 'Book' },
      ].map(({ icon, label }) => (
        <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, fontSize: 9, color: label === active ? '#C4541A' : '#7A6E5E', fontFamily: 'var(--font-dm-sans)', fontWeight: label === active ? 500 : 400 }}>
          <span style={{ fontSize: label === active ? 6 : 11 }}>{icon}</span>
          {label}
        </div>
      ))}
    </div>
  )
}

// ─── EXPORT ───────────────────────────────────────────────────────────────────
const screens: Record<string, React.ReactNode> = {
  gathered: <GatheredScreen />,
  connected: <ConnectedScreen />,
  spotlight: <SpotlightScreen />,
  grandparents: <GrandparentsScreen />,
  'big-events': <BigEventsScreen />,
  guest: <GuestScreen />,
}

export function ModePhoneMockup({ mode }: { mode: string }) {
  return screens[mode] ?? <ConnectedScreen />
}
