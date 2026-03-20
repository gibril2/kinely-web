'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useBookTransition } from '@/lib/book-transition'

export function BookClickable() {
  const ref = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)
  const { startTransition } = useBookTransition()

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const nx = (e.clientX - rect.left) / rect.width - 0.5
    const ny = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: nx * 20, y: -ny * 20 })
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 })
    setHovered(false)
  }

  function handleClick() {
    if (!ref.current) return
    startTransition(ref.current.getBoundingClientRect())
  }

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <motion.div
        ref={ref}
        onClick={handleClick}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{ perspective: 1000, width: '100%', height: '100%', cursor: 'pointer', position: 'relative' }}
        animate={{ rotateX: tilt.y, rotateY: tilt.x, scale: hovered ? 1.02 : 1 }}
        transition={{ type: 'spring', stiffness: 280, damping: 28 }}
        whileTap={{ scale: 0.97 }}
      >
        <Image
          src="/images/book-open.png"
          alt="Kinely Annual Book — open book spread"
          width={640}
          height={480}
          className="w-full h-full object-contain"
          style={{ display: 'block', userSelect: 'none', filter: 'drop-shadow(0 12px 40px rgba(44,36,22,0.15))' }}
          priority
          draggable={false}
        />

        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ position: 'absolute', bottom: 24, left: 0, right: 0, textAlign: 'center', pointerEvents: 'none' }}
        >
          <span
            className="font-dm-sans font-medium"
            style={{
              fontSize: 13,
              color: '#C4541A',
              background: 'rgba(240,232,216,0.85)',
              backdropFilter: 'blur(4px)',
              padding: '6px 16px',
              borderRadius: 20,
              letterSpacing: '0.02em',
            }}
          >
            Open the book →
          </span>
        </motion.div>
      </motion.div>
    </div>
  )
}
