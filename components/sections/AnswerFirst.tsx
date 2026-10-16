'use client'

import { useId, useState } from 'react'
import { ArrowDown, ArrowUp, Clock, Mic, Moon } from 'lucide-react'
import { AppAvatar } from '../ui/AppBits'
import { useDemoAnswer } from '../ui/DemoAnswer'

const QUESTION = 'What was your favorite meal growing up, and who made it?'
const STARTER = 'My mom’s chicken alfredo, with lasagna a close second.'

// Everyone else's answers, as they appear once the visitor has shared theirs.
const OTHERS = [
  { initial: 'N', tint: 0, name: 'Nana', line: 'Voice answer · 1:12' },
  { initial: 'D', tint: 1, name: 'Dad', line: 'Mom’s lentil soup. Thirty years and I still can’t…' },
  { initial: 'M', tint: 2, name: 'Maya', line: 'Dad’s pancakes, the burnt ones. I didn’t know…' },
  { initial: 'T', tint: 3, name: 'Theo', line: 'Grandpa’s fried eggs on Saturdays. He let me…' },
]

const FACTS = [
  { Icon: Clock, text: 'The question arrives at a time your circle chooses.' },
  { Icon: Mic, text: 'Answer with a few words, a voice note of up to 90 seconds, or a photo.' },
  { Icon: Moon, text: 'At midnight, the day’s answers are saved to your archive.' },
]

export function AnswerFirst() {
  const { answer, setAnswer } = useDemoAnswer()
  const [draft, setDraft] = useState(STARTER)
  const inputId = useId()
  const shared = answer !== null

  function send(e: React.FormEvent) {
    e.preventDefault()
    const text = draft.trim()
    if (text) setAnswer(text)
  }

  return (
    <section id="how-it-works" className="bg-linen window-light scroll-mt-16 px-4 sm:px-8 py-24 md:py-32">
      <div className="max-w-content mx-auto grid gap-12 lg:gap-x-20 lg:gap-y-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:grid-rows-[auto_auto]">
        <div className="lg:self-end">
          <h2
            className="font-cormorant font-normal text-charcoal max-w-[12ch] mb-7"
            style={{ fontSize: 'clamp(2.5rem, 5.2vw, 4.5rem)', lineHeight: 1.0, letterSpacing: '-0.01em' }}
          >
            Answer first, then see what everyone said.
          </h2>
          <p className="font-dm-sans font-light text-[17px] leading-[1.75] text-charcoal-mid max-w-[44ch]">
            You can&apos;t see anyone&apos;s answer until you&apos;ve shared your own. That way everyone says what
            they really think, instead of reacting to each other. Try it.
          </p>

        </div>

        <div
          className="lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:self-center relative min-w-0 rounded-[26px] bg-night text-night-text p-5 sm:p-7 shadow-[0_40px_90px_-35px_rgba(23,18,14,0.75)]"
          style={{ backgroundImage: 'radial-gradient(ellipse 80% 60% at 90% 0%, rgba(232, 150, 80, 0.18), transparent 70%)' }}
        >
          <p className="font-dm-sans text-[12px] uppercase tracking-[0.2em] text-app-accent mb-3">Today&apos;s question</p>
          <p className="font-dm-sans font-semibold text-[21px] sm:text-[24px] leading-[1.3] mb-6 max-w-[28ch]">{QUESTION}</p>

          {shared ? (
            <div className="rounded-2xl bg-night-surface p-4 mb-4 motion-safe:animate-[settle_420ms_cubic-bezier(0.22,1,0.36,1)]">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-app-accent font-dm-sans text-[12px] font-medium" aria-hidden>
                  Y
                </span>
                <span className="font-dm-sans text-[14px] font-medium">You</span>
              </div>
              <p className="font-dm-sans text-[15px] leading-[1.55] text-night-text/85 break-words">{answer}</p>
            </div>
          ) : (
            <form onSubmit={send} className="mb-4">
              <label htmlFor={inputId} className="sr-only">
                Your answer
              </label>
              <div className="flex items-end gap-3">
                <textarea
                  id={inputId}
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  maxLength={160}
                  rows={2}
                  className="min-w-0 flex-1 resize-none rounded-[18px] border border-white/10 bg-transparent px-4 py-3 font-dm-sans text-[15px] leading-[1.5] text-night-text placeholder:text-night-text/40 outline-none focus:border-app-accent/70"
                  placeholder="Share your thoughts…"
                />
                <button
                  type="submit"
                  disabled={!draft.trim()}
                  aria-label="Share your answer"
                  className="h-12 w-12 shrink-0 rounded-full bg-app-accent flex items-center justify-center transition-transform duration-150 active:scale-[0.94] hover:brightness-110 disabled:opacity-40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-night-text"
                >
                  <ArrowUp size={20} strokeWidth={2.2} aria-hidden />
                </button>
              </div>
              <p className="mt-2 font-dm-sans text-[12px] text-night-muted">A demo. Nothing you type leaves this page.</p>
            </form>
          )}

          <div className="relative" aria-live="polite">
            <ul className="space-y-2.5">
              {OTHERS.map(({ initial, tint, name, line }, i) => (
                <li
                  key={name}
                  className={`flex items-center gap-3 rounded-2xl bg-night-surface/80 px-4 py-3 transition-[filter,opacity] duration-500 ease-out motion-reduce:transition-none ${
                    shared ? 'blur-0 opacity-100' : 'blur-[6px] opacity-70 select-none'
                  }`}
                  style={{ transitionDelay: shared ? `${i * 90}ms` : '0ms' }}
                  aria-hidden={!shared}
                >
                  <AppAvatar initial={initial} tint={tint} size={28} />
                  <span className="min-w-0">
                    <span className="block font-dm-sans text-[13px] font-medium">{name}</span>
                    <span className="block truncate font-dm-sans text-[13px] text-night-text/70">{line}</span>
                  </span>
                </li>
              ))}
            </ul>
            {!shared && (
              <p className="absolute inset-0 m-auto h-fit w-fit whitespace-nowrap rounded-full bg-night/90 border border-white/10 px-4 py-2 font-dm-sans text-[14px]">
                Share yours to see theirs
              </p>
            )}
          </div>

          {shared && (
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <a
                href="#everyone"
                className="inline-flex items-center gap-2 font-dm-sans text-[14px] font-medium text-app-accent hover:text-night-text transition-colors whitespace-nowrap"
              >
                Read everyone&apos;s answers <ArrowDown size={15} aria-hidden />
              </a>
              <button
                type="button"
                onClick={() => setAnswer(null)}
                className="font-dm-sans text-[13px] text-night-muted hover:text-night-text transition-colors whitespace-nowrap"
              >
                Try again
              </button>
            </div>
          )}
        </div>
        <ul className="space-y-4 border-t border-charcoal/10 pt-8 lg:col-start-1 lg:row-start-2 lg:self-start">
          {FACTS.map(({ Icon, text }) => (
            <li key={text} className="flex items-center gap-4 font-dm-sans text-[16px] text-charcoal-mid">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-paper text-ember shadow-[0_6px_16px_-8px_rgba(68,40,18,0.4)]">
                <Icon size={17} aria-hidden />
              </span>
              {text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
