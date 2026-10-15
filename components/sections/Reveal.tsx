import type { ReactNode } from 'react'
import { AppAvatar, PlayDot, StaticWaveform } from '../ui/AppBits'
import { RoomBackdrop } from '../ui/RoomBackdrop'
import { VisitorAnswer } from '../ui/VisitorAnswer'

// One question, everyone's answers: the moment the app is built around.
// Illustrative circle; the caption says so.
function Answer({ initial, tint, name, children }: { initial: string; tint: number; name: string; children: ReactNode }) {
  return (
    <li className="break-inside-avoid mb-4 rounded-[20px] bg-night-surface/90 border border-white/[0.06] p-5 backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-3">
        <AppAvatar initial={initial} tint={tint} size={30} />
        <span className="font-dm-sans text-[14px] font-medium text-night-text">{name}</span>
      </div>
      {children}
    </li>
  )
}

function Words({ children }: { children: ReactNode }) {
  return <p className="font-dm-sans text-[16px] leading-[1.6] text-night-text/85">{children}</p>
}

export function Reveal() {
  return (
    <section id="everyone" className="relative bg-lamp text-night-text px-4 sm:px-8 py-24 md:py-32 overflow-hidden scroll-mt-16">
      <RoomBackdrop />
      <div className="relative max-w-content mx-auto grid gap-14 lg:gap-20 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] items-start">
        <div className="lg:sticky lg:top-28">
          <h2
            className="font-cormorant font-normal max-w-[13ch] mb-8"
            style={{ fontSize: 'clamp(2.5rem, 5.2vw, 4.5rem)', lineHeight: 1.0, letterSpacing: '-0.01em' }}
          >
            Then you hear from everyone.
          </h2>
          <p className="font-dm-sans font-light text-[17px] leading-[1.75] text-night-text/75 max-w-[40ch]">
            One simple question, and you learn something new about people you&apos;ve known your whole life.
          </p>
        </div>

        <div>
          <p className="font-dm-sans text-[12px] uppercase tracking-[0.2em] text-app-accent mb-3">Today&apos;s question</p>
          <p className="font-dm-sans font-semibold text-[22px] sm:text-[26px] leading-[1.3] mb-8 max-w-[30ch]">
            What was your favorite meal growing up, and who made it?
          </p>
          <ul className="sm:columns-2 gap-4">
            <VisitorAnswer />
            <Answer initial="N" tint={0} name="Nana">
              <div className="flex items-center gap-3">
                <PlayDot />
                <StaticWaveform played={7} className="min-w-0 flex-1 overflow-hidden" bars={[5, 9, 14, 8, 16, 11, 6, 13, 17, 9, 12, 7, 15, 10]} />
                <span className="font-dm-sans text-[12px] tabular-nums text-night-muted">1:12</span>
              </div>
            </Answer>
            <Answer initial="D" tint={1} name="Dad">
              <Words>Mom&apos;s lentil soup. Thirty years of trying, and mine still doesn&apos;t taste like hers.</Words>
            </Answer>
            <Answer initial="M" tint={2} name="Maya">
              <Words>Dad&apos;s pancakes, the burnt ones. I didn&apos;t know they were supposed to be golden until I was twelve.</Words>
              <div className="mt-4 ml-2 border-l-2 border-app-accent/40 pl-4">
                <div className="flex items-center gap-2 mb-1.5">
                  <AppAvatar initial="D" tint={1} size={22} />
                  <span className="font-dm-sans text-[13px] font-medium text-night-text">Dad</span>
                </div>
                <p className="font-dm-sans text-[15px] leading-[1.55] text-night-text/80">They were caramelized. On purpose.</p>
              </div>
            </Answer>
            <Answer initial="T" tint={3} name="Theo">
              <Words>Grandpa&apos;s fried eggs on Saturdays. He let me crack them, even when I got shell in.</Words>
            </Answer>
          </ul>
          <p className="mt-4 font-dm-sans text-[13px] text-night-muted">An example circle. The answers are made up.</p>
        </div>
      </div>
    </section>
  )
}
