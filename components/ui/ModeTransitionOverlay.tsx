'use client'

import { motion } from 'framer-motion'
import { useModeTransition } from '@/lib/mode-transition'

const EASE: [number, number, number, number] = [0.32, 0.72, 0, 1]

export function ModeTransitionOverlay() {
  const { tx, clearTransition } = useModeTransition()

  if (!tx) return null

  return (
    <motion.div
      key={`${tx.rect.top}-${tx.rect.left}`}
      initial={{
        top: tx.rect.top,
        left: tx.rect.left,
        width: tx.rect.width,
        height: tx.rect.height,
        borderRadius: 24,
        opacity: 1,
      }}
      animate={{
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        borderRadius: 0,
        opacity: [1, 1, 0],
      }}
      transition={{
        duration: 0.58,
        ease: EASE,
        opacity: { times: [0, 0.72, 1], duration: 0.58, ease: 'easeIn' },
      }}
      style={{
        position: 'fixed',
        zIndex: 9999,
        background: tx.color,
        pointerEvents: 'none',
      }}
      onAnimationComplete={clearTransition}
    />
  )
}
