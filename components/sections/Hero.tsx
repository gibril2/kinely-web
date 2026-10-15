import Image from 'next/image'
import heroPhoto from '@/public/images/hero-phone-desk.png'
import { GetTheApp } from '../ui/GetTheApp'

// Photo of the real Today screen on a desk. The photo's left half is dark
// wall, so the copy sits there on desktop; on phones the copy stacks above
// a crop that keeps the phone in frame.
export function Hero() {
  return (
    <section data-nav-dark className="relative bg-night text-night-text overflow-hidden">
      <div className="relative lg:min-h-[100svh] flex flex-col lg:justify-center">
        <div className="relative z-10 px-4 sm:px-8 lg:px-12 pt-28 pb-10 lg:py-32 max-w-content w-full mx-auto">
          <div className="max-w-[560px]">
            <h1
              className="font-cormorant font-normal text-night-text mb-6 motion-safe:animate-[rise_700ms_cubic-bezier(0.22,1,0.36,1)_80ms_both]"
              style={{ fontSize: 'clamp(2.75rem, 5.6vw, 5rem)', lineHeight: 1.0, letterSpacing: '-0.015em', overflowWrap: 'anywhere' }}
            >
              One question a day for the people closest to you.
            </h1>
            <p className="font-dm-sans font-light text-[17px] sm:text-[18px] leading-[1.7] text-night-text/80 max-w-[44ch] mb-8 motion-safe:animate-[rise_700ms_cubic-bezier(0.22,1,0.36,1)_220ms_both]">
              Start a private circle with your family or friends. Kinely sends everyone the same question each day,
              and every answer is saved.
            </p>
            <div className="max-w-[460px] motion-safe:animate-[rise_700ms_cubic-bezier(0.22,1,0.36,1)_360ms_both]">
              <GetTheApp dark />
            </div>
          </div>
        </div>

        {/* Desktop: full-bleed photo behind the copy, darkened on the left for contrast. */}
        <div className="hidden lg:block absolute inset-0">
          <Image src={heroPhoto} alt="Kinely's Today screen on a phone on a sunlit desk" fill priority sizes="100vw" placeholder="blur" className="object-cover object-[70%_50%]" />
          <div className="absolute inset-0 bg-gradient-to-r from-night from-10% via-night/60 via-40% to-transparent to-65%" aria-hidden />
        </div>

        {/* Phone: photo below the copy, cropped to the phone. */}
        <div className="lg:hidden relative h-[480px] sm:h-[560px]">
          <Image
            src={heroPhoto}
            alt="Kinely's Today screen on a phone: today's question with the people who've answered"
            fill
            sizes="100vw"
            placeholder="blur"
            className="object-cover object-[78%_60%]"
          />
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-night to-transparent" aria-hidden />
        </div>
      </div>
    </section>
  )
}
