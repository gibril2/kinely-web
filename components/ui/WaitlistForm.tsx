'use client'

import { useState } from 'react'

export function WaitlistForm({ dark = false }: { dark?: boolean }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

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
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <p
        className={`font-dm-sans font-light text-[14px] ${
          dark ? 'text-white/50' : 'text-charcoal-lt'
        }`}
      >
        You&apos;re on the list. We&apos;ll be in touch.
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
        required
        className={`font-dm-sans font-light text-[14px] px-5 py-3 rounded-pill border outline-none flex-1 min-w-[200px] ${
          dark
            ? 'bg-white/8 border-white/10 text-white placeholder:text-white/30 focus:border-white/20'
            : 'bg-cream border-charcoal/15 text-charcoal placeholder:text-charcoal-lt focus:border-charcoal/30'
        }`}
        style={{ background: dark ? 'rgba(255,255,255,0.06)' : undefined }}
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="font-dm-sans font-medium text-[13px] px-6 py-3 rounded-pill bg-charcoal text-warm-white hover:bg-ember transition-all duration-200 disabled:opacity-50"
      >
        {status === 'loading' ? 'Joining…' : 'Join the waitlist →'}
      </button>
    </form>
  )
}
