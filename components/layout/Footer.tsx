import { KinelyLogo } from '../ui/Logo'
import Link from 'next/link'

export function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        background: '#2C2416',
        borderColor: 'rgba(255,255,255,0.05)',
        padding: '28px 56px',
      }}
    >
      <div className="max-w-content mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <KinelyLogo size="sm" muted />
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="font-dm-sans font-light text-[11px] text-white/25 hover:text-white/50 transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="font-dm-sans font-light text-[11px] text-white/25 hover:text-white/50 transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-end gap-1 text-center md:text-right">
          <p className="font-dm-sans font-light text-[12px] text-white/[0.18]">
            © 2025 Kinely Inc. · Built for families, by people who love theirs.
          </p>
        </div>
      </div>
    </footer>
  )
}
