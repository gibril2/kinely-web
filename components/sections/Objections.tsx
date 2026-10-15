import { Plus } from 'lucide-react'

const objections = [
  {
    q: 'What if nobody else joins in?',
    a: 'You don’t need everyone on day one. One person starts the circle and invites the others. Everyone gets a notification when the question arrives, and a good question is usually enough to get people answering.',
  },
  {
    q: 'What if we forget to answer?',
    a: 'Nothing is lost. Skip a day or a week, and your archive stays put. A new question still arrives the next day.',
  },
  {
    q: 'What kind of questions does it ask?',
    a: 'Close to a thousand of them: childhood memories, funny hypotheticals, values, the year so far. No question repeats until your circle has been through the whole library, and some are saved for holidays and birthdays.',
  },
  {
    q: 'Can we answer together, in the same room?',
    a: 'Yes. Gather Mode puts the question on one phone in the middle of the table, and each person records their answer in turn. You can also invite a guest to answer that day’s question with you.',
  },
  {
    q: 'Can someone join later?',
    a: 'Anytime. Anyone who joins later can scroll back through everything the circle has answered since it started.',
  },
  {
    q: 'Is this another app that eats our time?',
    a: 'It’s one question a day. Answer it and you’re done: no feed, no likes, no ads. Often the best part happens later, when someone brings up an answer at dinner.',
  },
  {
    q: 'Who can see what we write?',
    a: 'Only the people in your circle. Nothing is public, nothing is sold, and you can delete your account and everything in it at any time.',
  },
]

// Compact FAQ: questions only, each answer opens in place. Native <details>, so it is
// keyboard and screen-reader friendly with no script; name="faq" keeps one open at a time.
export function Objections() {
  return (
    <section id="questions" className="bg-linen px-4 sm:px-8 py-24 md:py-28">
      <div className="max-w-content mx-auto grid gap-10 lg:gap-20 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]">
        <div>
          <h2
            className="font-cormorant font-normal text-charcoal mb-5"
            style={{ fontSize: 'clamp(2.25rem, 4.4vw, 3.5rem)', lineHeight: 1.05 }}
          >
            You might be wondering
          </h2>
          <p className="font-dm-sans font-light text-[17px] leading-[1.7] text-charcoal-mid max-w-[34ch]">
            The short answers. Tap a question to open it.
          </p>
        </div>

        <div className="faq border-t border-charcoal/15">
          {objections.map(({ q, a }) => (
            <details key={q} name="faq" className="group border-b border-charcoal/15">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember rounded-sm">
                <span className="font-cormorant font-medium text-charcoal text-[22px] sm:text-[24px] leading-[1.25]">{q}</span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-charcoal/20 text-charcoal-mid transition-transform duration-200 ease-out group-open:rotate-45 motion-reduce:transition-none" aria-hidden>
                  <Plus size={16} />
                </span>
              </summary>
              <p className="pb-6 pr-12 font-dm-sans font-light text-[16px] leading-[1.75] text-charcoal-mid max-w-[58ch]">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
