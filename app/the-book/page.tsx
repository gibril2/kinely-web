import Image from 'next/image'
import type { StaticImageData } from 'next/image'
import traditions from '@/public/images/book-traditions.png'
import shelf from '@/public/images/books-by-year.png'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { PageHead } from '@/components/ui/PageHead'
import { Closing } from '@/components/sections/Closing'

// Concept render of a printed spread. The book isn't designed yet, so the caption says so.
function Spread({
  src,
  alt,
  dark = false,
  caption = "A concept for the printed book. The design isn’t final, and the people and answers are made up.",
}: {
  src: StaticImageData
  alt: string
  dark?: boolean
  caption?: string
}) {
  return (
    <figure className="w-full min-w-0">
      <Image
        src={src}
        alt={alt}
        sizes="(min-width: 1024px) 50vw, 100vw"
        placeholder="blur"
        className="w-full h-auto rounded-[18px] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)]"
      />
      <figcaption className={`mt-4 font-dm-sans text-[13px] ${dark ? 'text-night-muted' : 'text-charcoal-lt'}`}>
        {caption}
      </figcaption>
    </figure>
  )
}

export default function TheBookPage() {
  return (
    <>
      <Navbar overDark />
      <main className="bg-linen">
        <PageHead title="Your year together, on paper." aside={
            <Spread
              dark
              src={traditions}
              alt="An open book on a sunlit table: a question about childhood traditions on the left page, four people's answers with photos on the right"
            />
          }>
          <p>
            Everything your circle answers is kept in the app. At the end of the year, you can have it printed: each
            day&apos;s question with everyone&apos;s answers in their own words, and the photos you added.
          </p>
          <p>
            We&apos;re putting the first books together by hand this December. Price and format aren&apos;t set yet, and
            you&apos;ll see both before you order anything. The book is never required; the archive is yours either way.
          </p>
        </PageHead>
        <section className="bg-linen window-light px-4 sm:px-8 py-24">
          <div className="max-w-content mx-auto grid gap-14 lg:gap-20 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-center">
            <div>
              <h2
                className="font-cormorant font-normal text-charcoal mb-12"
                style={{ fontSize: 'clamp(2.25rem, 4.4vw, 3.5rem)', lineHeight: 1.05 }}
              >
                What goes in it
              </h2>
              <dl className="grid gap-8">
                {[
                  { t: 'Every question', d: 'Each day of the year, dated, in the order your circle answered them.' },
                  { t: 'Everyone’s words', d: 'Each person’s answer under their name, exactly as they wrote it.' },
                  { t: 'Your photos', d: 'The pictures people added alongside their answers.' },
                ].map(({ t, d }) => (
                  <div key={t} className="border-t border-charcoal/15 pt-6">
                    <dt className="font-cormorant font-medium text-charcoal text-[26px] mb-2">{t}</dt>
                    <dd className="font-dm-sans font-light text-charcoal-mid text-[17px] leading-[1.7]">{d}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <Spread
              src={shelf}
              caption="A concept for the printed books, one for each year. The design isn’t final."
              alt="Five Kinely books on a wooden table, one for each year, in cream, green, terracotta and charcoal covers"
            />
          </div>
        </section>
        <Closing title="A book starts with day one." body="Start your circle today. Every day you answer becomes a page." />
      </main>
      <Footer />
    </>
  )
}
