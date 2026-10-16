import Link from 'next/link'
import { MessageCircle, Mic, Archive, UsersRound, DoorOpen, ShieldCheck } from 'lucide-react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { GetTheApp } from '@/components/ui/GetTheApp'
import { RoomBackdrop } from '@/components/ui/RoomBackdrop'

const INCLUDED = [
  { icon: MessageCircle, text: 'One question a day for everyone in your circle' },
  { icon: Mic, text: 'Answers in writing, voice notes, or photos' },
  { icon: Archive, text: 'Every answer kept in an archive you can search' },
  { icon: UsersRound, text: 'Gather Mode, for answering together at the table' },
  { icon: DoorOpen, text: 'Guest invites for whoever’s over that day' },
  { icon: ShieldCheck, text: 'No ads, no public feed, nothing sold' },
]

// Pricing model from .vault/decisions/2026-10-15-kinely-trial-freeze-retention.md.
// A "day together" is a day where at least two people in the circle answered.
const STEPS = [
  {
    title: 'Start free',
    body: 'Invite your people and start answering. Nobody is asked to pay until your circle has had seven days together, meaning days when at least two of you answered. If it takes a month to get everyone on board, that’s fine.',
  },
  {
    title: 'One person pays',
    body: 'After that, anyone in the circle can cover it. $6.99 a month keeps the questions coming for everyone, and everyone else stays free.',
  },
  {
    title: 'Stop anytime, keep everything',
    body: 'If nobody pays, new questions pause and your archive turns read-only. Every answer, voice note, and photo is still there to look back on and download. Pay again and it picks up where you left off.',
  },
]

function DaysTogether() {
  return (
    <div className="flex gap-1.5" aria-hidden>
      {Array.from({ length: 7 }, (_, i) => (
        <span key={i} className="h-2.5 w-2.5 rounded-full bg-ember" style={{ opacity: 0.35 + i * 0.1 }} />
      ))}
    </div>
  )
}

// Same room as the About letter: a lamp-lit head, then one paper sheet that
// overlaps down into the light and carries the whole offer.
export default function PricingPage() {
  return (
    <>
      <Navbar overDark />
      <main className="bg-linen">
        <section data-nav-dark className="relative bg-lamp text-night-text px-4 sm:px-8 pt-36 md:pt-44 pb-48 md:pb-64 overflow-hidden">
          <RoomBackdrop strength={0.6} />
          <div className="relative mx-auto max-w-[720px] text-center">
            <p className="font-dm-sans text-[14px] text-app-accent mb-4">Pricing</p>
            <h1
              className="font-cormorant font-normal"
              style={{ fontSize: 'clamp(2.5rem, 5.4vw, 4.25rem)', lineHeight: 1.0, letterSpacing: '-0.01em', textWrap: 'balance' }}
            >
              One price for the whole circle.
            </h1>
            <p className="mt-6 font-dm-sans font-light text-[18px] leading-[1.6] text-night-text/75">
              Free to start. Nobody pays until it&apos;s working.
            </p>
          </div>
        </section>

        <section className="relative px-3 sm:px-8">
          <div
            id="join"
            className="relative z-10 mx-auto -mt-36 md:-mt-48 max-w-[980px] scroll-mt-24 rounded-[6px] bg-paper text-charcoal shadow-[0_50px_100px_-40px_rgba(23,18,14,0.75),0_2px_6px_rgba(23,18,14,0.08)] grid md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]"
            style={{
              backgroundImage:
                'radial-gradient(ellipse 70% 45% at 0% 0%, rgba(232, 150, 80, 0.14), transparent 70%), linear-gradient(to bottom, rgba(255,255,255,0.35), transparent 30%)',
            }}
          >
            <div className="px-6 py-10 sm:px-12 sm:py-14 md:border-r border-charcoal/10">
              <p className="font-cormorant leading-none text-[88px] sm:text-[104px] tracking-[-0.02em]">$6.99</p>
              <p className="mt-3 font-dm-sans text-[16px] text-charcoal-lt">a month, for your whole circle</p>
              <div className="mt-8 mb-10 flex items-center gap-4 rounded-[14px] bg-linen/70 px-5 py-4">
                <DaysTogether />
                <p className="font-dm-sans text-[15px] leading-[1.45] text-charcoal-mid">Free for your first seven days together</p>
              </div>
              <GetTheApp />
            </div>
            <div className="px-6 pb-10 sm:px-12 sm:pb-14 md:py-14 border-t md:border-t-0 border-charcoal/10 pt-10">
              <p className="font-dm-sans text-[13px] font-medium text-charcoal-lt mb-6">Everyone in the circle gets</p>
              <ul className="space-y-5">
                {INCLUDED.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex gap-4 font-dm-sans text-[16px] leading-[1.5] text-charcoal-mid">
                    <Icon size={20} strokeWidth={1.6} className="mt-[1px] shrink-0 text-ember" aria-hidden />
                    {text}
                  </li>
                ))}
              </ul>
              <p className="mt-8 border-t border-charcoal/10 pt-5 font-dm-sans text-[14px] text-charcoal-lt">Up to 30 people in a circle.</p>
            </div>
          </div>
        </section>

        <section className="bg-linen window-light px-4 sm:px-8 py-24 md:py-32">
          <div className="max-w-content mx-auto">
            <h2
              className="font-cormorant font-normal text-charcoal mb-14 md:mb-16 max-w-[18ch]"
              style={{ fontSize: 'clamp(2.25rem, 4.4vw, 3.5rem)', lineHeight: 1.05 }}
            >
              How paying works
            </h2>
            <ol className="grid gap-12 md:gap-10 md:grid-cols-3">
              {STEPS.map(({ title, body }, i) => (
                <li key={title} className="border-t border-charcoal/15 pt-6">
                  <p className="font-cormorant text-[44px] leading-none text-ember mb-5">{i + 1}</p>
                  <h3 className="font-cormorant font-medium text-charcoal text-[26px] leading-[1.2] mb-3">{title}</h3>
                  <p className="font-dm-sans font-light text-[16px] leading-[1.75] text-charcoal-mid max-w-[40ch]">{body}</p>
                </li>
              ))}
            </ol>

            <div className="mt-20 grid gap-6 md:grid-cols-2 border-t border-charcoal/10 pt-8 font-dm-sans font-light text-[15px] leading-[1.7] text-charcoal-mid">
              <p>
                A paused circle is kept for 12 months. We&apos;ll email you before anything is deleted, with a link to download
                it all.
              </p>
              <p>
                The printed book is separate and optional, and its price will be shown before anyone orders.{' '}
                <Link href="/the-book" className="underline decoration-charcoal/30 underline-offset-4 hover:text-charcoal transition-colors whitespace-nowrap">
                  About the book
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
