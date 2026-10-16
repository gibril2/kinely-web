import { KinelyLogo } from '../ui/Logo'
import Link from 'next/link'

export const CONTACT_EMAIL = 'hello@kinely.app'

const linkClass =
  'font-dm-sans font-light text-[13px] text-white/55 hover:text-white/85 transition-colors whitespace-nowrap'

const pages = [
  { href: '/the-book', label: 'The book' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
]

const legal = [
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
  { href: '/delete-account', label: 'Delete your account' },
]

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-night px-4 sm:px-8 pt-12 pb-8">
      <div className="max-w-content mx-auto">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="space-y-4">
            <KinelyLogo size="sm" onDark />
            <p className="font-dm-sans font-light text-[14px] text-white/55">
              Questions or ideas?{' '}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-white/80 underline decoration-white/25 underline-offset-4 hover:text-white transition-colors"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>
          <nav aria-label="Footer" className="flex gap-14">
            <ul className="space-y-3">
              {pages.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className={linkClass}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-3">
              {legal.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className={linkClass}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mt-12 border-t border-white/5 pt-6 font-dm-sans font-light text-[12px] text-white/40">
          © {new Date().getFullYear()} Kinely Inc. · A little closer, every day.
        </p>
      </div>
    </footer>
  )
}
