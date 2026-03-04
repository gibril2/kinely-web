import Image from 'next/image'

export function PhotographyBreak() {
  return (
    <div className="relative h-[280px] md:h-[400px] overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1520264517-8bde5e35f3e2?w=1600&q=80"
        alt="A person in the evening, phone in hand, reading something that matters to them"
        fill
        className="object-cover object-[center_40%]"
        sizes="100vw"
      />
      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, transparent 30%, rgba(44,36,22,0.7) 100%)',
        }}
      />
      {/* Text overlay */}
      <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-11">
        <p
          className="font-cormorant italic font-normal text-warm-white"
          style={{ fontSize: 'clamp(22px, 3vw, 32px)' }}
        >
          For the parent 800 miles from home.
        </p>
      </div>
    </div>
  )
}
