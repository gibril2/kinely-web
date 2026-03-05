'use client'

import { useRef } from 'react'
import { useRouter } from 'next/navigation'
import { Heart } from 'lucide-react'
import { useModeTransition } from '@/lib/mode-transition'

export function GrandparentsModeCard() {
  const router = useRouter()
  const cardRef = useRef<HTMLDivElement>(null)
  const { startTransition } = useModeTransition()

  function handleClick() {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    startTransition(rect, '#F7F2EA')
    // Navigate immediately — the overlay covers the screen while the new page loads
    router.push('/modes/grandparents')
  }

  return (
    <div
      ref={cardRef}
      onClick={handleClick}
      className="group relative overflow-hidden flex flex-col cursor-pointer"
      style={{
        background: '#F7F2EA',
        borderRadius: 24,
        padding: '40px 36px',
        boxShadow: '0 2px 20px rgba(44,36,22,0.06)',
        transition: 'transform 200ms ease, box-shadow 200ms ease',
        userSelect: 'none',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.boxShadow = '0 8px 32px rgba(44,36,22,0.10)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = '0 2px 20px rgba(44,36,22,0.06)'
      }}
    >
      <Heart size={72} className="text-rose-400 absolute top-4 right-4" style={{ opacity: 0.04 }} />
      <div className="mb-5">
        <Heart size={24} className="text-rose-400" />
      </div>
      <h3 className="font-cormorant font-medium text-charcoal mb-4" style={{ fontSize: 28 }}>
        Grandparents Mode
      </h3>
      <p className="font-dm-sans font-light text-charcoal-lt mb-6 flex-1" style={{ fontSize: 14, lineHeight: 1.75 }}>
        Grandma gets the question in extra-large text with a single big button to record her voice. The grandkids hear it played back in her actual voice. The stories she&apos;s never told — her childhood, her wedding day, her biggest adventure — finally get asked.
      </p>
      <div className="flex items-center justify-between">
        <span
          className="inline-block font-dm-sans font-medium text-ember text-[11px] uppercase tracking-[0.06em] px-4 py-2 rounded-chip"
          style={{ background: '#F5E6DC' }}
        >
          For every generation
        </span>
        <span className="font-dm-sans font-medium text-[12px] text-charcoal-lt group-hover:text-ember transition-colors">
          See how it works →
        </span>
      </div>
    </div>
  )
}
