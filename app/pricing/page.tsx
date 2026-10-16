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

// An example circle: the first person pays, everyone else joins free.
const CIRCLE = [
  { name: 'You', tint: '#B5622A' },
  { name: 'Mom', tint: '#7B5230' },
  { name: 'Dad', tint: '#5C7A5F' },
  { name: 'Maya', tint: '#4A6B8A' },
  { name: 'Theo', tint: '#8A5A6B' },
  { name: 'Nana', tint: '#6B6250' },
]

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
              <p className="mt-8 mb-10 max-w-[34ch] font-dm-sans font-light text-[17px] leading-[1.7] text-charcoal-mid">
                One person pays. Everyone they invite joins free, up to 30 people.
              </p>
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
            </div>
          </div>
        </section>

        <section className="bg-linen window-light px-4 sm:px-8 py-24 md:py-32">
          <div className="max-w-content mx-auto grid gap-14 lg:gap-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-center">
            <div>
              <h2
                className="font-cormorant font-normal text-charcoal mb-6"
                style={{ fontSize: 'clamp(2.25rem, 4.4vw, 3.5rem)', lineHeight: 1.05 }}
              >
                Only one of you needs to pay.
              </h2>
              <p className="max-w-[44ch] font-dm-sans font-light text-[17px] leading-[1.7] text-charcoal-mid">
                You don&apos;t need to talk anyone into a subscription. Send them the invite link and they&apos;re in. If a
                circle of six wanted to split it, that&apos;s under $1.20 each.
              </p>
            </div>

            <ul className="grid grid-cols-3 gap-x-4 gap-y-8 sm:gap-x-8 max-w-[440px] lg:justify-self-end w-full" aria-label="An example circle of six">
              {CIRCLE.map(({ name, tint }, i) => (
                <li key={name} className="flex flex-col items-center gap-3">
                  <span
                    className={`flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full font-dm-sans text-[22px] sm:text-[26px] font-medium text-warm-white ${
                      i === 0 ? 'ring-2 ring-ember ring-offset-4 ring-offset-linen' : ''
                    }`}
                    style={{ background: tint }}
                    aria-hidden
                  >
                    {name[0]}
                  </span>
                  <span className="text-center font-dm-sans text-[14px] leading-tight">
                    <span className="block font-medium text-charcoal">{name}</span>
                    <span className={i === 0 ? 'text-ember' : 'text-charcoal-lt'}>{i === 0 ? '$6.99 a month' : 'Free'}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <p className="max-w-content mx-auto mt-20 border-t border-charcoal/10 pt-8 font-dm-sans font-light text-[15px] text-charcoal-mid">
            The printed book is separate and optional, and its price will be shown before anyone orders.{' '}
            <Link href="/the-book" className="underline decoration-charcoal/30 underline-offset-4 hover:text-charcoal transition-colors whitespace-nowrap">
              About the book
            </Link>
          </p>
        </section>
      </main>
      <Footer />
    </>
  )
}
