import type { ReactNode } from 'react'
import { RoomBackdrop } from './RoomBackdrop'

// Lamp-lit opening for inner pages, so every page starts in the same room as the home hero.
export function PageHead({ title, children, aside }: { title: string; children?: ReactNode; aside?: ReactNode }) {
  return (
    <section data-nav-dark className="relative bg-lamp text-night-text px-4 sm:px-8 pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      <RoomBackdrop />
      <div
        className={`relative max-w-content mx-auto ${
          aside ? 'grid gap-14 lg:gap-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-center' : ''
        }`}
      >
        <div>
          <h1
            className="font-cormorant font-normal max-w-[15ch] mb-6"
            style={{ fontSize: 'clamp(2.75rem, 6vw, 4.75rem)', lineHeight: 1.0, letterSpacing: '-0.01em', overflowWrap: 'anywhere' }}
          >
            {title}
          </h1>
          {children && (
            <div className="space-y-5 max-w-[48ch] font-dm-sans font-light text-[18px] leading-[1.7] text-night-text/80">{children}</div>
          )}
        </div>
        {aside}
      </div>
    </section>
  )
}
