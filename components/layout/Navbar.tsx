'use client'

import { useEffect, useState } from 'react'
import { KinelyLogo } from '../ui/Logo'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'How it works', href: '/how-it-works' },
    { label: 'The Book', href: '/the-book' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'About', href: '/about' },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 md:px-12 transition-shadow duration-300 ${scrolled ? 'shadow-[0_1px_20px_rgba(44,36,22,0.08)]' : ''}`}
        style={{ background: 'rgba(247,242,234,0.95)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(44,36,22,0.07)' }}
      >
        <Link href="/" aria-label="Kinely home"><KinelyLogo size="md" /></Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map(({ label, href }) => (
            <Link key={label} href={href} className="font-dm-sans text-[13px] text-charcoal-lt hover:text-charcoal transition-colors">{label}</Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link href="/pricing" className="hidden md:inline-flex font-dm-sans font-medium text-[13px] text-warm-white bg-charcoal hover:bg-ember rounded-pill px-[22px] py-[9px] transition-all duration-200">
            Get early access
          </Link>
          <button className="md:hidden p-1 text-charcoal" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 pt-16" style={{ background: 'rgba(247,242,234,0.98)', backdropFilter: 'blur(16px)' }}>
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {links.map(({ label, href }) => (
              <Link key={label} href={href} onClick={() => setMenuOpen(false)} className="font-cormorant text-[32px] text-charcoal hover:text-ember transition-colors">{label}</Link>
            ))}
            <Link href="/pricing" onClick={() => setMenuOpen(false)} className="font-dm-sans font-medium text-[15px] text-warm-white bg-ember rounded-pill px-8 py-3.5 mt-4">Get early access</Link>
          </div>
        </div>
      )}
    </>
  )
}
