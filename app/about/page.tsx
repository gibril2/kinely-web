import { Allura } from 'next/font/google'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { RoomBackdrop } from '@/components/ui/RoomBackdrop'
import { Closing } from '@/components/sections/Closing'

// Gabriel's letter. Written in his voice from what he shared; edit freely, keep it plain.
const OPENING =
  'Over the years I’ve lost people I love, family and friends I always assumed would be around for a lot longer than they were.'

const LETTER = [
  'I still have plenty of pictures of them, and for a while I thought that was enough. It isn’t. Their faces stay with you, but the rest slips away so quietly that you don’t notice until it’s gone, and one day I realized I couldn’t quite hear their voices anymore, or remember exactly how they laughed. I would give a lot for a single recording of them talking about anything at all: what they ate growing up, what scared them, what they’d say to me now. I never thought to ask, because I assumed there would always be more time.',
  'That’s what got me thinking about the people I still have. I didn’t want to feel that regret again, so I started looking for a simple way to hold on to their stories, in their own words and their own voices, somewhere they wouldn’t get lost.',
  'Kinely is what came out of that. Every day it asks the people closest to you one question, everyone answers, and every answer is kept. I built it for my own family first.',
  'Don’t wait the way I did. Start with the people you love most and ask them something today. Most of what you’ll hear is small and funny and good, and you get to enjoy it now, not only look back on it later.',
]

// Signature face, used only for the sign-off on this page.
const signature = Allura({ subsets: ['latin'], weight: '400', display: 'swap' })

// One sheet of paper resting in the lamp-lit room: it starts on the dark wall and
// overlaps down into the light, with warm light falling across its top corner.
export default function AboutPage() {
  return (
    <>
      <Navbar overDark />
      <main className="bg-linen">
        <section data-nav-dark className="relative bg-lamp text-night-text px-4 sm:px-8 pt-36 md:pt-44 pb-48 md:pb-72 overflow-hidden">
          <RoomBackdrop strength={0.6} />
          <div className="relative mx-auto max-w-[720px] text-center">
            <p className="font-dm-sans text-[14px] text-app-accent mb-4">A note from Gabriel</p>
            <h1
              className="font-cormorant font-normal"
              style={{ fontSize: 'clamp(2.5rem, 5.4vw, 4.25rem)', lineHeight: 1.0, letterSpacing: '-0.01em' }}
            >
              Why Kinely exists
            </h1>
          </div>
        </section>

        <section className="relative px-3 sm:px-8 pb-24 md:pb-32">
          <article
            className="relative z-10 mx-auto -mt-36 md:-mt-60 max-w-[720px] rounded-[4px] bg-paper px-6 py-12 sm:px-14 sm:py-16 md:px-20 md:py-20 shadow-[0_50px_100px_-40px_rgba(23,18,14,0.75),0_2px_6px_rgba(23,18,14,0.08)]"
            style={{
              backgroundImage:
                'radial-gradient(ellipse 70% 45% at 100% 0%, rgba(232, 150, 80, 0.16), transparent 70%), linear-gradient(to bottom, rgba(255,255,255,0.35), transparent 30%)',
            }}
          >
            <p className="font-cormorant text-[26px] sm:text-[30px] leading-[1.4] text-charcoal mb-8">{OPENING}</p>
            <div className="space-y-6 font-cormorant text-[20px] sm:text-[22px] leading-[1.7] text-charcoal-mid">
              {LETTER.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <div className="mt-12 flex items-end justify-between gap-6 border-t border-charcoal/10 pt-8">
              <div>
                <p className={`${signature.className} text-[46px] sm:text-[54px] leading-[1] text-charcoal`}>Gabriel Prroj</p>
                <p className="mt-2 font-dm-sans text-[14px] text-charcoal-lt">Founder, Kinely</p>
              </div>
              <span
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ember font-cormorant text-[22px] text-warm-white"
                aria-hidden
              >
                k
              </span>
            </div>
          </article>
        </section>

        <Closing
          title="Start with the people you love most."
          body="Start a circle today and invite them in."
        />
      </main>
      <Footer />
    </>
  )
}
