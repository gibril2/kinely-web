// Small pieces of the real app UI (Today screen, answer cards), drawn to
// match apps/mobile so every place the site shows the product shows the same one.

const AVATAR_TINTS = ['#7B5230', '#5C7A5F', '#4A6B8A', '#8A5A6B'] as const

export function AppAvatar({
  initial,
  tint = 0,
  size = 44,
  answered = false,
}: {
  initial: string
  tint?: number
  size?: number
  answered?: boolean
}) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full font-dm-sans font-medium text-night-text ${
        answered ? 'ring-2 ring-app-accent ring-offset-[3px] ring-offset-night' : ''
      }`}
      style={{
        width: size,
        height: size,
        fontSize: Math.round(size * 0.38),
        background: AVATAR_TINTS[tint % AVATAR_TINTS.length],
      }}
      aria-hidden
    >
      {initial}
    </span>
  )
}

export function StaticWaveform({
  bars = [4, 9, 14, 8, 16, 11, 6, 13, 18, 9, 12, 7, 15, 10, 5, 11, 14, 8, 6, 10],
  played = 0,
  className = '',
}: {
  bars?: number[]
  played?: number
  className?: string
}) {
  return (
    <span className={`flex items-center gap-[3px] ${className}`} aria-hidden>
      {bars.map((h, i) => (
        <span
          key={i}
          className={`block w-[3px] rounded-full ${i < played ? 'bg-app-accent' : 'bg-night-text/25'}`}
          style={{ height: h }}
        />
      ))}
    </span>
  )
}

export function PlayDot() {
  return (
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-app-accent/15" aria-hidden>
      <svg width="11" height="11" viewBox="0 0 24 24" className="fill-app-accent">
        <path d="M7 4.5v15l12.5-7.5z" />
      </svg>
    </span>
  )
}
