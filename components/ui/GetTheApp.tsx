'use client'

import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { WaitlistForm } from './WaitlistForm'

// Android build is open to anyone through the Play testing track. When the app is
// published to production, swap this for the store listing URL.
export const ANDROID_URL = 'https://play.google.com/apps/testing/com.kinely.app'

// Primary call to action: download on Android; iPhone visitors can ask to be told when it ships.
export function GetTheApp({ dark = false }: { dark?: boolean }) {
  const [notify, setNotify] = useState(false)

  return (
    <div>
      <a
        href={ANDROID_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-pill bg-ember px-7 py-3.5 font-dm-sans text-[15px] font-medium text-warm-white whitespace-nowrap transition-[transform,background-color] duration-150 hover:bg-ember-light active:scale-[0.97] motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ember"
      >
        Get Kinely for Android <ArrowUpRight size={17} aria-hidden />
      </a>

      <div className={`mt-4 font-dm-sans text-[14px] ${dark ? 'text-night-text/60' : 'text-charcoal-lt'}`}>
        {notify ? (
          <div className="max-w-[440px] pt-1 motion-safe:animate-[settle_300ms_cubic-bezier(0.22,1,0.36,1)]">
            <p className="mb-3">We&apos;ll email you once, when Kinely is on the App Store.</p>
            <WaitlistForm dark={dark} cta="Notify me" />
          </div>
        ) : (
          <p>
            On iPhone? It&apos;s coming soon.{' '}
            <button
              type="button"
              onClick={() => setNotify(true)}
              className={`underline underline-offset-4 transition-colors ${
                dark ? 'decoration-night-text/30 hover:text-night-text' : 'decoration-charcoal/30 hover:text-charcoal'
              }`}
            >
              Tell me when it&apos;s ready
            </button>
          </p>
        )}
      </div>
    </div>
  )
}
