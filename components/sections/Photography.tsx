import Image from 'next/image'

const photos = [
  {
    src: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=800&q=80',
    alt: 'Family gathered around a dinner table in warm evening light',
  },
  {
    src: 'https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=800&q=80',
    alt: 'Parent and child in genuine conversation, warm natural light',
  },
  {
    src: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=80',
    alt: 'Hands holding an open hardcover book in warm light',
  },
]

export function Photography() {
  return (
    <div>
      <div className="grid md:grid-cols-3 h-[220px] md:h-[500px]">
        {photos.map(({ src, alt }) => (
          <div key={src} className="relative overflow-hidden">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        ))}
      </div>
      <div
        className="text-center py-6"
        style={{ borderBottom: '1px solid rgba(44,36,22,0.07)' }}
      >
        <p
          className="font-dm-sans font-light text-charcoal-lt uppercase tracking-[0.06em]"
          style={{ fontSize: 13 }}
        >
          The question. The answers. The book.
        </p>
      </div>
    </div>
  )
}
