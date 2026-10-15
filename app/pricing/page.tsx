import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { GetTheApp } from '@/components/ui/GetTheApp'
import { PageHead } from '@/components/ui/PageHead'

const INCLUDED = [
  'One question a day for everyone in your circle',
  'Answers in text, voice, and photos',
  'Every answer kept in a searchable shared archive',
  'Gather Mode for answering together at the table',
  'Guest invites for whoever’s over that day',
  'No ads, no public feed, nothing sold',
]

export default function PricingPage() {
  return (
    <>
      <Navbar overDark />
      <main className="bg-linen">
        <PageHead
          title="One price for the whole circle."
          aside={
            <div id="join" className="rounded-[26px] bg-paper text-charcoal p-7 sm:p-10 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]">
              <p className="flex flex-wrap items-baseline gap-x-2 mb-2">
                <span className="font-cormorant text-[64px] leading-none">$6.99</span>
                <span className="font-dm-sans text-[16px] text-charcoal-lt">a month, per circle</span>
              </p>
              <ul className="mt-8 mb-10 space-y-3">
                {INCLUDED.map((f) => (
                  <li key={f} className="flex gap-3 font-dm-sans text-[15px] leading-[1.5] text-charcoal-mid">
                    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-ember" aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>
              <GetTheApp />
            </div>
          }
        >
          <p>One person pays. Everyone else in the circle joins free, up to 30 people.</p>
          <p>
            The printed book is separate and optional.{" "}
            <Link href="/the-book" className="underline decoration-night-text/30 underline-offset-4 hover:text-night-text transition-colors">
              About the book
            </Link>
          </p>
        </PageHead>

      </main>
      <Footer />
    </>
  )
}
