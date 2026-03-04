'use client'

import { useEffect, useState } from 'react'
import { KinelyLogo } from '../ui/Logo'
import Link from 'next/link'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 md:px-12 transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_1px_20px_rgba(44,36,22,0.08)]' : ''
      }`}
      style={{
        background: 'rgba(247, 242, 234, 0.92)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(44,36,22,0.07)',
      }}
    >
      {/* Logo */}
      <Link href="/" aria-label="Kinely home">
        <KinelyLogo size="md" />
      </Link>

      {/* Center links */}
      <div className="hidden md:flex items-center gap-8">
        {[
          { label: 'How it works', href: '#how-it-works' },
          { label: 'The archive', href: '#archive' },
          { label: 'Pricing', href: '#pricing' },
        ].map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            className="font-dm-sans text-[13px] text-charcoal-lt hover:text-charcoal transition-colors"
          >
            {label}
          </Link>
        ))}
      </div>

      {/* CTA */}
      <Link
        href="#pricing"
        className="font-dm-sans font-medium text-[13px] text-warm-white bg-charcoal hover:bg-ember rounded-pill px-[22px] py-[9px] transition-all duration-200"
      >
        <span className="hidden md:inline">Become a founding family</span>
        <span className="md:hidden">Join →</span>
      </Link>
    </nav>
  )
}
