'use client'

import { motion } from 'framer-motion'

const bars = [6, 11, 8, 13, 6, 9, 5]

export function VoiceWaveform() {
  return (
    <div className="flex items-center gap-[3px] h-[16px]">
      {bars.map((height, i) => (
        <motion.div
          key={i}
          style={{
            width: 2,
            height,
            background: '#C4541A',
            borderRadius: 10,
            opacity: 0.7,
          }}
          animate={{ scaleY: [1, 0.35, 1] }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
            delay: i * 0.1,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
