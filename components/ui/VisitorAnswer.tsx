'use client'

import { useDemoAnswer } from './DemoAnswer'

// The visitor's demo answer, shown alongside the example circle once they've shared it.
export function VisitorAnswer() {
  const { answer } = useDemoAnswer()
  if (!answer) return null
  return (
    <li className="break-inside-avoid mb-4 rounded-[20px] bg-night-surface/90 border border-app-accent/30 p-5 backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-3">
        <span className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-app-accent font-dm-sans text-[12px] font-medium" aria-hidden>
          Y
        </span>
        <span className="font-dm-sans text-[14px] font-medium text-night-text">You</span>
      </div>
      <p className="font-dm-sans text-[16px] leading-[1.6] text-night-text/85 break-words">{answer}</p>
    </li>
  )
}
