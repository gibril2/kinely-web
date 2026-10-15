import Image from 'next/image'
import heroPhoto from '@/public/images/hero-phone-desk.png'

// The hero photo's left half is a dark wall with leaf shadows. Cropped there and
// dimmed, it lets darker sections sit in the same room as the hero.
export function RoomBackdrop({ position = '8% 18%', strength = 0.45 }: { position?: string; strength?: number }) {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      <Image
        src={heroPhoto}
        alt=""
        fill
        sizes="100vw"
        className="object-cover scale-[1.6] origin-top-left"
        style={{ objectPosition: position, opacity: strength }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-lamp/40 via-lamp/70 to-lamp" />
      {/* The photo's phone sits on its right side; fade that side out so only the wall and leaf shadows show. */}
      <div className="absolute inset-y-0 right-0 w-[22%] bg-gradient-to-l from-lamp/90 to-transparent" />
    </div>
  )
}
