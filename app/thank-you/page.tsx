import { KinelyLogo } from '@/components/ui/Logo'
import Link from 'next/link'

export default function ThankYouPage() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
      style={{ background: '#F7F2EA' }}
    >
      <Link href="/" className="mb-16">
        <KinelyLogo size="lg" />
      </Link>

      <h1
        className="font-cormorant font-normal text-charcoal mb-6"
        style={{ fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: 1.05, maxWidth: 600 }}
      >
        Your family&apos;s story starts here.
      </h1>

      <p
        className="font-dm-sans font-light text-charcoal-lt mb-4"
        style={{ fontSize: 17, lineHeight: 1.7, maxWidth: 480 }}
      >
        We&apos;ll be in touch with next steps. Thank you for believing in Kinely.
      </p>

      <p
        className="font-dm-sans font-light text-charcoal-lt mb-12"
        style={{ fontSize: 15, lineHeight: 1.7, maxWidth: 480 }}
      >
        We&apos;re building carefully and intentionally. You&apos;ll receive an email from
        our team soon with everything you need to know about what happens next
        and when to expect the app.
      </p>

      <a
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent("I just backed @kinelyfamily — a daily question that brings your family together and builds into a hardcover book at year's end. Worth $30 of anyone's time. kinely.com")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="font-dm-sans font-medium text-[14px] text-warm-white bg-charcoal hover:bg-ember rounded-pill px-8 py-3.5 transition-all duration-200"
      >
        Tell someone you love about Kinely →
      </a>

      <div
        className="mt-20 pt-8 w-full max-w-[400px]"
        style={{ borderTop: '1px solid rgba(44,36,22,0.08)' }}
      >
        <Link
          href="/"
          className="font-dm-sans font-light text-charcoal-lt text-[13px] hover:text-charcoal transition-colors"
        >
          ← Back to home
        </Link>
      </div>
    </main>
  )
}
