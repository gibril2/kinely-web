'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useBookTransition } from '@/lib/book-transition'

const EXPAND_EASE: [number, number, number, number] = [0.4, 0, 0.2, 1]

function OverlayInner({
  rect,
  onNavigate,
  onDone,
}: {
  rect: DOMRect
  onNavigate: () => void
  onDone: () => void
}) {
  const [fading, setFading] = useState(false)

  return (
    <motion.div
      initial={{
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
        borderRadius: 20,
        opacity: 1,
      }}
      animate={
        fading
          ? { opacity: 0 }
          : { top: 0, left: 0, width: '100vw', height: '100vh', borderRadius: 0, opacity: 1 }
      }
      transition={
        fading
          ? { duration: 0.22, ease: 'easeOut' }
          : { duration: 0.28, ease: EXPAND_EASE }
      }
      style={{
        position: 'fixed',
        zIndex: 9999,
        background: '#EDE6D6',
        pointerEvents: 'none',
      }}
      onAnimationComplete={() => {
        if (!fading) {
          onNavigate()
          setFading(true)
        } else {
          onDone()
        }
      }}
    />
  )
}

export function BookTransitionOverlay() {
  const { tx, clearTransition } = useBookTransition()
  const router = useRouter()

  if (!tx) return null

  return (
    <OverlayInner
      key={`${tx.rect.top}-${tx.rect.left}-${tx.rect.width}`}
      rect={tx.rect}
      onNavigate={() => router.push('/the-book?t=1')}
      onDone={clearTransition}
    />
  )
}
