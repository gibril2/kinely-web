import Link from 'next/link'
import Image from 'next/image'
import bookPhoto from '@/public/images/book-golden-hour.png'

export function Archive() {
  return (
    <section id="archive" className="bg-cream window-light px-4 sm:px-8 py-24 md:py-32">
      <div className="max-w-content mx-auto grid gap-14 md:gap-20 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] items-center">
        <div>
          <h2
            className="font-cormorant font-normal text-charcoal max-w-[13ch] mb-8"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.25rem)', lineHeight: 1.02, letterSpacing: '-0.01em' }}
          >
            A year of answers, kept in one place.
          </h2>
          <div className="space-y-5 max-w-[44ch] font-dm-sans font-light text-[17px] leading-[1.75] text-charcoal-mid">
            <p>
              Each day&apos;s question is saved with everyone&apos;s answers, photos and voice notes. Scroll back to any
              day, or search for a name or a word.
            </p>
            <p>
              At the end of the year you can have it printed as a book. We&apos;re putting together the first ones by
              hand this December.
            </p>
          </div>
          <Link
            href="/the-book"
            className="inline-block mt-8 font-dm-sans font-medium text-[15px] text-ember underline decoration-ember/30 underline-offset-[6px] hover:decoration-ember transition-colors whitespace-nowrap"
          >
            About the book
          </Link>
        </div>

        <figure className="min-w-0">
          <Image
            src={bookPhoto}
            alt="The printed book open on a table beside a phone showing the same day's question in the app"
            sizes="(min-width: 768px) 55vw, 100vw"
            placeholder="blur"
            className="w-full h-auto rounded-[22px] shadow-[0_40px_80px_-35px_rgba(68,40,18,0.6)]"
          />
          <figcaption className="mt-4 font-dm-sans text-[13px] text-charcoal-lt">
            A concept for the printed book. The design isn&apos;t final, and the people and answers are made up.
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
