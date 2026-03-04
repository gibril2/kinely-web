import Link from 'next/link'
import { WaitlistForm } from '../ui/WaitlistForm'

export function Closing() {
  return (
    <section
      className="text-center"
      style={{
        background: '#2C2416',
        padding: '120px 56px',
        borderTop: '1px solid rgba(255,255,255,0.04)',
        backgroundImage: 'radial-gradient(ellipse 700px 400px at 50% 50%, rgba(196,84,26,0.10) 0%, transparent 65%)',
      }}
    >
      <div className="max-w-[640px] mx-auto">
        <p className="font-dm-sans font-light uppercase tracking-[0.08em] mb-8" style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)' }}>
          Your family&apos;s story is happening right now
        </p>

        <h2 className="font-cormorant font-normal text-white mb-6" style={{ fontSize: 'clamp(42px, 5.5vw, 72px)', lineHeight: 1.05 }}>
          Most of it will<br /><em className="italic text-ember-light">disappear.</em><br />Yours doesn&apos;t have to.
        </h2>

        <p className="font-dm-sans font-light mx-auto mb-12" style={{ fontSize: 16, color: 'rgba(255,255,255,0.4)', maxWidth: 440, lineHeight: 1.65 }}>
          Join the founding families helping us build the most important app a family will ever use.
        </p>

        <div className="flex flex-col items-center gap-6">
          <Link
            href="/pricing"
            className="font-dm-sans font-medium text-warm-white bg-ember hover:bg-ember-light rounded-pill transition-all duration-200 hover:-translate-y-px"
            style={{ fontSize: 16, padding: '16px 40px' }}
          >
            Start your family&apos;s story →
          </Link>

          <div className="w-full max-w-[400px]">
            <p className="font-dm-sans font-light text-center mb-3" style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)' }}>
              Not ready yet? Join the waitlist — free.
            </p>
            <WaitlistForm dark />
          </div>
        </div>
      </div>
    </section>
  )
}
