'use client'

import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

export function BookClickable() {
  const router = useRouter()
  const ref = useRef<HTMLDivElement>(null)
  const [expanding, setExpanding] = useState(false)
  const [bookRect, setBookRect] = useState<DOMRect | null>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const nx = (e.clientX - rect.left) / rect.width - 0.5   // -0.5 to 0.5
    const ny = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: nx * 20, y: -ny * 20 })  // ±10° max
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 })
    setHovered(false)
  }

  function handleClick() {
    if (!ref.current || expanding) return
    const rect = ref.current.getBoundingClientRect()
    setBookRect(rect)
    setExpanding(true)
  }

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {/* Book with 3D tilt */}
      <motion.div
        ref={ref}
        onClick={handleClick}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          perspective: 1000,
          width: '100%',
          height: '100%',
          cursor: 'pointer',
          position: 'relative',
        }}
        animate={{ rotateX: tilt.y, rotateY: tilt.x, scale: hovered ? 1.02 : 1 }}
        transition={{ type: 'spring', stiffness: 280, damping: 28 }}
      >
        <Image
          src="/images/book-cover.png"
          alt="Kinely Annual Book — hardcover family book"
          width={640}
          height={480}
          className="w-full h-full object-contain"
          style={{ display: 'block', userSelect: 'none', filter: 'drop-shadow(0 12px 40px rgba(44,36,22,0.15))' }}
          priority
          draggable={false}
        />

        {/* Hover label */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          style={{
            position: 'absolute',
            bottom: 24,
            left: 0,
            right: 0,
            textAlign: 'center',
            pointerEvents: 'none',
          }}
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

      {/* Expand overlay */}
      <AnimatePresence>
        {expanding && bookRect && (
          <motion.div
            initial={{
              top: bookRect.top,
              left: bookRect.left,
              width: bookRect.width,
              height: bookRect.height,
              borderRadius: 16,
            }}
            animate={{
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              borderRadius: 0,
            }}
            style={{
              position: 'fixed',
              zIndex: 9999,
              overflow: 'hidden',
            }}
            transition={{ duration: 0.48, ease: [0.32, 0.72, 0, 1] }}
            onAnimationComplete={() => router.push('/the-book')}
          >
            <Image
              src="/images/book-cover.png"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
              alt=""
              priority
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
