'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'

type Status = 'idle' | 'loading' | 'success' | 'error'

function useWaitlist() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return { email, setEmail, status, handleSubmit }
}

export function WaitlistForm({ dark = false, cta = 'Join the waitlist' }: { dark?: boolean; cta?: string }) {
  const { email, setEmail, status, handleSubmit } = useWaitlist()

  if (status === 'success') {
    return (
      <p
        role="status"
        className={`flex items-center gap-2.5 font-dm-sans text-[15px] motion-safe:animate-[settle_420ms_cubic-bezier(0.22,1,0.36,1)] ${
          dark ? 'text-night-text/80' : 'text-charcoal-mid'
        }`}
      >
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ember text-warm-white" aria-hidden>
          <Check size={14} strokeWidth={2.5} />
        </span>
        Done. We&apos;ll email you when it&apos;s ready.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 flex-wrap">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        aria-label="Your email"
        required
        className={`font-dm-sans font-light text-[14px] px-5 py-3 rounded-pill border outline-none flex-1 min-w-[200px] ${
          dark
            ? 'bg-white/[0.06] border-white/10 text-white placeholder:text-white/40 focus:border-white/30'
            : 'bg-cream border-charcoal/15 text-charcoal placeholder:text-charcoal-lt focus:border-charcoal/40'
        }`}
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="font-dm-sans font-medium text-[13px] px-6 py-3 rounded-pill bg-ember text-warm-white hover:bg-ember-light transition-[transform,background-color] duration-150 active:scale-[0.97] motion-reduce:transition-none disabled:opacity-50 whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
      >
        {status === 'loading' ? 'Joining…' : cta}
      </button>
      {status === 'error' && (
        <p role="alert" className={`w-full font-dm-sans text-[13px] ${dark ? 'text-ember-light' : 'text-ember'}`}>
          That didn&apos;t go through. Check the address and try again.
        </p>
      )}
    </form>
  )
}
