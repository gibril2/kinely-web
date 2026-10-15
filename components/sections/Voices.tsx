import Image from 'next/image'
import voicePhoto from '@/public/images/voice-terracotta.png'

// Photo of the app's voice review bar on a terracotta wall, widget on the right,
// empty lit wall on the left for the copy. On phones the copy stacks above a crop of the widget.
export function Voices() {
  return (
    <section id="voices" className="relative bg-ember-deep text-night-text overflow-hidden">
      <div className="hidden lg:block absolute inset-0">
        <Image
          src={voicePhoto}
          alt="Kinely's voice answer bar: a 43-second recording ready to send, resting on a sunlit terracotta table"
          fill
          sizes="100vw"
          placeholder="blur"
          className="object-cover object-[80%_50%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ember-deep/60 via-ember-deep/20 to-transparent" aria-hidden />
      </div>

      <div className="relative px-4 sm:px-8 pt-24 pb-12 lg:py-40">
        <div className="max-w-content mx-auto">
          <div className="max-w-[540px]">
            <h2
              className="font-cormorant font-normal text-night-text max-w-[14ch] mb-8"
              style={{ fontSize: 'clamp(2.5rem, 5.4vw, 4.5rem)', lineHeight: 1.0, letterSpacing: '-0.01em' }}
            >
              The stories you haven&apos;t asked yet.
            </h2>
            <div className="space-y-5 max-w-[46ch] font-dm-sans font-light text-[17px] leading-[1.75] text-night-text/90">
              <p>
                How your grandparents met. What your dad was like at twenty. Everyone means to ask about these
                stories, and most people never do.
              </p>
              <p>
                Kinely asks for you, every day. Anyone who would rather talk than type can press record, and their
                voice is saved with the answer.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden relative h-[260px] sm:h-[380px]">
        <Image
          src={voicePhoto}
          alt="Kinely's voice answer bar: a 43-second recording ready to send, resting on a sunlit terracotta table"
          fill
          sizes="100vw"
          placeholder="blur"
          className="object-cover object-[97%_72%]"
        />
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-ember-deep to-transparent" aria-hidden />
      </div>
    </section>
  )
}
