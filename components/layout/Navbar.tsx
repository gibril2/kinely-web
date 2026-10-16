'use client'

import { useEffect, useState } from 'react'
import { KinelyLogo } from '../ui/Logo'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'The book', href: '/the-book' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
]

// overDark: the page opens on a dark section. The bar stays transparent
// over it, then turns cream once that section has scrolled away.
// clearOverDark: stay see-through (lightly tinted) for the whole dark section instead of
// turning cream as soon as the page scrolls. Used on home, where the hero meets the demo.
export function Navbar({ overDark = false, clearOverDark = false }: { overDark?: boolean; clearOverDark?: boolean }) {
  const [pastHero, setPastHero] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    // Transparent only at the very top of a page that opens on a dark section (data-nav-dark).
    // As soon as the page scrolls, the bar turns cream so content never slides under bare links.
    const onScroll = () => {
      setScrolled(window.scrollY > 16)
      if (!overDark || (!clearOverDark && window.scrollY > 16)) return setPastHero(true)
      const under = document.elementsFromPoint(window.innerWidth / 2, 72).find((el) => !el.closest('nav'))
      setPastHero(!under?.closest('[data-nav-dark]'))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [overDark, clearOverDark])

  const dark = overDark && !pastHero && !menuOpen

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-4 sm:px-6 md:px-12 transition-[background-color,border-color,box-shadow] duration-200 ${
          dark
            ? scrolled
              ? 'bg-lamp/60 backdrop-blur-md border-b border-white/[0.06]'
              : 'bg-transparent border-b border-transparent'
            :'bg-cream/95 backdrop-blur-md border-b border-charcoal/[0.07]'
        } ${pastHero ? 'shadow-[0_1px_20px_rgba(44,36,22,0.08)]' : ''}`}
      >
        <Link href="/" aria-label="Kinely home" className="shrink-0">
          <KinelyLogo size="md" onDark={dark} />
        </Link>

        <div className="flex items-center gap-3 md:gap-5">
          <div className="hidden md:flex items-center gap-1">
            {links.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className={`font-dm-sans text-[14px] whitespace-nowrap px-3 py-1.5 rounded-full transition-colors duration-150 ${
                  dark
                    ? 'text-night-text/70 hover:text-night-text hover:bg-white/[0.06]'
                    : 'text-charcoal-lt hover:text-charcoal hover:bg-charcoal/[0.05]'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/#join"
              className={`hidden md:inline-flex font-dm-sans font-medium text-[14px] whitespace-nowrap rounded-pill px-[22px] py-[9px] transition-[transform,background-color,color] duration-200 active:scale-[0.97] motion-reduce:transition-none ${
                dark ? 'bg-night-text text-night hover:bg-white' : 'bg-charcoal text-warm-white hover:bg-ember'
              }`}
            >
              Get the app
            </Link>
            <button
              className={`md:hidden p-2 -mr-2 ${dark ? 'text-night-text' : 'text-charcoal'}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-40 pt-16 bg-cream">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {links.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="font-cormorant text-[32px] text-charcoal hover:text-ember transition-colors"
              >
                {label}
              </Link>
            ))}
            <Link
              href="/#join"
              onClick={() => setMenuOpen(false)}
              className="font-dm-sans font-medium text-[15px] text-warm-white bg-ember rounded-pill px-8 py-3.5 mt-4"
            >
              Get the app
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
